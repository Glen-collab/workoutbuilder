// Unified CNS / neural-load model — the sprint-coach fatigue engine.
//
// Every effort costs the nervous system in proportion to its CNS rating (1-5).
// Jumps, sprints, AND lifting all map onto the SAME currency (no fake
// multiplier): load = CNS rating × number of efforts, with distance-driven
// (tempo) work scaled down so it doesn't masquerade as neural work.
//
//   Plyo (Contacts)  → cns × total contacts        (sets × reps)
//   Sprint (Reps)    → cns × total efforts         (# of runs)
//   Tempo (Distance) → cns × (total yards / 100)    (volume, low neural)
//   Lifting          → LIFT_CNS[bucket] × work reps (compound 5 / auxiliary 2)
//
// v1 coefficients are deliberately simple — tune once real weeks are on it.

import { classifyMovement, LIFT_CNS } from '../data/movementClassification.js';
import { classifyCnsBucket } from './volumeCalc.js';

function totalReps(exercise) {
  if (exercise.isPercentageBased && Array.isArray(exercise.sets)) {
    return exercise.sets.reduce((s, set) => set.isWarmup ? s : s + (Number(set.reps) || 0), 0);
  }
  const setsCount = parseInt(exercise.setsCount, 10) || (Array.isArray(exercise.sets) ? exercise.sets.length : 1) || 1;
  const reps = exercise.reps;
  if (typeof reps === 'number') return reps * setsCount;
  if (!reps) return setsCount; // no rep count (e.g. a sprint set) → count the efforts
  const str = String(reps).trim();
  if (str.includes(',')) return str.split(',').reduce((sum, r) => sum + (parseFloat(r.trim()) || 0), 0);
  const n = parseFloat(str);
  return isNaN(n) ? setsCount : n * setsCount;
}

// CNS load for one exercise + which modality/tier it belongs to.
export function cnsLoadForExercise(exercise) {
  if (!exercise || !exercise.name) return { load: 0, cns: 0, modality: 'other', contacts: 0, distance: 0 };
  const efforts = totalReps(exercise);
  const cls = classifyMovement(exercise.name);

  if (cls && cls.cns > 0) {
    let load = 0, contacts = 0, distance = 0;
    if (cls.driver === 'Distance') {
      const per = parseFloat(exercise.distance) || 0;
      distance = per * (efforts || 1);
      load = distance > 0 ? cls.cns * (distance / 100) : cls.cns * efforts;
    } else {
      // Contacts or Reps (or Time) → each effort costs the CNS rating.
      if (cls.driver === 'Contacts') contacts = efforts;
      load = cls.cns * efforts;
    }
    const modality = /Plyo/.test(cls.type) ? 'jump' : /Sprint|Run/.test(cls.type) ? 'sprint' : /Agility|Technical|Drill/.test(cls.type) ? 'drill' : 'movement';
    return { load, cns: cls.cns, modality, contacts, distance };
  }

  // Not a tagged movement → treat as lifting. Map onto the same 1-5 scale.
  if (efforts === 0) return { load: 0, cns: 0, modality: 'lift', contacts: 0, distance: 0 };
  const bucket = classifyCnsBucket(exercise);
  const cns = LIFT_CNS[bucket] || 2;
  return { load: cns * efforts, cns, modality: 'lift', contacts: 0, distance: 0 };
}

export function cnsLoadForDay(blocks) {
  let total = 0, contacts = 0, distance = 0;
  const byTier = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const byModality = { lift: 0, jump: 0, sprint: 0, drill: 0, movement: 0, other: 0 };
  for (const block of (blocks || [])) {
    if (block.type === 'theme') continue;
    for (const ex of (block.exercises || [])) {
      const r = cnsLoadForExercise(ex);
      if (r.load <= 0) continue;
      total += r.load;
      if (byTier[r.cns] != null) byTier[r.cns] += r.load;
      byModality[r.modality] = (byModality[r.modality] || 0) + r.load;
      contacts += r.contacts;
      distance += r.distance;
    }
  }
  return { total, byTier, byModality, contacts, distance };
}

// HIGH day = a day whose load is in the top third of this program's non-zero
// days (Francis high/low) — used to flag high days <48h apart on the calendar.
export function cnsLoadForProgram(allWorkouts, totalWeeks, daysPerWeek) {
  const weeks = [];
  const allDayLoads = [];
  for (let w = 1; w <= totalWeeks; w++) {
    const days = [];
    let weekTotal = 0, weekContacts = 0, weekDistance = 0;
    for (let d = 1; d <= daysPerWeek; d++) {
      const r = cnsLoadForDay(allWorkouts[`${w}-${d}`] || []);
      days.push({ day: d, total: Math.round(r.total), byTier: r.byTier, byModality: r.byModality, contacts: r.contacts, distance: Math.round(r.distance) });
      weekTotal += r.total; weekContacts += r.contacts; weekDistance += r.distance;
      if (r.total > 0) allDayLoads.push(r.total);
    }
    weeks.push({ week: w, total: Math.round(weekTotal), contacts: weekContacts, distance: Math.round(weekDistance), days });
  }
  // Threshold for a "HIGH" day = 66th percentile of non-zero day loads.
  const sorted = allDayLoads.slice().sort((a, b) => a - b);
  const highThreshold = sorted.length ? sorted[Math.floor(sorted.length * 0.66)] : Infinity;
  weeks.forEach((wk) => wk.days.forEach((d) => { d.intensity = d.total === 0 ? 'rest' : d.total >= highThreshold ? 'high' : 'low'; }));
  return { weeks, highThreshold: Math.round(highThreshold) };
}
