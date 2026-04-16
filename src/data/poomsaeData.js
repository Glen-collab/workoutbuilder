// poomsaeData.js — Form library with video sections and coaching notes
// No move-by-move text — forms are taught via video demonstration
// Each form has: first half, second half, whole form video slots
// Coaching notes from Glen's curriculum for instructor reference

export const poomsaeData = {

  kicho: {
    name: "Kicho",
    korean: "기본",
    belt: "white",
    beltLabel: "White Belt",
    trigram: null,
    meaning: "Basics / Foundation",
    totalMoves: 18,
    coachingNotes: [
      "Stance integrity first, technique second — if the stance is not stable, everything else is noise. Front stance length and width must stay consistent.",
      "Chambers must be visible and deliberate — every block and punch starts from a clear chamber (hip or shoulder). No floating hands.",
      "Slow is correct, fast is earned — beginners rush. Correct forms are intentionally controlled with clean pauses in transitions.",
    ],
    sections: [
      { name: "Kicho — First Half", video: null },
      { name: "Kicho — Second Half", video: null },
      { name: "Kicho — Whole Form", video: null },
    ],
  },

  taegeukIlJang: {
    name: "Taegeuk Il Jang",
    korean: "태극 일장",
    belt: "high-white",
    beltLabel: "High White Belt",
    trigram: "Geon (Heaven)",
    meaning: "Heaven / Beginnings",
    totalMoves: 18,
    coachingNotes: [
      "Every movement returns to centerline control — punches and blocks should feel like they snap back to a straight axis.",
      "Same height consistency (no dipping or rising) — head level should stay stable across all steps, no bouncing.",
      "Directional clarity matters more than speed — turns should be crisp at 90/180 degrees with no drifting feet.",
    ],
    sections: [
      { name: "Taegeuk Il Jang — First Half", video: null },
      { name: "Taegeuk Il Jang — Second Half", video: null },
      { name: "Taegeuk Il Jang — Whole Form", video: null },
    ],
  },

  taegeukEeJang: {
    name: "Taegeuk Ee Jang",
    korean: "태극 이장",
    belt: "yellow",
    beltLabel: "Yellow Belt",
    trigram: "Tae (Lake)",
    meaning: "Joy / Controlled Energy",
    totalMoves: 18,
    coachingNotes: [
      "Introduce rhythm without rushing — this form is about flowing structure, not speed increases.",
      "Rising block is vertical power, not just upward motion — elbow path must be tight and aligned with centerline.",
      "Kick mechanics must not break stance integrity — even when kicking is introduced, the base stance recovery must be immediate and stable.",
    ],
    sections: [
      { name: "Taegeuk Ee Jang — First Half", video: null },
      { name: "Taegeuk Ee Jang — Second Half", video: null },
      { name: "Taegeuk Ee Jang — Whole Form", video: null },
    ],
  },

  taegeukSamJang: {
    name: "Taegeuk Sam Jang",
    korean: "태극 삼장",
    belt: "high-yellow",
    beltLabel: "High Yellow Belt",
    trigram: "Ri (Fire/Sun)",
    meaning: "Fire / Power Development",
    totalMoves: 20,
    coachingNotes: [
      "Energy expression begins here — intent matters. Techniques should look like they have purpose behind impact, not just motion.",
      "Hand speed and foot speed must match timing — upper and lower body should feel synchronized, not staggered.",
      "Do not over-rotate hips during punches — over-rotation kills balance. Keep structure over torque.",
    ],
    sections: [
      { name: "Taegeuk Sam Jang — First Half", video: null },
      { name: "Taegeuk Sam Jang — Second Half", video: null },
      { name: "Taegeuk Sam Jang — Whole Form", video: null },
    ],
  },

  taegeukSaJang: {
    name: "Taegeuk Sa Jang",
    korean: "태극 사장",
    belt: "green",
    beltLabel: "Green Belt",
    trigram: "Jin (Thunder)",
    meaning: "Wind / Complexity and Control",
    totalMoves: 20,
    coachingNotes: [
      "Back stance must feel defensive, not passive — weight distribution (70% rear leg) must be obvious and controlled.",
      "Knife-hand techniques must be precise, not forceful — accuracy over power. Line and angle matter more than impact.",
      "Transitions define quality more than techniques — judges see movement between moves more than the strikes themselves.",
    ],
    sections: [
      { name: "Taegeuk Sa Jang — First Half", video: null },
      { name: "Taegeuk Sa Jang — Second Half", video: null },
      { name: "Taegeuk Sa Jang — Whole Form", video: null },
    ],
  },

  taegeukOhJang: {
    name: "Taegeuk Oh Jang",
    korean: "태극 오장",
    belt: "high-green",
    beltLabel: "High Green Belt",
    trigram: "Son (Wind)",
    meaning: "Wind / External Application Begins",
    totalMoves: 20,
    coachingNotes: [
      "Elbow and ridge-hand strikes require compact structure — no wide swinging, everything stays tight to the body.",
      "Power generation must come from ground connection — if feet are weak, upper body techniques collapse.",
      "Direction changes must reset posture instantly — no leaning or momentum carryover between sequences.",
    ],
    sections: [
      { name: "Taegeuk Oh Jang — First Half", video: null },
      { name: "Taegeuk Oh Jang — Second Half", video: null },
      { name: "Taegeuk Oh Jang — Whole Form", video: null },
    ],
  },

  taegeukYookJang: {
    name: "Taegeuk Yook Jang",
    korean: "태극 육장",
    belt: "blue",
    beltLabel: "Blue Belt",
    trigram: "Gam (Water)",
    meaning: "Water / Adaptability",
    totalMoves: 19,
    coachingNotes: [
      "Kicking transitions must stay controlled on landing — most errors happen after the kick, not during it.",
      "Upper and lower body timing separation is tested here — hands do not always follow feet immediately. Control timing intentionally.",
      "Balance recovery speed is a scoring factor — judges look for instant stabilization after dynamic movement.",
    ],
    sections: [
      { name: "Taegeuk Yook Jang — First Half", video: null },
      { name: "Taegeuk Yook Jang — Second Half", video: null },
      { name: "Taegeuk Yook Jang — Whole Form", video: null },
    ],
  },

  taegeukChilJang: {
    name: "Taegeuk Chil Jang",
    korean: "태극 칠장",
    belt: "high-blue",
    beltLabel: "High Blue Belt",
    trigram: "Gan (Mountain)",
    meaning: "Mountain / Heaviness and Grounding",
    totalMoves: 25,
    coachingNotes: [
      "Weight should feel dropped, not placed — stances must look rooted, not stepped into lightly.",
      "Slow techniques must be visibly controlled tension — relaxed slow is wrong, structured tension is correct.",
      "Breathing becomes part of execution — exhale timing should align with power moments.",
    ],
    sections: [
      { name: "Taegeuk Chil Jang — First Half", video: null },
      { name: "Taegeuk Chil Jang — Second Half", video: null },
      { name: "Taegeuk Chil Jang — Whole Form", video: null },
    ],
  },

  taegeukPalJang: {
    name: "Taegeuk Pal Jang",
    korean: "태극 팔장",
    belt: "red",
    beltLabel: "Red Belt",
    trigram: "Gon (Earth/Yin)",
    meaning: "Earth / Culmination of Basics",
    totalMoves: 24,
    coachingNotes: [
      "This is where everything must look unified — earlier mistakes (stance, timing, rhythm) become obvious here.",
      "Jumping and explosive movement must stay structured — height does not matter as much as landing control.",
      "No technique should look isolated anymore — everything should feel like one continuous system.",
    ],
    sections: [
      { name: "Taegeuk Pal Jang — First Half", video: null },
      { name: "Taegeuk Pal Jang — Second Half", video: null },
      { name: "Taegeuk Pal Jang — Whole Form", video: null },
    ],
  },

  koryo: {
    name: "Koryo",
    korean: "고려",
    belt: "high-red",
    beltLabel: "High Red Belt / 1st Dan",
    trigram: null,
    meaning: "Centering Power / Black Belt Foundation",
    totalMoves: 30,
    coachingNotes: [
      "Every stance is a statement of control — weak stances are immediate deductions at this level.",
      "Knife-hand guarding block is a signature test of structure — elbow position and spine alignment must be perfect.",
      "Power must be calm, not aggressive — judges look for controlled force, not emotional force.",
    ],
    sections: [
      { name: "Koryo — First Half", video: null },
      { name: "Koryo — Second Half", video: null },
      { name: "Koryo — Whole Form", video: null },
    ],
  },

  keumgang: {
    name: "Keumgang",
    korean: "금강",
    belt: "deputy",
    beltLabel: "Deputy Black Belt / 2nd Dan",
    trigram: null,
    meaning: "Diamond / Immovable Strength",
    totalMoves: 27,
    coachingNotes: [
      "Stillness under tension is the goal — even explosive movements must resolve into stability.",
      "Deep stance transitions must not disrupt posture — no vertical bobbing when changing direction.",
      "Dual-arm techniques must be symmetrical and equal force — any imbalance is highly visible here.",
    ],
    sections: [
      { name: "Keumgang — First Half", video: null },
      { name: "Keumgang — Second Half", video: null },
      { name: "Keumgang — Whole Form", video: null },
    ],
  },

  taebaek: {
    name: "Taebaek",
    korean: "태백",
    belt: "black",
    beltLabel: "Black Belt / 3rd Dan",
    trigram: null,
    meaning: "Sacred Mountain / Refined Intent",
    totalMoves: 26,
    coachingNotes: [
      "Precision overrides power at this stage — excess force is considered lack of control.",
      "Every movement must have visible intent shift — judges should feel change of purpose between techniques.",
      "Stillness between actions becomes a scoring factor — controlled pauses are as important as motion.",
    ],
    sections: [
      { name: "Taebaek — First Half", video: null },
      { name: "Taebaek — Second Half", video: null },
      { name: "Taebaek — Whole Form", video: null },
    ],
  },
};
