// Percentage calculation utilities
import { exerciseCategories } from '../data/exerciseLibrary';

// Generate percentage options from 40% to 105% in 2.5% increments
export const percentageOptions = [];
for (let i = 40; i <= 105; i += 2.5) {
  percentageOptions.push(i);
}

// ── Qualifier multiplier map ──
const QUALIFIER_MULTIPLIER = {
  '': 1,
  'total': 1,
  'together': 1,
  'each': 2,
  'each arm': 2,
  'each leg': 2,
  'each side': 2,
  'all one arm first': 2,
  'all one leg first': 2,
  'x2 combo': 2,
  'x3 combo': 3,
  'x4 combo': 4,
};

function getQualifierMultiplier(qualifier) {
  return QUALIFIER_MULTIPLIER[qualifier || ''] ?? 1;
}

// ── Exercise movement lookup (built once) ──
let _movementCache = null;
function getMovementMap() {
  if (_movementCache) return _movementCache;
  _movementCache = {};
  for (const cat of Object.values(exerciseCategories)) {
    for (const sub of Object.values(cat.subcategories || {})) {
      for (const ex of (sub.exercises || [])) {
        if (ex.name && ex.movement) {
          _movementCache[ex.name.toLowerCase()] = ex.movement;
        }
      }
    }
  }
  return _movementCache;
}

const UPPER_MOVEMENTS = new Set(['Push', 'Pull']);
const LOWER_MOVEMENTS = new Set(['Squat', 'Hinge', 'Hip']);

// Classify exercise as 'upper', 'lower', or 'other'
export function classifyExercise(exerciseName) {
  if (!exerciseName) return 'other';
  const map = getMovementMap();
  const movements = map[exerciseName.toLowerCase()];

  if (movements) {
    for (const m of movements) {
      if (UPPER_MOVEMENTS.has(m)) return 'upper';
      if (LOWER_MOVEMENTS.has(m)) return 'lower';
    }
    return 'other';
  }

  // Fallback: use name heuristics
  const name = exerciseName.toLowerCase();
  if (name.includes('squat') || name.includes('lunge') || name.includes('leg') || name.includes('deadlift') || name.includes('rdl') || name.includes('hip thrust') || name.includes('good morning') || name.includes('glute') || name.includes('hamstring') || name.includes('calf')) return 'lower';
  if (name.includes('bench') || name.includes('press') || name.includes('row') || name.includes('pull') || name.includes('curl') || name.includes('tricep') || name.includes('fly') || name.includes('lat') || name.includes('shoulder') || name.includes('delt')) return 'upper';
  return 'other';
}

// ── Parse reps ──
// Handles "10", "8,6,4", or number
function parseRepsTotal(reps, setsCount) {
  if (typeof reps === 'number') return reps * (setsCount || 1);
  if (!reps) return 0;
  const str = String(reps).trim();
  if (str.includes(',')) {
    return str.split(',').reduce((sum, r) => sum + (parseFloat(r.trim()) || 0), 0);
  }
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num * (setsCount || 1);
}

// Calculate weight from percentage of max, rounded to nearest 5 lbs
export function calculateWeight(percentage, baseMax) {
  const weight = (baseMax * percentage) / 100;
  return Math.round(weight / 5) * 5;
}

// Calculate tonnage for a single exercise
export function calculateExerciseTonnage(exercise, mainMaxes) {
  const multiplier = getQualifierMultiplier(exercise.qualifier);
  const isDropSet = exercise.qualifier === 'drop set';
  const isStripSet = exercise.qualifier === 'strip set';

  // Percentage-based exercise with sets array
  if (exercise.isPercentageBased && Array.isArray(exercise.sets) && exercise.baseMax) {
    const baseMax = mainMaxes[exercise.baseMax] || 0;
    return exercise.sets.reduce((total, set) => {
      if (set.isWarmup) return total;

      // Main set tonnage
      const weight = set.manualWeight || calculateWeight(set.percentage || 0, baseMax);
      let setTonnage = (set.reps || 0) * weight;

      // Add drop set tonnage (for drop set and strip set)
      if ((isDropSet || isStripSet) && set.dropPercentage && set.dropReps) {
        const dropWeight = calculateWeight(set.dropPercentage, baseMax);
        setTonnage += set.dropReps * dropWeight;
      }

      // Add strip set tonnage (third drop, only for strip set)
      if (isStripSet && set.stripPercentage && set.stripReps) {
        const stripWeight = calculateWeight(set.stripPercentage, baseMax);
        setTonnage += set.stripReps * stripWeight;
      }

      return total + setTonnage;
    }, 0) * multiplier;
  }

  // Non-percentage exercise with manual weight
  const weight = parseFloat(exercise.weight) || 0;
  if (weight === 0) return 0;
  const totalReps = parseRepsTotal(exercise.reps, parseInt(exercise.setsCount) || 1);
  return totalReps * weight * multiplier;
}

// Calculate total workout tonnage across all blocks
export function calculateWorkoutTonnage(blocks, mainMaxes) {
  return (blocks || []).reduce((total, block) => {
    if (block.type === 'theme') return total;
    return total + (block.exercises || []).reduce((exTotal, exercise) => {
      return exTotal + calculateExerciseTonnage(exercise, mainMaxes);
    }, 0);
  }, 0);
}

// Calculate tonnage split by upper / lower / total
export function calculateTonnageByCategory(blocks, mainMaxes) {
  let upper = 0, lower = 0, total = 0;
  for (const block of (blocks || [])) {
    if (block.type === 'theme') continue;
    for (const exercise of (block.exercises || [])) {
      const t = calculateExerciseTonnage(exercise, mainMaxes);
      if (t === 0) continue;
      total += t;
      const cat = classifyExercise(exercise.name);
      if (cat === 'upper') upper += t;
      else if (cat === 'lower') lower += t;
    }
  }
  return { upper, lower, total };
}

// ── Cardio totals ──
function parseDuration(str) {
  if (!str) return 0;
  const s = String(str).trim().toLowerCase();
  // "20 min", "20min", "30s", "1:30", "90"
  if (s.includes(':')) {
    const parts = s.split(':');
    return (parseFloat(parts[0]) || 0) + ((parseFloat(parts[1]) || 0) / 60);
  }
  if (s.includes('min')) return parseFloat(s) || 0;
  if (s.includes('s') && !s.includes('min')) return (parseFloat(s) || 0) / 60;
  if (s.includes('hr') || s.includes('hour')) return (parseFloat(s) || 0) * 60;
  return parseFloat(s) || 0; // assume minutes
}

function convertToMiles(distance, unit) {
  const dist = parseFloat(distance) || 0;
  if (!dist) return 0;
  switch (unit) {
    case 'm': return dist / 1609.34;      // meters to miles
    case 'yd': return dist / 1760;        // yards to miles
    case 'ft': return dist / 5280;        // feet to miles
    case 'km': return dist * 0.621371;    // km to miles
    case 'mi': return dist;               // already miles
    default: return dist;                 // assume miles if no unit
  }
}

export function calculateCardioTotals(blocks) {
  let totalMinutes = 0, totalMiles = 0;
  for (const block of (blocks || [])) {
    if (!['conditioning', 'movement'].includes(block.type)) continue;
    for (const exercise of (block.exercises || [])) {
      const sets = parseInt(exercise.setsCount) || 1;
      totalMinutes += parseDuration(exercise.duration || exercise.time) * sets;
      totalMiles += convertToMiles(exercise.distance, exercise.distanceUnit) * sets;
    }
  }
  return { totalMinutes: Math.round(totalMinutes * 10) / 10, totalMiles: Math.round(totalMiles * 100) / 100 };
}

// Check if a block type supports percentage controls
export function isStrengthBlock(blockType) {
  return ['straight-set', 'superset', 'triset'].includes(blockType);
}

// Check if an exercise name is a percentage-based lift
export function isPercentageBasedLift(exerciseName) {
  if (!exerciseName) return false;
  const name = exerciseName.toLowerCase();
  if (name.includes('bench press') || name.includes('close grip bench') || name.includes('floor press')) return true;
  if (name.includes('back squat') || name.includes('front squat') || name.includes('overhead squat')) return true;
  if (name.includes('deadlift') && !name.includes('romanian') && !name.includes('rdl')) return true;
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
  deadlift: 'Deadlift',
  bodyweight: 'Body Weight',
  manual: 'Manual Weight'
};

// Base max color classes
export const baseMaxColors = {
  bench: { bg: '#3b82f6', light: '#dbeafe', text: '#1e40af' },
  squat: { bg: '#22c55e', light: '#dcfce7', text: '#166534' },
  powerClean: { bg: '#f97316', light: '#ffedd5', text: '#9a3412' },
  deadlift: { bg: '#a855f7', light: '#f3e8ff', text: '#6b21a8' },
  bodyweight: { bg: '#6b7280', light: '#f3f4f6', text: '#374151' },
  manual: { bg: '#ec4899', light: '#fce7f3', text: '#9d174d' }
};
