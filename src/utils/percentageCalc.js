// Percentage calculation utilities

// Generate percentage options from 40% to 105% in 2.5% increments
export const percentageOptions = [];
for (let i = 40; i <= 105; i += 2.5) {
  percentageOptions.push(i);
}

// Calculate weight from percentage of max, rounded to nearest 5 lbs
export function calculateWeight(percentage, baseMax) {
  const weight = (baseMax * percentage) / 100;
  return Math.round(weight / 5) * 5;
}

// Calculate tonnage for a single exercise
export function calculateExerciseTonnage(exercise, mainMaxes) {
  if (!exercise.sets || !exercise.baseMax) return 0;
  const baseMax = mainMaxes[exercise.baseMax] || 0;
  return exercise.sets.reduce((total, set) => {
    const weight = set.manualWeight || calculateWeight(set.percentage || 0, baseMax);
    return total + ((set.reps || 0) * weight);
  }, 0);
}

// Calculate total workout tonnage across all exercises in all blocks
export function calculateWorkoutTonnage(blocks, mainMaxes) {
  return blocks.reduce((total, block) => {
    if (!isStrengthBlock(block.type)) return total;
    return total + (block.exercises || []).reduce((exTotal, exercise) => {
      return exTotal + calculateExerciseTonnage(exercise, mainMaxes);
    }, 0);
  }, 0);
}

// Check if a block type supports percentage controls
export function isStrengthBlock(blockType) {
  return ['straight-set', 'superset', 'triset'].includes(blockType);
}

// Check if an exercise name is a percentage-based lift
export function isPercentageBasedLift(exerciseName) {
  if (!exerciseName) return false;
  const name = exerciseName.toLowerCase();

  // Bench variations
  if (name.includes('bench press') || name.includes('close grip bench') || name.includes('floor press')) return true;
  // Squat variations
  if (name.includes('back squat') || name.includes('front squat') || name.includes('overhead squat')) return true;
  // Deadlift variations (exclude Romanian)
  if (name.includes('deadlift') && !name.includes('romanian') && !name.includes('rdl')) return true;
  // Olympic
  if (name.includes('power clean') || name.includes('full clean') || name.includes('hang clean')) return true;
  if (name.includes('power snatch') || name.includes('full snatch') || name.includes('hang snatch')) return true;
  if (name.includes('clean & jerk') || name.includes('clean and jerk')) return true;
  if (name.includes('push jerk') || name.includes('split jerk')) return true;

  return false;
}

// Suggest which base max to use for a given exercise name
export function suggestBaseMax(exerciseName) {
  if (!exerciseName) return 'bench';
  const name = exerciseName.toLowerCase();

  if (name.includes('squat') || name.includes('lunge') || name.includes('leg press') || name.includes('step')) return 'squat';
  if (name.includes('deadlift') || name.includes('rdl') || name.includes('romanian') || name.includes('hip thrust') || name.includes('good morning')) return 'deadlift';
  if (name.includes('clean') || name.includes('snatch') || name.includes('jerk')) return 'powerClean';
  return 'bench';
}

// Base max display names
export const baseMaxLabels = {
  bench: 'Bench',
  squat: 'Squat',
  powerClean: 'Clean',
  deadlift: 'Deadlift'
};

// Base max color classes
export const baseMaxColors = {
  bench: { bg: '#3b82f6', light: '#dbeafe', text: '#1e40af' },
  squat: { bg: '#22c55e', light: '#dcfce7', text: '#166534' },
  powerClean: { bg: '#f97316', light: '#ffedd5', text: '#9a3412' },
  deadlift: { bg: '#a855f7', light: '#f3e8ff', text: '#6b21a8' }
};
