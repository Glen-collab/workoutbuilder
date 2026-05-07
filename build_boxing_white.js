// Boxing White Belt — Kicho Foundations
// 8-week, 3-day/week beginner boxing program
// Belt test at Week 8 requires performing the Boxing Kicho form

const program = {
  name: "Boxing White Belt — Kicho Foundations",
  daysPerWeek: 3,
  totalWeeks: 8
};

// === THEMES BY STRIPE ===
const themes = {
  stripe1: "[name], hands up, chin down. Boxing starts with the stance. Everything else is built on this foundation. Protect yourself at all times.",
  stripe2: "[name], your jab is your question. Your cross is your answer. Ask and answer — that is boxing.",
  stripe3: "[name], the form is your shadow fight. Every pivot has purpose. Every step creates an angle. Own the I-pattern.",
  stripe4: "[name], 8 weeks. You move different now. Show them what discipline looks like. Touch gloves. Let's go."
};

function getTheme(week) {
  if (week <= 2) return themes.stripe1;
  if (week <= 4) return themes.stripe2;
  if (week <= 6) return themes.stripe3;
  return themes.stripe4;
}

// === WARMUP BUILDER ===
const stretchRotation = [
  { name: "Shoulder Stretch", sets: 1, reps: "20 sec", qualifier: "each side", notes: "Pull arm across chest, hold" },
  { name: "Wrist Circles", sets: 1, reps: "15 sec", qualifier: "each direction", notes: "Slow controlled circles both ways" },
  { name: "Hip Flexor Stretch", sets: 1, reps: "20 sec", qualifier: "each side", notes: "Kneel and press hips forward" },
  { name: "Calf Stretch", sets: 1, reps: "20 sec", qualifier: "each side", notes: "Wall lean, heel pressed to floor" }
];

function buildWarmup(dayIndex) {
  const stretch = stretchRotation[dayIndex % stretchRotation.length];
  return {
    type: "warmup",
    notes: "Get loose, get warm, protect the hands",
    exercises: [
      { name: dayIndex % 2 === 0 ? "Jump Rope" : "Jumping Jacks", sets: 1, reps: "60 sec", qualifier: "", notes: "Steady pace, stay light on the feet" },
      { name: "Shadow Boxing — Light", sets: 1, reps: "60 sec", qualifier: "", notes: "Easy movement, no power, find your rhythm" },
      { name: "Arm Circles", sets: 1, reps: "30 sec", qualifier: "each direction", notes: "Small to big circles, loosen the shoulders" },
      { name: "Neck Rolls", sets: 1, reps: "30 sec", qualifier: "each direction", notes: "Slow and controlled, never force" },
      { name: "Hip Rotations", sets: 1, reps: "30 sec", qualifier: "each direction", notes: "Hands on hips, wide circles" },
      stretch
    ]
  };
}

// === WARMUP ROUNDS BUILDER ===
function buildWarmupRounds(week, dayInWeek) {
  if (week <= 2) {
    return {
      type: "straight-set",
      notes: "Warm-Up Rounds — light contact or shadow, find your stance",
      exercises: [
        { name: "Shadow Boxing — Jab Only", sets: 2, reps: "60 sec", qualifier: "", notes: "Light and easy, focus on returning hand to guard" },
        { name: "Shadow Boxing — Cross Only", sets: 1, reps: "60 sec", qualifier: "", notes: "Slow, feel the hip rotation" }
      ]
    };
  }
  if (week <= 4) {
    return {
      type: "straight-set",
      notes: "Warm-Up Rounds — pick up the pace, stay sharp",
      exercises: [
        { name: "Shadow Boxing — Jab-Cross", sets: 2, reps: "90 sec", qualifier: "", notes: "Medium pace, snap and retract" },
        { name: dayInWeek === 3 ? "Heavy Bag Jab-Cross rounds" : "Shadow Boxing — Freestyle", sets: 1, reps: "60 sec", qualifier: "", notes: "Stay loose, move your feet" }
      ]
    };
  }
  if (week <= 6) {
    return {
      type: "straight-set",
      notes: "Warm-Up Rounds — bag or shadow, build heat",
      exercises: [
        { name: "Heavy Bag Jab-Cross rounds", sets: 2, reps: "90 sec", qualifier: "", notes: "Moderate power, focus on technique" },
        { name: "Shadow Boxing — Form Sections", sets: 1, reps: "90 sec", qualifier: "", notes: "Walk through first half of Kicho form slowly" }
      ]
    };
  }
  return {
    type: "straight-set",
    notes: "Warm-Up Rounds — fight pace warm-up",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 2, reps: "2 min", qualifier: "", notes: "Fight speed, move around the bag" },
      { name: "Shadow Boxing — Full Kicho Form", sets: 1, reps: "2 min", qualifier: "", notes: "Full form walkthrough at warm-up pace" }
    ]
  };
}

// === COOLDOWN ===
const cooldown = {
  type: "cooldown",
  exercises: [
    { name: "Shoulder Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Arm across chest, gentle pull" },
    { name: "Wrist Stretch", sets: 1, reps: "30 sec", qualifier: "each hand", notes: "Extend arm, pull fingers back gently — protect those wrists" },
    { name: "Hip Flexor Stretch", sets: 1, reps: "30 sec", qualifier: "each side", notes: "Half kneel, lean in" },
    { name: "Hamstring Stretch", sets: 1, reps: "30 sec", qualifier: "each leg", notes: "Standing or seated, reach for toes" },
    { name: "Neck Stretch", sets: 1, reps: "20 sec", qualifier: "each side", notes: "Ear to shoulder, gentle hand pressure" }
  ]
};

// === ALL 24 WORKOUTS ===
const allWorkouts = {};

// ============================================================
// WEEKS 1-2: STRIPE 1 — Stance, Guard, Jab, Cross, Footwork
// ============================================================

// W1D1 — Stance + Guard + Jab Intro
allWorkouts["1-1"] = [
  { type: "theme", themeText: getTheme(1) },
  buildWarmup(0),
  buildWarmupRounds(1, 1),
  {
    type: "superset",
    notes: "Technique Focus — Stance & Jab Mechanics",
    exercises: [
      { name: "Boxing Stance Hold", sets: 4, reps: "30 sec", qualifier: "", notes: "Feet shoulder width, lead foot forward, knees bent, hands up, chin down" },
      { name: "Jab (lead hand snap)", sets: 4, reps: "10", qualifier: "each side", notes: "Extend lead hand straight, snap back to guard. Fist tight at contact, wrist straight." },
      { name: "High Guard hold (isometric)", sets: 4, reps: "20 sec", qualifier: "", notes: "Gloves glued to cheeks, elbows tight to body" }
    ]
  },
  {
    type: "superset",
    notes: "Footwork & Application",
    exercises: [
      { name: "Footwork: Forward-Back Shuffle", sets: 3, reps: "30 sec", qualifier: "", notes: "Stay in stance, push off rear foot forward, lead foot back. Never cross feet." },
      { name: "Shadow Boxing — Jab Only", sets: 3, reps: "60 sec", qualifier: "", notes: "Move forward, jab. Move back, jab. Stay in stance." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab rounds", sets: 3, duration: "30", durationUnit: "sec" },
      { name: "Footwork: Forward-Back Shuffle", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W1D2 — Cross Intro + Fist/Wrist Alignment
allWorkouts["1-2"] = [
  { type: "theme", themeText: getTheme(1) },
  buildWarmup(1),
  buildWarmupRounds(1, 2),
  {
    type: "superset",
    notes: "Technique Focus — Cross Mechanics",
    exercises: [
      { name: "Cross (rear hand, hip rotation)", sets: 5, reps: "8", qualifier: "each side", notes: "Rear hand fires straight, rotate hip and back foot. Full extension, snap back." },
      { name: "High Guard hold (isometric)", sets: 5, reps: "15 sec", qualifier: "", notes: "Between every set — reset guard position" },
      { name: "Jab (lead hand snap)", sets: 5, reps: "8", qualifier: "", notes: "Review jab, keep wrist straight, fist tight at contact" }
    ]
  },
  {
    type: "superset",
    notes: "Footwork & Application",
    exercises: [
      { name: "Footwork: Lateral Slide", sets: 3, reps: "30 sec", qualifier: "", notes: "Push off trailing foot, slide lead foot. Stay low in stance." },
      { name: "Shadow Boxing — Cross Only", sets: 3, reps: "60 sec", qualifier: "", notes: "Focus on hip rotation driving the punch" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Cross rounds", sets: 3, duration: "30", durationUnit: "sec" },
      { name: "Footwork: Lateral Slide", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W1D3 — Jab + Cross Together + All Footwork
allWorkouts["1-3"] = [
  { type: "theme", themeText: getTheme(1) },
  buildWarmup(2),
  buildWarmupRounds(1, 3),
  {
    type: "superset",
    notes: "Technique Focus — Jab & Cross Together",
    exercises: [
      { name: "Jab (lead hand snap)", sets: 4, reps: "10", qualifier: "", notes: "Snap and retract every rep" },
      { name: "Cross (rear hand, hip rotation)", sets: 4, reps: "10", qualifier: "", notes: "Full hip rotation, snap back to guard" },
      { name: "Jab-Cross combo", sets: 4, reps: "8", qualifier: "", notes: "1-2 in sequence. Jab sets up the cross. Both return to guard." }
    ]
  },
  {
    type: "superset",
    notes: "Footwork Integration",
    exercises: [
      { name: "Footwork: Forward-Back Shuffle", sets: 3, reps: "30 sec", qualifier: "", notes: "Move and throw a jab at each end" },
      { name: "Footwork: Lateral Slide", sets: 3, reps: "30 sec", qualifier: "", notes: "Slide and throw a cross at each end" },
      { name: "Shadow Boxing — Jab-Cross + Movement", sets: 3, reps: "60 sec", qualifier: "", notes: "Combine footwork with 1-2 combo freely" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "30", durationUnit: "sec" },
      { name: "Footwork: Forward-Back Shuffle", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W2D1 — Jab Deep Dive + Stance Reinforcement
allWorkouts["2-1"] = [
  { type: "theme", themeText: getTheme(2) },
  buildWarmup(3),
  buildWarmupRounds(2, 1),
  {
    type: "superset",
    notes: "Technique Focus — Jab Precision",
    exercises: [
      { name: "Jab (lead hand snap)", sets: 5, reps: "10", qualifier: "", notes: "Slow and perfect. Fist formation check every set. Wrist alignment." },
      { name: "High Guard hold (isometric)", sets: 5, reps: "20 sec", qualifier: "", notes: "Guard must be automatic. Gloves on cheeks, elbows in." },
      { name: "Footwork: Forward-Back Shuffle", sets: 5, reps: "30 sec", qualifier: "", notes: "Jab while moving forward, jab while moving back" }
    ]
  },
  {
    type: "superset",
    notes: "Bag Application",
    exercises: [
      { name: "Heavy Bag Jab rounds", sets: 4, reps: "60 sec", qualifier: "", notes: "Pop the jab, hear it snap. Retract fast." },
      { name: "Shadow Boxing — Jab + Footwork", sets: 4, reps: "60 sec", qualifier: "", notes: "Move around an imaginary opponent, jab from angles" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab rounds", sets: 3, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Lateral Slide", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W2D2 — Cross Deep Dive + Hip Rotation Focus
allWorkouts["2-2"] = [
  { type: "theme", themeText: getTheme(2) },
  buildWarmup(0),
  buildWarmupRounds(2, 2),
  {
    type: "superset",
    notes: "Technique Focus — Cross Power",
    exercises: [
      { name: "Cross (rear hand, hip rotation)", sets: 5, reps: "10", qualifier: "", notes: "Slow reps. Feel the hip drive the punch. Back foot pivots." },
      { name: "Jab-Cross combo", sets: 5, reps: "6", qualifier: "", notes: "Jab is the setup, cross is the power. Return both to guard." },
      { name: "Footwork: Pivot Drill", sets: 5, reps: "30 sec", qualifier: "", notes: "Pivot on lead foot, change angle. Stay in stance." }
    ]
  },
  {
    type: "superset",
    notes: "Bag Application",
    exercises: [
      { name: "Heavy Bag Cross rounds", sets: 4, reps: "60 sec", qualifier: "", notes: "Sit down on the cross. Power from the ground up." },
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, reps: "60 sec", qualifier: "", notes: "1-2 on the bag. Pop, bang, reset." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W2D3 — Stripe 1 Review: Stance, Jab, Cross, Footwork
allWorkouts["2-3"] = [
  { type: "theme", themeText: getTheme(2) },
  buildWarmup(1),
  buildWarmupRounds(2, 3),
  {
    type: "superset",
    notes: "Stripe 1 Review — Everything So Far",
    exercises: [
      { name: "Jab (lead hand snap)", sets: 4, reps: "10", qualifier: "", notes: "Crisp jabs, check fist and wrist every set" },
      { name: "Cross (rear hand, hip rotation)", sets: 4, reps: "10", qualifier: "", notes: "Full extension, full hip rotation" },
      { name: "Jab-Cross combo", sets: 4, reps: "10", qualifier: "", notes: "Smooth and connected. No pause between 1-2." }
    ]
  },
  {
    type: "superset",
    notes: "Footwork + Combo Integration",
    exercises: [
      { name: "Footwork: Forward-Back Shuffle", sets: 3, reps: "30 sec", qualifier: "", notes: "Throw 1-2 at each end" },
      { name: "Footwork: Lateral Slide", sets: 3, reps: "30 sec", qualifier: "", notes: "Slide and fire cross" },
      { name: "Shadow Boxing rounds (timed)", sets: 3, reps: "90 sec", qualifier: "", notes: "Freestyle — use everything: jab, cross, footwork, guard" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Forward-Back Shuffle", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// ============================================================
// WEEKS 3-4: STRIPE 2 — Speed Combos, Pivots, Steps, Defense Intro
// ============================================================

// W3D1 — Jab-Cross at Speed + Pivot Intro
allWorkouts["3-1"] = [
  { type: "theme", themeText: getTheme(3) },
  buildWarmup(2),
  buildWarmupRounds(3, 1),
  {
    type: "superset",
    notes: "Technique Focus — Speed + Pivot Intro",
    exercises: [
      { name: "Jab-Cross combo", sets: 5, reps: "10", qualifier: "", notes: "Push the pace. Snap both punches, hands back to guard instantly." },
      { name: "Footwork: Pivot Drill", sets: 5, reps: "30 sec", qualifier: "", notes: "Pivot on lead foot 90 degrees. Reset stance. Repeat." },
      { name: "Pivot right + Cross-Jab", sets: 5, reps: "6", qualifier: "", notes: "Pivot right, immediately throw cross-jab (2-1). New angle, new attack." }
    ]
  },
  {
    type: "superset",
    notes: "Shadow Boxing — Combo + Pivot",
    exercises: [
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "90 sec", qualifier: "", notes: "Jab-Cross, pivot, Cross-Jab. Move constantly." },
      { name: "High Guard hold (isometric)", sets: 4, reps: "15 sec", qualifier: "", notes: "Reset guard between rounds" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W3D2 — Step Mechanics + Defense Intro
allWorkouts["3-2"] = [
  { type: "theme", themeText: getTheme(3) },
  buildWarmup(3),
  buildWarmupRounds(3, 2),
  {
    type: "superset",
    notes: "Technique Focus — Steps + Defense",
    exercises: [
      { name: "Step left + Jab-Cross", sets: 5, reps: "6", qualifier: "", notes: "Step left to create angle, immediately fire 1-2" },
      { name: "Step back + Jab-Cross", sets: 5, reps: "6", qualifier: "", notes: "Create distance, then fire 1-2 coming back in" },
      { name: "Parry drill (defensive)", sets: 5, reps: "10", qualifier: "each hand", notes: "Partner or shadow — redirect incoming jab with rear hand, cross with lead hand" }
    ]
  },
  {
    type: "superset",
    notes: "Defense + Counter Application",
    exercises: [
      { name: "Slip drill (defensive)", sets: 4, reps: "30 sec", qualifier: "", notes: "Bend at waist, slip left and right. Keep eyes on opponent." },
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "90 sec", qualifier: "", notes: "Move, throw 1-2, parry imaginary return, counter" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Lateral Slide", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W3D3 — Form Sections Begin + Shadow Rounds
allWorkouts["3-3"] = [
  { type: "theme", themeText: getTheme(3) },
  buildWarmup(0),
  buildWarmupRounds(3, 3),
  {
    type: "superset",
    notes: "Technique Focus — Kicho Form Intro",
    exercises: [
      { name: "Jab-Cross combo", sets: 3, reps: "8", qualifier: "", notes: "Start of the form — Jab, Cross from fighting stance" },
      { name: "Turn 180 + Jab-Cross", sets: 4, reps: "6", qualifier: "", notes: "Pivot 180 degrees on lead foot, immediately throw 1-2. This is the form's second move." },
      { name: "Boxing Kicho Form — First Half", sets: 4, reps: "1", qualifier: "", notes: "Jab, Cross → Turn 180 → Jab, Cross. Walk through slowly." }
    ]
  },
  {
    type: "superset",
    notes: "Shadow Boxing Rounds — Form Application",
    exercises: [
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "2 min", qualifier: "", notes: "Use all tools — jab, cross, pivot, step, parry" },
      { name: "Parry drill (defensive)", sets: 4, reps: "10", qualifier: "each hand", notes: "Stay sharp on defense between rounds" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "45", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W4D1 — Pivot Right + Cross-Jab Mastery
allWorkouts["4-1"] = [
  { type: "theme", themeText: getTheme(4) },
  buildWarmup(1),
  buildWarmupRounds(4, 1),
  {
    type: "superset",
    notes: "Technique Focus — Pivot + Reverse Combo",
    exercises: [
      { name: "Pivot right + Cross-Jab", sets: 5, reps: "8", qualifier: "", notes: "Pivot creates the angle. Cross-Jab is the answer from the new position." },
      { name: "Step left + Jab-Cross", sets: 5, reps: "8", qualifier: "", notes: "Step creates lateral angle. 1-2 from the new line." },
      { name: "Footwork: Pivot Drill", sets: 5, reps: "30 sec", qualifier: "", notes: "Quick pivots, reset stance each time" }
    ]
  },
  {
    type: "superset",
    notes: "Form Building — Second Half",
    exercises: [
      { name: "Boxing Kicho Form — Second Half", sets: 5, reps: "1", qualifier: "", notes: "Step left → Jab-Cross → Pivot right → Cross-Jab → Step back → Jab-Cross" },
      { name: "Shadow Boxing rounds (timed)", sets: 3, reps: "2 min", qualifier: "", notes: "Incorporate form sections into freestyle shadow work" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 2, duration: "45", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W4D2 — Full Form Walk-Through + Defense Layer
allWorkouts["4-2"] = [
  { type: "theme", themeText: getTheme(4) },
  buildWarmup(2),
  buildWarmupRounds(4, 2),
  {
    type: "superset",
    notes: "Form Practice — Whole Form Slow",
    exercises: [
      { name: "Boxing Kicho Form — First Half", sets: 3, reps: "2", qualifier: "", notes: "Jab, Cross → Turn 180 → Jab, Cross. Smooth and controlled." },
      { name: "Boxing Kicho Form — Second Half", sets: 3, reps: "2", qualifier: "", notes: "Step left → 1-2, Pivot right → 2-1, Step back → 1-2" },
      { name: "Boxing Kicho Form — Whole Form", sets: 3, reps: "1", qualifier: "", notes: "Full form start to finish. Take your time. Every move has purpose." }
    ]
  },
  {
    type: "superset",
    notes: "Defense Layer",
    exercises: [
      { name: "Parry drill (defensive)", sets: 4, reps: "10", qualifier: "each hand", notes: "Parry and immediately counter with opposite hand" },
      { name: "Slip drill (defensive)", sets: 4, reps: "30 sec", qualifier: "", notes: "Slip outside the jab, counter with cross" },
      { name: "High Guard hold (isometric)", sets: 4, reps: "20 sec", qualifier: "", notes: "Guard is home base. Always return here." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Forward-Back Shuffle", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W4D3 — Stripe 2 Review: Combos, Steps, Pivots, Form Halves
allWorkouts["4-3"] = [
  { type: "theme", themeText: getTheme(4) },
  buildWarmup(3),
  buildWarmupRounds(4, 3),
  {
    type: "superset",
    notes: "Stripe 2 Review — All Combos + Movement",
    exercises: [
      { name: "Jab-Cross combo", sets: 3, reps: "10", qualifier: "", notes: "Fast and crisp" },
      { name: "Pivot right + Cross-Jab", sets: 3, reps: "8", qualifier: "", notes: "Angle change, reverse combo" },
      { name: "Step left + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Lateral step, 1-2" },
      { name: "Step back + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Create space, come back with 1-2" }
    ]
  },
  {
    type: "superset",
    notes: "Form + Shadow Boxing Review",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 4, reps: "1", qualifier: "", notes: "Full form. Get comfortable with the sequence." },
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "2 min", qualifier: "", notes: "Freestyle with everything — punches, footwork, defense, form sections" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "60", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 2, duration: "45", durationUnit: "sec" }
    ]
  },
  cooldown
];

// ============================================================
// WEEKS 5-6: STRIPE 3 — Full Form, Step Combos, Defense + Counter, Bag Power
// ============================================================

// W5D1 — Full Form Practice + Power Development
allWorkouts["5-1"] = [
  { type: "theme", themeText: getTheme(5) },
  buildWarmup(0),
  buildWarmupRounds(5, 1),
  {
    type: "superset",
    notes: "Technique Focus — Full Form Repetition",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 5, reps: "1", qualifier: "", notes: "Full form every set. Start slow, build speed each set." },
      { name: "Turn 180 + Jab-Cross", sets: 5, reps: "6", qualifier: "", notes: "The 180 is the hardest part of the form. Drill it." },
      { name: "Footwork: Pivot Drill", sets: 5, reps: "30 sec", qualifier: "", notes: "Quick pivots to reinforce the form transitions" }
    ]
  },
  {
    type: "superset",
    notes: "Bag Work — Power Development",
    exercises: [
      { name: "Heavy Bag Jab rounds", sets: 4, reps: "90 sec", qualifier: "", notes: "Pop the jab with authority. Snap and retract." },
      { name: "Heavy Bag Cross rounds", sets: 4, reps: "90 sec", qualifier: "", notes: "Sit down on the cross. Power through the bag." },
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, reps: "90 sec", qualifier: "", notes: "1-2 combos. First is speed, second is power." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "45", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W5D2 — Step Left/Right Combos + Defense/Counter
allWorkouts["5-2"] = [
  { type: "theme", themeText: getTheme(5) },
  buildWarmup(1),
  buildWarmupRounds(5, 2),
  {
    type: "superset",
    notes: "Technique Focus — Angle Attacks",
    exercises: [
      { name: "Step left + Jab-Cross", sets: 5, reps: "8", qualifier: "", notes: "Step creates the opening, 1-2 exploits it" },
      { name: "Pivot right + Cross-Jab", sets: 5, reps: "8", qualifier: "", notes: "Pivot off the center line, attack from new angle" },
      { name: "Step back + Jab-Cross", sets: 5, reps: "8", qualifier: "", notes: "Draw them in, fire back" }
    ]
  },
  {
    type: "superset",
    notes: "Defense + Counter Combos",
    exercises: [
      { name: "Parry drill (defensive)", sets: 4, reps: "8", qualifier: "", notes: "Parry the jab with rear hand" },
      { name: "Jab-Cross combo", sets: 4, reps: "8", qualifier: "", notes: "Immediately after parry — counter 1-2" },
      { name: "Slip drill (defensive)", sets: 4, reps: "30 sec", qualifier: "", notes: "Slip and counter cross" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Lateral Slide", sets: 2, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W5D3 — Form + Bag Power + Shadow Rounds
allWorkouts["5-3"] = [
  { type: "theme", themeText: getTheme(5) },
  buildWarmup(2),
  buildWarmupRounds(5, 3),
  {
    type: "superset",
    notes: "Form Practice at Tempo",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 5, reps: "2", qualifier: "", notes: "Two reps per set. Build rhythm and flow between sections." },
      { name: "Shadow Boxing rounds (timed)", sets: 5, reps: "2 min", qualifier: "", notes: "Incorporate form into shadow boxing — do the form, then freestyle, repeat" }
    ]
  },
  {
    type: "superset",
    notes: "Bag Work — Combo Power",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, reps: "2 min", qualifier: "", notes: "Continuous 1-2 combos. Move around the bag. Power every shot." },
      { name: "Heavy Bag Cross rounds", sets: 4, reps: "60 sec", qualifier: "", notes: "All power crosses. Sit into every punch." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W6D1 — Defense/Counter Deep Dive
allWorkouts["6-1"] = [
  { type: "theme", themeText: getTheme(6) },
  buildWarmup(3),
  buildWarmupRounds(6, 1),
  {
    type: "superset",
    notes: "Technique Focus — Parry Jab, Counter Cross",
    exercises: [
      { name: "Parry drill (defensive)", sets: 5, reps: "10", qualifier: "each hand", notes: "Parry incoming jab with rear hand — small deflection, not a swat" },
      { name: "Cross (rear hand, hip rotation)", sets: 5, reps: "8", qualifier: "", notes: "Immediately after parry — counter cross. Make them pay." },
      { name: "Slip drill (defensive)", sets: 5, reps: "30 sec", qualifier: "", notes: "Slip outside the jab, come back with cross" }
    ]
  },
  {
    type: "superset",
    notes: "Form + Counter Application",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 4, reps: "1", qualifier: "", notes: "Full form. Imagine a countering opponent." },
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "2 min", qualifier: "", notes: "Parry, counter, move, throw form sections. Full toolbox." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "60", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 2, duration: "45", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W6D2 — Form at Speed + Full Combos
allWorkouts["6-2"] = [
  { type: "theme", themeText: getTheme(6) },
  buildWarmup(0),
  buildWarmupRounds(6, 2),
  {
    type: "superset",
    notes: "Form at Speed",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 6, reps: "2", qualifier: "", notes: "Push the tempo. The form should start feeling natural." },
      { name: "Turn 180 + Jab-Cross", sets: 4, reps: "8", qualifier: "", notes: "The pivot point of the form — drill it fast" },
      { name: "Pivot right + Cross-Jab", sets: 4, reps: "8", qualifier: "", notes: "Angle change at speed" }
    ]
  },
  {
    type: "superset",
    notes: "Bag Work — Everything",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, reps: "2 min", qualifier: "", notes: "Move, punch, move. Don't stand still." },
      { name: "Heavy Bag Cross rounds", sets: 3, reps: "60 sec", qualifier: "", notes: "Power shots only" },
      { name: "Heavy Bag Jab rounds", sets: 3, reps: "60 sec", qualifier: "", notes: "Speed jabs, keep the bag moving" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Forward-Back Shuffle", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W6D3 — Stripe 3 Review: Full Form, All Combos, Defense + Counter
allWorkouts["6-3"] = [
  { type: "theme", themeText: getTheme(6) },
  buildWarmup(1),
  buildWarmupRounds(6, 3),
  {
    type: "superset",
    notes: "Stripe 3 Review — Form Mastery Check",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 5, reps: "2", qualifier: "", notes: "You should know this form. Perform it with intention." },
      { name: "Parry drill (defensive)", sets: 3, reps: "10", qualifier: "each hand", notes: "Defense is sharp" },
      { name: "Slip drill (defensive)", sets: 3, reps: "30 sec", qualifier: "", notes: "Head movement is instinct" }
    ]
  },
  {
    type: "superset",
    notes: "Full Arsenal Shadow + Bag",
    exercises: [
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "3 min", qualifier: "", notes: "Full 3-minute rounds. Form, combos, footwork, defense. Everything." },
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, reps: "2 min", qualifier: "", notes: "Power combos on the bag. Move and punch." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "30", durationUnit: "sec" }
    ]
  },
  cooldown
];

// ============================================================
// WEEKS 7-8: STRIPE 4 — Fight Speed, Mock Test, Belt Test
// ============================================================

// W7D1 — Fight Speed: All Combos + Form
allWorkouts["7-1"] = [
  { type: "theme", themeText: getTheme(7) },
  buildWarmup(2),
  buildWarmupRounds(7, 1),
  {
    type: "superset",
    notes: "Fight Speed — Combos",
    exercises: [
      { name: "Jab-Cross combo", sets: 5, reps: "12", qualifier: "", notes: "Fight speed. No wasted movement. Snap and return." },
      { name: "Pivot right + Cross-Jab", sets: 5, reps: "10", qualifier: "", notes: "Quick pivot, immediate attack" },
      { name: "Step left + Jab-Cross", sets: 5, reps: "10", qualifier: "", notes: "Lateral entry, punish the opening" },
      { name: "Turn 180 + Jab-Cross", sets: 5, reps: "8", qualifier: "", notes: "Whip around, attack. No hesitation." }
    ]
  },
  {
    type: "superset",
    notes: "Form + Shadow at Fight Speed",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 5, reps: "2", qualifier: "", notes: "Fight speed. Crisp transitions, powerful punches." },
      { name: "Shadow Boxing rounds (timed)", sets: 4, reps: "3 min", qualifier: "", notes: "Full rounds. You're in a fight. Move, punch, defend, form." }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "90", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W7D2 — Defense + Counter at Speed + Bag Burnout
allWorkouts["7-2"] = [
  { type: "theme", themeText: getTheme(7) },
  buildWarmup(3),
  buildWarmupRounds(7, 2),
  {
    type: "superset",
    notes: "Defense + Counter at Speed",
    exercises: [
      { name: "Parry drill (defensive)", sets: 5, reps: "10", qualifier: "each hand", notes: "Parry fast, counter faster" },
      { name: "Jab-Cross combo", sets: 5, reps: "10", qualifier: "", notes: "Immediate counter after every parry" },
      { name: "Slip drill (defensive)", sets: 5, reps: "30 sec", qualifier: "", notes: "Slip and counter cross — fight speed" }
    ]
  },
  {
    type: "superset",
    notes: "Bag Burnout + Form",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 5, reps: "2 min", qualifier: "", notes: "All out. Move, punch, no breaks in the round." },
      { name: "Boxing Kicho Form — Whole Form", sets: 3, reps: "2", qualifier: "", notes: "Perform form between bag rounds to stay sharp" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "90", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "45", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 2, duration: "60", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W7D3 — MOCK BELT TEST
allWorkouts["7-3"] = [
  { type: "theme", themeText: "[name], this is your mock test. Treat it like the real thing. Full form, full combos, full effort. Find out where you stand." },
  buildWarmup(0),
  buildWarmupRounds(7, 3),
  {
    type: "superset",
    notes: "Mock Test — Boxing Kicho Form",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 3, reps: "1", qualifier: "", notes: "Three full form performances. Judge yourself: are transitions clean? Punches sharp? Stance correct?" },
      { name: "Shadow Boxing rounds (timed)", sets: 2, reps: "3 min", qualifier: "", notes: "Demonstrate freestyle boxing with all tools" }
    ]
  },
  {
    type: "superset",
    notes: "Mock Test — Combo Demonstration",
    exercises: [
      { name: "Jab-Cross combo", sets: 3, reps: "10", qualifier: "", notes: "Show speed and technique" },
      { name: "Pivot right + Cross-Jab", sets: 3, reps: "8", qualifier: "", notes: "Clean angle change, immediate attack" },
      { name: "Step left + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Lateral movement with purpose" },
      { name: "Turn 180 + Jab-Cross", sets: 3, reps: "6", qualifier: "", notes: "The signature move. Make it clean." },
      { name: "Step back + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Defensive exit, offensive re-entry" }
    ]
  },
  {
    type: "superset",
    notes: "Mock Test — Defense",
    exercises: [
      { name: "Parry drill (defensive)", sets: 3, reps: "10", qualifier: "each hand", notes: "Clean parries" },
      { name: "Slip drill (defensive)", sets: 3, reps: "30 sec", qualifier: "", notes: "Head movement" },
      { name: "High Guard hold (isometric)", sets: 3, reps: "20 sec", qualifier: "", notes: "Guard is always home" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "90", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W8D1 — Sharpen Everything
allWorkouts["8-1"] = [
  { type: "theme", themeText: getTheme(8) },
  buildWarmup(1),
  buildWarmupRounds(8, 1),
  {
    type: "superset",
    notes: "Sharpen — Form Perfection",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 6, reps: "2", qualifier: "", notes: "Twelve total reps of the form. Make every single one count." },
      { name: "Turn 180 + Jab-Cross", sets: 4, reps: "8", qualifier: "", notes: "The hardest transition — own it" },
      { name: "Pivot right + Cross-Jab", sets: 4, reps: "8", qualifier: "", notes: "Smooth and powerful" }
    ]
  },
  {
    type: "superset",
    notes: "Sharpen — All Combos at Speed",
    exercises: [
      { name: "Jab-Cross combo", sets: 4, reps: "12", qualifier: "", notes: "Your bread and butter. Perfect." },
      { name: "Step left + Jab-Cross", sets: 4, reps: "10", qualifier: "", notes: "Angle attacks are second nature" },
      { name: "Step back + Jab-Cross", sets: 4, reps: "10", qualifier: "", notes: "Range management" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 4, duration: "90", durationUnit: "sec" },
      { name: "Speed Bag rounds (if available)", sets: 3, duration: "60", durationUnit: "sec" },
      { name: "Footwork: Pivot Drill", sets: 3, duration: "45", durationUnit: "sec" }
    ]
  },
  cooldown
];

// W8D2 — LIGHT DAY (Pre-Test Recovery)
allWorkouts["8-2"] = [
  { type: "theme", themeText: "[name], easy day. Stay sharp but stay fresh. Tomorrow you test. Trust what you've built. The work is done — now just show up." },
  buildWarmup(2),
  {
    type: "straight-set",
    notes: "Light Warm-Up Rounds — easy pace only",
    exercises: [
      { name: "Shadow Boxing — Light", sets: 3, reps: "2 min", qualifier: "", notes: "50% effort. Move easy. Feel the rhythm." }
    ]
  },
  {
    type: "superset",
    notes: "Light Form Walk-Through",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 3, reps: "1", qualifier: "", notes: "Slow, controlled, perfect technique. No power — just precision." },
      { name: "Footwork: Forward-Back Shuffle", sets: 2, reps: "30 sec", qualifier: "", notes: "Easy movement, keep loose" },
      { name: "Footwork: Lateral Slide", sets: 2, reps: "30 sec", qualifier: "", notes: "Light lateral movement" }
    ]
  },
  {
    type: "superset",
    notes: "Light Combo Review",
    exercises: [
      { name: "Jab-Cross combo", sets: 3, reps: "6", qualifier: "", notes: "50% speed. Feel the mechanics, don't force it." },
      { name: "Parry drill (defensive)", sets: 2, reps: "8", qualifier: "each hand", notes: "Light parry practice" },
      { name: "High Guard hold (isometric)", sets: 2, reps: "15 sec", qualifier: "", notes: "Guard check" }
    ]
  },
  cooldown
];

// W8D3 — BELT TEST SIMULATION
allWorkouts["8-3"] = [
  { type: "theme", themeText: "[name], this is it. 8 weeks of work come down to this. Boxing Kicho Form. Full combos. Full defense. You earned this belt — now go take it. Touch gloves. Let's go." },
  buildWarmup(3),
  {
    type: "straight-set",
    notes: "Test Warm-Up — Get the blood moving",
    exercises: [
      { name: "Shadow Boxing — Light", sets: 2, reps: "2 min", qualifier: "", notes: "Easy shadow work. Shake out the nerves. You know this." },
      { name: "Jab-Cross combo", sets: 2, reps: "6", qualifier: "", notes: "Light combos to wake up the hands" }
    ]
  },
  {
    type: "superset",
    notes: "BELT TEST — Boxing Kicho Form Performance",
    exercises: [
      { name: "Boxing Kicho Form — Whole Form", sets: 5, reps: "1", qualifier: "", notes: "Five full performances of the Boxing Kicho Form. Jab → Cross → Turn 180 → Jab, Cross → Step left → Jab, Cross → Pivot right → Cross, Jab → Step back → Jab, Cross. Every rep is a test rep." },
      { name: "Shadow Boxing rounds (timed)", sets: 3, reps: "3 min", qualifier: "", notes: "Demonstrate everything: footwork, combos, defense, angles. Fight like a boxer." }
    ]
  },
  {
    type: "superset",
    notes: "BELT TEST — Combo Demonstration",
    exercises: [
      { name: "Jab-Cross combo", sets: 3, reps: "12", qualifier: "", notes: "Fast, powerful, clean" },
      { name: "Pivot right + Cross-Jab", sets: 3, reps: "8", qualifier: "", notes: "Angle change, attack" },
      { name: "Step left + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Lateral entry" },
      { name: "Turn 180 + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Full 180 pivot, immediate offense" },
      { name: "Step back + Jab-Cross", sets: 3, reps: "8", qualifier: "", notes: "Distance management" }
    ]
  },
  {
    type: "superset",
    notes: "BELT TEST — Defense Demonstration",
    exercises: [
      { name: "Parry drill (defensive)", sets: 3, reps: "10", qualifier: "each hand", notes: "Parry jab with rear hand, parry cross with lead hand" },
      { name: "Slip drill (defensive)", sets: 3, reps: "30 sec", qualifier: "", notes: "Slip and counter" },
      { name: "High Guard hold (isometric)", sets: 3, reps: "20 sec", qualifier: "", notes: "Protect yourself at all times" }
    ]
  },
  {
    type: "conditioning",
    exercises: [
      { name: "Heavy Bag Jab-Cross rounds", sets: 3, duration: "90", durationUnit: "sec" }
    ]
  },
  cooldown
];

// === BUILD PAYLOAD AND SEND ===
const payload = {
  trainerEmail: "wisco.barbell@gmail.com",
  programName: program.name,
  programData: {
    daysPerWeek: program.daysPerWeek,
    totalWeeks: program.totalWeeks,
    allWorkouts: allWorkouts
  }
};

console.log(`Sending "${program.name}" — ${Object.keys(allWorkouts).length} workouts...`);

fetch("https://app.bestrongagain.com/api/workout/save-program.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
  .then(r => r.json())
  .then(data => {
    console.log("API Response:", JSON.stringify(data, null, 2));
    if (data.success) {
      console.log("Boxing White Belt — Kicho Foundations saved successfully!");
    } else {
      console.error("Save failed:", data.message || data.error || "Unknown error");
    }
  })
  .catch(err => console.error("Fetch error:", err));
