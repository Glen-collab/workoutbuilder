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
import { generalMovements } from '../data/generalMovements';
import { mobilityCategories } from '../data/mobilityExercises';
import { martialArtsCategories } from '../data/martialArtsLibrary';
import {
  GM_PREFIX, MOB_PREFIX,
  reachableStrengthKeys, reachableMovementKeys, reachableMobilityKeys,
} from './exerciseTaxonomy';

const CF_IFRAME = (uid) => `https://iframe.videodelivery.net/${uid}`;

// Pretty label for a category/subcategory key ("warm_up" → "Warm Up").
export function prettyKey(key) {
  if (!key) return '';
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function optionsFrom(cats, keys, prefix, tag) {
  return keys
    .filter((k) => cats?.[k])
    .map((k) => {
      const cat = cats[k];
      return {
        key: `${prefix}${k}`,
        label: `${tag}${cat?.label || prettyKey(k)}`,
        subs: Object.entries(cat?.subcategories || {}).map(([sk, sub]) => ({
          key: sk,
          label: sub?.label || prettyKey(sk),
        })),
      };
    });
}

// [{ key, label, subs: [{ key, label }] }] for the placement dropdowns, built
// from the real libraries so it can never drift from what the picker shows.
//
// Covers all three browsable libraries, not just strength: a coach filming a
// movement drill or a hip-mobility piece needs to file it where they'd reach
// for it, and those blocks browse their own libraries. Keys are namespaced by
// library (see exerciseTaxonomy) because the names collide — strength has a
// warm_up/sprint_warmup subcategory and mobility has a top-level sprint_warmup.
export function placementOptions() {
  return [
    ...optionsFrom(exerciseCategories, reachableStrengthKeys(), '', ''),
    ...optionsFrom(generalMovements, reachableMovementKeys(), GM_PREFIX, '🏃 '),
    ...optionsFrom(mobilityCategories, reachableMobilityKeys(), MOB_PREFIX, '🧘 '),
  ];
}

// Every exercise in every bundled library, indexed by lowercase name. Built
// once, lazily, so importing this module stays cheap.
let _libIndex = null;
function libraryIndex() {
  if (_libIndex) return _libIndex;
  _libIndex = new Map();
  const walk = (cats) => Object.values(cats || {}).forEach((cat) => {
    (Array.isArray(cat) ? cat : cat?.exercises || []).forEach((ex) => {
      if (ex?.name && !_libIndex.has(ex.name.toLowerCase())) _libIndex.set(ex.name.toLowerCase(), ex);
    });
    if (cat?.subcategories) Object.values(cat.subcategories).forEach((sub) => {
      (Array.isArray(sub) ? sub : sub?.exercises || []).forEach((ex) => {
        if (ex?.name && !_libIndex.has(ex.name.toLowerCase())) _libIndex.set(ex.name.toLowerCase(), ex);
      });
    });
  });
  walk(exerciseCategories); walk(mobilityCategories);
  walk(generalMovements); walk(martialArtsCategories);
  return _libIndex;
}

export function libraryExerciseByName(name) {
  return libraryIndex().get((name || '').trim().toLowerCase()) || null;
}

// A saved row → the exercise object the builder prescribes with.
//
// A row is not always a brand-new exercise. Filing an EXISTING library exercise
// onto another shelf (a movement preset a coach also wants in Warm Up) stores
// the same kind of row, and rebuilding that as a bare object would strip its
// equipment, movement pattern, schemes and bundled video. So resolve against the
// library first and only invent an object when the name is genuinely new.
//
// Deliberately NOT isUserDefined: it behaves like any library exercise and
// carries its name straight through to the tracker and the gym board.
export function customToExercise(ce) {
  const name = typeof ce === 'string' ? ce : ce?.name;
  const uid = typeof ce === 'string' ? '' : ce?.video_uid;
  const lib = libraryExerciseByName(name);
  if (lib) {
    // The coach's own upload wins over the bundled demo when they filmed one.
    return { ...lib, ...(uid ? { youtube: CF_IFRAME(uid) } : {}), isCustom: true };
  }
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

// Resolve each exercise's demo video against the coach's own uploads
// (trainer_media, keyed by name) when the exercise doesn't carry one already.
//
// A coach's custom exercise stores its video in trainer_media, NOT in the
// custom_exercises row — so the object built from that row has an empty
// `youtube` and the picker showed it with no 📹 button. Worse, every list sorts
// exercises-with-video to the top, so a freshly filmed custom exercise sank
// BELOW the library entries it was supposed to be pinned above.
//
// Only fills an empty slot: a bundled library video still wins in the picker,
// matching what App.handleSelectExercise does when the exercise is added.
export function attachCoachVideos(exercises, getVideo) {
  if (!getVideo || !Array.isArray(exercises)) return exercises;
  return exercises.map((ex) => {
    if (!ex || ex.youtube) return ex;
    const mine = getVideo(ex.name);
    return mine ? { ...ex, youtube: mine } : ex;
  });
}

// Display order for any picker list.
//
// Two rules were quietly fighting each other: withCustomsPinned() puts a coach's
// own exercises at the top of the shelf they filed them to, and then the list
// re-sorted everything video-first — dropping an unfilmed custom below every
// library entry, which is exactly where the coach isn't looking for it.
//
// Deliberate resolution: the coach's own choice outranks the video heuristic.
// Their exercises first (filmed ones ahead of unfilmed), then library exercises
// (filmed ahead of unfilmed). Stable within each band, so library order holds.
export function sortForPicker(exercises) {
  if (!Array.isArray(exercises)) return exercises;
  const rank = (ex) => (ex?.isCustom ? 2 : 0) + (ex?.youtube && String(ex.youtube).trim() ? 1 : 0);
  return [...exercises].sort((a, b) => rank(b) - rank(a));
}

// Pin this spot's customs to the top of a library list, without duplicating a
// name the library already has. `category` accepts one key or several — the
// picker's "Functional"/"Corrective" tiles are virtual and aggregate the same
// subcategory across many body parts, so that view pins the customs from all
// of them at once.
export function withCustomsPinned(exercises, customs, category, subcategory) {
  const cats = Array.isArray(category) ? category : [category];
  const mine = cats.flatMap((c) => customsForPlacement(customs, c, subcategory));
  if (!mine.length) return exercises;
  const taken = new Set(mine.map((e) => e.name.toLowerCase()));
  return [...mine, ...(exercises || []).filter((e) => !taken.has((e?.name || '').toLowerCase()))];
}
