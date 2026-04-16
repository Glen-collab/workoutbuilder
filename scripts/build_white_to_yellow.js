const program = {
  name: "White to Yellow Belt — 8 Week Progression",
  daysPerWeek: 3,
  totalWeeks: 8,
  days: {}
};

// Korean themes per phase
const themes = {
  1: "[name], Shi-jak! (Begin!) Weeks 1-2: Foundation. Learn to control your body before you control a fight. Chamber. Extend. Retract. Every kick starts and ends in the same place.",
  2: "[name], Shi-jak! (Begin!) Weeks 1-2: Foundation. Balance is everything. If you cannot stand on one leg, you cannot kick with the other. Slow is smooth. Smooth is fast.",
  3: "[name], Yeol-shim! (Passion!) Weeks 3-4: Your kicks are connecting to your hands now. A punch sets up a kick. A kick sets up a punch. Let them flow together.",
  4: "[name], Yeol-shim! (Passion!) Weeks 3-4: The ax kick is your vertical weapon. Lift high, drop with authority. Surprise comes from angles your opponent does not expect.",
  5: "[name], Jeong-shin! (Spirit!) Weeks 5-6: You are drilling your test combos now. These are not just kicks — they are your signature. Make them yours. Taegeuk Il Jang begins. Heaven. The beginning of all things.",
  6: "[name], Jeong-shin! (Spirit!) Weeks 5-6: One-step sparring teaches you to read an attack and answer it. Step back. Block. Counter. Do not think — react. Your body knows what to do.",
  7: "[name], Wan-seong! (Completion!) Weeks 7-8: Everything comes together. Combos at full speed. Form from memory. Board break with power. You are not preparing for a test — you ARE the test.",
  8: "[name], Wan-seong! (Completion!) Week 8: Belt test simulation. Show what 8 weeks of discipline built. Charyeot... Kyeong-nye... Shi-jak! Aja aja hwaiting!"
};

// ═══════════════════════════════════════════════
// WEEKS 1-2: FOUNDATION (Stripe 1 — Basic Kicks)
// ═══════════════════════════════════════════════

// W1D1 — Front Kick Mechanics
program.days["1-1"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", notes: "Get the blood flowing", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Arm Circles (Forward + Back)", sets: 1, reps: "15 each direction" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Warm-up kicks — slow and controlled", exercises: [
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Slow. Chamber, extend, retract. Feel every part." },
    { name: "Roundhouse Kick", sets: 3, reps: "8", qualifier: "each leg", notes: "Pivot foot. Hip rotation. Do not rush." },
  ]},
  { type: "superset", notes: "Superset 1 — Front Kick Isolation", exercises: [
    { name: "Front Kick (Land Front)", sets: 5, reps: "5", qualifier: "each leg", notes: "Chamber high, snap out, retract, land forward. Reset between reps." },
    { name: "Jab-Cross", sets: 5, reps: "8", notes: "Hands up, chin down, rotate hips on the cross." },
  ]},
  { type: "superset", notes: "Superset 2 — First Combo", exercises: [
    { name: "Front Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Two kicks, same leg. Put foot down between. Balance." },
    { name: "Front Stance Low Block + Reverse Punch", sets: 5, reps: "5", qualifier: "each side", notes: "Deep stance. Strong block. Snap the punch." },
  ]},
  { type: "cooldown", notes: "Stretch", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W1D2 — Side Kick Mechanics
program.days["1-2"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "Butt Kickers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "10 each direction", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Warm-up kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "8", qualifier: "each leg", notes: "Chamber knee to chest. Thrust linear. Heel/blade strikes." },
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Side Kick Development", exercises: [
    { name: "Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Hold chamber 1 sec. Extend. Hold 1 sec. Retract. Control." },
    { name: "Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Step rear foot behind front. Fire side kick. This is your board break." },
  ]},
  { type: "superset", notes: "Superset 2 — Linear Combos", exercises: [
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Front kick forward, step behind, side kick. Both linear." },
    { name: "Jab-Cross + Front Kick", sets: 5, reps: "5", notes: "Hands open the door, kick closes it." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W1D3 — Roundhouse + All 3 Together
program.days["1-3"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Inchworms", sets: 1, reps: "5" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "All 3 kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Roundhouse Focus", exercises: [
    { name: "Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Same spot every time. Pivot foot flat, hip drives through." },
    { name: "Roundhouse Kick + Roundhouse Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Same leg, two kicks. Body then head height." },
  ]},
  { type: "superset", notes: "Superset 2 — 3-Kick Flow", exercises: [
    { name: "Front Kick + Roundhouse Kick + Side Kick", sets: 5, reps: "3", qualifier: "each leg", notes: "Three different kicks. Three different paths. Balance between each." },
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "4", qualifier: "each side", notes: "Your first full combo. Hands then kicks." },
  ]},
  { type: "conditioning", notes: "Week 1 finisher", exercises: [
    { name: "Front Kick Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "Nonstop front kicks. Speed over power." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W2D1 — Speed + Power Intro
program.days["2-1"] = [
  { type: "theme", themeText: themes[2] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "Mountain Climbers", sets: 1, reps: "15 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Faster tempo this week", exercises: [
    { name: "Front Kick", sets: 3, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Speed", exercises: [
    { name: "Front Kick (Land Front)", sets: 5, reps: "6", qualifier: "each leg", notes: "Faster than Week 1. Same form. Speed comes from snap." },
    { name: "Roundhouse Kick", sets: 5, reps: "6", qualifier: "each leg", notes: "Quick pivot. Whip the shin." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Speed", exercises: [
    { name: "Jab-Cross + Front Kick", sets: 5, reps: "6", qualifier: "each side", notes: "Flow. Hands to feet without pause." },
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Faster transition. Trust your balance." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W2D2 — Side Kick Power
program.days["2-2"] = [
  { type: "theme", themeText: themes[2] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "Butt Kickers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Bodyweight Squats", sets: 1, reps: "15" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Push through. Drive with the heel." },
    { name: "Front Push Kick", sets: 3, reps: "8", qualifier: "each leg", notes: "New kick. Push the opponent BACK." },
  ]},
  { type: "superset", notes: "Superset 1 — Side Kick Depth", exercises: [
    { name: "Side Kick (3 sec hold)", sets: 5, reps: "4", qualifier: "each leg", notes: "Full extension. HOLD 3 sec. Retract. Builds real stability." },
    { name: "Step Behind Side Kick (Power)", sets: 5, reps: "6", qualifier: "each leg", notes: "Board break technique. Commit to the entry. Drive through." },
  ]},
  { type: "superset", notes: "Superset 2 — Power Combos", exercises: [
    { name: "Front Push Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Push them back, roundhouse while they are off balance." },
    { name: "Jab-Cross-Hook + Front Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Three punches into a kick. Add the hook." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Alternating Roundhouse Kicks", sets: 3, duration: "30", durationUnit: "sec", notes: "Left-right nonstop. Guard up." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W2D3 — Stripe 1 Test Day
program.days["2-3"] = [
  { type: "theme", themeText: themes[2] + " STRIPE 1 CHECK: Can you perform all 3 basic kicks with proper chamber, extension, and retraction?" },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "All kicks — show what you have learned", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — All Kicks Clean", exercises: [
    { name: "Front Kick (pause at chamber)", sets: 5, reps: "5", qualifier: "each leg", notes: "Hold chamber 2 sec. Snap. Perfect form. This is your stripe check." },
    { name: "Roundhouse Kick (slow motion)", sets: 5, reps: "5", qualifier: "each leg", notes: "Half speed. Show every part of the kick." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Check", exercises: [
    { name: "Side Kick (3 sec hold)", sets: 5, reps: "4", qualifier: "each leg", notes: "Full extension hold. Prove your balance." },
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Full combo. Smooth and controlled." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 3, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// ═══════════════════════════════════════════════
// WEEKS 3-4: COMBINATIONS (Stripe 2 — Hands + Feet)
// ═══════════════════════════════════════════════

// W3D1 — Ax Kick + Combo Building
program.days["3-1"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "15 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Introduce the ax kick", exercises: [
    { name: "Ax Kick (Inside/Out)", sets: 3, reps: "6", qualifier: "each leg", notes: "NEW KICK. Lift leg high inside, chop down outside. Heel strikes." },
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 3, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Ax Kick Development", exercises: [
    { name: "Ax Kick (Inside/Out)", sets: 5, reps: "5", qualifier: "each leg", notes: "Height matters. Lift ABOVE the target, drop DOWN through it." },
    { name: "Front Kick + Ax Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Linear then vertical. Different attack angles, same leg." },
  ]},
  { type: "superset", notes: "Superset 2 — Test Combo #2 Introduction", exercises: [
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "4", qualifier: "each side", notes: "THIS IS TEST COMBO #2. Kick-kick-hands. Learn it." },
    { name: "Jab-Cross + Front Kick + Roundhouse Kick", sets: 5, reps: "4", qualifier: "each side", notes: "Hands into double kick. Flow." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W3D2 — Test Combo #3 + Board Break
program.days["3-2"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Warm-up kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 3, reps: "8", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Test Combo #3", exercises: [
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "THIS IS TEST COMBO #3. Front kick land front, step behind, side kick." },
    { name: "Step Behind Side Kick (Power)", sets: 5, reps: "5", qualifier: "each leg", notes: "BOARD BREAK TECHNIQUE. Drive through. Imagine the board." },
  ]},
  { type: "superset", notes: "Superset 2 — All Test Combos", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "10", notes: "Test combo #1. Clean. Sharp." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Test combo #2." },
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg", notes: "Test combo #3." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Roundhouse Burnout", sets: 3, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W3D3 — Combo Linking Day
program.days["3-3"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Full kick warm-up", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "6", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Extended Combos", exercises: [
    { name: "Jab-Cross + Front Kick + Roundhouse Kick + Side Kick", sets: 5, reps: "3", qualifier: "each side", notes: "4-strike combo. Hands then 3 kicks. Balance is the challenge." },
    { name: "Front Push Kick + Roundhouse Kick + Jab-Cross", sets: 5, reps: "4", qualifier: "each side", notes: "Push, spin kick, punish with hands." },
  ]},
  { type: "superset", notes: "Superset 2 — Power Combos", exercises: [
    { name: "Jab-Cross-Hook + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "3 punches, 1 power kick." },
    { name: "Roundhouse Kick + Roundhouse Kick + Front Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Double roundhouse then switch to linear." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W4D1 — Combo Speed Day
program.days["4-1"] = [
  { type: "theme", themeText: themes[4] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Speed kicks", exercises: [
    { name: "Front Kick", sets: 3, reps: "15", qualifier: "each leg", notes: "Fast snap. Speed over power." },
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Test Combos at Speed", exercises: [
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "5", qualifier: "each side", notes: "Combo #2 at speed. No pauses between strikes." },
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Combo #3 at speed. Commit to the step behind." },
  ]},
  { type: "superset", notes: "Superset 2 — Ax Kick Power", exercises: [
    { name: "Ax Kick (Outside/In)", sets: 5, reps: "5", qualifier: "each leg", notes: "NEW ANGLE. Lift outside, chop inside. Different path, same power." },
    { name: "Ax Kick (Inside/Out) + Roundhouse Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Vertical then rotational. Keep them guessing." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W4D2 — Board Break Focus
program.days["4-2"] = [
  { type: "theme", themeText: themes[4] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Full power." },
    { name: "Step Behind Side Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Board break prep." },
  ]},
  { type: "superset", notes: "Superset 1 — Board Break Simulation", exercises: [
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "5", qualifier: "each leg", notes: "FULL POWER. Step behind, drive through. Hit a pad if available." },
    { name: "Side Kick (3 sec hold)", sets: 5, reps: "4", qualifier: "each leg", notes: "Strength at full extension. If you can hold it, you can break with it." },
  ]},
  { type: "superset", notes: "Superset 2 — Power Combos", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Full combo, full power. Test ready." },
    { name: "Front Push Kick + Roundhouse Kick + Ax Kick", sets: 5, reps: "3", qualifier: "each leg", notes: "Push-spin-chop. Three angles." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Roundhouse Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "Max power every kick." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W4D3 — Stripe 2 Check
program.days["4-3"] = [
  { type: "theme", themeText: themes[4] + " STRIPE 2 CHECK: Can you perform all 3 test combinations smoothly with hands and feet connected?" },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "Every kick — show control", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "6", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 2, reps: "6", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — All 3 Test Combos", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "10", notes: "Test combo #1. Crisp." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Test combo #2. Kicks lead." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo #3 + Board Break", exercises: [
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg", notes: "Test combo #3. Clean." },
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "3", qualifier: "each leg", notes: "Full power. You are breaking through." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// ═══════════════════════════════════════════════
// WEEKS 5-6: FORM + ONE-STEP (Stripe 3)
// ═══════════════════════════════════════════════

// W5D1 — Taegeuk Il Jang Introduction
program.days["5-1"] = [
  { type: "theme", themeText: themes[5] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "15 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Quick kick warm-up", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Taegeuk Il Jang Drills (Moves 1-9)", exercises: [
    { name: "Low Block + Reverse Punch (Front Stance)", sets: 5, reps: "5", qualifier: "each side", notes: "FORM DRILL. This is the opening of Il Jang. Low block in front stance, reverse punch. 90 degree turn." },
    { name: "Middle Block + Reverse Punch (Front Stance)", sets: 5, reps: "5", qualifier: "each side", notes: "Middle block, front stance. Snap the punch. This is moves 4-6." },
  ]},
  { type: "superset", notes: "Superset 2 — Test Combos (maintain)", exercises: [
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Keep your combos sharp while learning form." },
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg" },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 3, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W5D2 — Il Jang Continued + One-Step Intro
program.days["5-2"] = [
  { type: "theme", themeText: themes[5] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Il Jang Drills (Moves 10-18)", exercises: [
    { name: "High Block + Front Kick + Reverse Punch", sets: 5, reps: "5", qualifier: "each side", notes: "High block in walking stance, front kick, land forward, reverse punch. Last section of Il Jang." },
    { name: "Front Kick from Front Stance", sets: 5, reps: "5", qualifier: "each leg", notes: "Form-specific. Kick from front stance, not fighting stance. Different hip position." },
  ]},
  { type: "superset", notes: "Superset 2 — One-Step Sparring Introduction", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 5, reps: "5", qualifier: "each side", notes: "ONE-STEP #1. Attacker punches. You step back, low block, reverse punch." },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 5, reps: "5", qualifier: "each side", notes: "ONE-STEP #2. Same concept, middle block." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W5D3 — Full Il Jang + All One-Steps
program.days["5-3"] = [
  { type: "theme", themeText: themes[5] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Quick kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "Taegeuk Il Jang — Full Form Reps", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 5, reps: "1", notes: "Run through the entire form 5 times. Slow first 2, normal speed last 3. Focus: stances, power in blocks, snap in punches." },
  ]},
  { type: "superset", notes: "All 3 One-Step Sparring Drills", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #1." },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #2." },
    { name: "Step Back + High Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #3. NEW. High block overhead, reverse punch." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Alternating Roundhouse Kicks", sets: 3, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W6D1 — Form + Combos Together
program.days["6-1"] = [
  { type: "theme", themeText: themes[6] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Mountain Climbers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "All kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "Form Practice", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 3, reps: "1", notes: "Full speed, full power. No stopping. Like you are performing for a judge." },
  ]},
  { type: "superset", notes: "One-Step at Speed", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 5, reps: "3", qualifier: "each side", notes: "Fast. React, do not think." },
    { name: "Step Back + High Block + Reverse Punch", sets: 5, reps: "3", qualifier: "each side", notes: "High block then counter. Quick hands." },
  ]},
  { type: "superset", notes: "Combo Maintenance", exercises: [
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side" },
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W6D2 — One-Step Sparring Depth
program.days["6-2"] = [
  { type: "theme", themeText: themes[6] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg", notes: "Full power." },
    { name: "Step Behind Side Kick", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — One-Step Full Sequence", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #1. Shadow or with partner." },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #2." },
    { name: "Step Back + High Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side", notes: "One-step #3." },
  ]},
  { type: "superset", notes: "Superset 2 — Power + Form Integration", exercises: [
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "5", qualifier: "each leg", notes: "Full power. Board break." },
    { name: "Taegeuk Il Jang (Full Form)", sets: 2, reps: "1", notes: "Run it twice. Power in every technique." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Roundhouse Burnout", sets: 2, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

// W6D3 — Stripe 3 Check
program.days["6-3"] = [
  { type: "theme", themeText: themes[6] + " STRIPE 3 CHECK: Can you perform Taegeuk Il Jang from memory and all 3 one-step sparring drills?" },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "All kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "6", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "Form Check — Il Jang from Memory", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 5, reps: "1", notes: "5 reps. NO LOOKING. From memory. If you get lost, reset and start over." },
  ]},
  { type: "superset", notes: "One-Step Check", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side" },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side" },
    { name: "Step Back + High Block + Reverse Punch", sets: 3, reps: "5", qualifier: "each side" },
  ]},
  { type: "conditioning", exercises: [
    { name: "Alternating Roundhouse Kicks", sets: 3, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "45 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

// ═══════════════════════════════════════════════
// WEEKS 7-8: TEST READY (Stripe 4 — Full Simulation)
// ═══════════════════════════════════════════════

// W7D1 — Everything at Speed
program.days["7-1"] = [
  { type: "theme", themeText: themes[7] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Sharp kicks — every kick you know", exercises: [
    { name: "Front Kick", sets: 2, reps: "15", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "15", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Test Combos Full Speed", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "10", notes: "Combo #1. Sharp. No wasted movement." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Combo #2. Full speed." },
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg", notes: "Combo #3. Full speed." },
  ]},
  { type: "superset", notes: "Superset 2 — Form + One-Step", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 3, reps: "1", notes: "From memory. Full power." },
    { name: "Step Back + Low Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side" },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side" },
    { name: "Step Back + High Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "45 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W7D2 — Power Day
program.days["7-2"] = [
  { type: "theme", themeText: themes[7] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg", notes: "Full power every rep." },
    { name: "Front Push Kick", sets: 3, reps: "10", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Max Power Combos", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Full power every strike. This IS the test." },
    { name: "Front Kick + Roundhouse Kick + Ax Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Three kicks, three angles. Commit." },
  ]},
  { type: "superset", notes: "Superset 2 — Board Break + Form", exercises: [
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "5", qualifier: "each leg", notes: "FULL POWER. You ARE breaking the board." },
    { name: "Taegeuk Il Jang (Full Form)", sets: 2, reps: "1", notes: "Power run-through." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Roundhouse Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "All power." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

// W7D3 — Mock Test #1
program.days["7-3"] = [
  { type: "theme", themeText: themes[7] + " TODAY IS MOCK TEST #1. Treat this like the real thing. Full effort. Full focus." },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "8" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Test warm-up — every kick", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "FORM — Taegeuk Il Jang", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 3, reps: "1", notes: "3 reps. No mistakes. From memory. Full power and spirit." },
  ]},
  { type: "straight-set", notes: "KICKING COMBINATIONS", exercises: [
    { name: "Jab-Cross", sets: 2, reps: "5", notes: "Test combo #1." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 2, reps: "5", qualifier: "each side", notes: "Test combo #2." },
    { name: "Front Kick + Step Behind Side Kick", sets: 2, reps: "5", qualifier: "each leg", notes: "Test combo #3." },
  ]},
  { type: "straight-set", notes: "ONE-STEP SPARRING", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side", notes: "One-step #1." },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side", notes: "One-step #2." },
    { name: "Step Back + High Block + Reverse Punch", sets: 2, reps: "5", qualifier: "each side", notes: "One-step #3." },
  ]},
  { type: "straight-set", notes: "BOARD BREAK", exercises: [
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "3", qualifier: "each leg", notes: "Full power. Break through." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Continuous Kicking Flow", sets: 1, duration: "60", durationUnit: "sec", notes: "1 minute. Any kicks. Show your spirit." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

// W8D1 — Final Polish
program.days["8-1"] = [
  { type: "theme", themeText: themes[8] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Test-pace kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "15", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "15", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Combo Polish — identify weak spots", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "10", notes: "Which hand is weaker? Fix it now." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Which side feels shakier? Do 2 extra reps that side." },
  ]},
  { type: "superset", notes: "Board Break + Form Polish", exercises: [
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg", notes: "Smooth. Land balanced." },
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "3", qualifier: "each leg", notes: "Last power reps before test day." },
    { name: "Taegeuk Il Jang (Full Form)", sets: 3, reps: "1", notes: "Slow, medium, fast. Three different tempos." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "45 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// W8D2 — Light Day Before Test
program.days["8-2"] = [
  { type: "theme", themeText: themes[8] + " Light day. Trust your training. You are ready." },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "8 each", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "Light kicks — technique only", exercises: [
    { name: "Front Kick", sets: 2, reps: "8", qualifier: "each leg", notes: "Easy. Just feel the movement." },
    { name: "Roundhouse Kick", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "6", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "One walk-through of everything", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 2, reps: "1", notes: "2 reps. Medium speed. Confident." },
    { name: "Jab-Cross", sets: 1, reps: "5" },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 1, reps: "3", qualifier: "each side" },
    { name: "Front Kick + Step Behind Side Kick", sets: 1, reps: "3", qualifier: "each leg" },
    { name: "Step Back + Low Block + Reverse Punch", sets: 1, reps: "3", qualifier: "each side" },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 1, reps: "3", qualifier: "each side" },
    { name: "Step Back + High Block + Reverse Punch", sets: 1, reps: "3", qualifier: "each side" },
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 1, reps: "3", qualifier: "each leg", notes: "3 reps. Feel the power. You are ready." },
  ]},
  { type: "cooldown", notes: "Extended stretch. Rest well tonight.", exercises: [
    { name: "Child's Pose", sets: 1, reps: "60 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "60 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "60 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "5 min" },
  ]},
];

// W8D3 — BELT TEST SIMULATION
program.days["8-3"] = [
  { type: "theme", themeText: "[name], this is it. Charyeot. Kyeong-nye. Shi-jak! 8 weeks of training. Show the judges who you are. Every kick, every block, every punch — with full spirit. KIHAP! You are a yellow belt. Now prove it." },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "8" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "BELT TEST — Full kick warm-up", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "straight-set", notes: "TEST: TAEGEUK IL JANG", exercises: [
    { name: "Taegeuk Il Jang (Full Form)", sets: 3, reps: "1", notes: "3 reps. Full power. Full spirit. KIHAP on the last move." },
  ]},
  { type: "straight-set", notes: "TEST: KICKING COMBINATIONS", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "5", notes: "Combo #1. Show them your hands." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Combo #2. Kicks lead. KIHAP." },
    { name: "Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each leg", notes: "Combo #3. Land balanced. KIHAP." },
  ]},
  { type: "straight-set", notes: "TEST: ONE-STEP SPARRING", exercises: [
    { name: "Step Back + Low Block + Reverse Punch", sets: 3, reps: "3", qualifier: "each side", notes: "One-step #1. React and counter." },
    { name: "Step Back + Middle Block + Reverse Punch", sets: 3, reps: "3", qualifier: "each side", notes: "One-step #2." },
    { name: "Step Back + High Block + Reverse Punch", sets: 3, reps: "3", qualifier: "each side", notes: "One-step #3." },
  ]},
  { type: "straight-set", notes: "TEST: BOARD BREAK", exercises: [
    { name: "Step Behind Side Kick (Board Break)", sets: 5, reps: "1", qualifier: "each leg", notes: "ONE REP. FULL POWER. BREAK IT. KIHAP!" },
  ]},
  { type: "conditioning", notes: "FINAL — Show your spirit", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Continuous Kicking Flow", sets: 1, duration: "60", durationUnit: "sec", notes: "EVERYTHING. 1 minute. Show the judges your heart." },
  ]},
  { type: "cooldown", notes: "Charyeot. Kyeong-nye. You did it. Breathe. You earned this belt.", exercises: [
    { name: "Child's Pose", sets: 1, reps: "60 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "60 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "60 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "60 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "60 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "5 min" },
  ]},
];

// Save to API
const payload = {
  trainerEmail: "wisco.barbell@gmail.com",
  programName: program.name,
  programData: {
    daysPerWeek: program.daysPerWeek,
    totalWeeks: program.totalWeeks,
    allWorkouts: program.days,
  },
};

fetch("https://app.bestrongagain.com/api/workout/save-program.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
})
  .then(r => r.json())
  .then(data => console.log("SUCCESS:", JSON.stringify(data)))
  .catch(err => console.error("ERROR:", err.message));
