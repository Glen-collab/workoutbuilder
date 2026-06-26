import { useState, useEffect, useRef } from 'react';
import useWorkoutState from './hooks/useWorkoutState';
import useProgramAPI from './hooks/useProgramAPI';
import { suggestBaseMax, isStrengthBlock } from './utils/percentageCalc';
import { applyExerciseDefaults } from './data/exerciseDefaults';
import { BuilderAuthProvider, useBuilderAuth, BuilderLoginScreen } from './components/auth/BuilderAuth';
import { CoachVideosProvider, useCoachVideos } from './components/CoachVideosContext';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ExerciseVideoLibrary from './components/exercises/ExerciseVideoLibrary';
import BuilderScreen from './components/builder/BuilderScreen';
import BlockTypeSelector from './components/builder/BlockTypeSelector';
import CircuitTypeSelector from './components/builder/CircuitTypeSelector';
import ExerciseModal from './components/exercises/ExerciseModal';
import SaveProgramModal from './components/programs/SaveProgramModal';
import ManagePrograms from './components/programs/ManagePrograms';
import TravelSaveModal from './components/programs/TravelSaveModal';
import ManageTravelWorkouts from './components/programs/ManageTravelWorkouts';
import PreMadeWorkoutPicker from './components/builder/PreMadeWorkoutPicker';
import ProgressionView from './components/builder/ProgressionView';
import VolumeView from './components/builder/VolumeView';
import CnsLoadView from './components/builder/CnsLoadView';

export default function App() {
  return (
    <BuilderAuthProvider>
      <AuthGate />
    </BuilderAuthProvider>
  );
}

function AuthGate() {
  const { user, loading, login, logout } = useBuilderAuth();

  // Allow override mode without login (trainer dashboard opens builder in override mode)
  const params = new URLSearchParams(window.location.search);
  const isOverrideMode = params.get('mode') === 'override';

  if (loading) return <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading...</div>;
  if (!user && !isOverrideMode) return <BuilderLoginScreen onLogin={login} />;

  return (
    <CoachVideosProvider>
      <BuilderApp builderUser={user} onLogout={logout} />
    </CoachVideosProvider>
  );
}

function BuilderApp({ builderUser, onLogout }) {
  const workoutState = useWorkoutState();
  const programAPI = useProgramAPI();
  const coachVideos = useCoachVideos();

  // ── Unsaved-changes guard ──
  // Snapshot the program at the last save/load; if the live program differs,
  // there are unsaved edits. Warns before leaving (My App button + tab close).
  const savedSnapshotRef = useRef(null);
  const bypassUnloadRef = useRef(false);
  const snapshot = () => {
    try {
      const d = workoutState.getAllWorkoutsForSave();
      return JSON.stringify({ allWorkouts: d.allWorkouts, mainMaxes: d.mainMaxes, daysPerWeek: d.daysPerWeek, totalWeeks: d.totalWeeks });
    } catch { return null; }
  };
  const isDirty = () => savedSnapshotRef.current !== null && snapshot() !== savedSnapshotRef.current;

  // Re-baseline whenever a program is loaded, saved, or cleared — every one of
  // those changes loadedProgram's identity. setTimeout(0) lets the state/refs
  // settle first so the snapshot reflects the just-loaded program.
  useEffect(() => {
    const t = setTimeout(() => { savedSnapshotRef.current = snapshot(); }, 0);
    return () => clearTimeout(t);
  }, [workoutState.loadedProgram]); // eslint-disable-line react-hooks/exhaustive-deps

  // Native browser warning on tab close / refresh / back when there are unsaved
  // edits. Bypassed by the My App button (which runs its own confirm first).
  useEffect(() => {
    const handler = (e) => {
      if (!bypassUnloadRef.current && isDirty()) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGoToApp = () => {
    if (isDirty() && !window.confirm('You have unsaved changes in this program. Leave and go back to the app anyway?')) return;
    bypassUnloadRef.current = true; // don't double-prompt via beforeunload
    window.location.href = 'https://app.bestrongagain.com';
  };

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
  const [replaceExerciseIndex, setReplaceExerciseIndex] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedAccessCode, setSavedAccessCode] = useState(null);
  const [showManageModal, setShowManageModal] = useState(false);
  const [showPreMadePicker, setShowPreMadePicker] = useState(false);
  const [showTravelSaveModal, setShowTravelSaveModal] = useState(false);
  const [showManageTravelModal, setShowManageTravelModal] = useState(false);
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
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
      // Retry is now handled by the core request() function in useProgramAPI
      (async () => {
        try {
          const result = await programAPI.loadProgramByCode(accessCode, email);
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
        } catch (err) {
          console.error('Failed to load program for override:', err);
        }
        setOverrideLoading(false);
      })();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Welcome Screen ──
  // Coaches enter via their dashboard — skip profile setup, jump straight
  // to builder with sensible defaults. Days/weeks are editable inside the builder.
  const handleBuildNew = () => {
    workoutState.clearAll();
    workoutState.setDaysPerWeek(4);
    workoutState.setTotalWeeks(4);
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
    setReplaceExerciseIndex(null);
    setShowExerciseModal(true);
  };

  const handleReplaceExercise = (blockId, exerciseIndex, blockType) => {
    setExerciseModalBlockId(blockId);
    setExerciseModalBlockType(blockType);
    setReplaceExerciseIndex(exerciseIndex);
    setShowExerciseModal(true);
  };

  const handleSelectExercise = (exercise) => {
    if (!exerciseModalBlockId) return;

    // Auto-attach the coach's own uploaded video for this exercise (by name) if
    // it has none — so a video uploaded once follows the exercise into every
    // program, not just the one it was first added to.
    let baseExercise = exercise;
    if (!exercise.youtube && !exercise.isUserDefined) {
      const myVid = coachVideos.getVideo(exercise.name);
      if (myVid) baseExercise = { ...exercise, youtube: myVid };
    }

    let newExercise;
    if (isStrengthBlock(exerciseModalBlockType)) {
      newExercise = {
        ...baseExercise,
        baseMax: suggestBaseMax(baseExercise),
        setsCount: '3',
        reps: '10',
        weight: '',
        sets: [],
      };
    } else {
      newExercise = applyExerciseDefaults({ ...baseExercise, sets: [] });
    }

    if (replaceExerciseIndex !== null) {
      // Replace: keep the position, swap the exercise
      workoutState.updateExerciseInBlock(exerciseModalBlockId, replaceExerciseIndex, newExercise);
    } else {
      // Add: append to end
      workoutState.addExerciseToBlock(exerciseModalBlockId, newExercise);
    }

    setShowExerciseModal(false);
    setExerciseModalBlockId(null);
    setExerciseModalBlockType(null);
    setReplaceExerciseIndex(null);
  };

  // ── Save Program ──
  const handleOpenSave = () => setShowSaveModal(true);

  const handleSave = async (programInfo) => {
    const data = workoutState.getAllWorkoutsForSave();
    const payload = {
      ...programInfo,
      programData: {
        allWorkouts: data.allWorkouts,
        mainMaxes: data.mainMaxes,
        daysPerWeek: data.daysPerWeek,
        totalWeeks: data.totalWeeks,
      },
    };

    try {
      if (workoutState.loadedProgram && !programInfo.saveAsNew) {
        payload.programId = workoutState.loadedProgram.id;
        payload.accessCode = workoutState.loadedProgram.accessCode;
        const result = await programAPI.updateProgram(payload);
        // Check if a new code was generated
        const newCode = result?.accessCode || result?.data?.accessCode || workoutState.loadedProgram.accessCode;
        const codeRegenerated = result?.codeRegenerated || result?.data?.codeRegenerated;
        // Patch loadedProgram metadata so reopening Update shows the latest
        // values — without resetting the in-progress workouts state.
        workoutState.updateLoadedProgramMeta({
          accessCode: codeRegenerated ? newCode : workoutState.loadedProgram.accessCode,
          name: programInfo.programName,
          nickname: programInfo.programNickname || '',
        });
        setShowSaveModal(false);
        setSavedAccessCode(newCode);
      } else {
        // New program OR "Save as New" from an existing program
        delete payload.saveAsNew;
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
            nickname: programInfo.programNickname || '',
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

  const handleGoToProgressions = () => setScreen('progressions');
  const handleGoToVolume       = () => setScreen('volume');
  const handleGoToCnsLoad      = () => setScreen('cnsload');

  const handleGoToDashboard = () => {
    const isLocal = window.location.hostname === 'localhost';
    const dashboardUrl = isLocal
      ? 'http://localhost:5175/'
      : (window.gwbConfig?.dashboardUrl || 'https://bsa-trainer-dashboard.netlify.app');
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

  // ── Travel Workouts ──
  const handleOpenTravelSave = () => setShowTravelSaveModal(true);

  const handleSaveTravelWorkout = async (travelInfo) => {
    // Modal passes complete payload including workoutData per day
    const result = await programAPI.saveTravelWorkout(travelInfo);
    // Check PHP response — throw if API returned success: false
    if (result && result.success === false) {
      throw new Error(result.message || 'Save failed');
    }
    return result;
  };

  const handleLoadTravelWorkout = (travelWorkouts) => {
    // Accepts an array of travel workout objects (1 or more days)
    // Normalize day_number to integer (PHP fetch_assoc returns strings)
    const sorted = [...travelWorkouts]
      .map((tw) => ({ ...tw, day_number: Number(tw.day_number) }))
      .sort((a, b) => a.day_number - b.day_number);
    const allWorkouts = {};
    for (const tw of sorted) {
      const blocks = Array.isArray(tw.workout_data)
        ? tw.workout_data
        : JSON.parse(tw.workout_data || '[]');
      const dayKey = `1-${tw.day_number}`;
      allWorkouts[dayKey] = blocks;
    }
    const daysCount = sorted.length > 0 ? Math.max(...sorted.map((tw) => tw.day_number)) : 1;
    const first = sorted[0] || {};
    const name = sorted.length === 1
      ? (first.workout_name || `Travel: ${first.equipment_type} Day ${first.day_number}`)
      : `Travel: ${first.equipment_type} (${sorted.length} days)`;

    workoutState.loadProgram({
      id: null,
      accessCode: null,
      name,
      allWorkouts,
      mainMaxes: workoutState.mainMaxes,
      daysPerWeek: daysCount,
      totalWeeks: 1,
    });
    setShowManageTravelModal(false);
    setScreen('builder');
  };

  // ── Manage Programs ──
  const handleOpenManage = () => setShowManageModal(true);

  const handleLoadProgram = (program) => {
    // Unwrap programData from API response into the shape loadProgram expects
    const pd = program.programData || {};
    workoutState.loadProgram({
      id: program.id,
      accessCode: program.accessCode,
      name: program.name || program.programName,
      nickname: program.nickname || '',
      allWorkouts: pd.allWorkouts || program.allWorkouts || {},
      mainMaxes: pd.mainMaxes || program.mainMaxes,
      daysPerWeek: pd.daysPerWeek || program.daysPerWeek,
      totalWeeks: pd.totalWeeks || program.totalWeeks,
    });
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
    copyDay: workoutState.copyDayToDay,
    insertWeek: workoutState.insertWeekAt,
    addWeeks: workoutState.addWeeksToEnd,
    setDaysPerWeek: workoutState.setDaysPerWeek,
    addBlock: handleAddBlock,
    importBlocks: workoutState.importBlocks,
    importMultiDay: workoutState.importMultiDay,
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
    replaceExercise: handleReplaceExercise,
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
        <WelcomeScreen onNewProgram={handleBuildNew} onManagePrograms={() => setShowManageModal(true)} onManageTravelWorkouts={() => setShowManageTravelModal(true)} onManageVideos={builderUser ? () => setShowVideoLibrary(true) : null} builderUser={builderUser} onLogout={onLogout} />
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
          onGoToApp={handleGoToApp}
          onExitOverrideMode={overrideContext ? handleExitOverrideMode : null}
          onSaveTravel={overrideContext ? null : handleOpenTravelSave}
          onProgressions={handleGoToProgressions}
          onVolume={handleGoToVolume}
          onCnsLoad={handleGoToCnsLoad}
        />
      )}

      {screen === 'progressions' && (
        <ProgressionView
          allWorkouts={workoutState.getAllWorkoutsForSave().allWorkouts}
          totalWeeks={workoutState.totalWeeks}
          daysPerWeek={workoutState.daysPerWeek}
          onBack={() => setScreen('builder')}
        />
      )}

      {screen === 'volume' && (
        <VolumeView
          allWorkouts={workoutState.getAllWorkoutsForSave().allWorkouts}
          totalWeeks={workoutState.totalWeeks}
          daysPerWeek={workoutState.daysPerWeek}
          onBack={() => setScreen('builder')}
        />
      )}

      {screen === 'cnsload' && (
        <CnsLoadView
          allWorkouts={workoutState.getAllWorkoutsForSave().allWorkouts}
          totalWeeks={workoutState.totalWeeks}
          daysPerWeek={workoutState.daysPerWeek}
          onBack={() => setScreen('builder')}
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
        coachEmail={builderUser?.email || overrideContext?.email || ''}
      />

      <SaveProgramModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onSave={handleSave}
        loadedProgram={workoutState.loadedProgram}
        builderUser={builderUser}
        loading={programAPI.loading}
      />

      <ManagePrograms
        isOpen={showManageModal}
        onClose={() => setShowManageModal(false)}
        onLoadProgram={handleLoadProgram}
        apiHook={programAPI}
        builderUser={builderUser}
      />

      <TravelSaveModal
        isOpen={showTravelSaveModal}
        onClose={() => setShowTravelSaveModal(false)}
        onSave={handleSaveTravelWorkout}
        loading={programAPI.loading}
        daysPerWeek={workoutState.daysPerWeek}
        getAllWorkouts={workoutState.getAllWorkoutsForSave}
      />

      <ManageTravelWorkouts
        isOpen={showManageTravelModal}
        onClose={() => setShowManageTravelModal(false)}
        onLoadWorkout={handleLoadTravelWorkout}
        apiHook={programAPI}
      />

      <PreMadeWorkoutPicker
        isOpen={showPreMadePicker}
        onClose={() => setShowPreMadePicker(false)}
        onSelectWorkout={handleSelectPreMade}
      />

      <ExerciseVideoLibrary
        isOpen={showVideoLibrary}
        onClose={() => setShowVideoLibrary(false)}
        coachEmail={builderUser?.email || ''}
      />
    </>
  );
}
