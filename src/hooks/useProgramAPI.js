import { useState, useCallback } from 'react';

const isLocal = () => window.location.hostname === 'localhost';

function getApiBase() {
  // WordPress provides gwbConfig.apiBase
  if (typeof window !== 'undefined' && window.gwbConfig?.apiBase) {
    return window.gwbConfig.apiBase;
  }
  // On Netlify, use proxy to avoid CORS
  return '/api/';
}

export default function useProgramAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, body, maxRetries = 2) => {
    setLoading(true);
    setError(null);
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        const res = await fetch(`${getApiBase()}${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal,
        });
        clearTimeout(timeout);
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const data = await res.json();
        setLoading(false);
        return data;
      } catch (err) {
        if (attempt < maxRetries) {
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

  return {
    saveProgram,
    updateProgram,
    listPrograms,
    loadProgramByCode,
    loadUserOverride,
    saveUserOverride,
    deleteUserOverride,
    saveTravelWorkout,
    getTravelWorkouts,
    deleteTravelWorkout,
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
