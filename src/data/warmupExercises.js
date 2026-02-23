// warmup-exercises.js
// Dedicated warm-up exercise library with warm-up specific categories



export const warmupCategories = {
    myofascial: {
        label: "Myofascial Release",
        exercises: [
            // Foam Roller Presets
            { name: 'Foam Roller Preset 1', duration: '6-8 min', description: 'Roll IT Band, Roll Hamstring, Roll Glute, Roll Quad, Roll Groin', youtube: '' },
            { name: 'Foam Roller Preset 2', duration: '5-7 min', description: 'Roll Glute, Roll Obliques, Roll Lats, Roll Upper Back', youtube: '' },
            { name: 'Foam Roller Preset 3', duration: '4-6 min', description: 'Roll IT Band, Roll Glutes, Roll Lats', youtube: '' },

            // Lacrosse Ball Presets
            { name: 'Lax Ball Preset 1', duration: '4-6 min', description: 'Roll Traps, Roll Pecs, Roll Rear Delt', youtube: '' },
            { name: 'Lax Ball Preset 2', duration: '5-7 min', description: 'Seated Hamstring Origin Rollout, Seated Calf Rollout, Rhomboid Rollout', youtube: '' },
            { name: 'Lax Ball Preset 3', duration: '4-6 min', description: 'Rhomboid Rollout, Trap Rollout, Door Jam Neck Rollout', youtube: '' },

            // The Stick Presets
            { name: 'The Stick Preset 1', duration: '5-7 min', description: 'Standing IT Band Relaxed Leg, Quad and IT Band, Calf Roll', youtube: '' },
            { name: 'The Stick Preset 2', duration: '5-7 min', description: 'Partner Upper Back Roll, Side Lying Lat Roll, Quad and IT Band', youtube: '' },
            { name: 'The Stick Preset 3', duration: '4-6 min', description: 'Biceps Roll, Triceps Roll, Partner Upper Back Roll', youtube: '' },

            // Thera Cane Presets
            { name: 'Thera Cane Preset 1 - Upper Body Focus', duration: '6-8 min', description: 'Shoulder Blade Rollout (Rhomboids), Upper Trap Release, Lat Trigger Points, Oblique Release', youtube: '' },
            { name: 'Thera Cane Preset 2 - Neck & Legs', duration: '7-9 min', description: 'Neck (Levator Scapulae), Shoulder (Upper Traps), IT Band, Hamstring Trigger Points, Calf Knots', youtube: '' },
            { name: 'Thera Cane Preset 3 - Full Body Release', duration: '8-10 min', description: 'Lower Back (Erector Spinae), Glute Trigger Points, Mid-Back (Rhomboids), Pec Minor Release', youtube: '' },

            // Psoas Release Tool Presets
            { name: 'Psoas Tool Preset 1 - Hip & Core', duration: '5-7 min', description: 'Psoas Release, Hip Flexor Release, Glute Release, Lower Back (QL)', youtube: '' },
            { name: 'Psoas Tool Preset 2 - Upper Body', duration: '5-7 min', description: 'Upper Back (Thoracic), Neck Release, Lat Release, Shoulder Blade Release', youtube: '' },
            { name: 'Psoas Tool Preset 3 - Total Body', duration: '7-9 min', description: 'Glute/Piriformis, Psoas, Upper Back, Neck, Lower Back (QL), Hip Flexors', youtube: '' },

            // Foam Roller Individual Exercises
            { name: 'Foam Roll IT Band', duration: '60s each side', description: 'Lateral thigh rolling', youtube: '' },
            { name: 'Foam Roll Quads', duration: '60s', description: 'Front of thigh', youtube: '' },
            { name: 'Foam Roll Hamstrings', duration: '60s', description: 'Back of thigh', youtube: '' },
            { name: 'Foam Roll Calves', duration: '60s each', description: 'Lower leg rolling', youtube: '' },
            { name: 'Foam Roll Glutes', duration: '60s each side', description: 'Hip and glute release', youtube: '' },
            { name: 'Foam Roll Upper Back', duration: '60s', description: 'Thoracic spine mobility', youtube: '' },
            { name: 'Foam Roll Lats', duration: '45s each side', description: 'Lateral back release', youtube: '' },
            { name: 'Foam Roll Adductors', duration: '60s each', description: 'Inner thigh release', youtube: '' },
            { name: 'Foam Roll Groin', duration: '60s each side', description: 'Groin and inner hip release', youtube: '' },
            { name: 'Foam Roll Obliques', duration: '45s each side', description: 'Side body release', youtube: '' },

            // Lacrosse Ball Individual Exercises
            { name: 'Lacrosse Ball Glutes', duration: '60s each side', description: 'Deep tissue glute release', youtube: '' },
            { name: 'Lacrosse Ball Foot', duration: '60s each', description: 'Plantar fascia release', youtube: '' },
            { name: 'Lacrosse Ball Pecs', duration: '45s each side', description: 'Chest and shoulder release', youtube: '' },
            { name: 'Lax Ball Traps', duration: '60s each side', description: 'Upper trap release', youtube: '' },
            { name: 'Lax Ball Lats', duration: '60s each side', description: 'Oblique release', youtube: '' },
            { name: 'Lax Ball Rear Delt', duration: '45s each side', description: 'Posterior shoulder release', youtube: '' },
            { name: 'Lax Ball Seated Hamstring Origin Rollout', duration: '60s each side', description: 'Seated rollout at sit bone', youtube: '' },
            { name: 'Lax Ball Seated Calf Rollout', duration: '60s each', description: 'Seated calf release', youtube: '' },
            { name: 'Lax Ball Rhomboid Rollout', duration: '60s each side', description: 'Upper back between shoulder blades', youtube: '' },
            { name: 'Lax Ball Trap Rollout', duration: '60s each side', description: 'Trap muscle release', youtube: '' },
            { name: 'Lax Ball Door Jam Neck Rollout', duration: '45s each side', description: 'Neck release against door frame', youtube: '' },

            // The Stick Individual Exercises
            { name: 'The Stick Standing IT Band Relaxed Leg', duration: '60s each side', description: 'Standing IT band with relaxed leg', youtube: '' },
            { name: 'The Stick Quad and IT Band', duration: '60s each side', description: 'Combined quad and IT band roll', youtube: '' },
            { name: 'The Stick Calf Roll', duration: '60s each', description: 'Seated calf rolling', youtube: '' },
            { name: 'The Stick Partner Upper Back Roll', duration: '60s', description: 'Partner assisted upper back', youtube: '' },
            { name: 'The Stick Side Lying Lat Roll', duration: '60s each side', description: 'Side position lat release', youtube: '' },
            { name: 'The Stick Biceps Roll', duration: '45s each', description: 'Bicep muscle release', youtube: '' },
            { name: 'The Stick Triceps Roll', duration: '45s each', description: 'Tricep muscle release', youtube: '' },

            // Thera Cane Individual Exercises
            { name: 'Thera Cane Shoulder Blade Rollout', duration: '60s each side', description: 'Rhomboid and mid-back trigger points', youtube: '' },
            { name: 'Thera Cane Upper Trap Release', duration: '60s each side', description: 'Upper trapezius tension relief', youtube: '' },
            { name: 'Thera Cane Lat Trigger Points', duration: '60s each side', description: 'Lateral back muscle release', youtube: '' },
            { name: 'Thera Cane Oblique Release', duration: '45s each side', description: 'Side body trigger point release', youtube: '' },
            { name: 'Thera Cane Neck (Levator Scapulae)', duration: '60s each side', description: 'Neck and shoulder connection release', youtube: '' },
            { name: 'Thera Cane IT Band', duration: '60s each side', description: 'Lateral thigh trigger points', youtube: '' },
            { name: 'Thera Cane Hamstring Trigger Points', duration: '60s each side', description: 'Back of thigh knots', youtube: '' },
            { name: 'Thera Cane Calf Knots', duration: '45s each', description: 'Lower leg trigger point release', youtube: '' },
            { name: 'Thera Cane Lower Back (Erector Spinae)', duration: '60s each side', description: 'Lower back muscle release', youtube: '' },
            { name: 'Thera Cane Glute Trigger Points', duration: '60s each side', description: 'Deep glute and hip release', youtube: '' },
            { name: 'Thera Cane Pec Minor Release', duration: '60s each side', description: 'Chest and front shoulder release', youtube: '' },

            // Psoas Release Tool Individual Exercises
            { name: 'Psoas Tool Psoas Release', duration: '90s each side', description: 'Deep hip flexor release', youtube: '' },
            { name: 'Psoas Tool Hip Flexor Release', duration: '60s each side', description: 'Front of hip release', youtube: '' },
            { name: 'Psoas Tool Glute Release', duration: '60s each side', description: 'Glute and piriformis release', youtube: '' },
            { name: 'Psoas Tool Lower Back (QL)', duration: '60s each side', description: 'Quadratus lumborum release', youtube: '' },
            { name: 'Psoas Tool Upper Back (Thoracic)', duration: '60s', description: 'Mid to upper back release', youtube: '' },
            { name: 'Psoas Tool Neck Release', duration: '45s each side', description: 'Neck muscle tension relief', youtube: '' },
            { name: 'Psoas Tool Lat Release', duration: '60s each side', description: 'Lateral back release', youtube: '' },
            { name: 'Psoas Tool Shoulder Blade Release', duration: '60s each side', description: 'Scapular area release', youtube: '' },
            { name: 'Psoas Tool Piriformis', duration: '90s each side', description: 'Deep glute/hip rotator release', youtube: '' },

            // Massage Gun Individual Exercises
            { name: 'Massage Gun Pec', duration: '60s each side', description: 'Pec major and minor release', youtube: '' },
            { name: 'Massage Gun Serratus and Teres Minor', duration: '60s each side', description: 'Side ribcage and rotator cuff release', youtube: '' },
            { name: 'Massage Gun Long Head of Triceps', duration: '45s each side', description: 'Upper arm back release near shoulder', youtube: '' },
            { name: 'Massage Gun Anterior Delt', duration: '45s each side', description: 'Front shoulder release', youtube: '' },
            { name: 'Massage Gun Biceps', duration: '45s each side', description: 'Front upper arm release', youtube: '' },
            { name: 'Massage Gun Forearm', duration: '45s each side', description: 'Forearm flexor and extensor release', youtube: '' },
            { name: 'Massage Gun Lat/Oblique', duration: '60s each side', description: 'Lateral torso release', youtube: '' },
            { name: 'Massage Gun Neck and Traps', duration: '45s each side', description: 'Upper trap and neck tension relief', youtube: '' },
            { name: 'Massage Gun Rhomboids', duration: '60s each side', description: 'Mid-back between shoulder blades', youtube: '' },
            { name: 'Massage Gun IT Band', duration: '60s each side', description: 'Lateral thigh release', youtube: '' },
            { name: 'Massage Gun Groin', duration: '60s each side', description: 'Inner thigh and adductor release', youtube: '' },
            { name: 'Massage Gun Triceps', duration: '45s each side', description: 'Back of upper arm release', youtube: '' },
            { name: 'Massage Gun for Elbow Pain', duration: '60s each side', description: 'Forearm and elbow area - work above and below joint', youtube: '' },
            { name: 'Massage Gun for Shoulder Pain', duration: '90s each side', description: 'Full shoulder complex - pec, delt, rotator cuff area', youtube: '' },
            { name: 'Massage Gun for Knee Pain', duration: '60s each side', description: 'Quad, IT band, and hamstring above knee', youtube: '' },
            { name: 'Massage Gun for Low Back Pain', duration: '90s each side', description: 'QL, erectors, and glute connection', youtube: '' },
            { name: 'Massage Gun Lats Lying Side', duration: '60s each side', description: 'Lat release while lying on side', youtube: '' },
            { name: 'Massage Gun IT Band Calf', duration: '60s each side', description: 'Calf and lower IT band release', youtube: '' },

            // Other
            { name: 'PVC Pipe Thoracic Extensions', duration: '10 reps', description: 'Upper back mobility', youtube: '' },
            { name: 'PVC Press and Stretch', duration: '8-10 reps', description: 'PVC pipe overhead press and stretch', youtube: '' },
            { name: 'PVC Y to W', duration: '10 reps', description: 'Shoulder mobility and scapular retraction', youtube: '' }
        ]
    },

    medicine_ball: {
        label: "Medicine Ball",
        exercises: [
            // Presets
            { name: 'Med Ball Preset 1', duration: '8-10 min', description: 'Around the Worlds, Wood Chop, Windshield Wipers, Trunk Rotations, Reverse Lunge, Forward Lunge, Good Morning, 3 Way RDL', youtube: '' },
            { name: 'Med Ball Preset 2', duration: '8-10 min', description: 'Around the Worlds, Cross Body Wood Chop, Windshield Wipers, Trunk Rotations, Reverse Lunge, Lateral Lunge, Good Morning, 3 Way RDL', youtube: '' },
            { name: 'Med Ball Preset 3', duration: '6-8 min', description: 'Med Ball Squat, Wood Chop, Rainbow Slams, Reverse Lunge, Single Leg Glute Extension (Foot on Ball)', youtube: '' },

            // Individual exercises
            { name: 'Med Ball Slams', duration: '10 reps', description: 'Overhead to ground', youtube: '' },
            { name: 'Med Ball Chest Pass', duration: '10 reps', description: 'Explosive push to wall/partner', youtube: '' },
            { name: 'Med Ball Rotational Throws', duration: '8 each side', description: 'Side toss to wall', youtube: '' },
            { name: 'Med Ball Overhead Throws', duration: '10 reps', description: 'Backward overhead toss', youtube: '' },
            { name: 'Med Ball Squat to Press', duration: '10 reps', description: 'Full body activation', youtube: '' },
            { name: 'Med Ball Wood Chops', duration: '10 each side', description: 'High to low rotation', youtube: '' },
            { name: 'Med Ball Figure 8s', duration: '10 reps', description: 'Around the body pattern', youtube: '' },
            { name: 'Med Ball Russian Twists', duration: '20 reps', description: 'Seated core rotation', youtube: '' },
            { name: 'Med Ball Scoop Toss', duration: '10 reps', description: 'Low to high throw', youtube: '' },
            { name: 'Med Ball Kneeling Side Toss', duration: '8 each side', description: 'Kneeling rotational throw to wall/partner', youtube: '' },
            { name: 'Kneeling Side Toss', duration: '8 each side', description: 'Kneeling rotational throw to wall/partner', youtube: '' },
            { name: 'Med Ball Side Throw', duration: '8 each side', description: 'Standing lateral throw to wall', youtube: '' },
            { name: 'Forward Scoop Toss', duration: '8-10 reps', description: 'Explosive forward scoop and throw', youtube: '' },
            { name: 'Med Ball Rainbow Slams', duration: '8 each side', description: 'Arc pattern slam', youtube: '' },
            { name: 'Around the Worlds', duration: '10 reps each direction', description: 'Circle ball around waist/head/knees', youtube: '' },
            { name: 'Windshield Wipers', duration: '10 reps each side', description: 'Side to side core rotation', youtube: '' },
            { name: 'Trunk Rotations', duration: '10 reps each side', description: 'Standing torso rotation with ball', youtube: '' },
            { name: 'Med Ball Reverse Lunge', duration: '8 each leg', description: 'Reverse lunge holding med ball', youtube: '' },
            { name: 'Med Ball Forward Lunge', duration: '8 each leg', description: 'Forward lunge holding med ball', youtube: '' },
            { name: 'Med Ball Good Morning', duration: '10 reps', description: 'Hip hinge holding ball at chest', youtube: '' },
            { name: 'Med Ball 3 Way RDL', duration: '5 each direction', description: 'RDL to front, diagonal, side', youtube: '' },
            { name: 'Cross Body Wood Chop', duration: '10 each side', description: 'Diagonal chop across body', youtube: '' },
            { name: 'Med Ball Lateral Lunge', duration: '8 each side', description: 'Lateral lunge holding med ball', youtube: '' },
            { name: 'Med Ball Squat', duration: '10 reps', description: 'Squat holding ball at chest', youtube: '' },
            { name: 'Single Leg Glute Extension (Foot on Ball)', duration: '10 each leg', description: 'Bridge with foot on med ball', youtube: '' },
            { name: 'Backward Scoop Toss', duration: '8-10 reps', description: 'Explosive backward toss behind you', youtube: '' }
        ]
    },

    cardio: {
        label: "Cardio",
        exercises: [
            // Presets
            { name: 'Cardio Preset 1 - Quick Warmup', duration: '5 min', description: 'Jumping Jacks, High Knees, Butt Kicks, Mountain Climbers', youtube: '' },
            { name: 'Cardio Preset 2 - Machine Warmup', duration: '5-8 min', description: 'Treadmill Jog, Rowing Machine, Stationary Bike (choose one)', youtube: '' },
            { name: 'Cardio Preset 3 - Jump Rope Circuit', duration: '3-5 min', description: 'Jump Rope Single Unders, Jumping Jacks, High Knees, Jump Rope Single Unders', youtube: '' },

            // Individual exercises
            { name: 'Jump Rope (Single Unders)', duration: '2 min', description: 'Basic jump rope', youtube: '' },
            { name: 'Jump Rope (Double Unders)', duration: '30-60s', description: 'Advanced jump rope', youtube: '' },
            { name: 'Treadmill Walk or Jog', duration: '5-10 min', description: 'Light pace warm-up', youtube: '' },
            { name: 'Treadmill Incline Walk', duration: '5 min', description: '3-5% incline', youtube: '' },
            { name: 'Elliptical', duration: '5-10 min', description: 'Low impact cardio', youtube: '' },
            { name: 'Stationary Bike', duration: '5-10 min', description: 'Light resistance cycling', youtube: '' },
            { name: 'Rowing Machine', duration: '5 min', description: 'Light pace rowing', youtube: '' },
            { name: 'Assault Bike', duration: '3-5 min', description: 'Light pace air bike', youtube: '' },
            { name: 'Ski Erg', duration: '3-5 min', description: 'Light pace skiing', youtube: '' },
            { name: 'Jumping Jacks', duration: '30-60s', description: 'Classic warm-up', youtube: '' },
            { name: 'High Knees', duration: '30s', description: 'In place knee drives', youtube: '' },
            { name: 'Butt Kicks', duration: '30s', description: 'In place heel to glute', youtube: '' },
            { name: 'Mountain Climbers', duration: '30s', description: 'Plank position running', youtube: '' }
        ]
    },

    low_impact_agility: {
        label: "Low Impact Agility",
        exercises: [
            // Presets
            { name: 'Low Impact Preset 1 - Dynamic Movement Prep', duration: '5-7 min', description: 'Walking Lunges, Walking Knee Hugs, Walking Quad Stretch, Leg Swings Front-Back, Leg Swings Side-Side', youtube: '' },
            { name: 'Low Impact Preset 2 - Multi-Directional Warmup', duration: '4-6 min', description: 'Lateral Shuffle, Backward Jog, Grapevine/Carioca, Cone Weave Walk, Walking Lunges', youtube: '' },
            { name: 'Low Impact Preset 3 - Ladder Combo', duration: '4-5 min', description: 'Ladder Quick Feet, Ladder Icky Shuffle, Ladder Lateral Shuffle, Ladder In-Out', youtube: '' },

            // Individual exercises
            { name: 'Ladder - Lateral 3 hops 1 back', duration: '2-3 passes', description: 'Fast feet through ladder', youtube: '' },
            { name: 'Ladder - Lateral Crossover Run', duration: '2-3 passes', description: 'In-in-out-out pattern', youtube: '' },
            { name: 'Ladder - 3 Hops Forward 1 Hop Back', duration: '2-3 passes', description: 'Fast feet through ladder', youtube: '' },
            { name: 'Ladder - 2 in 2 out', duration: '2-3 passes', description: 'In-in-out-out pattern', youtube: '' },
            { name: 'Ladder - Quick Feet', duration: '2-3 passes', description: 'Fast feet through ladder', youtube: '' },
            { name: 'Ladder - Icky Shuffle', duration: '2-3 passes', description: 'In-in-out-out pattern', youtube: '' },
            { name: 'Ladder - Icky Lunge', duration: '2-3 passes', description: 'In-in-out-out pattern', youtube: '' },
            { name: 'Ladder - Lateral Shuffle', duration: '2-3 passes', description: 'Side to side', youtube: '' },
            { name: 'Ladder - Carioca', duration: '2-3 passes', description: 'Crossover pattern', youtube: '' },
            { name: 'Ladder - In-Out', duration: '2-3 passes', description: 'Both feet in/out each square', youtube: '' },
            { name: 'Ladder - Single Leg Hops', duration: '2 passes each leg', description: 'One foot per square', youtube: '' },
            { name: 'Cone Weave (Walk)', duration: '2-3 passes', description: 'Slow weave pattern', youtube: '' },
            { name: 'Walking Lunges', duration: '10 each leg', description: 'Controlled lunge walk', youtube: '' },
            { name: 'Lateral Shuffle', duration: '20 yards each', description: 'Side shuffle', youtube: '' },
            { name: 'Backward Jog', duration: '20 yards', description: 'Light backward running', youtube: '' },
            { name: 'Grapevine/Carioca', duration: '20 yards each', description: 'Crossover shuffle', youtube: '' },
            { name: 'Walking Knee Hugs', duration: '10 each leg', description: 'Pull knee to chest', youtube: 'https://iframe.videodelivery.net/6a44bb05ac5e16d048c9c016102d7537' },
            { name: 'Walking Quad Stretch', duration: '10 each leg', description: 'Pull heel to glute', youtube: '' },
            { name: 'Leg Swings (Front-Back)', duration: '10 each leg', description: 'Forward and back pendulum', youtube: '' },
            { name: 'Leg Swings (Side-Side)', duration: '10 each leg', description: 'Lateral pendulum', youtube: '' }
        ]
    },

    other: {
        label: "Other",
        exercises: [
            // Presets
            { name: 'General Preset 1 - Full Body Dynamic', duration: '6-8 min', description: 'Arm Circles, Bodyweight Squats, Inchworms, World\'s Greatest Stretch, Spiderman Stretch, Cat-Cow Stretch, Hip Circles', youtube: '' },
            { name: 'General Preset 2 - Upper Body Prep', duration: '4-5 min', description: 'Arm Circles, Shoulder Dislocations Band, Band Pull-Aparts, Scapular Wall Slides, Cat-Cow Stretch', youtube: '' },
            { name: 'General Preset 3 - Lower Body & Core', duration: '5-6 min', description: 'Bodyweight Squats, Glute Bridges, Hip Circles, Dynamic Pigeon Stretch, 90/90 Hip Switches, Dead Bugs', youtube: '' },

            // Individual exercises
            { name: 'Arm Circles', duration: '10 each direction', description: 'Small to large circles', youtube: '' },
            { name: 'Shoulder Dislocations (Band)', duration: '10 reps', description: 'Over and back with band', youtube: 'https://iframe.videodelivery.net/210d4937269e8c06ff0816e553f73ef8' },
            { name: 'Cat-Cow Stretch', duration: '10 reps', description: 'Spine flexion/extension', youtube: 'https://iframe.videodelivery.net/b2007113903d3b11cc57d761bc1f64ac' },
            { name: 'World\'s Greatest Stretch', duration: '5 each side', description: 'Multi-planar stretch', youtube: 'https://iframe.videodelivery.net/4ebe69d05688443f972a417bed9688e8' },
            { name: 'Pain Train Quad Stretch', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Spiderman Stretch', duration: '5 each side', description: 'Hip and thoracic mobility', youtube: 'https://iframe.videodelivery.net/8fd4ede989c23a7bcb9ff43780d7d725' },
            { name: 'Figure 4 on Wall Stretch', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Door Jam Hamstring Stretch', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Black Birds', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Inchworms', duration: '8 reps', description: 'Walk hands out to push-up', youtube: 'https://iframe.videodelivery.net/c59d2a0bd160f2f78e08ac1c1ade8580' },
            { name: 'Bodyweight Squats', duration: '10 reps', description: 'Air squats', youtube: '' },
            { name: 'Glute Bridges', duration: '10 reps', description: 'Hip extension', youtube: '' },
            { name: 'Single Leg Glute Bridge', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Single Leg Glute Bridge Cross Leg', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Glute Bridge on Med ball/Foam Roller', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Bird Dogs', duration: '8 each side', description: 'Opposite arm/leg extension', youtube: '' },
            { name: 'Dead Bugs', duration: '10 each side', description: 'Core stability', youtube: '' },
            { name: 'Band Pull-Aparts', duration: '15 reps', description: 'Shoulder health', youtube: '' },
            { name: 'Scapular Wall Slides', duration: '10 reps', description: 'Shoulder blade control', youtube: 'https://iframe.videodelivery.net/03ce92b6428992632f0fd5570c4813d2' },
            { name: 'Hip Circles on Back', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Hands & Knees Hip Circles', duration: '10 each direction', description: 'Quadruped position hip mobility circles', youtube: '' },
            { name: 'Hip Circles Quadriped', duration: '10 each direction', description: 'Hip mobility', youtube: '' },
            { name: 'Ankle Circles', duration: '10 each direction', description: 'Ankle mobility', youtube: 'https://iframe.videodelivery.net/691b46c16dc1027f41adebf9b2bd7c93' },
            { name: 'Wrist Circles', duration: '10 each direction', description: 'Wrist mobility', youtube: '' },
            { name: 'Neck Rolls', duration: '5 each direction', description: 'Gentle neck mobility', youtube: '' },
            { name: 'Broom Handle RDL Posture', duration: '5 each direction', description: 'Work on Technique', youtube: '' },
            { name: 'Dynamic Pigeon Stretch', duration: '8 each side', description: 'Hip opener', youtube: '' },
            { name: '90/90 Hip Switches', duration: '10 reps', description: 'Hip internal/external rotation', youtube: 'https://iframe.videodelivery.net/dad63aa297acbb88c9918e299ba1d87f' },
            { name: 'Frog Stretch', duration: '30-60s', description: 'Deep hip and groin stretch', youtube: 'https://iframe.videodelivery.net/253c73bfc85d17e580ab2fd15ae0d664' },
            { name: 'Up and Overs', duration: '30-60s', description: 'Deep hip and groin stretch', youtube: '' },
            { name: 'Leg Out Frog Stretch', duration: '10 each direction', description: 'Hip mobility', youtube: '' },

            // Golf-specific warmup exercises
            { name: 'Dynamic Hip Flexor Stretch', duration: '8 each side', description: 'Active hip flexor stretch with movement', youtube: '' },
            { name: 'Hang From Bar', duration: '20-30s', description: 'Passive hang for shoulder and spine decompression', youtube: '' },
            { name: 'Wrist Stretch on All 4\'s', duration: '30s each position', description: 'Quadruped wrist stretches all directions', youtube: '' },
            { name: 'Hip Circles Squeeze Ball in Ham', duration: '10 each direction', description: 'Hip circles with ball squeezed in hamstring', youtube: '' },
            { name: 'Shoulder Dislocate w/Ball', duration: '10 reps', description: 'Shoulder dislocations using medicine ball', youtube: '' },
            { name: 'Leg Curl/Glute Ext w/Ball', duration: '10 reps', description: 'Swiss ball hamstring curl and glute extension combo', youtube: '' },
            { name: 'Shoulder Tap in Plank Position', duration: '10 each side', description: 'Plank with alternating shoulder taps', youtube: '' },
            { name: 'Spider Hand Walks on Wall', duration: '8 each side', description: 'Hands walk up wall in spider pattern', youtube: '' },
            { name: 'Hip Openers', duration: '8 each side', description: 'Standing or kneeling hip opener stretch', youtube: '' },
            { name: 'Downward Dog to Cobra', duration: '10 reps', description: 'Flow from downward dog to cobra pose', youtube: '' },
            { name: 'Torso Twists w/Bar', duration: '10 each side', description: 'Standing rotations holding bar/PVC', youtube: '' },
            { name: 'Y-T-W Shoulder Mobility', duration: '10 reps each', description: 'Prone shoulder pattern series', youtube: '' },
            { name: 'Wrist Rockers (Table Top Pos.)', duration: '10 reps', description: 'Wrist mobility in quadruped position', youtube: '' },
            { name: 'Pigeon Pose + Grab Back Foot', duration: '30s each side', description: 'Pigeon pose with quad stretch', youtube: '' },
            { name: 'Cat-Camel Stretch + Thread', duration: '8 reps', description: 'Cat-cow with threading needle rotation', youtube: '' },
            { name: 'Shoulder Up and Overs', duration: '10 reps', description: 'Shoulder elevation and rotation pattern', youtube: '' },
            { name: 'Wrist Curl and Extension', duration: '10 each', description: 'Active wrist flexion and extension', youtube: '' },
            { name: 'Overhead Squats with PVC Pipe', duration: '10 reps', description: 'Overhead squat mobility with PVC', youtube: '' },
            { name: 'PVC Core Holds w/Partner', duration: '20-30s', description: 'Partner-resisted core stabilization with PVC', youtube: '' },
            { name: 'Squat - T Spine Rotations', duration: '8 each side', description: 'Deep squat hold with thoracic rotation', youtube: '' },
            { name: 'Hang From Bar Flag Stretch', duration: '20-30s each side', description: 'Passive hang with lateral flexion for lat stretch', youtube: '' },

            // Corrective Exercises
            { name: 'Stability Ball Internal External Stretch', duration: '30s each side', description: 'Internal and external rotation stretch using stability ball', youtube: '' },
            { name: 'T-Spine Rotations', duration: '8-10 each side', description: 'Thoracic spine rotation mobility', youtube: '' },
            { name: 'X-Band Walks', duration: '10-15 each direction', description: 'Lateral band walks in X pattern for glute activation', youtube: '' },
            { name: 'Clam Shells', duration: '10-15 each side', description: 'Side-lying hip abduction for glute activation', youtube: '' },
            { name: 'Clam Shell Leg Slides on Wall', duration: '10-15 each side', description: 'Clam shell variation with leg slides against wall', youtube: '' }
        ]
    },

    dynamic_warmup: {
        label: "Dynamic Warmup",
        exercises: [
            // Presets
            { name: 'Dynamic Warmup Preset 1 - Linear Day', duration: '8-10 min', description: 'Straight Arm Skips, Running Backward, Arm Circles with Skip Switch Halfway, Running Backward, Straight Leg Walk Half & Straight Leg Skip Half, Backward Track Skip (Up Up Out Out), Left Leg Up Right Leg Around Skip (Opposite Leg on Way Back), 10 Gate Swings', youtube: '' },
            { name: 'Dynamic Warmup Preset 2 - Lateral Day', duration: '8-10 min', description: 'Straight Arm Skip, Running Backward, Arm Circles Switch Halfway, Running Backward, Straight Leg Walk Halfway to Straight Leg Skip, Backward Hip Opener Skips, Lateral Cross Body Skips Down, Lateral Cross Body Skips Back, Carioca Down, Carioca Back, 10 Gate Swings', youtube: '' },
            { name: 'Dynamic Warmup Preset 3 - Multi-Directional Day', duration: '8-10 min', description: 'Straight Arm Skip Switch Halfway, Running Backward, Arm Circles Switch Halfway, Straight Leg Skip Coming Back, Low Ankle Run Down, High Knee Cycle on Way Back, Side Shuffle Down, Side Shuffle Back, Lunge with Twist Down, Backward C Skip (Back Up Out Up Out)', youtube: '' },

            // Individual exercises
            { name: 'Straight Arm Skips', duration: '10-20 yards', description: 'Arms straight, skip forward', youtube: '' },
            { name: 'Running Backward', duration: '10-20 yards', description: 'Controlled backward running', youtube: '' },
            { name: 'Arm Circles with Skip Switch Halfway', duration: '10-20 yards', description: 'Arm circles while skipping, switch direction halfway', youtube: '' },
            { name: 'Straight Leg Walk', duration: '10-20 yards', description: 'Stiff leg march forward', youtube: '' },
            { name: 'Straight Leg Skip', duration: '10-20 yards', description: 'Stiff leg skip forward', youtube: '' },
            { name: 'Backward Track Skip (Up Up Out Out)', duration: '10-20 yards', description: 'Backward skip with up-up-out-out pattern', youtube: '' },
            { name: 'Left Leg Up Right Leg Around Skip', duration: '10-20 yards', description: 'Alternating leg pattern skip', youtube: '' },
            { name: 'Gate Swings', duration: '10 each leg', description: 'Hip opening leg swings', youtube: '' },
            { name: 'Backward Hip Opener Skips', duration: '10-20 yards', description: 'Backward skip with hip rotation', youtube: '' },
            { name: 'Lateral Cross Body Skips', duration: '10-20 yards', description: 'Lateral movement with cross body pattern', youtube: '' },
            { name: 'Carioca', duration: '10-20 yards', description: 'Lateral crossover running pattern', youtube: '' },
            { name: 'Low Ankle Run', duration: '10-20 yards', description: 'Low ground contact running', youtube: '' },
            { name: 'High Knee Cycle', duration: '10-20 yards', description: 'Exaggerated high knee running', youtube: '' },
            { name: 'Side Shuffle', duration: '10-20 yards', description: 'Lateral shuffling movement', youtube: '' },
            { name: 'Lunge with Twist', duration: '10-20 yards', description: 'Walking lunge with torso rotation', youtube: '' },
            { name: 'Heel to Butt, Knee to Chest, Lunge', duration: '10-20 yards', description: 'Walking lunge running mechanics', youtube: '' },
            { name: 'Backward C Skip (Back Up Out Up Out)', duration: '10-20 yards', description: 'Backward C skip pattern', youtube: '' }
        ]
    },

    agility_ladder: {
        label: "Agility Ladder",
        exercises: [
            // Linear Presets
            { name: 'Linear Agility Preset 1', duration: '2-3 passes each', description: 'Zig Zag Hops, Single Leg Hop, High Knees, Two In Two Out, Forward-Backward Hops, Quick Feet, Forward Ladder Run', youtube: '' },
            { name: 'Linear Agility Preset 2', duration: '2-3 passes each', description: 'Forward Ladder Run, Zig-Zag Run, Double Leg Hop, Heel Flicks, Toe Taps, 2x2 Quick Step, Single Leg In & Out', youtube: '' },
            { name: 'Linear Agility Preset 3', duration: '2-3 passes each', description: '1-2 Step, Forward Hopscotch, Backward Hopscotch, 3-Step In-Out, Forward-Backward 2-Step, Ladder Sprint, In-Out Drill, Forward Bounding, Backward Bounding', youtube: '' },

            // Lateral Presets
            { name: 'Lateral Agility Preset 1', duration: '2-3 passes each', description: 'Icky Shuffle, Bunny Hops, Lateral Icky Shuffle, In-In-Out-Out, Side Steps, Carioca, Crossover Steps', youtube: '' },
            { name: 'Lateral Agility Preset 2', duration: '2-3 passes each', description: 'Ali Shuffle, Lateral Quick Feet, Lateral Bounds, Side-to-Side Hops, Zig-Zag Lateral Shuffle, Lateral Hop In, Lateral Hop Out', youtube: '' },
            { name: 'Lateral Agility Preset 3', duration: '2-3 passes each', description: 'Zig-Zag Lateral Shuffle, Lateral Hop In, Lateral Hop Out, Forward/Backward Carioca, Side Lunge Step, Lateral Quick Shuffle, Lateral 2-Step Hop', youtube: '' },

            // Multi-Directional Presets
            { name: 'Multi-Directional Agility Preset 1', duration: '2-3 passes each', description: 'Ali Shuffle, Lateral Quick Feet, Lateral Bounds, Side-to-Side Hops, Icky Shuffle, Bunny Hops, Lateral Icky Shuffle, In-In-Out-Out', youtube: '' },
            { name: 'Multi-Directional Agility Preset 2', duration: '2-3 passes each', description: '3-Step In-Out, Forward-Backward 2-Step, Single Leg In & Out, Forward Skip, Backward Skip, 1-2 Step, Forward Hopscotch, Crossover Hop, Zig-Zag Forward-Backward', youtube: '' },
            { name: 'Multi-Directional Agility Preset 3', duration: '2-3 passes each', description: 'Ladder Sprint, In-Out Drill, Forward Bounding, Backward Bounding, Zig-Zag Lateral Shuffle, Lateral Hop In, Lateral Hop Out, Forward/Backward Carioca, Side Lunge Step, Lateral Quick Shuffle, Lateral 2-Step Hop', youtube: '' },

            // Individual exercises - Linear
            { name: 'Zig Zag Hops', duration: '2-3 passes', description: 'Linear - Forward zig-zag pattern', youtube: '' },
            { name: 'Single Leg Hop', duration: '2 passes each leg', description: 'Linear - One foot per square', youtube: '' },
            { name: 'High Knees', duration: '2-3 passes', description: 'Linear - Knee drive emphasis', youtube: '' },
            { name: 'Two In, Two Out', duration: '2-3 passes', description: 'Linear - Both feet in/out pattern', youtube: '' },
            { name: 'Forward-Backward Hops', duration: '2-3 passes', description: 'Linear - Front and back pattern', youtube: '' },
            { name: 'Quick Feet', duration: '2-3 passes', description: 'Linear - Fast feet through ladder', youtube: '' },
            { name: 'Forward Ladder Run', duration: '2-3 passes', description: 'Linear - One foot per square running', youtube: '' },

            // Individual exercises - Lateral
            { name: 'Icky Shuffle', duration: '2-3 passes', description: 'Lateral - In-in-out-out pattern', youtube: '' },
            { name: 'Bunny Hops', duration: '2-3 passes', description: 'Lateral - Side-to-side hops', youtube: '' },
            { name: 'Carioca', duration: '2-3 passes', description: 'Lateral - Crossover shuffle pattern', youtube: '' },
            { name: 'Lateral Quick Feet', duration: '2-3 passes', description: 'Lateral - Fast lateral steps', youtube: '' },
            { name: 'Ali Shuffle', duration: '2-3 passes', description: 'Lateral - Quick in-out shuffle', youtube: '' },

            // Individual exercises - Multi-Directional
            { name: 'Diagonal Run', duration: '2-3 passes', description: 'Multi - Diagonal movement pattern', youtube: '' },
            { name: 'Crossover Hop', duration: '2-3 passes', description: 'Multi - Cross-body hop pattern', youtube: '' },
            { name: 'Zig-Zag Forward-Backward', duration: '2-3 passes', description: 'Multi - Combined directional changes', youtube: '' }
        ]
    },

    stretching: {
        label: "Stretching",
        exercises: [
            { name: 'Stretching Preset 1', duration: '8-10 min', description: 'Full body stretching routine', youtube: 'https://iframe.videodelivery.net/c56ea8baf3b7f312b8c7dece4d605232' },
            { name: 'Yoga Stretches - Pyramid, Triangle, Low Lunge, Extended Angle', duration: '10-12 min', description: 'Yoga-based stretching flow: Pyramid, Triangle, Low Lunge, Extended Angle', youtube: 'https://iframe.videodelivery.net/852c6f132a1e324c46061302cabdc3dc' }
        ]
    }
};



