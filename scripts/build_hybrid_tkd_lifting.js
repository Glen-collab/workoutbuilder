// ============================================================
// Warrior Strength — TKD Hybrid
// 8-week, 3-day/week Hybrid Taekwondo + Strength Training
// Green/Blue belt level — mid-level martial artist + lifter
// ============================================================

const TRAINER_EMAIL = "wisco.barbell@gmail.com";
const PROGRAM_NAME = "Warrior Strength \u2014 TKD Hybrid";
const API_URL = "https://app.bestrongagain.com/api/workout/save-program.php";

// ---- THEMES by week pair ----
const themes = {
  1: "[name], iron and discipline. The barbell builds your body. The kicks sharpen your weapon. Today we do both.",
  2: "[name], iron and discipline. The barbell builds your body. The kicks sharpen your weapon. Today we do both.",
  3: "[name], power transfers. The hip drive in your deadlift is the same hip drive in your roundhouse. Train them together. Dominate both.",
  4: "[name], power transfers. The hip drive in your deadlift is the same hip drive in your roundhouse. Train them together. Dominate both.",
  5: "[name], you are not just strong. You are dangerous. Muscle without skill is wasted. Skill without strength is limited. You have both.",
  6: "[name], you are not just strong. You are dangerous. Muscle without skill is wasted. Skill without strength is limited. You have both.",
  7: "[name], warrior strength. 8 weeks of building a machine that lifts heavy and kicks hard. This is what a complete athlete looks like.",
  8: "[name], warrior strength. 8 weeks of building a machine that lifts heavy and kicks hard. This is what a complete athlete looks like."
};

// ---- COOLDOWN (shared) ----
function cooldown() {
  return {
    type: "cooldown",
    exercises: [
      { name: "Standing Hamstring Stretch", sets: 1, reps: "30 sec each side" },
      { name: "Pigeon Stretch", sets: 1, reps: "30 sec each side" },
      { name: "Shoulder Cross-Body Stretch", sets: 1, reps: "30 sec each side" },
      { name: "Seated Spinal Twist", sets: 1, reps: "30 sec each side" },
      { name: "Child's Pose", sets: 1, reps: "45 sec" }
    ]
  };
}

// ---- WARMUPS ----
function warmupDay1() {
  return {
    type: "warmup",
    notes: "Dynamic upper body prep + hip hinge activation",
    exercises: [
      { name: "Arm Circles (forward + backward)", sets: 1, reps: "20 each direction" },
      { name: "Band Pull-Aparts", sets: 1, reps: "15" },
      { name: "Inchworms", sets: 1, reps: "8" },
      { name: "Hip Hinge with Dowel", sets: 1, reps: "10" },
      { name: "Dynamic Chest Stretch + Leg Swings", sets: 1, reps: "10 each side" }
    ]
  };
}

function warmupDay2() {
  return {
    type: "warmup",
    notes: "Lower body activation + hip mobility for kicks",
    exercises: [
      { name: "Bodyweight Squats", sets: 1, reps: "15" },
      { name: "Walking Knee Hugs", sets: 1, reps: "10 each side" },
      { name: "Lateral Leg Swings", sets: 1, reps: "12 each side" },
      { name: "Hip Circles (standing)", sets: 1, reps: "10 each direction" },
      { name: "Glute Bridges", sets: 1, reps: "12" }
    ]
  };
}

function warmupDay3() {
  return {
    type: "warmup",
    notes: "Full body activation — prepare to move and kick",
    exercises: [
      { name: "Jumping Jacks", sets: 1, reps: "30" },
      { name: "World's Greatest Stretch", sets: 1, reps: "5 each side" },
      { name: "High Knees", sets: 1, reps: "20 each leg" },
      { name: "Arm Circles + Torso Rotations", sets: 1, reps: "10 each" },
      { name: "Front + Side Leg Swings", sets: 1, reps: "10 each direction per leg" }
    ]
  };
}

// ============================================================
// ALL 24 WORKOUTS — organized by week and day
// ============================================================

const allWorkouts = {};

// ===================== WEEK 1 =====================

// --- Week 1, Day 1: Upper Body + Hinge + MA ---
allWorkouts["1-1"] = [
  { type: "theme", themeText: themes[1] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — Push/Pull superset. 3x10 @ controlled tempo. Wk 1-2 hypertrophy base.",
    exercises: [
      { name: "Barbell Bench Press", sets: 3, reps: "10", isPercentageBased: true, baseMax: "bench", percentages: [65, 67.5, 70], repsPerSet: [10, 10, 10] },
      { name: "Barbell Row", sets: 3, reps: "10", isPercentageBased: true, baseMax: "manual", percentages: [65, 67.5, 70], repsPerSet: [10, 10, 10] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Accessory hypertrophy. Keep rest short, pump it up.",
    exercises: [
      { name: "Overhead Press", sets: 3, reps: "10" },
      { name: "Romanian Deadlift", sets: 3, reps: "10", isPercentageBased: true, baseMax: "deadlift", percentages: [65, 67.5, 70], repsPerSet: [10, 10, 10] },
      { name: "Dumbbell Curl", sets: 3, reps: "12" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Green/blue belt kicks. Focus on clean technique, full chamber.",
    exercises: [
      { name: "Skip Roundhouse Kick (each side)", sets: 3, reps: "10 each side" },
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 3, reps: "8 combos" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher — push through the burn.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec" },
      { name: "Plank Hold", sets: 3, reps: "30 sec" }
    ]
  },
  cooldown()
];

// --- Week 1, Day 2: Lower Body + Core + MA ---
allWorkouts["1-2"] = [
  { type: "theme", themeText: themes[1] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Squat day. 3x10 hypertrophy base. Own every rep.",
    exercises: [
      { name: "Back Squat", sets: 3, reps: "10", isPercentageBased: true, baseMax: "squat", percentages: [65, 67.5, 70], repsPerSet: [10, 10, 10] }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Accessories. Build the legs that throw powerful kicks.",
    exercises: [
      { name: "Walking Lunges", sets: 3, reps: "12 each leg" },
      { name: "Leg Curl", sets: 3, reps: "12" },
      { name: "Hip Thrust", sets: 3, reps: "12" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Kicking combos. Snap those kicks.",
    exercises: [
      { name: "Switch Roundhouse Kick (each side)", sets: 3, reps: "10 each side" },
      { name: "Roundhouse + Hook Kick combo", sets: 3, reps: "8 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Front Kick Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Hanging Leg Raise", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// --- Week 1, Day 3: Full Body + MA ---
allWorkouts["1-3"] = [
  { type: "theme", themeText: themes[1] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Power movement. 3x10 learning the groove.",
    exercises: [
      { name: "Power Clean", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Full body superset. Squat + Press, Row + Lunge.",
    exercises: [
      { name: "Goblet Squat", sets: 3, reps: "10" },
      { name: "Overhead Press", sets: 3, reps: "10" },
      { name: "Dumbbell Single Arm Row", sets: 3, reps: "10 each arm" },
      { name: "Reverse Lunges", sets: 3, reps: "10 each leg" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Triple kick combo work.",
    exercises: [
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 3, reps: "6 combos each side" },
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 3, reps: "6 combos each side" },
      { name: "Double Roundhouse (body then head, same leg)", sets: 3, reps: "8 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher — leave it all on the mat.",
    exercises: [
      { name: "Shadow Sparring", sets: 1, reps: "2 min" },
      { name: "Russian Twist", sets: 3, reps: "20 reps" }
    ]
  },
  cooldown()
];

// ===================== WEEK 2 =====================

// --- Week 2, Day 1: Upper Body + Hinge + MA ---
allWorkouts["2-1"] = [
  { type: "theme", themeText: themes[2] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — Push/Pull. 3x10, slight weight increase from Week 1.",
    exercises: [
      { name: "Dumbbell Bench Press", sets: 3, reps: "10" },
      { name: "Cable Row", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Hinge + Accessories. Build that posterior chain.",
    exercises: [
      { name: "Romanian Deadlift", sets: 3, reps: "10", isPercentageBased: true, baseMax: "deadlift", percentages: [67.5, 70, 70], repsPerSet: [10, 10, 10] },
      { name: "Lat Pulldown", sets: 3, reps: "10" },
      { name: "Tricep Pushdown", sets: 3, reps: "12" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Hook kick focus this session.",
    exercises: [
      { name: "Hook Kick (each side)", sets: 3, reps: "10 each side" },
      { name: "Roundhouse + Spin Kick combo", sets: 3, reps: "8 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Spin Kick Attempts", sets: 3, reps: "20 sec each side" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "10" }
    ]
  },
  cooldown()
];

// --- Week 2, Day 2: Lower Body + Core + MA ---
allWorkouts["2-2"] = [
  { type: "theme", themeText: themes[2] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Front squat focus. 3x10 hypertrophy.",
    exercises: [
      { name: "Front Squat", sets: 3, reps: "10", isPercentageBased: true, baseMax: "squat", percentages: [60, 62.5, 65], repsPerSet: [10, 10, 10] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Unilateral + machine work. Build balanced legs.",
    exercises: [
      { name: "Bulgarian Split Squat", sets: 3, reps: "10 each leg" },
      { name: "Leg Extension", sets: 3, reps: "12" },
      { name: "Glute Bridge", sets: 3, reps: "15" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Spinning kicks.",
    exercises: [
      { name: "Spin Kick / Back Kick (each side)", sets: 3, reps: "8 each side" },
      { name: "Roundhouse + Spinning Wheel Kick combo", sets: 3, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Continuous Kicking Flow", sets: 2, reps: "1 min" },
      { name: "Plank Hold", sets: 2, reps: "45 sec" }
    ]
  },
  cooldown()
];

// --- Week 2, Day 3: Full Body + MA ---
allWorkouts["2-3"] = [
  { type: "theme", themeText: themes[2] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Hang clean. Explosive hip extension.",
    exercises: [
      { name: "Hang Clean", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Full body pairs.",
    exercises: [
      { name: "Back Squat", sets: 3, reps: "10", isPercentageBased: true, baseMax: "squat", percentages: [65, 67.5, 70], repsPerSet: [10, 10, 10] },
      { name: "DB Shoulder Press", sets: 3, reps: "10" },
      { name: "Barbell Row", sets: 3, reps: "10" },
      { name: "Walking Lunges", sets: 3, reps: "10 each leg" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Combo focus.",
    exercises: [
      { name: "Roundhouse + Hook Kick", sets: 3, reps: "8 combos each side" },
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 3, reps: "8 combos" },
      { name: "Skip Roundhouse Kick", sets: 3, reps: "10 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Russian Twist", sets: 3, reps: "20 reps" }
    ]
  },
  cooldown()
];

// ===================== WEEK 3 =====================

// --- Week 3, Day 1: Upper Body + Hinge + MA ---
allWorkouts["3-1"] = [
  { type: "theme", themeText: themes[3] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — 4x8, building strength now. Heavier than weeks 1-2.",
    exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "8", isPercentageBased: true, baseMax: "bench", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] },
      { name: "Barbell Row", sets: 4, reps: "8", isPercentageBased: true, baseMax: "manual", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Hinge + accessory. Hip drive is kick power.",
    exercises: [
      { name: "Barbell Deadlift", sets: 4, reps: "8", isPercentageBased: true, baseMax: "deadlift", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] },
      { name: "Pull-ups", sets: 4, reps: "8" },
      { name: "Dumbbell Curl", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Power kick combos.",
    exercises: [
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "6 combos each side" },
      { name: "Roundhouse + Spin Kick combo", sets: 4, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Shadow Sparring", sets: 1, reps: "2 min" },
      { name: "Hanging Leg Raise", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// --- Week 3, Day 2: Lower Body + Core + MA ---
allWorkouts["3-2"] = [
  { type: "theme", themeText: themes[3] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Back squat 4x8. Feel the power build.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "8", isPercentageBased: true, baseMax: "squat", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Unilateral + isolation. Balance is key for kickers.",
    exercises: [
      { name: "Bulgarian Split Squat", sets: 4, reps: "8 each leg" },
      { name: "Leg Press", sets: 4, reps: "10" },
      { name: "Hip Thrust", sets: 3, reps: "10" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Combo chains.",
    exercises: [
      { name: "Roundhouse + Jump Hook Kick", sets: 3, reps: "6 combos each side" },
      { name: "Double Roundhouse (body then head, same leg)", sets: 3, reps: "8 each side" },
      { name: "Switch Roundhouse Kick", sets: 3, reps: "10 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Front Kick Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "10" }
    ]
  },
  cooldown()
];

// --- Week 3, Day 3: Full Body + MA ---
allWorkouts["3-3"] = [
  { type: "theme", themeText: themes[3] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Clean and Press. Total body power. 4x8.",
    exercises: [
      { name: "Clean and Press", sets: 4, reps: "8" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Squat + Press / Row + Lunge supersets.",
    exercises: [
      { name: "Front Squat", sets: 4, reps: "8", isPercentageBased: true, baseMax: "squat", percentages: [65, 67.5, 70, 70], repsPerSet: [8, 8, 8, 8] },
      { name: "Incline DB Press", sets: 4, reps: "8" },
      { name: "Cable Row", sets: 4, reps: "8" },
      { name: "Step Ups", sets: 4, reps: "8 each leg" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Speed + power kicks.",
    exercises: [
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 4, reps: "6 combos each side" },
      { name: "Roundhouse + Spinning Wheel Kick", sets: 3, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Continuous Kicking Flow", sets: 2, reps: "1 min" },
      { name: "Plank Hold", sets: 3, reps: "45 sec" }
    ]
  },
  cooldown()
];

// ===================== WEEK 4 =====================

// --- Week 4, Day 1: Upper Body + Hinge + MA ---
allWorkouts["4-1"] = [
  { type: "theme", themeText: themes[4] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — 4x8, push heavier end of range. Last week of this rep scheme.",
    exercises: [
      { name: "Incline DB Press", sets: 4, reps: "8" },
      { name: "Dumbbell Single Arm Row", sets: 4, reps: "8 each arm" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Hinge + vertical pull + triceps.",
    exercises: [
      { name: "Trap Bar Deadlift", sets: 4, reps: "8", isPercentageBased: true, baseMax: "deadlift", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] },
      { name: "Lat Pulldown", sets: 4, reps: "8" },
      { name: "Tricep Pushdown", sets: 3, reps: "10" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Hook kick mastery.",
    exercises: [
      { name: "Hook Kick (each side)", sets: 4, reps: "8 each side" },
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 4, reps: "6 combos" },
      { name: "Roundhouse + Hook Kick", sets: 3, reps: "8 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Hanging Leg Raise", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// --- Week 4, Day 2: Lower Body + Core + MA ---
allWorkouts["4-2"] = [
  { type: "theme", themeText: themes[4] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Front squat 4x8. Drive through the floor.",
    exercises: [
      { name: "Front Squat", sets: 4, reps: "8", isPercentageBased: true, baseMax: "squat", percentages: [65, 67.5, 70, 72.5], repsPerSet: [8, 8, 8, 8] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Posterior chain + quads + glutes.",
    exercises: [
      { name: "Walking Lunges", sets: 4, reps: "10 each leg" },
      { name: "Leg Curl", sets: 4, reps: "10" },
      { name: "Glute Bridge", sets: 3, reps: "15" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Spin kick combos.",
    exercises: [
      { name: "Spin Kick / Back Kick (each side)", sets: 4, reps: "8 each side" },
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Spin Kick Attempts", sets: 3, reps: "20 sec each side" },
      { name: "Russian Twist", sets: 3, reps: "20 reps" }
    ]
  },
  cooldown()
];

// --- Week 4, Day 3: Full Body + MA ---
allWorkouts["4-3"] = [
  { type: "theme", themeText: themes[4] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Hang Clean. 4x8 explosive.",
    exercises: [
      { name: "Hang Clean", sets: 4, reps: "8" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Full body compound pairs.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "8", isPercentageBased: true, baseMax: "squat", percentages: [70, 72.5, 75, 75], repsPerSet: [8, 8, 8, 8] },
      { name: "DB Shoulder Press", sets: 4, reps: "8" },
      { name: "Barbell Row", sets: 4, reps: "8" },
      { name: "Bulgarian Split Squat", sets: 4, reps: "8 each leg" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Full combo chains.",
    exercises: [
      { name: "Double Roundhouse (body then head, same leg)", sets: 3, reps: "8 each side" },
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 3, reps: "8 combos each side" },
      { name: "Roundhouse + Jump Hook Kick", sets: 3, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Shadow Sparring", sets: 1, reps: "2 min" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "10" }
    ]
  },
  cooldown()
];

// ===================== WEEK 5 =====================

// --- Week 5, Day 1: Upper Body + Hinge + MA ---
allWorkouts["5-1"] = [
  { type: "theme", themeText: themes[5] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — 5x5 strength focus. Heavy and controlled. You earned this.",
    exercises: [
      { name: "Barbell Bench Press", sets: 5, reps: "5", isPercentageBased: true, baseMax: "bench", percentages: [75, 77.5, 80, 82.5, 85], repsPerSet: [5, 5, 5, 5, 5] },
      { name: "Barbell Row", sets: 5, reps: "5", isPercentageBased: true, baseMax: "manual", percentages: [75, 77.5, 80, 82.5, 85], repsPerSet: [5, 5, 5, 5, 5] }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Hinge + vertical pull. Heavy hinge = heavy kicks.",
    exercises: [
      { name: "Romanian Deadlift", sets: 5, reps: "5", isPercentageBased: true, baseMax: "deadlift", percentages: [75, 77.5, 80, 82.5, 85], repsPerSet: [5, 5, 5, 5, 5] },
      { name: "Pull-ups", sets: 5, reps: "5" },
      { name: "Dumbbell Curl", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Power kicks. Fewer reps, maximum force.",
    exercises: [
      { name: "Skip Roundhouse Kick (power focus, each side)", sets: 4, reps: "8 each side" },
      { name: "Roundhouse + Spinning Wheel Kick", sets: 4, reps: "5 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Plank Hold", sets: 3, reps: "45 sec" }
    ]
  },
  cooldown()
];

// --- Week 5, Day 2: Lower Body + Core + MA ---
allWorkouts["5-2"] = [
  { type: "theme", themeText: themes[5] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Back squat 5x5. This is where warriors are forged.",
    exercises: [
      { name: "Back Squat", sets: 5, reps: "5", isPercentageBased: true, baseMax: "squat", percentages: [75, 77.5, 80, 82.5, 85], repsPerSet: [5, 5, 5, 5, 5] }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Unilateral strength + hip power.",
    exercises: [
      { name: "Bulgarian Split Squat", sets: 4, reps: "6 each leg" },
      { name: "Leg Press", sets: 4, reps: "8" },
      { name: "Hip Thrust", sets: 4, reps: "8" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Power combos.",
    exercises: [
      { name: "Roundhouse + Spin Kick combo", sets: 4, reps: "6 combos each side" },
      { name: "Hook Kick (power, each side)", sets: 4, reps: "8 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Front Kick Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Hanging Leg Raise", sets: 3, reps: "15" }
    ]
  },
  cooldown()
];

// --- Week 5, Day 3: Full Body + MA ---
allWorkouts["5-3"] = [
  { type: "theme", themeText: themes[5] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Power Clean 5x5. Explosive power.",
    exercises: [
      { name: "Power Clean", sets: 5, reps: "5" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Heavy compound pairs.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "6", isPercentageBased: true, baseMax: "squat", percentages: [75, 77.5, 80, 82.5], repsPerSet: [6, 6, 6, 6] },
      { name: "Overhead Press", sets: 4, reps: "6" },
      { name: "Dumbbell Single Arm Row", sets: 4, reps: "6 each arm" },
      { name: "Farmer's Walk", sets: 4, reps: "40 yards" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — High-level combos.",
    exercises: [
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 4, reps: "6 combos" },
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "5 combos each side" },
      { name: "Roundhouse + Jump Hook Kick", sets: 3, reps: "5 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Continuous Kicking Flow", sets: 2, reps: "1 min" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// ===================== WEEK 6 =====================

// --- Week 6, Day 1: Upper Body + Hinge + MA ---
allWorkouts["6-1"] = [
  { type: "theme", themeText: themes[6] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — 5x5 peak strength. Top end of the range.",
    exercises: [
      { name: "Barbell Bench Press", sets: 5, reps: "5", isPercentageBased: true, baseMax: "bench", percentages: [77.5, 80, 82.5, 85, 85], repsPerSet: [5, 5, 5, 5, 5] },
      { name: "Cable Row", sets: 5, reps: "5" }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Hinge + shoulders + arms.",
    exercises: [
      { name: "Barbell Deadlift", sets: 5, reps: "5", isPercentageBased: true, baseMax: "deadlift", percentages: [77.5, 80, 82.5, 85, 85], repsPerSet: [5, 5, 5, 5, 5] },
      { name: "DB Shoulder Press", sets: 4, reps: "6" },
      { name: "Tricep Pushdown", sets: 3, reps: "10" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Advanced kick combos. You are dangerous now.",
    exercises: [
      { name: "Roundhouse + Spinning Wheel Kick", sets: 4, reps: "5 combos each side" },
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 4, reps: "6 combos each side" },
      { name: "Spin Kick / Back Kick (power, each side)", sets: 3, reps: "8 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Shadow Sparring", sets: 1, reps: "2 min" },
      { name: "Plank Hold", sets: 3, reps: "1 min" }
    ]
  },
  cooldown()
];

// --- Week 6, Day 2: Lower Body + Core + MA ---
allWorkouts["6-2"] = [
  { type: "theme", themeText: themes[6] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Back squat 5x5 heavy. Push it.",
    exercises: [
      { name: "Back Squat", sets: 5, reps: "5", isPercentageBased: true, baseMax: "squat", percentages: [77.5, 80, 82.5, 85, 85], repsPerSet: [5, 5, 5, 5, 5] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Leg strength + hip power.",
    exercises: [
      { name: "Step Ups", sets: 4, reps: "8 each leg" },
      { name: "Leg Curl", sets: 4, reps: "8" },
      { name: "Hip Thrust", sets: 4, reps: "8" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Devastating combos.",
    exercises: [
      { name: "Double Roundhouse (body then head, same leg)", sets: 4, reps: "8 each side" },
      { name: "Roundhouse + Hook Kick", sets: 4, reps: "6 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Spin Kick Attempts", sets: 3, reps: "20 sec each side" },
      { name: "Russian Twist", sets: 3, reps: "20 reps" }
    ]
  },
  cooldown()
];

// --- Week 6, Day 3: Full Body + MA ---
allWorkouts["6-3"] = [
  { type: "theme", themeText: themes[6] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Clean and Press 5x5. Total body power.",
    exercises: [
      { name: "Clean and Press", sets: 5, reps: "5" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Compound pairs, heavy.",
    exercises: [
      { name: "Goblet Squat (heavy)", sets: 4, reps: "6" },
      { name: "Barbell Bench Press", sets: 4, reps: "6", isPercentageBased: true, baseMax: "bench", percentages: [75, 77.5, 80, 80], repsPerSet: [6, 6, 6, 6] },
      { name: "Barbell Row", sets: 4, reps: "6" },
      { name: "Kettlebell Swing", sets: 4, reps: "15" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Full arsenal.",
    exercises: [
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "5 combos each side" },
      { name: "Roundhouse + Jump Hook Kick", sets: 3, reps: "5 combos each side" },
      { name: "Hook Kick (each side)", sets: 3, reps: "8 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Hanging Leg Raise", sets: 3, reps: "15" }
    ]
  },
  cooldown()
];

// ===================== WEEK 7 =====================

// --- Week 7, Day 1: Upper Body + Hinge + MA ---
allWorkouts["7-1"] = [
  { type: "theme", themeText: themes[7] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — 3x5 heavy + 1x10 back-off set. Peak week. Show what you built.",
    exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "bench", percentages: [80, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] },
      { name: "Barbell Row", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "manual", percentages: [80, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Heavy hinge + accessories.",
    exercises: [
      { name: "Romanian Deadlift", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "deadlift", percentages: [80, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] },
      { name: "Lat Pulldown", sets: 4, reps: "8" },
      { name: "Dumbbell Curl", sets: 3, reps: "10" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Warrior-level combos.",
    exercises: [
      { name: "Roundhouse + Spinning Wheel Kick", sets: 4, reps: "5 combos each side" },
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 4, reps: "6 combos" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher — almost there.",
    exercises: [
      { name: "Shadow Sparring", sets: 1, reps: "2 min" },
      { name: "Plank Hold", sets: 3, reps: "1 min" }
    ]
  },
  cooldown()
];

// --- Week 7, Day 2: Lower Body + Core + MA ---
allWorkouts["7-2"] = [
  { type: "theme", themeText: themes[7] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Back squat 3x5 heavy + 1x10 back-off. Peak performance.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "squat", percentages: [80, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Heavy unilateral + posterior chain.",
    exercises: [
      { name: "Walking Lunges (heavy)", sets: 4, reps: "8 each leg" },
      { name: "Leg Extension", sets: 4, reps: "10" },
      { name: "Hip Thrust (heavy)", sets: 4, reps: "8" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Advanced combo chains.",
    exercises: [
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "5 combos each side" },
      { name: "Roundhouse + Hook Kick", sets: 4, reps: "6 combos each side" },
      { name: "Spin Kick / Back Kick (power, each side)", sets: 3, reps: "6 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Continuous Kicking Flow", sets: 2, reps: "1 min" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// --- Week 7, Day 3: Full Body + MA ---
allWorkouts["7-3"] = [
  { type: "theme", themeText: themes[7] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Power Clean heavy 3x5 + back-off 1x10.",
    exercises: [
      { name: "Power Clean", sets: 4, reps: "5/5/5/10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Heavy compound pairs + carry.",
    exercises: [
      { name: "Front Squat", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "squat", percentages: [72.5, 77.5, 80, 60], repsPerSet: [5, 5, 5, 10] },
      { name: "Overhead Press", sets: 4, reps: "5/5/5/10" },
      { name: "Cable Row", sets: 4, reps: "8" },
      { name: "Farmer's Walk (heavy)", sets: 3, reps: "50 yards" }
    ]
  },
  {
    type: "superset",
    notes: "Martial Arts Block — Full power display.",
    exercises: [
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 4, reps: "6 combos each side" },
      { name: "Double Roundhouse (body then head, same leg)", sets: 4, reps: "6 each side" },
      { name: "Roundhouse + Jump Hook Kick", sets: 3, reps: "5 combos each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Russian Twist", sets: 3, reps: "20 reps" }
    ]
  },
  cooldown()
];

// ===================== WEEK 8 =====================

// --- Week 8, Day 1: Upper Body + Hinge + MA ---
allWorkouts["8-1"] = [
  { type: "theme", themeText: themes[8] },
  warmupDay1(),
  {
    type: "superset",
    notes: "Strength Block 1 — FINAL WEEK. 3x5 heavy + 1x10 back-off. Leave nothing in the tank.",
    exercises: [
      { name: "Barbell Bench Press", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "bench", percentages: [82.5, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] },
      { name: "Dumbbell Single Arm Row", sets: 4, reps: "5/5/5/10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Heavy deadlift + pull + press.",
    exercises: [
      { name: "Barbell Deadlift", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "deadlift", percentages: [82.5, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] },
      { name: "Pull-ups", sets: 4, reps: "max" },
      { name: "Overhead Press", sets: 4, reps: "5/5/5/10" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Showcase everything. Full arsenal.",
    exercises: [
      { name: "Roundhouse + Spinning Wheel Kick", sets: 4, reps: "5 combos each side" },
      { name: "Jab-Cross-Uppercut-Hook + Roundhouse", sets: 4, reps: "6 combos" },
      { name: "Hook Kick (each side)", sets: 3, reps: "8 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher — last upper day. Make it count.",
    exercises: [
      { name: "Roundhouse Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Hanging Leg Raise", sets: 3, reps: "15" }
    ]
  },
  cooldown()
];

// --- Week 8, Day 2: Lower Body + Core + MA ---
allWorkouts["8-2"] = [
  { type: "theme", themeText: themes[8] },
  warmupDay2(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Back squat FINAL. 3x5 heavy + 1x10 back-off. You are a machine.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "squat", percentages: [82.5, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] }
    ]
  },
  {
    type: "triset",
    notes: "Block 2 — Heavy accessories. Legs of steel, kicks of fury.",
    exercises: [
      { name: "Bulgarian Split Squat (heavy)", sets: 4, reps: "6 each leg" },
      { name: "Leg Press (heavy)", sets: 4, reps: "8" },
      { name: "Hip Thrust (heavy)", sets: 4, reps: "8" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — Everything you've got.",
    exercises: [
      { name: "Skip Roundhouse + Switch Roundhouse + Roundhouse", sets: 4, reps: "5 combos each side" },
      { name: "Roundhouse + Jump Hook Kick", sets: 4, reps: "5 combos each side" },
      { name: "Double Roundhouse (body then head, same leg)", sets: 4, reps: "6 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "Core + MA finisher — last leg day. Warrior finish.",
    exercises: [
      { name: "Front Kick Burnout", sets: 3, reps: "30 sec each side" },
      { name: "Plank Hold", sets: 3, reps: "1 min" },
      { name: "Ab Wheel Rollout", sets: 3, reps: "12" }
    ]
  },
  cooldown()
];

// --- Week 8, Day 3: Full Body + MA ---
allWorkouts["8-3"] = [
  { type: "theme", themeText: themes[8] },
  warmupDay3(),
  {
    type: "straight-set",
    notes: "Strength Block 1 — Clean and Press FINAL. 3x5 heavy + 1x10. Peak power.",
    exercises: [
      { name: "Clean and Press", sets: 4, reps: "5/5/5/10" }
    ]
  },
  {
    type: "superset",
    notes: "Block 2 — Final full body blast. Everything heavy.",
    exercises: [
      { name: "Back Squat", sets: 4, reps: "5/5/5/10", isPercentageBased: true, baseMax: "squat", percentages: [80, 85, 87.5, 65], repsPerSet: [5, 5, 5, 10] },
      { name: "Incline DB Press", sets: 4, reps: "5/5/5/10" },
      { name: "Barbell Row", sets: 4, reps: "5/5/5/10" },
      { name: "Sled Push", sets: 3, reps: "40 yards" }
    ]
  },
  {
    type: "triset",
    notes: "Martial Arts Block — FINAL SESSION. Show the full warrior.",
    exercises: [
      { name: "Jab-Cross + Skip Roundhouse + Switch Roundhouse", sets: 4, reps: "6 combos each side" },
      { name: "Roundhouse + Spinning Wheel Kick", sets: 4, reps: "5 combos each side" },
      { name: "Spin Kick / Back Kick (power, each side)", sets: 4, reps: "6 each side" }
    ]
  },
  {
    type: "conditioning",
    notes: "FINAL FINISHER. 8 weeks complete. Warrior Strength.",
    exercises: [
      { name: "Shadow Sparring (all-out)", sets: 1, reps: "3 min" },
      { name: "Continuous Kicking Flow", sets: 1, reps: "2 min" },
      { name: "Plank Hold", sets: 1, reps: "1 min" }
    ]
  },
  cooldown()
];

// ============================================================
// BUILD PAYLOAD AND SAVE
// ============================================================

const payload = {
  trainerEmail: TRAINER_EMAIL,
  programName: PROGRAM_NAME,
  programData: {
    daysPerWeek: 3,
    totalWeeks: 8,
    allWorkouts: allWorkouts
  }
};

// Verify all 24 days exist
const expectedDays = [];
for (let w = 1; w <= 8; w++) {
  for (let d = 1; d <= 3; d++) {
    expectedDays.push(`${w}-${d}`);
  }
}
const missingDays = expectedDays.filter(key => !allWorkouts[key]);
if (missingDays.length > 0) {
  console.error("MISSING DAYS:", missingDays);
  process.exit(1);
}

// Verify every day has all required block types
const requiredTypes = ["theme", "warmup", "conditioning", "cooldown"];
const liftingTypes = ["straight-set", "superset", "triset"];
for (const key of expectedDays) {
  const blocks = allWorkouts[key];
  const types = blocks.map(b => b.type);
  for (const req of requiredTypes) {
    if (!types.includes(req)) {
      console.error(`Day ${key} is missing block type: ${req}`);
      process.exit(1);
    }
  }
  // Must have at least 2 lifting blocks and 1 MA block (which are also superset/straight-set/triset)
  const liftCount = types.filter(t => liftingTypes.includes(t)).length;
  if (liftCount < 3) {
    console.error(`Day ${key} only has ${liftCount} lifting/MA blocks (need at least 3)`);
    process.exit(1);
  }
}

console.log(`Validated all ${expectedDays.length} days. Saving "${PROGRAM_NAME}"...`);
console.log(`Total blocks: ${Object.values(allWorkouts).reduce((sum, day) => sum + day.length, 0)}`);

fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => {
    console.log("API Response:", JSON.stringify(data, null, 2));
    if (data.success) {
      console.log("Program saved successfully!");
    } else {
      console.error("Save failed:", data.message || data.error || "Unknown error");
    }
  })
  .catch(err => {
    console.error("Fetch error:", err.message);
  });
