// Kickboxing White Belt — Kicho Foundations
// 8-week, 3-day/week beginner kickboxing program
// Belt test at Week 8 Day 3: Kickboxing Kicho Form

const program = {
  name: "Kickboxing White Belt — Kicho Foundations"
};

// ── Theme texts by stripe ──
const themes = {
  stripe1: "[name], kickboxing is the art of 8 limbs meeting 4 corners. Your fists start it. Your shins finish it. Learn the stance. Own the guard.",
  stripe2: "[name], hands and feet together now. Your jab sets up the kick. Your kick sets up the cross. Flow between weapons.",
  stripe3: "[name], the form is your fight blueprint. Every turn, every pivot — you are training angles that win fights. Practice it until it is reflex.",
  stripe4: "[name], 8 weeks of building a fighter's foundation. Punches are sharp. Kicks are heavy. Show them what a kickboxer looks like."
};

function themeForWeek(w) {
  if (w <= 2) return themes.stripe1;
  if (w <= 4) return themes.stripe2;
  if (w <= 6) return themes.stripe3;
  return themes.stripe4;
}

// ── Warmup stretches rotation ──
const stretches = ["Hip Flexor Stretch", "Calf Stretch", "Hamstring Stretch", "Quad Stretch", "Butterfly Stretch"];
function stretchForDay(w, d) {
  return stretches[((w - 1) * 3 + (d - 1)) % stretches.length];
}

// ── Warmup block builder ──
function warmup(w, d) {
  const jumpExercise = (d % 2 === 1) ? "Jump Rope" : "Jumping Jacks";
  return {
    type: "warmup",
    notes: "Get the blood moving and loosen up for kicks",
    exercises: [
      { name: jumpExercise, sets: 1, reps: "60 sec", qualifier: "", notes: "Light pace, stay on toes" },
      { name: "Shadow Boxing", sets: 1, reps: "60 sec", qualifier: "", notes: "Jab-cross combos, stay relaxed" },
      { name: "Leg Swings", sets: 1, reps: "15", qualifier: "each side", notes: "Front-to-back and side-to-side" },
      { name: "Hip Circles", sets: 1, reps: "10", qualifier: "each direction", notes: "Wide circles, open the hips" },
      { name: "Arm Circles", sets: 1, reps: "15", qualifier: "each direction", notes: "Small to large circles" },
      { name: stretchForDay(w, d), sets: 1, reps: "30 sec", qualifier: "each side", notes: "Hold steady, breathe deep" }
    ]
  };
}

// ── Cooldown block ──
function cooldown() {
  return {
    type: "cooldown",
    exercises: [
      { name: "Hip Flexor Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Kneeling lunge position" },
      { name: "Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Seated or standing" },
      { name: "Quad Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Standing, pull heel to glute" },
      { name: "Calf Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Wall stretch, press heel down" },
      { name: "Shoulder Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Cross-body arm pull" },
      { name: "Butterfly Stretch", sets: 1, reps: "45 sec", qualifier: "", notes: "Seated, press knees gently toward floor" }
    ]
  };
}

// ═══════════════════════════════════════════
// WEEK 1 — Stripe 1: Stance, Jab, Cross, Guard
// ═══════════════════════════════════════════

// W1D1 — Kickboxing Stance + Jab
const w1d1 = [
  { type: "theme", themeText: themeForWeek(1) },
  warmup(1, 1),
  {
    type: "straight-set", notes: "Warm-up rounds — light and loose",
    exercises: [
      { name: "Shadow Boxing", sets: 2, reps: "60 sec", qualifier: "", notes: "Jabs only, focus on returning to guard" },
      { name: "Front Kick (chamber, extend, retract)", sets: 2, reps: "5", qualifier: "each side", notes: "Slow tempo, feel the chamber" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Stance and jab mechanics",
    exercises: [
      { name: "Footwork: Forward-Back Shuffle", sets: 4, reps: "30 sec", qualifier: "", notes: "Kickboxing stance — wider than boxing, slightly more square. Stay on balls of feet." },
      { name: "Jab", sets: 4, reps: "10", qualifier: "each side", notes: "Full extension, snap back to guard. Rotate fist at end." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Guard awareness and movement",
    exercises: [
      { name: "Footwork: Lateral movement", sets: 3, reps: "30 sec", qualifier: "", notes: "Slide left and right, hands up in guard the entire time" },
      { name: "Jab", sets: 3, reps: "15", qualifier: "", notes: "Double and triple jabs. Speed over power." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W1D2 — Cross mechanics + guard
const w1d2 = [
  { type: "theme", themeText: themeForWeek(1) },
  warmup(1, 2),
  {
    type: "straight-set", notes: "Warm-up rounds — punches light",
    exercises: [
      { name: "Jab", sets: 2, reps: "10", qualifier: "each side", notes: "Relaxed, snappy" },
      { name: "Footwork: Forward-Back Shuffle", sets: 2, reps: "30 sec", qualifier: "", notes: "Stay in kickboxing stance" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Cross mechanics",
    exercises: [
      { name: "Cross", sets: 4, reps: "10", qualifier: "each side", notes: "Rotate rear hip, pivot rear foot. Power comes from the ground." },
      { name: "Jab-Cross", sets: 4, reps: "8", qualifier: "", notes: "1-2 combo. Return to guard after every rep." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Guard + footwork with punches",
    exercises: [
      { name: "Footwork: Forward-Back Shuffle", sets: 3, reps: "30 sec", qualifier: "", notes: "Throw a jab-cross at the end of each shuffle forward" },
      { name: "Jab-Cross", sets: 3, reps: "10", qualifier: "", notes: "Focus on guard return between every combo" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W1D3 — Front kick intro
const w1d3 = [
  { type: "theme", themeText: themeForWeek(1) },
  warmup(1, 3),
  {
    type: "straight-set", notes: "Warm-up rounds — mix punches and kicks slow",
    exercises: [
      { name: "Jab-Cross", sets: 2, reps: "8", qualifier: "", notes: "Light and crisp" },
      { name: "Front Kick (chamber, extend, retract)", sets: 2, reps: "5", qualifier: "each side", notes: "Slow — chamber knee high, extend, retract, set down" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Front kick technique",
    exercises: [
      { name: "Front Kick (chamber, extend, retract)", sets: 5, reps: "8", qualifier: "each side", notes: "Chamber: knee to chest. Extend: push through ball of foot. Retract: pull knee back before setting down." },
      { name: "Jab-Cross", sets: 5, reps: "6", qualifier: "", notes: "Keep hands sharp between kick sets" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Stance and guard under fatigue",
    exercises: [
      { name: "Footwork: Lateral movement", sets: 3, reps: "30 sec", qualifier: "", notes: "Hands in guard, move left and right" },
      { name: "Front Kick (chamber, extend, retract)", sets: 3, reps: "6", qualifier: "each side", notes: "Kick off the shuffle — step, kick, return to guard" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Front Kick Burnout (timed)", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 2 — Stripe 1: Round kick intro, solidify basics
// ═══════════════════════════════════════════

// W2D1 — Round kick intro
const w2d1 = [
  { type: "theme", themeText: themeForWeek(2) },
  warmup(2, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross", sets: 2, reps: "10", qualifier: "", notes: "Smooth and relaxed" },
      { name: "Front Kick (chamber, extend, retract)", sets: 2, reps: "6", qualifier: "each side", notes: "Focus on chamber" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Round kick mechanics",
    exercises: [
      { name: "Round Kick (shin contact, hip rotation)", sets: 5, reps: "6", qualifier: "each side", notes: "Turn the hip OVER. Contact with the shin, not the foot. Pivot the base foot." },
      { name: "Jab", sets: 5, reps: "10", qualifier: "", notes: "Keep punches sharp between kick sets" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Kicks back to back",
    exercises: [
      { name: "Front Kick (chamber, extend, retract)", sets: 3, reps: "6", qualifier: "each side", notes: "Push kick — snap it out" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 3, reps: "6", qualifier: "each side", notes: "Slow and controlled — feel the hip turn" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Round Kick Burnout (timed)", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W2D2 — Jab-Cross polish + kick review
const w2d2 = [
  { type: "theme", themeText: themeForWeek(2) },
  warmup(2, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Boxing", sets: 2, reps: "60 sec", qualifier: "", notes: "Jab-cross with movement" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 2, reps: "5", qualifier: "each side", notes: "Light, focus on form" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Punch polish",
    exercises: [
      { name: "Jab-Cross", sets: 4, reps: "10", qualifier: "", notes: "Crisp 1-2. Full extension, full retraction." },
      { name: "Footwork: Pivot drill", sets: 4, reps: "8", qualifier: "each direction", notes: "Pivot 45 degrees off center, throw jab-cross" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Kick review",
    exercises: [
      { name: "Front Kick (chamber, extend, retract)", sets: 3, reps: "8", qualifier: "each side", notes: "Add a little more snap" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 3, reps: "8", qualifier: "each side", notes: "Turn the hip, land the shin" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W2D3 — Full review day, all basics
const w2d3 = [
  { type: "theme", themeText: themeForWeek(2) },
  warmup(2, 3),
  {
    type: "straight-set", notes: "Warm-up rounds — everything light",
    exercises: [
      { name: "Jab-Cross", sets: 2, reps: "8", qualifier: "", notes: "Relaxed" },
      { name: "Front Kick (chamber, extend, retract)", sets: 2, reps: "5", qualifier: "each side", notes: "Slow tempo" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 2, reps: "5", qualifier: "each side", notes: "Light, control the hip" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Punch + kick technique check",
    exercises: [
      { name: "Jab-Cross", sets: 4, reps: "10", qualifier: "", notes: "Guard up the whole time" },
      { name: "Front Kick (chamber, extend, retract)", sets: 4, reps: "8", qualifier: "each side", notes: "Chamber high, extend fully" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Round kick + footwork",
    exercises: [
      { name: "Round Kick (shin contact, hip rotation)", sets: 4, reps: "8", qualifier: "each side", notes: "Full hip rotation every rep" },
      { name: "Footwork: Forward-Back Shuffle", sets: 4, reps: "30 sec", qualifier: "", notes: "Throw a round kick at end of each shuffle" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 3 — Stripe 2: Jab-Cross-Kick combos, Low kick intro
// ═══════════════════════════════════════════

// W3D1 — Jab-Cross-Front Kick combo
const w3d1 = [
  { type: "theme", themeText: themeForWeek(3) },
  warmup(3, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Boxing", sets: 2, reps: "60 sec", qualifier: "", notes: "Jab-cross with front kicks mixed in" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 2, reps: "6", qualifier: "each side", notes: "Wake up the hips" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Jab-Cross-Front Kick combo",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 5, reps: "6", qualifier: "each side", notes: "1-2 then front kick. Hands set up the kick. Return to guard after kick." },
      { name: "Footwork: Forward-Back Shuffle", sets: 5, reps: "30 sec", qualifier: "", notes: "Shuffle in, throw the combo, shuffle out" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Low kick introduction",
    exercises: [
      { name: "Low Kick (calf/thigh target)", sets: 4, reps: "6", qualifier: "each side", notes: "Same mechanics as round kick but aim at thigh/calf level. Chop down." },
      { name: "Jab-Cross", sets: 4, reps: "8", qualifier: "", notes: "Set up the low kick with punches" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Kick rounds", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W3D2 — Jab-Cross-Round Kick combo + pad work intro
const w3d2 = [
  { type: "theme", themeText: themeForWeek(3) },
  warmup(3, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Review yesterday's combo" },
      { name: "Low Kick (calf/thigh target)", sets: 2, reps: "5", qualifier: "each side", notes: "Light and controlled" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Jab-Cross-Round Kick combo",
    exercises: [
      { name: "Jab-Cross-Round Kick", sets: 5, reps: "6", qualifier: "each side", notes: "1-2 then round kick. The cross pulls the hip back, loading the kick. Let it rip." },
      { name: "Jab-Cross", sets: 5, reps: "8", qualifier: "", notes: "Speed round — fast hands" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Pad work basics",
    exercises: [
      { name: "Pad Work combos", sets: 4, reps: "6", qualifier: "", notes: "If you have a partner: jab-cross to pads, then front kick to body shield. Solo: shadow the combos." },
      { name: "Footwork: Lateral movement", sets: 4, reps: "30 sec", qualifier: "", notes: "Move after every combo — angle out" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W3D3 — All combos review + Kicho form intro
const w3d3 = [
  { type: "theme", themeText: themeForWeek(3) },
  warmup(3, 3),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Smooth" },
      { name: "Jab-Cross-Round Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Let the hip turn" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Combo rotation",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 4, reps: "6", qualifier: "each side", notes: "Alternate combos each set" },
      { name: "Jab-Cross-Round Kick", sets: 4, reps: "6", qualifier: "each side", notes: "Focus on smooth transitions" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Kickboxing Kicho form first look",
    exercises: [
      { name: "Kickboxing Kicho Form — First Half", sets: 4, reps: "3", qualifier: "", notes: "Jab, Cross, Front Kick. Turn 180. Jab, Cross, Front Kick. SLOW — learn the pattern." },
      { name: "Low Kick (calf/thigh target)", sets: 4, reps: "6", qualifier: "each side", notes: "Chop into the thigh" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 4 — Stripe 2: Pad work, form sections, low kicks
// ═══════════════════════════════════════════

// W4D1 — Pad work combos + form first half
const w4d1 = [
  { type: "theme", themeText: themeForWeek(4) },
  warmup(4, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross-Round Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Get the body flowing" },
      { name: "Low Kick (calf/thigh target)", sets: 2, reps: "5", qualifier: "each side", notes: "Light chops" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Pad work combos",
    exercises: [
      { name: "Pad Work combos", sets: 5, reps: "6", qualifier: "", notes: "Jab-cross-round kick to pads. Solo: shadow with intent." },
      { name: "Jab-Cross-Front Kick", sets: 5, reps: "6", qualifier: "each side", notes: "Alternate with pad combos" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Kicho form first half drill",
    exercises: [
      { name: "Kickboxing Kicho Form — First Half", sets: 5, reps: "3", qualifier: "", notes: "Jab, Cross, Front Kick — Turn 180 — Jab, Cross, Front Kick. Getting smoother." },
      { name: "Footwork: Pivot drill", sets: 5, reps: "8", qualifier: "each direction", notes: "The 180 turn in the form IS a pivot. Practice the turn." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W4D2 — Form second half intro + round kick power
const w4d2 = [
  { type: "theme", themeText: themeForWeek(4) },
  warmup(4, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Boxing", sets: 2, reps: "60 sec", qualifier: "", notes: "Jab-cross, add kicks" },
      { name: "Kickboxing Kicho Form — First Half", sets: 2, reps: "2", qualifier: "", notes: "Quick review" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Form second half intro",
    exercises: [
      { name: "Step left + Round Kick", sets: 5, reps: "6", qualifier: "each side", notes: "Step laterally left, then throw the round kick. This is the form's next section." },
      { name: "Pivot right + Jab-Cross", sets: 5, reps: "6", qualifier: "each side", notes: "Pivot 90 degrees right, immediately throw jab-cross. Final section of the form." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Kickboxing Kicho second half",
    exercises: [
      { name: "Kickboxing Kicho Form — Second Half", sets: 4, reps: "3", qualifier: "", notes: "Step left, Round Kick. Pivot right, Jab-Cross. SLOW — learn the angles." },
      { name: "Round Kick (shin contact, hip rotation)", sets: 4, reps: "8", qualifier: "each side", notes: "Power reps — turn the hip hard" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Round Kick Burnout (timed)", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W4D3 — Full form walkthrough + combo day
const w4d3 = [
  { type: "theme", themeText: themeForWeek(4) },
  warmup(4, 3),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross-Round Kick", sets: 2, reps: "6", qualifier: "each side", notes: "Flowing" },
      { name: "Step left + Round Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Practice the lateral step" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Full form walkthrough",
    exercises: [
      { name: "Kickboxing Kicho Form — First Half", sets: 4, reps: "2", qualifier: "", notes: "Jab, Cross, Front Kick — Turn 180 — Jab, Cross, Front Kick" },
      { name: "Kickboxing Kicho Form — Second Half", sets: 4, reps: "2", qualifier: "", notes: "Step left, Round Kick — Pivot right, Jab-Cross" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Combo power",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 3, reps: "8", qualifier: "each side", notes: "Add power now" },
      { name: "Jab-Cross-Round Kick", sets: 3, reps: "8", qualifier: "each side", notes: "Let the kicks crack" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Kick rounds", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 5 — Stripe 3: Full form, defense intro, bag work
// ═══════════════════════════════════════════

// W5D1 — Full Kicho form + check kick defense
const w5d1 = [
  { type: "theme", themeText: themeForWeek(5) },
  warmup(5, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, reps: "60 sec", qualifier: "", notes: "All weapons — jab, cross, front kick, round kick" },
      { name: "Footwork: Pivot drill", sets: 2, reps: "8", qualifier: "each direction", notes: "Pivots for the form" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Full Kicho form",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 5, reps: "3", qualifier: "", notes: "Jab, Cross, Front Kick — Turn 180 — Jab, Cross, Front Kick — Step left, Round Kick — Pivot right, Jab-Cross. Walk through it. Own every angle." },
      { name: "Footwork: Forward-Back Shuffle", sets: 5, reps: "30 sec", qualifier: "", notes: "Movement between form reps" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Check kick defense",
    exercises: [
      { name: "Check Kick drill (defense)", sets: 4, reps: "8", qualifier: "each side", notes: "Lift the shin to block incoming low/mid kicks. Brace the standing leg. Hands stay UP." },
      { name: "Low Kick (calf/thigh target)", sets: 4, reps: "6", qualifier: "each side", notes: "Throw the kick your partner would check" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Kick rounds", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W5D2 — Step left + round kick drill, catch kick defense
const w5d2 = [
  { type: "theme", themeText: themeForWeek(5) },
  warmup(5, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 2, reps: "2", qualifier: "", notes: "Walk through once to warm up" },
      { name: "Jab-Cross-Round Kick", sets: 2, reps: "5", qualifier: "each side", notes: "Light and flowing" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Step left + round kick focus",
    exercises: [
      { name: "Step left + Round Kick", sets: 5, reps: "8", qualifier: "each side", notes: "Step creates the angle. Kick finishes. This is from the form — make it automatic." },
      { name: "Footwork: Lateral movement", sets: 5, reps: "30 sec", qualifier: "", notes: "Lateral steps feeding into kicks" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Catch kick defense",
    exercises: [
      { name: "Catch Kick drill (defense)", sets: 4, reps: "6", qualifier: "each side", notes: "Scoop the incoming round kick under your arm. Control the leg. Solo: shadow the catch motion." },
      { name: "Round Kick (shin contact, hip rotation)", sets: 4, reps: "6", qualifier: "each side", notes: "Throw what gets caught — practice both sides" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W5D3 — Pivot + jab-cross drill, bag work power
const w5d3 = [
  { type: "theme", themeText: themeForWeek(5) },
  warmup(5, 3),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, reps: "60 sec", qualifier: "", notes: "Include form sections in your shadow work" },
      { name: "Check Kick drill (defense)", sets: 2, reps: "6", qualifier: "each side", notes: "Quick review" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Pivot + jab-cross focus",
    exercises: [
      { name: "Pivot right + Jab-Cross", sets: 5, reps: "8", qualifier: "each side", notes: "Pivot creates the new angle. Jab-cross fires immediately. This finishes the form." },
      { name: "Footwork: Pivot drill", sets: 5, reps: "10", qualifier: "each direction", notes: "45 and 90 degree pivots, both directions" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Full form + bag power",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 4, reps: "3", qualifier: "", notes: "Add some pop to each strike now. Not just patterns — put intent behind them." },
      { name: "Heavy Bag Kick rounds", sets: 4, reps: "60 sec", qualifier: "", notes: "Power kicks — front kicks and round kicks. Let them crack." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Front Kick Burnout (timed)", sets: 2, duration: "30", durationUnit: "sec" },
      { name: "Round Kick Burnout (timed)", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 6 — Stripe 3: Defense, form polish, bag work
// ═══════════════════════════════════════════

// W6D1 — Defense day + form
const w6d1 = [
  { type: "theme", themeText: themeForWeek(6) },
  warmup(6, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 2, reps: "2", qualifier: "", notes: "Flow through it" },
      { name: "Jab-Cross-Round Kick", sets: 2, reps: "6", qualifier: "each side", notes: "Smooth" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Defense focus",
    exercises: [
      { name: "Check Kick drill (defense)", sets: 4, reps: "8", qualifier: "each side", notes: "React fast — lift the shin, brace, hands up" },
      { name: "Catch Kick drill (defense)", sets: 4, reps: "6", qualifier: "each side", notes: "Scoop and control. Immediate counter with a cross." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Form with defense awareness",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 5, reps: "3", qualifier: "", notes: "After each run-through, shadow a check kick. Offense and defense together." },
      { name: "Footwork: Lateral movement", sets: 5, reps: "30 sec", qualifier: "", notes: "Move after every form rep — never be a stationary target" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W6D2 — Bag work power day
const w6d2 = [
  { type: "theme", themeText: themeForWeek(6) },
  warmup(6, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, reps: "60 sec", qualifier: "", notes: "Full shadow round — all weapons, all angles" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Heavy bag power",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 5, reps: "60 sec", qualifier: "", notes: "Jab-cross-round kick on the bag. Put your weight into every strike." },
      { name: "Heavy Bag Kick rounds", sets: 5, reps: "60 sec", qualifier: "", notes: "Front kicks and round kicks only. Drive through the bag." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Form under fatigue",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 4, reps: "3", qualifier: "", notes: "You are tired. The form still needs to be clean. This is where discipline lives." },
      { name: "Pad Work combos", sets: 4, reps: "6", qualifier: "", notes: "Jab-cross-front kick, jab-cross-round kick. Or shadow if solo." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Round Kick Burnout (timed)", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W6D3 — Full form mastery + all combos
const w6d3 = [
  { type: "theme", themeText: themeForWeek(6) },
  warmup(6, 3),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Jab-Cross", sets: 2, reps: "10", qualifier: "", notes: "Sharp" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 2, reps: "6", qualifier: "each side", notes: "Open up the hips" },
      { name: "Front Kick (chamber, extend, retract)", sets: 2, reps: "6", qualifier: "each side", notes: "Snap it" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Form mastery",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 6, reps: "3", qualifier: "", notes: "This is the most reps you have done. Every rep should be better than the last. Own the transitions." },
      { name: "Footwork: Pivot drill", sets: 6, reps: "8", qualifier: "each direction", notes: "Pivot crisp, settle, fire" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — All combos under pressure",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 3, reps: "8", qualifier: "each side", notes: "Power" },
      { name: "Jab-Cross-Round Kick", sets: 3, reps: "8", qualifier: "each side", notes: "Let the kicks crack" },
      { name: "Turn 180 + Jab-Cross-Front Kick", sets: 3, reps: "6", qualifier: "", notes: "From the form — spin and fire" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "90", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 7 — Stripe 4: Fight speed, mock test
// ═══════════════════════════════════════════

// W7D1 — Everything at fight speed
const w7d1 = [
  { type: "theme", themeText: themeForWeek(7) },
  warmup(7, 1),
  {
    type: "straight-set", notes: "Warm-up rounds — build to fight speed",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, reps: "60 sec", qualifier: "", notes: "Start light, build intensity each round" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Fight speed combos",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 5, reps: "8", qualifier: "each side", notes: "FAST. No winding up. Snap everything." },
      { name: "Jab-Cross-Round Kick", sets: 5, reps: "8", qualifier: "each side", notes: "Fight speed. Hip turns hard. Shin cracks." }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Form at speed",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 5, reps: "3", qualifier: "", notes: "Fight speed but CLEAN. Speed without technique is just flailing." },
      { name: "Check Kick drill (defense)", sets: 5, reps: "8", qualifier: "each side", notes: "React fast" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "90", durationUnit: "sec" },
      { name: "Heavy Bag Kick rounds", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W7D2 — All weapons, defense, full form
const w7d2 = [
  { type: "theme", themeText: themeForWeek(7) },
  warmup(7, 2),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, reps: "60 sec", qualifier: "", notes: "Full arsenal — punches, kicks, defense, footwork" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Complete arsenal",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 4, reps: "6", qualifier: "each side", notes: "Sharp and fast" },
      { name: "Jab-Cross-Round Kick", sets: 4, reps: "6", qualifier: "each side", notes: "Hip rotation at full power" },
      { name: "Low Kick (calf/thigh target)", sets: 4, reps: "6", qualifier: "each side", notes: "Chop hard" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Defense and form",
    exercises: [
      { name: "Check Kick drill (defense)", sets: 3, reps: "8", qualifier: "each side", notes: "Automatic reaction" },
      { name: "Catch Kick drill (defense)", sets: 3, reps: "6", qualifier: "each side", notes: "Scoop and counter" },
      { name: "Kickboxing Kicho Form — Whole Form", sets: 3, reps: "3", qualifier: "", notes: "Clean, confident, fight speed" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "90", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W7D3 — MOCK TEST
const w7d3 = [
  { type: "theme", themeText: "[name], this is your mock belt test. Treat it like the real thing. Focus. Intensity. Show what 7 weeks built." },
  warmup(7, 3),
  {
    type: "straight-set", notes: "Warm-up rounds — get ready",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, reps: "60 sec", qualifier: "", notes: "Light shadow work to get loose" },
      { name: "Kickboxing Kicho Form — Whole Form", sets: 2, reps: "2", qualifier: "", notes: "Walk through it once slow, once medium" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Mock Test: Technique Demonstration",
    exercises: [
      { name: "Jab", sets: 1, reps: "10", qualifier: "each side", notes: "MOCK TEST — demonstrate clean jab technique" },
      { name: "Cross", sets: 1, reps: "10", qualifier: "each side", notes: "MOCK TEST — demonstrate cross with hip rotation" },
      { name: "Front Kick (chamber, extend, retract)", sets: 1, reps: "8", qualifier: "each side", notes: "MOCK TEST — clean chamber, extension, retraction" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 1, reps: "8", qualifier: "each side", notes: "MOCK TEST — full hip turn, shin contact" },
      { name: "Low Kick (calf/thigh target)", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — level change, chop down" },
      { name: "Check Kick drill (defense)", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — reactive defense" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Mock Test: Combos and Form",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — combo with intent" },
      { name: "Jab-Cross-Round Kick", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — combo with power" },
      { name: "Step left + Round Kick", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — angle + kick" },
      { name: "Pivot right + Jab-Cross", sets: 1, reps: "6", qualifier: "each side", notes: "MOCK TEST — pivot + punches" },
      { name: "Kickboxing Kicho Form — Whole Form", sets: 3, reps: "1", qualifier: "", notes: "MOCK TEST — perform the full form 3 times. Best performance counts." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "120", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// WEEK 8 — Stripe 4: Polish, light day, BELT TEST
// ═══════════════════════════════════════════

// W8D1 — Final polish
const w8d1 = [
  { type: "theme", themeText: themeForWeek(8) },
  warmup(8, 1),
  {
    type: "straight-set", notes: "Warm-up rounds",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, reps: "60 sec", qualifier: "", notes: "Fight pace shadow work" }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Sharpen everything",
    exercises: [
      { name: "Jab-Cross", sets: 4, reps: "10", qualifier: "", notes: "Razor sharp. No wasted motion." },
      { name: "Front Kick (chamber, extend, retract)", sets: 4, reps: "8", qualifier: "each side", notes: "Snap" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 4, reps: "8", qualifier: "each side", notes: "Power and speed" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Form final polish",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 6, reps: "2", qualifier: "", notes: "Every rep is a performance. Imagine the judges watching. Clean transitions, powerful strikes, confident movement." },
      { name: "Pad Work combos", sets: 6, reps: "6", qualifier: "", notes: "Combo work — put it all together" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Combo rounds", sets: 3, duration: "90", durationUnit: "sec" },
      { name: "Front Kick Burnout (timed)", sets: 1, duration: "30", durationUnit: "sec" },
      { name: "Round Kick Burnout (timed)", sets: 1, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W8D2 — Light day before belt test
const w8d2 = [
  { type: "theme", themeText: "[name], light day. Stay sharp but save your energy. Tomorrow you test. Trust your training. You are ready." },
  warmup(8, 2),
  {
    type: "straight-set", notes: "Warm-up rounds — easy pace",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, reps: "60 sec", qualifier: "", notes: "50% effort. Move well, stay smooth." }
    ]
  },
  {
    type: "superset", notes: "Superset 1 — Light technique review",
    exercises: [
      { name: "Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "50% power. Focus on form only." },
      { name: "Front Kick (chamber, extend, retract)", sets: 3, reps: "6", qualifier: "each side", notes: "Slow and perfect" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 3, reps: "6", qualifier: "each side", notes: "Controlled, easy" }
    ]
  },
  {
    type: "superset", notes: "Superset 2 — Form walkthrough",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 3, reps: "2", qualifier: "", notes: "Walk through at 60% speed. Visualize the test. You know this." },
      { name: "Footwork: Lateral movement", sets: 3, reps: "30 sec", qualifier: "", notes: "Easy movement, stay loose" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// W8D3 — BELT TEST SIMULATION
const w8d3 = [
  { type: "theme", themeText: "[name], this is it. 8 weeks of building a kickboxer from the ground up. Every jab, every kick, every pivot — it all leads here. Perform the Kickboxing Kicho form. Show them what you have become." },
  warmup(8, 3),
  {
    type: "straight-set", notes: "Warm-up rounds — get in the zone",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 2, reps: "60 sec", qualifier: "", notes: "Light shadow work. Get the blood flowing. Focus your mind." },
      { name: "Kickboxing Kicho Form — Whole Form", sets: 1, reps: "1", qualifier: "", notes: "One slow walkthrough. Feel every position." }
    ]
  },
  {
    type: "superset", notes: "BELT TEST — Part 1: Individual Technique Demonstration",
    exercises: [
      { name: "Jab", sets: 1, reps: "10", qualifier: "each side", notes: "BELT TEST — clean, fast jabs with full retraction to guard" },
      { name: "Cross", sets: 1, reps: "10", qualifier: "each side", notes: "BELT TEST — full hip rotation, power through the target" },
      { name: "Jab-Cross", sets: 1, reps: "10", qualifier: "", notes: "BELT TEST — 1-2 combination, crisp and connected" },
      { name: "Front Kick (chamber, extend, retract)", sets: 1, reps: "8", qualifier: "each side", notes: "BELT TEST — high chamber, full extension, controlled retraction" },
      { name: "Round Kick (shin contact, hip rotation)", sets: 1, reps: "8", qualifier: "each side", notes: "BELT TEST — full hip rotation, shin contact, return to stance" },
      { name: "Low Kick (calf/thigh target)", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — angle down, chop into the target" },
      { name: "Check Kick drill (defense)", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — lift shin, brace, hands stay up" },
      { name: "Catch Kick drill (defense)", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — scoop catch, control, counter" }
    ]
  },
  {
    type: "superset", notes: "BELT TEST — Part 2: Combination Demonstration",
    exercises: [
      { name: "Jab-Cross-Front Kick", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — flow from punches to kick" },
      { name: "Jab-Cross-Round Kick", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — cross loads the kick" },
      { name: "Step left + Round Kick", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — angle creation into kick" },
      { name: "Pivot right + Jab-Cross", sets: 1, reps: "6", qualifier: "each side", notes: "BELT TEST — pivot to new angle, immediate punches" },
      { name: "Turn 180 + Jab-Cross-Front Kick", sets: 1, reps: "4", qualifier: "", notes: "BELT TEST — spin, settle, fire the combo" }
    ]
  },
  {
    type: "straight-set", notes: "BELT TEST — Part 3: Kickboxing Kicho Form",
    exercises: [
      { name: "Kickboxing Kicho Form — Whole Form", sets: 3, reps: "1", qualifier: "", notes: "BELT TEST — Perform the complete Kicho form 3 times. Jab, Cross, Front Kick — Turn 180 — Jab, Cross, Front Kick — Step left, Round Kick — Pivot right, Jab-Cross. Best performance counts. Fight speed. Full power. Clean technique." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Shadow Kickboxing rounds (timed)", sets: 3, duration: "120", durationUnit: "sec" }
    ]
  },
  cooldown()
];

// ═══════════════════════════════════════════
// BUILD THE PAYLOAD
// ═══════════════════════════════════════════

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
    allWorkouts: allWorkouts
  }
};

// ═══════════════════════════════════════════
// SAVE VIA API
// ═══════════════════════════════════════════

fetch("https://app.bestrongagain.com/api/workout/save-program.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => {
    console.log("Program saved successfully!");
    console.log(JSON.stringify(data, null, 2));
    console.log(`Total days: ${Object.keys(allWorkouts).length}`);
  })
  .catch(err => {
    console.error("Error saving program:", err);
  });
