const program = {
  name: "White Belt Foundations — 4 Week",
  daysPerWeek: 3,
  totalWeeks: 4,
  days: {}
};

const themes = {
  1: "[name], Shi-jak! (Begin!) Week 1 — every master was once a beginner. Focus on form, not speed. Control your body, control your mind. Charyeot... Kyeong-nye... Junbi!",
  2: "[name], Him! (Power!) Week 2 — you have built the foundation. Now add intention to every kick. Breathe. Chamber. Strike. Retract. Make every technique count.",
  3: "[name], Jeong-shin! (Spirit!) Week 3 — your spirit drives your technique. Push through fatigue with discipline. The belt does not make the fighter. The training does.",
  4: "[name], Wan-seong! (Completion!) Week 4 — you have earned this. Every kick is sharper, every stance is deeper. Show what 4 weeks of discipline looks like. Aja aja hwaiting!"
};

// ═══ WEEK 1: Pure Mechanics ═══

program.days["1-1"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", notes: "Get the blood flowing", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Arm Circles (Forward + Back)", sets: 1, reps: "15 each direction" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Warm-up kicks — light, focus on chamber", exercises: [
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Slow and controlled. Chamber, extend, retract." },
    { name: "Roundhouse Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Focus on pivot foot and hip rotation." },
  ]},
  { type: "superset", notes: "Superset 1 — Front Kick Mechanics", exercises: [
    { name: "Front Kick (Land Front)", sets: 5, reps: "5", qualifier: "each leg", notes: "Chamber high, snap out, retract, land forward." },
    { name: "Jab-Cross", sets: 5, reps: "5", notes: "Hands up, chin down, rotate hips." },
  ]},
  { type: "superset", notes: "Superset 2 — Linear Combo", exercises: [
    { name: "Front Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Front kick first, reset, then roundhouse. Same leg." },
    { name: "Front Stance Low Block + Reverse Punch", sets: 5, reps: "5", qualifier: "each side", notes: "Form drill. Deep stance, strong block, snap the punch." },
  ]},
  { type: "cooldown", notes: "Cool down and stretch", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

program.days["1-2"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", notes: "Dynamic warm-up", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "Butt Kickers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "10 each direction", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Warm-up kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "8", qualifier: "each leg", notes: "Chamber knee high, thrust out linear, retract." },
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Side Kick Development", exercises: [
    { name: "Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Hold chamber 1 sec before extending. Power through heel." },
    { name: "Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Step rear foot behind front, fire side kick. Entry technique." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Work", exercises: [
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "Front kick land front, immediately step behind side kick." },
    { name: "Jab-Cross + Front Kick", sets: 5, reps: "5", notes: "Hands open the door, kick closes it." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

program.days["1-3"] = [
  { type: "theme", themeText: themes[1] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "30" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Inchworms", sets: 1, reps: "5" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "Warm-up kicks", exercises: [
    { name: "Roundhouse Kick", sets: 3, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Roundhouse Precision", exercises: [
    { name: "Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Aim for same spot every time. Control the retraction." },
    { name: "Ax Kick (Inside/Out)", sets: 5, reps: "5", qualifier: "each leg", notes: "Lift high, chop down with control." },
  ]},
  { type: "superset", notes: "Superset 2 — White Belt Test Combo", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "4", qualifier: "each side", notes: "Full test combo. Hands then kicks." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "4", qualifier: "each side", notes: "Kick-kick-hands." },
  ]},
  { type: "conditioning", notes: "White belt finisher", exercises: [
    { name: "Front Kick Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "Nonstop front kicks each leg." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// ═══ WEEK 2: Adding Power ═══

program.days["2-1"] = [
  { type: "theme", themeText: themes[2] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "Mountain Climbers", sets: 1, reps: "15 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "10 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Push the tempo", exercises: [
    { name: "Front Kick", sets: 3, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Power Development", exercises: [
    { name: "Front Push Kick", sets: 5, reps: "6", qualifier: "each leg", notes: "Drive THROUGH the target. Push them back." },
    { name: "Jab-Cross-Hook", sets: 5, reps: "5", notes: "Add the hook. Rotate fully." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Under Pressure", exercises: [
    { name: "Jab-Cross + Front Kick + Roundhouse Kick", sets: 5, reps: "4", qualifier: "each side", notes: "Hands set up the kicks. Flow." },
    { name: "Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Faster than Week 1." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

program.days["2-2"] = [
  { type: "theme", themeText: themes[2] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "Butt Kickers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Bodyweight Squats", sets: 1, reps: "15" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "Warm-up kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Chamber, thrust, hold 1 sec, retract." },
    { name: "Front Kick", sets: 3, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Side Kick Depth", exercises: [
    { name: "Side Kick (3 sec hold)", sets: 5, reps: "4", qualifier: "each leg", notes: "Full extension, HOLD 3 sec, retract. Builds stability." },
    { name: "Step Behind Side Kick", sets: 5, reps: "6", qualifier: "each leg", notes: "Faster. Commit to the entry." },
  ]},
  { type: "superset", notes: "Superset 2 — Two-Kick Chains", exercises: [
    { name: "Roundhouse Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Same leg, two roundhouses. Body then head." },
    { name: "Front Kick + Ax Kick (Inside/Out)", sets: 5, reps: "4", qualifier: "each leg", notes: "Linear then vertical. Different angles." },
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

program.days["2-3"] = [
  { type: "theme", themeText: themes[2] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "40" },
    { name: "High Knees", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "All 3 kicks", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Hand + Foot Integration", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Full combo at speed." },
    { name: "Jab-Cross-Hook + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each side", notes: "3 punches into a kick." },
  ]},
  { type: "superset", notes: "Superset 2 — Belt Test Prep", exercises: [
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "4", qualifier: "each side", notes: "Test combo. Smooth and controlled." },
    { name: "Front Kick + Roundhouse Kick + Side Kick", sets: 5, reps: "3", qualifier: "each leg", notes: "3 kick types in sequence." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "Faster than Week 1." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

// ═══ WEEK 3: Spirit & Speed ═══

program.days["3-1"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "15 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Speed kicks", exercises: [
    { name: "Front Kick", sets: 3, reps: "15", qualifier: "each leg", notes: "Fast! Snap and retract." },
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Speed Chains", exercises: [
    { name: "Jab-Cross + Front Kick", sets: 5, reps: "6", qualifier: "each side", notes: "As fast as you can with form." },
    { name: "Roundhouse Kick + Roundhouse Kick", sets: 5, reps: "6", qualifier: "each leg", notes: "Double roundhouse. Tap then power." },
  ]},
  { type: "superset", notes: "Superset 2 — Reaction Combos", exercises: [
    { name: "Front Kick + Roundhouse Kick + Jab-Cross", sets: 5, reps: "4", qualifier: "each side", notes: "Kick-kick-hands." },
    { name: "Step Behind Side Kick + Jab-Cross", sets: 5, reps: "5", qualifier: "each side", notes: "Kick first, hands finish." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "2 min" },
  ]},
];

program.days["3-2"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg", notes: "Push power." },
    { name: "Ax Kick (Inside/Out)", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Power Combos", exercises: [
    { name: "Front Push Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each leg", notes: "Push them back, roundhouse while off balance." },
    { name: "Side Kick + Jab-Cross", sets: 5, reps: "5", qualifier: "each side", notes: "Power kick creates space, hands finish." },
  ]},
  { type: "superset", notes: "Superset 2 — 3-Strike Combos", exercises: [
    { name: "Jab-Cross + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Hands close distance, side kick punishes." },
    { name: "Front Kick + Ax Kick + Step Behind Side Kick", sets: 5, reps: "3", qualifier: "each leg", notes: "Three kicks. Linear, vertical, lateral." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Roundhouse Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "Max reps. Chamber height." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "30 sec" },
    { name: "Standing Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

program.days["3-3"] = [
  { type: "theme", themeText: themes[3] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "6" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
  ]},
  { type: "warmup", notes: "All kicks — form check", exercises: [
    { name: "Front Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "6", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Test Combos at Speed", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Belt test combo. Clean and fast." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "5", qualifier: "each side", notes: "Kicks lead." },
  ]},
  { type: "superset", notes: "Superset 2 — Advanced White Belt", exercises: [
    { name: "Roundhouse Kick + Front Kick + Step Behind Side Kick", sets: 5, reps: "4", qualifier: "each side", notes: "Three kicks, three angles." },
    { name: "Jab-Cross-Hook + Front Push Kick", sets: 5, reps: "5", notes: "Hands and feet together." },
  ]},
  { type: "conditioning", notes: "Final push", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
  ]},
  { type: "cooldown", exercises: [
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "30 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

// ═══ WEEK 4: Test Ready ═══

program.days["4-1"] = [
  { type: "theme", themeText: themes[4] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Mountain Climbers", sets: 1, reps: "20 each", qualifier: "each" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Sharp kicks", exercises: [
    { name: "Front Kick", sets: 3, reps: "15", qualifier: "each leg", notes: "Crisp. Every rep counts." },
    { name: "Roundhouse Kick", sets: 3, reps: "15", qualifier: "each leg" },
    { name: "Side Kick", sets: 3, reps: "10", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Precision", exercises: [
    { name: "Front Kick (pause at chamber)", sets: 5, reps: "5", qualifier: "each leg", notes: "Hold chamber 2 sec. Then snap. Perfect form." },
    { name: "Side Kick (3 sec hold)", sets: 5, reps: "5", qualifier: "each leg", notes: "Full extension hold. Strength meets technique." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Polish", exercises: [
    { name: "Jab-Cross + Front Kick + Roundhouse Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Smooth. No telegraphing." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 5, reps: "5", qualifier: "each side", notes: "Test combo, full speed, full control." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "45 sec" },
    { name: "Light Jog", sets: 1, reps: "2 min" },
  ]},
];

program.days["4-2"] = [
  { type: "theme", themeText: themes[4] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "Butt Kickers", sets: 1, reps: "25 each", qualifier: "each" },
    { name: "Hip Circles", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Walking Lunges", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Hurdle Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Power kicks", exercises: [
    { name: "Roundhouse Kick", sets: 3, reps: "12", qualifier: "each leg", notes: "Full power." },
    { name: "Front Push Kick", sets: 3, reps: "10", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 3, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Max Power", exercises: [
    { name: "Roundhouse Kick (max rotation)", sets: 5, reps: "5", qualifier: "each leg", notes: "Full hip turn. Snap through." },
    { name: "Step Behind Side Kick (Power)", sets: 5, reps: "5", qualifier: "each leg", notes: "DRIVE through. Board break prep." },
  ]},
  { type: "superset", notes: "Superset 2 — Combo Power", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 5, reps: "5", qualifier: "each side", notes: "Full power every strike. This is your test combo." },
    { name: "Front Kick + Roundhouse Kick + Ax Kick", sets: 5, reps: "4", qualifier: "each leg", notes: "3 kicks, 3 angles, full commitment." },
  ]},
  { type: "conditioning", exercises: [
    { name: "Roundhouse Burnout", sets: 3, duration: "30", durationUnit: "sec", notes: "All power. Every kick counts." },
  ]},
  { type: "cooldown", exercises: [
    { name: "Squat Hold", sets: 1, reps: "45 sec" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Child's Pose", sets: 1, reps: "30 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

program.days["4-3"] = [
  { type: "theme", themeText: themes[4] },
  { type: "warmup", exercises: [
    { name: "Jumping Jacks", sets: 1, reps: "50" },
    { name: "High Knees", sets: 1, reps: "30 each", qualifier: "each" },
    { name: "Inchworms", sets: 1, reps: "8" },
    { name: "Leg Swings (Front to Back)", sets: 1, reps: "12 each", qualifier: "each leg" },
    { name: "Leg Swings (Side to Side)", sets: 1, reps: "12 each", qualifier: "each leg" },
  ]},
  { type: "warmup", notes: "Every kick you know", exercises: [
    { name: "Front Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Roundhouse Kick", sets: 2, reps: "12", qualifier: "each leg" },
    { name: "Side Kick", sets: 2, reps: "10", qualifier: "each leg" },
    { name: "Ax Kick (Inside/Out)", sets: 2, reps: "8", qualifier: "each leg" },
    { name: "Step Behind Side Kick", sets: 2, reps: "8", qualifier: "each leg" },
  ]},
  { type: "superset", notes: "Superset 1 — Belt Test Combos (Full Speed)", exercises: [
    { name: "Jab-Cross", sets: 3, reps: "10", notes: "Sharp. No wasted movement." },
    { name: "Front Kick + Ax Kick + Jab-Cross", sets: 3, reps: "5", qualifier: "each side", notes: "Test combo. Show control." },
  ]},
  { type: "superset", notes: "Superset 2 — Belt Test Combos (Full Power)", exercises: [
    { name: "Jab-Cross + Front Kick + Step Behind Side Kick", sets: 3, reps: "5", qualifier: "each side", notes: "This is the one. Full power." },
    { name: "Step Behind Side Kick (Board Break Sim)", sets: 5, reps: "3", qualifier: "each leg", notes: "Full power. You are breaking a board." },
  ]},
  { type: "conditioning", notes: "Final test conditioning", exercises: [
    { name: "Front Kick Burnout", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Alternating Roundhouse Kicks", sets: 2, duration: "30", durationUnit: "sec" },
    { name: "Continuous Kicking Flow", sets: 1, duration: "60", durationUnit: "sec", notes: "Any kicks. 1 minute. Everything you have got." },
  ]},
  { type: "cooldown", notes: "You did it. Breathe. Stretch. You earned this.", exercises: [
    { name: "Child's Pose", sets: 1, reps: "45 sec" },
    { name: "Butterfly Stretch", sets: 1, reps: "45 sec" },
    { name: "Pigeon Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Seated Hamstring Stretch", sets: 1, reps: "45 sec", qualifier: "each leg" },
    { name: "Seated Straddle Stretch", sets: 1, reps: "45 sec" },
    { name: "Walking Cool Down", sets: 1, reps: "3 min" },
  ]},
];

// Build API payload — must match what the builder sends
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
  .then(data => {
    console.log("SUCCESS:", JSON.stringify(data));
  })
  .catch(err => {
    console.error("ERROR:", err.message);
  });
