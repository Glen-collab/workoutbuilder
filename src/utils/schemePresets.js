// Pre-built percentage schemes for strength exercises
export const schemePresets = {
  '3x10': {
    name: '3x10',
    sets: 3,
    repsPerSet: [10, 10, 10],
    percentages: [65, 70, 75]
  },
  '3x5': {
    name: '3x5',
    sets: 3,
    repsPerSet: [5, 5, 5],
    percentages: [75, 80, 85]
  },
  '3x3': {
    name: '3x3',
    sets: 3,
    repsPerSet: [3, 3, 3],
    percentages: [80, 85, 90]
  },
  '10-10-8-8': {
    name: '10-10-8-8',
    sets: 4,
    repsPerSet: [10, 10, 8, 8],
    percentages: [65, 70, 75, 80]
  },
  '8-8-6-6': {
    name: '8-8-6-6',
    sets: 4,
    repsPerSet: [8, 8, 6, 6],
    percentages: [70, 75, 80, 85]
  },
  '5-5-3-3': {
    name: '5-5-3-3',
    sets: 4,
    repsPerSet: [5, 5, 3, 3],
    percentages: [80, 85, 90, 92.5]
  },
  'wave-6-3-6-3': {
    name: 'Wave 6-3-6-3',
    sets: 4,
    repsPerSet: [6, 3, 6, 3],
    percentages: [75, 85, 80, 90]
  },
  'wave-4-2-4-2': {
    name: 'Wave 4-2-4-2 (Heavy)',
    sets: 4,
    repsPerSet: [4, 2, 4, 2],
    percentages: [82.5, 92.5, 85, 95]
  },
  'wave-3-1-3-1': {
    name: 'Wave 3-1-3-1 (Max)',
    sets: 4,
    repsPerSet: [3, 1, 3, 1],
    percentages: [87.5, 92.5, 90, 97.5]
  },
  '5x5': {
    name: '5x5',
    sets: 5,
    repsPerSet: [5, 5, 5, 5, 5],
    percentages: [75, 77.5, 80, 82.5, 85]
  },
  'gvt-10x10': {
    name: 'GVT 10x10',
    sets: 10,
    repsPerSet: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    percentages: [62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5]
  },
  'wave-8-6-8-4': {
    name: 'Wave 8-6-8-4',
    sets: 4,
    repsPerSet: [8, 6, 8, 4],
    percentages: [72.5, 80, 77.5, 85]
  },
  'wave-4-2-4-2-2': {
    name: 'Wave 4-2-4-2-2',
    sets: 5,
    repsPerSet: [4, 2, 4, 2, 2],
    percentages: [82.5, 90, 85, 92.5, 95]
  },
  'wave-5-5-3-3': {
    name: 'Wave 5-5-3-3',
    sets: 4,
    repsPerSet: [5, 5, 3, 3],
    percentages: [77.5, 80, 85, 87.5]
  },
  'dynamic-8x3': {
    name: 'Dynamic 8x3',
    sets: 8,
    repsPerSet: [3, 3, 3, 3, 3, 3, 3, 3],
    percentages: [75, 75, 75, 75, 75, 75, 75, 75]
  },
  'dynamic-3x6': {
    name: 'Dynamic 3x6',
    sets: 3,
    repsPerSet: [6, 6, 6],
    percentages: [65, 65, 65]
  }
};

// Apply a scheme to an exercise, returning updated sets array
export function applyScheme(schemeKey, exercise) {
  const scheme = schemePresets[schemeKey];
  if (!scheme) return exercise;

  const sets = scheme.repsPerSet.map((reps, i) => ({
    id: Date.now() + i,
    reps,
    percentage: scheme.percentages[i],
    isWarmup: false,
    manualWeight: null
  }));

  return {
    ...exercise,
    sets,
    scheme: schemeKey,
    isPercentageBased: true
  };
}
