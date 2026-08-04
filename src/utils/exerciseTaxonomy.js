// exerciseTaxonomy.js — how the picker's navigation maps onto the libraries.
//
// Lifted out of ExerciseModal.jsx so it can be imported by plain Node (tests)
// without pulling React through a JSX transform, and so the pinning of a
// coach's own exercises resolves keys through the EXACT same rules the browse
// itself uses. Keeping two copies of this mapping is how custom exercises filed
// under Olympic and Tactical silently failed to appear.
//
// Three quirks live here:
//   • REDIRECT_MAP     — a grid tile whose key isn't the library key
//   • VIRTUAL_CATEGORIES — a tile that gathers ONE subcategory from MANY parts
//   • library prefixes — movement/mobility live in their own libraries, and
//     their keys collide with strength ones (both have a "sprint_warmup"), so a
//     stored placement namespaces them. Bare = exerciseCategories, which keeps
//     placements saved before prefixes existed working unchanged.

import { exerciseCategories } from '../data/exerciseLibrary';
import { generalMovements } from '../data/generalMovements';
import { mobilityCategories } from '../data/mobilityExercises';

export const VIRTUAL_CATEGORIES = { functional: 'functional', corrective: 'corrective' };
export const REDIRECT_MAP = { olympic_lifting: 'oly_complexes', first_responder: 'tactical' };
export const UPPER_PARTS = ['chest', 'back', 'shoulders', 'biceps', 'triceps', 'core'];
export const LOWER_PARTS = ['legs'];

export const GM_PREFIX = 'gm:';    // generalMovements — Movement / Conditioning blocks
export const MOB_PREFIX = 'mob:';  // mobilityCategories — Mobility blocks

export function gmKey(k) { return `${GM_PREFIX}${k}`; }
export function mobKey(k) { return `${MOB_PREFIX}${k}`; }

export function getExercisesForSelection(muscleGroup, subcategory) {
  // Virtual categories (functional/corrective → upper_body/lower_body)
  if (VIRTUAL_CATEGORIES[muscleGroup]) {
    const subKey = VIRTUAL_CATEGORIES[muscleGroup];
    const parts = subcategory === 'upper_body' ? UPPER_PARTS : LOWER_PARTS;
    const results = [];
    for (const part of parts) {
      const cat = exerciseCategories[part];
      const sub = cat?.subcategories?.[subKey];
      if (sub) results.push(...(Array.isArray(sub) ? sub : sub.exercises || []));
    }
    return results;
  }

  // Redirected categories (olympic_lifting → oly_complexes, first_responder → tactical)
  const resolvedKey = REDIRECT_MAP[muscleGroup] || muscleGroup;
  const mg = exerciseCategories[resolvedKey];
  if (mg?.subcategories?.[subcategory]) {
    const sub = mg.subcategories[subcategory];
    return Array.isArray(sub) ? sub : sub.exercises || [];
  }
  return [];
}

// Which stored placement(s) belong on the strength screen the coach is looking
// at. Returns the category keys to match and the subcategory to match, already
// resolved through the redirect/virtual rules above.
export function resolveStrengthPin(muscleGroup, subcategory) {
  if (VIRTUAL_CATEGORIES[muscleGroup]) {
    return {
      cats: subcategory === 'upper_body' ? UPPER_PARTS : LOWER_PARTS,
      sub: VIRTUAL_CATEGORIES[muscleGroup],
    };
  }
  return { cats: [REDIRECT_MAP[muscleGroup] || muscleGroup], sub: subcategory };
}

// Categories reachable in the picker, per library. Anything not listed here has
// no route in, so filing into it would hide the exercise from browse entirely.
export function reachableStrengthKeys() {
  // senior_fitness is in exerciseLibrary.js but has no MuscleGroupGrid tile and
  // no other entry point.
  return Object.keys(exerciseCategories).filter((k) => k !== 'senior_fitness');
}
export function reachableMovementKeys() { return Object.keys(generalMovements || {}); }
export function reachableMobilityKeys() { return Object.keys(mobilityCategories || {}); }
