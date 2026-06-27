import { useState, useCallback, useRef } from 'react';
import { computeTargetTime } from '../utils/sprintTargets';

const DEFAULT_MAIN_MAXES = {
  bench: 0,
  squat: 0,
  powerClean: 0,
  deadlift: 0,
};

function createEmptyDay() {
  return [];
}

// Collapse all blocks when loading a day
function collapseAllBlocks(blocks) {
  if (!blocks || !Array.isArray(blocks)) return [];
  return blocks.map(b => ({ ...b, collapsed: true }));
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
    workInterval: '',
    restInterval: '',
    themeText: '',
  };
}

// Fixed number of day slots the builder always shows. Days beyond what a client
// needs are hidden via `hiddenDays` rather than removed.
export const MAX_DAYS = 7;
const ALL_DAYS = Array.from({ length: MAX_DAYS }, (_, i) => i + 1);
// A brand-new program shows this many active days; the rest start hidden (grayed),
// so an untouched new program saves as a 3-day program and never leaks empty days
// to a client. Coaches un-hide days as they build them out toward a full week.
const DEFAULT_VISIBLE_DAYS = 3;
const DEFAULT_HIDDEN_DAYS = ALL_DAYS.filter((d) => d > DEFAULT_VISIBLE_DAYS);

export default function useWorkoutState() {
  const [allWorkouts, setAllWorkouts] = useState({});
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  // New day model: the builder always has MAX_DAYS day slots. `hiddenDays` is the
  // global set of day numbers (1..MAX_DAYS) that are hidden from the client tracker
  // and the gym TV. `daysPerWeek` is kept = MAX_DAYS internally; on save we write a
  // legacy-compatible count so the current tracker keeps working (see getAllWorkoutsForSave).
  const [daysPerWeek, setDaysPerWeekState] = useState(MAX_DAYS);
  const [hiddenDays, setHiddenDaysState] = useState(DEFAULT_HIDDEN_DAYS);
  const [totalWeeks, setTotalWeeksState] = useState(4);
  const [workoutBlocks, setWorkoutBlocks] = useState([]);
  const [blockIdCounter, setBlockIdCounter] = useState(1);
  const [mainMaxes, setMainMaxes] = useState({ ...DEFAULT_MAIN_MAXES });
  // Sprint PBs (per-distance best times) — the velocity analog of mainMaxes.
  // Keyed by distance ("40yd","100m",…) → best time string. Bakes into the
  // program so prescribed sprints can auto-fill their target time (PB ÷ %).
  const [sprintPBs, setSprintPBs] = useState({});
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
  const hiddenDaysRef = useRef(hiddenDays);
  hiddenDaysRef.current = hiddenDays;

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
    setWorkoutBlocks(saved ? collapseAllBlocks(saved) : createEmptyDay());
  }, []);

  const switchDay = useCallback((day) => {
    saveCurrent();
    setCurrentDay(day);
    // Need to read from the just-saved state
    setAllWorkouts((prev) => {
      const savedKey = getWorkoutKey();
      const updated = { ...prev, [savedKey]: [...workoutBlocksRef.current] };
      const key = `${currentWeekRef.current}-${day}`;
      setWorkoutBlocks(updated[key] ? collapseAllBlocks(updated[key]) : createEmptyDay());
      return updated;
    });
  }, [saveCurrent, getWorkoutKey]);

  const switchWeek = useCallback((week) => {
    saveCurrent();
    setAllWorkouts((prev) => {
      const savedKey = getWorkoutKey();
      const updated = { ...prev, [savedKey]: [...workoutBlocksRef.current] };
      const key = `${week}-1`;
      setWorkoutBlocks(updated[key] ? collapseAllBlocks(updated[key]) : createEmptyDay());
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

  // Bulk-insert parsed blocks from the Smart Import modal.
  // mode='replace' wipes the current day; mode='append' adds at the end.
  // Each incoming block gets a fresh local id so existing edit handlers work.
  const importBlocks = useCallback((incomingBlocks, mode = 'append') => {
    if (!Array.isArray(incomingBlocks) || incomingBlocks.length === 0) return;
    let nextId = blockIdCounter;
    const stamped = incomingBlocks.map((b) => {
      const id = nextId++;
      return { ...b, id, collapsed: false };
    });
    setBlockIdCounter(nextId);
    setWorkoutBlocks((prev) => (mode === 'replace' ? stamped : [...prev, ...stamped]));
  }, [blockIdCounter]);

  // Drop multiple days of parsed blocks into consecutive day slots.
  // days: [{ name, blocks }, ...]
  // Starts at startWeek/startDay, walks day by day. Auto-expands totalWeeks
  // and daysPerWeek if the run goes past the current program size.
  // mode='replace' overwrites existing blocks per day; 'append' adds.
  const importMultiDay = useCallback((days, startWeek = 1, startDay = 1, mode = 'replace') => {
    if (!Array.isArray(days) || days.length === 0) return;
    let nextId = blockIdCounter;
    const stampDay = (blocks) => blocks.map((b) => {
      const id = nextId++;
      return { ...b, id, collapsed: false };
    });

    // Track which day slots receive content so we can auto-unhide them.
    const writtenDays = new Set();
    // Save the currently-open day so its edits aren't lost
    setAllWorkouts((prev) => {
      const updated = { ...prev, [`${currentWeek}-${currentDay}`]: [...workoutBlocksRef.current] };
      let week = startWeek;
      let day = startDay;
      let maxWeek = totalWeeks;
      for (const d of days) {
        const stamped = stampDay(d.blocks || []);
        const key = `${week}-${day}`;
        const existing = updated[key] || [];
        updated[key] = mode === 'replace' ? stamped : [...existing, ...stamped];
        if (week > maxWeek) maxWeek = week;
        writtenDays.add(day);
        day += 1;
        if (day > daysPerWeek) {
          day = 1;
          week += 1;
        }
      }
      // Bump total weeks if we wrote past the current program span
      if (maxWeek > totalWeeks) setTotalWeeksState(maxWeek);
      // Surface the first imported day so the coach sees it immediately
      const firstKey = `${startWeek}-${startDay}`;
      setCurrentWeek(startWeek);
      setCurrentDay(startDay);
      setWorkoutBlocks(updated[firstKey] || []);
      return updated;
    });
    // Any day that got imported content should be visible.
    if (writtenDays.size) setHiddenDaysState((prev) => prev.filter((d) => !writtenDays.has(d)));
    setBlockIdCounter(nextId);
  }, [blockIdCounter, currentWeek, currentDay, totalWeeks, daysPerWeek]);

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
        const merged = { ...exercises[exerciseIndex], ...updates };
        // Timed / loaded work (planks, carries) is tracked by TIME or DISTANCE,
        // not reps. So the moment a duration or distance is set, clear the
        // (usually default) reps so the saved exercise stays clean — keeps sets
        // + weight, just drops the meaningless rep count.
        const setNonEmpty = (k) => k in updates && updates[k] != null && String(updates[k]).trim() !== '';
        if (setNonEmpty('duration') || setNonEmpty('distance')) {
          merged.reps = '';
        }
        exercises[exerciseIndex] = merged;
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
      // Only copy the CURRENT DAY to the same day in the next N weeks
      const srcKey = `${currentWeekRef.current}-${currentDayRef.current}`;
      for (let n = 1; n <= numberOfWeeks; n++) {
        const targetWeek = currentWeekRef.current + n;
        if (targetWeek > totalWeeks) break;
        const destKey = `${targetWeek}-${currentDayRef.current}`;
        if (updated[srcKey]) {
          updated[destKey] = JSON.parse(JSON.stringify(updated[srcKey]));
        }
      }
      return updated;
    });
  }, [saveCurrent, getWorkoutKey, totalWeeks]);

  const copyWeekToAll = useCallback(() => {
    saveCurrent();
    setAllWorkouts((prev) => {
      const updated = { ...prev, [getWorkoutKey()]: [...workoutBlocksRef.current] };
      // Only copy the CURRENT DAY to the same day in all other weeks
      const srcKey = `${currentWeekRef.current}-${currentDayRef.current}`;
      for (let w = 1; w <= totalWeeks; w++) {
        if (w === currentWeekRef.current) continue;
        const destKey = `${w}-${currentDayRef.current}`;
        if (updated[srcKey]) {
          updated[destKey] = JSON.parse(JSON.stringify(updated[srcKey]));
        }
      }
      return updated;
    });
  }, [saveCurrent, getWorkoutKey, totalWeeks]);

  // Copy the CURRENT day's blocks onto another day in the SAME week.
  const copyDayToDay = useCallback((targetDay) => {
    if (targetDay === currentDayRef.current) return;
    saveCurrent();
    setAllWorkouts((prev) => {
      const updated = { ...prev, [getWorkoutKey()]: [...workoutBlocksRef.current] };
      const srcKey = `${currentWeekRef.current}-${currentDayRef.current}`;
      const destKey = `${currentWeekRef.current}-${targetDay}`;
      if (updated[srcKey]) {
        updated[destKey] = JSON.parse(JSON.stringify(updated[srcKey]));
      }
      return updated;
    });
  }, [saveCurrent, getWorkoutKey]);

  const setDaysPerWeek = useCallback((n) => {
    setDaysPerWeekState(n);
    if (currentDayRef.current > n) {
      saveCurrent();
      setCurrentDay(1);
      loadDay(currentWeekRef.current, 1);
    }
  }, [saveCurrent, loadDay]);

  // Toggle a day's visibility (hidden days are dropped from the client tracker + TV).
  // The day's workout data is preserved either way — hiding just flags it. If the
  // currently-open day is being hidden, jump to the first still-visible day.
  const toggleDayHidden = useCallback((day) => {
    const prev = hiddenDaysRef.current;
    const willHide = !prev.includes(day);
    // A program must keep at least one visible day — block hiding the last one.
    if (willHide && ALL_DAYS.filter((d) => !prev.includes(d)).length <= 1) return;
    const next = willHide
      ? [...prev, day].sort((a, b) => a - b)
      : prev.filter((d) => d !== day);
    setHiddenDaysState(next);
    if (willHide && currentDayRef.current === day) {
      const firstVisible = ALL_DAYS.find((d) => !next.includes(d)) || 1;
      saveCurrent();
      setCurrentDay(firstVisible);
      loadDay(currentWeekRef.current, firstVisible);
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

  // Insert a new empty week at the specified position, shifting existing weeks forward
  const insertWeekAt = useCallback((insertPosition) => {
    saveCurrent();
    setAllWorkouts((prev) => {
      // First, save current blocks
      const updated = { ...prev, [getWorkoutKey()]: [...workoutBlocksRef.current] };
      const newWorkouts = {};

      // Shift all weeks >= insertPosition forward by 1
      Object.entries(updated).forEach(([key, blocks]) => {
        const [weekStr, dayStr] = key.split('-');
        const week = parseInt(weekStr, 10);
        const day = parseInt(dayStr, 10);

        if (week >= insertPosition) {
          // Shift this week forward
          newWorkouts[`${week + 1}-${day}`] = blocks;
        } else {
          // Keep week as is
          newWorkouts[key] = blocks;
        }
      });

      return newWorkouts;
    });

    // Increment total weeks
    setTotalWeeksState((prev) => prev + 1);

    // Navigate to the new empty week
    setCurrentWeek(insertPosition);
    setCurrentDay(1);
    setWorkoutBlocks([]);
  }, [saveCurrent, getWorkoutKey]);

  // Add multiple empty weeks at the end of the program
  const addWeeksToEnd = useCallback((count) => {
    saveCurrent();
    setAllWorkouts((prev) => ({
      ...prev,
      [getWorkoutKey()]: [...workoutBlocksRef.current]
    }));
    setTotalWeeksState((prev) => prev + count);
  }, [saveCurrent, getWorkoutKey]);

  const loadProgram = useCallback((program) => {
    if (!program) return;
    setLoadedProgram({
      id: program.id,
      accessCode: program.accessCode,
      name: program.name,
      nickname: program.nickname || '',
    });
    if (program.mainMaxes) setMainMaxes(program.mainMaxes);
    setSprintPBs(program.sprintPBs && typeof program.sprintPBs === 'object' ? program.sprintPBs : {});
    // Day model is always MAX_DAYS slots internally. Resolve which days are hidden:
    //  - new programs carry an explicit `hiddenDays` array
    //  - legacy programs only have `daysPerWeek` (a count) → hide days past that count
    setDaysPerWeekState(MAX_DAYS);
    if (Array.isArray(program.hiddenDays)) {
      setHiddenDaysState(program.hiddenDays.filter((d) => d >= 1 && d <= MAX_DAYS));
    } else if (program.daysPerWeek) {
      setHiddenDaysState(ALL_DAYS.filter((d) => d > program.daysPerWeek));
    } else {
      setHiddenDaysState([]);
    }
    if (program.totalWeeks) setTotalWeeksState(program.totalWeeks);

    const workouts = program.allWorkouts || {};

    // Ensure every block has a unique ID (API-created programs may lack IDs)
    let nextId = 1;
    Object.values(workouts).forEach((blocks) => {
      blocks.forEach((b) => {
        if (b.id > nextId) nextId = b.id;
      });
    });
    Object.values(workouts).forEach((blocks) => {
      blocks.forEach((b) => {
        if (!b.id && b.id !== 0) {
          b.id = nextId++;
        }
      });
    });

    setAllWorkouts(workouts);
    setBlockIdCounter(nextId + 1);

    setCurrentWeek(1);
    setCurrentDay(1);
    setWorkoutBlocks(workouts['1-1'] ? collapseAllBlocks(workouts['1-1']) : []);
  }, []);

  // Update just the loadedProgram metadata (name, nickname, accessCode) without
  // touching workouts state — used after an in-place Update so the in-memory
  // program reflects the latest submit.
  const updateLoadedProgramMeta = useCallback((patch) => {
    setLoadedProgram((prev) => (prev ? { ...prev, ...patch } : prev));
  }, []);

  const clearAll = useCallback(() => {
    setAllWorkouts({});
    setCurrentWeek(1);
    setCurrentDay(1);
    setDaysPerWeekState(MAX_DAYS);
    setHiddenDaysState(DEFAULT_HIDDEN_DAYS);
    setTotalWeeksState(4);
    setWorkoutBlocks([]);
    setBlockIdCounter(1);
    setMainMaxes({ ...DEFAULT_MAIN_MAXES });
    setSprintPBs({});
    setLoadedProgram(null);
  }, []);

  const getAllWorkoutsForSave = useCallback(() => {
    const key = getWorkoutKey();
    const all = { ...allWorkoutsRef.current, [key]: [...workoutBlocksRef.current] };
    // Legacy-compatible day count: the current tracker reads `daysPerWeek` and shows
    // days 1..N. If the visible days are contiguous from day 1 (the common case —
    // trailing days hidden for a 2/3/4-day client) we write that count so the existing
    // tracker stays correct. If a middle day is hidden (non-contiguous), we fall back to
    // MAX_DAYS; the updated tracker uses `hiddenDays` to render the right days.
    const visible = ALL_DAYS.filter((d) => !hiddenDays.includes(d));
    const contiguousFromOne = visible.every((d, i) => d === i + 1);
    const legacyDaysPerWeek = contiguousFromOne && visible.length > 0 ? visible.length : MAX_DAYS;
    // Re-bake every sprint's target time from the CURRENT PBs so a re-test (PB
    // edit) always flows to the tracker, even if the coach didn't re-touch each
    // sprint exercise. The tracker reads ex.sprintTargetTime (no PB table needed).
    const baked = {};
    for (const k of Object.keys(all)) {
      baked[k] = (all[k] || []).map((block) => ({
        ...block,
        exercises: (block.exercises || []).map((ex) =>
          ex && ex.sprintDistance
            ? { ...ex, sprintTargetTime: computeTargetTime(sprintPBs[ex.sprintDistance] || '', ex.targetPct) }
            : ex
        ),
      }));
    }
    return {
      allWorkouts: baked,
      mainMaxes,
      sprintPBs,
      daysPerWeek: legacyDaysPerWeek,
      hiddenDays,
      totalWeeks,
      loadedProgram,
    };
  }, [getWorkoutKey, mainMaxes, sprintPBs, hiddenDays, totalWeeks, loadedProgram]);

  // allWorkouts with hidden-day entries stripped — for analytics/graphs and any
  // consumer that should reflect only what the client actually sees.
  const getVisibleWorkouts = useCallback(() => {
    const key = getWorkoutKey();
    const all = { ...allWorkoutsRef.current, [key]: [...workoutBlocksRef.current] };
    const hidden = hiddenDaysRef.current;
    if (!hidden.length) return all;
    const out = {};
    for (const k of Object.keys(all)) {
      const day = Number(k.split('-')[1]);
      if (!hidden.includes(day)) out[k] = all[k];
    }
    return out;
  }, [getWorkoutKey]);

  return {
    allWorkouts,
    currentWeek,
    currentDay,
    daysPerWeek,
    hiddenDays,
    totalWeeks,
    workoutBlocks,
    blockIdCounter,
    mainMaxes,
    sprintPBs,
    setSprintPBs,
    loadedProgram,
    switchDay,
    switchWeek,
    addBlock,
    importBlocks,
    importMultiDay,
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
    copyDayToDay,
    insertWeekAt,
    addWeeksToEnd,
    setDaysPerWeek,
    toggleDayHidden,
    getVisibleWorkouts,
    setTotalWeeks,
    setMainMaxes,
    loadProgram,
    updateLoadedProgramMeta,
    clearAll,
    getWorkoutKey,
    getAllWorkoutsForSave,
  };
}
