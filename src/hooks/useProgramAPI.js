import { useState, useCallback } from 'react';
import { getExerciseDefaults } from '../data/exerciseDefaults';

const isLocal = () => window.location.hostname === 'localhost';

function getApiBase() {
  if (isLocal()) return '/api/';
  return 'https://app.bestrongagain.com/api/workout/';
}

// Walk any payload shape (program data, override data, travel workout, etc.)
// and backfill missing distanceUnit / durationUnit on cardio-style exercises
// from the central EXERCISE_DEFAULTS table. Why: trainers can save an entry
// with `distance: 1000` but no unit selected, which leaves the tracker
// rendering "1000" with whatever its render-path default is (often `mi`,
// which is wrong for meter-based machines like SkiErg/Rowing).
//
// Conservative: only fills units when the corresponding distance/duration
// value is truthy AND the unit is empty/missing. Never overwrites a unit
// the trainer explicitly set, never fills other default fields.
function fillMissingUnits(node) {
  if (Array.isArray(node)) {
    for (const item of node) fillMissingUnits(item);
    return;
  }
  if (node && typeof node === 'object') {
    if (typeof node.name === 'string') {
      const defaults = getExerciseDefaults(node.name);
      if (defaults.distanceUnit && node.distance && !node.distanceUnit) {
        node.distanceUnit = defaults.distanceUnit;
      }
      if (defaults.durationUnit && node.duration && !node.durationUnit) {
        node.durationUnit = defaults.durationUnit;
      }
    }
    for (const key of Object.keys(node)) {
      fillMissingUnits(node[key]);
    }
  }
}

// Deep-clone the body so we don't mutate React state in place, then normalize.
function withNormalizedUnits(body) {
  try {
    const cloned = JSON.parse(JSON.stringify(body));
    fillMissingUnits(cloned);
    return cloned;
  } catch {
    return body;
  }
}

export default function useProgramAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, body, maxRetries = 2) => {
    setLoading(true);
    setError(null);
    const normalizedBody = withNormalizedUnits(body);
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        const res = await fetch(`${getApiBase()}${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(normalizedBody),
          signal: controller.signal,
        });
        clearTimeout(timeout);
        if (!res.ok) {
          // Surface the backend's message (e.g. "Access code 1081 is already
          // in use") instead of a bare status.
          let serverMsg = '';
          try {
            const body = await res.json();
            serverMsg = body?.message || '';
          } catch { /* non-JSON error body */ }
          const e = new Error(serverMsg || `API error: ${res.status}`);
          e.status = res.status;
          throw e;
        }
        const data = await res.json();
        setLoading(false);
        return data;
      } catch (err) {
        // Don't retry client errors (4xx): a 409 collision or 400 validation
        // failure won't resolve by trying again — fail fast with the message.
        const isClientError = err.status >= 400 && err.status < 500;
        if (!isClientError && attempt < maxRetries) {
          await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        setError(err.message || 'An error occurred');
        setLoading(false);
        throw err;
      }
    }
  }, []);

  const saveProgram = useCallback(
    (programData) => {
      if (isLocal()) {
        console.log('[Mock] saveProgram', programData);
        return Promise.resolve({ success: true, programId: 999, accessCode: 'MOCK0-99999' });
      }
      return request('save-program.php', programData);
    },
    [request]
  );

  const updateProgram = useCallback(
    (programData) => {
      if (isLocal()) {
        console.log('[Mock] updateProgram', programData);
        return Promise.resolve({ success: true });
      }
      return request('update-program.php', programData);
    },
    [request]
  );

  const listPrograms = useCallback(
    (email) => {
      if (isLocal()) return Promise.resolve(getMockProgramList());
      return request('list-programs.php', { email });
    },
    [request]
  );

  const deleteProgram = useCallback(
    (accessCode, email) => {
      if (isLocal()) {
        console.log('[Mock] deleteProgram', { accessCode, email });
        return Promise.resolve({ success: true });
      }
      // Single attempt: a delete should not auto-retry (avoid double-acting on
      // a slow-but-successful first call).
      return request('delete-program.php', { accessCode, email }, 0);
    },
    [request]
  );

  // ── Override endpoints (per-client modifications) ──

  const loadProgramByCode = useCallback(
    (accessCode, email) => {
      if (isLocal()) return Promise.resolve(getMockProgramByCode(accessCode, email));
      return request('load-program.php', { code: accessCode, email });
    },
    [request]
  );

  const loadUserOverride = useCallback(
    (accessCode, userEmail, week, day) => {
      if (isLocal()) return Promise.resolve({ success: true, data: null });
      return request(`load-user-override.php?t=${Date.now()}`, {
        accessCode,
        userEmail,
        week,
        day,
      });
    },
    [request]
  );

  const saveUserOverride = useCallback(
    (accessCode, userEmail, week, day, workoutData, overrideReason) => {
      if (isLocal()) {
        console.log('[Mock] saveUserOverride', { accessCode, userEmail, week, day, workoutData });
        return Promise.resolve({ success: true });
      }
      return request('save-user-override.php', {
        accessCode,
        userEmail,
        week,
        day,
        workoutData,
        overrideReason,
      });
    },
    [request]
  );

  const deleteUserOverride = useCallback(
    (accessCode, userEmail, week, day) => {
      if (isLocal()) {
        console.log('[Mock] deleteUserOverride', { accessCode, userEmail, week, day });
        return Promise.resolve({ success: true });
      }
      return request('delete-user-override.php', {
        accessCode,
        userEmail,
        week,
        day,
      });
    },
    [request]
  );

  // ── Travel workout endpoints ──

  const saveTravelWorkout = useCallback(
    (data) => {
      if (isLocal()) {
        console.log('[Mock] saveTravelWorkout', data);
        return Promise.resolve({ success: true });
      }
      return request('save-travel-workout.php', data);
    },
    [request]
  );

  const getTravelWorkouts = useCallback(
    (email) => {
      if (isLocal()) return Promise.resolve(getMockTravelWorkouts());
      return request('get-travel-workouts.php', { trainerEmail: email });
    },
    [request]
  );

  const deleteTravelWorkout = useCallback(
    (equipmentType, dayNumber) => {
      if (isLocal()) {
        console.log('[Mock] deleteTravelWorkout', { equipmentType, dayNumber });
        return Promise.resolve({ success: true });
      }
      return request('delete-travel-workout.php', { equipmentType, dayNumber });
    },
    [request]
  );

  // ── Reusable custom / combo exercises (per coach, by email) ──
  const listCustomExercises = useCallback(
    (email) => {
      if (isLocal()) return Promise.resolve({ exercises: JSON.parse(localStorage.getItem('gwb_custom_ex') || '[]') });
      return request('list-custom-exercises.php', { email });
    },
    [request]
  );

  // category/subcategory place the exercise in the builder's picker (e.g.
  // legs / dumbbell). Omit them and it still shows in search + the custom shelf.
  const saveCustomExercise = useCallback(
    (email, name, videoUid, category, subcategory) => {
      if (isLocal()) {
        const list = JSON.parse(localStorage.getItem('gwb_custom_ex') || '[]');
        const row = {
          id: Date.now(), name, video_uid: videoUid || null, status: 'approved',
          category: category || null, subcategory: subcategory || null,
        };
        localStorage.setItem('gwb_custom_ex', JSON.stringify([...list.filter((e) => e.name !== name), row]));
        return Promise.resolve({ success: true, exercise: row });
      }
      return request('save-custom-exercise.php', {
        email, name, video_uid: videoUid || '',
        category: category || '', subcategory: subcategory || '',
      });
    },
    [request]
  );

  const deleteCustomExercise = useCallback(
    (email, id) => {
      if (isLocal()) {
        const list = JSON.parse(localStorage.getItem('gwb_custom_ex') || '[]');
        localStorage.setItem('gwb_custom_ex', JSON.stringify(list.filter((e) => e.id !== id)));
        return Promise.resolve({ success: true });
      }
      return request('delete-custom-exercise.php', { email, id });
    },
    [request]
  );

  return {
    saveProgram,
    updateProgram,
    deleteProgram,
    listPrograms,
    loadProgramByCode,
    loadUserOverride,
    saveUserOverride,
    deleteUserOverride,
    saveTravelWorkout,
    getTravelWorkouts,
    deleteTravelWorkout,
    listCustomExercises,
    saveCustomExercise,
    deleteCustomExercise,
    loading,
    error,
  };
}

// ── Mock data for localhost development ──

function getMockProgramByCode(accessCode, email) {
  const now = Date.now();
  return {
    success: true,
    data: {
      id: 1,
      accessCode,
      name: '12-Week Strength',
      programName: '12-Week Strength',
      programData: {
        daysPerWeek: 3,
        totalWeeks: 4,
        mainMaxes: { bench: 225, squat: 315, powerClean: 185, deadlift: 365 },
        allWorkouts: {
          '1-1': [
            {
              id: 1, type: 'straight-set', collapsed: false, exercises: [
                { id: now, name: 'Barbell Back Squat', baseMax: 'squat', isPercentageBased: true,
                  sets: [
                    { id: now + 1, reps: 5, percentage: 70, isWarmup: false, manualWeight: null },
                    { id: now + 2, reps: 5, percentage: 75, isWarmup: false, manualWeight: null },
                    { id: now + 3, reps: 5, percentage: 80, isWarmup: false, manualWeight: null },
                  ],
                },
              ],
            },
            {
              id: 2, type: 'superset', collapsed: false, exercises: [
                { id: now + 10, name: 'Romanian Deadlift', baseMax: 'deadlift', isPercentageBased: true,
                  sets: [
                    { id: now + 11, reps: 10, percentage: 55, isWarmup: false, manualWeight: null },
                    { id: now + 12, reps: 10, percentage: 55, isWarmup: false, manualWeight: null },
                    { id: now + 13, reps: 10, percentage: 55, isWarmup: false, manualWeight: null },
                  ],
                },
                { id: now + 20, name: 'Leg Curl', sets: [], setsCount: '3', reps: '12', weight: '90' },
              ],
            },
          ],
          '1-2': [
            {
              id: 3, type: 'straight-set', collapsed: false, exercises: [
                { id: now + 30, name: 'Barbell Bench Press', baseMax: 'bench', isPercentageBased: true,
                  sets: [
                    { id: now + 31, reps: 5, percentage: 70, isWarmup: false, manualWeight: null },
                    { id: now + 32, reps: 5, percentage: 75, isWarmup: false, manualWeight: null },
                    { id: now + 33, reps: 5, percentage: 80, isWarmup: false, manualWeight: null },
                  ],
                },
              ],
            },
            {
              id: 4, type: 'straight-set', collapsed: false, exercises: [
                { id: now + 40, name: 'Incline Dumbbell Press', sets: [], setsCount: '3', reps: '10', weight: '60' },
              ],
            },
          ],
          '1-3': [
            {
              id: 5, type: 'straight-set', collapsed: false, exercises: [
                { id: now + 50, name: 'Overhead Press', baseMax: 'bench', isPercentageBased: true,
                  sets: [
                    { id: now + 51, reps: 6, percentage: 65, isWarmup: false, manualWeight: null },
                    { id: now + 52, reps: 6, percentage: 70, isWarmup: false, manualWeight: null },
                    { id: now + 53, reps: 6, percentage: 75, isWarmup: false, manualWeight: null },
                    { id: now + 54, reps: 6, percentage: 75, isWarmup: false, manualWeight: null },
                  ],
                },
              ],
            },
            {
              id: 6, type: 'circuit', circuitType: 'rounds', rounds: 3, restBetweenRounds: '60s', collapsed: false, exercises: [
                { id: now + 60, name: 'Pull-Ups', sets: [], setsCount: '3', reps: '10' },
                { id: now + 61, name: 'Dips', sets: [], setsCount: '3', reps: '12' },
                { id: now + 62, name: 'Face Pulls', sets: [], setsCount: '3', reps: '15', weight: '30' },
              ],
            },
          ],
        },
      },
    },
  };
}

function getMockTravelWorkouts() {
  return {
    success: true,
    data: [
      {
        id: 1,
        equipment_type: 'bodyweight',
        day_number: 1,
        workout_name: 'BW Day 1 - Upper',
        workout_data: [
          { id: 501, type: 'straight-set', collapsed: false, exercises: [
            { id: 5010, name: 'Push-ups', sets: [], setsCount: '4', reps: '15' },
            { id: 5011, name: 'Pike Push-ups', sets: [], setsCount: '3', reps: '10' },
          ]},
        ],
        created_at: '2025-06-01 10:00:00',
      },
      {
        id: 2,
        equipment_type: 'bodyweight',
        day_number: 2,
        workout_name: 'BW Day 2 - Lower',
        workout_data: [
          { id: 502, type: 'circuit', circuitType: 'rounds', rounds: 3, collapsed: false, exercises: [
            { id: 5020, name: 'Air Squats', sets: [], setsCount: '3', reps: '20' },
            { id: 5021, name: 'Lunges', sets: [], setsCount: '3', reps: '12 each' },
          ]},
        ],
        created_at: '2025-06-01 10:05:00',
      },
      {
        id: 3,
        equipment_type: 'hotel_gym',
        day_number: 1,
        workout_name: 'Hotel Day 1 - Full Body',
        workout_data: [
          { id: 503, type: 'straight-set', collapsed: false, exercises: [
            { id: 5030, name: 'Dumbbell Bench Press', sets: [], setsCount: '4', reps: '10', weight: '50' },
            { id: 5031, name: 'Dumbbell Row', sets: [], setsCount: '4', reps: '10', weight: '40' },
          ]},
        ],
        created_at: '2025-06-01 10:10:00',
      },
    ],
  };
}

function getMockProgramList() {
  const mock = getMockProgramByCode('ABCDE-12345', 'trainer@example.com');
  return {
    success: true,
    data: {
      programs: [
        {
          id: 1,
          accessCode: 'ABCDE-12345',
          name: '12-Week Strength',
          nickname: 'Johns Program',
          createdAt: '2025-01-15 10:00:00',
          updatedAt: '2025-01-28 14:30:00',
          blockCount: 6,
          programData: mock.data.programData,
        },
        {
          id: 2,
          accessCode: 'FGHIJ-67890',
          name: '8-Week Hypertrophy',
          nickname: '',
          createdAt: '2025-01-10 08:00:00',
          updatedAt: '2025-01-25 09:00:00',
          blockCount: 8,
          programData: {
            daysPerWeek: 4,
            totalWeeks: 8,
            mainMaxes: { bench: 185, squat: 275, powerClean: 155, deadlift: 315 },
            allWorkouts: {
              '1-1': [
                { id: 10, type: 'straight-set', collapsed: false, exercises: [
                  { id: 100, name: 'Barbell Bench Press', baseMax: 'bench', isPercentageBased: true,
                    sets: [
                      { id: 101, reps: 10, percentage: 65, isWarmup: false, manualWeight: null },
                      { id: 102, reps: 10, percentage: 65, isWarmup: false, manualWeight: null },
                      { id: 103, reps: 10, percentage: 65, isWarmup: false, manualWeight: null },
                    ],
                  },
                ]},
              ],
            },
          },
        },
      ],
    },
  };
}
