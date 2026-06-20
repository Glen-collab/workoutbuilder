// generalmovements.js
// General movement drills that apply across all sports
// These show AFTER sport-specific movements in the selector
//
// STRUCTURE — the Movement block shows these top-level buttons:
//   Movement Presets   -> Linear / Lateral / Multi-Directional  (pre-built combos, Beg->Adv)
//   Movement Drills    -> Linear / Lateral / Multi-Directional  (individual building blocks)
//   Plyometrics Lower / Plyometrics Upper
//   Conditioning
//   Cardio Equipment
//
// Nested banks use { label, subcategories: { key: { label, exercises:[] } } }.
// Flat banks are just an array of { name, description }. To add a drill, drop
// another { name, description } into the right exercises array — the builder
// picks it up automatically (no code changes needed).
//
// NOTE: keys 'conditioning_general' and 'cardio_equipment' are also read by the
// Conditioning block type by name — keep those key names if you rename things.

export const WARMUP_DRILLS = [
  { name: "A-Skip", description: "Hip flexor activation, knee drive, ankle dorsiflexion", youtube: 'https://iframe.videodelivery.net/99ff75f7d5ed0be23ec822b750c64d42' },
  { name: "B-Skip", description: "Pawing motion, hamstring engagement, full leg cycle", youtube: 'https://iframe.videodelivery.net/bd0a62d47d8428d83fc8ce42381d6ef5' },
  { name: "High Knees", description: "Drive knees to hip height, quick ground contact", youtube: 'https://iframe.videodelivery.net/32a500450387d8c74f86c7770fc9fceb' },
  { name: "Butt Kicks", description: "Heel to glute, fast turnover, hamstring activation", youtube: 'https://iframe.videodelivery.net/fc83574186c4c3387047433fd53a0c30' },
  { name: "Straight Leg Bounds", description: "Stiff leg, ankle stiffness, glute/hamstring power", youtube: 'https://iframe.videodelivery.net/9bb58709324a2a7c8874f531e7374fdf' },
  { name: "Ankling (Fast Feet)", description: "Rapid ankle plantarflexion, ground contact drill", youtube: 'https://iframe.videodelivery.net/c74d7b11b89e925f60f5101f5ef5900a' },
  { name: "Backward Running", description: "Proprioception, deceleration mechanics", youtube: 'https://iframe.videodelivery.net/3774e6583dac978b7ac4a6a7e80737e9' },
  { name: "Power Skips", description: "Explosive vertical skip with single leg drive", youtube: 'https://iframe.videodelivery.net/1096aaf99995f0634386f635070da47a' },
  { name: "Wall Drives", description: "45-degree lean, rapid leg turnover against wall", youtube: 'https://iframe.videodelivery.net/ec2fb06903f6de4879d831eaf50bc5ec' },
  { name: "Falling Starts", description: "Forward lean to sprint, acceleration mechanics", youtube: 'https://iframe.videodelivery.net/9a2d0651c3c1311f9df2bdb71547bf0a' },
  { name: "3-Point Stance Starts", description: "Explosive starts from athletic position", youtube: 'https://iframe.videodelivery.net/1da74394c81ae3731a7896ffeb71d4a8' },
  { name: "Wicket Runs", description: "Mini hurdles for stride length/frequency", youtube: 'https://iframe.videodelivery.net/59ffa5d08a994cda325552d59165f77e' },
  { name: "Forward Skip with Arm Circles", description: "Forward skip with big arm circles — shoulder + hip warm-up", youtube: 'https://iframe.videodelivery.net/900d26941cb375a5fc61235e4eea6eb1' },
  { name: "Backward Skip with Arm Hugs", description: "Backward skip hugging arms across the chest", youtube: 'https://iframe.videodelivery.net/8b335814155cb7451554b7cff0233ce4' },
  { name: "Backward A March", description: "Backward A-march — posture, knee drive, pawing action", youtube: 'https://iframe.videodelivery.net/5091c55017a4e14a69a127041b4f8652' },
  { name: "Walking Quad Pull to RDL", description: "Walking quad stretch into a single-leg RDL reach", youtube: 'https://iframe.videodelivery.net/a2ea7faec153831d0619602ab217fa9f' },
  { name: "Lunge Walk with Reach Up and Back", description: "Walking lunge with an overhead reach and slight lean back", youtube: 'https://iframe.videodelivery.net/e6018d453eb6ef437ad1fcc1754fc0a8' },
  { name: "Shake Out Knee Hug", description: "Walking knee hug with a shake-out between reps", youtube: 'https://iframe.videodelivery.net/f9c85e833c73c7c7d866714879f3154e' },
  { name: "Shake Out Hamstring Kick", description: "Walking straight-leg kick with a shake-out", youtube: 'https://iframe.videodelivery.net/9bcd7acd3c7fa211e1b8c107cf7f9562' },
  { name: "Carioca", description: "Hip mobility, crossover pattern, lateral coordination", youtube: 'https://iframe.videodelivery.net/3cde8c4ca6bd1f1d62d765b3d0b16b00' },
  { name: "Lateral Shuffle with Jacks", description: "Lateral shuffle adding jumping jacks", youtube: 'https://iframe.videodelivery.net/4f3f499c052233465d4e75127dfe31fc' },
  { name: "Single Leg Hop w/ Cycle", description: "Single-leg hop driving the free-leg cycle — linear rhythm + stiffness", youtube: 'https://iframe.videodelivery.net/2a64b5053a2e88ae8a03d7b5580ed5af' },
];

// Full dynamic warm-up sequences (Glen's per-day flows). Migrated from the
// retired warmupExercises.js — videos get added as they're filmed.
export const WARMUP_PRESETS = [
  { name: "Linear Preset Vargas", duration: "5", durationUnit: "min", description: "Full linear dynamic warm-up — follow along with the video.", youtube: 'https://iframe.videodelivery.net/d2b27fc9f5795fffceacab1406e62fb7' },
  { name: "Dynamic Warmup - Linear Day", duration: "8", durationUnit: "min", description: "Straight Arm Skips, Running Backward, Arm Circles w/ Skip Switch Halfway, Running Backward, Straight Leg Walk + Straight Leg Skip, Backward Track Skip (Up-Up-Out-Out), Left Leg Up Right Leg Around Skip, 10 Gate Swings", youtube: '' },
  { name: "Dynamic Warmup - Lateral Day", duration: "8", durationUnit: "min", description: "Straight Arm Skip, Running Backward, Arm Circles Switch Halfway, Straight Leg Walk to Straight Leg Skip, Backward Hip Opener Skips, Lateral Cross Body Skips Down/Back, Carioca Down/Back, 10 Gate Swings", youtube: 'https://iframe.videodelivery.net/62b3a40376262ad8a76684ca408d48bf' },
  { name: "Dynamic Warmup - Multi-Directional Day", duration: "8", durationUnit: "min", description: "Straight Arm Skip Switch Halfway, Running Backward, Arm Circles Switch Halfway, Straight Leg Skip Back, Low Ankle Run Down, High Knee Cycle Back, Side Shuffle Down/Back, Lunge w/ Twist Down, Backward C Skip", youtube: 'https://iframe.videodelivery.net/0a68457bdafb2dbfa8cd34e683f1d84a' },
];

// The "Sprint Warmup" set shown in the Movement / Mobility / Warm Up blocks —
// per-day flow presets first, then the individual video drills. ONE source of
// truth: to add a warm-up video, drop a { name, description, youtube } into
// WARMUP_DRILLS above and it appears in all three blocks automatically.
export const SPRINT_WARMUP = [...WARMUP_PRESETS, ...WARMUP_DRILLS];

// Glen's filmed LATERAL drills (hurdle / wicket work). Front of the Lateral list.
export const LATERAL_DRILLS = [
  { name: "2 Back, 3 Back, 4 Back Wickets", description: "Progressive backward wicket ladder", youtube: 'https://iframe.videodelivery.net/761038c68b141d48d0046a53fd6a3f49' },
  { name: "8 Hurdle Gauntlet", description: "Continuous 8-hurdle lateral sequence", youtube: 'https://iframe.videodelivery.net/54ab083b85b83f098ac9bcbed8f78d4b' },
  { name: "Backward Track Skip (Up-Up-Out-Out)", description: "Backward track skip rhythm pattern", youtube: 'https://iframe.videodelivery.net/4b08d4e09a42bbecc6f96605b66b4906' },
  { name: "Crossover Skip", description: "Lateral crossover skip — hip mobility + coordination", youtube: 'https://iframe.videodelivery.net/4eb685820570362ab439554e0cfbf27c' },
  { name: "Gate Swings", description: "Open-the-gate hip mobility swing", youtube: 'https://iframe.videodelivery.net/c284afed4348858a5d4014de5e94db8b' },
  { name: "Lateral Quick Feet (2 Hurdle)", description: "Fast feet through two hurdles", youtube: 'https://iframe.videodelivery.net/e299d5cd5c4334f076b7754c69698543' },
  { name: "Lateral Shuffle Wicket w/ Pause", description: "Lateral shuffle through wickets with a hold", youtube: 'https://iframe.videodelivery.net/789f60a3d06fc64b08af2ffc212f2d99' },
  { name: "Lateral to Backward Run (3 Wickets)", description: "Lateral entry into a backward run", youtube: 'https://iframe.videodelivery.net/1013fe25010a18e4e4f62ded59ea8d0f' },
  { name: "Lateral to Forward Sprint (3 Wickets)", description: "Lateral entry into a forward sprint", youtube: 'https://iframe.videodelivery.net/07bc543a5ce193ecaaaa606cc1b53d65' },
  { name: "Lateral Wicket Run (No Pause)", description: "Continuous lateral wicket run", youtube: 'https://iframe.videodelivery.net/1bbc624039060f8efb96383a149c352c' },
  { name: "Lateral Wicket Skip + Pivot Backward Run", description: "Wicket skip into a pivot and backward run", youtube: 'https://iframe.videodelivery.net/42842529b53fdd74ab36374165247cb4' },
  { name: "Lateral Wicket Skip + Sprint Forward", description: "Wicket skip into a forward sprint", youtube: 'https://iframe.videodelivery.net/ba7e246a4bf64c35de805ad59e25ef25' },
  { name: "Lateral Wicket with Lateral Sprint", description: "Wicket work into a lateral sprint", youtube: 'https://iframe.videodelivery.net/d1ae31cf76c39bd88a9d4e50e902e2e6' },
  { name: "Wicket Lateral Hurdle Skips (Down + Back)", description: "Lateral hurdle skips down and back", youtube: 'https://iframe.videodelivery.net/ceeeeadcb9027e355157516788f84a84' },
  { name: "Wicket Lateral Skips w/ Pause", description: "Lateral wicket skips with a hold each rep", youtube: 'https://iframe.videodelivery.net/7ae38439284ef121ea19d1568d43403a' },
];

// Glen's filmed MULTI-DIRECTIONAL drills (reaction, stops, W/T-drills). Front of the Multi list.
export const MULTI_DRILLS = [
  { name: "5-10-5 Pro Agility", description: "NFL Combine short shuttle", youtube: 'https://iframe.videodelivery.net/fea55859029435fe247a1520a4dbdb9b' },
  { name: "Ankling Warm-Up", description: "Low ankling prep for change of direction", youtube: 'https://iframe.videodelivery.net/5eb6a84d922b889216e23caf3ae9440c' },
  { name: "Backward C-Skip", description: "Backward C-skip — hip opener + coordination", youtube: 'https://iframe.videodelivery.net/b974baa613587e22a414fc35f20285eb' },
  { name: "Box Land + Jump + Crossover Sprint", description: "Box landing into jump and crossover sprint", youtube: 'https://iframe.videodelivery.net/351a15016c000746c74926a1dadcd1f2' },
  { name: "Box Land to Jump and Sprint", description: "Box landing into a jump and sprint", youtube: 'https://iframe.videodelivery.net/a45853d467509ad9c15b23508e002f31' },
  { name: "Box Land to Lateral Shuffle", description: "Box landing into a lateral shuffle", youtube: 'https://iframe.videodelivery.net/23bb53f009c194fc74347178cf46dc40' },
  { name: "Double Leg Stop (Multi-Directional)", description: "Decelerate to a balanced double-leg stop", youtube: 'https://iframe.videodelivery.net/14efcb187e8e506e20c55b99de527a02' },
  { name: "Forward and Lateral Partner Stops", description: "Partner-cued forward + lateral stops", youtube: 'https://iframe.videodelivery.net/b281d30d02cce38d0dba821bbf061eb7' },
  { name: "High Knee Skips", description: "High knee skip — knee drive + rhythm", youtube: 'https://iframe.videodelivery.net/bd9acef459629514d6cbc966b1c6e917' },
  { name: "Lunge Walk with Twist", description: "Walking lunge adding a trunk rotation", youtube: 'https://iframe.videodelivery.net/d84d83d0b4d76ad4f994b53313a1bff9' },
  { name: "Multi-Directional to Lateral and Sprint", description: "Multi-direction change into lateral and sprint", youtube: 'https://iframe.videodelivery.net/58bb31146a29a8580bb474c52f901476' },
  { name: "Multi-Directional Wicket for Speed", description: "Wicket pattern for multi-direction speed", youtube: 'https://iframe.videodelivery.net/0b67ff56c807c74faf957d95ce748b3f' },
  { name: "Multi-Directional Wicket Zig-Zag", description: "Zig-zag wicket cutting pattern", youtube: 'https://iframe.videodelivery.net/7db0d6a635d923c7596d2b4f9a4b831e' },
  { name: "Double Leg Stop + Coach's Reaction Sprint Back", description: "Stop, react to coach, sprint back", youtube: 'https://iframe.videodelivery.net/aff4ec7340b17d475f6d043168b3ef69' },
  { name: "Double Leg Stop to Backpedal", description: "Double-leg stop into a backpedal", youtube: 'https://iframe.videodelivery.net/e167ab02f2bad6ef329163b0e1495309' },
  { name: "Double Leg Stop to Sprint Back", description: "Double-leg stop into a sprint back", youtube: 'https://iframe.videodelivery.net/c6ae6a5a707b881711d5be086a6062dd' },
  { name: "Learn to Stop + Single Leg Lunge", description: "Teaching the single-leg lunge stop", youtube: 'https://iframe.videodelivery.net/224ed97b21a52bb49cb28185e6d64931' },
  { name: "Single Leg Land to Sprint Back", description: "Single-leg landing into a sprint back", youtube: 'https://iframe.videodelivery.net/8a846ac75d9f096cc6999b1b8dcce12c' },
  { name: "Reaction Drill — Lateral / Fwd / Back + Sprint Out", description: "Multi-cue reaction into a sprint out", youtube: 'https://iframe.videodelivery.net/3a6d23566a94d257aebbb8824e179776' },
  { name: "Reaction on Coach — Lateral Shuffle", description: "Coach-cued lateral shuffle reaction", youtube: 'https://iframe.videodelivery.net/9b07d0384ea85baffe2fbeb04c8dfa31' },
  { name: "Reaction on Coach — Side-to-Side Sprint", description: "Coach-cued side-to-side sprint reaction", youtube: 'https://iframe.videodelivery.net/8d78e2d8bbd4cb7f2edae15706d802b4' },
  { name: "Stilt Run Ankling (Other Foot)", description: "Stilt-run ankling, opposite-foot emphasis", youtube: 'https://iframe.videodelivery.net/f4f9e985aff45a2b150b562359c2248c' },
  { name: "T-Drill Crossover to Sprint (Each Cone)", description: "T-drill crossover sprinting each cone", youtube: 'https://iframe.videodelivery.net/166bb33ca411d08e6e3af49749546992' },
  { name: "T-Drill Shuffle to Sprint + L-Drill Finish", description: "T-drill shuffle into a sprint and L-drill", youtube: 'https://iframe.videodelivery.net/dc9857557ab1b6cb60bd24067de74851' },
  { name: "Vertical Jump to Crossover Sprint", description: "Vertical jump landing into a crossover sprint", youtube: 'https://iframe.videodelivery.net/3560c47799390c8c52cc2099dd183fc3' },
  { name: "Vertical Jump to Lateral Shuffle", description: "Vertical jump landing into a lateral shuffle", youtube: 'https://iframe.videodelivery.net/637b36226d933e722636043ba8b5dc34' },
  { name: "W-Drill 360° Turns (Each Cone)", description: "W-drill adding a 360 at each cone", youtube: 'https://iframe.videodelivery.net/6c944149edfb80a1fe48da40456a8f31' },
  { name: "W-Drill Forward/Backward", description: "W-drill with forward and backward legs", youtube: 'https://iframe.videodelivery.net/745bc761e662e5014535514f362b9458' },
  { name: "W-Drill Lateral Shuffle", description: "W-drill performed with lateral shuffles", youtube: 'https://iframe.videodelivery.net/db1d5098368315f0e8780a70cafa21fc' },
];

export const generalMovements = {
    // ===== MOVEMENT PRESETS — pre-built combos, Beginner -> Intermediate -> Advanced =====
    movement_presets: {
        label: "Movement Presets",
        subcategories: {
            linear: {
                label: "Linear",
                exercises: [
                    { name: "Linear Preset Vargas", duration: "5", durationUnit: "min", description: "Full linear dynamic warm-up — follow along with the video.", youtube: 'https://iframe.videodelivery.net/d2b27fc9f5795fffceacab1406e62fb7' },
                    { name: "Beginner Linear Preset", duration: "6", durationUnit: "min", description: "A Skip, Straight Leg Run, B Skip, High Knee Cycle, High Knee Cycle to Run" },
                    { name: "Intermediate Linear Preset", duration: "8", durationUnit: "min", description: "A Skip, Straight Leg Run, B Skip, High Knee Cycle, Straight Leg to High Knee Cycle, High Knee Cycle to Sprint, 40 Yard Build Ups" },
                    { name: "Advanced Linear Preset", duration: "10", durationUnit: "min", description: "A Skip, B Skip, Low Ankle Run, Stilt Run + Low Ankle, Stilt Run + Low Ankle Switch Every 3" },
                    { name: "Linear Preset 1 - Speed Development", description: "Wall Drives, A-Skip, B-Skip, Flying 20s (4 rounds)", duration: "8", durationUnit: "min" },
                    { name: "Linear Preset 2 - Acceleration Focus", description: "Falling Starts, 3-Point Stance Starts, Sled Pulls (Light), Hill Sprints (5 rounds)", duration: "10", durationUnit: "min" },
                    { name: "Linear Preset 3 - Running Technique", description: "High Knees, Butt Kicks, Straight Leg Bounds, Ankling, Wicket Runs", duration: "8", durationUnit: "min" },
                    { name: "Linear Preset 4 - Speed Endurance", description: "Tempo Runs 75%, 100-Yard Repeats (6 rounds), 200-Yard Repeats (3 rounds)", duration: "12", durationUnit: "min" }
                ]
            },
            lateral: {
                label: "Lateral",
                exercises: [
                    { name: "Beginner Lateral Preset", duration: "6", durationUnit: "min", description: "2 Hurdles Back and Forth, 3 Hurdles Down + Stick, 3 Hurdles Down and Back" },
                    { name: "Intermediate Lateral Preset", duration: "8", durationUnit: "min", description: "3 Hurdles Down + Stick, 3 Hurdles Down/Back + Sprint Out, 4 Hurdles 2-Back 3-Back 4-Back Ladder" },
                    { name: "Advanced Lateral Preset", duration: "10", durationUnit: "min", description: "3 Hurdles Down/Back + Sprint Out, 3 Hurdles Down/Back + Sprint Forward (Perpendicular), 3 Hurdles Down/Back + Reverse Pivot Sprint Back" },
                    { name: "Lateral Preset 1 - COD Development", description: "Carioca, Lateral Shuffles, 90-Degree Cuts, Pro Agility (5 rounds)", duration: "8", durationUnit: "min" },
                    { name: "Lateral Preset 2 - Agility Focus", description: "T-Drill, Box Drill, Reactive Shuffle, Lateral Bounds (4 rounds)", duration: "10", durationUnit: "min" },
                    { name: "Lateral Preset 3 - Cutting Mechanics", description: "Crossover Cuts, Open-Hip Cuts, Plant and Drive, Jump Cuts (5 rounds)", duration: "8", durationUnit: "min" }
                ]
            },
            multi: {
                label: "Multi-Directional",
                exercises: [
                    { name: "Beginner Multi Preset", duration: "8", durationUnit: "min", description: "Altitude Landings Double Leg, Altitude Landings Single Leg Lateral, 5 Yard Sprint to Stop in Lunge Position, 10 Yard Sprint to Lunge Position, 10 Yard Sprint to Double Leg Stop, 10 Yard Sprint to Double Leg Stop + Backpedal" },
                    { name: "Intermediate Multi Preset", duration: "10", durationUnit: "min", description: "5 Yard Sprint to Lunge Stop, 10 Yard Sprint to Lunge Stop and Get Out Using Arm Exchange, Sprint to Double Leg Stop and Get Out Using Arm Exchange" },
                    { name: "Advanced Multi Preset", duration: "12", durationUnit: "min", description: "Sprint to Get Out on Various Stops, W Drill to Cones with Correct 3 Step Drill, W Drill Through Hurdles + Lateral Back and Sprint Out, Coaches Lateral Shuffle and Sprint Side to Side Drills" },
                    { name: "Multi-Directional Preset 1 - Complete Agility", description: "L-Drill, W-Drill, Zig-Zag Runs, 180-Degree Turns (4 rounds)", duration: "10", durationUnit: "min" },
                    { name: "Multi-Directional Preset 2 - Field Sport Movement", description: "Figure-8 Runs, Cone Weave Sprints, Box Drill, Reactive Shuffle (5 rounds)", duration: "12", durationUnit: "min" },
                    { name: "Multi-Directional Preset 3 - Court Sport Movement", description: "Pro Agility, T-Drill, Defensive Slides, Ladder Drills (4 rounds)", duration: "10", durationUnit: "min" }
                ]
            }
        }
    },

    // ===== MOVEMENT DRILLS — individual building blocks, by direction =====
    // Each direction opens with the shared WARMUP_DRILLS (same prep every
    // session), then its own direction-specific work.
    movement_drills: {
        label: "Movement Drills",
        subcategories: {
            // LINEAR — acceleration, max velocity, linear speed-endurance
            linear: {
                label: "Linear",
                exercises: [
                    ...WARMUP_DRILLS,
                    { name: "High Knee Walk", description: "Slow, controlled knee drive with balance" },
                    { name: "Mountain Climbers (Speed)", description: "Ground contact speed, hip flexor power" },
                    { name: "Partner Resistance Runs", description: "Overspeed training with band/partner" },
                    { name: "Sled Pulls (Light)", description: "10-20% bodyweight, acceleration focus" },
                    { name: "Hill Sprints (Short)", description: "10-20 yards uphill, 5-8 degree incline" },
                    { name: "Resisted Starts", description: "First 10 yards with resistance, then release" },
                    { name: "Bounding", description: "Exaggerated running motion, distance per stride" },
                    { name: "Sprint Buildups", description: "Progressive acceleration to 90-95%" },
                    { name: "Stride Outs", description: "Controlled acceleration with form focus" },
                    { name: "Downhill Sprints (Overspeed)", description: "2-3 degree decline, controlled overspeed" },
                    { name: "Parachute Runs", description: "Resistance parachute for acceleration" },
                    { name: "Flying Sprints", description: "Rolling start to max velocity" },
                    { name: "Tempo Runs (75%)", description: "Controlled speed, rhythm, form maintenance" },
                    { name: "Flying 20s", description: "20-yard build-up, 20-yard max effort fly zone" },
                    { name: "100-Yard Repeats", description: "10 x 100 yards, 1:3-1:4 work to rest" },
                    { name: "200-Yard Repeats", description: "6 x 200 yards, maintain 80-85% speed" },
                    { name: "Gassers", description: "4 x 110 yards (sideline to sideline x 4)" },
                    { name: "300-Yard Shuttles", description: "2 x 300 yards, speed endurance" },
                    { name: "120s (12 x 120 yards)", description: "Classic football conditioning drill" },
                    { name: "Ladder Runs", description: "Ascending/descending distance intervals" }
                ]
            },
            // LATERAL — cuts, shuffles, lateral footwork
            lateral: {
                label: "Lateral",
                exercises: [
                    ...LATERAL_DRILLS,
                    ...WARMUP_DRILLS,
                    { name: "Lateral Shuffle", description: "Side-to-side shuffling movement" },
                    { name: "Pro Agility (5-10-5)", description: "NFL Combine shuttle drill" },
                    { name: "T-Drill", description: "Forward sprint, lateral shuffle, backpedal" },
                    { name: "90-Degree Cuts", description: "Sharp plant and cut at right angle" },
                    { name: "Crossover Cuts", description: "Crossover step for tight turns" },
                    { name: "Open-Hip Cuts", description: "Hip opens toward direction of cut" },
                    { name: "Closed-Hip Cuts", description: "Hip stays closed, plant and pivot" },
                    { name: "Jump Cuts", description: "Small hop before cut, quick redirection" },
                    { name: "Step-Over Cuts", description: "Lead leg crosses over, tight radius" },
                    { name: "Plant and Drive", description: "Deceleration to re-acceleration" },
                    { name: "Shuffle to Plant", description: "Lateral shuffle to hard plant" },
                    { name: "Ladder - Icky Shuffle", description: "In-in-out-out lateral pattern" },
                    { name: "Ladder - In-Out", description: "Quick feet, in and out of each square" },
                    { name: "Ladder - Single Leg Hops", description: "One foot per square, fast turnover" },
                    { name: "Ladder - Lateral Shuffle", description: "Side-to-side through ladder" },
                    { name: "Ladder - Crossover Steps", description: "Crossover pattern through squares" },
                    { name: "Cone Taps", description: "Touch cones rapidly, hand-foot coordination" },
                    { name: "Line Hops", description: "Forward-back or side-to-side over line" },
                    { name: "Quick Feet Drills", description: "Rapid ground contact, various patterns" }
                ]
            },
            // MULTI-DIRECTIONAL — agility, change of direction, deceleration
            multi: {
                label: "Multi-Directional",
                exercises: [
                    ...MULTI_DRILLS,
                    ...WARMUP_DRILLS,
                    { name: "L-Drill (3-Cone)", description: "NFL Combine cone drill" },
                    { name: "Box Drill (4-Corner)", description: "Square pattern with direction changes" },
                    { name: "W-Drill", description: "Multiple direction changes in W pattern" },
                    { name: "Zig-Zag Runs", description: "45-degree cuts every 5 yards" },
                    { name: "Cone Weave Sprints", description: "Slalom pattern through 5+ cones" },
                    { name: "Figure-8 Runs", description: "Curved running pattern, hip rotation" },
                    { name: "Ladder Drills (Various)", description: "Speed ladder footwork patterns" },
                    { name: "Reactive Shuffle", description: "Coach/partner cues direction changes" },
                    { name: "180-Degree Turns", description: "Sprint, plant, reverse direction" },
                    { name: "Deceleration Runs", description: "Sprint to controlled stop in 3-5 steps" },
                    { name: "Backpedal to Sprint", description: "Transition mechanics, hip turn" },
                    { name: "Plant and Hold", description: "Sprint, plant, hold single-leg position" },
                    { name: "Eccentric Landing Drills", description: "Controlled landings from box" }
                ]
            }
        }
    },

    // ===== NON-DIRECTIONAL BANKS (flat) =====

    // PLYOMETRICS - Lower Body power
    plyometrics_lower: [
        // Glen's filmed plyos first
        { name: "Air Squat Push-Up Jump", description: "Air squat to push-up to jump combo", youtube: 'https://iframe.videodelivery.net/b027212d170102a956935a594175706e' },
        { name: "Box Jump + Step Down", description: "Box jump with a controlled step-down", youtube: 'https://iframe.videodelivery.net/5180f8defbf87694f01d18eabcc3698a' },
        { name: "Box Jump Step Down + Forward Hiking", description: "Box jump, step down, forward hike-out", youtube: 'https://iframe.videodelivery.net/612165497c5654f80b8763d276a84415' },
        { name: "Burpee Box Jump", description: "Burpee into a box jump", youtube: 'https://iframe.videodelivery.net/248321194f9bd5dd0977c4723408e504' },
        { name: "Burpee Box Jump Overs", description: "Burpee into a box jump-over", youtube: 'https://iframe.videodelivery.net/f0697525f9e8c4b0c0c2301d426f999e' },
        { name: "Burpee + Lateral Hurdle Hop + Burpee", description: "Burpee, lateral hurdle hop, burpee combo", youtube: 'https://iframe.videodelivery.net/579d973446f2bdff9fc1aea1491de645' },
        { name: "Frog Hops", description: "Deep squat frog hops for hip power", youtube: 'https://iframe.videodelivery.net/f32ea41e94435fb8605c2353e733d688' },
        { name: "Hurdle Hops (Stick at End)", description: "Continuous hurdle hops, stick the last landing", youtube: 'https://iframe.videodelivery.net/07bfa1e56771361519a74741633b346e' },
        { name: "Lateral Hurdle Hop (Single Hurdle)", description: "Side-to-side hop over a single hurdle", youtube: 'https://iframe.videodelivery.net/e0e1cd996ade86a3b493e079f14b63b4' },
        { name: "Pogo Hops", description: "Stiff-ankle pogo hops", youtube: 'https://iframe.videodelivery.net/e6e311a8213de0ccdf542bd778832e8a' },
        { name: "Single-Leg Box Jumps", description: "Unilateral box jump for power + stability", youtube: 'https://iframe.videodelivery.net/1e2b857b54a9561388b69cb35b9892c0' },
        { name: "Split Jump Knee Drive (Same Leg)", description: "Split-stance jump driving the same knee", youtube: 'https://iframe.videodelivery.net/e11e17669ac4333360060932414b8939' },
        { name: "Split Jumps", description: "Alternating split-stance jumps", youtube: 'https://iframe.videodelivery.net/cc7f648ed1099d8b283beea154e83b4f' },
        { name: "Triple Extension Broad Jumps", description: "Broad jump emphasizing full triple extension", youtube: 'https://iframe.videodelivery.net/53b297e153d32e1d77d8ebbccb22c579' },
        { name: "Wicket Single-Leg Cycle Hop", description: "Single-leg cycle hop through wickets", youtube: 'https://iframe.videodelivery.net/285b7aa0e8c2479026470ee8a79f3cf5' },
        { name: "Box Jumps", description: "24-36 inch box, explosive hip extension", youtube: 'https://iframe.videodelivery.net/98a5dc1dfb92d1129ff9f054beb0b909' },
        { name: "Depth Jumps", description: "Drop from box, immediate reactive jump", youtube: 'https://iframe.videodelivery.net/38609e186f1acecc7e69808d745ad01c' },
        { name: "Broad Jumps", description: "Horizontal power, triple extension", youtube: 'https://iframe.videodelivery.net/25b6dcf75a839dd192a441e65e3fc4b7' },
        { name: "Lateral Bounds", description: "Side-to-side explosive power", youtube: 'https://iframe.videodelivery.net/7e12bfc9edc4a43639e8046a76d88613' },
        { name: "Tuck Jumps", description: "Maximum vertical, knees to chest", youtube: 'https://iframe.videodelivery.net/25fd8cd79e00e1d462bc6b2ad24b6311' },
        { name: "Depth Drop to Sprint", description: "Reactive drop to immediate sprint" }
    ],

    // PLYOMETRICS - Upper Body power
    plyometrics_upper: [
        { name: "Medicine Ball Chest Pass", description: "Explosive push, partner or wall" },
        { name: "Medicine Ball Overhead Slam", description: "Full body power, ground slam" },
        { name: "Medicine Ball Side Toss", description: "Rotational power, each side" },
        { name: "Medicine Ball Scoop Toss", description: "Hip extension, overhead throw" },
        { name: "Plyo Push-Ups", description: "Hands leave ground, explosive press" },
        { name: "Clap Push-Ups", description: "Clap at top of explosive push" },
        { name: "Medicine Ball Woodchops", description: "High to low rotational slam" }
    ],

    // CONDITIONING - Metabolic work
    conditioning_general: [
        { name: "Suicide Sprints", description: "Progressive distance, back-and-forth" },
        { name: "Line Drills", description: "Touch lines progressively, full court/field" },
        { name: "Indian Runs", description: "Group jog, last person sprints to front" },
        { name: "Fartlek Runs", description: "Variable pace running, speed play" },
        { name: "Hill Sprint Intervals", description: "Repeated hill sprints with walk-back recovery" },
        { name: "Track Sprint Intervals", description: "Sprint intervals on track with timed rest" },
        { name: "Run/Walk Intervals", description: "Alternating run and walk periods for endurance building" },
        { name: "Long Run", description: "Sustained distance run at conversational pace" },
        { name: "Timed Mile", description: "Aerobic capacity baseline test" },
        { name: "Beep Test (Yo-Yo)", description: "Progressive shuttle run test" },
        // Combo / loaded conditioning pieces
        { name: "Sandbag Loads + Farmer Carry", description: "Load sandbag to shoulder, then loaded carry for distance" },
        { name: "Kettlebell Swing + Sprint", description: "Set of KB swings into a short sprint, repeat" },
        { name: "Sled Push + Sprint", description: "Heavy sled push into a sprint finish" },
        { name: "Battle Ropes + Burpees", description: "Rope waves alternated with burpees" },
        { name: "Wall Ball + Row", description: "Wall ball sets paired with rower intervals" }
    ],

    // CARDIO EQUIPMENT - Machine-based conditioning
    cardio_equipment: [
        { name: "Treadmill", description: "Walking, jogging, running, incline, sprints" },
        { name: "Air Bike", description: "Full-body fan-resistance bike" },
        { name: "Assault Bike", description: "Fan-resistance assault bike" },
        { name: "Elliptical", description: "Low-impact continuous cardio" },
        { name: "Rowing Machine", description: "Full-body rowing ergometer" },
        { name: "Stationary Bike", description: "Upright stationary cycling" },
        { name: "Recumbent Bike", description: "Seated low-impact cycling" },
        { name: "Spin Bike", description: "High-output indoor cycling" },
        { name: "Concept2 BikeErg", description: "Performance-focused cycling ergometer" },
        { name: "SkiErg", description: "Upper-body dominant cardio ergometer" },
        { name: "Stair Climber", description: "Continuous stair stepping" },
        { name: "Arc Trainer", description: "Variable stride elliptical trainer" },
        { name: "Vertical Climber", description: "Upright climbing machine" },
        { name: "VersaClimber", description: "High-intensity vertical climbing ergometer" },
        { name: "Jacob's Ladder", description: "Self-powered ladder climbing" },
        { name: "TreadClimber", description: "Incline belt walking system" },
        { name: "Prowler", description: "Weighted prowler push/pull for power-cardio" },
        { name: "Sled Work", description: "Sled push, pull, and drag conditioning" }
    ]
};
