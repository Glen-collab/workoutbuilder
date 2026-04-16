// martial-arts-library.js
// Taekwondo & Martial Arts Exercise Library
// Structure mirrors exerciseLibrary.js: category -> subcategory -> exercises
// Supports both WT (World Taekwondo) and ITF systems
// Korean terminology included for authenticity

// ── Belt Definitions (default template — configurable per school) ──
export const defaultBeltSystem = {
  id: 'wt-standard',
  name: 'World Taekwondo (Standard)',
  belts: [
    { id: 'white', name: 'White Belt', color: '#ffffff', textColor: '#333', tier: 1, geup: 10, form: 'Kicho (Basics — blocks, stances, basic kicks)' },
    { id: 'high-white', name: 'High White Belt', color: '#f5f5f5', textColor: '#333', tier: 1, geup: 9, form: 'Taegeuk Il Jang' },
    { id: 'yellow', name: 'Yellow Belt', color: '#FFD700', textColor: '#333', tier: 1, geup: 8, form: 'Taegeuk Ee Jang' },
    { id: 'high-yellow', name: 'High Yellow Belt', color: '#FFC107', textColor: '#333', tier: 1, geup: 7, form: 'Taegeuk Sam Jang' },
    { id: 'green', name: 'Green Belt', color: '#4CAF50', textColor: '#fff', tier: 2, geup: 6, form: 'Taegeuk Sa Jang' },
    { id: 'high-green', name: 'High Green Belt', color: '#388E3C', textColor: '#fff', tier: 2, geup: 5, form: 'Taegeuk Oh Jang' },
    { id: 'blue', name: 'Blue Belt', color: '#2196F3', textColor: '#fff', tier: 3, geup: 4, form: 'Taegeuk Yook Jang' },
    { id: 'high-blue', name: 'High Blue Belt', color: '#1565C0', textColor: '#fff', tier: 3, geup: 3, form: 'Taegeuk Chil Jang' },
    { id: 'red', name: 'Red Belt', color: '#F44336', textColor: '#fff', tier: 4, geup: 2, form: 'Taegeuk Pal Jang' },
    { id: 'high-red', name: 'High Red Belt', color: '#C62828', textColor: '#fff', tier: 4, geup: 1, form: 'Koryo' },
    { id: 'deputy', name: 'Deputy Black Belt', color: '#333', textColor: '#fff', tier: 5, geup: 0, form: 'Keumgang' },
    { id: 'black', name: 'Black Belt', color: '#000', textColor: '#fff', tier: 5, dan: 1, form: 'Taebaek' },
  ],
};

// ── Poomsae / Forms Library ──
export const formsLibrary = {
  kicho: {
    label: 'Kicho (Basic)',
    system: 'WT',
    forms: [
      { name: 'Kicho Il Jang', korean: '기본 일장', moves: 20, level: 'beginner' },
      { name: 'Kicho Ee Jang', korean: '기본 이장', moves: 20, level: 'beginner' },
      { name: 'Kicho Sam Jang', korean: '기본 삼장', moves: 20, level: 'beginner' },
    ],
  },
  taegeuk: {
    label: 'Taegeuk',
    system: 'WT',
    forms: [
      { name: 'Taegeuk Il Jang', korean: '태극 일장', moves: 18, trigram: 'Heaven (Geon)', level: 'color', geup: 8, teaches: 'Basic stances, low block, middle punch, front kick' },
      { name: 'Taegeuk Ee Jang', korean: '태극 이장', moves: 18, trigram: 'Joy/Lake (Tae)', level: 'color', geup: 7, teaches: 'High block, front kick variations, side kick intro' },
      { name: 'Taegeuk Sam Jang', korean: '태극 삼장', moves: 20, trigram: 'Fire/Sun (Ri)', level: 'color', geup: 6, teaches: 'Knife hand block, back stance, front kick + side kick combos' },
      { name: 'Taegeuk Sa Jang', korean: '태극 사장', moves: 20, trigram: 'Thunder (Jin)', level: 'color', geup: 5, teaches: 'Knife hand strike, side kick, twin fist block, balance' },
      { name: 'Taegeuk Oh Jang', korean: '태극 오장', moves: 20, trigram: 'Wind (Son)', level: 'color', geup: 4, teaches: 'Hammer fist, elbow strike, back fist, cross stance' },
      { name: 'Taegeuk Yook Jang', korean: '태극 육장', moves: 19, trigram: 'Water (Gam)', level: 'color', geup: 3, teaches: 'Roundhouse kick combos, single mountain block' },
      { name: 'Taegeuk Chil Jang', korean: '태극 칠장', moves: 25, trigram: 'Mountain (Gan)', level: 'color', geup: 2, teaches: 'Palm block, knee strike, back fist, cross stance kicks' },
      { name: 'Taegeuk Pal Jang', korean: '태극 팔장', moves: 24, trigram: 'Earth (Gon)', level: 'color', geup: 1, teaches: 'Jump front kick, jumping kicks, elbow strikes, full synthesis' },
    ],
  },
  blackBelt: {
    label: 'Black Belt Forms',
    system: 'WT',
    forms: [
      { name: 'Koryo', korean: '고려', moves: 30, dan: 1, meaning: 'Learned man, Goryeo Dynasty' },
      { name: 'Keumgang', korean: '금강', moves: 27, dan: 2, meaning: 'Diamond, unbreakable strength' },
      { name: 'Taebaek', korean: '태백', moves: 26, dan: 3, meaning: 'Sacred mountain, spiritual birthplace' },
      { name: 'Pyongwon', korean: '평원', moves: 25, dan: 4, meaning: 'Open plains, vastness and peace' },
      { name: 'Sipjin', korean: '십진', moves: 31, dan: 5, meaning: 'Decimal, eternal perfection' },
      { name: 'Jitae', korean: '지태', moves: 28, dan: 6, meaning: 'Earth, connection between heaven and earth' },
      { name: 'Cheonkwon', korean: '천권', moves: 27, dan: 7, meaning: 'Sky, limitless piety' },
      { name: 'Hansu', korean: '한수', moves: 27, dan: 8, meaning: 'Water, adaptability and flow' },
      { name: 'Ilyo', korean: '일여', moves: 23, dan: 9, meaning: 'Oneness, unity of mind and body' },
    ],
  },
  itf: {
    label: 'ITF Patterns (Tul)',
    system: 'ITF',
    forms: [
      { name: 'Chon-Ji', korean: '천지', moves: 19, level: 'color', meaning: 'Creation of world' },
      { name: 'Dan-Gun', korean: '단군', moves: 21, level: 'color', meaning: 'Legendary founder of Korea' },
      { name: 'Do-San', korean: '도산', moves: 24, level: 'color', meaning: 'Patriot Ahn Chang-Ho' },
      { name: 'Won-Hyo', korean: '원효', moves: 28, level: 'color', meaning: 'Monk who introduced Buddhism' },
      { name: 'Yul-Gok', korean: '율곡', moves: 38, level: 'color', meaning: 'Philosopher Yi I' },
      { name: 'Joong-Gun', korean: '중근', moves: 32, level: 'color', meaning: 'Patriot Ahn Joong-Gun' },
      { name: 'Toi-Gye', korean: '퇴계', moves: 37, level: 'color', meaning: 'Scholar Yi Hwang' },
      { name: 'Hwa-Rang', korean: '화랑', moves: 29, level: 'color', meaning: 'Youth warriors, Silla Dynasty' },
      { name: 'Choong-Moo', korean: '충무', moves: 30, level: 'color', meaning: 'Admiral Yi Soon-Sin' },
      { name: 'Kwang-Gae', korean: '광개', moves: 39, level: 'black', dan: 1, meaning: 'King who reclaimed territories' },
      { name: 'Po-Eun', korean: '포은', moves: 36, level: 'black', dan: 1, meaning: 'Scholar of unerring loyalty' },
      { name: 'Ge-Baek', korean: '계백', moves: 44, level: 'black', dan: 1, meaning: 'General of severe discipline' },
      { name: 'Tong-Il', korean: '통일', moves: 56, level: 'black', dan: 6, meaning: 'Korean reunification' },
    ],
  },
};

// ── Martial Arts Exercise Categories ──
export const martialArtsCategories = {

  // ═══════════════════════════════════════════
  // KICKS
  // ═══════════════════════════════════════════
  kicks: {
    label: 'Kicks',
    subcategories: {
      foundation: {
        label: 'Foundation Kicks (Tier 1)',
        beltMin: 'white',
        exercises: [
          { name: 'Front Kick', korean: 'Ap Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'ball of foot', notes: 'Snap version — chamber, extend, retract. Push version — drive through.' },
          { name: 'Front Snap Kick', korean: 'Ap Cha Busigi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'ball of foot', notes: 'Quick snap with fast retraction' },
          { name: 'Front Push Kick', korean: 'Mireo Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/ball', notes: 'Drive opponent backward, create distance' },
          { name: 'Roundhouse Kick', korean: 'Dollyo Chagi', movement: ['Rotational'], tier: 1, target: ['body', 'head'], tool: 'instep/ball', notes: 'Hip rotation + pivot foot. Most common scoring kick.' },
          { name: 'Side Kick', korean: 'Yeop Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/blade', notes: 'Chamber high, thrust linear. Power kick.' },
          { name: 'Ax Kick (Inside/Out)', korean: 'Naeryeo Chagi', movement: ['Vertical'], tier: 1, target: ['head', 'collarbone'], tool: 'heel', notes: 'Lift inside, chop down outside. Also called downward kick.' },
          { name: 'Ax Kick (Outside/In)', korean: 'Bakkat Naeryeo Chagi', movement: ['Vertical'], tier: 1, target: ['head', 'collarbone'], tool: 'heel', notes: 'Lift outside, chop down inside.' },
          { name: 'Step Behind Side Kick', korean: 'Dwi Yeop Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/blade', notes: 'Step rear foot behind front, fire side kick. Entry technique.' },
        ],
      },
      movement: {
        label: 'Movement Kicks (Tier 2)',
        beltMin: 'green',
        exercises: [
          { name: 'Skip Roundhouse Kick', korean: 'Ttwieo Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Front leg skip for speed and distance. Hard to read.' },
          { name: 'Switch Roundhouse Kick', korean: 'Bandae Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Switch stance, fire with new back leg. Confuses opponent.' },
          { name: 'Step-in Roundhouse Kick', korean: 'Deureo Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Step forward to close distance, then roundhouse.' },
          { name: 'Skip Front Kick', korean: 'Ttwieo Ap Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'ball of foot', notes: 'Front leg skip into front kick. Fast entry.' },
          { name: 'Skip Side Kick', korean: 'Ttwieo Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'blade/heel', notes: 'Skip forward into side kick. Distance closer.' },
          { name: 'Reverse Side Kick', korean: 'Bandae Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'heel', notes: 'Fire side kick from rear leg without stepping.' },
          { name: 'Spin Kick (Back Kick)', korean: 'Dwi Chagi', movement: ['Rotational'], tier: 2, target: ['body'], tool: 'heel', notes: 'Spin 180, thrust heel backward. Powerful counter kick.' },
          { name: 'Inside Crescent Kick', korean: 'An Chagi', movement: ['Circular'], tier: 2, target: ['head'], tool: 'instep/sole', notes: 'Inward sweeping arc. Can be used as block.' },
          { name: 'Outside Crescent Kick', korean: 'Bakkat Chagi', movement: ['Circular'], tier: 2, target: ['head'], tool: 'blade', notes: 'Outward sweeping arc.' },
          { name: 'Switch Back Roundhouse Kick', korean: 'Bandae Dwi Dollyo', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Switch stance then back roundhouse. Deceptive.' },
          { name: 'Slide-in Side Kick', korean: 'Mireo Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'blade/heel', notes: 'Slide rear foot forward, fire side kick with front leg.' },
        ],
      },
      airGame: {
        label: 'Air Game Kicks (Tier 3)',
        beltMin: 'blue',
        exercises: [
          { name: 'Hook Kick', korean: 'Huryeo Chagi', movement: ['Circular'], tier: 3, target: ['head'], tool: 'heel/sole', notes: 'Chamber like side kick, redirect around. Deceptive path.' },
          { name: 'Jump Hook Kick', korean: 'Ttwieo Huryeo Chagi', movement: ['Circular'], tier: 3, target: ['head'], tool: 'heel', notes: 'Jump to close distance, hook kick at apex.' },
          { name: 'Jump Roundhouse Kick', korean: 'Ttwieo Dollyo Chagi', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'instep', notes: 'Jump and roundhouse. Height = power.' },
          { name: 'Jump Side Kick', korean: 'Ttwieo Yeop Chagi', movement: ['Linear'], tier: 3, target: ['body'], tool: 'blade/heel', notes: 'Jump and side kick. Board break staple.' },
          { name: 'Jump Front Kick', korean: 'Ttwieo Ap Chagi', movement: ['Linear'], tier: 3, target: ['body', 'head'], tool: 'ball of foot', notes: 'Both feet leave ground, snap front kick.' },
          { name: 'Spinning Wheel Kick', korean: 'Dwi Huryeo Chagi', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'heel/sole', notes: 'Full 360 rotation with heel whip to head.' },
          { name: 'Double Kick (same leg)', korean: 'Geodeup Chagi', movement: ['Mixed'], tier: 3, target: ['body', 'head'], tool: 'varies', notes: 'Two kicks same leg without putting foot down. E.g., front kick + roundhouse.' },
          { name: 'Switch Inner Wheel Kick', korean: 'Bandae An Huryeo', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'sole', notes: 'Switch stance, inner wheel kick path.' },
          { name: 'Jump Step Behind Side Kick', korean: 'Ttwieo Dwi Yeop Chagi', movement: ['Linear'], tier: 3, target: ['body'], tool: 'blade/heel', notes: 'Jump into step behind, fire side kick.' },
        ],
      },
      spinPower: {
        label: 'Spin Power Kicks (Tier 4)',
        beltMin: 'red',
        exercises: [
          { name: 'Spinning Hook Kick', korean: 'Dwi Huryeo Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'heel', notes: 'Spin 360, hook kick at end. KO kick.' },
          { name: '360 Roundhouse Kick', korean: '360 Dollyo Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'instep', notes: 'Full rotation + roundhouse. Highlight reel.' },
          { name: 'Flying Side Kick', korean: 'Twi-myo Yeop Chagi', movement: ['Linear'], tier: 4, target: ['body'], tool: 'blade/heel', notes: 'Running approach, launch, extend side kick in air.' },
          { name: 'Double Roundhouse (same leg)', korean: 'Geodeup Dollyo Chagi', movement: ['Rotational'], tier: 4, target: ['body', 'head'], tool: 'instep', notes: 'Two roundhouses same leg — body then head.' },
          { name: 'Spinning Cross Kick', korean: 'Dwi Bakkat Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'heel', notes: 'Spin with crossing leg path. Unexpected angle.' },
          { name: 'Jump Switch Front Kick', korean: 'Ttwieo Bandae Ap Chagi', movement: ['Linear'], tier: 4, target: ['body', 'head'], tool: 'ball of foot', notes: 'Jump, switch legs in air, front kick with new lead.' },
        ],
      },
      elite: {
        label: 'Elite Kicks (Tier 5)',
        beltMin: 'deputy',
        exercises: [
          { name: 'Tornado Kick', korean: 'Dolge Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'instep', notes: 'Step, rotate, jump, roundhouse at apex. Signature technique.' },
          { name: 'Tornado Wheel Kick', korean: 'Dolge Huryeo Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'heel', notes: 'Tornado setup but finishes with wheel kick path.' },
          { name: '360 Spin Kick', korean: '360 Dwi Chagi', movement: ['Rotational'], tier: 5, target: ['body'], tool: 'heel', notes: 'Full 360 rotation into back kick. Massive power.' },
          { name: 'Thunder Kick', korean: 'Cheon-dung Chagi', movement: ['Vertical'], tier: 5, target: ['head'], tool: 'heel', notes: 'Turning, jumping ax kick. Dramatic and powerful.' },
          { name: 'Jump Reverse Spin Kick', korean: 'Ttwieo Bandae Dwi Chagi', movement: ['Rotational'], tier: 5, target: ['body'], tool: 'heel', notes: 'Jump and reverse direction into spin kick.' },
          { name: 'Jump Spinning Hook Kick', korean: 'Ttwieo Dwi Huryeo Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'heel', notes: 'Jump + 360 + hook kick. High difficulty.' },
          { name: 'Triple Kick Chain', korean: 'Sam-ryeon Chagi', movement: ['Mixed'], tier: 5, target: ['body', 'head'], tool: 'varies', notes: 'Three kicks same leg without setting down.' },
          { name: 'Jumping Reverse Side Kick', korean: 'Ttwieo Bandae Yeop Chagi', movement: ['Linear'], tier: 5, target: ['body'], tool: 'heel', notes: 'Jump, spin, side kick. Power break technique.' },
        ],
      },
      specialty: {
        label: 'Specialty Kicks (Tier 6)',
        beltMin: 'black',
        exercises: [
          { name: '540 Roundhouse Kick', korean: '540 Dollyo Chagi', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'instep', notes: '1.5 rotations in air. Competition/demo.' },
          { name: '720 Kick', korean: '720 Chagi', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'varies', notes: '2 full rotations in air. Elite tricking.' },
          { name: 'Butterfly Kick', korean: 'Nabi Chagi', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'instep', notes: 'Horizontal rotation, body parallel to ground.' },
          { name: 'Corkscrew Kick', korean: 'Naeseon Chagi', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'heel', notes: 'Spinning with corkscrew body rotation.' },
          { name: 'Double Jump Roundhouse', korean: 'Ee-jung Ttwieo Dollyo', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'instep', notes: 'Two roundhouses in a single jump.' },
          { name: 'Jump Spinning Wheel Kick', korean: 'Ttwieo Dwi Huryeo', movement: ['Rotational'], tier: 6, target: ['head'], tool: 'heel', notes: 'Airborne spinning wheel kick. Maximum difficulty.' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // HAND TECHNIQUES
  // ═══════════════════════════════════════════
  handTechniques: {
    label: 'Hand Techniques',
    subcategories: {
      punches: {
        label: 'Punches',
        exercises: [
          { name: 'Jab', korean: 'Ap Jireugi', movement: ['Linear'], target: ['face', 'body'] },
          { name: 'Cross', korean: 'Bandae Jireugi', movement: ['Linear'], target: ['face', 'body'], notes: 'Reverse punch, power hand' },
          { name: 'Hook', korean: 'Dollyo Jireugi', movement: ['Rotational'], target: ['face', 'body'] },
          { name: 'Uppercut', korean: 'Chi Jireugi', movement: ['Vertical'], target: ['chin', 'body'] },
          { name: 'Middle Punch', korean: 'Momtong Jireugi', movement: ['Linear'], target: ['body'] },
          { name: 'High Punch', korean: 'Eolgul Jireugi', movement: ['Linear'], target: ['face'] },
          { name: 'Low Punch', korean: 'Arae Jireugi', movement: ['Linear'], target: ['body'] },
          { name: 'Double Punch', korean: 'Dujumeok Jireugi', movement: ['Linear'], target: ['body'], notes: 'Both fists strike simultaneously' },
          { name: 'Reverse Punch', korean: 'Bandae Jireugi', movement: ['Linear'], target: ['body'], notes: 'From front stance, rear hand punch' },
        ],
      },
      strikes: {
        label: 'Strikes',
        exercises: [
          { name: 'Knife Hand Strike', korean: 'Sonnal Chigi', movement: ['Linear'], target: ['neck', 'temple'], tool: 'knife edge of hand' },
          { name: 'Ridge Hand Strike', korean: 'Sonnal Dung Chigi', movement: ['Circular'], target: ['temple'], tool: 'inner edge of hand' },
          { name: 'Back Fist Strike', korean: 'Deungjumeok Chigi', movement: ['Circular'], target: ['face', 'temple'], tool: 'back of fist' },
          { name: 'Hammer Fist Strike', korean: 'Mejumeok Chigi', movement: ['Vertical'], target: ['collarbone', 'nose'], tool: 'bottom of fist' },
          { name: 'Elbow Strike (Forward)', korean: 'Palkup Ap Chigi', movement: ['Linear'], target: ['face', 'body'], tool: 'elbow' },
          { name: 'Elbow Strike (Side)', korean: 'Palkup Yeop Chigi', movement: ['Rotational'], target: ['body'], tool: 'elbow' },
          { name: 'Elbow Strike (Rear)', korean: 'Palkup Dwi Chigi', movement: ['Linear'], target: ['body'], tool: 'elbow' },
          { name: 'Elbow Strike (Downward)', korean: 'Palkup Naeryeo Chigi', movement: ['Vertical'], target: ['spine', 'head'], tool: 'elbow' },
          { name: 'Palm Strike', korean: 'Batangson Chigi', movement: ['Linear'], target: ['face', 'body'], tool: 'palm heel' },
          { name: 'Knee Strike', korean: 'Mureup Chigi', movement: ['Vertical'], target: ['body', 'head'], tool: 'knee' },
          { name: 'Spear Hand Thrust', korean: 'Pyonson Keut Jjireugi', movement: ['Linear'], target: ['throat', 'solar plexus'], tool: 'fingertips' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // BLOCKS
  // ═══════════════════════════════════════════
  blocks: {
    label: 'Blocks',
    subcategories: {
      basic: {
        label: 'Basic Blocks',
        exercises: [
          { name: 'Low Block', korean: 'Arae Makgi', movement: ['Defensive'], notes: 'Block low attacks, front stance' },
          { name: 'Middle Block (Inside/Out)', korean: 'An Momtong Makgi', movement: ['Defensive'], notes: 'Block middle body attacks from inside out' },
          { name: 'Middle Block (Outside/In)', korean: 'Bakat Momtong Makgi', movement: ['Defensive'], notes: 'Block middle body attacks from outside in' },
          { name: 'High Block', korean: 'Eolgul Makgi', movement: ['Defensive'], notes: 'Block overhead attacks' },
          { name: 'Knife Hand Block', korean: 'Sonnal Makgi', movement: ['Defensive'], notes: 'Open hand block, back stance. Key form technique.' },
          { name: 'Palm Block', korean: 'Batangson Makgi', movement: ['Defensive'], notes: 'Open palm catch/deflect. Sparring staple.' },
          { name: 'Inner Palm Block', korean: 'An Batangson Makgi', movement: ['Defensive'], notes: 'Palm redirects from inside out.' },
        ],
      },
      advanced: {
        label: 'Advanced Blocks',
        exercises: [
          { name: 'X-Block (Cross Block)', korean: 'Otgoreo Makgi', movement: ['Defensive'], notes: 'Both forearms crossed. Blocks powerful attacks.' },
          { name: 'Double Forearm Block', korean: 'Geodeureo Makgi', movement: ['Defensive'], notes: 'Supporting block — one arm reinforces the other' },
          { name: 'Spreading Block', korean: 'Hecheo Makgi', movement: ['Defensive'], notes: 'Both arms spread outward simultaneously' },
          { name: 'Mountain Block', korean: 'Santul Makgi', movement: ['Defensive'], notes: 'W-shape block, both arms up. Koryo poomsae.' },
          { name: 'Scissors Block', korean: 'Kawi Makgi', movement: ['Defensive'], notes: 'One high, one low simultaneously' },
          { name: 'Pressing Block', korean: 'Nulleo Makgi', movement: ['Defensive'], notes: 'Push down to block low kicks' },
          { name: 'Check Kick Block', korean: 'Cha Makgi', movement: ['Defensive'], notes: 'Lift knee to block incoming kick. Sparring essential.' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // STANCES
  // ═══════════════════════════════════════════
  stances: {
    label: 'Stances',
    subcategories: {
      basic: {
        label: 'Basic Stances',
        exercises: [
          { name: 'Attention Stance', korean: 'Charyeot Seogi', notes: 'Heels together, toes slightly out. Protocol stance.' },
          { name: 'Ready Stance', korean: 'Junbi Seogi', notes: 'Feet shoulder width, fists at waist. Start of forms.' },
          { name: 'Front Stance', korean: 'Ap Kubi Seogi', notes: 'Long forward step, 70% weight front. Power stance.' },
          { name: 'Back Stance', korean: 'Dwi Kubi Seogi', notes: '70% weight rear. Defensive, quick front kick access.' },
          { name: 'Horse Riding Stance', korean: 'Juchum Seogi', notes: 'Wide squat stance. Stability and power.' },
          { name: 'Fighting Stance', korean: 'Gyeorugi Seogi', notes: 'Sparring stance. Mobile, balanced, hands up.' },
          { name: 'Walking Stance', korean: 'Ap Seogi', notes: 'Short upright step. Natural movement.' },
        ],
      },
      advanced: {
        label: 'Advanced Stances',
        exercises: [
          { name: 'Tiger Stance (Cat Stance)', korean: 'Beom Seogi', notes: '90% rear, front foot on ball. Quick front kick.' },
          { name: 'Crane Stance', korean: 'Hakdari Seogi', notes: 'One foot on inner knee. Balance technique.' },
          { name: 'Cross Stance', korean: 'Kkoa Seogi', notes: 'Legs crossed. Transition stance in forms.' },
          { name: 'Closed Stance', korean: 'Moa Seogi', notes: 'Feet together. Protocol/transition.' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // SPARRING COMBINATIONS
  // ═══════════════════════════════════════════
  sparring: {
    label: 'Sparring',
    subcategories: {
      offensive: {
        label: 'Offensive Combinations',
        exercises: [
          // White belt level
          { name: 'Single Front Kick to Body', tier: 1, beltMin: 'white', notes: 'Learn distance management' },
          { name: 'Single Roundhouse to Body', tier: 1, beltMin: 'white', notes: 'Learn timing' },
          { name: 'Jab-Cross Entry, Front Kick Exit', tier: 1, beltMin: 'white', notes: 'Hands open, feet close' },
          // Yellow belt level
          { name: 'Step-in Roundhouse (Gap Close)', tier: 1, beltMin: 'yellow', notes: 'Close distance with power' },
          { name: 'Front Kick Feint, Roundhouse', tier: 1, beltMin: 'yellow', notes: 'Level change deception' },
          { name: 'Side Kick to Body (Push Back)', tier: 1, beltMin: 'yellow', notes: 'Create space' },
          // Green belt level
          { name: 'Skip Roundhouse (Fast Entry)', tier: 2, beltMin: 'green', notes: 'Hard to read approach' },
          { name: 'Switch Roundhouse', tier: 2, beltMin: 'green', notes: 'Change lead, confuse opponent' },
          { name: 'Roundhouse + Spin Kick', tier: 2, beltMin: 'green', notes: 'Set up spin with first kick' },
          { name: 'Double Roundhouse (Touch + Power)', tier: 2, beltMin: 'green', notes: 'Body then head' },
          // Blue belt level
          { name: 'Roundhouse Feint Low, Hook Kick High', tier: 3, beltMin: 'blue', notes: 'Same chamber, different destination' },
          { name: 'Jump Hook Kick (Distance Close)', tier: 3, beltMin: 'blue', notes: 'Close distance in the air' },
          { name: 'Roundhouse + Switch Roundhouse + Hook Kick', tier: 3, beltMin: 'blue', notes: '3-kick chain' },
          { name: 'Spinning Wheel After Jam', tier: 3, beltMin: 'blue', notes: 'Opponent crowds you' },
          // Red belt level
          { name: 'Roundhouse, Roundhouse, Spinning Hook', tier: 4, beltMin: 'red', notes: 'Set up, set up, finish' },
          { name: 'Skip Roundhouse Feint, 360 Roundhouse', tier: 4, beltMin: 'red', notes: 'Sell the fake' },
          { name: 'Back Roundhouse + Spinning Hook', tier: 4, beltMin: 'red', notes: 'Overwhelm' },
          { name: 'Flying Side Kick (Gap Closer)', tier: 4, beltMin: 'red', notes: 'Explosive entry' },
          // Black belt level
          { name: 'Roundhouse + Spin Kick + 360 Roundhouse', tier: 5, beltMin: 'black', notes: '3-level pressure' },
          { name: 'Skip Out, Spinning Cross Kick', tier: 5, beltMin: 'black', notes: 'Create space, attack from distance' },
          { name: 'Tornado Kick After Jam', tier: 5, beltMin: 'black', notes: 'Opponent crowds, you launch' },
          { name: 'Freestyle — Any Kick Into Any Spin', tier: 5, beltMin: 'black', notes: 'Read and react' },
        ],
      },
      defensive: {
        label: 'Defensive Combinations',
        exercises: [
          // White belt level
          { name: 'Step Back, Check Kick', tier: 1, beltMin: 'white', notes: 'Lift knee to block incoming kick' },
          { name: 'Step Back, Counter Roundhouse', tier: 1, beltMin: 'white', notes: 'Evade then fire' },
          { name: 'Catch Front Kick, Counter Roundhouse', tier: 1, beltMin: 'white', notes: 'Catch and punish' },
          // Yellow belt level
          { name: 'Angle Step (45°), Counter Side Kick', tier: 1, beltMin: 'yellow', notes: 'Off-angle counter' },
          { name: 'Block + Immediate Counter', tier: 1, beltMin: 'yellow', notes: 'No delay between block and attack' },
          // Green belt level
          { name: 'Step Back, Skip Roundhouse Counter', tier: 2, beltMin: 'green', notes: 'Create space, re-enter fast' },
          { name: 'Angle Step, Switch Roundhouse Counter', tier: 2, beltMin: 'green', notes: 'Off-angle switch' },
          { name: 'Spin Kick Counter Off Caught Kick', tier: 2, beltMin: 'green', notes: 'They kick, you spin off it' },
          // Blue belt level
          { name: 'Lean Back, Hook Kick Counter', tier: 3, beltMin: 'blue', notes: 'Opponent overcommits, hook to head' },
          { name: 'Step Lateral, Spinning Wheel Counter', tier: 3, beltMin: 'blue', notes: 'Side step then spin' },
          { name: 'Check Block, Jump Hook Kick', tier: 3, beltMin: 'blue', notes: 'Block then immediately jump kick' },
          // Red belt level
          { name: 'Step Back, Spinning Hook Counter', tier: 4, beltMin: 'red', notes: 'They miss, you spin' },
          { name: 'Catch Roundhouse, Spin Kick Counter', tier: 4, beltMin: 'red', notes: 'Catch and spin' },
          { name: 'Low Block Check, Switch Back Roundhouse', tier: 4, beltMin: 'red', notes: 'Block low, fire high' },
          // Black belt level
          { name: 'Counter With Spin Kicks (High-Level Timing)', tier: 5, beltMin: 'black', notes: 'Counter everything with spins' },
          { name: 'Angle Changes With 360 Kicks', tier: 5, beltMin: 'black', notes: '360 as counter — elite timing' },
          { name: 'Full Freestyle Defense', tier: 5, beltMin: 'black', notes: 'No preset patterns, read the opponent' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // CONDITIONING (MA-specific)
  // ═══════════════════════════════════════════
  conditioning: {
    label: 'MA Conditioning',
    subcategories: {
      kickDrills: {
        label: 'Kicking Drills',
        exercises: [
          { name: 'Front Kick Burnout', duration: '30 sec', notes: 'Nonstop front kicks, each leg. Speed over power.' },
          { name: 'Roundhouse Burnout', duration: '30 sec', notes: 'Nonstop alternating roundhouses. Maintain chamber.' },
          { name: 'Spin Kick Attempts', duration: '20 sec', notes: 'Controlled spin kicks for technique under fatigue.' },
          { name: 'Jump Hook Kick Drill', reps: '10 each leg', notes: 'Focus on height and timing, not speed.' },
          { name: 'Continuous Kicking Flow', duration: '1 min', notes: 'Any kicks, no stopping. Freestyle under fatigue.' },
          { name: 'Alternating Roundhouse Kicks', duration: '30 sec', notes: 'Left-right nonstop. Pivot foot discipline.' },
          { name: 'Double Kick Drill', reps: '5 each leg', notes: 'Two kicks same leg without setting down.' },
          { name: 'Power Roundhouse on Bag', reps: '10', notes: 'Max power each rep. Full hip rotation.' },
        ],
      },
      footwork: {
        label: 'Footwork Drills',
        exercises: [
          { name: 'Shuffle Forward/Back', duration: '30 sec', notes: 'Stay in fighting stance, quick feet' },
          { name: 'Lateral Slide Step', duration: '30 sec', notes: 'Side to side movement, stay low' },
          { name: 'Skip In / Skip Out', duration: '30 sec', notes: 'Fast distance management' },
          { name: 'Switch Stance Drill', reps: '20', notes: 'Rapid stance switches, maintain guard' },
          { name: 'Angle Step Drill', duration: '30 sec', notes: '45° steps off line, both directions' },
          { name: 'Shadow Sparring', duration: '2 min', notes: 'Full movement + kicks + hands. Visualize opponent.' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // ONE-STEP SPARRING
  // ═══════════════════════════════════════════
  oneStep: {
    label: 'One-Step Sparring',
    subcategories: {
      basic: {
        label: 'Basic One-Step',
        exercises: [
          { name: 'Step Back, Down Block, Reverse Punch', beltMin: 'white', attacker: 'Middle punch', notes: 'Most basic defense + counter' },
          { name: 'Step Back, Middle Block, Reverse Punch', beltMin: 'white', attacker: 'Middle punch', notes: 'Block center, counter center' },
          { name: 'Step Back, High Block, Reverse Punch', beltMin: 'white', attacker: 'Middle punch', notes: 'Block high, counter center' },
        ],
      },
      intermediate: {
        label: 'Intermediate One-Step',
        exercises: [
          { name: 'Skip Side Step + Palm Block + Double Punch + Roundhouse', beltMin: 'yellow', attacker: 'Middle punch', notes: 'Angle off, counter with combo' },
          { name: 'Front Leg Double Kick (Front + Side)', beltMin: 'green', attacker: 'Step forward punch', notes: 'Double kick without setting down' },
          { name: 'Skip Side + Palm Block + Roundhouse + Hook Kick', beltMin: 'blue', attacker: 'Middle punch', notes: 'Angle off, multi-kick counter' },
        ],
      },
      advanced: {
        label: 'Advanced One-Step',
        exercises: [
          { name: 'Step to Side vs Roundhouse, Side Kick Counter', beltMin: 'high-brown', attacker: 'Roundhouse kick', notes: 'Defend kicks, not just punches' },
          { name: 'Step Back vs Spin Kick, Spin Kick Counter', beltMin: 'red', attacker: 'Spin kick', notes: 'Counter spin with spin' },
          { name: 'Crescent Kick Block + Sweep to Ground + Punch', beltMin: 'deputy', attacker: 'Middle punch', notes: 'Advanced takedown sequence' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // BOARD BREAKING
  // ═══════════════════════════════════════════
  breaking: {
    label: 'Board Breaking',
    subcategories: {
      techniques: {
        label: 'Breaking Techniques',
        exercises: [
          { name: 'Hammer Fist Break', beltMin: 'white', type: 'hand', notes: 'First break — downward strike' },
          { name: 'Front Snap Kick Break', beltMin: 'yellow', type: 'kick', notes: 'Ball of foot through board' },
          { name: 'Step Behind Side Kick Break', beltMin: 'white', type: 'kick', notes: 'Entry + side kick power' },
          { name: 'Step-in Axe Kick Break', beltMin: 'yellow', type: 'kick', notes: 'Height + downward power' },
          { name: 'Skipping Side Kick Break', beltMin: 'green', type: 'kick', notes: 'Forward momentum + thrust' },
          { name: 'Slide-in Side Kick Break', beltMin: 'green', type: 'kick', notes: 'Slide forward, power through' },
          { name: 'Ax Kick Break', beltMin: 'blue', type: 'kick', notes: 'Vertical chop through board' },
          { name: 'Spin Kick Break', beltMin: 'blue', type: 'kick', notes: '180 rotation + heel strike' },
          { name: 'Reverse Side Kick Break', beltMin: 'brown', type: 'kick', notes: 'Rear leg power, no step' },
          { name: 'Jump Front Snap Kick Break', beltMin: 'high-brown', type: 'kick', notes: 'Airborne + snap' },
          { name: 'Skip Side Kick Break', beltMin: 'red', type: 'kick', notes: 'Forward skip into power' },
          { name: 'Flying Side Kick Break', beltMin: 'red', type: 'kick', notes: 'Full flight + extension' },
          { name: 'Jumping Reverse Side Kick Break', beltMin: 'deputy', type: 'kick', notes: 'Jump + spin + side kick' },
          { name: 'Spinning Cross Kick Break', beltMin: 'black', type: 'kick', notes: 'Elite rotation + power' },
          { name: 'Front Punch + Hook Kick Break (2 boards)', beltMin: 'deputy', type: 'combo', notes: 'Hand break + kick break simultaneously' },
        ],
      },
    },
  },
};

// ── Training Format Templates ──
export const trainingFormats = {
  solo: {
    id: 'solo',
    label: 'Solo / Heavy Bag',
    icon: '🥊',
    description: 'Power + conditioning on bag or BOB',
    defaultSets: 5,
    defaultReps: 8,
  },
  partner: {
    id: 'partner',
    label: 'Partner / Hand-Clap',
    icon: '🤝',
    description: 'Precision, timing, control with partner targets',
    defaultSets: 5,
    defaultReps: 5,
  },
  padLine: {
    id: 'padLine',
    label: 'Coach Pad / Cafeteria',
    icon: '🎯',
    description: 'Speed, pressure, performance — one rep per student, rotate fast',
    defaultSets: 1,
    defaultReps: 1,
  },
};
