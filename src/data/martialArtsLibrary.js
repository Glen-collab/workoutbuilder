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
          { name: 'Front Kick', korean: 'Ap Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'ball of foot', notes: 'Snap version — chamber, extend, retract. Push version — drive through.', youtube: 'https://iframe.videodelivery.net/c181be8ff06a59f7a61b7c7e3059c757' },
          { name: 'Front Snap Kick', korean: 'Ap Cha Busigi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'ball of foot', notes: 'Quick snap with fast retraction', youtube: 'https://iframe.videodelivery.net/61dede7440be82e3757e262784d53ea3' },
          { name: 'Front Push Kick', korean: 'Mireo Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/ball', notes: 'Drive opponent backward, create distance', youtube: 'https://iframe.videodelivery.net/c20134ef1a7d5b95d4308a571dc2848b' },
          { name: 'Roundhouse Kick', korean: 'Dollyo Chagi', movement: ['Rotational'], tier: 1, target: ['body', 'head'], tool: 'instep/ball', notes: 'Hip rotation + pivot foot. Most common scoring kick.', youtube: 'https://iframe.videodelivery.net/c17346bb4e0fb04f11c93136734940fe' },
          { name: 'Side Kick', korean: 'Yeop Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/blade', notes: 'Chamber high, thrust linear. Power kick.', youtube: 'https://iframe.videodelivery.net/82c8ea1fbf9b417cdde16d5ab5fdf322' },
          { name: 'Ax Kick (Inside/Out)', korean: 'Naeryeo Chagi', movement: ['Vertical'], tier: 1, target: ['head', 'collarbone'], tool: 'heel', notes: 'Lift inside, chop down outside. Also called downward kick.', youtube: 'https://iframe.videodelivery.net/6120d74612a009d462a4b365d0866a55' },
          { name: 'Ax Kick (Outside/In)', korean: 'Bakkat Naeryeo Chagi', movement: ['Vertical'], tier: 1, target: ['head', 'collarbone'], tool: 'heel', notes: 'Lift outside, chop down inside.', youtube: 'https://iframe.videodelivery.net/d72b7cb11f7036c77a066fb82d4e30bd' },
          { name: 'Step Behind Side Kick', korean: 'Dwi Yeop Chagi', movement: ['Linear'], tier: 1, target: ['body'], tool: 'heel/blade', notes: 'Step rear foot behind front, fire side kick. Entry technique.', youtube: 'https://iframe.videodelivery.net/4c1306c148fe7b94bd44b4d2d0336f7e' },
        ],
      },
      movement: {
        label: 'Movement Kicks (Tier 2)',
        beltMin: 'green',
        exercises: [
          { name: 'Skip Roundhouse Kick', korean: 'Ttwieo Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Front leg skip for speed and distance. Hard to read.', youtube: 'https://iframe.videodelivery.net/cb43ae603a302ef3a4aaf95128e7539e' },
          { name: 'Switch Roundhouse Kick', korean: 'Bandae Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Switch stance, fire with new back leg. Confuses opponent.', youtube: 'https://iframe.videodelivery.net/7458f8ff1072036f032a97fbae5a8539' },
          { name: 'Step-in Roundhouse Kick', korean: 'Deureo Dollyo Chagi', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Step forward to close distance, then roundhouse.', youtube: 'https://iframe.videodelivery.net/0ac2ce4c2c672fa6579f62b22b92d361' },
          { name: 'Skip Front Kick', korean: 'Ttwieo Ap Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'ball of foot', notes: 'Front leg skip into front kick. Fast entry.', youtube: 'https://iframe.videodelivery.net/79249a7259a04c3da3bb48508efad0b9' },
          { name: 'Skip Side Kick', korean: 'Ttwieo Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'blade/heel', notes: 'Skip forward into side kick. Distance closer.' },
          { name: 'Reverse Side Kick', korean: 'Bandae Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'heel', notes: 'Fire side kick from rear leg without stepping.' },
          { name: 'Spin Kick (Back Kick)', korean: 'Dwi Chagi', movement: ['Rotational'], tier: 2, target: ['body'], tool: 'heel', notes: 'Spin 180, thrust heel backward. Powerful counter kick.' },
          { name: 'Inside Crescent Kick', korean: 'An Chagi', movement: ['Circular'], tier: 2, target: ['head'], tool: 'instep/sole', notes: 'Inward sweeping arc. Can be used as block.', youtube: 'https://iframe.videodelivery.net/3e6cd119b10faa37ab95bf9fedd6eed1' },
          { name: 'Outside Crescent Kick', korean: 'Bakkat Chagi', movement: ['Circular'], tier: 2, target: ['head'], tool: 'blade', notes: 'Outward sweeping arc.', youtube: 'https://iframe.videodelivery.net/893de3191f2946a6efc02efe91b4a198' },
          { name: 'Switch Back Roundhouse Kick', korean: 'Bandae Dwi Dollyo', movement: ['Rotational'], tier: 2, target: ['body', 'head'], tool: 'instep', notes: 'Switch stance then back roundhouse. Deceptive.', youtube: 'https://iframe.videodelivery.net/1c45d7103a631b16bac7e181525884fe' },
          { name: 'Slide-in Side Kick', korean: 'Mireo Yeop Chagi', movement: ['Linear'], tier: 2, target: ['body'], tool: 'blade/heel', notes: 'Slide rear foot forward, fire side kick with front leg.', youtube: 'https://iframe.videodelivery.net/883bcfc258d80b1d1290fae6c8f9a123' },
        ],
      },
      airGame: {
        label: 'Air Game Kicks (Tier 3)',
        beltMin: 'blue',
        exercises: [
          { name: 'Hook Kick', korean: 'Huryeo Chagi', movement: ['Circular'], tier: 3, target: ['head'], tool: 'heel/sole', notes: 'Chamber like side kick, redirect around. Deceptive path.', youtube: 'https://iframe.videodelivery.net/5d7180e1bbdf08daf380427c33df9ac8' },
          { name: 'Jump Hook Kick', korean: 'Ttwieo Huryeo Chagi', movement: ['Circular'], tier: 3, target: ['head'], tool: 'heel', notes: 'Jump to close distance, hook kick at apex.', youtube: 'https://iframe.videodelivery.net/6d740b1bd0f061a7436c97f45026baba' },
          { name: 'Jump Roundhouse Kick', korean: 'Ttwieo Dollyo Chagi', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'instep', notes: 'Jump and roundhouse. Height = power.', youtube: 'https://iframe.videodelivery.net/d50b18ffda04be204a8ef81122f19917' },
          { name: 'Jump Side Kick', korean: 'Ttwieo Yeop Chagi', movement: ['Linear'], tier: 3, target: ['body'], tool: 'blade/heel', notes: 'Jump and side kick. Board break staple.', youtube: 'https://iframe.videodelivery.net/1168f5fa9950e3905e948fa72e0283c3' },
          { name: 'Jump Front Kick', korean: 'Ttwieo Ap Chagi', movement: ['Linear'], tier: 3, target: ['body', 'head'], tool: 'ball of foot', notes: 'Both feet leave ground, snap front kick.', youtube: 'https://iframe.videodelivery.net/531d8d2799454763a22cadc8b05213fe' },
          { name: 'Spinning Wheel Kick', korean: 'Dwi Huryeo Chagi', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'heel/sole', notes: 'Full 360 rotation with heel whip to head.', youtube: 'https://iframe.videodelivery.net/e1493237a78226672b2cf88e8ebf4d34' },
          { name: 'Double Kick (same leg)', korean: 'Geodeup Chagi', movement: ['Mixed'], tier: 3, target: ['body', 'head'], tool: 'varies', notes: 'Two kicks same leg without putting foot down. E.g., front kick + roundhouse.', youtube: 'https://iframe.videodelivery.net/fe6d9dc0a15b644731a9b6c3cf336616' },
          { name: 'Switch Inner Wheel Kick', korean: 'Bandae An Huryeo', movement: ['Rotational'], tier: 3, target: ['head'], tool: 'sole', notes: 'Switch stance, inner wheel kick path.', youtube: 'https://iframe.videodelivery.net/e42c7d3f94be60a9f062b6ba70eaebbb' },
          { name: 'Jump Step Behind Side Kick', korean: 'Ttwieo Dwi Yeop Chagi', movement: ['Linear'], tier: 3, target: ['body'], tool: 'blade/heel', notes: 'Jump into step behind, fire side kick.', youtube: 'https://iframe.videodelivery.net/4ad0e39760be17650eae4604e4f6a38d' },
        ],
      },
      spinPower: {
        label: 'Spin Power Kicks (Tier 4)',
        beltMin: 'red',
        exercises: [
          { name: 'Spinning Hook Kick', korean: 'Dwi Huryeo Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'heel', notes: 'Spin 360, hook kick at end. KO kick.', youtube: 'https://iframe.videodelivery.net/041710e95baefb56287bc66e6491a0e6' },
          { name: '360 Roundhouse Kick', korean: '360 Dollyo Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'instep', notes: 'Full rotation + roundhouse. Highlight reel.', youtube: 'https://iframe.videodelivery.net/1690876867f019d60dabf8df9c17b050' },
          { name: 'Flying Side Kick', korean: 'Twi-myo Yeop Chagi', movement: ['Linear'], tier: 4, target: ['body'], tool: 'blade/heel', notes: 'Running approach, launch, extend side kick in air.', youtube: 'https://iframe.videodelivery.net/117975435ddedc9b790840b69288b359' },
          { name: 'Double Roundhouse (same leg)', korean: 'Geodeup Dollyo Chagi', movement: ['Rotational'], tier: 4, target: ['body', 'head'], tool: 'instep', notes: 'Two roundhouses same leg — body then head.', youtube: 'https://iframe.videodelivery.net/92371289327051eacf24cb7ebf8853f5' },
          { name: 'Spinning Cross Kick', korean: 'Dwi Bakkat Chagi', movement: ['Rotational'], tier: 4, target: ['head'], tool: 'heel', notes: 'Spin with crossing leg path. Unexpected angle.', youtube: 'https://iframe.videodelivery.net/8e718d8cf6e0cfa030e33038ea22434a' },
          { name: 'Jump Switch Front Kick', korean: 'Ttwieo Bandae Ap Chagi', movement: ['Linear'], tier: 4, target: ['body', 'head'], tool: 'ball of foot', notes: 'Jump, switch legs in air, front kick with new lead.', youtube: 'https://iframe.videodelivery.net/d068fa9d39141ff97e9b87d44f0acf34' },
        ],
      },
      elite: {
        label: 'Elite Kicks (Tier 5)',
        beltMin: 'deputy',
        exercises: [
          { name: 'Tornado Kick', korean: 'Dolge Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'instep', notes: 'Step, rotate, jump, roundhouse at apex. Signature technique.' },
          { name: 'Tornado Wheel Kick', korean: 'Dolge Huryeo Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'heel', notes: 'Tornado setup but finishes with wheel kick path.', youtube: 'https://iframe.videodelivery.net/ba848ecbee1ffcdfd751f867af05c8f9' },
          { name: '360 Spin Kick', korean: '360 Dwi Chagi', movement: ['Rotational'], tier: 5, target: ['body'], tool: 'heel', notes: 'Full 360 rotation into back kick. Massive power.', youtube: 'https://iframe.videodelivery.net/4892a2a5604becfbe676cb814ee2456f' },
          { name: 'Thunder Kick', korean: 'Cheon-dung Chagi', movement: ['Vertical'], tier: 5, target: ['head'], tool: 'heel', notes: 'Turning, jumping ax kick. Dramatic and powerful.' },
          { name: 'Jump Reverse Spin Kick', korean: 'Ttwieo Bandae Dwi Chagi', movement: ['Rotational'], tier: 5, target: ['body'], tool: 'heel', notes: 'Jump and reverse direction into spin kick.', youtube: 'https://iframe.videodelivery.net/87d7d0d1d95c6a2317093604992ea527' },
          { name: 'Jump Spinning Hook Kick', korean: 'Ttwieo Dwi Huryeo Chagi', movement: ['Rotational'], tier: 5, target: ['head'], tool: 'heel', notes: 'Jump + 360 + hook kick. High difficulty.', youtube: 'https://iframe.videodelivery.net/3a258ab7f83619a177feb869ab6b0c79' },
          { name: 'Triple Kick Chain', korean: 'Sam-ryeon Chagi', movement: ['Mixed'], tier: 5, target: ['body', 'head'], tool: 'varies', notes: 'Three kicks same leg without setting down.' },
          { name: 'Jumping Reverse Side Kick', korean: 'Ttwieo Bandae Yeop Chagi', movement: ['Linear'], tier: 5, target: ['body'], tool: 'heel', notes: 'Jump, spin, side kick. Power break technique.', youtube: 'https://iframe.videodelivery.net/c8df72ea41fe2cda6f0944f350dafa18' },
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
          { name: 'Jab', korean: 'Ap Jireugi', movement: ['Linear'], target: ['face', 'body'], youtube: 'https://iframe.videodelivery.net/abf87e57d7c00ed24e63e6a3b20a9840' },
          { name: 'Cross', korean: 'Bandae Jireugi', movement: ['Linear'], target: ['face', 'body'], notes: 'Reverse punch, power hand', youtube: 'https://iframe.videodelivery.net/bd81286e09cfd1a1c8322ab5abffb96d' },
          { name: 'Hook', korean: 'Dollyo Jireugi', movement: ['Rotational'], target: ['face', 'body'], youtube: 'https://iframe.videodelivery.net/290d5f332094f7b119572d4bb4221993' },
          { name: 'Uppercut', korean: 'Chi Jireugi', movement: ['Vertical'], target: ['chin', 'body'], youtube: 'https://iframe.videodelivery.net/16d695dc747f9ec73ce7042ddd210c6e' },
          { name: 'Middle Punch', korean: 'Momtong Jireugi', movement: ['Linear'], target: ['body'], youtube: 'https://iframe.videodelivery.net/bb4612ab60df1edd473bf94f995c6d41' },
          { name: 'High Punch', korean: 'Eolgul Jireugi', movement: ['Linear'], target: ['face'], youtube: 'https://iframe.videodelivery.net/465c0564504076859122efb8d4985e27' },
          { name: 'Low Punch', korean: 'Arae Jireugi', movement: ['Linear'], target: ['body'], youtube: 'https://iframe.videodelivery.net/21dc2ce3ee533f854c2635d732bb08c6' },
          { name: 'Double Punch', korean: 'Dujumeok Jireugi', movement: ['Linear'], target: ['body'], notes: 'Both fists strike simultaneously' },
          { name: 'Reverse Punch', korean: 'Bandae Jireugi', movement: ['Linear'], target: ['body'], notes: 'From front stance, rear hand punch' },
        ],
      },
      strikes: {
        label: 'Strikes',
        exercises: [
          { name: 'Knife Hand Strike', korean: 'Sonnal Chigi', movement: ['Linear'], target: ['neck', 'temple'], tool: 'knife edge of hand', youtube: 'https://iframe.videodelivery.net/8685f63364ab3ff8bb7265f5a3af15c7' },
          { name: 'Ridge Hand Strike', korean: 'Sonnal Dung Chigi', movement: ['Circular'], target: ['temple'], tool: 'inner edge of hand', youtube: 'https://iframe.videodelivery.net/63c69c427753c7997a5a836ff594e105' },
          { name: 'Back Fist Strike', korean: 'Deungjumeok Chigi', movement: ['Circular'], target: ['face', 'temple'], tool: 'back of fist', youtube: 'https://iframe.videodelivery.net/2c8000cd41faf4977e64d0263fcce428' },
          { name: 'Hammer Fist Strike', korean: 'Mejumeok Chigi', movement: ['Vertical'], target: ['collarbone', 'nose'], tool: 'bottom of fist', youtube: 'https://iframe.videodelivery.net/3bf106a134f1f7f67cfaaf2c82344df2' },
          { name: 'Elbow Strike (Forward)', korean: 'Palkup Ap Chigi', movement: ['Linear'], target: ['face', 'body'], tool: 'elbow' },
          { name: 'Elbow Strike Jab', movement: ['Linear'], target: ['face', 'body'], tool: 'elbow', notes: 'Lead elbow, jab-style entry', youtube: 'https://iframe.videodelivery.net/e3607ed38e0728d48ed2bf671e4afb49' },
          { name: 'Elbow Strike (Side)', korean: 'Palkup Yeop Chigi', movement: ['Rotational'], target: ['body'], tool: 'elbow' },
          { name: 'Elbow Strike Cross', movement: ['Rotational'], target: ['face', 'body'], tool: 'elbow', notes: 'Rear elbow, cross-style power', youtube: 'https://iframe.videodelivery.net/28893b3670b157020653704aa40686fc' },
          { name: 'Elbow Strike Uppercut', movement: ['Vertical'], target: ['chin', 'body'], tool: 'elbow', notes: 'Rising elbow under the chin', youtube: 'https://iframe.videodelivery.net/72c536ae995719b3077c0aff53cd8678' },
          { name: 'Elbow Strike (Rear)', korean: 'Palkup Dwi Chigi', movement: ['Linear'], target: ['body'], tool: 'elbow' },
          { name: 'Elbow Strike (Downward)', korean: 'Palkup Naeryeo Chigi', movement: ['Vertical'], target: ['spine', 'head'], tool: 'elbow', youtube: 'https://iframe.videodelivery.net/ebd77725e2d90f690fda3a5a1bc5fb5b' },
          { name: 'Palm Strike', korean: 'Batangson Chigi', movement: ['Linear'], target: ['face', 'body'], tool: 'palm heel', youtube: 'https://iframe.videodelivery.net/0284acfccd39696290fdc3d15c004817' },
          { name: 'Knee Strike', korean: 'Mureup Chigi', movement: ['Vertical'], target: ['body', 'head'], tool: 'knee' },
          { name: 'Knee Strike Switch — Jab Knee', movement: ['Vertical'], target: ['body', 'head'], tool: 'knee', notes: 'Switch step into lead knee, jab-style timing', youtube: 'https://iframe.videodelivery.net/303ba7d29e5c25c5fcb297d27ceda75e' },
          { name: 'Spear Hand Thrust', korean: 'Pyonson Keut Jjireugi', movement: ['Linear'], target: ['throat', 'solar plexus'], tool: 'fingertips', youtube: 'https://iframe.videodelivery.net/b33a850a856d296693eb1a84ea252d1a' },
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
          { name: 'Low Block', korean: 'Arae Makgi', movement: ['Defensive'], notes: 'Block low attacks, front stance', youtube: 'https://iframe.videodelivery.net/2102ac24c1363291b29f37ffa38f3785' },
          { name: 'Down Block', movement: ['Defensive'], notes: 'Downward sweep block — slightly different pose from Low Block', youtube: 'https://iframe.videodelivery.net/83047da0d978a101d07a0e9e94c6942a' },
          { name: 'Middle Block', movement: ['Defensive'], notes: 'Generic middle block', youtube: 'https://iframe.videodelivery.net/7c3395c56a2c41124cf85ffb9737ab47' },
          { name: 'Middle Block (Inside/Out)', korean: 'An Momtong Makgi', movement: ['Defensive'], notes: 'Block middle body attacks from inside out', youtube: 'https://iframe.videodelivery.net/5cb92cab967a6985b5cc284c7d9570fe' },
          { name: 'Middle Block (Outside/In)', korean: 'Bakat Momtong Makgi', movement: ['Defensive'], notes: 'Block middle body attacks from outside in', youtube: 'https://iframe.videodelivery.net/13810470607d2753fdb20313fac3f00c' },
          { name: 'High Block', korean: 'Eolgul Makgi', movement: ['Defensive'], notes: 'Block overhead attacks', youtube: 'https://iframe.videodelivery.net/4b3ac7e4434a147be74e05d77fcf9371' },
          { name: 'Knife Hand Middle Block', korean: 'Sonnal Momtong Makgi', movement: ['Defensive'], notes: 'Open hand middle block, back stance. Key form technique.', youtube: 'https://iframe.videodelivery.net/eb9e82464db15fb31c45b881802ba295' },
          { name: 'Palm Block', korean: 'Batangson Makgi', movement: ['Defensive'], notes: 'Open palm catch/deflect. Sparring staple.', youtube: 'https://iframe.videodelivery.net/35fa52289e43d0a6f1bcc6e823e433b6' },
          { name: 'Inner Palm Block', korean: 'An Batangson Makgi', movement: ['Defensive'], notes: 'Palm redirects from inside out.' },
        ],
      },
      advanced: {
        label: 'Advanced Blocks',
        exercises: [
          { name: 'X-Block (Cross Block)', korean: 'Otgoreo Makgi', movement: ['Defensive'], notes: 'Both forearms crossed. Blocks powerful attacks.', youtube: 'https://iframe.videodelivery.net/ea6f3c5eace376426b55d3900ecc86c6' },
          { name: 'Double Forearm Block', korean: 'Geodeureo Makgi', movement: ['Defensive'], notes: 'Supporting block — one arm reinforces the other' },
          { name: 'Spreading Block', korean: 'Hecheo Makgi', movement: ['Defensive'], notes: 'Both arms spread outward simultaneously' },
          { name: 'Mountain Block', korean: 'Santul Makgi', movement: ['Defensive'], notes: 'W-shape block, both arms up. Koryo poomsae.' },
          { name: 'Scissors Block', korean: 'Kawi Makgi', movement: ['Defensive'], notes: 'One high, one low simultaneously', youtube: 'https://iframe.videodelivery.net/a9ce8994035478765d251c788b957280' },
          { name: 'Pressing Block', korean: 'Nulleo Makgi', movement: ['Defensive'], notes: 'Push down to block low kicks' },
          { name: 'Check Low Kick Shin', movement: ['Defensive'], notes: 'Lift knee/shin to check incoming low kick. Muay Thai / sparring essential.', youtube: 'https://iframe.videodelivery.net/c0a721c82a1df339424eea8148c6fb59' },
          { name: 'Knife Hand Upper Block', movement: ['Defensive'], notes: 'Open hand high block — knife edge catches overhead strike', youtube: 'https://iframe.videodelivery.net/eae11f57793c6de5817fe8510275f5a6' },
          { name: 'Knife Hand Low Block', movement: ['Defensive'], notes: 'Open hand low block — knife edge sweeps down', youtube: 'https://iframe.videodelivery.net/e574aeb25e06dad19bf4d6a2ef3a5034' },
          { name: 'Thai Block High Low', movement: ['Defensive'], notes: 'Muay Thai high-low block combo — defends head and body in sequence', youtube: 'https://iframe.videodelivery.net/30315fdacfa7fae387667f1f574706ba' },
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
          { name: 'Step Back, Down Block, Reverse Punch', tier: 1, beltMin: 'white', attacker: 'Middle punch', notes: 'Most basic defense + counter' },
          { name: 'Step Back, Middle Block, Reverse Punch', tier: 1, beltMin: 'white', attacker: 'Middle punch', notes: 'Block center, counter center' },
          { name: 'Step Back, High Block, Reverse Punch', tier: 1, beltMin: 'white', attacker: 'Middle punch', notes: 'Block high, counter center' },
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
      bagWork: {
        label: 'Bag & Equipment Work',
        exercises: [
          { name: 'Speed Bag', duration: '3 min', notes: 'Rhythm and timing. Keep hands high, small circles. Develops hand-eye coordination and shoulder endurance.' },
          { name: 'Speed Bag Intervals', duration: '30 sec', notes: '30 sec on, 15 sec rest. Max speed.' },
          { name: 'Heavy Bag Jab Rounds', duration: '3 min', notes: 'Jab only. Focus on snap, retraction, and distance.' },
          { name: 'Heavy Bag Cross Rounds', duration: '3 min', notes: 'Cross only. Full hip rotation, push through the bag.' },
          { name: 'Heavy Bag Jab-Cross Rounds', duration: '3 min', notes: 'Jab-cross combos. Work on rhythm and power.' },
          { name: 'Heavy Bag Combo Rounds', duration: '3 min', notes: 'Free combo work. Mix punches, kicks if kickboxing.' },
          { name: 'Heavy Bag Kick Rounds', duration: '3 min', notes: 'Kicks only — roundhouse, front kick, side kick. Full power.' },
          { name: 'Heavy Bag Power Shots', reps: '10', notes: 'Single power strikes. Reset between each. Max force.' },
          { name: 'Double-End Bag', duration: '3 min', notes: 'Timing and accuracy. Move your head. Hit and move.' },
          { name: 'Shadow Boxing', duration: '3 min', notes: 'Full movement. Visualize opponent. Punches, slips, footwork.' },
          { name: 'Shadow Kickboxing', duration: '3 min', notes: 'Full movement with kicks, punches, knees. Visualize opponent.' },
          { name: 'Pad Work Rounds', duration: '3 min', notes: 'Coach calls combos, fighter executes. Speed and accuracy.' },
          { name: 'Body Bag Rounds', duration: '3 min', notes: 'Focus on body shots — hooks, uppercuts to the body.' },
          { name: 'Jump Rope', duration: '3 min', notes: 'Boxer skip, single unders, double unders. Footwork and conditioning.' },
          { name: 'Jump Rope Intervals', duration: '30 sec', notes: '30 sec max speed, 15 sec rest. Conditioning finisher.' },
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
          // White belt — back-leg kick, land front, reverse punch
          { name: 'Fighting Stance, Back Leg Front Snap Kick, Reverse Punch', beltMin: 'white', notes: 'Back leg front snap kick — land front, reverse punch' },
          { name: 'Fighting Stance, Back Leg Roundhouse, Reverse Punch', beltMin: 'white', notes: 'Back leg roundhouse — land front, reverse punch' },
          { name: 'Fighting Stance, Back Leg Side Kick, Reverse Punch', beltMin: 'white', notes: 'Back leg side kick — land front, reverse punch' },
          // High white belt — front-leg kick, reverse punch
          { name: 'Fighting Stance, Front Snap Kick, Reverse Punch', beltMin: 'high-white', notes: 'Front leg front snap kick, reverse punch' },
          { name: 'Fighting Stance, Roundhouse, Reverse Punch', beltMin: 'high-white', notes: 'Front leg roundhouse, reverse punch' },
          { name: 'Fighting Stance, Front Side Kick, Reverse Punch', beltMin: 'high-white', notes: 'Front leg side kick, reverse punch' },
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
          { name: 'Front Leg Front Snap Kick Break', beltMin: 'high-white', type: 'kick', notes: 'Front leg snap — ball of foot through board' },
          { name: 'Cross Punch Break', beltMin: 'high-white', type: 'hand', notes: 'Rear-hand cross punch — power through board' },
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

  // ═══════════════════════════════════════════
  // STRETCHING & YOGA POSES
  // ═══════════════════════════════════════════
  stretching: {
    label: 'Stretching & Yoga',
    subcategories: {
      standingPoses1: {
        label: 'Standing Poses 1',
        exercises: [
          { name: 'Standing Poses 1 (Routine)', sets: 1, reps: 'flow', notes: 'Full Standing Poses 1 routine — flows through all poses in this section', youtube: 'https://iframe.videodelivery.net/4756c7f92ab8ba3a75d5517f093244f9' },
          { name: 'Downward Dog', sets: 1, reps: '30 sec', notes: 'Hands shoulder width, press heels toward floor, flat back', youtube: 'https://iframe.videodelivery.net/0f89e64e90e917f58882a3754562c2be' },
          { name: 'Pushup Seal Stretch', sets: 1, reps: '30 sec', notes: 'From pushup position, drop hips, press chest up, arms straight', youtube: 'https://iframe.videodelivery.net/a852e6dc2e8ee509b8ec21870f890e67' },
          { name: 'Mountain Pose', sets: 1, reps: '30 sec', notes: 'Stand tall, feet together, arms at sides, shoulders back and down', youtube: 'https://iframe.videodelivery.net/69005f5a16c917b94dd90d60281d73a8' },
          { name: 'Warrior I', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Keep hips forward, arms overhead. Lunge position, back foot angled.', youtube: 'https://iframe.videodelivery.net/a524bc5be6510de6f3c5c4d10a82204b' },
          { name: 'Warrior II', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Open hips up. Arms parallel to floor, gaze over front hand.', youtube: 'https://iframe.videodelivery.net/a05478a0524f9db8969bf00e931916b2' },
          { name: 'Extended Side Angle', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Triangle but bend knee. Hand on ground or thigh, reach overhead.', youtube: 'https://iframe.videodelivery.net/490679d1430dca9c7f692c247cda7135' },
        ],
      },
      standingPoses2: {
        label: 'Standing Poses 2',
        exercises: [
          { name: 'Standing Poses 2 (Routine)', sets: 1, reps: 'flow', notes: 'Full Standing Poses 2 routine — flows through all poses in this section', youtube: 'https://iframe.videodelivery.net/07275ed57a7c0e1191c7c6184554d3e3' },
          { name: 'Low Lunge', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Hands straddle front foot. Stretch hip flexor of back leg.', youtube: 'https://iframe.videodelivery.net/062ce93186bb9fa882644346bc6c9b55' },
          { name: 'Praying Hands Twist', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Lunge position, palms together, rotate and hook elbow outside knee.', youtube: 'https://iframe.videodelivery.net/636fd4f35ea6f92c295421aa164a4143' },
          { name: 'Pyramid Pose', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Straight legs lunge. Hands straddle feet. Hamstring stretch.', youtube: 'https://iframe.videodelivery.net/4996cf7011fe83201344a9bac7c4b6c9' },
          { name: 'Triangle Pose', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Reach toward arch inside your knee. Straight legs, open chest.', youtube: 'https://iframe.videodelivery.net/c9a556c0fca55abb912a04054b993955' },
          { name: 'Half Forward Bend', sets: 1, reps: '30 sec', notes: 'Touch your toes but back flat. Hinge at hips, not spine.', youtube: 'https://iframe.videodelivery.net/231347be68f7baa63c80546e6fed3745' },
          { name: 'Full Squat (A to G)', sets: 1, reps: '30 sec', notes: 'Deep squat, elbows inside knees pressing out. Open hips.', youtube: 'https://iframe.videodelivery.net/805a659fed1306bf87ddbe8471d4d3e2' },
        ],
      },
      balancingBending: {
        label: 'Balancing & Bending Poses',
        exercises: [
          { name: 'Balancing & Bending (Routine)', sets: 1, reps: 'flow', notes: 'Full Balancing & Bending routine — flows through all poses in this section', youtube: 'https://iframe.videodelivery.net/75e6f304e143a311242fbc9a41e37555' },
          { name: 'Raise Hands Pose (Standing)', sets: 1, reps: '30 sec', notes: 'Stand tall, reach arms overhead, slight back bend', youtube: 'https://iframe.videodelivery.net/f635cb18c48d0cba5d820fa1a54ba7b7' },
          { name: 'Tree Pose (Balancing)', sets: 1, reps: '30 sec', qualifier: 'each leg', notes: 'Left leg then right leg. Foot on inner thigh or calf, never the knee.', youtube: 'https://iframe.videodelivery.net/e35031dfa363afc94656c8d083ee6656' },
          { name: 'Plank Pose', sets: 1, reps: '30 sec', notes: 'Straight line from head to heels. Core tight.', youtube: 'https://iframe.videodelivery.net/58bb1b3f96c5950224c07ab28a334b73' },
          { name: 'Cobra Pose (Back Bend)', sets: 1, reps: '30 sec', notes: 'Lie face down, press chest up, hips stay on ground. One-fist height variation.', youtube: 'https://iframe.videodelivery.net/4aee1b529b3dd8e4fcca4d3381dbd7ef' },
          { name: 'Cat Cow', sets: 1, reps: '10', notes: 'Alternate arching and rounding spine. Breath with movement.', youtube: 'https://iframe.videodelivery.net/26116e187f62e26bdb1177a73ca182bb' },
          { name: 'Child\'s Pose (Shoulder Stretch)', sets: 1, reps: '30 sec', notes: 'Knees wide or together, arms extended, forehead on ground', youtube: 'https://iframe.videodelivery.net/1207033d5e5f0e69676d19e7139b6978' },
          { name: 'Knees Wide Chinese Splits', sets: 1, reps: '30 sec', notes: 'On knees, spread wide, lower hips toward ground. Go to your edge.', youtube: 'https://iframe.videodelivery.net/639bf75e24f11ce35069ff0a605ed568' },
        ],
      },
      seatedPoses: {
        label: 'Seated Poses',
        exercises: [
          { name: 'Seated Poses (Routine)', sets: 1, reps: 'flow', notes: 'Full Seated Poses routine — flows through all poses in this section', youtube: 'https://iframe.videodelivery.net/b1adebac561892d82af9c3237c316eff' },
          { name: 'Staff Pose', sets: 1, reps: '30 sec', notes: 'Sit straight up with legs straight in front. Back tall, hands by hips.', youtube: 'https://iframe.videodelivery.net/a989fbdba58a40f3f9a7619a2257baa3' },
          { name: 'Seated Forward Bend (Hamstring)', sets: 1, reps: '30 sec', notes: 'Reach for toes, fold from hips not spine. Keep back as flat as possible.', youtube: 'https://iframe.videodelivery.net/d0e0f0206d3e40fef73508f450e9e277' },
          { name: 'Modified Hurdle Stretch', sets: 1, reps: '30 sec', qualifier: 'each leg', notes: 'One leg straight, other bent to side. Reach for straight leg toes.', youtube: 'https://iframe.videodelivery.net/5c5bf9b60f6b40437daf6f9af36be907' },
          { name: 'Seated V Sit (Middle, Side, Side)', sets: 1, reps: '30 sec', notes: 'Legs in V, reach center then to each side. Straddle stretch.', youtube: 'https://iframe.videodelivery.net/fe518f2f2ebea6cefd2bbd88a21d6864' },
          { name: 'Seated Elbow to Knee Back Twist', sets: 1, reps: '30 sec', qualifier: 'each side', notes: 'Leg across, elbow to outside of knee, twist and look behind you.', youtube: 'https://iframe.videodelivery.net/e7c5aeb99b9867fc9a7b89009e5b2da4' },
          { name: 'Butterfly Stretch', sets: 1, reps: '30 sec', notes: 'Soles of feet together, knees out. Press knees down gently.', youtube: 'https://iframe.videodelivery.net/4c974dc1cd2a696c7077adb4b6b540da' },
          { name: 'Cross Legged Stretch (Indian Style)', sets: 1, reps: '30 sec', notes: 'Sit cross legged, fold forward. Switch which leg is in front.', youtube: 'https://iframe.videodelivery.net/d8c4d39aaf8cd5d99ea8fd3fb4efbe20' },
          { name: 'Cross Legged Neck and Arm Stretches', sets: 1, reps: '30 sec', notes: 'Seated cross-legged. Neck rolls + arm/shoulder stretches sequence.', youtube: 'https://iframe.videodelivery.net/cd3e9eb6c338f32318e6beb92abe34df' },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════
  // BOXING
  // ═══════════════════════════════════════════
  // Organized per Glen's folder layout in D:/Cloudflare video/Boxing/
  // Videos to be wired after Mac-side Cloudflare upload → upload_log.txt.
  boxing: {
    label: 'Boxing',
    subcategories: {
      punches: {
        label: 'Heavy Bag Punches',
        exercises: [
          { name: 'Heavy Bag Jab', youtube: 'https://iframe.videodelivery.net/f5334f451f7724319931d9bd2898be09', sets: 3, reps: '30 sec', notes: 'Snap jab on bag. Return fast.' },
          { name: 'Heavy Bag Cross', youtube: 'https://iframe.videodelivery.net/f0d5ecc769996251a27afb79f9cbbb2b', sets: 3, reps: '30 sec', notes: 'Full hip rotation behind the cross.' },
          { name: 'Heavy Bag Hook', youtube: 'https://iframe.videodelivery.net/f33c1c68d9984fe31642ad70a427f039', sets: 3, reps: '30 sec', qualifier: 'each side', notes: 'Elbow level with fist, horizontal path.' },
          { name: 'Heavy Bag Uppercut', youtube: 'https://iframe.videodelivery.net/146aa7be821a70d7dd824fd825ab95a3', sets: 3, reps: '30 sec', qualifier: 'each side', notes: 'Drop, rise, drive upward through the chin line.' },
          { name: 'Heavy Bag High-Low Cross', youtube: 'https://iframe.videodelivery.net/03230c4b4d056d28cbf15f22670098f6', sets: 3, reps: '30 sec', notes: 'Cross to head, cross to body — level change.' },
        ],
      },
      combos: {
        label: 'Heavy Bag Combos (Numbered + Named)',
        exercises: [
          { name: 'Heavy Bag Combo 1: Jab-Cross', youtube: 'https://iframe.videodelivery.net/ad2e28e05dd28a48e02d0dc096b84e1e', sets: 3, reps: '8-10', notes: 'The foundation — 1-2.' },
          { name: 'Heavy Bag Combo 2: Jab-Cross-Hook', youtube: 'https://iframe.videodelivery.net/545596e05071902229cbeb8230bfa2a1', sets: 3, reps: '8', notes: '1-2-3.' },
          { name: 'Heavy Bag Combo 3: Jab-Cross-Hook-Uppercut', youtube: 'https://iframe.videodelivery.net/1679524fac763d12a87cfb1e15cfb84e', sets: 3, reps: '6-8', notes: '1-2-3-uppercut finisher.' },
          { name: 'Heavy Bag Combo 4: Jab-Cross-Hook-Cross', youtube: 'https://iframe.videodelivery.net/00074503fc84ac3bb695b171c46ce253', sets: 3, reps: '6-8', notes: '1-2-3-2, classic.' },
          { name: 'Heavy Bag Combo 5: Cross-Hook-Cross-Hook', youtube: 'https://iframe.videodelivery.net/1c86638db0263d00669fa161c66ffa7e', sets: 3, reps: '6', notes: 'Power chain — no jab, all hips.' },
          { name: 'Heavy Bag Double Jab Combo', youtube: 'https://iframe.videodelivery.net/0845f4376a8f007bec3ed9b08ed995eb', sets: 3, reps: '8', notes: 'Two jabs to close distance, set up power.' },
          { name: 'Heavy Bag Jab-Hook Combo', youtube: 'https://iframe.videodelivery.net/1da2e47e33c5c46f6003150af28e3165', sets: 3, reps: '8', notes: 'Jab then lead hook — same hand, different path.' },
          { name: 'Heavy Bag Jab-Hook (Body)', youtube: 'https://iframe.videodelivery.net/ffe2ea61ca74d1e4a77c98cdda9fe453', sets: 3, reps: '8', notes: 'Jab high, hook to the body.' },
          { name: 'Heavy Bag Jab-Uppercut Combo', youtube: 'https://iframe.videodelivery.net/7246e72ac9d3eae671ebebef83b99e2c', sets: 3, reps: '8', notes: 'Jab sets up the uppercut from underneath.' },
          { name: 'Heavy Bag High-Low Jab Combo', youtube: 'https://iframe.videodelivery.net/a12fc5c618eb15a072a55277e85f28b0', sets: 3, reps: '8', notes: 'Jab head, jab body — level change.' },
          { name: 'Heavy Bag Cross-Over Combo', youtube: 'https://iframe.videodelivery.net/fe6b99947d8fc52ba3ca771750055182', sets: 3, reps: '8', notes: 'Cross over technique — change lead mid-combo.' },
          { name: 'Heavy Bag Body Hook - Head Hook - Cross', youtube: 'https://iframe.videodelivery.net/6aee07ce0d803e8a1466ce555762aca2', sets: 3, reps: '6-8', notes: 'Dig body, come up high, finish with cross.' },
        ],
      },
      footwork: {
        label: 'Footwork & Pivots',
        exercises: [
          { name: 'Heavy Bag Pivot Left', youtube: 'https://iframe.videodelivery.net/5ae853905b5cb0d2bb3b4a60b18761a6', sets: 3, reps: '30 sec', notes: 'Pivot on lead foot, face the new angle.' },
          { name: 'Heavy Bag Pivot Right', youtube: 'https://iframe.videodelivery.net/850509eb4b7c264655efcfe0ad1f4771', sets: 3, reps: '30 sec', notes: 'Pivot right, cut off the ring.' },
          { name: 'Heavy Bag Pivot Left + Combo', youtube: 'https://iframe.videodelivery.net/26b876bae124c6a4f28e8c0f67ca8aa4', sets: 3, reps: '6-8', notes: 'Pivot then fire a punch chain.' },
          { name: 'Heavy Bag Step-Through Combo', youtube: 'https://iframe.videodelivery.net/4df50795808a665f966f3dc11c159240', sets: 3, reps: '6-8', notes: 'Step through the bag — full body forward drive.' },
        ],
      },
      defense: {
        label: 'Defense (Slip / Roll)',
        exercises: [
          { name: 'Heavy Bag Slip + Combo', youtube: 'https://iframe.videodelivery.net/d0fbf32ce6417633bd90f4d8ad891594', sets: 3, reps: '6-8', notes: 'Slip an imagined punch, counter with combo.' },
          { name: 'Heavy Bag Roll + Combo', youtube: 'https://iframe.videodelivery.net/1254151eef8ea666dde70f4840466518', sets: 3, reps: '6-8', notes: 'Roll under imagined hook, come up with counter combo.' },
        ],
      },
      conditioning: {
        label: 'Boxing Conditioning',
        exercises: [
          { name: 'Shadow Boxing with 3lb Weights', youtube: 'https://iframe.videodelivery.net/89bb831e6a4152bf47325a81183e518c', sets: 3, duration: '3', durationUnit: 'min', notes: 'Light weights in hand, full shadow boxing. Keep form.' },
          { name: 'Heavy Bag Burpee Combo', youtube: 'https://iframe.videodelivery.net/e89e249cf819b1e9e1f781c28a0d097f', sets: 4, reps: '30 sec', notes: 'Punch combo → burpee → back to bag.' },
          { name: 'Heavy Bag Hop-Hop-Squat Combo', youtube: 'https://iframe.videodelivery.net/e50488c0ec987a2c612408c9cd1b2861', sets: 4, reps: '30 sec', notes: 'Hop twice, squat, back to combo.' },
          { name: 'Heavy Bag Split-Jump Combo', youtube: 'https://iframe.videodelivery.net/dc80a55b2f286db4ee2b25a61c268f71', sets: 4, reps: '30 sec', notes: 'Split jumps into bag combo — legs + punches.' },
          { name: 'Heavy Bag Ride the Bike', youtube: 'https://iframe.videodelivery.net/c4f675af190281c7b54e7f548213134b', sets: 3, duration: '1', durationUnit: 'min', notes: 'Cardio drill on the bag — constant stepping.' },
        ],
      },
      speedBag: {
        label: 'Speed Bag',
        exercises: [
          { name: 'Speed Bag (Boxing)', youtube: 'https://iframe.videodelivery.net/22c265f6b95239132291a5909cba3172', sets: 3, duration: '3', durationUnit: 'min', notes: 'Classic rhythm — small circles, keep hands high.' },
          { name: 'Speed Bag Paw (Learning)', youtube: 'https://iframe.videodelivery.net/d9048f62a5e6154be8ef7f0bd278cf2a', sets: 3, duration: '3', durationUnit: 'min', notes: 'Beginner drill — use paw/open hand to build timing.' },
          { name: 'Speed Bag Rapid Fire', youtube: 'https://iframe.videodelivery.net/84af3d6a6a288d05203fc314a268ee94', sets: 3, reps: '30 sec', notes: 'Max speed interval — bursts of punches.' },
          { name: 'Speed Bag with Back Fist', youtube: 'https://iframe.videodelivery.net/24b860fce7c020e041f72e925e95fb1c', sets: 3, duration: '3', durationUnit: 'min', notes: 'Traditional rhythm + back-fist variation.' },
          { name: 'Speed Bag with Elbow', youtube: 'https://iframe.videodelivery.net/0efef15b0bf5293f1721fee25a3fe9c8', sets: 3, duration: '3', durationUnit: 'min', notes: 'Mixed rhythm: punch + horizontal elbow.' },
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
