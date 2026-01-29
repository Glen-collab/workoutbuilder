import { useState } from 'react';
import useWorkoutState from './hooks/useWorkoutState';
import useProgramAPI from './hooks/useProgramAPI';
import { suggestBaseMax, isStrengthBlock } from './utils/percentageCalc';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ProfileSetup from './components/screens/ProfileSetup';
import BuilderScreen from './components/builder/BuilderScreen';
import BlockTypeSelector from './components/builder/BlockTypeSelector';
import CircuitTypeSelector from './components/builder/CircuitTypeSelector';
import ExerciseModal from './components/exercises/ExerciseModal';
import SaveProgramModal from './components/programs/SaveProgramModal';
import ManagePrograms from './components/programs/ManagePrograms';

export default function App() {
  const workoutState = useWorkoutState();
  const programAPI = useProgramAPI();

  // Screen navigation
  const [screen, setScreen] = useState('welcome');

  // Modal states
  const [showBlockTypeSelector, setShowBlockTypeSelector] = useState(false);
  const [showCircuitTypeSelector, setShowCircuitTypeSelector] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [exerciseModalBlockId, setExerciseModalBlockId] = useState(null);
  const [exerciseModalBlockType, setExerciseModalBlockType] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [insertPosition, setInsertPosition] = useState(null);

  // ── Welcome Screen ──
  const handleBuildNew = () => setScreen('profile');

  // ── Profile Setup ──
  const handleProfileComplete = (profile) => {
    workoutState.setDaysPerWeek(profile.daysPerWeek || 3);
    workoutState.setTotalWeeks(profile.totalWeeks || 4);
    if (profile.mainMaxes) {
      workoutState.setMainMaxes(profile.mainMaxes);
    }
    setScreen('builder');
  };

  // ── Block Type Selection ──
  const handleAddBlock = (pos) => {
    setInsertPosition(pos || null);
    setShowBlockTypeSelector(true);
  };

  const handleBlockTypeSelect = (type) => {
    setShowBlockTypeSelector(false);
    if (type === 'circuit') {
      setShowCircuitTypeSelector(true);
      return;
    }
    if (type === 'premade') {
      // Premade handling - placeholder for future implementation
      return;
    }
    workoutState.addBlock({ type }, insertPosition);
    setInsertPosition(null);
  };

  // ── Circuit Type Selection ──
  const handleCircuitTypeSelect = (circuitType) => {
    setShowCircuitTypeSelector(false);
    workoutState.addBlock({ type: 'circuit', circuitType }, insertPosition);
    setInsertPosition(null);
  };

  // ── Exercise Modal ──
  const handleOpenExerciseModal = (blockId, blockType) => {
    setExerciseModalBlockId(blockId);
    setExerciseModalBlockType(blockType);
    setShowExerciseModal(true);
  };

  const handleSelectExercise = (exercise) => {
    if (!exerciseModalBlockId) return;

    if (isStrengthBlock(exerciseModalBlockType)) {
      const now = Date.now();
      const enrichedExercise = {
        ...exercise,
        baseMax: suggestBaseMax(exercise.name),
        isPercentageBased: true,
        sets: [
          { id: now, reps: 10, percentage: 70, isWarmup: false, manualWeight: null },
          { id: now + 1, reps: 10, percentage: 70, isWarmup: false, manualWeight: null },
          { id: now + 2, reps: 10, percentage: 70, isWarmup: false, manualWeight: null },
        ],
      };
      workoutState.addExerciseToBlock(exerciseModalBlockId, enrichedExercise);
    } else {
      workoutState.addExerciseToBlock(exerciseModalBlockId, {
        ...exercise,
        sets: [],
      });
    }

    setShowExerciseModal(false);
    setExerciseModalBlockId(null);
    setExerciseModalBlockType(null);
  };

  // ── Save Program ──
  const handleOpenSave = () => setShowSaveModal(true);

  const handleSave = async (programInfo) => {
    const data = workoutState.getAllWorkoutsForSave();
    const payload = {
      ...programInfo,
      ...data,
    };

    try {
      if (workoutState.loadedProgram) {
        payload.programId = workoutState.loadedProgram.id;
        payload.accessCode = workoutState.loadedProgram.accessCode;
        await programAPI.updateProgram(payload);
      } else {
        const result = await programAPI.saveProgram(payload);
        if (result && result.programId) {
          workoutState.loadProgram({
            id: result.programId,
            accessCode: result.accessCode,
            name: programInfo.programName,
            ...data,
          });
        }
      }
      setShowSaveModal(false);
    } catch {
      // Error is handled by the hook and displayed via programAPI.error
    }
  };

  // ── Manage Programs ──
  const handleOpenManage = () => setShowManageModal(true);

  const handleLoadProgram = (program) => {
    workoutState.loadProgram(program);
    setShowManageModal(false);
    setScreen('builder');
  };

  // ── Build workoutState props for BuilderScreen ──
  const builderWorkoutState = {
    currentWeek: workoutState.currentWeek,
    currentDay: workoutState.currentDay,
    totalWeeks: workoutState.totalWeeks,
    daysPerWeek: workoutState.daysPerWeek,
    blocks: workoutState.workoutBlocks,
    mainMaxes: workoutState.mainMaxes,
    switchDay: workoutState.switchDay,
    switchWeek: workoutState.switchWeek,
    copyWeek: workoutState.copyWeekToNext,
    copyAllWeeks: workoutState.copyWeekToAll,
    addBlock: handleAddBlock,
    deleteBlock: workoutState.removeBlock,
    toggleCollapse: (blockId) =>
      workoutState.updateBlock(blockId, {
        collapsed: !workoutState.workoutBlocks.find((b) => b.id === blockId)?.collapsed,
      }),
    insertAbove: (blockId) => {
      const idx = workoutState.workoutBlocks.findIndex((b) => b.id === blockId);
      handleAddBlock({ index: idx, mode: 'above' });
    },
    insertBelow: (blockId) => {
      const idx = workoutState.workoutBlocks.findIndex((b) => b.id === blockId);
      handleAddBlock({ index: idx, mode: 'below' });
    },
    updateBlock: workoutState.updateBlock,
    addExercise: handleOpenExerciseModal,
    removeExercise: workoutState.removeExerciseFromBlock,
    updateExercise: workoutState.updateExerciseInBlock,
    updateSet: workoutState.updateExerciseSet,
    addSet: workoutState.addSetToExercise,
    removeSet: workoutState.removeSetFromExercise,
    duplicateSet: workoutState.duplicateSet,
  };

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen onNewProgram={handleBuildNew} onManagePrograms={() => setShowManageModal(true)} />
      )}

      {screen === 'profile' && (
        <ProfileSetup
          onComplete={handleProfileComplete}
          onBack={() => setScreen('welcome')}
        />
      )}

      {screen === 'builder' && (
        <BuilderScreen
          workoutState={builderWorkoutState}
          onBack={() => setScreen('welcome')}
          onSave={handleOpenSave}
          onManage={handleOpenManage}
        />
      )}

      {/* Modals */}
      <BlockTypeSelector
        isOpen={showBlockTypeSelector}
        onClose={() => {
          setShowBlockTypeSelector(false);
          setInsertPosition(null);
        }}
        onSelect={handleBlockTypeSelect}
        insertPosition={insertPosition}
      />

      <CircuitTypeSelector
        isOpen={showCircuitTypeSelector}
        onClose={() => {
          setShowCircuitTypeSelector(false);
          setInsertPosition(null);
        }}
        onSelect={handleCircuitTypeSelect}
      />

      <ExerciseModal
        isOpen={showExerciseModal}
        onClose={() => {
          setShowExerciseModal(false);
          setExerciseModalBlockId(null);
          setExerciseModalBlockType(null);
        }}
        blockType={exerciseModalBlockType}
        onSelectExercise={handleSelectExercise}
      />

      <SaveProgramModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onSave={handleSave}
        loadedProgram={workoutState.loadedProgram}
        loading={programAPI.loading}
      />

      <ManagePrograms
        isOpen={showManageModal}
        onClose={() => setShowManageModal(false)}
        onLoadProgram={handleLoadProgram}
        apiHook={programAPI}
      />
    </>
  );
}
