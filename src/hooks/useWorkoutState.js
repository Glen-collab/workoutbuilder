import { useState, useCallback, useRef } from 'react';

const DEFAULT_MAIN_MAXES = {
  bench: 225,
  squat: 315,
  powerClean: 185,
  deadlift: 365,
};

function createEmptyDay() {
  return [];
}

function createBlock(id, type = 'straight-set') {
  return {
    id,
    type,
    circuitType: null,
    exercises: [],
    notes: '',
    collapsed: false,
    rounds: '',
    timeLimit: '',
    restBetweenRounds: '',
    themeText: '',
  };
}

export default function useWorkoutState() {
  const [allWorkouts, setAllWorkouts] = useState({});
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  const [daysPerWeek, setDaysPerWeekState] = useState(3);
  const [totalWeeks, setTotalWeeksState] = useState(4);
  const [workoutBlocks, setWorkoutBlocks] = useState([]);
  const [blockIdCounter, setBlockIdCounter] = useState(1);
  const [mainMaxes, setMainMaxes] = useState({ ...DEFAULT_MAIN_MAXES });
  const [loadedProgram, setLoadedProgram] = useState(null);

  // Use refs to avoid stale closures in save/load helpers
  const allWorkoutsRef = useRef(allWorkouts);
  allWorkoutsRef.current = allWorkouts;
  const currentWeekRef = useRef(currentWeek);
  currentWeekRef.current = currentWeek;
  const currentDayRef = useRef(currentDay);
  currentDayRef.current = currentDay;
  const workoutBlocksRef = useRef(workoutBlocks);
  workoutBlocksRef.current = workoutBlocks;

  const getWorkoutKey = useCallback((week, day) => {
    const w = week !== undefined ? week : currentWeekRef.current;
    const d = day !== undefined ? day : currentDayRef.current;
    return `${w}-${d}`;
  }, []);

  // Save current blocks into allWorkouts
  const saveCurrent = useCallback(() => {
    const key = getWorkoutKey();
    setAllWorkouts((prev) => ({ ...prev, [key]: [...workoutBlocksRef.current] }));
  }, [getWorkoutKey]);

  // Load blocks for a given week/day
  const loadDay = useCallback((week, day) => {
    const key = `${week}-${day}`;
    const saved = allWorkoutsRef.current[key];
    setWorkoutBlocks(saved ? [...saved] : createEmptyDay());
  }, []);

  const switchDay = useCallback((day) => {
    saveCurrent();
    setCurrentDay(day);
    // Need to read from the just-saved state
    setAllWorkouts((prev) => {
      const savedKey = getWorkoutKey();
      const updated = { ...prev, [savedKey]: [...workoutBlocksRef.current] };
      const key = `${currentWeekRef.current}-${day}`;
      setWorkoutBlocks(updated[key] ? [...updated[key]] : createEmptyDay());
      return updated;
    });
  }, [saveCurrent, getWorkoutKey]);

  const switchWeek = useCallback((week) => {
    saveCurrent();
    setAllWorkouts((prev) => {
      const savedKey = getWorkoutKey();
      const updated = { ...prev, [savedKey]: [...workoutBlocksRef.current] };
      const key = `${week}-1`;
      setWorkoutBlocks(updated[key] ? [...updated[key]] : createEmptyDay());
      return updated;
    });
    setCurrentWeek(week);
    setCurrentDay(1);
  }, [saveCurrent, getWorkoutKey]);

  const addBlock = useCallback((block, insertPosition) => {
    const newBlock = { ...createBlock(blockIdCounter, block?.type || 'straight-set'), ...block, id: blockIdCounter };
    setBlockIdCounter((c) => c + 1);
    setWorkoutBlocks((prev) => {
      if (insertPosition && insertPosition.index !== undefined) {
        const idx = insertPosition.mode === 'above' ? insertPosition.index : insertPosition.index + 1;
        const copy = [...prev];
        copy.splice(idx, 0, newBlock);
        return copy;
      }
      return [...prev, newBlock];
    });
  }, [blockIdCounter]);

  const removeBlock = useCallback((blockId) => {
    setWorkoutBlocks((prev) => prev.filter((b) => b.id !== blockId));
  }, []);

  const updateBlock = useCallback((blockId, updates) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, ...updates } : b))
    );
  }, []);

  const addExerciseToBlock = useCallback((blockId, exercise) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, exercises: [...b.exercises, exercise] } : b
      )
    );
  }, []);

  const removeExerciseFromBlock = useCallback((blockId, exerciseIndex) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        exercises.splice(exerciseIndex, 1);
        return { ...b, exercises };
      })
    );
  }, []);

  const updateExerciseInBlock = useCallback((blockId, exerciseIndex, updates) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        exercises[exerciseIndex] = { ...exercises[exerciseIndex], ...updates };
        return { ...b, exercises };
      })
    );
  }, []);

  const updateExerciseSet = useCallback((blockId, exerciseIndex, setId, updates) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        const exercise = { ...exercises[exerciseIndex] };
        exercise.sets = exercise.sets.map((s) =>
          s.id === setId ? { ...s, ...updates } : s
        );
        exercises[exerciseIndex] = exercise;
        return { ...b, exercises };
      })
    );
  }, []);

  const addSetToExercise = useCallback((blockId, exerciseIndex) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        const exercise = { ...exercises[exerciseIndex] };
        const sets = [...(exercise.sets || [])];
        const lastSet = sets.length > 0 ? sets[sets.length - 1] : {};
        const newSet = { ...lastSet, id: Date.now() + Math.random() };
        sets.push(newSet);
        exercise.sets = sets;
        exercises[exerciseIndex] = exercise;
        return { ...b, exercises };
      })
    );
  }, []);

  const removeSetFromExercise = useCallback((blockId, exerciseIndex, setId) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        const exercise = { ...exercises[exerciseIndex] };
        if ((exercise.sets || []).length <= 1) return b;
        exercise.sets = exercise.sets.filter((s) => s.id !== setId);
        exercises[exerciseIndex] = exercise;
        return { ...b, exercises };
      })
    );
  }, []);

  const duplicateSet = useCallback((blockId, exerciseIndex, set) => {
    setWorkoutBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const exercises = [...b.exercises];
        const exercise = { ...exercises[exerciseIndex] };
        const sets = [...(exercise.sets || [])];
        const idx = sets.findIndex((s) => s.id === set.id);
        const newSet = { ...set, id: Date.now() + Math.random() };
        sets.splice(idx + 1, 0, newSet);
        exercise.sets = sets;
        exercises[exerciseIndex] = exercise;
        return { ...b, exercises };
      })
    );
  }, []);

  const copyWeekToNext = useCallback((numberOfWeeks) => {
    saveCurrent();
    setAllWorkouts((prev) => {
      const updated = { ...prev, [getWorkoutKey()]: [...workoutBlocksRef.current] };
      for (let n = 1; n <= numberOfWeeks; n++) {
        const targetWeek = currentWeekRef.current + n;
        if (targetWeek > totalWeeks) break;
        for (let d = 1; d <= daysPerWeek; d++) {
          const srcKey = `${currentWeekRef.current}-${d}`;
          const destKey = `${targetWeek}-${d}`;
          if (updated[srcKey]) {
            updated[destKey] = JSON.parse(JSON.stringify(updated[srcKey]));
          }
        }
      }
      return updated;
    });
  }, [saveCurrent, getWorkoutKey, totalWeeks, daysPerWeek]);

  const copyWeekToAll = useCallback(() => {
    saveCurrent();
    setAllWorkouts((prev) => {
      const updated = { ...prev, [getWorkoutKey()]: [...workoutBlocksRef.current] };
      for (let w = 1; w <= totalWeeks; w++) {
        if (w === currentWeekRef.current) continue;
        for (let d = 1; d <= daysPerWeek; d++) {
          const srcKey = `${currentWeekRef.current}-${d}`;
          const destKey = `${w}-${d}`;
          if (updated[srcKey]) {
            updated[destKey] = JSON.parse(JSON.stringify(updated[srcKey]));
          }
        }
      }
      return updated;
    });
  }, [saveCurrent, getWorkoutKey, totalWeeks, daysPerWeek]);

  const setDaysPerWeek = useCallback((n) => {
    setDaysPerWeekState(n);
    if (currentDayRef.current > n) {
      saveCurrent();
      setCurrentDay(1);
      loadDay(currentWeekRef.current, 1);
    }
  }, [saveCurrent, loadDay]);

  const setTotalWeeks = useCallback((n) => {
    setTotalWeeksState(n);
    if (currentWeekRef.current > n) {
      saveCurrent();
      setCurrentWeek(1);
      setCurrentDay(1);
      loadDay(1, 1);
    }
  }, [saveCurrent, loadDay]);

  const loadProgram = useCallback((program) => {
    if (!program) return;
    setLoadedProgram({ id: program.id, accessCode: program.accessCode, name: program.name });
    if (program.mainMaxes) setMainMaxes(program.mainMaxes);
    if (program.daysPerWeek) setDaysPerWeekState(program.daysPerWeek);
    if (program.totalWeeks) setTotalWeeksState(program.totalWeeks);

    const workouts = program.allWorkouts || {};
    setAllWorkouts(workouts);

    // Find highest block ID
    let maxId = 0;
    Object.values(workouts).forEach((blocks) => {
      blocks.forEach((b) => {
        if (b.id > maxId) maxId = b.id;
      });
    });
    setBlockIdCounter(maxId + 1);

    setCurrentWeek(1);
    setCurrentDay(1);
    setWorkoutBlocks(workouts['1-1'] ? [...workouts['1-1']] : []);
  }, []);

  const clearAll = useCallback(() => {
    setAllWorkouts({});
    setCurrentWeek(1);
    setCurrentDay(1);
    setDaysPerWeekState(3);
    setTotalWeeksState(4);
    setWorkoutBlocks([]);
    setBlockIdCounter(1);
    setMainMaxes({ ...DEFAULT_MAIN_MAXES });
    setLoadedProgram(null);
  }, []);

  const getAllWorkoutsForSave = useCallback(() => {
    const key = getWorkoutKey();
    const all = { ...allWorkoutsRef.current, [key]: [...workoutBlocksRef.current] };
    return {
      allWorkouts: all,
      mainMaxes,
      daysPerWeek,
      totalWeeks,
      loadedProgram,
    };
  }, [getWorkoutKey, mainMaxes, daysPerWeek, totalWeeks, loadedProgram]);

  return {
    allWorkouts,
    currentWeek,
    currentDay,
    daysPerWeek,
    totalWeeks,
    workoutBlocks,
    blockIdCounter,
    mainMaxes,
    loadedProgram,
    switchDay,
    switchWeek,
    addBlock,
    removeBlock,
    updateBlock,
    addExerciseToBlock,
    removeExerciseFromBlock,
    updateExerciseInBlock,
    updateExerciseSet,
    addSetToExercise,
    removeSetFromExercise,
    duplicateSet,
    copyWeekToNext,
    copyWeekToAll,
    setDaysPerWeek,
    setTotalWeeks,
    setMainMaxes,
    loadProgram,
    clearAll,
    getWorkoutKey,
    getAllWorkoutsForSave,
  };
}
