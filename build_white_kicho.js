// White Belt - Kicho Foundations
// 8-week, 3-day/week taekwondo program for absolute beginners
// Focus: hip mobility, hamstring flexibility, basic stances/blocks/punches/kicks

const program = {
  name: "White Belt — Kicho Foundations",
  trainerEmail: "wisco.barbell@gmail.com"
};

// ===== FLEXIBILITY ROTATION =====
// Rotate through these across all 24 days
const flexExercises = [
  { name: "Seated Hamstring Stretch", notes: "Sit tall, reach for toes. Keep back straight — don't round. Breathe into it." },
  { name: "Butterfly Stretch", notes: "Soles of feet together, press knees down gently with elbows. Sit tall." },
  { name: "Hurdle Stretch", notes: "One leg straight, other foot to inner thigh. Reach for the straight leg toe." },
  { name: "Pigeon Stretch", notes: "Front shin across the mat, back leg extended. Square your hips. Sink down slowly." },
  { name: "Seated Straddle Stretch", notes: "Legs wide, walk hands forward on the floor. Keep chest up as long as possible." },
  { name: "Hip 90/90 Stretch", notes: "Both legs at 90 degrees. Front shin parallel, back shin parallel. Sit tall and rotate." },
  { name: "Couch Stretch", notes: "Rear foot up on a wall or chair. Front foot flat. Drive hips forward. Brutal but essential." },
  { name: "Standing Calf Stretch", notes: "Wall push position. Rear leg straight, heel pressed down. Hold and breathe." }
];

// ===== COOLDOWN HIP OPENERS (rotate) =====
const hipOpeners = [
  { name: "Pigeon Stretch", reps: "45 sec", qualifier: "each side", notes: "Sink deep. Breathe. Let gravity do the work." },
  { name: "Hip 90/90 Stretch", reps: "45 sec", qualifier: "each side", notes: "Rotate torso over front shin, then back shin." },
  { name: "Couch Stretch", reps: "45 sec", qualifier: "each side", notes: "Drive hips forward. This unlocks your kicks." },
  { name: "Deep Lunge Hold", reps: "45 sec", qualifier: "each side", notes: "Back knee down, front knee over ankle. Sink hips low." },
  { name: "Frog Stretch", reps: "45 sec", qualifier: "", notes: "Knees wide, hips sink back. Go easy — this one is intense." },
  { name: "Lizard Stretch", reps: "45 sec", qualifier: "each side", notes: "Front foot outside your hand. Drop to elbows if you can." }
];

// ===== HELPER FUNCTIONS =====
function getFlexExercise(dayIndex) {
  return flexExercises[dayIndex % flexExercises.length];
}

function getHipOpener(dayIndex) {
  return hipOpeners[dayIndex % hipOpeners.length];
}

function themeBlock(text) {
  return { type: "theme", themeText: text };
}

function warmupBlock(notes, exercises) {
  return { type: "warmup", notes, exercises };
}

function supersetBlock(notes, exercises) {
  return { type: "superset", notes, exercises };
}

function straightSetBlock(notes, exercises) {
  return { type: "straight-set", notes, exercises };
}

function conditioningBlock(exercises) {
  return { type: "conditioning", exercises };
}

function cooldownBlock(exercises) {
  return { type: "cooldown", exercises };
}

function ex(name, sets, reps, qualifier, notes) {
  const e = { name, sets, reps: String(reps) };
  if (qualifier) e.qualifier = qualifier;
  if (notes) e.notes = notes;
  return e;
}

function exDuration(name, sets, duration, durationUnit, notes) {
  const e = { name, sets, duration: String(duration), durationUnit };
  if (notes) e.notes = notes;
  return e;
}

// ===== KOREAN THEME TEXT =====
const themes = {
  phase1: "Charyeot! (Attention!) [name], your journey begins with a single stance. Stand tall. Breathe. Your body will remember what it once knew.",
  phase2: "Him-nae-se-yo! (Be strong!) [name], your kicks are finding their path. Every chamber, every pivot — you are rebuilding something powerful.",
  phase3: "Shi-jak! (Begin!) [name], the form is the soul of taekwondo. Each move tells a story. Learn it. Feel it. Own it.",
  phase4: "Wan-seong! (Completion!) [name], 8 weeks. You are not the same person who walked in. Show your spirit. KIHAP!"
};

// ===== STANDARD COOLDOWN BUILDER =====
function buildCooldown(dayIndex) {
  const opener = getHipOpener(dayIndex);
  return cooldownBlock([
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec", qualifier: "", notes: "Soles together, press knees down. Breathe deep." },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "45 sec", qualifier: "each leg", notes: "One leg at a time. Reach slow, hold at tension." },
    { name: opener.name, sets: 1, reps: opener.reps, qualifier: opener.qualifier, notes: opener.notes },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg", notes: "Pull heel to glute. Keep knees together." },
    { name: "Child's Pose", sets: 1, reps: "45 sec", qualifier: "", notes: "Arms extended, forehead down. Let everything release." }
  ]);
}

// ===== STANDARD WARM-UP BUILDER =====
function buildWarmup(dayIndex, notes) {
  const flex = getFlexExercise(dayIndex);
  return warmupBlock(notes || "Get the blood moving and the hips open. Take your time.", [
    ex("Jumping Jacks", 1, "30 sec", "", "Light and easy. Shake the rust off."),
    ex("Hip Circles", 1, "10", "each direction", "Hands on hips. Big slow circles. Open those hips up."),
    ex("Leg Swings — Front to Back", 1, "10", "each leg", "Hold a wall for balance. Swing smooth, not fast."),
    ex("Walking Lunges", 1, "10", "total steps", "Long stride. Keep chest up. Feel the hip flexors stretch."),
    ex(flex.name, 1, "30 sec", "each side", flex.notes)
  ]);
}

// ===== BUILD ALL 24 DAYS =====
const allWorkouts = {};

// ============================================================
// PHASE 1: WEEKS 1-2 (Stripe 1)
// Pure stance + block + punch. Front kick intro. Heavy flexibility.
// ============================================================

// --- WEEK 1, DAY 1 ---
allWorkouts["1-1"] = [
  themeBlock(themes.phase1),
  buildWarmup(0, "Welcome to Day 1. We start slow — your hips and hamstrings need this."),
  warmupBlock("Warm-up kicks — just getting familiar with chamber position.", [
    ex("Front Kick Chamber Hold", 1, "5", "each leg", "Bring knee to chest. HOLD for 3 sec. Don't kick yet — just hold the chamber."),
    ex("Slow Front Kick — Waist Height", 1, "5", "each leg", "Chamber, extend slowly, retract. No power. Just the path.")
  ]),
  supersetBlock("Stance Foundations — these are the building blocks of everything.", [
    ex("Front Stance (Ap Seogi) Hold", 5, "15 sec", "each side", "Front knee bent, back leg straight. Weight 60/40 forward. Low and strong."),
    ex("Horse Stance (Juchum Seogi) Hold", 5, "15 sec", "", "Feet wide, knees out, sit LOW. Thighs burn = you're doing it right."),
    ex("Fighting Stance (Gyeorugi Seogi)", 5, "15 sec", "each side", "Light on your feet. Hands up. Chin down. This is your home base.")
  ]),
  supersetBlock("Basic Blocks — slow and deliberate. Feel the path of each block.", [
    ex("Low Block (Arae Makgi)", 5, "5", "each side", "Start from opposite shoulder. Sweep down hard. Fist stops one fist-width above front knee."),
    ex("Middle Block (Momtong Makgi)", 5, "5", "each side", "Forearm sweeps across body. Fist at shoulder height. Elbow one fist from ribs."),
    ex("High Block (Olgul Makgi)", 5, "5", "each side", "Arm rises from hip to above forehead. Rotate the wrist. Block with outer forearm.")
  ]),
  buildCooldown(0)
];

// --- WEEK 1, DAY 2 ---
allWorkouts["1-2"] = [
  themeBlock(themes.phase1),
  buildWarmup(1, "Hips and hamstrings again. You'll thank yourself in 4 weeks."),
  warmupBlock("Warm-up kicks — front kick only. Build the chamber.", [
    ex("Front Kick Chamber Hold", 1, "5", "each leg", "Knee HIGH. Hold 3 sec each. Balance is the goal."),
    ex("Slow Front Kick — Waist Height", 1, "8", "each leg", "Chamber, extend, retract, set down. Smooth and controlled.")
  ]),
  supersetBlock("Punch Foundations — hands are just as important as kicks.", [
    ex("Jab (Ap Jireugi)", 5, "10", "", "Lead hand. Fast and straight. Snap it back. Don't drop your guard."),
    ex("Cross (Bandae Jireugi)", 5, "10", "", "Rear hand. Rotate hips. Power comes from the ground, through the hip, out the fist."),
    ex("Reverse Punch from Front Stance", 5, "5", "each side", "Step into front stance, reverse punch. Hip rotation is EVERYTHING.")
  ]),
  supersetBlock("Stance transitions — moving between stances with control.", [
    ex("Front Stance Walking — Forward", 5, "5", "steps each leg", "Step forward into front stance. Pause. Check your form. Low block each step."),
    ex("Back Stance (Dwit Gubi) Hold", 5, "15 sec", "each side", "Weight 70/30 on back leg. Front foot light. L-shaped feet."),
    ex("Horse Stance Punching", 5, "10", "alternating", "Drop into horse stance. Punch left, punch right. Stay LOW.")
  ]),
  buildCooldown(1)
];

// --- WEEK 1, DAY 3 ---
allWorkouts["1-3"] = [
  themeBlock(themes.phase1),
  buildWarmup(2, "Third session this week. Your body is already adapting. Let's build on it."),
  warmupBlock("Warm-up kicks — slow and controlled.", [
    ex("Front Kick Chamber Hold", 1, "8", "each leg", "Hold the chamber 3 full seconds. Squeeze that hip flexor."),
    ex("Slow Front Kick — Chest Height Attempt", 1, "5", "each leg", "Try to get higher. If it's only waist height, that's FINE. Don't force it.")
  ]),
  supersetBlock("Block + Punch Combos — putting it together.", [
    ex("Low Block + Reverse Punch (from Front Stance)", 5, "5", "each side", "Step into front stance. Low block. Then reverse punch. Two moves, one stance."),
    ex("Middle Block + Reverse Punch", 5, "5", "each side", "Same drill. Middle block, then fire the reverse punch. Rotate those hips."),
    ex("High Block + Reverse Punch", 5, "5", "each side", "Block up, punch out. Keep your base solid.")
  ]),
  supersetBlock("Balance and Chamber Drill — your kicks will only be as good as your balance.", [
    ex("Single Leg Balance Hold", 3, "20 sec", "each leg", "Standing on one foot. Hands in guard. Eyes forward. Don't hop around."),
    ex("Front Kick — Slow Motion Full Extension", 3, "5", "each leg", "Take 3 full seconds to extend. 3 seconds to retract. Control."),
    ex("Front Stance Forward Walking — Low Block + Reverse Punch", 3, "10", "steps total", "Walk forward in front stance. Low block, reverse punch, step. Repeat.")
  ]),
  buildCooldown(2)
];

// --- WEEK 2, DAY 1 ---
allWorkouts["2-1"] = [
  themeBlock(themes.phase1),
  buildWarmup(3, "Week 2. You know the stances now. Time to sharpen them."),
  warmupBlock("Warm-up kicks — front kick with more purpose.", [
    ex("Slow Front Kick", 1, "8", "each leg", "Chamber, extend, hold 1 sec at full extension, retract."),
    ex("Front Kick Chamber — Knee to Chest Pulse", 1, "8", "each leg", "Bring knee up, pulse it higher 3 times, set down. Builds hip flexor strength.")
  ]),
  supersetBlock("Stance Endurance — hold longer, sit deeper.", [
    ex("Front Stance Hold", 5, "20 sec", "each side", "Lower than last week. Feel that front quad burn."),
    ex("Horse Stance Hold", 5, "20 sec", "", "Deeper. Wider. Hands in guard position."),
    ex("Back Stance Hold", 5, "20 sec", "each side", "Weight back. Front foot ready to kick at any time.")
  ]),
  supersetBlock("Block Drill — speed it up.", [
    ex("Low Block — Fast Reps from Horse Stance", 4, "10", "alternating arms", "Quick snappy blocks. Alternate left and right. Stay in horse stance."),
    ex("Middle Block — Fast Reps", 4, "10", "alternating arms", "Same drill. Speed with precision."),
    ex("Jab-Cross from Fighting Stance", 4, "10", "combos", "1-2. Fast hands. Return to guard every time.")
  ]),
  buildCooldown(3)
];

// --- WEEK 2, DAY 2 ---
allWorkouts["2-2"] = [
  themeBlock(themes.phase1),
  buildWarmup(4, "Flexibility day focus. We're unlocking range for better kicks."),
  warmupBlock("Warm-up kicks — front kick getting sharper.", [
    ex("Slow Front Kick", 1, "10", "each leg", "Full chamber, full extension. Aim for belt level or higher."),
    ex("Front Kick — Hold at Extension", 1, "5", "each leg", "Kick out and HOLD for 3 sec at the top. Shake is normal.")
  ]),
  supersetBlock("Punch Combo Drill — building rhythm.", [
    ex("Jab-Cross", 5, "10", "combos", "1-2. Snap. Return to guard. Breathe."),
    ex("Reverse Punch from Front Stance — Walking", 5, "10", "steps", "Step, punch. Step, punch. Stay low in your stance."),
    ex("Horse Stance Punching — Speed Round", 3, "20", "total punches", "Fast alternating punches. Don't stand up. Stay in that horse stance.")
  ]),
  supersetBlock("Hip Mobility Circuit — dedicated flexibility block.", [
    ex("Hip 90/90 Switches", 3, "8", "each side", "Sit on floor. Rotate knees side to side through 90/90 position. Slow and controlled."),
    ex("Deep Squat Hold", 3, "30 sec", "", "Heels down if possible. Elbows push knees out. Sit and breathe."),
    ex("Leg Swings — Side to Side", 3, "10", "each leg", "Hold a wall. Swing leg across body and out wide. Open those inner thighs.")
  ]),
  buildCooldown(4)
];

// --- WEEK 2, DAY 3 (STRIPE 1 CHECK) ---
allWorkouts["2-3"] = [
  themeBlock("STRIPE CHECK DAY! [name], Charyeot! Today you show what you've learned in 2 weeks. Stand tall. You earned this."),
  buildWarmup(5, "Stripe check warm-up. Get loose and focused."),
  warmupBlock("Warm-up kicks — confident front kicks.", [
    ex("Front Kick — Belt Height", 1, "10", "each leg", "Show clean chamber, full extension, controlled retract."),
    ex("Front Kick Chamber Hold", 1, "5", "each leg", "Hold 5 full seconds. Show your balance.")
  ]),
  straightSetBlock("STRIPE 1 CHECK — Stances. Hold each for instructor.", [
    ex("Front Stance — Hold and Check", 3, "10 sec", "each side", "Demonstrate proper front stance. Instructor checks depth and alignment."),
    ex("Back Stance — Hold and Check", 3, "10 sec", "each side", "Weight distribution 70/30. L-shaped feet."),
    ex("Horse Stance — Hold and Check", 3, "15 sec", "", "Sit deep. Fists on hips or in guard."),
    ex("Fighting Stance — Hold and Check", 3, "10 sec", "each side", "Light, mobile, hands up.")
  ]),
  straightSetBlock("STRIPE 1 CHECK — Blocks and Punches.", [
    ex("Low Block (both sides)", 3, "5", "each side", "Clean path. Proper chamber from opposite shoulder."),
    ex("Middle Block (both sides)", 3, "5", "each side", "Forearm across body. Tight and sharp."),
    ex("High Block (both sides)", 3, "5", "each side", "Block above forehead. Rotate wrist."),
    ex("Jab-Cross Combo", 3, "10", "combos", "Fast, clean, return to guard."),
    ex("Front Kick — Show Chamber + Extension", 3, "5", "each leg", "Slow and controlled. Show the technique.")
  ]),
  buildCooldown(5)
];

// ============================================================
// PHASE 2: WEEKS 3-4 (Stripe 2)
// Add roundhouse kick. Basic 2-strike combos. More punch combos.
// ============================================================

// --- WEEK 3, DAY 1 ---
allWorkouts["3-1"] = [
  themeBlock(themes.phase2),
  buildWarmup(6, "New phase. New kicks. Your hips are ready — let's introduce the roundhouse."),
  warmupBlock("Warm-up kicks — front kick review + roundhouse intro.", [
    ex("Front Kick — Belt Height", 1, "8", "each leg", "Clean and confident now. Show it."),
    ex("Roundhouse Kick Chamber Hold", 1, "5", "each leg", "Knee up and turned over. Pivot your base foot. Hold 3 sec. THIS is the key to roundhouse."),
    ex("Slow Roundhouse Kick — Waist Height", 1, "5", "each leg", "Chamber, pivot, extend shin. Aim with the top of the foot. Slow motion.")
  ]),
  supersetBlock("Roundhouse Kick Breakdown — master the pivot.", [
    ex("Roundhouse Chamber — Pivot Drill", 5, "5", "each leg", "Chamber the knee. Pivot base foot 180 degrees. Hold. Set down. Repeat. Pivot is everything."),
    ex("Roundhouse Kick — Waist Height", 5, "5", "each leg", "Full kick. Slow. Focus on: chamber, pivot, snap, retract, set down."),
    ex("Front Kick — Maintain Sharpness", 5, "5", "each leg", "Don't let the new kick make you sloppy on the old one.")
  ]),
  supersetBlock("Punch Combo Upgrade — jab-cross-hook.", [
    ex("Jab-Cross", 4, "10", "combos", "1-2. Crisp. Return to guard."),
    ex("Jab-Cross-Hook", 4, "8", "combos", "1-2-3. The hook comes from the hips. Elbow at 90 degrees. Horizontal fist."),
    ex("Reverse Punch from Front Stance", 4, "5", "each side", "Step, settle, punch. Hip rotation.")
  ]),
  buildCooldown(6)
];

// --- WEEK 3, DAY 2 ---
allWorkouts["3-2"] = [
  themeBlock(themes.phase2),
  buildWarmup(7, "Building your kick toolbox. Today is combos."),
  warmupBlock("Warm-up kicks — both kicks now.", [
    ex("Front Kick", 1, "8", "each leg", "Belt height. Snappy."),
    ex("Roundhouse Kick — Slow", 1, "8", "each leg", "Pivot. Snap. Retract. Controlled.")
  ]),
  supersetBlock("Two-Strike Combos — hands and feet together.", [
    ex("Jab-Cross + Front Kick", 5, "5", "combos each side", "1-2, then front kick with rear leg. Reset fighting stance after."),
    ex("Jab-Cross", 5, "10", "combos", "Keep the hands sharp while we add kicks."),
    ex("Front Kick + Reverse Punch", 5, "5", "each side", "Kick, land forward, reverse punch. Flow.")
  ]),
  supersetBlock("Block + Counter Drill — defense to offense.", [
    ex("Low Block + Reverse Punch (Walking)", 4, "8", "steps", "Step into front stance. Block. Punch. Step. Repeat."),
    ex("Middle Block + Jab-Cross", 4, "5", "each side", "Block from fighting stance, then fire 1-2."),
    ex("Roundhouse Kick — Chamber Focus", 4, "5", "each leg", "Knee up, hold 2 sec, kick, retract, hold 2 sec. Control.")
  ]),
  buildCooldown(7)
];

// --- WEEK 3, DAY 3 ---
allWorkouts["3-3"] = [
  themeBlock(themes.phase2),
  buildWarmup(8, "End of week 3. We're building a fighter."),
  warmupBlock("Warm-up kicks.", [
    ex("Front Kick", 1, "10", "each leg", "Belt height or higher. Push for height but keep form."),
    ex("Roundhouse Kick", 1, "8", "each leg", "Getting more natural now. Let it flow.")
  ]),
  supersetBlock("Stance Transitions with Technique — moving like a martial artist.", [
    ex("Front Stance Walk — Low Block + Reverse Punch", 4, "10", "steps", "This is the backbone of Kicho forms. Get it smooth."),
    ex("Fighting Stance — Jab-Cross-Hook", 4, "8", "combos", "1-2-3. Explosive but controlled."),
    ex("Roundhouse Kick — Left and Right", 4, "5", "each leg", "Alternate legs. Reset stance between kicks.")
  ]),
  supersetBlock("Kick Combo Intro — two kicks in sequence.", [
    ex("Front Kick + Front Kick (same leg)", 3, "5", "each leg", "Kick, chamber, kick again without setting down. Balance challenge."),
    ex("Jab-Cross + Roundhouse Kick", 3, "5", "each side", "1-2 then roundhouse with rear leg. Full combo."),
    ex("Horse Stance Punching — 30 Second Round", 3, "30 sec", "", "Fast alternating punches. Stay deep in horse stance. Don't quit.")
  ]),
  buildCooldown(8)
];

// --- WEEK 4, DAY 1 ---
allWorkouts["4-1"] = [
  themeBlock(themes.phase2),
  buildWarmup(9, "Week 4. Stripe 2 is coming. Sharpen everything."),
  warmupBlock("Warm-up kicks — both kicks, higher targets.", [
    ex("Front Kick — Chest Height Attempt", 1, "8", "each leg", "Push for height. Chamber HIGH."),
    ex("Roundhouse Kick — Belt Height", 1, "8", "each leg", "Pivot hard. Snap that shin.")
  ]),
  supersetBlock("Combo Refinement — clean and fast.", [
    ex("Jab-Cross + Front Kick", 5, "8", "combos", "Smooth transition from hands to feet."),
    ex("Jab-Cross-Hook", 5, "10", "combos", "1-2-3. The hook is the money shot. Land it clean."),
    ex("Low Block + Reverse Punch — Double (left then right)", 5, "5", "sets", "Front stance. Low block + punch. Switch sides. Low block + punch.")
  ]),
  supersetBlock("Roundhouse Kick Development — building power.", [
    ex("Roundhouse Kick — Slow Full Extension", 4, "5", "each leg", "3 seconds up, hold 1 second, 3 seconds down."),
    ex("Roundhouse Kick — Normal Speed", 4, "5", "each leg", "Now let it go. Snap. Pivot. Hit."),
    ex("Single Leg Balance Hold (in Chamber)", 4, "15 sec", "each leg", "Roundhouse chamber position. Hold it. Build stability.")
  ]),
  buildCooldown(9)
];

// --- WEEK 4, DAY 2 ---
allWorkouts["4-2"] = [
  themeBlock(themes.phase2),
  buildWarmup(10, "Day before stripe check. Light technique work. Get confident."),
  warmupBlock("Warm-up kicks — light and technical.", [
    ex("Front Kick — Slow and Perfect", 1, "8", "each leg", "Form over power. Every rep perfect."),
    ex("Roundhouse Kick — Slow and Perfect", 1, "8", "each leg", "Same thing. Clean reps only.")
  ]),
  supersetBlock("Review Drill — run through everything.", [
    ex("Front Stance Walk — Low Block + Reverse Punch", 3, "10", "steps", "Smooth. This is Kicho prep."),
    ex("Jab-Cross from Fighting Stance", 3, "10", "combos", "Fast hands. Clean."),
    ex("Jab-Cross-Hook", 3, "8", "combos", "1-2-3. Snap the hook.")
  ]),
  supersetBlock("Kick Review — both kicks, both legs.", [
    ex("Front Kick — Right Leg", 3, "5", "", "Show your best."),
    ex("Front Kick — Left Leg", 3, "5", "", "Even side. Just as clean."),
    ex("Roundhouse Kick — Right Leg", 3, "5", "", "Pivot. Snap. Retract."),
    ex("Roundhouse Kick — Left Leg", 3, "5", "", "Don't neglect the weak side.")
  ]),
  buildCooldown(10)
];

// --- WEEK 4, DAY 3 (STRIPE 2 CHECK) ---
allWorkouts["4-3"] = [
  themeBlock("STRIPE CHECK DAY! [name], Him-nae-se-yo! Show me your roundhouse. Show me your combos. You've earned this stripe."),
  buildWarmup(11, "Stripe 2 check. Get warm, get focused."),
  warmupBlock("Warm-up kicks — show both kicks.", [
    ex("Front Kick", 1, "8", "each leg", "Belt height. Clean."),
    ex("Roundhouse Kick", 1, "8", "each leg", "Full pivot. Full snap.")
  ]),
  straightSetBlock("STRIPE 2 CHECK — Combos.", [
    ex("Jab-Cross", 3, "10", "combos", "Demonstrate clean 1-2."),
    ex("Jab-Cross-Hook", 3, "8", "combos", "1-2-3. Hook technique check."),
    ex("Jab-Cross + Front Kick", 3, "5", "combos each side", "Hands to feet transition."),
    ex("Jab-Cross + Roundhouse Kick", 3, "5", "combos each side", "New combo. Show it clean.")
  ]),
  straightSetBlock("STRIPE 2 CHECK — Kicks and Blocks.", [
    ex("Front Kick — Both Legs", 3, "5", "each leg", "Chamber, extend, retract. Controlled."),
    ex("Roundhouse Kick — Both Legs", 3, "5", "each leg", "Pivot check. Snap check."),
    ex("Low Block + Reverse Punch Walking", 3, "10", "steps", "Front stance walking. Block, punch, step."),
    ex("Middle Block + Reverse Punch", 3, "5", "each side", "Block, counter. Defense to offense.")
  ]),
  buildCooldown(11)
];

// ============================================================
// PHASE 3: WEEKS 5-6 (Stripe 3)
// Add side kick. Kicho form drills. 3-strike combos.
// ============================================================

// --- WEEK 5, DAY 1 ---
allWorkouts["5-1"] = [
  themeBlock(themes.phase3),
  buildWarmup(12, "New phase, new kick. Side kick is the hardest basic kick — but your hips are ready."),
  warmupBlock("Warm-up kicks — review + side kick intro.", [
    ex("Front Kick", 1, "8", "each leg", "Maintenance reps. Stay sharp."),
    ex("Roundhouse Kick", 1, "8", "each leg", "Pivot is second nature now."),
    ex("Side Kick Chamber Hold", 1, "5", "each leg", "Knee to chest, turn hip over. Foot is on its SIDE — blade edge. Hold 3 sec.")
  ]),
  supersetBlock("Side Kick Breakdown — the king of kicks.", [
    ex("Side Kick Chamber — Pivot Drill", 5, "5", "each leg", "Chamber knee to chest. Pivot base foot. Hips stack. Hold. This is the position."),
    ex("Side Kick — Slow Extension (Waist Height)", 5, "5", "each leg", "Chamber, push OUT (not around). Strike with the blade of the foot. Retract."),
    ex("Side Kick — Hold at Extension", 3, "3", "each leg", "Kick out and hold for 3 seconds. Leg will shake. That's growth.")
  ]),
  supersetBlock("3-Strike Combos — more complex combinations.", [
    ex("Jab-Cross-Front Kick", 4, "5", "combos each side", "1-2 then front kick rear leg. Quick hands, strong kick."),
    ex("Jab-Cross-Hook", 4, "8", "combos", "1-2-3. The standard hand combo."),
    ex("Low Block + Reverse Punch + Front Kick", 4, "5", "each side", "From front stance: block, punch, kick front leg. 3 moves.")
  ]),
  buildCooldown(12)
];

// --- WEEK 5, DAY 2 ---
allWorkouts["5-2"] = [
  themeBlock(themes.phase3),
  buildWarmup(13, "Kicho form patterns start today. Walking in front stance is the foundation of every form."),
  warmupBlock("Warm-up kicks — all three.", [
    ex("Front Kick", 1, "8", "each leg", "Quick and sharp."),
    ex("Roundhouse Kick", 1, "8", "each leg", "Pivot. Snap."),
    ex("Side Kick — Slow", 1, "5", "each leg", "Push out. Blade of foot. Controlled.")
  ]),
  supersetBlock("Kicho Form Drill — walking low block pattern.", [
    ex("Front Stance Walk — Low Block (Down the Floor)", 5, "10", "steps", "Step forward, low block. Step forward, low block. Alternate arms. THIS is Kicho Il Jang."),
    ex("Front Stance Walk — Low Block + Reverse Punch", 5, "10", "steps", "Same walk. Low block, then reverse punch before stepping. Two techniques per step."),
    ex("180 Turn in Front Stance", 5, "5", "each direction", "At the end of the line: pivot 180, low block. This is how forms turn. Foot pivots, body follows.")
  ]),
  supersetBlock("Side Kick Development — building the push.", [
    ex("Side Kick — Belt Height", 4, "5", "each leg", "Push OUT. Not up. Side kick goes sideways."),
    ex("Side Kick Chamber Hold", 4, "10 sec", "each leg", "Knee up, hip turned over. Hold and breathe."),
    ex("Roundhouse Kick — Maintain Speed", 4, "5", "each leg", "Don't lose your roundhouse while building side kick.")
  ]),
  buildCooldown(13)
];

// --- WEEK 5, DAY 3 ---
allWorkouts["5-3"] = [
  themeBlock(themes.phase3),
  buildWarmup(14, "End of week 5. Your toolkit is getting real."),
  warmupBlock("Warm-up kicks.", [
    ex("Front Kick", 1, "8", "each leg", ""),
    ex("Roundhouse Kick", 1, "8", "each leg", ""),
    ex("Side Kick", 1, "5", "each leg", "Slow and deliberate.")
  ]),
  supersetBlock("Kicho Form Section — adding middle block line.", [
    ex("Front Stance Walk — Low Block Line", 4, "8", "steps", "Down the floor. Low block each step."),
    ex("Front Stance Walk — Middle Block Line", 4, "8", "steps", "Same pattern. Middle block each step. Opposite arm."),
    ex("180 Turn — Low Block", 4, "4", "turns", "Turn, settle, low block. Sharp and fast.")
  ]),
  supersetBlock("3-Strike Combos with All Kicks.", [
    ex("Jab-Cross + Roundhouse Kick", 4, "5", "each side", "Hands to roundhouse. Flow."),
    ex("Low Block + Reverse Punch + Side Kick", 3, "5", "each side", "Block, punch, side kick front leg. The side kick is the finisher."),
    ex("Jab-Cross-Hook + Front Kick", 3, "5", "each side", "1-2-3 then front kick. 4-count combo.")
  ]),
  conditioningBlock([
    exDuration("Front Kick Speed Drill", 3, "20", "sec", "As many front kicks as possible in 20 sec. Alternate legs. Chamber every one."),
    exDuration("Horse Stance Hold", 3, "30", "sec", "Deep. Fists on hips. Don't stand up. Breathe through it.")
  ]),
  buildCooldown(14)
];

// --- WEEK 6, DAY 1 ---
allWorkouts["6-1"] = [
  themeBlock(themes.phase3),
  buildWarmup(15, "Week 6. Stripe 3 incoming. Form work is the priority now."),
  warmupBlock("Warm-up kicks.", [
    ex("Front Kick", 1, "10", "each leg", "Height and speed."),
    ex("Roundhouse Kick", 1, "10", "each leg", "Pivot locked in."),
    ex("Side Kick", 1, "8", "each leg", "Getting stronger. Push through the target.")
  ]),
  supersetBlock("Kicho Form — full walk-through pattern.", [
    ex("Kicho Pattern: Low Block Walk (4 steps, turn, 4 steps)", 5, "1", "full pattern", "4 front stances with low block. 180 turn. 4 more. Turn again. This is the skeleton of the form."),
    ex("Kicho Pattern: Add Reverse Punch", 5, "1", "full pattern", "Same walk. Low block each step, then reverse punch. Block, punch. Block, punch."),
    ex("Kicho Pattern: Middle Block Line (4 steps)", 3, "1", "full line", "After low block section, middle block section begins. Walk 4 steps with middle block.")
  ]),
  supersetBlock("Kick Combinations — more complex.", [
    ex("Front Kick + Roundhouse Kick (same leg)", 4, "3", "each leg", "Front kick, rechamber, roundhouse. Don't set the foot down between kicks."),
    ex("Jab-Cross + Side Kick", 4, "5", "each side", "1-2 then side kick rear leg. Push through."),
    ex("Side Kick — Hold at Extension", 3, "5 sec", "each leg", "Push out and hold. Build that strength.")
  ]),
  buildCooldown(15)
];

// --- WEEK 6, DAY 2 ---
allWorkouts["6-2"] = [
  themeBlock(themes.phase3),
  buildWarmup(16, "Day before stripe check. Run the form. Breathe. Trust your training."),
  warmupBlock("Warm-up kicks — all three, light.", [
    ex("Front Kick", 1, "8", "each leg", "Easy. Smooth."),
    ex("Roundhouse Kick", 1, "8", "each leg", "Natural and flowing."),
    ex("Side Kick", 1, "5", "each leg", "Control the push.")
  ]),
  supersetBlock("Form Run-Through — practice the whole thing.", [
    ex("Kicho Form — Full Pattern Walk-Through", 5, "1", "complete run", "Walk the entire pattern. Low block line, turn, low block line, middle block line. Block + punch every step."),
    ex("Kicho Form — Focus on Turns", 5, "4", "turns", "Just the turns. Step, pivot 180, settle into front stance, low block. Crisp."),
    ex("Kicho Form — Breathing and Kihap", 3, "1", "complete run", "Exhale with each technique. KIHAP (shout) on the last move. Spirit.")
  ]),
  supersetBlock("Light Combo Review.", [
    ex("Jab-Cross-Hook", 3, "8", "combos", "Stay sharp."),
    ex("Front Kick — Both Legs", 3, "5", "each leg", "Clean."),
    ex("Roundhouse Kick — Both Legs", 3, "5", "each leg", "Clean."),
    ex("Side Kick — Both Legs", 3, "5", "each leg", "Clean.")
  ]),
  buildCooldown(16)
];

// --- WEEK 6, DAY 3 (STRIPE 3 CHECK) ---
allWorkouts["6-3"] = [
  themeBlock("STRIPE CHECK DAY! [name], Shi-jak! Show me the form. Show me the side kick. Show me everything. Kihap!"),
  buildWarmup(17, "Stripe 3 day. You know this material. Trust yourself."),
  warmupBlock("Warm-up kicks — all three, confident.", [
    ex("Front Kick", 1, "8", "each leg", ""),
    ex("Roundhouse Kick", 1, "8", "each leg", ""),
    ex("Side Kick", 1, "5", "each leg", "")
  ]),
  straightSetBlock("STRIPE 3 CHECK — Kicks. All three kicks, both legs.", [
    ex("Front Kick — Both Legs", 3, "5", "each leg", "Chamber, extend, retract. Show control."),
    ex("Roundhouse Kick — Both Legs", 3, "5", "each leg", "Pivot. Snap. Height check."),
    ex("Side Kick — Both Legs", 3, "5", "each leg", "Push out. Blade of foot. Hold 1 sec at extension.")
  ]),
  straightSetBlock("STRIPE 3 CHECK — Kicho Form and Combos.", [
    ex("Kicho Form — Full Pattern", 3, "1", "complete run", "Walk the form. Low block line. Turn. Low block line. Middle block. Reverse punch. Breathe. Kihap on the last move."),
    ex("Jab-Cross-Hook", 3, "8", "combos", "Clean 1-2-3."),
    ex("Jab-Cross + Front Kick", 3, "5", "combos each side", "Hands to feet. Fluid."),
    ex("Low Block + Reverse Punch Walking", 3, "8", "steps", "The backbone of the form. Demonstrate mastery.")
  ]),
  buildCooldown(17)
];

// ============================================================
// PHASE 4: WEEKS 7-8 (Stripe 4)
// Full Kicho form reps. All techniques together. Mock test + belt test.
// ============================================================

// --- WEEK 7, DAY 1 ---
allWorkouts["7-1"] = [
  themeBlock(themes.phase4),
  buildWarmup(18, "Final phase. Everything comes together now. You are a martial artist."),
  warmupBlock("Warm-up kicks — all three, strong.", [
    ex("Front Kick", 1, "10", "each leg", "Fast and high."),
    ex("Roundhouse Kick", 1, "10", "each leg", "Snap hard."),
    ex("Side Kick", 1, "8", "each leg", "Push through an imaginary target.")
  ]),
  supersetBlock("Full Form Reps — start to finish, multiple rounds.", [
    ex("Kicho Form — Complete Run-Through", 5, "1", "full form", "Every technique. Every turn. Every kihap. From start to finish."),
    ex("Kicho Form — Speed Run", 3, "1", "full form", "Same form, 75% speed. Flowing. Breathing. Rhythmic."),
    ex("Kicho Form — Power Run", 3, "1", "full form", "Same form, max power. Every block SNAPS. Every punch LANDS. Kihap shakes the room.")
  ]),
  supersetBlock("Kick Combinations — all three kicks together.", [
    ex("Front Kick + Roundhouse Kick (same leg, no set down)", 4, "3", "each leg", "Front kick, rechamber, roundhouse. Don't touch down."),
    ex("Jab-Cross + Side Kick", 4, "5", "each side", "1-2 + push side kick."),
    ex("Roundhouse Kick + Jab-Cross-Hook", 4, "5", "each side", "Kick first, land, then fire 1-2-3. Kick-to-hands combo.")
  ]),
  conditioningBlock([
    exDuration("Roundhouse Kick Speed Drill", 3, "20", "sec", "Alternating legs. Fast. Chamber every single one."),
    exDuration("Front Kick Speed Drill", 3, "20", "sec", "Alternating legs. Belt height minimum."),
    exDuration("Horse Stance Hold", 2, "45", "sec", "Deep. This is endurance. Breathe through the fire.")
  ]),
  buildCooldown(18)
];

// --- WEEK 7, DAY 2 ---
allWorkouts["7-2"] = [
  themeBlock(themes.phase4),
  buildWarmup(19, "Tomorrow is mock test day. Today we run everything one more time."),
  warmupBlock("Warm-up kicks — all three.", [
    ex("Front Kick", 1, "10", "each leg", ""),
    ex("Roundhouse Kick", 1, "10", "each leg", ""),
    ex("Side Kick", 1, "8", "each leg", "")
  ]),
  supersetBlock("Full Review — everything you know.", [
    ex("All Stances — Hold Check", 3, "10 sec", "each stance each side", "Front, back, horse, fighting. Hold each. Perfect each."),
    ex("All Blocks from Horse Stance", 3, "5", "each block each arm", "Low, middle, high. Alternate. Sharp."),
    ex("Jab-Cross-Hook", 3, "10", "combos", "")
  ]),
  supersetBlock("All Kicks + Form.", [
    ex("Front Kick — Show Best", 3, "5", "each leg", "Your highest, cleanest front kick."),
    ex("Roundhouse Kick — Show Best", 3, "5", "each leg", "Full pivot, full snap."),
    ex("Side Kick — Show Best", 3, "5", "each leg", "Push through. Hold at extension."),
    ex("Kicho Form — Full Run", 3, "1", "complete", "Three clean runs. Breathe. Kihap.")
  ]),
  buildCooldown(19)
];

// --- WEEK 7, DAY 3 (MOCK TEST) ---
allWorkouts["7-3"] = [
  themeBlock("MOCK TEST DAY! [name], Wan-seong! This is your dress rehearsal. Treat it like the real thing. Stand at attention. Bow. Begin."),
  buildWarmup(20, "Mock test warm-up. Get ready. Focus."),
  warmupBlock("Warm-up kicks.", [
    ex("Front Kick", 1, "10", "each leg", ""),
    ex("Roundhouse Kick", 1, "10", "each leg", ""),
    ex("Side Kick", 1, "8", "each leg", "")
  ]),
  straightSetBlock("MOCK TEST — Stances (Instructor calls stance, hold 10 sec).", [
    ex("Front Stance Hold", 2, "10 sec", "each side", ""),
    ex("Back Stance Hold", 2, "10 sec", "each side", ""),
    ex("Horse Stance Hold", 2, "15 sec", "", ""),
    ex("Fighting Stance Hold", 2, "10 sec", "each side", "")
  ]),
  straightSetBlock("MOCK TEST — Blocks (from horse stance, instructor calls).", [
    ex("Low Block", 2, "10", "alternating", ""),
    ex("Middle Block", 2, "10", "alternating", ""),
    ex("High Block", 2, "10", "alternating", "")
  ]),
  straightSetBlock("MOCK TEST — Hand Techniques.", [
    ex("Jab-Cross", 2, "10", "combos", ""),
    ex("Jab-Cross-Hook", 2, "8", "combos", ""),
    ex("Reverse Punch from Front Stance", 2, "5", "each side", "")
  ]),
  straightSetBlock("MOCK TEST — Kicks (both legs).", [
    ex("Front Kick", 2, "5", "each leg", "Show chamber, extension, retract."),
    ex("Roundhouse Kick", 2, "5", "each leg", "Show pivot, snap, retract."),
    ex("Side Kick", 2, "5", "each leg", "Show push, blade, retract.")
  ]),
  straightSetBlock("MOCK TEST — Kicho Form.", [
    ex("Kicho Form — Complete Performance", 3, "1", "full form", "From start to finish. Full power. Full spirit. Kihap on final move. Bow at end.")
  ]),
  buildCooldown(20)
];

// --- WEEK 8, DAY 1 ---
allWorkouts["8-1"] = [
  themeBlock(themes.phase4),
  buildWarmup(21, "Final week. Three more sessions. You've got this."),
  warmupBlock("Warm-up kicks — all three, confident.", [
    ex("Front Kick", 1, "10", "each leg", ""),
    ex("Roundhouse Kick", 1, "10", "each leg", ""),
    ex("Side Kick", 1, "8", "each leg", "")
  ]),
  supersetBlock("Form Polish — fine details.", [
    ex("Kicho Form — Slow Motion (double time)", 3, "1", "full form", "Every move takes 3 seconds. Feel every position. Find the flaws. Fix them."),
    ex("Kicho Form — Normal Speed", 3, "1", "full form", "Crisp. Powerful. Breathing synced with techniques."),
    ex("Kicho Form — Kihap Practice", 3, "1", "full form", "Focus on spirit. Loud kihap on every turn and the final move.")
  ]),
  supersetBlock("Combo Showcase — your best work.", [
    ex("Jab-Cross + Front Kick", 4, "5", "each side", ""),
    ex("Jab-Cross + Roundhouse Kick", 4, "5", "each side", ""),
    ex("Low Block + Reverse Punch + Side Kick", 4, "5", "each side", "Block, punch, kick. The TKD trifecta."),
    ex("Jab-Cross-Hook + Roundhouse Kick", 4, "5", "each side", "4-count. Hands and feet. You're a fighter now.")
  ]),
  conditioningBlock([
    exDuration("All Kicks Speed Drill — Alternating", 3, "30", "sec", "Front kick, roundhouse, side kick. Alternate legs. Go."),
    exDuration("Horse Stance Hold — Final Test", 2, "60", "sec", "One full minute. Deep. Breathe. You've built up to this.")
  ]),
  buildCooldown(21)
];

// --- WEEK 8, DAY 2 (LIGHT DAY) ---
allWorkouts["8-2"] = [
  themeBlock("[name], Wan-seong! Tomorrow is your belt test. Today is light. Move well. Visualize. Rest. You are ready."),
  buildWarmup(22, "Light day. Gentle movement. Save your energy for tomorrow."),
  warmupBlock("Light warm-up kicks — 50% effort.", [
    ex("Front Kick — Light", 1, "5", "each leg", "Easy. Just moving."),
    ex("Roundhouse Kick — Light", 1, "5", "each leg", "Easy. Just grooving."),
    ex("Side Kick — Light", 1, "5", "each leg", "Easy. Just feeling it.")
  ]),
  supersetBlock("Form Visualization — walk it, don't fight it.", [
    ex("Kicho Form — 50% Speed, 50% Power", 3, "1", "full form", "Just walk through it. Light. Easy. Let muscle memory take over."),
    ex("Kicho Form — Eyes Closed Visualization", 2, "1", "mental rep", "Close your eyes. Walk through the form in your mind. Every step. Every block. Every punch.")
  ]),
  supersetBlock("Light Technique Review — just touching up.", [
    ex("All Stances — Hold 10 Sec Each", 1, "1", "full rotation", "Front, back, horse, fighting. Each side. Just check in."),
    ex("All Blocks — 5 Each from Horse Stance", 1, "5", "each block", "Low, middle, high. Easy."),
    ex("Jab-Cross", 2, "10", "combos", "Light. Smooth. Don't tire yourself out.")
  ]),
  cooldownBlock([
    { name: "Butterfly Stretch", sets: 1, reps: "60 sec", qualifier: "", notes: "Deep. Long hold. Breathe and relax." },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "60 sec", qualifier: "each leg", notes: "Long and slow. Let the muscles release." },
    { name: "Pigeon Stretch", sets: 1, reps: "60 sec", qualifier: "each side", notes: "Deep hip opener. Sink in. You need this for tomorrow." },
    { name: "Seated Straddle Stretch", sets: 1, reps: "60 sec", qualifier: "", notes: "Legs wide. Walk hands forward. Breathe." },
    { name: "Child's Pose", sets: 1, reps: "60 sec", qualifier: "", notes: "Arms extended. Forehead down. Clear your mind. Tomorrow you test." }
  ])
];

// --- WEEK 8, DAY 3 (BELT TEST SIMULATION — STRIPE 4 CHECK) ---
allWorkouts["8-3"] = [
  themeBlock("BELT TEST DAY! [name], Wan-seong! 8 weeks ago you walked in wondering if you could do this. Today you PROVE it. Charyeot! Gyeongnye! (Bow!) Shi-jak! (BEGIN!)"),
  buildWarmup(23, "Belt test warm-up. Get the blood flowing. Stay calm. You know everything."),
  warmupBlock("Warm-up kicks — controlled.", [
    ex("Front Kick", 1, "10", "each leg", "Belt height. Clean."),
    ex("Roundhouse Kick", 1, "10", "each leg", "Full pivot. Full snap."),
    ex("Side Kick", 1, "8", "each leg", "Push through. Blade of foot.")
  ]),
  straightSetBlock("BELT TEST — Stances. Called by instructor. Hold until released.", [
    ex("Front Stance (Ap Seogi)", 3, "10 sec", "each side", "Deep. Weight forward. Strong base."),
    ex("Back Stance (Dwit Gubi)", 3, "10 sec", "each side", "Weight back. Front foot light."),
    ex("Horse Stance (Juchum Seogi)", 3, "15 sec", "", "Wide. Deep. Solid."),
    ex("Fighting Stance (Gyeorugi Seogi)", 3, "10 sec", "each side", "Light. Mobile. Hands up.")
  ]),
  straightSetBlock("BELT TEST — Blocks. From horse stance, instructor calls.", [
    ex("Low Block (Arae Makgi)", 3, "10", "alternating", "Sharp. From opposite shoulder. Stop at knee level."),
    ex("Middle Block (Momtong Makgi)", 3, "10", "alternating", "Forearm across body. Tight."),
    ex("High Block (Olgul Makgi)", 3, "10", "alternating", "Above forehead. Wrist rotated.")
  ]),
  straightSetBlock("BELT TEST — Hand Techniques.", [
    ex("Jab (Ap Jireugi)", 3, "10", "", "Fast. Straight. Return to guard."),
    ex("Cross (Bandae Jireugi)", 3, "10", "", "Hip rotation. Power."),
    ex("Jab-Cross Combo", 3, "10", "combos", "1-2. Snappy."),
    ex("Jab-Cross-Hook Combo", 3, "8", "combos", "1-2-3. Hook clean."),
    ex("Reverse Punch from Front Stance", 3, "5", "each side", "Step, settle, punch.")
  ]),
  straightSetBlock("BELT TEST — Kicks. Both legs. Instructor watches each.", [
    ex("Front Kick (Ap Chagi)", 3, "5", "each leg", "Chamber. Extend. Hold 1 sec. Retract. Set down."),
    ex("Roundhouse Kick (Dollyo Chagi)", 3, "5", "each leg", "Pivot. Snap shin. Retract. Set down."),
    ex("Side Kick (Yeop Chagi)", 3, "5", "each leg", "Push. Blade of foot. Hold 1 sec. Retract."),
    ex("Front Kick + Roundhouse Kick (same leg)", 2, "3", "each leg", "Combo kick. No set down between.")
  ]),
  straightSetBlock("BELT TEST — Kicho Form Performance.", [
    ex("Kicho Form — Full Performance", 3, "1", "complete form", "Charyeot. Gyeongnye. Kicho Il Jang — Shi-jak! Every block. Every punch. Every step. Full power. Full spirit. KIHAP on the final technique. Bow. You did it."),
    ex("Kicho Form — Spirit Round", 1, "1", "complete form", "One final time. Leave it ALL on the floor. This is who you are now. KIHAP!")
  ]),
  cooldownBlock([
    { name: "Butterfly Stretch", sets: 1, reps: "60 sec", qualifier: "", notes: "You earned this stretch. Breathe." },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "60 sec", qualifier: "each leg", notes: "Look how much further you can reach than 8 weeks ago." },
    { name: "Pigeon Stretch", sets: 1, reps: "60 sec", qualifier: "each side", notes: "Your hips opened up. This is proof." },
    { name: "Seated Straddle Stretch", sets: 1, reps: "60 sec", qualifier: "", notes: "Wide legs. Walk forward. You're more flexible than you were. Period." },
    { name: "Child's Pose", sets: 1, reps: "60 sec", qualifier: "", notes: "Arms out. Forehead down. [name], you just completed 8 weeks of taekwondo. You are a martial artist. Be proud. Pil-seung! (Certain victory!)" }
  ])
];

// ===== BUILD PAYLOAD AND SEND =====
const payload = {
  trainerEmail: program.trainerEmail,
  programName: program.name,
  programData: {
    daysPerWeek: 3,
    totalWeeks: 8,
    allWorkouts: allWorkouts
  }
};

async function saveProgram() {
  try {
    console.log("Saving program: " + program.name);
    console.log("Total workouts: " + Object.keys(allWorkouts).length);
    console.log("Workout keys: " + Object.keys(allWorkouts).join(", "));

    const response = await fetch("https://app.bestrongagain.com/api/workout/save-program.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log("API Response:", JSON.stringify(result, null, 2));

    if (result.success) {
      console.log("Program saved successfully!");
    } else {
      console.log("Error saving program:", result.message || "Unknown error");
    }
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

saveProgram();
