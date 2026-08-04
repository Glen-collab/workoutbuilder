// customExercises.js — shared handling for a coach's own saved exercises.
//
// A custom exercise used to be reachable ONLY from the "Build Combo / Custom
// Exercise" screen: the picker's global search built its pool from the four
// bundled libraries and nothing else, so a coach who saved "Foot Elevated
// Bulgarian Split Sqt (bwt)" and then searched for it got "no results" and
// reasonably concluded the save had failed.
//
// Customs now go in two places:
//   1. the global search pool  — so searching finds them like anything else
//   2. their chosen category/subcategory in the browse tree, PINNED TO THE TOP
//      so a coach can put an exercise where they expect to reach for it
//
// Placement is stored on the custom_exercises row (category + subcategory).
// Blank placement is fine — the exercise still turns up in search and on the
// custom shelf, it just doesn't claim a spot in the tree.

import { exerciseCategories } from '../data/exerciseLibrary';

const CF_IFRAME = (uid) => `https://iframe.videodelivery.net/${uid}`;

// Pretty label for a category/subcategory key ("warm_up" → "Warm Up").
export function prettyKey(key) {
  if (!key) return '';
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// [{ key, label, subs: [{ key, label }] }] for the placement dropdowns, built
// from the real library so it can never drift from what the picker shows.
export function placementOptions() {
  return Object.entries(exerciseCategories).map(([key, cat]) => ({
    key,
    label: cat?.label || prettyKey(key),
    subs: Object.entries(cat?.subcategories || {}).map(([sk, sub]) => ({
      key: sk,
      label: sub?.label || prettyKey(sk),
    })),
  }));
}

// A custom row → the exercise object shape the builder prescribes with.
// Deliberately NOT isUserDefined: it behaves like any library exercise and
// carries its name straight through to the tracker and the gym board.
export function customToExercise(ce) {
  const name = typeof ce === 'string' ? ce : ce?.name;
  const uid = typeof ce === 'string' ? '' : ce?.video_uid;
  return {
    name,
    equipment: [], movement: [], intent: [], contraindications: [],
    youtube: uid ? CF_IFRAME(uid) : '',
    isCustom: true,
  };
}

// Every custom as an exercise object — for the global search pool.
export function customsAsExercises(customs) {
  return (customs || []).filter((c) => c?.name).map(customToExercise);
}

// The customs a coach filed into this exact spot in the tree.
export function customsForPlacement(customs, category, subcategory) {
  if (!category) return [];
  return (customs || [])
    .filter((c) => c?.name && c.category === category && (c.subcategory || null) === (subcategory || null))
    .map(customToExercise);
}

// Pin this spot's customs to the top of a library list, without duplicating a
// name the library already has.
export function withCustomsPinned(exercises, customs, category, subcategory) {
  const mine = customsForPlacement(customs, category, subcategory);
  if (!mine.length) return exercises;
  const taken = new Set(mine.map((e) => e.name.toLowerCase()));
  return [...mine, ...(exercises || []).filter((e) => !taken.has((e?.name || '').toLowerCase()))];
}
