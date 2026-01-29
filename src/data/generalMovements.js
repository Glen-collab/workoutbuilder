// generalmovements.js
// General movement drills that apply across all sports
// These show AFTER sport-specific movements in the selector



export const generalMovements = {
    // MOVEMENT PRESETS - Pre-built combinations (Progression-based first, then additional options)
    linear_presets: [
        // Your teaching progression
        { name: "Beginner Linear Preset", duration: "6-8 min", description: "A Skip, Straight Leg Run, B Skip, High Knee Cycle, High Knee Cycle to Run" },
        { name: "Intermediate Linear Preset", duration: "8-10 min", description: "A Skip, Straight Leg Run, B Skip, High Knee Cycle, Straight Leg to High Knee Cycle, High Knee Cycle to Sprint, 40 Yard Build Ups" },
        { name: "Advanced Linear Preset", duration: "10-12 min", description: "A Skip, B Skip, Low Ankle Run, Stilt Run + Low Ankle, Stilt Run + Low Ankle Switch Every 3" },
        // Additional options
        { name: "Linear Preset 1 - Speed Development", description: "Wall Drives, A-Skip, B-Skip, Flying 20s (4 rounds)", duration: "8-10 min" },
        { name: "Linear Preset 2 - Acceleration Focus", description: "Falling Starts, 3-Point Stance Starts, Sled Pulls (Light), Hill Sprints (5 rounds)", duration: "10-12 min" },
        { name: "Linear Preset 3 - Running Technique", description: "High Knees, Butt Kicks, Straight Leg Bounds, Ankling, Wicket Runs", duration: "8-10 min" },
        { name: "Linear Preset 4 - Speed Endurance", description: "Tempo Runs 75%, 100-Yard Repeats (6 rounds), 200-Yard Repeats (3 rounds)", duration: "12-15 min" }
    ],

    lateral_presets: [
        // Your teaching progression
        { name: "Beginner Lateral Preset", duration: "6-8 min", description: "2 Hurdles Back and Forth, 3 Hurdles Down + Stick, 3 Hurdles Down and Back" },
        { name: "Intermediate Lateral Preset", duration: "8-10 min", description: "3 Hurdles Down + Stick, 3 Hurdles Down/Back + Sprint Out, 4 Hurdles 2-Back 3-Back 4-Back Ladder" },
        { name: "Advanced Lateral Preset", duration: "10-12 min", description: "3 Hurdles Down/Back + Sprint Out, 3 Hurdles Down/Back + Sprint Forward (Perpendicular), 3 Hurdles Down/Back + Reverse Pivot Sprint Back" },
        // Additional options
        { name: "Lateral Preset 1 - COD Development", description: "Carioca, Lateral Shuffles, 90-Degree Cuts, Pro Agility (5 rounds)", duration: "8-10 min" },
        { name: "Lateral Preset 2 - Agility Focus", description: "T-Drill, Box Drill, Reactive Shuffle, Lateral Bounds (4 rounds)", duration: "10-12 min" },
        { name: "Lateral Preset 3 - Cutting Mechanics", description: "Crossover Cuts, Open-Hip Cuts, Plant and Drive, Jump Cuts (5 rounds)", duration: "8-10 min" }
    ],

    multi_directional_presets: [
        // Your teaching progression
        { name: "Beginner Multi Preset", duration: "8-10 min", description: "Altitude Landings Double Leg, Altitude Landings Single Leg Lateral, 5 Yard Sprint to Stop in Lunge Position, 10 Yard Sprint to Lunge Position, 10 Yard Sprint to Double Leg Stop, 10 Yard Sprint to Double Leg Stop + Backpedal" },
        { name: "Intermediate Multi Preset", duration: "10-12 min", description: "5 Yard Sprint to Lunge Stop, 10 Yard Sprint to Lunge Stop and Get Out Using Arm Exchange, Sprint to Double Leg Stop and Get Out Using Arm Exchange" },
        { name: "Advanced Multi Preset", duration: "12-15 min", description: "Sprint to Get Out on Various Stops, W Drill to Cones with Correct 3 Step Drill, W Drill Through Hurdles + Lateral Back and Sprint Out, Coaches Lateral Shuffle and Sprint Side to Side Drills" },
        // Additional options
        { name: "Multi-Directional Preset 1 - Complete Agility", description: "L-Drill, W-Drill, Zig-Zag Runs, 180-Degree Turns (4 rounds)", duration: "10-12 min" },
        { name: "Multi-Directional Preset 2 - Field Sport Movement", description: "Figure-8 Runs, Cone Weave Sprints, Box Drill, Reactive Shuffle (5 rounds)", duration: "12-15 min" },
        { name: "Multi-Directional Preset 3 - Court Sport Movement", description: "Pro Agility, T-Drill, Defensive Slides, Ladder Drills (4 rounds)", duration: "10-12 min" }
    ],

    // RUNNING DRILLS - Technical work for all running sports
    running_technique: [
        { name: "A-Skip", description: "Hip flexor activation, knee drive, ankle dorsiflexion" },
        { name: "B-Skip", description: "Pawing motion, hamstring engagement, full leg cycle" },
        { name: "High Knees", description: "Drive knees to hip height, quick ground contact" },
        { name: "Butt Kicks", description: "Heel to glute, fast turnover, hamstring activation" },
        { name: "Straight Leg Bounds", description: "Stiff leg, ankle stiffness, glute/hamstring power" },
        { name: "Ankling (Fast Feet)", description: "Rapid ankle plantarflexion, ground contact drill" },
        { name: "Carioca", description: "Hip mobility, crossover pattern, lateral coordination" },
        { name: "High Knee Walk", description: "Slow, controlled knee drive with balance" },
        { name: "Backward Running", description: "Proprioception, deceleration mechanics" },
        { name: "Power Skips", description: "Explosive vertical skip with single leg drive" }
    ],

    // ACCELERATION MECHANICS
    acceleration_drills: [
        { name: "Wall Drives", description: "45-degree lean, rapid leg turnover against wall" },
        { name: "Falling Starts", description: "Forward lean to sprint, acceleration mechanics" },
        { name: "3-Point Stance Starts", description: "Explosive starts from athletic position" },
        { name: "Mountain Climbers (Speed)", description: "Ground contact speed, hip flexor power" },
        { name: "Partner Resistance Runs", description: "Overspeed training with band/partner" },
        { name: "Sled Pulls (Light)", description: "10-20% bodyweight, acceleration focus" },
        { name: "Hill Sprints (Short)", description: "10-20 yards uphill, 5-8 degree incline" },
        { name: "Resisted Starts", description: "First 10 yards with resistance, then release" }
    ],

    // SPEED ENDURANCE - For all field/court sports
    speed_endurance: [
        { name: "Tempo Runs (75%)", description: "Controlled speed, rhythm, form maintenance" },
        { name: "Flying 20s", description: "20-yard build-up, 20-yard max effort fly zone" },
        { name: "100-Yard Repeats", description: "10 x 100 yards, 1:3-1:4 work to rest" },
        { name: "200-Yard Repeats", description: "6 x 200 yards, maintain 80-85% speed" },
        { name: "Gassers", description: "4 x 110 yards (sideline to sideline x 4)" },
        { name: "300-Yard Shuttles", description: "2 x 300 yards, speed endurance" },
        { name: "120s (12 x 120 yards)", description: "Classic football conditioning drill" },
        { name: "Ladder Runs", description: "Ascending/descending distance intervals" }
    ],

    // AGILITY & COD - Universal movement patterns
    agility_patterns: [
        { name: "Pro Agility (5-10-5)", description: "NFL Combine shuttle drill" },
        { name: "L-Drill (3-Cone)", description: "NFL Combine cone drill" },
        { name: "T-Drill", description: "Forward sprint, lateral shuffle, backpedal" },
        { name: "Box Drill (4-Corner)", description: "Square pattern with direction changes" },
        { name: "Zig-Zag Runs", description: "45-degree cuts every 5 yards" },
        { name: "Cone Weave Sprints", description: "Slalom pattern through 5+ cones" },
        { name: "W-Drill", description: "Multiple direction changes in W pattern" },
        { name: "Figure-8 Runs", description: "Curved running pattern, hip rotation" },
        { name: "Ladder Drills (Various)", description: "Speed ladder footwork patterns" },
        { name: "Reactive Shuffle", description: "Coach/partner cues direction changes" },
        { name: "Lateral Shuffle", description: "Side-to-side shuffling movement" }
    ],

    // CHANGE OF DIRECTION - Cutting & planting
    cutting_drills: [
        { name: "90-Degree Cuts", description: "Sharp plant and cut at right angle" },
        { name: "180-Degree Turns", description: "Sprint, plant, reverse direction" },
        { name: "Plant and Drive", description: "Deceleration to re-acceleration" },
        { name: "Crossover Cuts", description: "Crossover step for tight turns" },
        { name: "Open-Hip Cuts", description: "Hip opens toward direction of cut" },
        { name: "Closed-Hip Cuts", description: "Hip stays closed, plant and pivot" },
        { name: "Jump Cuts", description: "Small hop before cut, quick redirection" },
        { name: "Step-Over Cuts", description: "Lead leg crosses over, tight radius" }
    ],

    // PLYOMETRICS - Lower Body power
    plyometrics_lower: [
        { name: "Box Jumps", description: "24-36 inch box, explosive hip extension" },
        { name: "Depth Jumps", description: "Drop from box, immediate reactive jump" },
        { name: "Broad Jumps", description: "Horizontal power, triple extension" },
        { name: "Single-Leg Box Jumps", description: "Unilateral power and stability" },
        { name: "Lateral Bounds", description: "Side-to-side explosive power" },
        { name: "Hurdle Hops", description: "Continuous hops over 6-12 inch hurdles" },
        { name: "Pogo Jumps", description: "Ankle stiffness, minimal knee bend" },
        { name: "Split Squat Jumps", description: "Alternating legs, vertical power" },
        { name: "Tuck Jumps", description: "Maximum vertical, knees to chest" },
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

    // SPRINT MECHANICS - Form work
    sprint_mechanics: [
        { name: "Wicket Runs", description: "Mini hurdles for stride length/frequency" },
        { name: "Bounding", description: "Exaggerated running motion, distance per stride" },
        { name: "Sprint Buildups", description: "Progressive acceleration to 90-95%" },
        { name: "Stride Outs", description: "Controlled acceleration with form focus" },
        { name: "Downhill Sprints (Overspeed)", description: "2-3 degree decline, controlled overspeed" },
        { name: "Parachute Runs", description: "Resistance parachute for acceleration" },
        { name: "Flying Sprints", description: "Rolling start to max velocity" }
    ],

    // FOOTWORK & COORDINATION
    footwork_coordination: [
        { name: "Ladder - Icky Shuffle", description: "In-in-out-out lateral pattern" },
        { name: "Ladder - In-Out", description: "Quick feet, in and out of each square" },
        { name: "Ladder - Single Leg Hops", description: "One foot per square, fast turnover" },
        { name: "Ladder - Lateral Shuffle", description: "Side-to-side through ladder" },
        { name: "Ladder - Crossover Steps", description: "Crossover pattern through squares" },
        { name: "Cone Taps", description: "Touch cones rapidly, hand-foot coordination" },
        { name: "Line Hops", description: "Forward-back or side-to-side over line" },
        { name: "Quick Feet Drills", description: "Rapid ground contact, various patterns" }
    ],

    // DECELERATION - Injury prevention
    deceleration_control: [
        { name: "Deceleration Runs", description: "Sprint to controlled stop in 3-5 steps" },
        { name: "Backpedal to Sprint", description: "Transition mechanics, hip turn" },
        { name: "Plant and Hold", description: "Sprint, plant, hold single-leg position" },
        { name: "Eccentric Landing Drills", description: "Controlled landings from box" },
        { name: "Shuffle to Plant", description: "Lateral shuffle to hard plant" }
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
        { name: "Beep Test (Yo-Yo)", description: "Progressive shuttle run test" }
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
        { name: "Jacobâ€™s Ladder", description: "Self-powered ladder climbing" },
        { name: "TreadClimber", description: "Incline belt walking system" }
    ]
};



