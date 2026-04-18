// inject_videos.js
// Injects Cloudflare Stream youtube URLs into existing saved MA + travel programs.
// Lists Glen's programs, filters MA/travel, loads each, walks every exercise,
// adds youtube URL where the name matches a library entry that has a video.
// Updates in place via update-program.php (preserves access codes — no client disruption).
//
// Usage:
//   node inject_videos.js              # dry-run (default) — prints what would change, nothing saved
//   node inject_videos.js --apply      # actually updates the programs

const TRAINER_EMAIL = 'wisco.barbell@gmail.com';
const API_BASE = 'https://app.bestrongagain.com/api/workout/';
const APPLY = process.argv.includes('--apply');

// ──────────────────────────────────────────────────────────
// Library name → Cloudflare UID map (from martialArtsLibrary.js, April 18 wire-up)
// ──────────────────────────────────────────────────────────
const UID = {
  // Kicks
  'Front Kick': 'c181be8ff06a59f7a61b7c7e3059c757',
  'Front Snap Kick': '61dede7440be82e3757e262784d53ea3',
  'Front Push Kick': 'c20134ef1a7d5b95d4308a571dc2848b',
  'Roundhouse Kick': 'c17346bb4e0fb04f11c93136734940fe',
  'Side Kick': '82c8ea1fbf9b417cdde16d5ab5fdf322',
  'Ax Kick (Inside/Out)': '6120d74612a009d462a4b365d0866a55',
  'Ax Kick (Outside/In)': 'd72b7cb11f7036c77a066fb82d4e30bd',
  'Step Behind Side Kick': '4c1306c148fe7b94bd44b4d2d0336f7e',
  'Skip Roundhouse Kick': 'cb43ae603a302ef3a4aaf95128e7539e',
  'Switch Roundhouse Kick': '7458f8ff1072036f032a97fbae5a8539',
  'Step-in Roundhouse Kick': '0ac2ce4c2c672fa6579f62b22b92d361',
  'Skip Front Kick': '79249a7259a04c3da3bb48508efad0b9',
  'Inside Crescent Kick': '3e6cd119b10faa37ab95bf9fedd6eed1',
  'Outside Crescent Kick': '893de3191f2946a6efc02efe91b4a198',
  'Switch Back Roundhouse Kick': '1c45d7103a631b16bac7e181525884fe',
  'Slide-in Side Kick': '883bcfc258d80b1d1290fae6c8f9a123',
  'Hook Kick': '5d7180e1bbdf08daf380427c33df9ac8',
  'Jump Hook Kick': '6d740b1bd0f061a7436c97f45026baba',
  'Jump Roundhouse Kick': 'd50b18ffda04be204a8ef81122f19917',
  'Jump Side Kick': '1168f5fa9950e3905e948fa72e0283c3',
  'Jump Front Kick': '531d8d2799454763a22cadc8b05213fe',
  'Spinning Wheel Kick': 'e1493237a78226672b2cf88e8ebf4d34',
  'Double Kick (same leg)': 'fe6d9dc0a15b644731a9b6c3cf336616',
  'Switch Inner Wheel Kick': 'e42c7d3f94be60a9f062b6ba70eaebbb',
  'Jump Step Behind Side Kick': '4ad0e39760be17650eae4604e4f6a38d',
  'Spinning Hook Kick': '041710e95baefb56287bc66e6491a0e6',
  '360 Roundhouse Kick': '1690876867f019d60dabf8df9c17b050',
  'Flying Side Kick': '117975435ddedc9b790840b69288b359',
  'Double Roundhouse (same leg)': '92371289327051eacf24cb7ebf8853f5',
  'Spinning Cross Kick': '8e718d8cf6e0cfa030e33038ea22434a',
  'Jump Switch Front Kick': 'd068fa9d39141ff97e9b87d44f0acf34',
  'Tornado Wheel Kick': 'ba848ecbee1ffcdfd751f867af05c8f9',
  '360 Spin Kick': '4892a2a5604becfbe676cb814ee2456f',
  'Jump Reverse Spin Kick': '87d7d0d1d95c6a2317093604992ea527',
  'Jump Spinning Hook Kick': '3a258ab7f83619a177feb869ab6b0c79',
  'Jumping Reverse Side Kick': 'c8df72ea41fe2cda6f0944f350dafa18',
  // Punches
  'Jab': 'abf87e57d7c00ed24e63e6a3b20a9840',
  'Cross': 'bd81286e09cfd1a1c8322ab5abffb96d',
  'Hook': '290d5f332094f7b119572d4bb4221993',
  'Uppercut': '16d695dc747f9ec73ce7042ddd210c6e',
  'Middle Punch': 'bb4612ab60df1edd473bf94f995c6d41',
  'High Punch': '465c0564504076859122efb8d4985e27',
  'Low Punch': '21dc2ce3ee533f854c2635d732bb08c6',
  // Strikes
  'Knife Hand Strike': '8685f63364ab3ff8bb7265f5a3af15c7',
  'Ridge Hand Strike': '63c69c427753c7997a5a836ff594e105',
  'Back Fist Strike': '2c8000cd41faf4977e64d0263fcce428',
  'Hammer Fist Strike': '3bf106a134f1f7f67cfaaf2c82344df2',
  'Elbow Strike Jab': 'e3607ed38e0728d48ed2bf671e4afb49',
  'Elbow Strike Cross': '28893b3670b157020653704aa40686fc',
  'Elbow Strike Uppercut': '72c536ae995719b3077c0aff53cd8678',
  'Elbow Strike (Downward)': 'ebd77725e2d90f690fda3a5a1bc5fb5b',
  'Palm Strike': '0284acfccd39696290fdc3d15c004817',
  'Knee Strike Switch — Jab Knee': '303ba7d29e5c25c5fcb297d27ceda75e',
  'Spear Hand Thrust': 'b33a850a856d296693eb1a84ea252d1a',
  // Blocks
  'Low Block': '2102ac24c1363291b29f37ffa38f3785',
  'Down Block': '83047da0d978a101d07a0e9e94c6942a',
  'Middle Block': '7c3395c56a2c41124cf85ffb9737ab47',
  'Middle Block (Inside/Out)': '5cb92cab967a6985b5cc284c7d9570fe',
  'Middle Block (Outside/In)': '13810470607d2753fdb20313fac3f00c',
  'High Block': '4b3ac7e4434a147be74e05d77fcf9371',
  'Knife Hand Middle Block': 'eb9e82464db15fb31c45b881802ba295',
  'Palm Block': '35fa52289e43d0a6f1bcc6e823e433b6',
  'X-Block (Cross Block)': 'ea6f3c5eace376426b55d3900ecc86c6',
  'Scissors Block': 'a9ce8994035478765d251c788b957280',
  'Check Low Kick Shin': 'c0a721c82a1df339424eea8148c6fb59',
  'Knife Hand Upper Block': 'eae11f57793c6de5817fe8510275f5a6',
  'Knife Hand Low Block': 'e574aeb25e06dad19bf4d6a2ef3a5034',
  'Thai Block High Low': '30315fdacfa7fae387667f1f574706ba',
  // Stretching / yoga
  'Downward Dog': '0f89e64e90e917f58882a3754562c2be',
  'Pushup Seal Stretch': 'a852e6dc2e8ee509b8ec21870f890e67',
  'Mountain Pose': '69005f5a16c917b94dd90d60281d73a8',
  'Warrior I': 'a524bc5be6510de6f3c5c4d10a82204b',
  'Warrior II': 'a05478a0524f9db8969bf00e931916b2',
  'Extended Side Angle': '490679d1430dca9c7f692c247cda7135',
  'Low Lunge': '062ce93186bb9fa882644346bc6c9b55',
  'Praying Hands Twist': '636fd4f35ea6f92c295421aa164a4143',
  'Pyramid Pose': '4996cf7011fe83201344a9bac7c4b6c9',
  'Triangle Pose': 'c9a556c0fca55abb912a04054b993955',
  'Half Forward Bend': '231347be68f7baa63c80546e6fed3745',
  'Full Squat (A to G)': '805a659fed1306bf87ddbe8471d4d3e2',
  'Raise Hands Pose (Standing)': 'f635cb18c48d0cba5d820fa1a54ba7b7',
  'Tree Pose (Balancing)': 'e35031dfa363afc94656c8d083ee6656',
  'Plank Pose': '58bb1b3f96c5950224c07ab28a334b73',
  'Cobra Pose (Back Bend)': '4aee1b529b3dd8e4fcca4d3381dbd7ef',
  'Cat Cow': '26116e187f62e26bdb1177a73ca182bb',
  "Child's Pose (Shoulder Stretch)": '1207033d5e5f0e69676d19e7139b6978',
  'Knees Wide Chinese Splits': '639bf75e24f11ce35069ff0a605ed568',
  'Staff Pose': 'a989fbdba58a40f3f9a7619a2257baa3',
  'Seated Forward Bend (Hamstring)': 'd0e0f0206d3e40fef73508f450e9e277',
  'Modified Hurdle Stretch': '5c5bf9b60f6b40437daf6f9af36be907',
  'Seated V Sit (Middle, Side, Side)': 'fe518f2f2ebea6cefd2bbd88a21d6864',
  'Seated Elbow to Knee Back Twist': 'e7c5aeb99b9867fc9a7b89009e5b2da4',
  'Butterfly Stretch': '4c974dc1cd2a696c7077adb4b6b540da',
  'Cross Legged Stretch (Indian Style)': 'd8c4d39aaf8cd5d99ea8fd3fb4efbe20',
  'Cross Legged Neck and Arm Stretches': 'cd3e9eb6c338f32318e6beb92abe34df',
  'Standing Poses 1 (Routine)': '4756c7f92ab8ba3a75d5517f093244f9',
  'Standing Poses 2 (Routine)': '07275ed57a7c0e1191c7c6184554d3e3',
  'Balancing & Bending (Routine)': '75e6f304e143a311242fbc9a41e37555',
  'Seated Poses (Routine)': 'b1adebac561892d82af9c3237c316eff',
};

const youtubeUrl = (uid) => `https://iframe.videodelivery.net/${uid}`;

// ──────────────────────────────────────────────────────────
// Smart name matcher — conservative (skips combos)
// ──────────────────────────────────────────────────────────
function findUid(rawName) {
  if (!rawName || typeof rawName !== 'string') return null;
  // Skip combos: "Jab-Cross", "X + Y", "X & Y", "X and Y"
  if (/[+&]/.test(rawName) || /\sand\s/i.test(rawName) || /-Cross/i.test(rawName)) {
    // Allow "-" inside known names like "Slide-in", "Step-in", "X-Block", "Switch — Jab Knee"
    // Only block "Word-Word" combos (no spaces around -). Let / scenarios pass.
  }
  // Reject anything with "+" (clear combo marker)
  if (rawName.includes('+')) return null;

  const tries = [];
  let n = rawName.trim();
  tries.push(n);

  // Strip trailing Korean paren: "X (Ap Chagi)" → "X"
  // Match: ( then capitalized word(s), then )
  let stripped = n.replace(/\s*\([A-Z][a-zA-Z]*(\s+[A-Za-z][a-zA-Z]*)*\)\s*$/, '').trim();
  if (stripped !== n) tries.push(stripped);

  // Strip "(both sides)", "(both legs)", "(each side)", "(Walking)", etc.
  let q = n.replace(/\s*\((both|each|all)\s+\w+\)\s*$/i, '').trim();
  if (q !== n) tries.push(q);
  q = n.replace(/\s*\(walking\)\s*$/i, '').trim();
  if (q !== n) tries.push(q);

  // Em-dash variation: "X — variation" → "X"
  if (n.includes('—')) {
    const base = n.split('—')[0].trim();
    tries.push(base);
  }

  // Leading "Slow X" → "X"
  const noSlow = n.replace(/^Slow\s+/i, '').trim();
  if (noSlow !== n) tries.push(noSlow);
  // Leading "Slow X — variation" → "X"
  const noSlowSplit = noSlow.split('—')[0].trim();
  if (noSlowSplit && noSlowSplit !== noSlow) tries.push(noSlowSplit);

  // " Chamber Hold" / " Chamber — ..." → strip "Chamber..."
  const noChamber = n.replace(/\s+Chamber.*$/i, '').trim();
  if (noChamber !== n) tries.push(noChamber);

  for (const t of tries) {
    if (UID[t]) return UID[t];
  }
  return null;
}

// ──────────────────────────────────────────────────────────
// Walk a workout (allWorkouts or blocks array) and inject
// ──────────────────────────────────────────────────────────
function injectIntoBlocks(blocks, log) {
  let changed = 0;
  for (const block of blocks || []) {
    if (!block || !Array.isArray(block.exercises)) continue;
    for (const ex of block.exercises) {
      if (!ex || !ex.name) continue;
      if (ex.youtube) continue; // already wired
      const uid = findUid(ex.name);
      if (uid) {
        ex.youtube = youtubeUrl(uid);
        changed++;
        log.push(`    + ${ex.name}`);
      }
    }
  }
  return changed;
}

function injectIntoProgramData(programData, log) {
  let total = 0;
  const all = programData?.allWorkouts || {};
  for (const dayKey of Object.keys(all).sort()) {
    const before = log.length;
    const c = injectIntoBlocks(all[dayKey], log);
    if (c > 0) {
      log.splice(before, 0, `  Day ${dayKey}: ${c} exercise(s)`);
      total += c;
    }
  }
  return total;
}

// ──────────────────────────────────────────────────────────
// API helpers
// ──────────────────────────────────────────────────────────
async function api(endpoint, body) {
  const res = await fetch(API_BASE + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${endpoint} HTTP ${res.status}`);
  return res.json();
}

const unwrap = (r) => r?.data || r?.result || r;

// ──────────────────────────────────────────────────────────
// Filters: which programs are MA / travel?
// ──────────────────────────────────────────────────────────
const MA_KEYWORDS = ['belt', 'kicho', 'taegeuk', 'eejang', 'iljang', 'jang', 'boxing', 'kickboxing', 'martial', 'tkd', 'taekwondo', 'road warrior', 'warrior', 'hybrid'];
function isTarget(name) {
  if (!name) return false;
  const n = name.toLowerCase();
  return MA_KEYWORDS.some(k => n.includes(k));
}

// ──────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────
async function processPrograms() {
  console.log(`\n=== PROGRAMS (saved by ${TRAINER_EMAIL}) ===`);
  const listResp = await api('list-programs.php', { email: TRAINER_EMAIL });
  const list = unwrap(listResp);
  const programs = list?.programs || (Array.isArray(list) ? list : []);
  if (!programs.length) {
    console.log('  (no programs returned — check API response shape)');
    console.log('  raw:', JSON.stringify(listResp).slice(0, 400));
    return;
  }
  const targets = programs.filter(p => isTarget(p.name || p.programName || p.program_name));
  console.log(`  Found ${programs.length} programs, ${targets.length} match MA/travel keywords:`);
  targets.forEach(p => console.log(`    - ${p.name || p.programName || p.program_name} (code: ${p.accessCode || p.access_code})`));

  for (const p of targets) {
    const code = p.accessCode || p.access_code;
    const name = p.name || p.programName || p.program_name;
    const id = p.id || p.programId;
    console.log(`\n--- ${name} (${code}) ---`);
    // list-programs already returns full programData.allWorkouts inline
    const programData = p.programData;
    if (!programData?.allWorkouts) {
      console.log('  (no allWorkouts in list response — skipping)');
      continue;
    }
    const log = [];
    const total = injectIntoProgramData(programData, log);
    if (total === 0) {
      console.log('  No exercises to update.');
      continue;
    }
    console.log(`  Will inject ${total} video URL(s):`);
    log.forEach(l => console.log(l));

    if (!APPLY) continue;
    const updateResp = await api('update-program.php', {
      programId: id,
      accessCode: code,
      programName: name,
      trainerEmail: TRAINER_EMAIL,
      programData,
    });
    const ok = updateResp?.success || updateResp?.data?.success;
    console.log(`  → update-program: ${ok ? 'OK' : 'FAILED'} ${ok ? '' : JSON.stringify(updateResp)}`);
  }
}

async function processTravelWorkouts() {
  console.log(`\n=== TRAVEL WORKOUTS ===`);
  const resp = await api('get-travel-workouts.php', { trainerEmail: TRAINER_EMAIL });
  const list = unwrap(resp);
  const workouts = list?.workouts || (Array.isArray(list) ? list : []);
  if (!workouts.length) {
    console.log('  (no travel workouts returned)');
    console.log('  raw:', JSON.stringify(resp).slice(0, 400));
    return;
  }
  console.log(`  Found ${workouts.length} travel workouts.`);
  for (const w of workouts) {
    const name = w.workoutName || w.workout_name || w.name;
    const eqType = w.equipmentType || w.equipment_type;
    const dayNum = w.dayNumber || w.day_number;
    let blocks = w.workoutData || w.workout_data || w.blocks;
    if (typeof blocks === 'string') {
      try { blocks = JSON.parse(blocks); } catch { /* leave as-is */ }
    }
    if (!Array.isArray(blocks)) {
      console.log(`  - ${name} (${eqType} day ${dayNum}): no blocks array, skipping`);
      continue;
    }
    const log = [];
    const c = injectIntoBlocks(blocks, log);
    console.log(`\n  - ${name} (${eqType} day ${dayNum}): ${c} video(s) to inject`);
    log.forEach(l => console.log(l));
    if (c === 0) continue;
    if (!APPLY) continue;
    const saveResp = await api('save-travel-workout.php', {
      trainerEmail: TRAINER_EMAIL,
      equipmentType: eqType,
      dayNumber: dayNum,
      workoutName: name,
      workoutData: blocks,
    });
    const ok = saveResp?.success || saveResp?.data?.success;
    console.log(`    → save-travel: ${ok ? 'OK' : 'FAILED'} ${ok ? '' : JSON.stringify(saveResp)}`);
  }
}

(async () => {
  console.log(`\n${APPLY ? '*** APPLY MODE — will write to API ***' : '(dry run — no writes; pass --apply to commit)'}`);
  try {
    await processPrograms();
    await processTravelWorkouts();
    console.log('\nDone.');
  } catch (e) {
    console.error('Fatal:', e);
    process.exit(1);
  }
})();
