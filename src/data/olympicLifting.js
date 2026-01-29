// olympic-lifting-exercises.js



export const olympicLiftingPositionGroups = {
    "competition_lifts": {
        label: "Competition Lifts",
        description: "Snatch, Clean & Jerk - Technique, speed, explosiveness",
        primaryExercises: [
            "Power Snatch",
            "Full Snatch",
            "Hang Snatch",
            "Power Clean",
            "Full Clean",
            "Hang Clean",
            "Push Jerk",
            "Split Jerk",
            "Clean & Jerk",
            "Front Squat"
        ],
        secondaryExercises: [
            "Snatch Pull",
            "Clean Pull",
            "Snatch Balance",
            "Overhead Squat",
            "Clean Deadlift",
            "Snatch Deadlift",
            "Muscle Snatch",
            "Muscle Clean",
            "Push Press",
            "Core Work",

            // Corrective & Mobility
            "External Rotations (Band)",
            "Face Pulls",
            "Hip Flexor Stretch",
            "Ankle Mobility Drills",
            "Foam Roll Thoracic Spine"
        ],
        sportSpecificMovements: [
            { name: "Snatch Grip Jump Shrugs", sets: "4 x 5", description: "Explosive triple extension with snatch grip" },
            { name: "Clean Grip Jump Shrugs", sets: "4 x 5", description: "Explosive pull practice with clean grip" },
            { name: "Drop Snatches", sets: "5 x 3", description: "Speed under the bar technique" },
            { name: "Tall Cleans", sets: "5 x 3", description: "Fast elbows and receiving position" },
            { name: "Snatch Complex (High Pull + Power + OHS)", sets: "4 x 2", description: "Technical snatch sequence" },
            { name: "Clean Complex (Pull + Power + Front Squat)", sets: "4 x 2", description: "Technical clean sequence" }
        ]
    },
    "strength_power": {
        label: "Strength & Power",
        description: "Foundational strength - Squats, pulls, explosive movements",
        primaryExercises: [
            "Back Squat",
            "Front Squat",
            "Deadlift",
            "Romanian Deadlift",
            "Box Jumps",
            "Depth Jumps",
            "Broad Jumps",
            "Medicine Ball Slams",
            "Bulgarian Split Squat",
            "Bench Press"
        ],
        secondaryExercises: [
            "Good Mornings",
            "Glute Ham Raises",
            "Nordic Curls",
            "Hip Thrusts",
            "Core Rotations",
            "Lateral Bounds",
            "Single Leg RDL",
            "Pull-Ups",
            "Dips",
            "Carries",

            // Corrective & Mobility
            "Face Pulls",
            "Band Pull-Aparts",
            "Glute Bridges",
            "Clamshells",
            "Hip Flexor Stretch",
            "Ankle Mobility Drills"
        ],
        sportSpecificMovements: [
            { name: "Loaded Box Jumps", sets: "5 x 3", description: "Box jumps holding dumbbells or wearing vest" },
            { name: "Depth Jump to Box Jump", sets: "4 x 4", description: "Reactive power development" },
            { name: "Broad Jump Series", sets: "5 x 3", description: "Continuous broad jumps for distance" },
            { name: "Med Ball Overhead Throws", sets: "4 x 6", description: "Explosive overhead power" },
            { name: "Squat Jumps (Loaded)", sets: "5 x 5", description: "Weighted squat jumps for power" },
            { name: "Speed Deadlifts", sets: "6 x 3 @ 60%", description: "Fast pulls from floor" }
        ]
    }
};



