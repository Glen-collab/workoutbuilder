import { useState, useCallback } from 'react';

const isLocal = () => window.location.hostname === 'localhost';

function getApiBase() {
  return (
    (typeof window !== 'undefined' && window.gwbConfig?.apiBase) ||
    'https://bestrongagain.com/workout-programs/api/general/'
  );
}

export default function useProgramAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, body) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${getApiBase()}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
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

  return {
    saveProgram,
    updateProgram,
    listPrograms,
    loadProgramByCode,
    loadUserOverride,
    saveUserOverride,
    deleteUserOverride,
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
