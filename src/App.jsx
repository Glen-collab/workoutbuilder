import { useState, useEffect } from 'react';
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
import PreMadeWorkoutPicker from './components/builder/PreMadeWorkoutPicker';

export default function App() {
  const workoutState = useWorkoutState();
  const programAPI = useProgramAPI();

  // Override mode (launched from trainer dashboard)
  const [overrideContext, setOverrideContext] = useState(null); // { accessCode, email }
  const [overrideLoading, setOverrideLoading] = useState(false);
  const [overrideSaveStatus, setOverrideSaveStatus] = useState(null); // 'saved' | 'error' | null

  // Screen navigation
  const [screen, setScreen] = useState('welcome');

  // Modal states
  const [showBlockTypeSelector, setShowBlockTypeSelector] = useState(false);
  const [showCircuitTypeSelector, setShowCircuitTypeSelector] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [exerciseModalBlockId, setExerciseModalBlockId] = useState(null);
  const [exerciseModalBlockType, setExerciseModalBlockType] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedAccessCode, setSavedAccessCode] = useState(null);
  const [showManageModal, setShowManageModal] = useState(false);
  const [showPreMadePicker, setShowPreMadePicker] = useState(false);
  const [insertPosition, setInsertPosition] = useState(null);

  // ── Detect override mode from URL params ──
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessCode = params.get('accessCode');
    const email = params.get('email');
    const mode = params.get('mode');

    if (accessCode && email && mode === 'override') {
      setOverrideContext({ accessCode, email });
      setOverrideLoading(true);
      programAPI
        .loadProgramByCode(accessCode, email)
        .then((result) => {
          if (result && result.success && result.data) {
            const prog = result.data;
            workoutState.loadProgram({
              id: prog.id || prog.programId,
              accessCode: prog.accessCode || accessCode,
              name: prog.name || prog.programName || 'Client Program',
              allWorkouts: prog.programData?.allWorkouts || prog.allWorkouts || {},
              mainMaxes: prog.programData?.mainMaxes || prog.mainMaxes,
              daysPerWeek: prog.programData?.daysPerWeek || prog.daysPerWeek || 3,
              totalWeeks: prog.programData?.totalWeeks || prog.totalWeeks || 4,
            });
            setScreen('builder');
          }
        })
        .catch((err) => {
          console.error('Failed to load program for override:', err);
        })
        .finally(() => setOverrideLoading(false));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      setShowPreMadePicker(true);
      return;
    }
    workoutState.addBlock({ type }, insertPosition);
    setInsertPosition(null);
  };

  const handleSelectPreMade = (workout) => {
    if (!workout || !workout.blocks) return;
    for (const pmBlock of workout.blocks) {
      const exercises = (pmBlock.exercises || []).map((ex) => ({
        id: Date.now() + Math.random(),
        name: ex.name || '',
        setsCount: ex.sets || '',
        reps: String(ex.reps || ''),
        weight: ex.weight || '',
        rest: ex.rest || '',
        notes: '',
        qualifier: '',
      }));
      workoutState.addBlock({
        type: pmBlock.type || 'straight-set',
        exercises,
      });
    }
    setShowPreMadePicker(false);
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
        setShowSaveModal(false);
        setSavedAccessCode(workoutState.loadedProgram.accessCode);
      } else {
        const result = await programAPI.saveProgram(payload);
        console.log('Save result:', JSON.stringify(result));
        const programId = result?.programId || result?.data?.programId;
        const accessCode = result?.accessCode || result?.data?.accessCode;
        console.log('Parsed:', { programId, accessCode });
        if (programId) {
          workoutState.loadProgram({
            id: programId,
            accessCode: accessCode,
            name: programInfo.programName,
            ...data,
          });
          setShowSaveModal(false);
          setSavedAccessCode(accessCode);
        }
      }
    } catch (err) {
      console.error('Save failed:', err);
      alert('Save failed: ' + (err.message || 'Unknown error'));
    }
  };

  // ── Override Save (per week/day) ──
  const handleSaveOverride = async () => {
    if (!overrideContext) return;
    const week = workoutState.currentWeek;
    const day = workoutState.currentDay;
    const data = workoutState.getAllWorkoutsForSave();
    const dayKey = `${week}-${day}`;
    const workoutData = data.allWorkouts?.[dayKey] || workoutState.workoutBlocks;

    try {
      await programAPI.saveUserOverride(
        overrideContext.accessCode,
        overrideContext.email,
        week,
        day,
        workoutData,
        'Trainer override from builder'
      );
      setOverrideSaveStatus('saved');
      setTimeout(() => setOverrideSaveStatus(null), 3000);
    } catch {
      setOverrideSaveStatus('error');
      setTimeout(() => setOverrideSaveStatus(null), 4000);
    }
  };

  const handleRevertOverride = async () => {
    if (!overrideContext) return;
    try {
      await programAPI.deleteUserOverride(
        overrideContext.accessCode,
        overrideContext.email,
        workoutState.currentWeek,
        workoutState.currentDay
      );
      // Reload the base program day
      const result = await programAPI.loadProgramByCode(
        overrideContext.accessCode,
        overrideContext.email
      );
      if (result?.success && result.data) {
        const prog = result.data;
        const allWorkouts = prog.programData?.allWorkouts || prog.allWorkouts || {};
        const dayKey = `${workoutState.currentWeek}-${workoutState.currentDay}`;
        workoutState.loadProgram({
          id: prog.id,
          accessCode: overrideContext.accessCode,
          name: prog.name || 'Client Program',
          allWorkouts,
          mainMaxes: prog.programData?.mainMaxes || prog.mainMaxes,
          daysPerWeek: prog.programData?.daysPerWeek || workoutState.daysPerWeek,
          totalWeeks: prog.programData?.totalWeeks || workoutState.totalWeeks,
        });
        // Navigate to same week/day
        workoutState.switchWeek(workoutState.currentWeek);
        workoutState.switchDay(workoutState.currentDay);
      }
      setOverrideSaveStatus('saved');
      setTimeout(() => setOverrideSaveStatus(null), 3000);
    } catch {
      setOverrideSaveStatus('error');
      setTimeout(() => setOverrideSaveStatus(null), 4000);
    }
  };

  const handleGoToDashboard = () => {
    const isLocal = window.location.hostname === 'localhost';
    const dashboardUrl = isLocal
      ? 'http://localhost:5175/'
      : (window.gwbConfig?.dashboardUrl || '/trainer-dashboard/');
    // Open in new tab so builder state is preserved
    window.open(dashboardUrl, '_blank');
  };

  const handleExitOverrideMode = () => {
    // Clear override context and URL params, return to normal builder
    setOverrideContext(null);
    setOverrideSaveStatus(null);
    // Clean URL params without reload
    const url = new URL(window.location);
    url.searchParams.delete('accessCode');
    url.searchParams.delete('email');
    url.searchParams.delete('mode');
    window.history.replaceState({}, '', url);
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
    setMainMaxes: workoutState.setMainMaxes,
    allWorkouts: workoutState.allWorkouts,
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

      {overrideLoading && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '12px' }}>
          <div style={{ width: 40, height: 40, border: '4px solid #e5e7eb', borderTopColor: '#667eea', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <p style={{ color: '#666', fontSize: 14 }}>Loading client program...</p>
        </div>
      )}

      {screen === 'builder' && (
        <BuilderScreen
          workoutState={builderWorkoutState}
          onBack={() => setScreen('welcome')}
          onSave={overrideContext ? handleSaveOverride : handleOpenSave}
          onManage={overrideContext ? null : handleOpenManage}
          overrideContext={overrideContext}
          overrideSaveStatus={overrideSaveStatus}
          onRevertOverride={overrideContext ? handleRevertOverride : null}
          onGoToDashboard={handleGoToDashboard}
          onExitOverrideMode={overrideContext ? handleExitOverrideMode : null}
        />
      )}

      {/* Access Code Toast */}
      {savedAccessCode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-white rounded-xl shadow-2xl border border-gray-200 px-6 py-4 max-w-sm w-full">
          <div className="text-center">
            <div className="text-[13px] font-semibold text-green-600 mb-1">Program Saved!</div>
            <div className="text-[11px] text-gray-400 uppercase font-semibold mb-2">Access Code</div>
            <div className="text-[22px] font-extrabold tracking-wider text-gray-900 bg-gray-100 rounded-lg py-2 px-4 select-all">{savedAccessCode}</div>
            <p className="text-[12px] text-gray-400 mt-2">Share this code with your client so they can access their program.</p>
            <button
              onClick={() => setSavedAccessCode(null)}
              className="mt-3 px-5 py-2 text-[13px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
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

      <PreMadeWorkoutPicker
        isOpen={showPreMadePicker}
        onClose={() => setShowPreMadePicker(false)}
        onSelectWorkout={handleSelectPreMade}
      />
    </>
  );
}
