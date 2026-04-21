// poomsaeData.js — Form library with video sections and coaching notes
// No move-by-move text — forms are taught via video demonstration
// Each form has: first half + whole form video slots (full form reinforces first half)
// Coaching notes from Glen's curriculum for instructor reference

export const poomsaeData = {

  kichoOne: {
    name: "Kicho I (Blocks, Balance)",
    korean: null,
    belt: "white",
    beltLabel: "White Belt",
    trigram: null,
    meaning: "Foundation — Blocks + Balance",
    totalMoves: 20,
    coachingNotes: [
      "Low block, middle block, high block in front stance — chamber visible every time, no floating hands.",
      "Stance length and width must stay consistent — this form is a stance test disguised as a form.",
      "Balance is the theme — controlled pauses in transitions are as important as the techniques themselves.",
    ],
    sections: [
      { name: "Kicho I — First Half", video: null },
      { name: "Kicho I — Whole Form", video: null },
    ],
  },

  kichoTwo: {
    name: "Kicho II (Kicks, Control)",
    korean: null,
    belt: "high-white",
    beltLabel: "High White Belt",
    trigram: null,
    meaning: "Foundation — Kicks + Control",
    totalMoves: 20,
    coachingNotes: [
      "Front kick chamber must be tight and visible — knee up first, then snap. No round motion.",
      "Recovery stance after the kick matters more than the kick itself — return to front stance cleanly.",
      "Control is the theme — hands stay chambered while kicking, no collapsing the upper body during leg work.",
    ],
    sections: [
      { name: "Kicho II — First Half", video: null },
      { name: "Kicho II — Whole Form", video: null },
    ],
  },

  taegeukIlJang: {
    name: "Taegeuk Il Jang",
    korean: "태극 일장",
    belt: "yellow",
    beltLabel: "Yellow Belt",
    trigram: "Geon (Heaven)",
    meaning: "Heaven / Beginnings",
    totalMoves: 18,
    coachingNotes: [
      "Every movement returns to centerline control — punches and blocks should feel like they snap back to a straight axis.",
      "Same height consistency (no dipping or rising) — head level should stay stable across all steps, no bouncing.",
      "Directional clarity matters more than speed — turns should be crisp at 90/180 degrees with no drifting feet.",
    ],
    sections: [
      { name: "Taegeuk Il Jang — First Half", video: "https://iframe.videodelivery.net/954e1d2a049eb37956e4003516fbd1b5" },
      { name: "Taegeuk Il Jang — Whole Form", video: "https://iframe.videodelivery.net/4d208457c2749cf74badf2f678619c92" },
    ],
  },

  taegeukEeJang: {
    name: "Taegeuk Ee Jang",
    korean: "태극 이장",
    belt: "high-yellow",
    beltLabel: "High Yellow Belt",
    trigram: "Tae (Lake)",
    meaning: "Joy / Controlled Energy",
    totalMoves: 18,
    coachingNotes: [
      "Introduce rhythm without rushing — this form is about flowing structure, not speed increases.",
      "Rising block is vertical power, not just upward motion — elbow path must be tight and aligned with centerline.",
      "Kick mechanics must not break stance integrity — even when kicking is introduced, the base stance recovery must be immediate and stable.",
    ],
    sections: [
      { name: "Taegeuk Ee Jang — First Half", video: "https://iframe.videodelivery.net/9a8e042109f7db2efb3a4342c821d792" },
      { name: "Taegeuk Ee Jang — Whole Form", video: "https://iframe.videodelivery.net/ea55d5a70ee0327c99f75153ca661063" },
    ],
  },

  taegeukSamJang: {
    name: "Taegeuk Sam Jang",
    korean: "태극 삼장",
    belt: "green",
    beltLabel: "Green Belt",
    trigram: "Ri (Fire/Sun)",
    meaning: "Fire / Power Development",
    totalMoves: 20,
    coachingNotes: [
      "Energy expression begins here — intent matters. Techniques should look like they have purpose behind impact, not just motion.",
      "Hand speed and foot speed must match timing — upper and lower body should feel synchronized, not staggered.",
      "Do not over-rotate hips during punches — over-rotation kills balance. Keep structure over torque.",
    ],
    sections: [
      { name: "Taegeuk Sam Jang — First Half", video: "https://iframe.videodelivery.net/b62ee13904f3167592c18ef07b861680" },
      { name: "Taegeuk Sam Jang — Whole Form", video: "https://iframe.videodelivery.net/c8f1b2baf4bad5c327d1806c30bff1eb" },
    ],
  },

  taegeukSaJang: {
    name: "Taegeuk Sa Jang",
    korean: "태극 사장",
    belt: "high-green",
    beltLabel: "High Green Belt",
    trigram: "Jin (Thunder)",
    meaning: "Wind / Complexity and Control",
    totalMoves: 20,
    coachingNotes: [
      "Back stance must feel defensive, not passive — weight distribution (70% rear leg) must be obvious and controlled.",
      "Knife-hand techniques must be precise, not forceful — accuracy over power. Line and angle matter more than impact.",
      "Transitions define quality more than techniques — judges see movement between moves more than the strikes themselves.",
    ],
    sections: [
      { name: "Taegeuk Sa Jang — First Half", video: "https://iframe.videodelivery.net/871b9b8a28f8c53f263f5714116cdf60" },
      { name: "Taegeuk Sa Jang — Whole Form", video: "https://iframe.videodelivery.net/e490dfbea24547955b23828dae0c9295" },
    ],
  },

  taegeukOhJang: {
    name: "Taegeuk Oh Jang",
    korean: "태극 오장",
    belt: "blue",
    beltLabel: "Blue Belt",
    trigram: "Son (Wind)",
    meaning: "Wind / External Application Begins",
    totalMoves: 20,
    coachingNotes: [
      "Elbow and ridge-hand strikes require compact structure — no wide swinging, everything stays tight to the body.",
      "Power generation must come from ground connection — if feet are weak, upper body techniques collapse.",
      "Direction changes must reset posture instantly — no leaning or momentum carryover between sequences.",
    ],
    sections: [
      { name: "Taegeuk Oh Jang — First Half", video: "https://iframe.videodelivery.net/5e11f6d0c10d9838abfb709e7fb4fed7" },
      { name: "Taegeuk Oh Jang — Whole Form", video: "https://iframe.videodelivery.net/ae7782c97b309a8ea15807f05ef2a59a" },
    ],
  },

  taegeukYookJang: {
    name: "Taegeuk Yook Jang",
    korean: "태극 육장",
    belt: "high-blue",
    beltLabel: "High Blue Belt",
    trigram: "Gam (Water)",
    meaning: "Water / Adaptability",
    totalMoves: 19,
    coachingNotes: [
      "Kicking transitions must stay controlled on landing — most errors happen after the kick, not during it.",
      "Upper and lower body timing separation is tested here — hands do not always follow feet immediately. Control timing intentionally.",
      "Balance recovery speed is a scoring factor — judges look for instant stabilization after dynamic movement.",
    ],
    sections: [
      { name: "Taegeuk Yook Jang — First Half", video: "https://iframe.videodelivery.net/9f2d54d0ec2e634fc164de10f7835433" },
      { name: "Taegeuk Yook Jang — Whole Form", video: "https://iframe.videodelivery.net/0367c37252c88458590eac5ada69ff9e" },
    ],
  },

  taegeukChilJang: {
    name: "Taegeuk Chil Jang",
    korean: "태극 칠장",
    belt: "red",
    beltLabel: "Red Belt",
    trigram: "Gan (Mountain)",
    meaning: "Mountain / Heaviness and Grounding",
    totalMoves: 25,
    coachingNotes: [
      "Weight should feel dropped, not placed — stances must look rooted, not stepped into lightly.",
      "Slow techniques must be visibly controlled tension — relaxed slow is wrong, structured tension is correct.",
      "Breathing becomes part of execution — exhale timing should align with power moments.",
    ],
    sections: [
      { name: "Taegeuk Chil Jang — First Half", video: "https://iframe.videodelivery.net/c5961793179caca8a2ca4fcd108c6b58" },
      { name: "Taegeuk Chil Jang — Whole Form", video: "https://iframe.videodelivery.net/983f06b59d33b75ae94c20d5ac3311d4" },
    ],
  },

  taegeukPalJang: {
    name: "Taegeuk Pal Jang",
    korean: "태극 팔장",
    belt: "high-red",
    beltLabel: "High Red Belt",
    trigram: "Gon (Earth/Yin)",
    meaning: "Earth / Culmination of Basics",
    totalMoves: 24,
    coachingNotes: [
      "This is where everything must look unified — earlier mistakes (stance, timing, rhythm) become obvious here.",
      "Jumping and explosive movement must stay structured — height does not matter as much as landing control.",
      "No technique should look isolated anymore — everything should feel like one continuous system.",
    ],
    sections: [
      { name: "Taegeuk Pal Jang — First Half", video: "https://iframe.videodelivery.net/32e8a2c5a17914ed8e89d70471b6939f" },
      { name: "Taegeuk Pal Jang — Whole Form", video: "https://iframe.videodelivery.net/3abbacf24ea795459d2fde0df7e3aa44" },
    ],
  },

  review: {
    name: "Review",
    korean: null,
    belt: "deputy",
    beltLabel: "Deputy Black Belt",
    trigram: null,
    meaning: "Review of all prior forms before Black Belt test",
    totalMoves: null,
    coachingNotes: [
      "No new form at this level — demonstrate every Taegeuk + Kicho from memory, clean and controlled.",
      "Judges look for integration: what was raw at each earlier belt should now look unified and effortless.",
      "This is where weaknesses in early forms become obvious — use this belt to fix them before Koryo.",
    ],
    sections: [],
  },

  koryo: {
    name: "Koryo",
    korean: "고려",
    belt: "black",
    beltLabel: "Black Belt / 1st Dan",
    trigram: null,
    meaning: "Centering Power / Black Belt Foundation",
    totalMoves: 30,
    coachingNotes: [
      "Every stance is a statement of control — weak stances are immediate deductions at this level.",
      "Knife-hand guarding block is a signature test of structure — elbow position and spine alignment must be perfect.",
      "Power must be calm, not aggressive — judges look for controlled force, not emotional force.",
    ],
    sections: [
      { name: "Koryo — First Half", video: "https://iframe.videodelivery.net/a2f4a2d89c42ca18c4722ad38c7a2b12" },
      { name: "Koryo — Whole Form", video: "https://iframe.videodelivery.net/36ae799f03312118b595d9d90a9386c1" },
    ],
  },

  keumgang: {
    name: "Keumgang",
    korean: "금강",
    belt: "dan2",
    beltLabel: "2nd Dan",
    trigram: null,
    meaning: "Diamond / Immovable Strength",
    totalMoves: 27,
    coachingNotes: [
      "Stillness under tension is the goal — even explosive movements must resolve into stability.",
      "Deep stance transitions must not disrupt posture — no vertical bobbing when changing direction.",
      "Dual-arm techniques must be symmetrical and equal force — any imbalance is highly visible here.",
    ],
    sections: [
      { name: "Keumgang — First Half", video: "https://iframe.videodelivery.net/821f27d3bfbf34fb463321552a7b483f" },
      { name: "Keumgang — Whole Form", video: "https://iframe.videodelivery.net/07ac52d07a95da0277ab19839cc645a9" },
    ],
  },

  taebaek: {
    name: "Taebaek",
    korean: "태백",
    belt: "dan3",
    beltLabel: "3rd Dan",
    trigram: null,
    meaning: "Sacred Mountain / Refined Intent",
    totalMoves: 26,
    coachingNotes: [
      "Precision overrides power at this stage — excess force is considered lack of control.",
      "Every movement must have visible intent shift — judges should feel change of purpose between techniques.",
      "Stillness between actions becomes a scoring factor — controlled pauses are as important as motion.",
    ],
    sections: [
      { name: "Taebaek — First Half", video: "https://iframe.videodelivery.net/11bfb092f7f5372f62f9515a0f22d85b" },
      { name: "Taebaek — Whole Form", video: "https://iframe.videodelivery.net/7afa0f1f0ec7ef553f72cb6d6711fd3b" },
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════
// BOXING FORMS (I-Pattern System)
// Rules: ONLY punches + pivots + angles. No kicks, no clinch.
// Every turn = 90 or 180 degrees. Minimal language.
// ═══════════════════════════════════════════════════════════════════

export const boxingForms = {

  boxingKicho: {
    name: "Boxing Kicho",
    belt: "white",
    beltLabel: "White Belt",
    meaning: "Line Basics",
    combos: [
      "Jab",
      "Cross",
      "Turn 180 — Jab, Cross",
      "Step left — Jab, Cross",
      "Pivot right — Cross, Jab",
      "Step back — Jab, Cross",
    ],
    sections: [
      { name: "Boxing Kicho — First Half", video: null },
      { name: "Boxing Kicho — Whole Form", video: null },
    ],
  },

  boxingIlJang: {
    name: "Boxing Il Jang",
    belt: "high-white",
    beltLabel: "High White Belt",
    meaning: "Distance Control",
    combos: [
      "Jab, Jab, Cross",
      "Cross, Hook, Cross",
      "Turn 180 — Jab, Cross, Hook",
      "Step left — Jab, Cross, Cross",
      "Pivot right — Jab, Hook, Cross",
    ],
    sections: [
      { name: "Boxing Il Jang — First Half", video: null },
      { name: "Boxing Il Jang — Whole Form", video: null },
    ],
  },

  boxingEeJang: {
    name: "Boxing Ee Jang",
    belt: "yellow",
    beltLabel: "Yellow Belt",
    meaning: "Angle Entry",
    combos: [
      "Jab, Cross, Hook",
      "Jab, Pivot, Cross, Hook",
      "Turn 180 — Jab, Cross, Uppercut",
      "Step left — Hook, Cross, Jab",
      "Pivot right — Cross, Hook, Cross",
    ],
    sections: [
      { name: "Boxing Ee Jang — First Half", video: null },
      { name: "Boxing Ee Jang — Whole Form", video: null },
    ],
  },

  boxingSamJang: {
    name: "Boxing Sam Jang",
    belt: "high-yellow",
    beltLabel: "High Yellow Belt",
    meaning: "Combination Flow",
    combos: [
      "Double Jab, Cross, Hook",
      "Jab, Cross, Hook, Cross",
      "Turn 180 — Jab, Hook, Uppercut, Cross",
      "Step left — Jab, Cross, Hook, Uppercut",
    ],
    sections: [
      { name: "Boxing Sam Jang — First Half", video: null },
      { name: "Boxing Sam Jang — Whole Form", video: null },
    ],
  },

  boxingSaJang: {
    name: "Boxing Sa Jang",
    belt: "green",
    beltLabel: "Green Belt",
    meaning: "Broken Rhythm",
    combos: [
      "Jab, Pause, Cross, Hook",
      "Cross, Hook, Cross, Hook",
      "Turn 180 — Jab, Cross, Hook, Cross",
      "Pivot right — Jab, Hook, Cross, Jab",
    ],
    sections: [
      { name: "Boxing Sa Jang — First Half", video: null },
      { name: "Boxing Sa Jang — Whole Form", video: null },
    ],
  },

  boxingOhJang: {
    name: "Boxing Oh Jang",
    belt: "high-green",
    beltLabel: "High Green Belt",
    meaning: "Counter Timing",
    combos: [
      "Slip, Jab, Cross, Hook",
      "Jab, Cross, Slip, Cross, Hook",
      "Turn 180 — Cross, Hook, Jab, Cross",
      "Pivot right — Hook, Cross, Uppercut, Cross",
    ],
    sections: [
      { name: "Boxing Oh Jang — First Half", video: null },
      { name: "Boxing Oh Jang — Whole Form", video: null },
    ],
  },

  boxingYookJang: {
    name: "Boxing Yook Jang",
    belt: "blue",
    beltLabel: "Blue Belt",
    meaning: "Pressure Boxing",
    combos: [
      "Jab, Jab, Cross, Hook, Cross",
      "Cross, Hook, Cross, Jab, Hook",
      "Turn 180 — Jab, Cross, Hook, Uppercut, Cross",
    ],
    sections: [
      { name: "Boxing Yook Jang — First Half", video: null },
      { name: "Boxing Yook Jang — Whole Form", video: null },
    ],
  },

  boxingChilJang: {
    name: "Boxing Chil Jang",
    belt: "high-blue",
    beltLabel: "High Blue Belt",
    meaning: "Inside Fighting",
    combos: [
      "Jab, Cross, Hook, Uppercut, Hook",
      "Hook, Cross, Hook, Cross, Jab",
      "Turn 180 — Cross, Hook, Uppercut, Hook, Cross",
    ],
    sections: [
      { name: "Boxing Chil Jang — First Half", video: null },
      { name: "Boxing Chil Jang — Whole Form", video: null },
    ],
  },

  boxingPalJang: {
    name: "Boxing Pal Jang",
    belt: "red",
    beltLabel: "Red Belt",
    meaning: "Fight Simulation",
    combos: [
      "Jab, Cross, Hook, Cross, Uppercut, Hook",
      "Pivot — Jab, Hook, Cross, Hook, Cross",
      "Turn 180 — Cross, Hook, Jab, Uppercut, Cross, Hook",
    ],
    sections: [
      { name: "Boxing Pal Jang — First Half", video: null },
      { name: "Boxing Pal Jang — Whole Form", video: null },
    ],
  },

  boxingKoryo: {
    name: "Boxing Koryo",
    belt: "high-red",
    beltLabel: "High Red Belt / 1st Dan",
    meaning: "Control Boxing",
    combos: [
      "Jab, Cross, Hook, Cross, Hook, Cross",
      "Turn 180 — Jab, Cross, Hook, Uppercut, Hook, Cross",
      "Step left — Cross, Hook, Jab, Cross, Hook",
    ],
    sections: [
      { name: "Boxing Koryo — First Half", video: null },
      { name: "Boxing Koryo — Whole Form", video: null },
    ],
  },

  boxingKeumgang: {
    name: "Boxing Keumgang",
    belt: "deputy",
    beltLabel: "2nd Dan",
    meaning: "Power + Structure",
    combos: [
      "Jab, Cross, Hook, Cross, Uppercut, Hook, Cross",
      "Pivot — Cross, Hook, Cross, Jab, Hook, Uppercut",
      "Turn 180 — Hook, Cross, Jab, Cross, Hook, Cross",
    ],
    sections: [
      { name: "Boxing Keumgang — First Half", video: null },
      { name: "Boxing Keumgang — Whole Form", video: null },
    ],
  },

  boxingTaebaek: {
    name: "Boxing Taebaek",
    belt: "black",
    beltLabel: "3rd Dan",
    meaning: "Master Flow",
    combos: [
      "Free I-pattern chain — no repeats allowed",
    ],
    requirements: [
      "Jab entry",
      "Hook rotation",
      "Uppercut inside",
      "Pivot exit",
    ],
    sections: [
      { name: "Boxing Taebaek — First Half", video: null },
      { name: "Boxing Taebaek — Whole Form", video: null },
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════
// KICKBOXING / MUAY THAI FORMS (I-Pattern System)
// Rules: punches + kicks + knees + elbows (later levels)
// Clinch only at advanced levels. Same I-pattern structure.
// ═══════════════════════════════════════════════════════════════════

export const kickboxingForms = {

  kickboxingKicho: {
    name: "Kickboxing Kicho",
    belt: "white",
    beltLabel: "White Belt",
    meaning: "Basics",
    combos: [
      "Jab",
      "Cross",
      "Front Kick",
      "Turn 180 — Jab, Cross, Front Kick",
      "Step left — Round Kick",
      "Pivot right — Jab, Cross",
    ],
    sections: [
      { name: "Kickboxing Kicho — First Half", video: null },
      { name: "Kickboxing Kicho — Whole Form", video: null },
    ],
  },

  kickboxingIlJang: {
    name: "Kickboxing Il Jang",
    belt: "high-white",
    beltLabel: "High White Belt",
    meaning: "Punch + Kick Integration",
    combos: [
      "Jab, Cross, Round Kick",
      "Jab, Cross, Front Kick, Cross",
      "Turn 180 — Jab, Cross, Round Kick",
      "Step left — Hook, Cross, Front Kick",
    ],
    sections: [
      { name: "Kickboxing Il Jang — First Half", video: null },
      { name: "Kickboxing Il Jang — Whole Form", video: null },
    ],
  },

  kickboxingEeJang: {
    name: "Kickboxing Ee Jang",
    belt: "yellow",
    beltLabel: "Yellow Belt",
    meaning: "Low Kick + Angles",
    combos: [
      "Jab, Cross, Hook, Low Kick",
      "Jab, Cross, Round Kick, Cross",
      "Turn 180 — Jab, Hook, Round Kick",
      "Pivot — Cross, Hook, Low Kick, Jab",
    ],
    sections: [
      { name: "Kickboxing Ee Jang — First Half", video: null },
      { name: "Kickboxing Ee Jang — Whole Form", video: null },
    ],
  },

  kickboxingSamJang: {
    name: "Kickboxing Sam Jang",
    belt: "high-yellow",
    beltLabel: "High Yellow Belt",
    meaning: "Knee + Elbow Introduction",
    combos: [
      "Jab, Cross, Hook, Knee",
      "Cross, Hook, Round Kick, Knee",
      "Turn 180 — Jab, Cross, Elbow, Knee",
      "Step left — Hook, Cross, Round Kick",
    ],
    sections: [
      { name: "Kickboxing Sam Jang — First Half", video: null },
      { name: "Kickboxing Sam Jang — Whole Form", video: null },
    ],
  },

  kickboxingSaJang: {
    name: "Kickboxing Sa Jang",
    belt: "green",
    beltLabel: "Green Belt",
    meaning: "Mixed Weapon Chains",
    combos: [
      "Jab, Cross, Low Kick, Cross",
      "Hook, Cross, Knee, Elbow",
      "Turn 180 — Cross, Hook, Knee, Round Kick",
    ],
    sections: [
      { name: "Kickboxing Sa Jang — First Half", video: null },
      { name: "Kickboxing Sa Jang — Whole Form", video: null },
    ],
  },

  kickboxingOhJang: {
    name: "Kickboxing Oh Jang",
    belt: "high-green",
    beltLabel: "High Green Belt",
    meaning: "Clinch Introduction",
    combos: [
      "Jab, Cross, Clinch, Knee, Knee",
      "Hook, Cross, Elbow, Knee, Kick",
      "Turn 180 — Jab, Cross, Hook, Knee, Elbow",
    ],
    sections: [
      { name: "Kickboxing Oh Jang — First Half", video: null },
      { name: "Kickboxing Oh Jang — Whole Form", video: null },
    ],
  },

  kickboxingYookJang: {
    name: "Kickboxing Yook Jang",
    belt: "blue",
    beltLabel: "Blue Belt",
    meaning: "Switch Kicks + Flow",
    combos: [
      "Jab, Cross, Switch Kick, Cross",
      "Hook, Cross, Knee, Elbow, Knee",
      "Turn 180 — Round Kick, Cross, Hook, Knee",
    ],
    sections: [
      { name: "Kickboxing Yook Jang — First Half", video: null },
      { name: "Kickboxing Yook Jang — Whole Form", video: null },
    ],
  },

  kickboxingChilJang: {
    name: "Kickboxing Chil Jang",
    belt: "high-blue",
    beltLabel: "High Blue Belt",
    meaning: "Inside Fighting",
    combos: [
      "Jab, Cross, Elbow, Knee, Hook",
      "Cross, Hook, Clinch, Knee, Elbow",
      "Turn 180 — Switch Kick, Knee, Elbow, Cross",
    ],
    sections: [
      { name: "Kickboxing Chil Jang — First Half", video: null },
      { name: "Kickboxing Chil Jang — Whole Form", video: null },
    ],
  },

  kickboxingPalJang: {
    name: "Kickboxing Pal Jang",
    belt: "red",
    beltLabel: "Red Belt",
    meaning: "Full Arsenal",
    combos: [
      "Jab, Cross, Hook, Elbow, Knee, Kick",
      "Clinch, Knee, Elbow, Cross, Hook",
      "Turn 180 — Kick, Cross, Knee, Elbow, Hook",
    ],
    sections: [
      { name: "Kickboxing Pal Jang — First Half", video: null },
      { name: "Kickboxing Pal Jang — Whole Form", video: null },
    ],
  },

  kickboxingKoryo: {
    name: "Kickboxing Koryo",
    belt: "high-red",
    beltLabel: "High Red Belt / 1st Dan",
    meaning: "Full Flow Combat Chain",
    combos: [
      "Full flow combat chain",
    ],
    requirements: [
      "Punch entry",
      "Kick response",
      "Knee clinch",
      "Elbow exit",
      "Pivot escape",
    ],
    sections: [
      { name: "Kickboxing Koryo — First Half", video: null },
      { name: "Kickboxing Koryo — Whole Form", video: null },
    ],
  },

  kickboxingKeumgang: {
    name: "Kickboxing Keumgang",
    belt: "deputy",
    beltLabel: "2nd Dan",
    meaning: "Pressure Fighting",
    combos: [
      "Pressure fighting I-pattern",
    ],
    requirements: [
      "Broken rhythm mandatory",
      "No fixed combo allowed",
    ],
    sections: [
      { name: "Kickboxing Keumgang — First Half", video: null },
      { name: "Kickboxing Keumgang — Whole Form", video: null },
    ],
  },

  kickboxingTaebaek: {
    name: "Kickboxing Taebaek",
    belt: "black",
    beltLabel: "3rd Dan",
    meaning: "Free Combat Poomsae",
    combos: [
      "Free combat poomsae",
    ],
    requirements: [
      "Offense",
      "Defense",
      "Clinch",
      "Exit",
      "Counter",
    ],
    sections: [
      { name: "Kickboxing Taebaek — First Half", video: null },
      { name: "Kickboxing Taebaek — Whole Form", video: null },
    ],
  },
};
