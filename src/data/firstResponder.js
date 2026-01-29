// first-responder-exercises.js
// First Responder Training Categories - Firefighter & Police Force



export const firstResponderCategories = {
    // SHARED FOUNDATIONS (High transfer to both police & fire)
    shared: {
        label: "Shared Foundations",
        description: "Core movements essential for both firefighters and police officers",
        subcategories: {
            loaded_carry: {
                label: "Loaded Carry Variations",
                icon: "ðŸ‹ï¸",
                description: "Asymmetric & awkward carries - Grip endurance, lateral core stability, real-world awkwardness",
                exercises: [
                    'Farmers Walk',
                    'Suitcase Carry',
                    'Offset Farmers Walk',
                    'Waiter Carry',
                    'Dumbbell Front Rack Carry',
                    'Barbell Zercher Carry',
                    'Barbell Front Rack Carry',
                    'Barbell Overhead Carry',
                    'Single Arm Overhead Carry',
                    'Farmer Carry March'
                ]
            },
            ground_to_shoulder: {
                label: "Ground-to-Shoulder Rotational Lifts",
                icon: "ðŸ”„",
                description: "Rotational force, trunk bracing, object control - Critical for arrests and rescues",
                exercises: [
                    'Sandbag Clean',
                    'Sandbag Clean and Carry',
                    'Ground-to-Shoulder Sandbag',
                    'Medicine Ball Clean',
                    'Dumbbell Snatch',
                    'Landmine Rotations',
                    'Landmine Rainbow',
                    'Landmine Figure-8',
                    'Tire Flip',
                    'Tire Flip + Jump In'
                ]
            },
            get_ups_under_load: {
                label: "Get-Ups Under Load",
                icon: "â¬†ï¸",
                description: "Floor recovery under fatigue - Common in fights, falls, and confined spaces",
                exercises: [
                    'Turkish Get-Up',
                    'Sit-Up to Stand',
                    'Turkish Get-Up Sit-Up',
                    'Barbell Sit-Up',
                    'Dumbbell Sit-Up',
                    'Weighted Crunches'
                ]
            },
            crawl_variations: {
                label: "Crawl Variations",
                icon: "ðŸ»",
                description: "Core integration, shoulder durability, confined-space movement",
                exercises: [
                    'Bear Crawl',
                    'Bear Crawl Hold',
                    'Bear Crawl + Sprint',
                    'Bear Crawl Push-Ups',
                    'Bear Crawl Shoulder Taps',
                    'Bear Crawl Row',
                    'Dumbbell Bear Crawl Drag',
                    'Dumbbell Plank Drag',
                    'Quadruped Hover Hold'
                ]
            },
            grip_endurance: {
                label: "Grip-Endurance Complexes",
                icon: "âœŠ",
                description: "Grip under fatigue, not max grip - Towel work, rope rows, plate pinches",
                exercises: [
                    'Towel Rows',
                    'Dead Hangs',
                    'Farmers Walk',
                    'Suitcase Carry',
                    'Kroc Row',
                    'Pull-Ups',
                    'Chin-Ups',
                    'Inverted Row',
                    'Hanging Knee Raises',
                    'Hanging Leg Raises'
                ]
            }
        }
    },

    // FIREFIGHTER-SPECIFIC EXERCISES
    firefighter: {
        label: "Firefighter",
        description: "Job-specific movements for firefighting demands",
        subcategories: {
            hose_drag: {
                label: "Hose Drag & Advance",
                icon: "ðŸš’",
                description: "Simulates charged hose movement and low-angle force application",
                exercises: [
                    'Sled Push',
                    'Sled Push + Sprint',
                    'Sled Drag (Forward)',
                    'Sled Drag (Backward)',
                    'Sled Rope Pull',
                    'Sled Rope Overhead Pull',
                    'Sled Chest Press'
                ]
            },
            stair_load_cycles: {
                label: "Stair + Load Cycles",
                icon: "ðŸªœ",
                description: "Step-ups with pack + tool, stair intervals - HR recovery as readiness metric",
                exercises: [
                    'Step-Ups',
                    'Tempo Step-Ups',
                    'Box Step-Up',
                    'Dumbbell Step-Up to Press',
                    'Farmer Carry + Box Step-Up',
                    'Stair Climbing',
                    'Stair Sprint Intervals',
                    'Bulgarian Split Squat',
                    'Reverse Lunge',
                    'Walking Lunges'
                ]
            },
            overhead_fatigue: {
                label: "Overhead Fatigue Work",
                icon: "â˜ï¸",
                description: "Extended overhead holds - Ceiling pull, ventilation, prolonged shoulder elevation",
                exercises: [
                    'Overhead Barbell Hold',
                    'Barbell Overhead Carry',
                    'Waiter Carry',
                    'Single Arm Overhead Carry',
                    'Dumbbell Overhead March',
                    'Barbell Overhead March',
                    'Isometric Overhead Hold',
                    'Bottoms Up Carry (Overhead)',
                    'Barbell Overhead Walkout',
                    'Barbell Overhead Walking Lunge'
                ]
            },
            victim_drag: {
                label: "Victim Drag Variations",
                icon: "ðŸš¨",
                description: "Backward, diagonal, obstacle drags - Pure posterior chain + grit",
                exercises: [
                    'Sled Drag (Backward)',
                    'Sled Drag (Forward)',
                    'Sled Rope Pull',
                    'Romanian Deadlift (Barbell)',
                    'Romanian Deadlift (Dumbbell)',
                    'Good Mornings',
                    'Nordic Hamstring Curls',
                    'Glute-Ham Raise',
                    'Back Extension',
                    'Reverse Hyper'
                ]
            },
            confined_space: {
                label: "Confined Space Transitions",
                icon: "ðŸ”½",
                description: "Kneeling â†’ crawling â†’ standing with load - Fireground movement patterns",
                exercises: [
                    'Bear Crawl',
                    'Bear Crawl Hold',
                    'Quadruped Hover Hold',
                    'Turkish Get-Up',
                    'Half Kneeling Landmine Press',
                    'Half Kneeling Cable Row',
                    'Tall Kneeling Breathing',
                    'Tall Kneeling Anti-Rotation Press',
                    'Kneeling Landmine Press',
                    'Goblet Squat'
                ]
            }
        }
    },

    // POLICE OFFICER-SPECIFIC EXERCISES
    police: {
        label: "Police Force",
        description: "Job-specific movements for law enforcement demands",
        subcategories: {
            acceleration_brake: {
                label: "Acceleration â†’ Brake â†’ Re-Accelerate",
                icon: "âš¡",
                description: "5-10-5 shuttles, sprint â†’ stop â†’ cut - Foot pursuits aren't steady-state",
                exercises: [
                    'Shuttle Sprint + Push-Ups',
                    'Broad Jumps',
                    'Lateral Bounds',
                    'Skater Jumps',
                    'Box Jumps',
                    'Depth Jumps',
                    'Jump Squats',
                    'Hill Sprints',
                    'Acceleration Drills',
                    'Change of Direction Drills'
                ]
            },
            ground_control: {
                label: "Ground Control Strength",
                icon: "ðŸ¤¼",
                description: "Isometric holds, clinch control - Arrest control is isometric + positional",
                exercises: [
                    'Plank',
                    'Side Planks',
                    'Isometric Wall Sit',
                    'L-Sit Hold',
                    'Hollow Body Hold',
                    'Bear Crawl Hold',
                    'Dumbbell Renegade Hold',
                    'Isometric Push-Up Hold',
                    'Isometric Inverted Row Hold',
                    'Barbell Split Squat Iso Hold'
                ]
            },
            stand_up_repeats: {
                label: "Stand-Up Repeats (Under Fatigue)",
                icon: "ðŸ†™",
                description: "Ground â†’ stand â†’ sprint â†’ drop - Officers lose fights when they can't get up fast",
                exercises: [
                    'Wall Balls 20lb',
                    'Burpees',
                    'Burpee Box Jump Overs',
                    'Burpee Pull-Ups',
                    'Turkish Get-Up',
                    'Sit-Up to Stand',
                    'Box Jump + Step Down',
                    'Air Squat + Push-Up + Jump',
                    'Man Makers',
                    'Dumbbell Burpee Clean',
                    'Barbell Devil Press'
                ]
            },
            reactive_change: {
                label: "Reactive Change-of-Direction",
                icon: "ðŸ”€",
                description: "Light/audio cue â†’ lateral movement - Decision + movement under stress",
                exercises: [
                    'Lateral Bounds',
                    'Skater Jumps',
                    'Lateral Lunges',
                    'Cossack Squats',
                    'Agility Patterns',
                    'Change of Direction Drills',
                    'Shuttle Runs',
                    'Lateral Shuffle',
                    'Multi-Directional Bounds',
                    'Reactive Agility Drills'
                ]
            },
            uneven_push_pull: {
                label: "Uneven Push/Pull",
                icon: "âš–ï¸",
                description: "One-arm work, offset resistance - Real fights are asymmetrical",
                exercises: [
                    'Single Arm Dumbbell Press',
                    'Single Arm Cable Press',
                    'Single Arm Cable Row',
                    'Dumbbell Row (Single Arm)',
                    'Single Arm Incline Dumbbell Press',
                    'Suitcase Carry',
                    'Offset Farmers Walk',
                    'Landmine Press',
                    'Single Arm Overhead Carry',
                    'Half Kneeling Cable Row'
                ]
            }
        }
    }
};



