// poomsaeData.js — Move-by-move breakdowns for all forms
// Source: Glen's school curriculum + verified sequences
// Each form is an array of moves with technique, stance, direction, and notes

export const poomsaeData = {

  // ═══════════════════════════════════════════
  // TAEGEUK EE JANG (태극 이장) — Yellow Belt
  // Trigram: Tae (Lake/Joy) — find joy in the challenge
  // ═══════════════════════════════════════════
  taegeukEeJang: {
    name: "Taegeuk Ee Jang",
    korean: "태극 이장",
    belt: "yellow",
    trigram: "Tae (Lake) — Joy",
    totalMoves: 18,
    coachingNotes: [
      "Keep everything in front stance — do not let it turn into walking stance",
      "Kicks should be clean: chamber → extend → rechamber → step down",
      "Blocks are about path and chamber, not just endpoints",
    ],
    moves: [
      { move: 1, technique: "Low Block", stance: "Front Stance", direction: "Turn left 90°", notes: "" },
      { move: 2, technique: "Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "" },
      { move: 3, technique: "High Block", stance: "Front Stance", direction: "Step forward", notes: "" },

      { move: 4, technique: "Low Block", stance: "Front Stance", direction: "Turn right 180°", notes: "" },
      { move: 5, technique: "Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "" },
      { move: 6, technique: "High Block", stance: "Front Stance", direction: "Step forward", notes: "" },

      { move: 7, technique: "Low Block", stance: "Front Stance", direction: "Turn left 90°", notes: "" },
      { move: 8, technique: "Front Kick + Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "Kick then punch" },
      { move: 9, technique: "Front Kick + Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "Alternate leg" },

      { move: 10, technique: "Low Block", stance: "Front Stance", direction: "Turn right 180°", notes: "" },
      { move: 11, technique: "Front Kick + Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "" },
      { move: 12, technique: "Front Kick + Middle Punch", stance: "Front Stance", direction: "Step forward", notes: "" },

      { move: 13, technique: "Low Block", stance: "Front Stance", direction: "Turn left 90°", notes: "" },
      { move: 14, technique: "Side Kick", stance: "Front Stance", direction: "Step forward", notes: "Chamber, extend, rechamber" },
      { move: 15, technique: "Roundhouse Kick", stance: "Front Stance", direction: "Step forward", notes: "Turn hips over" },

      { move: 16, technique: "Low Block", stance: "Front Stance", direction: "Turn right 180°", notes: "" },
      { move: 17, technique: "Side Kick", stance: "Front Stance", direction: "Step forward", notes: "" },
      { move: 18, technique: "Roundhouse Kick", stance: "Front Stance", direction: "Step forward", notes: "" },
    ],
    // Drill sections for progressive teaching
    sections: [
      { name: "Moves 1-3", label: "Block + Punch + High Block (left)", moves: [1, 2, 3] },
      { name: "Moves 4-6", label: "Block + Punch + High Block (right)", moves: [4, 5, 6] },
      { name: "Moves 7-9", label: "Block + Front Kick Combos (left)", moves: [7, 8, 9] },
      { name: "Moves 10-12", label: "Block + Front Kick Combos (right)", moves: [10, 11, 12] },
      { name: "Moves 13-15", label: "Block + Side Kick + Roundhouse (left)", moves: [13, 14, 15] },
      { name: "Moves 16-18", label: "Block + Side Kick + Roundhouse (right)", moves: [16, 17, 18] },
    ],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK IL JANG (태극 일장) — High White Belt
  // Trigram: Geon (Heaven) — the beginning of all things
  // TODO: Get verified sequence from Glen
  // ═══════════════════════════════════════════
  taegeukIlJang: {
    name: "Taegeuk Il Jang",
    korean: "태극 일장",
    belt: "high-white",
    trigram: "Geon (Heaven) — The beginning",
    totalMoves: 18,
    moves: [],  // TODO: awaiting verified sequence
    sections: [],
  },

  // ═══════════════════════════════════════════
  // KICHO (기본) — White Belt
  // Basic form: blocks, stances, punches
  // TODO: Get verified sequence from Glen
  // ═══════════════════════════════════════════
  kicho: {
    name: "Kicho",
    korean: "기본",
    belt: "white",
    trigram: null,
    totalMoves: null,  // varies by school
    moves: [],  // TODO: awaiting verified sequence
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK SAM JANG (태극 삼장) — High Yellow Belt
  // Trigram: Ri (Fire/Sun)
  // TODO: Get verified sequence from Glen
  // ═══════════════════════════════════════════
  taegeukSamJang: {
    name: "Taegeuk Sam Jang",
    korean: "태극 삼장",
    belt: "high-yellow",
    trigram: "Ri (Fire/Sun)",
    totalMoves: 20,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK SA JANG (태극 사장) — Green Belt
  // Trigram: Jin (Thunder)
  // ═══════════════════════════════════════════
  taegeukSaJang: {
    name: "Taegeuk Sa Jang",
    korean: "태극 사장",
    belt: "green",
    trigram: "Jin (Thunder)",
    totalMoves: 20,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK OH JANG (태극 오장) — High Green Belt
  // Trigram: Son (Wind)
  // ═══════════════════════════════════════════
  taegeukOhJang: {
    name: "Taegeuk Oh Jang",
    korean: "태극 오장",
    belt: "high-green",
    trigram: "Son (Wind)",
    totalMoves: 20,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK YOOK JANG (태극 육장) — Blue Belt
  // Trigram: Gam (Water)
  // ═══════════════════════════════════════════
  taegeukYookJang: {
    name: "Taegeuk Yook Jang",
    korean: "태극 육장",
    belt: "blue",
    trigram: "Gam (Water)",
    totalMoves: 19,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK CHIL JANG (태극 칠장) — High Blue Belt
  // Trigram: Gan (Mountain)
  // ═══════════════════════════════════════════
  taegeukChilJang: {
    name: "Taegeuk Chil Jang",
    korean: "태극 칠장",
    belt: "high-blue",
    trigram: "Gan (Mountain)",
    totalMoves: 25,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // TAEGEUK PAL JANG (태극 팔장) — Red Belt
  // Trigram: Gon (Earth)
  // ═══════════════════════════════════════════
  taegeukPalJang: {
    name: "Taegeuk Pal Jang",
    korean: "태극 팔장",
    belt: "red",
    trigram: "Gon (Earth/Yin)",
    totalMoves: 24,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // KORYO (고려) — High Red Belt / 1st Dan
  // ═══════════════════════════════════════════
  koryo: {
    name: "Koryo",
    korean: "고려",
    belt: "high-red",
    trigram: null,
    meaning: "Learned man, Goryeo Dynasty",
    totalMoves: 30,
    moves: [],
    sections: [],
  },

  // ═══════════════════════════════════════════
  // KEUMGANG (금강) — Deputy Black Belt / 2nd Dan
  // ═══════════════════════════════════════════
  keumgang: {
    name: "Keumgang",
    korean: "금강",
    belt: "deputy",
    trigram: null,
    meaning: "Diamond, unbreakable strength",
    totalMoves: 27,
    moves: [],
    sections: [],
  },
};
