// CNS-weighted reference volume.
//
// Glen's model: standardize all weights to a 100-lb reference, then weight
// the result by a CNS coefficient. This lets the coach compare planned
// volume across weeks, clients, and exercises regardless of actual loads —
// so you can see wave / deload / build cycles before any client has logged
// a single workout.
//
//   volume = totalReps × 100 × cnsCoefficient × qualifierMultiplier
//
// Bucketing is auto-derived from the exercise's existing equipment +
// movement metadata in exerciseLibrary.js — no per-exercise tagging needed:
//   compound  (1.0)  → barbell  AND  Push/Pull/Squat/Hinge/Hip
//   auxiliary (0.4)  → everything else (DB, machine, cable, isolation, …)
//
// An exercise may force a bucket via cnsBucket: 'compound' | 'auxiliary'.

import { exerciseCategories } from '../data/exerciseLibrary';

export const REFERENCE_LOAD = 100;
export const CNS_COEFFICIENTS = { compound: 1.0, auxiliary: 0.4 };

const COMPOUND_MOVEMENTS = new Set(['Push', 'Pull', 'Squat', 'Hinge', 'Hip']);

let _exerciseMetaCache = null;
function getExerciseMetaMap() {
  if (_exerciseMetaCache) return _exerciseMetaCache;
  _exerciseMetaCache = {};
  for (const cat of Object.values(exerciseCategories)) {
    for (const sub of Object.values(cat.subcategories || {})) {
      for (const ex of (sub.exercises || [])) {
        if (!ex.name) continue;
        _exerciseMetaCache[ex.name.toLowerCase()] = {
          movement: ex.movement || [],
          equipment: ex.equipment || [],
        };
      }
    }
  }
  return _exerciseMetaCache;
}

export function classifyCnsBucket(exerciseOrName) {
  if (!exerciseOrName) return 'auxiliary';
  const ex = typeof exerciseOrName === 'object' ? exerciseOrName : null;
  const name = ex ? (ex.name || '') : String(exerciseOrName);

  if (ex?.cnsBucket === 'compound' || ex?.cnsBucket === 'auxiliary') return ex.cnsBucket;

  const meta = getExerciseMetaMap()[name.toLowerCase()] || {};
  const eq = (ex?.equipment && ex.equipment.length ? ex.equipment : meta.equipment) || [];
  const mv = (ex?.movement  && ex.movement.length  ? ex.movement  : meta.movement) || [];

  const isBarbell = eq.some((e) => /barbell/i.test(e));
  const isCompoundMovement = mv.some((m) => COMPOUND_MOVEMENTS.has(m));

  return isBarbell && isCompoundMovement ? 'compound' : 'auxiliary';
}

const QUALIFIER_MULTIPLIER = {
  '':                    1,
  'total':               1,
  'together':            1,
  'each':                2,
  'each arm':            2,
  'each leg':            2,
  'each side':           2,
  'all one arm first':   2,
  'all one leg first':   2,
  'x2 combo':            2,
  'x3 combo':            3,
  'x4 combo':            4,
};

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

export function cnsVolumeForExercise(exercise) {
  if (!exercise) return 0;
  let totalReps = 0;
  if (exercise.isPercentageBased && Array.isArray(exercise.sets)) {
    totalReps = exercise.sets.reduce(
      (sum, s) => s.isWarmup ? sum : sum + (Number(s.reps) || 0),
      0,
    );
  } else {
    totalReps = parseRepsTotal(exercise.reps, parseInt(exercise.setsCount, 10) || 1);
  }
  if (totalReps === 0) return 0;

  const bucket = classifyCnsBucket(exercise);
  const coeff  = CNS_COEFFICIENTS[bucket];
  const qMult  = QUALIFIER_MULTIPLIER[exercise.qualifier || ''] ?? 1;

  return totalReps * REFERENCE_LOAD * coeff * qMult;
}

export function cnsVolumeForDay(blocks) {
  let compound = 0, auxiliary = 0;
  for (const block of (blocks || [])) {
    if (block.type === 'theme') continue;
    for (const ex of (block.exercises || [])) {
      const v = cnsVolumeForExercise(ex);
      if (v === 0) continue;
      if (classifyCnsBucket(ex) === 'compound') compound += v;
      else auxiliary += v;
    }
  }
  return { compound, auxiliary, total: compound + auxiliary };
}

export function cnsVolumeForProgram(allWorkouts, totalWeeks, daysPerWeek) {
  const rows = [];
  for (let w = 1; w <= totalWeeks; w++) {
    let compound = 0, auxiliary = 0;
    const days = [];
    for (let d = 1; d <= daysPerWeek; d++) {
      const blocks = allWorkouts[`${w}-${d}`] || [];
      const r = cnsVolumeForDay(blocks);
      compound += r.compound;
      auxiliary += r.auxiliary;
      days.push({ day: d, ...r });
    }
    rows.push({
      week: w,
      compound: Math.round(compound),
      auxiliary: Math.round(auxiliary),
      total: Math.round(compound + auxiliary),
      days,
    });
  }
  return rows;
}
