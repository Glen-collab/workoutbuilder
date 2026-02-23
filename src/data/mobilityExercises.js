// mobility-exercises.js
// Dedicated mobility exercise library



export const mobilityCategories = {
    hip_mobility: {
        label: "Hip Mobility",
        exercises: [
            // Presets
            { name: 'Hip Mobility Preset 1 - Hip Flexor Focus', duration: '8-10 min', description: 'Couch Stretch, Kneeling Hip Flexor Stretch, World\'s Greatest Stretch, Deep Squat Hold, Hip CARs', youtube: '' },
            { name: 'Hip Mobility Preset 2 - Hip Rotational', duration: '7-9 min', description: 'Pigeon Pose, 90/90 Hip Stretch, Figure 4 Stretch, Cossack Squat, Hip CARs', youtube: '' },
            { name: 'Hip Mobility Preset 3 - Adductor & Groin', duration: '6-8 min', description: 'Frog Pose, Butterfly Stretch, Lizard Pose, Cossack Squat, Adductor Stretch', youtube: '' },

            // Individual exercises
            { name: 'Pigeon Pose', duration: '60s each side', description: 'Deep hip external rotation stretch', youtube: '' },
            { name: 'Quadruped Pigeon Variation', duration: '60s each side', description: 'Hip opener in quadruped position', youtube: 'https://iframe.videodelivery.net/53b2f45cc8fbb998896fae386930b42a' },
            { name: 'Bench-Assisted Pigeon Stretch', duration: '60s each side', description: 'Pigeon pose with bench support', youtube: 'https://iframe.videodelivery.net/faadb1ccb6d786ceae76ff5fd1d2dfe5' },
            { name: 'Lizard Pose', duration: '60s each side', description: 'Hip flexor and groin opener', youtube: '' },
            { name: 'Frog Pose', duration: '90s', description: 'Deep hip adductor stretch', youtube: 'https://iframe.videodelivery.net/253c73bfc85d17e580ab2fd15ae0d664' },
            { name: 'Hip Mobility Sequence', duration: '60s', description: 'Hip and lower back opener', youtube: 'https://iframe.videodelivery.net/4cbca30d8b540253c1dc51d496a6031c' },
            { name: '90/90 Hip Stretch', duration: '60s each side', description: 'Internal/external hip rotation', youtube: 'https://iframe.videodelivery.net/dad63aa297acbb88c9918e299ba1d87f' },
            { name: 'Figure 4 Stretch (Supine)', duration: '60s each side', description: 'Glute and hip stretch', youtube: 'https://iframe.videodelivery.net/2d9bd9a2d24d6388cbae67f723fd28d0' },
            { name: 'Couch Stretch', duration: '90s each side', description: 'Deep hip flexor opener', youtube: 'https://iframe.videodelivery.net/4785a76eae5933fa8e746be8b71633d1' },
            { name: 'Butterfly Stretch', duration: '60s', description: 'Hip adductor mobility', youtube: '' },
            { name: 'Kneeling Hip Flexor Stretch', duration: '60s each side', description: 'Hip flexor lengthening', youtube: '' },
            { name: 'Deep Squat Hold', duration: '90s', description: 'Hip, ankle, and thoracic mobility', youtube: '' },
            { name: 'Super 8s', duration: '2 rounds', description: 'Dynamic hip mobility circuit', youtube: '' },
            { name: 'Hip CARs (Controlled Articular Rotations)', duration: '5 each direction', description: 'Hip joint mobility', youtube: 'https://iframe.videodelivery.net/5d9d51c1b27d12373a3d16071280021c' },
            { name: 'Cossack Squat', duration: '8 each side', description: 'Lateral hip and adductor mobility', youtube: 'https://iframe.videodelivery.net/91334fbb15b201708227396b29490c46' },
            { name: 'Seated Hip External Rotation (Band)', duration: '10 reps each side', description: 'Hip external rotation with band resistance', youtube: 'https://iframe.videodelivery.net/c4b30cc12260c61bf2548ded0188adbe' },
            { name: 'World\'s Greatest Stretch', duration: '5 each side', description: 'Multi-planar hip mobility', youtube: 'https://iframe.videodelivery.net/4ebe69d05688443f972a417bed9688e8' },
            { name: 'Glute Stretch (Seated)', duration: '60s each side', description: 'Hip and glute mobility', youtube: 'https://iframe.videodelivery.net/2d9bd9a2d24d6388cbae67f723fd28d0' },
            { name: 'Hip Flexor Stretch (Kneeling)', duration: '60s each side', description: 'Hip flexor lengthening', youtube: 'https://iframe.videodelivery.net/288a754fa8de14636203f1e55de57a3b' },
            { name: 'Adductor Stretch (Seated)', duration: '60s', description: 'Inner thigh stretch', youtube: '' },
            { name: 'Leg Swings (Front-Back)', duration: '10 each leg', description: 'Dynamic hip flexion/extension', youtube: '' },
            { name: 'Leg Swings (Side-Side)', duration: '10 each leg', description: 'Dynamic hip abduction/adduction', youtube: '' }
        ]
    },

    ankle_mobility: {
        label: "Ankle Mobility",
        exercises: [
            // Presets
            { name: 'Ankle Mobility Preset 1 - Dorsiflexion Focus', duration: '5-7 min', description: 'Ankle Dorsiflexion Wall, Ankle Circles, Calf Stretch Straight Leg, Deep Squat Hold', youtube: '' },
            { name: 'Ankle Mobility Preset 2 - Calf Complex', duration: '5-6 min', description: 'Calf Stretch Straight Leg, Calf Stretch Bent Knee, Ankle Dorsiflexion Wall, Ankle Circles', youtube: '' },
            { name: 'Ankle Mobility Preset 3 - Dynamic Ankle Prep', duration: '4-5 min', description: 'Ankle Circles, Toe Touch Progression, A-Skip, Ankle Dorsiflexion Wall', youtube: '' },

            // Individual exercises
            { name: 'Ankle Circles', duration: '10 each direction', description: 'Ankle mobility', youtube: 'https://iframe.videodelivery.net/691b46c16dc1027f41adebf9b2bd7c93' },
            { name: 'Ankle Dorsiflexion (Wall)', duration: '10 reps each', description: 'Ankle mobility for squatting', youtube: '' },
            { name: 'Calf Stretch (Straight Leg)', duration: '30s each side', description: 'Gastrocnemius stretch', youtube: 'https://iframe.videodelivery.net/964c92c33177508cd4c309a87428ec1d' },
            { name: 'Calf Stretch (Bent Knee)', duration: '30s each side', description: 'Soleus stretch', youtube: '' },
            { name: 'Deep Squat Hold', duration: '90s', description: 'Ankle and hip mobility', youtube: '' },
            { name: 'Toe Touch Progression', duration: '10 reps', description: 'Ankle and posterior chain', youtube: '' },
            { name: 'A-Skip', duration: '20 yards', description: 'Ankle mobility and coordination', youtube: '' }
        ]
    },

    shoulder_mobility: {
        label: "Shoulder Mobility",
        exercises: [
            // Presets
            { name: 'Shoulder Mobility Preset 1 - Overhead Focus', duration: '6-8 min', description: 'Shoulder Dislocations, Wall Slides, Overhead Reach Wall, Scapular Wall Slides', youtube: '' },
            { name: 'Shoulder Mobility Preset 2 - Rotator Cuff', duration: '5-7 min', description: 'Banded Internal/External Rotations, Cross-Body Shoulder Stretch, Doorway Pec Stretch, Child\'s Pose', youtube: '' },
            { name: 'Shoulder Mobility Preset 3 - Scapular Control', duration: '5-6 min', description: 'Wall Slides, Scapular Wall Slides, Cat-Cow Stretch, Banded Rotations', youtube: '' },

            // Individual exercises
            { name: 'Shoulder Dislocations (Band/PVC)', duration: '10 reps', description: 'Over and back shoulder mobility', youtube: 'https://iframe.videodelivery.net/210d4937269e8c06ff0816e553f73ef8' },
            { name: 'Wall Slides', duration: '10 reps', description: 'Scapular control and overhead mobility', youtube: 'https://iframe.videodelivery.net/03ce92b6428992632f0fd5570c4813d2' },
            { name: 'Doorway Pec Stretch', duration: '60s each side', description: 'Chest and anterior shoulder stretch', youtube: 'https://iframe.videodelivery.net/0dc5a7ad69cadf1bb7b929ebce285b7f' },
            { name: 'Cross-Body Shoulder Stretch', duration: '30s each side', description: 'Posterior shoulder mobility', youtube: '' },
            { name: 'Overhead Reach (Wall)', duration: '10 reps', description: 'Shoulder flexion mobility', youtube: '' },
            { name: 'Scapular Wall Slides', duration: '10 reps', description: 'Shoulder blade control', youtube: 'https://iframe.videodelivery.net/03ce92b6428992632f0fd5570c4813d2' },
            { name: 'Banded Internal/External Rotations', duration: '10 each direction', description: 'Rotator cuff mobility', youtube: '' },
            { name: 'Band Shoulder Dislocates', duration: '10 reps', description: 'Shoulder mobility with band', youtube: 'https://iframe.videodelivery.net/210d4937269e8c06ff0816e553f73ef8' },
            { name: 'Arm Across Chest Stretch', duration: '30s each side', description: 'Shoulder cross-body stretch', youtube: 'https://iframe.videodelivery.net/9a84ab708858b1ae7abf479880fe34c6' },
            { name: 'Child\'s Pose (Lat Stretch)', duration: '60s', description: 'Lat and shoulder stretch', youtube: '' },
            { name: 'Cat-Cow Stretch', duration: '10 reps', description: 'Shoulder and spine mobility', youtube: 'https://iframe.videodelivery.net/b2007113903d3b11cc57d761bc1f64ac' }
        ]
    },

    tspine_mobility: {
        label: "T-Spine Mobility",
        exercises: [
            // Presets
            { name: 'T-Spine Mobility Preset 1 - Rotation Focus', duration: '5-7 min', description: 'Thoracic Spine Rotations Quadruped, Thread the Needle, Cat-Cow Stretch, Foam Roll Thoracic Spine', youtube: '' },
            { name: 'T-Spine Mobility Preset 2 - Extension Focus', duration: '5-6 min', description: 'Foam Roll Thoracic Spine, Cat-Cow Stretch, Child\'s Pose, Thoracic Extensions over Foam Roller', youtube: '' },
            { name: 'T-Spine Mobility Preset 3 - Complete T-Spine', duration: '6-8 min', description: 'Thoracic Rotations, Thread the Needle, Foam Roll Thoracic, Cat-Cow, Wall Slides', youtube: '' },

            // Individual exercises
            { name: 'Thoracic Spine Rotations (Quadruped)', duration: '8 each side', description: 'Upper back rotation', youtube: '' },
            { name: 'Cat-Cow Stretch', duration: '10 reps', description: 'Spine flexion and extension', youtube: 'https://iframe.videodelivery.net/b2007113903d3b11cc57d761bc1f64ac' },
            { name: 'Thread the Needle', duration: '8 each side', description: 'Thoracic rotation and shoulder mobility', youtube: '' },
            { name: 'Foam Roll Thoracic Spine', duration: '60s', description: 'Upper back mobility', youtube: '' },
            { name: 'Child\'s Pose', duration: '60s', description: 'Thoracic and shoulder stretch', youtube: '' },
            { name: 'Thoracic Extensions (Foam Roller)', duration: '10 reps', description: 'T-spine extension mobility', youtube: 'https://iframe.videodelivery.net/7911d9deffdfc1f387fbf4cbde74799f' },
            { name: 'Wall Slides', duration: '10 reps', description: 'T-spine and scapular mobility', youtube: 'https://iframe.videodelivery.net/03ce92b6428992632f0fd5570c4813d2' }
        ]
    },

    full_body_mobility: {
        label: "Full Body Mobility",
        exercises: [
            // Presets - Each combines 2 exercises from each mobility area (hip, ankle, shoulder, t-spine)
            { name: 'Full Body Preset 1 - Balanced Flow', duration: '12-15 min', description: 'Hip: Pigeon Pose + World\'s Greatest Stretch, Ankle: Ankle Dorsiflexion + Deep Squat Hold, Shoulder: Wall Slides + Doorway Pec Stretch, T-Spine: Thoracic Rotations + Cat-Cow', youtube: '' },
            { name: 'Full Body Preset 2 - Athletic Prep', duration: '12-15 min', description: 'Hip: Hip CARs + Cossack Squat, Ankle: Ankle Circles + Calf Stretch, Shoulder: Shoulder Dislocations + Scapular Wall Slides, T-Spine: Thread the Needle + Foam Roll Thoracic', youtube: '' },
            { name: 'Full Body Preset 3 - Deep Stretch Flow', duration: '15-18 min', description: 'Hip: Couch Stretch + 90/90 Hip Stretch, Ankle: Ankle Dorsiflexion + Toe Touch Progression, Shoulder: Banded Rotations + Child\'s Pose, T-Spine: Thoracic Rotations + Thoracic Extensions', youtube: '' },

            // Individual flow exercises
            { name: 'Sun Salutations', duration: '3-5 rounds', description: 'Yoga flow sequence', youtube: '' },
            { name: 'Flow State Mobility Circuit', duration: '5 min', description: 'Continuous movement flow', youtube: '' },
            { name: 'Yoga Flow (Vinyasa)', duration: '5-10 min', description: 'Dynamic yoga sequence', youtube: '' },
            { name: 'Animal Flow Basics', duration: '5 min', description: 'Ground-based movement patterns', youtube: '' },
            { name: 'Crawling Patterns', duration: '20 yards each', description: 'Bear crawl, crab walk, etc.', youtube: '' },
            { name: 'Full Body Stretch Sequence', duration: '10 min', description: 'Head to toe stretching', youtube: '' },
            { name: 'Mobility Flow (Ido Portal Style)', duration: '5-10 min', description: 'Creative movement patterns', youtube: '' },
            { name: 'Joint-by-Joint Warm-Up', duration: '5 min', description: 'Ankles to neck mobility', youtube: '' }
        ]
    },

    dynamic_mobility: {
        label: "Dynamic Mobility",
        exercises: [
            // Presets
            { name: 'Dynamic Mobility Preset 1 - Walking Series', duration: '5-7 min', description: 'Walking Lunges with Twist, Walking Knee Hugs, Walking Quad Pulls, Walking RDL, Inchworms', youtube: '' },
            { name: 'Dynamic Mobility Preset 2 - Hip Focused', duration: '5-6 min', description: 'Spiderman Lunge with Rotation, Walking Cradles, Lateral Lunge Walking, High Knee Walk', youtube: '' },
            { name: 'Dynamic Mobility Preset 3 - Athletic Warmup', duration: '4-6 min', description: 'A-Skip, B-Skip, Frankenstein Walk, Butt Kickers, High Knee Walk', youtube: '' },

            // Individual exercises
            { name: 'Walking Lunges with Twist', duration: '10 each leg', description: 'Hip and thoracic mobility', youtube: '' },
            { name: 'Inchworms', duration: '8 reps', description: 'Hamstring and shoulder mobility', youtube: 'https://iframe.videodelivery.net/c59d2a0bd160f2f78e08ac1c1ade8580' },
            { name: 'Spiderman Lunge with Rotation', duration: '5 each side', description: 'Hip and thoracic opener', youtube: 'https://iframe.videodelivery.net/8fd4ede989c23a7bcb9ff43780d7d725' },
            { name: 'Walking Knee Hugs', duration: '10 each leg', description: 'Hip flexion mobility', youtube: 'https://iframe.videodelivery.net/6a44bb05ac5e16d048c9c016102d7537' },
            { name: 'Walking Quad Pulls', duration: '10 each leg', description: 'Quad and hip flexor stretch', youtube: '' },
            { name: 'Walking Lunge with knee hug', duration: '10 each leg', description: 'Quad and hip flexor stretch', youtube: 'https://iframe.videodelivery.net/c2beeefb1b48b9a4af41e581bc238acb' },
            { name: 'Walking Cradles (Hip)', duration: '8 each leg', description: 'Hip external rotation mobility', youtube: 'https://iframe.videodelivery.net/0ba4690567301f0e53f10dc1a90a228f' },
            { name: 'Walking RDL', duration: '10 each leg', description: 'Hamstring and balance', youtube: '' },
            { name: 'High Knee Walk', duration: '10 each leg', description: 'Hip flexor activation', youtube: '' },
            { name: 'Butt Kickers (Walking)', duration: '10 each leg', description: 'Hamstring and quad mobility', youtube: '' },
            { name: 'Lateral Lunge (Walking)', duration: '8 each side', description: 'Adductor and hip mobility', youtube: '' },
            { name: 'Frankenstein Walk', duration: '10 each leg', description: 'Hamstring mobility', youtube: '' },
            { name: 'A-Skip', duration: '20 yards', description: 'Hip flexor and ankle mobility', youtube: '' },
            { name: 'B-Skip', duration: '20 yards', description: 'Hamstring and hip mobility', youtube: '' }
        ]
    },

    hurdle_drills: {
        label: "Hurdle Drills",
        exercises: [
            // Presets
            { name: 'Hurdle Preset 1 - Multi-Directional', duration: '5-7 min', description: 'Hurdle Walk Overs Forward, Hurdle Walk Overs Backward, Lateral Hurdle Walk Overs, Hurdle Duck Unders', youtube: '' },
            { name: 'Hurdle Preset 2 - Hip Mobility Focus', duration: '4-6 min', description: 'Hurdle Trail Leg Drill, Hurdle Sits, Lateral Hurdle Walk Overs, Hurdle Step Overs', youtube: '' },
            { name: 'Hurdle Preset 3 - Complete Circuit', duration: '6-8 min', description: 'Hurdle Mobility Circuit (2 rounds of all directions)', youtube: '' },

            // Individual exercises
            { name: 'Hurdle Walk Overs (Forward)', duration: '5 each leg', description: 'Front leg over hurdle, step through', youtube: '' },
            { name: 'Hurdle Walk Overs (Backward)', duration: '5 each leg', description: 'Trail leg over hurdle, step back', youtube: '' },
            { name: 'Lateral Hurdle Walk Overs', duration: '5 each side', description: 'Side-to-side over hurdle', youtube: '' },
            { name: 'Hurdle Trail Leg Drill', duration: '5 each leg', description: 'Trail leg isolation over hurdle', youtube: '' },
            { name: 'Hurdle Duck Unders', duration: '5 reps', description: 'Duck under hurdle, hip hinge', youtube: '' },
            { name: 'Hurdle Step Overs (High Knees)', duration: '5 each leg', description: 'Knee drive over hurdle', youtube: '' },
            { name: 'Hurdle Mobility Circuit', duration: '2 rounds', description: 'Forward, lateral, backward sequence', youtube: '' },
            { name: 'Hurdle Sits (Hip Mobility)', duration: '60s each position', description: 'Seated hurdle stretch positions', youtube: '' }
        ]
    }
};



