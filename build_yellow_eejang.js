const program = {
  name: "Yellow Belt — Taegeuk Ee Jang"
};

// ─── HELPERS ───
const theme = (text) => ({ type: "theme", themeText: text });

const warmup = (notes, exercises) => ({ type: "warmup", notes, exercises });
const we = (name, reps, qualifier = "", notes = "") => ({ name, sets: 1, reps, qualifier, notes });

const superset = (notes, exercises) => ({ type: "superset", notes, exercises });
const se = (name, sets, reps, qualifier = "", notes = "") => ({ name, sets, reps, qualifier, notes });

const straightSet = (notes, exercises) => ({ type: "straight-set", notes, exercises });

const conditioning = (exercises) => ({ type: "conditioning", exercises });
const ce = (name, sets, duration, durationUnit = "sec") => ({ name, sets, duration, durationUnit });

const cooldown = (exercises) => ({ type: "cooldown", exercises });
const cd = (name, reps, qualifier = "", notes = "") => ({ name, sets: 1, reps, qualifier, notes });

// ─── REUSABLE BLOCKS ───

const standardWarmup = (extras = []) => warmup("Get the body moving — dynamic stretches and joint prep", [
  we("Jumping Jacks", "30 sec", "", "Loose and relaxed"),
  we("Arm Circles", "15 sec", "each direction", "Shoulders warm"),
  we("Leg Swings (front/back)", "10", "each leg", "Loosen hips"),
  we("Hip Circles", "10", "each direction", "Open the hips"),
  we("High Knees in Place", "30 sec", "", "Get the heart rate up"),
  ...extras
]);

const standardCooldown = cooldown([
  cd("Standing Quad Stretch", "30 sec", "each leg", "Breathe and relax"),
  cd("Standing Hamstring Stretch", "30 sec", "each leg", "Slow exhale on the stretch"),
  cd("Butterfly Stretch", "30 sec", "", "Press knees gently"),
  cd("Cross-Body Shoulder Stretch", "20 sec", "each arm", "Decompress the shoulders"),
  cd("Standing Calf Stretch", "20 sec", "each leg", "Push the heel down")
]);

const advancedCooldown = cooldown([
  cd("Pigeon Stretch", "30 sec", "each side", "Deep hip opener"),
  cd("Standing Quad Stretch", "30 sec", "each leg", "Breathe and relax"),
  cd("Seated Straddle Stretch", "30 sec", "", "Reach forward, flat back"),
  cd("Cross-Body Shoulder Stretch", "20 sec", "each arm", ""),
  cd("Standing Forward Fold", "30 sec", "", "Let everything hang loose")
]);

// ─── THEMES ───
const themes = {
  w1: "[name], Bal-jeon! (Progress!) Yellow belt is about stepping IN. Close the distance. The step-in roundhouse is your new weapon. Taegeuk Ee Jang represents joy — find joy in the challenge.",
  w2: "[name], Bal-jeon! (Progress!) Yellow belt is about stepping IN. Close the distance. The step-in roundhouse is your new weapon. Taegeuk Ee Jang represents joy — find joy in the challenge.",
  w3: "[name], Gan-jeol! (Determination!) Your combinations are getting complex. Palm block to cross to hook. Your hands are catching up to your feet. Keep pushing.",
  w4: "[name], Gan-jeol! (Determination!) Your combinations are getting complex. Palm block to cross to hook. Your hands are catching up to your feet. Keep pushing.",
  w5: "[name], Yong-gi! (Courage!) One-step sparring teaches you to face an attack and answer it. Do not flinch. Step, block, counter. Your form flows from memory now.",
  w6: "[name], Yong-gi! (Courage!) One-step sparring teaches you to face an attack and answer it. Do not flinch. Step, block, counter. Your form flows from memory now.",
  w7: "[name], Seung-ri! (Victory!) Everything you have learned — kicks, combos, form, sparring, breaking. You are ready. Show them a yellow belt. KIHAP!",
  w8: "[name], Seung-ri! (Victory!) Everything you have learned — kicks, combos, form, sparring, breaking. You are ready. Show them a yellow belt. KIHAP!"
};

// ═══════════════════════════════════════════════════
// WEEK 1 — Stripe 1: Step-in roundhouse, skip side kick intro, Ee Jang 1-9
// ═══════════════════════════════════════════════════

const w1d1 = [
  theme(themes.w1),
  standardWarmup([we("Walking Lunges", "10", "each leg", "Controlled depth")]),
  warmup("Warm-up Kicks — shake out the rust", [
    we("Front Kick (rear leg)", "10", "each leg", "Chamber high, snap out"),
    we("Roundhouse Kick (rear leg)", "10", "each leg", "Turn the hip over — review from Il Jang program")
  ]),
  superset("Superset 1 — Step-In Roundhouse Introduction", [
    se("Step-In Roundhouse Breakdown (no kick)", 5, "5", "each side", "Step forward with the front foot, shift weight, chamber the rear leg. Just the footwork first."),
    se("Step-In Roundhouse (slow)", 5, "5", "each leg", "Now add the kick. Step, shift, kick. Land with kicking leg in front. Slow and controlled."),
    se("Inner Palm Block (stationary)", 5, "5", "each hand", "Open hand, block from outside to center. This is your new block for yellow belt.")
  ]),
  superset("Superset 2 — Ee Jang Introduction (Moves 1-4)", [
    se("Ee Jang: Walk-through Moves 1-4", 5, "1", "", "Move 1: Left walking stance, low block. Move 2: Right front kick, right middle punch. Move 3: Right walking stance, low block. Move 4: Left front kick, left middle punch."),
    se("Il Jang Full Form Review", 3, "1", "", "Run your white belt form. Keep it sharp — you still need this at test.")
  ]),
  conditioning([
    ce("Jump Squats", 3, "20", "sec"),
    ce("Plank Hold", 3, "30", "sec"),
    ce("Mountain Climbers", 3, "20", "sec")
  ]),
  standardCooldown
];

const w1d2 = [
  theme(themes.w1),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick (alternating)", "10", "total", "Light and snappy"),
    we("Side Kick (rear leg)", "8", "each leg", "Review — push through the heel"),
    we("Roundhouse Kick (rear leg)", "8", "each leg", "Hip turnover")
  ]),
  superset("Superset 1 — Step-In Roundhouse + Jab Cross", [
    se("Step-In Roundhouse (land front), Jab-Cross", 5, "5", "each side", "This is Yellow Belt Kicking Combo #2. Step in, roundhouse, land front, immediately jab-cross."),
    se("Skip Side Kick Introduction", 5, "5", "each leg", "Small skip forward on the front foot, fire the rear leg side kick. Land balanced. This is new — focus on the skip motion.")
  ]),
  superset("Superset 2 — Ee Jang Moves 5-9", [
    se("Ee Jang: Walk-through Moves 5-9", 5, "1", "", "Move 5: Left walking stance, inside middle block. Move 6: Right front kick, right high punch. Move 7: Right walking stance, inside middle block. Move 8: Left front kick, left high punch. Move 9: Left walking stance, low block."),
    se("Ee Jang Moves 1-9 Connected", 3, "1", "", "Put it together. Moves 1 through 9 in sequence. Pause at each move, check your stance.")
  ]),
  conditioning([
    ce("Burpees (no push-up)", 3, "20", "sec"),
    ce("Flutter Kicks", 3, "20", "sec")
  ]),
  standardCooldown
];

const w1d3 = [
  theme(themes.w1),
  standardWarmup([we("Inchworms", "5", "", "Walk hands out to plank, walk back")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "10", "total", "Quick switch"),
    we("Ax Kick (rear leg)", "6", "each leg", "Straight up, straight down — review")
  ]),
  superset("Superset 1 — Inner Palm Block Combo", [
    se("Inner Palm Block, Cross, Hook (stationary)", 5, "5", "each side", "Yellow Belt Kicking Combo #1 (it's a hand combo). Palm block the jab, cross with rear hand, hook with lead hand. Smooth and connected."),
    se("Step-In Roundhouse (land front), Jab-Cross", 5, "5", "each side", "Keep drilling combo #2. The landing matters — land stable, hands up, then punch.")
  ]),
  superset("Superset 2 — Ee Jang Review + Il Jang", [
    se("Ee Jang Moves 1-9 Full Run", 4, "1", "", "Flow through all 9 moves. Start to find the rhythm."),
    se("Il Jang Full Form", 2, "1", "", "Don't let it get rusty. Sharp KIHAP at the end.")
  ]),
  conditioning([
    ce("High Knees", 3, "30", "sec"),
    ce("Side Plank Hold", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 2 — Stripe 1 continued: polish step-in, skip side kick, combos
// ═══════════════════════════════════════════════════

const w2d1 = [
  theme(themes.w2),
  standardWarmup([we("Lateral Lunges", "8", "each side", "Stretch the groin")]),
  warmup("Warm-up Kicks", [
    we("Front Kick (alternating)", "10", "total", "Snap and rechamber"),
    we("Step-In Roundhouse (slow)", "6", "each leg", "Warming up the new kick")
  ]),
  superset("Superset 1 — Combo Refinement", [
    se("Inner Palm Block, Cross, Hook", 5, "8", "each side", "Combo #1 — faster now. Block snaps, cross rotates the hip, hook is tight."),
    se("Step-In Roundhouse, Jab-Cross", 5, "8", "each side", "Combo #2 — step in with purpose. Land balanced, punches are immediate.")
  ]),
  superset("Superset 2 — Skip Side Kick + Ee Jang", [
    se("Skip Side Kick (focus: skip distance)", 5, "5", "each leg", "Cover more ground with the skip. Push off the ball of the front foot."),
    se("Ee Jang Moves 1-9", 4, "1", "", "Smoother each time. Check stances — walking stance, front stance, back stance.")
  ]),
  conditioning([
    ce("Squat Jumps", 3, "20", "sec"),
    ce("Bicycle Crunches", 3, "30", "sec"),
    ce("Jumping Jacks", 3, "20", "sec")
  ]),
  standardCooldown
];

const w2d2 = [
  theme(themes.w2),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "12", "total", "Turn that hip"),
    we("Side Kick (rear leg)", "8", "each leg", "Push through the heel"),
    we("Ax Kick (rear leg)", "6", "each leg", "Height over speed")
  ]),
  superset("Superset 1 — Back Leg Side Kick Combo", [
    se("Back Leg Side Kick (land front)", 5, "8", "each leg", "Yellow Belt Kicking Combo #3. Fire the rear leg side kick and land with that leg in front. Chamber, extend, land."),
    se("Inner Palm Block, Cross, Hook (moving forward)", 5, "5", "each side", "Now do combo #1 while stepping forward. Close distance, block, counter.")
  ]),
  superset("Superset 2 — Ee Jang + Form Flow", [
    se("Ee Jang Moves 1-9 (no pauses)", 4, "1", "", "Try to flow. Each move connects to the next. Breathe with each technique."),
    se("Il Jang Full Form (speed run)", 2, "1", "", "Do Il Jang at full speed. KIHAP loud.")
  ]),
  conditioning([
    ce("Plank Shoulder Taps", 3, "20", "sec"),
    ce("Split Squat Jumps", 3, "20", "sec")
  ]),
  standardCooldown
];

const w2d3 = [
  theme(themes.w2),
  standardWarmup([we("Spiderman Stretch", "5", "each side", "Deep hip opener for kicks")]),
  warmup("Warm-up Kicks", [
    we("Step-In Roundhouse", "8", "each leg", "Full speed now"),
    we("Skip Side Kick", "6", "each leg", "Skip and fire")
  ]),
  superset("Superset 1 — All 3 Yellow Belt Combos Review", [
    se("Combo #1: Inner Palm Block, Cross, Hook", 4, "5", "each side", "Sharp hands"),
    se("Combo #2: Step-In Roundhouse (land front), Jab-Cross", 4, "5", "each side", "Land stable, punch fast"),
    se("Combo #3: Back Leg Side Kick (land front)", 4, "5", "each leg", "Drive through the target")
  ]),
  superset("Superset 2 — Ee Jang Stripe 1 Test", [
    se("Ee Jang Moves 1-9 (test yourself)", 3, "1", "", "Can you do it without looking at notes? Try it. If you mess up, reset and go again."),
    se("Il Jang Full Form", 2, "1", "", "Maintain your white belt form.")
  ]),
  conditioning([
    ce("Burpees", 3, "20", "sec"),
    ce("Plank Hold", 3, "30", "sec"),
    ce("High Knees", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 3 — Stripe 2: All 3 combos drilled, skip side kick power, Ee Jang 10-18, one-step #1
// ═══════════════════════════════════════════════════

const w3d1 = [
  theme(themes.w3),
  standardWarmup([we("Walking Knee Hugs", "10", "each leg", "Open those hips")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "12", "total", "Snap and rechamber"),
    we("Step-In Roundhouse", "6", "each leg", "Commit to the step"),
    we("Skip Side Kick", "6", "each leg", "Close the distance")
  ]),
  superset("Superset 1 — Combo Power Development", [
    se("Combo #1: Inner Palm Block, Cross, Hook (power)", 5, "8", "each side", "Hit hard now. The hook should rotate the whole body. Exhale on every strike."),
    se("Combo #2: Step-In Roundhouse, Jab-Cross (power)", 5, "8", "each side", "Step in BIG. Roundhouse with intent. Land and fire the punches.")
  ]),
  superset("Superset 2 — Ee Jang Moves 10-14", [
    se("Ee Jang: Walk-through Moves 10-14", 5, "1", "", "Move 10: Right front kick, right high section block (right back stance). Move 11: Left front kick, left high section block (left back stance). Move 12: Right walking stance, low block. Move 13: Right front kick, right middle punch. Move 14: Left walking stance, high block."),
    se("Ee Jang Moves 1-14 Connected", 3, "1", "", "Connect the first 14 moves. Take your time at the transitions.")
  ]),
  conditioning([
    ce("Tuck Jumps", 3, "15", "sec"),
    ce("Plank to Push-up", 3, "20", "sec")
  ]),
  standardCooldown
];

const w3d2 = [
  theme(themes.w3),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick (alternating)", "10", "total", "Light and fast"),
    we("Back Leg Side Kick", "8", "each leg", "Drive through the heel")
  ]),
  superset("Superset 1 — Skip Side Kick Power + Combo #3", [
    se("Skip Side Kick (focus: power)", 5, "8", "each leg", "Skip further. Hit harder. Turn the hip fully. The heel is the weapon."),
    se("Combo #3: Back Leg Side Kick (land front)", 5, "8", "each leg", "Land in control. The landing position matters for the test.")
  ]),
  superset("Superset 2 — One-Step Sparring #1 Introduction", [
    se("One-Step #1: Walkthrough (no partner)", 5, "5", "each side", "Attacker throws middle punch. You: skip side step LEFT to the outside (riding horse stance), left palm block, right-left double punch. Skip back to fighting stance, right roundhouse kick to stomach. Walk through each piece slowly."),
    se("One-Step #1: Connected (slow)", 5, "5", "each side", "Now connect it. Side step, palm block, double punch, skip back, roundhouse. Smooth and deliberate.")
  ]),
  conditioning([
    ce("Jump Squats", 3, "20", "sec"),
    ce("Russian Twists (bodyweight)", 3, "30", "sec")
  ]),
  standardCooldown
];

const w3d3 = [
  theme(themes.w3),
  standardWarmup([we("Lateral Lunges", "8", "each side", "Groin and inner thigh prep")]),
  warmup("Warm-up Kicks", [
    we("Step-In Roundhouse", "8", "each leg", "Full commit"),
    we("Ax Kick (rear leg)", "6", "each leg", "Height and snap down")
  ]),
  superset("Superset 1 — All 3 Combos at Speed", [
    se("Combo #1: Inner Palm Block, Cross, Hook", 4, "8", "each side", "Fast hands. The palm block is open and reactive."),
    se("Combo #2: Step-In Roundhouse, Jab-Cross", 4, "8", "each side", "Full speed. Explosive step."),
    se("Combo #3: Back Leg Side Kick (land front)", 4, "8", "each leg", "Power through the target")
  ]),
  superset("Superset 2 — Ee Jang Moves 15-18 + Review", [
    se("Ee Jang: Walk-through Moves 15-18", 5, "1", "", "Move 15: Left front kick, left inside middle block (left front stance). Move 16: Right front kick, right high punch (right front stance). Move 17: Right walking stance, low block. Move 18: Right middle punch (same stance). KIHAP on move 18."),
    se("Ee Jang Full Form (all 18 moves)", 3, "1", "", "The whole thing. Take your time. Pause between sections if needed.")
  ]),
  conditioning([
    ce("Burpees", 3, "20", "sec"),
    ce("Side Plank Hold", 3, "20", "sec"),
    ce("Mountain Climbers", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 4 — Stripe 2 continued: combos sharp, Ee Jang full, one-step #1 drilled
// ═══════════════════════════════════════════════════

const w4d1 = [
  theme(themes.w4),
  standardWarmup([we("Inchworms", "5", "", "Core activation")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "12", "total", "Speed"),
    we("Skip Side Kick", "8", "each leg", "Cover ground")
  ]),
  superset("Superset 1 — Combo Chains", [
    se("Combo #1 into Combo #2 (chain)", 5, "5", "each side", "Palm block, cross, hook — then immediately step-in roundhouse, land front, jab-cross. Chain the two combos together."),
    se("Combo #3: Back Leg Side Kick (land front) — power focus", 5, "8", "each leg", "Maximum power. Imagine breaking a board with each kick.")
  ]),
  superset("Superset 2 — Ee Jang Full + One-Step #1", [
    se("Ee Jang Full Form", 4, "1", "", "All 18 moves. Work on memorization. Minimize pauses."),
    se("One-Step #1 (full speed)", 5, "5", "each side", "Side step, palm block, double punch, skip back, roundhouse. Getting faster and more confident.")
  ]),
  conditioning([
    ce("Plank Hold", 3, "30", "sec"),
    ce("Squat Jumps", 3, "20", "sec")
  ]),
  standardCooldown
];

const w4d2 = [
  theme(themes.w4),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick (alternating)", "10", "total", "Snap"),
    we("Step-In Roundhouse", "6", "each leg", "Step deep"),
    we("Back Leg Side Kick", "6", "each leg", "Drive")
  ]),
  superset("Superset 1 — One-Step #1 Polished + Combos", [
    se("One-Step #1 (continuous reps)", 5, "5", "each side", "No pauses between pieces. Side step, block, punches, skip, kick — one flowing sequence."),
    se("All 3 Combos Back-to-Back", 4, "1", "", "Run combo #1, then #2, then #3 without stopping. Rest, repeat. This simulates test conditions.")
  ]),
  superset("Superset 2 — Ee Jang Memorization", [
    se("Ee Jang Full Form (eyes closed start)", 4, "1", "", "Close your eyes. Visualize the first move. Open eyes, begin. See how far you get from memory."),
    se("Il Jang Full Form", 2, "1", "", "Keep the white belt form sharp. You will perform both at your test.")
  ]),
  conditioning([
    ce("High Knees", 3, "30", "sec"),
    ce("Flutter Kicks", 3, "30", "sec"),
    ce("Jumping Jacks", 3, "30", "sec")
  ]),
  standardCooldown
];

const w4d3 = [
  theme(themes.w4),
  standardWarmup([we("Walking Lunges with Twist", "8", "each leg", "Warm up the core and hips")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (speed)", "10", "each leg", "Fast as possible"),
    we("Skip Side Kick", "8", "each leg", "Distance and power")
  ]),
  superset("Superset 1 — Stripe 2 Combo Test", [
    se("Combo #1: Inner Palm Block, Cross, Hook (test quality)", 3, "10", "each side", "Imagine an instructor watching. Perfect form."),
    se("Combo #2: Step-In Roundhouse, Jab-Cross (test quality)", 3, "10", "each side", "Land clean. Punches sharp."),
    se("Combo #3: Back Leg Side Kick, land front (test quality)", 3, "10", "each leg", "Full extension. Control the landing.")
  ]),
  superset("Superset 2 — Ee Jang + One-Step Review", [
    se("Ee Jang Full Form (no stopping)", 3, "1", "", "Start to finish. No pauses. If you forget a move, keep going and fix it next rep."),
    se("One-Step #1 (both sides, full speed)", 3, "5", "each side", "Confident and fast. You own this now.")
  ]),
  conditioning([
    ce("Tuck Jumps", 3, "15", "sec"),
    ce("Plank Shoulder Taps", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 5 — Stripe 3: All 3 one-steps, Ee Jang from memory, step-in axe kick, advanced combos
// ═══════════════════════════════════════════════════

const w5d1 = [
  theme(themes.w5),
  standardWarmup([we("Spiderman Stretch", "5", "each side", "Deep hip stretch for high kicks")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "12", "total", "Warm and loose"),
    we("Ax Kick (rear leg)", "8", "each leg", "Get the height — you're going to need it for board break"),
    we("Step-In Roundhouse", "6", "each leg", "Explosive")
  ]),
  superset("Superset 1 — One-Step Sparring #2 Introduction", [
    se("One-Step #2: Walkthrough (no partner)", 5, "5", "each side", "Attacker throws middle punch. You: step forward right to back stance, right outside/in middle block, twist counter-clockwise, left elbow strike to stomach. Left backfist to face, step back right, left skip side kick to stomach."),
    se("One-Step #2: Connected (slow)", 5, "5", "each side", "Connect the whole sequence. Step, block, twist, elbow, backfist, step back, skip side kick. Each piece flows into the next.")
  ]),
  superset("Superset 2 — Step-In Axe Kick Introduction", [
    se("Step-In Axe Kick (breakdown)", 5, "5", "each leg", "This is your board break. Step forward with lead foot, swing rear leg UP — straight up past the target — then snap it DOWN through the target. The heel smashes down."),
    se("Ee Jang Full Form (from memory)", 3, "1", "", "No peeking. Run the whole form. Mark any spots you forget.")
  ]),
  conditioning([
    ce("Burpees", 3, "20", "sec"),
    ce("Plank Hold", 3, "30", "sec")
  ]),
  standardCooldown
];

const w5d2 = [
  theme(themes.w5),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick (alternating)", "10", "total", "Snap"),
    we("Side Kick (rear leg)", "8", "each leg", "Push and hold at extension for 1 sec"),
    we("Ax Kick (slow, high)", "6", "each leg", "Get that leg as high as possible")
  ]),
  superset("Superset 1 — One-Step Sparring #3 Introduction", [
    se("One-Step #3: Walkthrough (no partner)", 5, "5", "each side", "Attacker throws middle punch. You: switch feet, left reverse side kick, right roundhouse kick landing in horse stance, left palm block, right punch."),
    se("One-Step #3: Connected (slow)", 5, "5", "each side", "Switch, reverse side kick, roundhouse to horse stance, palm block, punch. The switch-to-kick transition is the hardest part. Practice the switch separately if needed.")
  ]),
  superset("Superset 2 — One-Step #1 + #2 Review", [
    se("One-Step #1 (full speed)", 4, "5", "each side", "Side step left, palm block, double punch, skip back, roundhouse. You know this one."),
    se("One-Step #2 (building speed)", 4, "5", "each side", "Step forward, block, twist, elbow, backfist, step back, skip side kick. Getting smoother.")
  ]),
  conditioning([
    ce("Jump Squats", 3, "20", "sec"),
    ce("Russian Twists", 3, "30", "sec"),
    ce("Mountain Climbers", 3, "20", "sec")
  ]),
  standardCooldown
];

const w5d3 = [
  theme(themes.w5),
  standardWarmup([we("Leg Swings (side to side)", "10", "each leg", "Loosen the hips for high kicks")]),
  warmup("Warm-up Kicks", [
    we("Step-In Roundhouse", "8", "each leg", "Power"),
    we("Skip Side Kick", "8", "each leg", "Distance"),
    we("Step-In Axe Kick", "6", "each leg", "Height and snap down")
  ]),
  superset("Superset 1 — All 3 One-Steps", [
    se("One-Step #1 (full speed)", 3, "5", "each side", "Skip side step, palm block, double punch, skip back, roundhouse"),
    se("One-Step #2 (full speed)", 3, "5", "each side", "Step forward, outside block, twist, elbow, backfist, step back, skip side kick"),
    se("One-Step #3 (building speed)", 3, "5", "each side", "Switch, reverse side kick, roundhouse to horse stance, palm block, punch")
  ]),
  superset("Superset 2 — Step-In Axe Kick Power + Ee Jang", [
    se("Step-In Axe Kick (power focus)", 5, "5", "each leg", "Step in deep. Swing the leg UP high. Strike DOWN with the heel. Imagine a board at face height."),
    se("Ee Jang Full Form (from memory, no stops)", 3, "1", "", "Run it clean. KIHAP on move 18. You should know this now.")
  ]),
  conditioning([
    ce("Plank to Push-up", 3, "20", "sec"),
    ce("Split Squat Jumps", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 6 — Stripe 3 continued: polish one-steps, axe kick confidence, form mastery
// ═══════════════════════════════════════════════════

const w6d1 = [
  theme(themes.w6),
  standardWarmup([we("Hip Circles (wide)", "10", "each direction", "Open up for kicks")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating, fast)", "14", "total", "Speed"),
    we("Step-In Axe Kick", "6", "each leg", "Board break prep")
  ]),
  superset("Superset 1 — One-Step Sparring Polish", [
    se("One-Step #1 (crisp)", 4, "5", "each side", "Every piece sharp. The skip back to fighting stance should be smooth."),
    se("One-Step #2 (crisp)", 4, "5", "each side", "The twist to elbow strike is the money move. Snap that elbow."),
    se("One-Step #3 (crisp)", 4, "5", "each side", "The switch-to-reverse-side-kick must be explosive. Don't telegraph it.")
  ]),
  superset("Superset 2 — Advanced Combo Work", [
    se("Combo #2 + Back Leg Side Kick Chain", 5, "5", "each side", "Step-in roundhouse, land front, jab-cross, then immediately back leg side kick. 4-piece chain."),
    se("Ee Jang Full Form (performance quality)", 3, "1", "", "Perform it like you're at the test. Loud KIHAP. Strong stances. Sharp techniques.")
  ]),
  conditioning([
    ce("Tuck Jumps", 3, "20", "sec"),
    ce("Plank Hold", 3, "40", "sec")
  ]),
  standardCooldown
];

const w6d2 = [
  theme(themes.w6),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick to Roundhouse (same leg)", "6", "each leg", "Double kick combo"),
    we("Skip Side Kick", "8", "each leg", "Distance and accuracy"),
    we("Step-In Axe Kick", "6", "each leg", "Height")
  ]),
  superset("Superset 1 — Board Break Development", [
    se("Step-In Axe Kick (target height)", 5, "8", "each leg", "Pick a spot on the wall at face height. Step in, swing up past it, strike down through it. The heel is the breaking surface."),
    se("Scissor Axe Kick (intro for 13+)", 5, "5", "each leg", "Jump, switch legs in the air, the rear leg swings up and strikes down. This is the advanced option. Try it if you're comfortable.")
  ]),
  superset("Superset 2 — Forms + One-Steps Combined", [
    se("Ee Jang Full Form", 2, "1", "", "Clean run-through"),
    se("Il Jang Full Form", 2, "1", "", "Keep it sharp"),
    se("All 3 One-Steps (cycle through)", 3, "1", "each", "Do #1, then #2, then #3 without stopping. Rest, repeat.")
  ]),
  conditioning([
    ce("Burpees", 3, "25", "sec"),
    ce("Bicycle Crunches", 3, "30", "sec")
  ]),
  standardCooldown
];

const w6d3 = [
  theme(themes.w6),
  standardWarmup([we("Walking Lunges with Twist", "8", "each leg", "Full body warm-up")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (power)", "8", "each leg", "Slam it"),
    we("Step-In Roundhouse", "6", "each leg", "Close the distance and fire")
  ]),
  superset("Superset 1 — Stripe 3 Assessment", [
    se("All 3 Combos: #1, #2, #3 (back to back)", 3, "1", "full cycle", "Run all three kicking combos in sequence. Grade yourself. Are they test-ready?"),
    se("All 3 One-Steps (back to back)", 3, "1", "full cycle", "Run all three one-steps in sequence. Are the transitions smooth? Is the footwork clean?")
  ]),
  superset("Superset 2 — Forms + Board Break", [
    se("Ee Jang Full Form (2 full runs back to back)", 2, "2", "", "Two reps, no break. Build endurance for the test."),
    se("Step-In Axe Kick (10 rep power set)", 3, "10", "each leg", "10 reps each leg. Build confidence in the breaking technique. Step, swing, SMASH.")
  ]),
  conditioning([
    ce("High Knees", 3, "30", "sec"),
    ce("Plank Shoulder Taps", 3, "25", "sec"),
    ce("Jump Squats", 3, "20", "sec")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 7 — Stripe 4: Everything at speed and power, mock test on D3
// ═══════════════════════════════════════════════════

const w7d1 = [
  theme(themes.w7),
  standardWarmup([we("Spiderman Stretch", "5", "each side", "Open hips wide")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (speed)", "10", "each leg", "Fast and snappy"),
    we("Skip Side Kick (power)", "8", "each leg", "Full extension"),
    we("Step-In Axe Kick", "6", "each leg", "Board break height")
  ]),
  superset("Superset 1 — Test Speed Combos", [
    se("Combo #1: Inner Palm Block, Cross, Hook (test speed)", 5, "10", "each side", "Full speed, full power. This is how it looks on test day."),
    se("Combo #2: Step-In Roundhouse, Jab-Cross (test speed)", 5, "10", "each side", "Explosive step-in. Land clean. Punches snappy."),
    se("Combo #3: Back Leg Side Kick, land front (test speed)", 5, "10", "each leg", "Full power side kick. Stick the landing.")
  ]),
  superset("Superset 2 — One-Steps at Test Speed", [
    se("One-Step #1 (full speed, both sides)", 3, "5", "each side", "Skip side step, palm block, double punch, skip back, roundhouse. SHARP."),
    se("One-Step #2 (full speed, both sides)", 3, "5", "each side", "Step, block, twist, elbow, backfist, step back, skip side kick. CRISP."),
    se("One-Step #3 (full speed, both sides)", 3, "5", "each side", "Switch, reverse side kick, roundhouse to horse stance, palm block, punch. EXPLOSIVE.")
  ]),
  conditioning([
    ce("Burpees", 4, "25", "sec"),
    ce("Plank Hold", 3, "45", "sec")
  ]),
  standardCooldown
];

const w7d2 = [
  theme(themes.w7),
  standardWarmup(),
  warmup("Warm-up Kicks", [
    we("Front Kick to Roundhouse (same leg)", "8", "each leg", "Combo kick"),
    we("Step-In Axe Kick (power)", "8", "each leg", "Break the board")
  ]),
  superset("Superset 1 — Forms at Test Intensity", [
    se("Il Jang Full Form (test quality)", 3, "1", "", "As if the masters are watching. Every stance perfect. Every block sharp. Loud KIHAP."),
    se("Ee Jang Full Form (test quality)", 3, "1", "", "Joy in every move. Strong stances. Powerful techniques. KIHAP on move 18 shakes the room.")
  ]),
  superset("Superset 2 — Board Break Confidence", [
    se("Step-In Axe Kick (max power set)", 5, "8", "each leg", "Every rep is a board break attempt. Step in, swing UP, drive DOWN. The heel destroys the target."),
    se("Combo Chain: #1 + #2 + #3 (continuous)", 3, "2", "full cycles", "Run all 3 combos back to back, twice through. Test-day simulation.")
  ]),
  conditioning([
    ce("Tuck Jumps", 3, "20", "sec"),
    ce("Mountain Climbers", 3, "30", "sec"),
    ce("Side Plank Hold", 3, "25", "sec")
  ]),
  standardCooldown
];

const w7d3 = [
  theme("[name], MOCK TEST DAY. This is your dress rehearsal. Perform everything as if this is the real test. Full power. Full speed. Loud KIHAP. No shortcuts. After today, you know exactly where you stand."),
  standardWarmup([we("Light Jogging in Place", "60 sec", "", "Get the heart rate up for test simulation")]),
  warmup("Warm-up Kicks — Quick and Focused", [
    we("Roundhouse Kick (alternating)", "10", "total", "Shake out the nerves"),
    we("Side Kick (alternating)", "8", "total", "Sharp and controlled")
  ]),
  straightSet("MOCK TEST — Kicking Combinations", [
    se("Combo #1: Inner Palm Block, Cross, Hook", 3, "5", "each side", "Test quality. Instructor is watching."),
    se("Combo #2: Step-In Roundhouse (land front), Jab-Cross", 3, "5", "each side", "Explosive. Land stable. Punch immediately."),
    se("Combo #3: Back Leg Side Kick (land front)", 3, "5", "each leg", "Maximum power. Clean landing.")
  ]),
  straightSet("MOCK TEST — One-Step Sparring", [
    se("One-Step #1", 2, "3", "each side", "Full speed. Smooth transitions."),
    se("One-Step #2", 2, "3", "each side", "Full speed. Elbow strike sharp."),
    se("One-Step #3", 2, "3", "each side", "Full speed. Reverse side kick explosive.")
  ]),
  straightSet("MOCK TEST — Forms", [
    se("Il Jang Full Form (test performance)", 2, "1", "", "White belt form. Perfect it."),
    se("Ee Jang Full Form (test performance)", 2, "1", "", "Yellow belt form. Own it. KIHAP!")
  ]),
  straightSet("MOCK TEST — Board Break", [
    se("Step-In Axe Kick (full power)", 5, "3", "each leg", "Step, swing, BREAK. Commit 100%. No hesitation.")
  ]),
  advancedCooldown
];

// ═══════════════════════════════════════════════════
// WEEK 8 — Stripe 4 continued: polish, light day, belt test simulation
// ═══════════════════════════════════════════════════

const w8d1 = [
  theme(themes.w8),
  standardWarmup([we("Lateral Lunges", "8", "each side", "Open the hips")]),
  warmup("Warm-up Kicks", [
    we("Roundhouse Kick (alternating)", "12", "total", "Smooth"),
    we("Step-In Roundhouse", "8", "each leg", "Commit"),
    we("Step-In Axe Kick", "6", "each leg", "Board break prep")
  ]),
  superset("Superset 1 — Final Polish: Combos", [
    se("Combo #1: Inner Palm Block, Cross, Hook (perfection)", 4, "8", "each side", "You've done this hundreds of times. Make every rep perfect."),
    se("Combo #2: Step-In Roundhouse, Jab-Cross (perfection)", 4, "8", "each side", "Step-in is explosive. Landing is balanced. Punches are fast."),
    se("Combo #3: Back Leg Side Kick, land front (perfection)", 4, "8", "each leg", "Full extension. Heel drives through. Clean landing.")
  ]),
  superset("Superset 2 — Final Polish: One-Steps + Forms", [
    se("All 3 One-Steps (cycle, full speed)", 3, "1", "full cycle each side", "Run #1, #2, #3 without stopping. Both sides. This is test pace."),
    se("Ee Jang Full Form (back to back)", 3, "1", "", "Three clean reps. No mistakes. If you mess up, you start over."),
    se("Il Jang Full Form", 2, "1", "", "Keep it sharp.")
  ]),
  conditioning([
    ce("Burpees", 4, "25", "sec"),
    ce("Plank Hold", 3, "45", "sec"),
    ce("High Knees", 3, "30", "sec")
  ]),
  standardCooldown
];

const w8d2 = [
  theme("[name], Light day. Your body needs to recover before the test. Stay loose, stay sharp, but don't exhaust yourself. Trust your training. You have put in the work."),
  standardWarmup(),
  warmup("Warm-up Kicks — Light and Easy", [
    we("Front Kick (alternating, light)", "8", "total", "Just moving"),
    we("Roundhouse Kick (light)", "6", "each leg", "50% power — stay loose")
  ]),
  superset("Superset 1 — Light Technical Review", [
    se("Combo #1 (50% speed)", 3, "5", "each side", "Technique check. No power. Just clean movement."),
    se("Combo #2 (50% speed)", 3, "5", "each side", "Footwork focus. Light roundhouse."),
    se("Combo #3 (50% speed)", 3, "5", "each leg", "Chamber, extend, land. Light and controlled.")
  ]),
  superset("Superset 2 — Light Forms + Visualization", [
    se("Ee Jang Full Form (50% speed)", 2, "1", "", "Slow and deliberate. Feel every move."),
    se("Il Jang Full Form (50% speed)", 2, "1", "", "Slow and clean."),
    se("Mental Rehearsal: Close eyes and walk through all one-steps", 1, "1", "", "Close your eyes. Visualize each one-step sparring drill. See yourself doing them perfectly. Feel the movements.")
  ]),
  cooldown([
    cd("Standing Quad Stretch", "30 sec", "each leg", "Breathe deep"),
    cd("Standing Hamstring Stretch", "30 sec", "each leg", "Relax into it"),
    cd("Butterfly Stretch", "30 sec", "", "Let the knees fall"),
    cd("Child's Pose", "30 sec", "", "Full relaxation"),
    cd("Standing Forward Fold", "30 sec", "", "Let everything go. You are ready.")
  ])
];

const w8d3 = [
  theme("[name], Seung-ri! VICTORY! This is it. Belt test simulation. Everything you've trained for 8 weeks. Combos. One-steps. Forms. Board break. Full power. Full speed. Leave nothing behind. You are a yellow belt. Now PROVE IT. KIHAP!"),
  standardWarmup([we("Light Jog in Place", "60 sec", "", "Shake out any nerves. You've done this before.")]),
  warmup("Warm-up Kicks — Test Prep", [
    we("Roundhouse Kick (alternating)", "10", "total", "Get the blood moving"),
    we("Side Kick (alternating)", "8", "total", "Sharp"),
    we("Ax Kick (alternating)", "6", "total", "Height")
  ]),
  straightSet("BELT TEST SIMULATION — Kicking Combinations", [
    se("Combo #1: Front Hand Inner Palm Block, Cross, Hook", 3, "5", "each side", "FULL POWER. Show the examiner your hands are weapons."),
    se("Combo #2: Front Leg Step-In Roundhouse (Land Front), Jab-Cross", 3, "5", "each side", "EXPLOSIVE step-in. Stick the landing. Fire the punches."),
    se("Combo #3: Back Leg Side Kick (Land Front)", 3, "5", "each leg", "DRIVE through the target. Heel first. Clean landing.")
  ]),
  straightSet("BELT TEST SIMULATION — One-Step Sparring", [
    se("One-Step #1: Skip side step left, palm block, double punch, skip back, roundhouse", 3, "3", "each side", "Every piece matters. Smooth and powerful."),
    se("One-Step #2: Step forward to back stance, outside block, twist, elbow, backfist, step back, skip side kick", 3, "3", "each side", "The elbow strike is devastating. The skip side kick finishes it."),
    se("One-Step #3: Switch feet, reverse side kick, roundhouse to horse stance, palm block, punch", 3, "3", "each side", "The switch is explosive. The roundhouse lands in horse stance. Palm block, punch. DONE.")
  ]),
  straightSet("BELT TEST SIMULATION — Forms", [
    se("Il Jang Full Form (test performance)", 2, "1", "", "Your white belt form. It should be second nature. Sharp stances. Loud KIHAP."),
    se("Ee Jang Full Form (test performance)", 2, "1", "", "Your yellow belt form. Taegeuk Ee Jang — the joy of progress. Strong techniques. KIHAP on move 18 shakes the room.")
  ]),
  straightSet("BELT TEST SIMULATION — Board Break", [
    se("Step-In Axe Kick (FULL POWER — board break)", 5, "5", "each leg", "This is the moment. Step in. Swing the leg HIGH. Drive the heel DOWN through the board. NO HESITATION. KIHAP! You break it or you break it. There is no try.")
  ]),
  cooldown([
    cd("Standing Quad Stretch", "30 sec", "each leg", "You did it."),
    cd("Standing Hamstring Stretch", "30 sec", "each leg", "Breathe."),
    cd("Butterfly Stretch", "30 sec", "", "Your body carried you through 8 weeks."),
    cd("Seated Forward Fold", "30 sec", "", "Let it all go."),
    cd("Standing Meditation", "30 sec", "", "Close your eyes. You walked in as a high white belt. You walk out ready for yellow. Bal-jeon. Gan-jeol. Yong-gi. Seung-ri. Charyeot. Kyeong-nye. OSS.")
  ])
];

// ═══════════════════════════════════════════════════
// BUILD PAYLOAD
// ═══════════════════════════════════════════════════

const allWorkouts = {
  "1-1": w1d1, "1-2": w1d2, "1-3": w1d3,
  "2-1": w2d1, "2-2": w2d2, "2-3": w2d3,
  "3-1": w3d1, "3-2": w3d2, "3-3": w3d3,
  "4-1": w4d1, "4-2": w4d2, "4-3": w4d3,
  "5-1": w5d1, "5-2": w5d2, "5-3": w5d3,
  "6-1": w6d1, "6-2": w6d2, "6-3": w6d3,
  "7-1": w7d1, "7-2": w7d2, "7-3": w7d3,
  "8-1": w8d1, "8-2": w8d2, "8-3": w8d3
};

const payload = {
  trainerEmail: "wisco.barbell@gmail.com",
  programName: program.name,
  programData: {
    daysPerWeek: 3,
    totalWeeks: 8,
    allWorkouts
  }
};

// ═══════════════════════════════════════════════════
// SAVE TO API
// ═══════════════════════════════════════════════════

async function saveProgram() {
  console.log(`Saving program: "${program.name}"`);
  console.log(`Total workouts: ${Object.keys(allWorkouts).length}`);

  try {
    const response = await fetch("https://app.bestrongagain.com/api/workout/save-program.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", text);

    try {
      const json = JSON.parse(text);
      console.log("Parsed:", JSON.stringify(json, null, 2));
    } catch (e) {
      // response wasn't JSON, already logged as text
    }
  } catch (err) {
    console.error("Error saving program:", err.message);
  }
}

saveProgram();
