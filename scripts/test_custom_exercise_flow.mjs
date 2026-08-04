// End-to-end check of the coach custom-exercise flow, run as an "elite strength
// coach": invent an exercise that isn't in the library, file it somewhere, and
// prove it turns up everywhere the coach would look for it.
//
//   node scripts/test_custom_exercise_flow.mjs
//
// Live API calls hit production and CLEAN UP AFTER THEMSELVES (every fixture
// name is prefixed TESTFIX_ and deleted at the end). Pass --offline to skip the
// network and exercise only the picker logic.
//
// This imports the SAME modules the app imports — placementOptions,
// withCustomsPinned, resolveStrengthPin, getExercisesForSelection — so it can't
// drift from what ships.

import { exerciseCategories } from '../src/data/exerciseLibrary.js';
import { generalMovements } from '../src/data/generalMovements.js';
import { mobilityCategories } from '../src/data/mobilityExercises.js';
import { martialArtsCategories } from '../src/data/martialArtsLibrary.js';
import {
  placementOptions, customsAsExercises, withCustomsPinned, customToExercise,
} from '../src/utils/customExercises.js';
import {
  getExercisesForSelection, resolveStrengthPin, GM_PREFIX, MOB_PREFIX,
} from '../src/utils/exerciseTaxonomy.js';

const API = 'https://app.bestrongagain.com/api/workout';
const EMAIL = 'wisco.barbell@gmail.com';
const OFFLINE = process.argv.includes('--offline');

let pass = 0, fail = 0;
const failures = [];
function check(name, cond, detail = '') {
  if (cond) { pass++; console.log(`  ✅ ${name}`); }
  else { fail++; failures.push(`${name}${detail ? ` — ${detail}` : ''}`); console.log(`  ❌ ${name}${detail ? ` — ${detail}` : ''}`); }
}
function section(t) { console.log(`\n${'─'.repeat(66)}\n${t}\n${'─'.repeat(66)}`); }

// ── The coach's inventions. Deliberately nonsense names so a collision with a
//    real library entry is impossible and a "found it" is never a false pass.
const FIXTURES = [
  { name: 'TESTFIX_ Kettlebell Sofa Hinge',      category: 'legs',                        subcategory: 'dumbbell',   where: 'Legs → Dumbbell' },
  { name: 'TESTFIX_ Overhead Anchor Pull',        category: 'back',                        subcategory: 'functional', where: 'Back → Functional (also the virtual Functional tile)' },
  { name: 'TESTFIX_ Snatch Ladder Complex',       category: 'oly_complexes',               subcategory: 'barbell',    where: 'Olympic → Barbell (redirect key)' },
  { name: 'TESTFIX_ Ruck Carry Stagger',          category: 'tactical',                    subcategory: 'functional', where: 'Tactical → Functional (redirect key)' },
  { name: 'TESTFIX_ Ankle Tap Skip',              category: 'warm_up',                     subcategory: 'general',    where: 'Warm Up → General' },
  { name: 'TESTFIX_ Exhale Rib Pulldown',         category: 'cool_down',                   subcategory: 'mobility',   where: 'Cool Down → Mobility' },
  { name: 'TESTFIX_ Crossover Bound Drill',       category: `${GM_PREFIX}movement_drills`, subcategory: 'lateral',    where: 'Movement Drills → Lateral' },
  { name: 'TESTFIX_ Sled Rope Gasser',            category: `${GM_PREFIX}conditioning_general`, subcategory: null,    where: 'Conditioning (flat)' },
  { name: 'TESTFIX_ Couch Capsule Opener',        category: `${MOB_PREFIX}hip_mobility`,   subcategory: null,         where: 'Hip Mobility (flat)' },
  { name: 'TESTFIX_ Unfiled Floor Press',         category: '',                            subcategory: '',           where: 'nowhere — search only' },
];

const post = async (path, body) => {
  const res = await fetch(`${API}/${path}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  return { status: res.status, json: await res.json().catch(() => ({})) };
};

// ── 1. Placement options are honest ──────────────────────────────────────────
section('1. PLACEMENT OPTIONS — can the coach even choose these shelves?');
const opts = placementOptions();
const optKeys = new Set(opts.map((o) => o.key));
check('strength categories offered', optKeys.has('legs') && optKeys.has('back'));
check('warm-up + cool-down offered', optKeys.has('warm_up') && optKeys.has('cool_down'));
check('movement drills offered', optKeys.has(`${GM_PREFIX}movement_drills`));
check('conditioning offered', optKeys.has(`${GM_PREFIX}conditioning_general`));
check('mobility offered', optKeys.has(`${MOB_PREFIX}hip_mobility`));
check('unreachable senior_fitness NOT offered', !optKeys.has('senior_fitness'));
for (const f of FIXTURES.filter((x) => x.category)) {
  const opt = opts.find((o) => o.key === f.category);
  const subOk = !f.subcategory || (opt?.subs || []).some((s) => s.key === f.subcategory);
  check(`"${f.where}" is a real, selectable shelf`, !!opt && subOk);
}

// ── 2. Live API round-trip ───────────────────────────────────────────────────
let customs = [];
if (OFFLINE) {
  console.log('\n(offline mode — using local fixtures instead of the API)');
  customs = FIXTURES.map((f, i) => ({
    id: -1 - i, name: f.name, video_uid: null,
    category: f.category || null, subcategory: f.subcategory || null,
  }));
} else {
  section('2. LIVE API — save, then read back, exactly as the builder does');
  for (const f of FIXTURES) {
    const r = await post('save-custom-exercise.php', {
      email: EMAIL, name: f.name, video_uid: '',
      category: f.category, subcategory: f.subcategory,
    });
    check(`saved "${f.name}"`, r.status === 200 && r.json.success === true, `HTTP ${r.status}`);
  }
  const listed = await post('list-custom-exercises.php', { email: EMAIL });
  customs = listed.json.exercises || [];
  for (const f of FIXTURES) {
    const row = customs.find((c) => c.name === f.name);
    const catOk = (row?.category || '') === (f.category || '');
    const subOk = (row?.subcategory || '') === (f.subcategory || '');
    check(`"${f.name}" persisted with its filing`, !!row && catOk && subOk,
      row ? `got category=${row.category} sub=${row.subcategory}` : 'row missing');
  }

  // Re-filing must move, not duplicate — the coach changes their mind.
  const movable = FIXTURES[0];
  await post('save-custom-exercise.php', {
    email: EMAIL, name: movable.name, video_uid: '', category: 'chest', subcategory: 'barbell',
  });
  const after = (await post('list-custom-exercises.php', { email: EMAIL })).json.exercises || [];
  const hits = after.filter((c) => c.name === movable.name);
  check('re-filing moves the exercise (no duplicate row)', hits.length === 1, `found ${hits.length}`);
  check('re-filing actually changed the shelf', hits[0]?.category === 'chest' && hits[0]?.subcategory === 'barbell');
  // put it back for the browse tests below
  await post('save-custom-exercise.php', {
    email: EMAIL, name: movable.name, video_uid: '',
    category: movable.category, subcategory: movable.subcategory,
  });
  customs = (await post('list-custom-exercises.php', { email: EMAIL })).json.exercises || [];
}

const fixtureRows = customs.filter((c) => c.name.startsWith('TESTFIX_'));

// ── 3. Search — every search field in the app ────────────────────────────────
section('3. SEARCH — "I know I made this, let me just type it"');

// 3a. The picker's global search (ExerciseModal). Mirrors its pool construction.
function pickerSearch(term) {
  const flatten = (cats) => {
    const out = [];
    Object.values(cats || {}).forEach((cat) => {
      if (Array.isArray(cat)) out.push(...cat);
      else if (cat?.exercises) out.push(...cat.exercises);
      if (cat?.subcategories) {
        Object.values(cat.subcategories).forEach((sub) => {
          if (Array.isArray(sub)) out.push(...sub);
          else if (sub?.exercises) out.push(...sub.exercises);
        });
      }
    });
    return out;
  };
  let pool = [
    ...customsAsExercises(customs),
    ...flatten(exerciseCategories), ...flatten(mobilityCategories),
    ...flatten(generalMovements), ...flatten(martialArtsCategories),
  ];
  const seen = new Set();
  pool = pool.filter((ex) => (ex.name && !seen.has(ex.name)) && seen.add(ex.name));
  const t = term.toLowerCase();
  return pool.filter((ex) => ex.name.toLowerCase().includes(t));
}
for (const f of FIXTURES) {
  const hits = pickerSearch(f.name.slice(0, 22));
  check(`picker search finds "${f.name}"`, hits.some((h) => h.name === f.name));
}
check('unfiled exercise is still searchable',
  pickerSearch('TESTFIX_ Unfiled').some((h) => h.name === 'TESTFIX_ Unfiled Floor Press'));
check('partial/mid-word search works', pickerSearch('sofa hinge').length > 0);
check('search is case-insensitive', pickerSearch('KETTLEBELL SOFA').length > 0);

// 3b. The Exercises & Videos manager search (its own pool).
function managerSearch(term) {
  const out = [];
  const names = (cats) => Object.values(cats || {}).forEach((cat) => {
    (Array.isArray(cat) ? cat : cat?.exercises || []).forEach((ex) => ex?.name && out.push(ex.name));
    if (cat?.subcategories) Object.values(cat.subcategories).forEach((sub) => {
      (Array.isArray(sub) ? sub : sub?.exercises || []).forEach((ex) => ex?.name && out.push(ex.name));
    });
  });
  names(exerciseCategories); names(mobilityCategories); names(generalMovements); names(martialArtsCategories);
  customs.forEach((c) => c?.name && out.push(c.name));
  const t = term.toLowerCase();
  return [...new Set(out)].filter((n) => n.toLowerCase().includes(t));
}
for (const f of FIXTURES) {
  check(`Exercises & Videos search finds "${f.name}"`, managerSearch(f.name.slice(0, 22)).includes(f.name));
}

// ── 4. Browse — is it on the shelf the coach filed it to? ────────────────────
section('4. BROWSE — "it should be right where I put it"');

// Strength grid: exactly what ExerciseModal renders for a muscle group + sub.
function browseStrength(muscleGroup, subcategory) {
  const pin = resolveStrengthPin(muscleGroup, subcategory);
  return withCustomsPinned(getExercisesForSelection(muscleGroup, subcategory), customs, pin.cats, pin.sub);
}
const legs = browseStrength('legs', 'dumbbell');
check('Legs → Dumbbell lists the Sofa Hinge', legs.some((e) => e.name === 'TESTFIX_ Kettlebell Sofa Hinge'));
// Pinned means "above every library exercise", NOT "index 0" — the coach may
// have filed several here, and they order among themselves alphabetically.
const firstLibraryAt = legs.findIndex((e) => !e.isCustom);
const sofaAt = legs.findIndex((e) => e.name === 'TESTFIX_ Kettlebell Sofa Hinge');
check('...and it sits ABOVE every library exercise, not buried',
  sofaAt >= 0 && sofaAt < firstLibraryAt, `custom at ${sofaAt}, first library at ${firstLibraryAt}`);
check('...without wiping out the real library entries', legs.length > 5);

check('Back → Functional lists the Anchor Pull',
  browseStrength('back', 'functional').some((e) => e.name === 'TESTFIX_ Overhead Anchor Pull'));
check('Olympic → Barbell lists the Snatch Ladder (redirect key resolves)',
  browseStrength('olympic_lifting', 'barbell').some((e) => e.name === 'TESTFIX_ Snatch Ladder Complex'));
check('Tactical → Functional lists the Ruck Carry (redirect key resolves)',
  browseStrength('first_responder', 'functional').some((e) => e.name === 'TESTFIX_ Ruck Carry Stagger'));
check('virtual Functional → Upper Body gathers the Anchor Pull',
  browseStrength('functional', 'upper_body').some((e) => e.name === 'TESTFIX_ Overhead Anchor Pull'));

// Warm-up / cool-down path (browses exerciseCategories.warm_up|cool_down).
function browseWarmupCooldown(key, sub) {
  const c = exerciseCategories[key]?.subcategories?.[sub];
  return withCustomsPinned(Array.isArray(c) ? c : (c?.exercises || []), customs, key, sub);
}
check('Warm Up → General lists the Ankle Tap Skip',
  browseWarmupCooldown('warm_up', 'general').some((e) => e.name === 'TESTFIX_ Ankle Tap Skip'));
check('Cool Down → Mobility lists the Rib Pulldown',
  browseWarmupCooldown('cool_down', 'mobility').some((e) => e.name === 'TESTFIX_ Exhale Rib Pulldown'));

// Movement / conditioning / mobility blocks (own libraries, prefixed keys).
function browseNonStrength(cats, prefix, catKey, sub) {
  const cat = cats[catKey];
  const base = sub ? (cat?.subcategories?.[sub]?.exercises || []) : (Array.isArray(cat) ? cat : cat?.exercises || []);
  return withCustomsPinned(base, customs, prefix + catKey, sub || null);
}
check('Movement Drills → Lateral lists the Crossover Bound',
  browseNonStrength(generalMovements, GM_PREFIX, 'movement_drills', 'lateral')
    .some((e) => e.name === 'TESTFIX_ Crossover Bound Drill'));
check('Conditioning lists the Sled Rope Gasser',
  browseNonStrength(generalMovements, GM_PREFIX, 'conditioning_general', null)
    .some((e) => e.name === 'TESTFIX_ Sled Rope Gasser'));
check('Hip Mobility lists the Couch Capsule Opener',
  browseNonStrength(mobilityCategories, MOB_PREFIX, 'hip_mobility', null)
    .some((e) => e.name === 'TESTFIX_ Couch Capsule Opener'));

// ── 5. It must NOT leak onto shelves it wasn't filed to ──────────────────────
section('5. NO LEAKS — a filed exercise appears in ONE place, not everywhere');
check('Sofa Hinge is not in Chest → Barbell',
  !browseStrength('chest', 'barbell').some((e) => e.name === 'TESTFIX_ Kettlebell Sofa Hinge'));
check('Sofa Hinge is not in Legs → Machine (wrong sub-group)',
  !browseStrength('legs', 'machine').some((e) => e.name === 'TESTFIX_ Kettlebell Sofa Hinge'));
check('unfiled exercise claims no shelf at all',
  !browseStrength('legs', 'dumbbell').some((e) => e.name === 'TESTFIX_ Unfiled Floor Press')
  && !browseStrength('chest', 'barbell').some((e) => e.name === 'TESTFIX_ Unfiled Floor Press'));
check('Movement Drills → Linear does not get the Lateral drill',
  !browseNonStrength(generalMovements, GM_PREFIX, 'movement_drills', 'linear')
    .some((e) => e.name === 'TESTFIX_ Crossover Bound Drill'));
check('mobility placement does not leak into strength (prefix collision check)',
  !browseStrength('legs', 'dumbbell').some((e) => e.name === 'TESTFIX_ Couch Capsule Opener'));

// ── 6. The exercise object the builder actually prescribes with ──────────────
section('6. USABLE — does it behave like a real exercise once picked?');
const withVid = customToExercise({ name: 'X', video_uid: 'abc123' });
const noVid = customToExercise({ name: 'Y', video_uid: null });
check('a video uid becomes a playable iframe URL', withVid.youtube === 'https://iframe.videodelivery.net/abc123');
check('no video means an empty url, not "undefined"', noVid.youtube === '');
check('carries the array fields the builder expects',
  Array.isArray(withVid.equipment) && Array.isArray(withVid.movement) && Array.isArray(withVid.intent));
check('is NOT flagged isUserDefined (so it prescribes normally)', withVid.isUserDefined === undefined);
check('name survives intact', customToExercise({ name: 'TESTFIX_ Kettlebell Sofa Hinge' }).name === 'TESTFIX_ Kettlebell Sofa Hinge');

// A custom whose name matches a library exercise must win, so the coach's own
// filmed version is the one that gets used.
const dupName = Object.values(exerciseCategories.legs.subcategories.barbell.exercises || [])[0]?.name
  || 'Back Squat';
const shadow = [{ id: -99, name: dupName, video_uid: 'coachvid', category: null, subcategory: null }];
const pool = [...customsAsExercises(shadow), { name: dupName, youtube: '' }];
const seen2 = new Set();
const deduped = pool.filter((e) => !seen2.has(e.name) && seen2.add(e.name));
check(`coach's own version of "${dupName}" wins dedup`, deduped[0]?.youtube === 'https://iframe.videodelivery.net/coachvid');

// ── 7. Cleanup ───────────────────────────────────────────────────────────────
if (!OFFLINE) {
  section('7. CLEANUP');
  let removed = 0;
  for (const row of fixtureRows) {
    const r = await post('delete-custom-exercise.php', { email: EMAIL, id: row.id });
    if (r.json.success) removed++;
  }
  const left = ((await post('list-custom-exercises.php', { email: EMAIL })).json.exercises || [])
    .filter((c) => c.name.startsWith('TESTFIX_'));
  check(`removed all ${removed} test fixtures`, left.length === 0, `${left.length} left behind`);
}

console.log(`\n${'═'.repeat(66)}`);
console.log(`  ${pass} passed, ${fail} failed`);
if (fail) { console.log('\n  FAILURES:'); failures.forEach((f) => console.log(`   • ${f}`)); }
console.log(`${'═'.repeat(66)}\n`);
process.exit(fail ? 1 : 0);
