// workout-exercises-library-v2.js
// Restructured: Body Part Categories â†’ Equipment Types



export const exerciseCategories = {
    // CHEST
    chest: {
        label: "Chest",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    {
                        name: 'Barbell Bench Press', movement: ['Push'], intent: ['Max Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/4401f79b1c197056394175ac3bc5b369',
                      schemes: [
                        { name: '5x5', sets: 5, reps: '5', percentages: [75, 77.5, 80, 82.5, 85] },
                        { name: '3x10', sets: 3, reps: '10', percentages: [70, 70, 70] },
                        { name: 'GVT (10x10)', sets: 10, reps: '10', percentages: [62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5] },
                        { name: 'Wave 8-6-8-4', sets: 4, reps: '8,6,8,4', percentages: [72.5, 80, 77.5, 85], repsPerSet: [8, 6, 8, 4] },
                        { name: 'Wave 4-2-4-2-2', sets: 5, reps: '4,2,4,2,2', percentages: [82.5, 90, 85, 92.5, 95], repsPerSet: [4, 2, 4, 2, 2] },
                        { name: 'Wave 5-5-3-3', sets: 4, reps: '5,5,3,3', percentages: [77.5, 80, 85, 87.5], repsPerSet: [5, 5, 3, 3] },
                        { name: 'Dynamic 8x3', sets: 8, reps: '3', percentages: [75, 75, 75, 75, 75, 75, 75, 75] },
                        { name: 'Dynamic 3x6', sets: 3, reps: '6', percentages: [65, 65, 65] }
                      ]
                    },
                    {
                        name: 'Incline Barbell Bench Press', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/9882252f9db2090c2fab5b0a74744a72',
                      schemes: [
                        { name: '5x5', sets: 5, reps: '5', percentages: [75, 77.5, 80, 82.5, 85] },
                        { name: '3x10', sets: 3, reps: '10', percentages: [70, 70, 70] },
                        { name: 'GVT (10x10)', sets: 10, reps: '10', percentages: [62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5] },
                        { name: 'Wave 8-6-8-4', sets: 4, reps: '8,6,8,4', percentages: [72.5, 80, 77.5, 85], repsPerSet: [8, 6, 8, 4] },
                        { name: 'Wave 4-2-4-2-2', sets: 5, reps: '4,2,4,2,2', percentages: [82.5, 90, 85, 92.5, 95], repsPerSet: [4, 2, 4, 2, 2] },
                        { name: 'Wave 5-5-3-3', sets: 4, reps: '5,5,3,3', percentages: [77.5, 80, 85, 87.5], repsPerSet: [5, 5, 3, 3] },
                        { name: 'Dynamic 8x3', sets: 8, reps: '3', percentages: [75, 75, 75, 75, 75, 75, 75, 75] },
                        { name: 'Dynamic 3x6', sets: 3, reps: '6', percentages: [65, 65, 65] }
                      ]
                    },
                    { name: 'Decline Barbell Bench Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/451681b06592fdbb779cbba1f99b9d35' },
                    { name: 'Close Grip Bench Press', movement: ['Push'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/c951cb36291c1f1ddb328e6fd692153d' },
                    { name: 'Floor Press (Barbell)', movement: ['Push'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited', 'ROM Restricted'], youtube: 'https://iframe.videodelivery.net/1059b63970964c6d927111d69184587e' },
                    { name: 'American Bar Press', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bdc28fd6ce68ae8ea2a2b333c24945f9' },
                    { name: 'Barbell Band Bench Press', movement: ['Push'], intent: ['Power', 'Strength'], equipment: ['Barbell', 'Band'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/64a507e40ae3f865530b084f1f935960' },
                    { name: 'Chain Bench Press', movement: ['Push'], intent: ['Power', 'Strength'], equipment: ['Barbell', 'Chain'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/4139f25debf1be5a7b543c05fa407676' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    // --- Cloudflare videos ---
                    { name: 'Chest Fly + Press Combo', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/65b028b216c71a95d009fd534eb8a939' },
                    { name: 'Dumbbell Press + Fly + Hex Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/13a4044a5d06a8a3788977178f1dffea' },
                    { name: 'Dumbbell Pullover', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/43553cd1d9d21cf10677c5322c4743f8' },
                    { name: 'Dumbbell Chest Fly Squeeze', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/399facec3c1706d36209d6f746f3e82c' },
                    { name: 'Flat Neutral Grip Dumbbell Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/33ab0d44c7b38d8aacf9c11ef748b37b', geriatric_priority: true },
                    { name: 'Decline Dumbbell Press Neutral Grip', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2f74117f155e543526ad590b8e9db87d' },
                    { name: 'Single Arm Incline Bench Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d6e241c9545d7a8524346d02d6860dd1' },
                    { name: 'Incline Neutral Grip Dumbbell Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7237ad702dbf6ab20818e8c590180f26', geriatric_priority: true },
                    { name: 'Dumbbell Chest Press (Feet Up)', movement: ['Push'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c826d30176bc7f02f810e61a8ebc45bc' },
                    { name: '10 Degree Chest Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d299ce9ac0889c8ebfa33fbcccb536c2' },
                    { name: 'Incline Dumbbell Chest Press, Fly, Hex Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3e7833effa2d0a8ebfcce404fd7a1a69' },
                    { name: 'Chest Hex Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/da95fb1818c1078db7cff896be043726' },
                    { name: 'Dumbbell Floor Press', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: ['ROM Restricted'], youtube: 'https://iframe.videodelivery.net/93a28585d72e84153697098946613a37', geriatric_priority: true },
                    { name: 'DB Incline Bench + Fly + Hex Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c855201ea61fb99903d0a8094ec2c9be' },
                    { name: '10 Degree Incline Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/892ebe3fdc40774524ac94182e698aac' },
                    { name: 'Dead Stop Dumbbell Chest Press', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dd38c9f80a3c46509fe04b90b6bcea1c' },
                    { name: 'Flat Dumbbell Band Bench Press', movement: ['Push'], intent: ['Power'], equipment: ['Dumbbell', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/05549e904762b63ac002a396bfce9cd1' },
                    { name: 'Dumbbell Flat Chest Fly, Press, Hex Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f6bb617e4b31859c1f713380ac639872' },
                    { name: 'Dumbbell Flat Tempo Bench', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1534d2bf21ec7d624cb6fd98fb6c1597' },
                    { name: 'Alternating Incline Dumbbell Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9046f42f65c81c26d63037a38d443184' },
                    { name: 'Single Arm Dumbbell Incline Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dd26785c17976598a8f6ead00b0f1587' },
                    { name: 'Stability Ball Chest Fly', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell', 'Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/38327ec9fadeb25b743f1836d3a7f3da' },
                    { name: 'Band Bench Press', movement: ['Push'], intent: ['Power'], equipment: ['Dumbbell', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3ad7bded6e06c9fd035881ec0ed9cdda' },
                    { name: 'Stability Ball Chest Press', movement: ['Push'], intent: ['Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e43fa338c285e29c4e0427e1c3e86b80' },
                    { name: 'Stability Ball Incline DB Press', movement: ['Push'], intent: ['Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/feedbdfda5691e248666ebe31ba6d2a1' },
                    { name: 'Stability Ball Single Arm Chest Press', movement: ['Push'], intent: ['Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/15d4d75a2c9296d5ebc3157f392c45d6' },
                    { name: 'DB Decline Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6df6361b03e55fb312db9eaeb5f696d9' },
                    { name: 'Stability Ball Alternating Chest Press', movement: ['Push'], intent: ['Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dccff2e361aabec8fb3912c343554f3c' },
                    { name: 'Incline Dumbbell Chest Press Tempo', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7a0c399c6dcad3bd91e66f391931d0c7' },
                    { name: 'How To Set Up For Dumbbell Bench', movement: ['Push'], intent: ['Education'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/54c7cbfbab54ce3c7d32589cc61150f0' },
                    { name: 'DB Alternating Chest Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6a57cc830655dd17b8696792ea41215d' },
                    // --- New uploads ---
                    { name: 'Dumbbell Bench Press', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Dumbbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/2c00adc35f411cd799e4acb89b0a576c', geriatric_priority: true },
                    { name: 'Dumbbell Single Arm Bench Press', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/a6aa11617443c553c44da70d10ef5d66', geriatric_priority: true },
                    { name: 'Dumbbell Crush Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/19e6a7af691b0b7fa8a76bffbfac8de9', geriatric_priority: true },
                    { name: 'Dumbbell Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/d1553c5ad706332eaa1e4b2a915adc65', geriatric_priority: true },
                    { name: 'Dumbbell Decline Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d5f0ba481c83161a5c5e49dc22d655cb' },
                    { name: 'Dumbbell Decline Bench', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f870a377c55c60198873fdcdccfe4b5e' }
                ]
            },
            functional: {
                label: "Functional",
                exercises: [
                    // --- Cloudflare videos ---
                    { name: 'Band Bench Press', movement: ['Push'], intent: ['Power'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/473afd983c7f292895b76f5b09d1c6ca' },
                    { name: 'Alternating Med Ball Plyo Pushup', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6429aaadf83242243e05d08564339b85' },
                    { name: 'Alternating Med Ball Pushups (Plyo)', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/275ae4dcf86a11ad52cfe2b3aab53b2d' },
                    { name: 'Assisted Hips-Bench Pushups', movement: ['Push'], intent: ['Strength'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f4cb77adda810b02cf19e8ecdc2d6fed', geriatric_priority: true },
                    { name: 'Assisted Bench-Hips Scap Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fbc3f52b49dbf107e0d2cb3a9d07c248', geriatric_priority: true },
                    { name: 'Plyo Pushup Releases', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/af8c4b58d7dae282cf7f8d7977b6a5e0' },
                    { name: 'DB Bent Over Fly Standing', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0d817b81aa9a074792f28dae7de088e9' },
                    { name: 'Floor Scap Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f489a3dea6f205a3920af14b16f06f49' },
                    { name: 'Chest Squeeze (15-30s)', movement: ['Push'], intent: ['Activation', 'Isometric'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e7118f5bf224bbc1d2585f955d6fd598' },
                    { name: 'Decline/Box Snap Pushups', movement: ['Push'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0e179c089b5afc1dab6cd19b96abd67e' },
                    { name: 'Feet Elevated Scap Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/075745ed778091d9108234dca6ea976d' },
                    { name: 'Plank Shoulder Taps', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f1a3662b3c49c742db8f5dcda353c164' },
                    { name: 'Knee Pushups', movement: ['Push'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7ccd7c608909581c90672a99205221d8', geriatric_priority: true },
                    { name: 'Wall Isometric Pushup Hold', movement: ['Push'], intent: ['Isometric', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ee8efb6a196c3171ba2fbef1a95bdd28', geriatric_priority: true },
                    { name: 'Medicine Ball Chest Pass', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e4be96888e2c74cc2290939a19d6691d' },
                    { name: 'Single Arm Med Ball Pushup', movement: ['Push', 'Power'], intent: ['Strength', 'Stability'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1053c0af87a5528bd1186a5afd62d95b' },
                    { name: 'TRX Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b41bf479c6f3e5587d261a31423bf3bc' },
                    { name: 'Push-Ups', movement: ['Push'], intent: ['Endurance', 'Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2f8cc24a7b8c0a222634735f444f8833', geriatric_priority: true },
                    { name: 'Suspension Pushups (TRX)', movement: ['Push'], intent: ['Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/adfb42fd626fe466be3a5421c3e3b073' },
                    { name: 'T Pushups', movement: ['Push', 'Rotation'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1756be635f8d0f0dbd30f8a8e2bb8e97' },
                    { name: 'Tempo Knee Pushups', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d448ad0a2acf469ed71d07a3b6bcf3db', geriatric_priority: true },
                    { name: 'Tempo Push-Ups', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a097a391ee624a65983fd67c32eeeb63' },
                    { name: 'Assisted Pushups', movement: ['Push'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cb586c95f79966fe0861d4d01d62d93a', geriatric_priority: true },
                    { name: 'Tempo Wall Pushups', movement: ['Push'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9069a794c9902e771b753f389b005bfb', geriatric_priority: true },
                    { name: 'Band Single Arm Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/99374d221449ddb2fb9c8aa0d8ec1144' }
                ]
            },
            machine: {
                label: "Machine",
                exercises: [
                    { name: 'Low to High Chest Fly Cable', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/de8ce1e900424a15643c129d118f4a1d' },
                    { name: 'Single Arm Cable Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7bb87fb42802c6e72d9372fa5a960eff' },
                    { name: 'Cable Chest Press Seated', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/947e373c57852131ad49710af09f7d5b', geriatric_priority: true },
                    { name: 'Cable Chest Fly Seated', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/085f938f3ef5f44a6ed4aee63910769c' },
                    { name: 'Single Arm Cable Fly High to Low', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2adf9a0c805fbddd8bfa2adbd68813c8' },
                    { name: 'Cable High to Low Chest Fly', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7415558e79d83c76c355c6569018ce67' },
                    { name: 'Cable Chest Fly-Press-Fly-Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/18bc0d77418cca964aaae07af16b67a9' },
                    { name: 'Cable Fly Low to High', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b68cbcb54c5a560a40e92da69201a747' },
                    { name: 'Cable Chest Fly Mid', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6e30bcb8edf3e6e1d1bd9ebe795fa3ed' },
                    { name: 'Split Stance Cable Chest Press Mid', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/38b867dd7800f4aee0573dbf852e648b' },
                    { name: 'Cable Chest Press Mid', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/90e6fd39abd4255a4781cf7dea9e37b0' }
                ]
            },
            corrective: {
                label: "Corrective",
                exercises: [
                    // --- Cloudflare videos ---
                    { name: 'Straight Arm Wall Chest Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/544b7e8369391de677c96e8fe4890c2e', geriatric_priority: true },
                    { name: '90 Degree Elbow Wall Chest Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3606a2a8cf49e24df8f8a35196fc6be4', geriatric_priority: true },
                    { name: 'Push Up Plus', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c7294fca8541547339329151f0c0a913', geriatric_priority: true },
                    { name: 'Chest Stretch on Rollers/Blocks', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/72a8eb23df8ff10a2f428ef143f55cb7', geriatric_priority: true },
                    { name: 'One Fist Cobra Pec Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4f77b00820eae10decb75a7de7442435', geriatric_priority: true },
                    { name: 'Elbows on Bench Triceps Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c95dbcaac3cb1308e3ec45076867a3d3' },
                    { name: 'Foam Roller Preset', movement: ['Mobility'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/85ed348ae6659c0ff1cb8dc4b8036590', geriatric_priority: true },
                    { name: 'Foam Roller Relax on Spine', movement: ['Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e44174a6583c436e40d2e007d72b0ad1', geriatric_priority: true },
                    { name: 'Foam Roller Chest Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ef493dae2b8544ecbefb317edb4ce702', geriatric_priority: true },
                    { name: 'Wall T-Spine Chest Opener', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8f78e11791f4280ca472460c0f3fd357', geriatric_priority: true },
                    { name: 'Scap Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/db235fa11cae5ab24dd9ee998a92d22a', geriatric_priority: true },
                    { name: 'T Spine Back-Bend', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ff0d67ea7267bcf9a4f5e4012c64d79', geriatric_priority: true },
                    { name: 'Doorway Pec Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0dc5a7ad69cadf1bb7b929ebce285b7f', geriatric_priority: true },
                    { name: 'Wall Pushups', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/659970359bb34845d7a04030eeb22d9c', geriatric_priority: true }
                ]
            }
        }
    },

    // BACK
    back: {
        label: "Back",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Barbell Shrugs', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/306179372055f8e58e2fec9dea5b9e21' },
                    { name: 'Block/Rack Pull', movement: ['Pull'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/2cb395bc59a6e0094ede48a1fc912150' },
                    { name: 'Deficit Deadlift', movement: ['Pull'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/d651bd824450309f5a4b40d5612d0243' },
                    { name: 'Pause Barbell Row', movement: ['Pull'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/44e7c550d6b6ae896d9b9b4a570a8480' },
                    { name: 'Barbell Shrug to Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/14de11ce5c0284dfa78e9fbb46ee372b' },
                    { name: 'Yates Barbell Row', movement: ['Pull'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9e61e3ba9bb8f9ddd9a53b050be5f0c6' },
                    { name: 'Landmine Meadows Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1d751bebf982778e6876451905b87c38' },
                    { name: 'V Bar Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0b39f177891e79dfbcbeae700d586c94' },
                    { name: 'Neutral Grip T Bar Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3630ea8ec37a561581448382524f0857' },
                    { name: 'Tempo Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b71d9937e10082ed4c67a54e243f789d' },
                    { name: 'Meadows Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/81a38f5bbfaf69b2a709b453a7f37926' },
                    { name: 'T Bar Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cf96b534758fb49e73855c738252131d' },
                    { name: 'Bent Over Barbell Row', movement: ['Pull'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/123c3fb09ac37a6226f5495b231dbd95' },
                    { name: 'Bent Over Barbell Row Supinated', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/802a8e9b3b0115836f971d60f05aff6a' },
                    { name: 'Snatch Grip Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5c965bedd4fc8c48e5879b4244a185ee' },
                    { name: 'Pendlay Row', movement: ['Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e8594c5313a24d53ac5f31f089744227' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Dumbbell Single Arm Row', movement: ['Pull'], intent: ['Hypertrophy', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/086ea4397d504ca9918856f99b7f8d42', geriatric_priority: true },
                    { name: 'Dumbbell Bent Over Fly (Seated)', movement: ['Pull'], intent: ['Upper Back', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7fa3cdfa0a3a7f22374561bb7da2c656' },
                    { name: '10 Degree Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3acc0cfd8cd232ab0a6fe4c9e897bb09' },
                    { name: 'Squat Position Neutral Grip Row', movement: ['Pull'], intent: ['Hypertrophy', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/362c48a7f95fadb753214697b79eb293' },
                    { name: 'DB 1 and a Half Bent Over Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/619242ac4de7f1de0d37b12bbc075678' },
                    { name: 'DB 10 Deg Shrug to Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9aab63b782173af72d2ae9ce3652623f' },
                    { name: 'DB 10 Deg Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/aed7ffd9efa8d9f8b0510f2b9f0163ab' },
                    { name: 'DB Suitcase Bent Over Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d5d24e2be1e0dd58e0a48fa81f3caa8a' },
                    { name: 'DB 1 and a Half Elbows Out Row', movement: ['Pull'], intent: ['Upper Back'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ffa611e0af1aa255f6abeddfb6a3c409' },
                    { name: 'DB Alternating Bent Over Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/214a22b62ece968980beb61925613140' },
                    { name: 'DB Meadows Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0d13320600c7bfe80adaa482e2a673e2' },
                    { name: 'Renegade Row', movement: ['Pull', 'Core'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2b8daa4591bdbc76f77cccfc68a7414b', geriatric_priority: true },
                    { name: 'Bent Over DB Row', movement: ['Pull'], intent: ['Hypertrophy', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f27b097d1ee3a4086327324c78f27a3e' },
                    { name: 'DB 10 Deg Row Elbows Out Pronated', movement: ['Pull'], intent: ['Upper Back'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8a1fa9c1e82cb99e43b056b1253819b8' },
                    { name: 'Renegade Row Hands on Floor', movement: ['Pull', 'Core'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c2833e1ea64eafa2e5524350c89ac5fe' },
                    { name: '10 Deg 1 and a Half Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f70821a32f30d7b6d1b82f08b43c024e' },
                    { name: '10 Deg Alternating DB Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/744d0aa4a5ee76b4eac17544923e20a8' },
                    { name: 'Single Arm DB Row Landmine', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6bf98569dff0c88792234f32e8b4a5bf' },
                    { name: 'Bent Over DB Row Elbows Out', movement: ['Pull'], intent: ['Upper Back'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9f5e93c50afcffff8e4ecf6ffb50e81a' },
                    { name: 'Kroc DB Row', movement: ['Pull'], intent: ['Hypertrophy', 'Endurance'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/97c1839d21e15559f48d6a293c127a76', geriatric_priority: true },
                    { name: 'DB Bent Over Shrug to a Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/334a896f3ccd1f916cd30af827cf4a50' },
                    { name: '10 Deg Seal Shrug to Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell', 'Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c48507f8ccc1b3a6dee39a9c5f282d44' },
                    { name: '10 Deg Seal Barbell Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell', 'Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/47ac5514c23e70bf190722d0b06d503b' }
                ]
            },
            functional: {
                label: "Functional",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'TRX Inverted Row', movement: ['Pull'], intent: ['Strength', 'Stability'], equipment: ['TRX'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9ea21a5a8207becfccedceedf5cc8168', geriatric_priority: true },
                    { name: 'Band Rows', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5885415be44994be08653a0cf5eacb84', geriatric_priority: true },
                    { name: 'Rope High Face Pulls', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ff0173251a14ca858621cab9a6bfd495' },
                    { name: 'Serratus Pulldowns', movement: ['Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cdfd27303fe9a3283572c0cdaeeea9d8' },
                    { name: 'Neutral Grip Pull-Ups', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/eba69b1c00221b39d8b473e4f039efc4' },
                    { name: 'Single Arm Cable Row (Squat Position)', movement: ['Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7cea12560f16c4fda95973d534a9732e' },
                    { name: 'Squat Position Bar Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f9fd8febe49d241d3a4ff009758acc22' },
                    { name: 'Stability Ball Single Arm Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/71565c1c1050e98179b9dc3ce8110aab' },
                    { name: 'Supermans GHR', movement: ['Pull', 'Extension'], intent: ['Strength'], equipment: ['GHR'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0d356132a15e0c5bd1e5f423f1d7c91f' },
                    { name: 'V-Bar Side-to-Side Pullups', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/ce79ec2125738e8070ea7aace00c5cf1' },
                    { name: 'Inverted Weighted Row', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3d8cac55f7829479506e714b5999d35e' },
                    { name: 'Chin-Ups', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/02dd025ae64369866b5e5cf12cc79cb6' },
                    { name: 'Band Face Pulls', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/36d2559515819c98fbbee6f31e89d3ac' },
                    { name: 'Feet Up Inverted Bar Row', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cd69add4f2e0e15e6affc61eddbef3a9' },
                    { name: 'Straight Arm Band Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e8dbbd25484c4f9b874837c2e942baea' },
                    { name: 'Band Lat Pulldowns Bent Over', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/962694069143eb952c5324c6860eb545' },
                    { name: 'Single Arm Kneel Cable Pulldowns', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/39f7aa5fb491e2a1267b037b329eb2c6' },
                    { name: 'Band Assisted Knee Pullups', movement: ['Pull'], intent: ['Strength'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e7ff9be60fc2cfa1a2ff3afac812a746' },
                    { name: 'Kneeling Cable Lateral Chop', movement: ['Core', 'Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/68a89b0f8d13949662a98bae956e048b' },
                    { name: 'Rope Straight Arm Pulldown to Triceps Pushdown', movement: ['Pull', 'Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/483c74730e7bbb12d4a078a224408b60' },
                    { name: 'Band Assisted on Foot Pullups', movement: ['Pull'], intent: ['Strength'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/54d81ff9832f4f4ac8c38d3bf1db320e' },
                    { name: 'Band Face Pulls Standing', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/05a4ff2fc480c0751b69a7cf24e10c84' },
                    { name: 'Kneeling Single Arm Cable Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e4a290a7b72b2da32610270bfbd1dd53' },
                    { name: 'Scap Pullups 5sec Eccentric', movement: ['Pull'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ec916319872a060b335f70e434dc802b' },
                    { name: 'Kneeling Face Pulls', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2e8c87d84c51f5da312eba6a118c8755' },
                    { name: 'Straight Bar Straight Arm Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/315b971426616ded3b47b347ad7fe74f' },
                    { name: 'Pullups Jump Assisted Control Down', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/79e7474b683978db4872839d2e96afd6' },
                    { name: 'Kneeling Pallof Press', movement: ['Core'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6bd68d0b8abeee56212fed711ece292c' },
                    { name: 'Rope Straight Arm Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dee99aea8560aa7489b0eb1679b25ef4' },
                    { name: 'Pull Ups', movement: ['Pull'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/1248a0392e139d20bbedd1526efb8053' }
                ]
            },
            machine: {
                label: "Machine",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Seated Bar Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8c059950429f5be74fbc342d0a791eee' },
                    { name: 'Seated V-Bar Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: 'https://iframe.videodelivery.net/09bdfed81e7ec1483324aeb6b8cbecf9' },
                    { name: 'V-Bar Squat Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c86bb080096c34899290119ac9fcb698' },
                    { name: 'Rope Straight Arm Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7ff667f8fd83e447cf75aa0b72e17425' },
                    { name: 'Kneeling Single Arm Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/015083941c1eae3d2c014de5c56896bc' },
                    { name: 'Pulldowns', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e286d079e682d3f23a610a64f0be5fee', geriatric_priority: true },
                    { name: 'V-Bar Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b722034d7c129c38f96231154ad638f0' },
                    { name: 'Seated V-Bar Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e42646615d828e68563d0d5d6e368ceb' },
                    { name: 'Single Arm Reverse Cable Fly', movement: ['Pull'], intent: ['Upper Back', 'Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cdab92807e6301a64e6b96a97f4a822e' },
                    { name: 'Single Arm Seated Cable Pulldown', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/265aed2ec812a01c042b7f37c7293c9a' },
                    { name: 'Straight Bar Squat Row', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/98743695a0eb62b0325f6c64027b4822' },
                    { name: 'Seated Face Pulls (Rope)', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0dae6fd800b9813a70cf3fe7e51ab555' },
                    { name: 'Squat Position Face Pull', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/93e27c56feb8090d192baa6adfea0d0d' },
                    { name: 'Vogopohl Pulldown V Bar', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ed63eac35aa2d4a35aac966d3d2ab992' }
                ]
            },
            corrective: {
                label: "Corrective",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Scap Pushups', movement: ['Push', 'Stability'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/495e36468bdf9f683b0a75fc27fe233c' },
                    { name: 'Scapular Wall Slides', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/03ce92b6428992632f0fd5570c4813d2', geriatric_priority: true },
                    { name: 'Spiderman with Rotation', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8fd4ede989c23a7bcb9ff43780d7d725' },
                    { name: 'T-Spine Arch Over Roller', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7911d9deffdfc1f387fbf4cbde74799f' },
                    { name: 'Band Pull Aparts', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4974799655de789161df1c5871dbb337', geriatric_priority: true },
                    { name: 'Band Monkey Arms', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/58d15e9027f6fea45006d2d7c8ff560f' },
                    { name: 'Dead Hang', movement: ['Pull'], intent: ['Mobility', 'Decompression'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2f12cfec49ae7674ec39ff6405552fe7', geriatric_priority: true },
                    { name: 'PVC Rack Slides and Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['PVC'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6d0814a798158bebba3358f093f09e95' },
                    { name: 'Band Single Arm Scap Shrug to Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2ae15732d8a530a7a261728861dc2ddd' },
                    { name: 'External and Internal Rotator Band', movement: ['Mobility'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ee31144f1183c652517c6a27fca53d14' },
                    { name: 'Band Scare Crow Single and Double', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e703c1e58d0fae8e02b0324fd2beff22' },
                    { name: 'Band Assisted Scap Pullups', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1622b3b129152d65bf57a396f34e14c3' },
                    { name: 'Band YTA', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8f6248a6b00040da9534d214ef3b3ef1' },
                    { name: 'Band Scap Shrug to Row', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1f42f503a3263886da441bec07dd7295' },
                    { name: 'Band YTA and Monkey Arms', movement: ['Pull', 'Mobility'], intent: ['Stability', 'Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f44fb817d59e6dfeec5ebe6a5f8aa258' },
                    { name: 'Lat Crossoverhead Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/73d607e4074458f0162124c03f5e3712' }
                ]
            }
        }
    },

    // SHOULDERS
    shoulders: {
        label: "Shoulders",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    { name: 'Standing Barbell Shoulder Press', movement: ['Push'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading', 'Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/a75667a8352d8d5fecc43bfc5c8cdca7' },
                    { name: 'Standing 1 and a Half Military Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/7d5184c7f72de7d4866ce75740543b76' },
                    { name: 'Push Jerk', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/4efe91ef944fa4df7038813ef3b5c7ae' },
                    { name: 'Tempo Behind the Neck Bar Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading', 'ROM Restricted'], youtube: 'https://iframe.videodelivery.net/42654c4b23334f91f3d74601f0e23579' },
                    { name: 'Rotational Landmine Press', movement: ['Push'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d1a86054971ba65e0a837c021931d6ec' },
                    { name: 'Double Arm Landmine Push Press', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8dc6ab5d246ed907e2fdb7ec654ae184' },
                    { name: 'Pause Strict Bar Press', movement: ['Push'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/947fa9f474f910dc628270a730a32133' },
                    { name: 'Seated Bar Military Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/c44471724988dfd1a92205c461b70314' },
                    { name: 'Bar Push Press', movement: ['Push', 'Power'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/fe13b7af8c123dd1e3eec81c2a17eea8' },
                    { name: 'Bradford Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/dfcdcd19618eea8a8752ce3030dffc8f' },
                    { name: 'Single Arm Landmine Press', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/040163798fe3cf3126b2fc2cd79152a2' },
                    { name: 'Tempo Military Press Seated', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/91809b656fdd75a0fd5698def64436ff' },
                    { name: 'Landmine Single Arm Push Press', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/143eb975e09582d7a5d69cda7af07d45' },
                    { name: 'Neutral Grip Landmine Press Double', movement: ['Push'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b25e6eebb888eeeb3713c61c00c2844a' },
                    { name: 'Behind the Head Shoulder Press Standing', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading', 'ROM Restricted'], youtube: 'https://iframe.videodelivery.net/7b8e1dba0f0fcea953717802c399a6ae' },
                    { name: 'Single Arm Split Landmine Push Press', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2b53b4579f97a3b288f76af311357cba' },
                    { name: 'Split Jerk', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/65a15996df8868cfb74ebe8059892699' },
                    { name: 'Landmine Press Double Arm', movement: ['Push'], intent: ['Strength', 'Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/52dcdc4daba2c0c919e87ba2d745bb9c' },
                    { name: 'Landmine Split Jerk Double Arm', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/61f60787bbff23ba6dad61ab24ea860b' },
                    { name: 'Behind the Neck Press Seated', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading', 'ROM Restricted'], youtube: 'https://iframe.videodelivery.net/47d16eec949945967bdad8f8146b335d' },
                    { name: '1 and a Half Seated Military Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/82793537d1cccf8ba9d09b75a82b841e' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    // --- Previous CF Video exercises ---
                    { name: 'Standing Dumbbell Z Press', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/299ad9881975aafbb36fffa1fc27a6e3' },
                    { name: 'Dumbbell Arnold Press (Seated)', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/2de337bce8285916bdb8745d95673c97', geriatric_priority: true },
                    { name: 'Dumbbell Seated Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1cfac9621a2171751f0fe9f52e51533d' },
                    { name: 'Dumbbell Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9ab313c38246dcb5d77c8d9309041441', geriatric_priority: true },
                    { name: 'Dumbbell Alternating Shoulder Press', movement: ['Push'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/64e151ae50a7c1f92888edff77e5254b' },
                    { name: 'Dumbbell Rear Fly', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4c441f9847b87097eafe564abf68699c', geriatric_priority: true },
                    { name: 'Standing Single Arm Shoulder Press', movement: ['Push'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/fb325b549c5118be94ef2cd8eea00096' },
                    { name: 'Front, Lateral, Bent Over Raise', movement: ['Push', 'Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/412fd7dcca7953b1bf8411c205e61e5e' },
                    { name: 'Dumbbell Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fc2e4d9ad5cc2a9447ac4cb614a6dbff', geriatric_priority: true },
                    { name: 'Seated Z Press', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/754e8548238795ff9247860b38e0c150' },
                    // --- New Shoulder Videos ---
                    { name: 'Dumbbell Shoulder Press Standing', movement: ['Push'], intent: ['Strength', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/aa953722d074c7e017fa5d31382810f9', geriatric_priority: true },
                    { name: 'Seated Single Arm Neutral Grip Shoulder Press', movement: ['Push'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/ba1758bd3f45fce0a1e156211e401463' },
                    { name: 'Seated Neutral Grip DB Shoulder Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/0cd7161a187eb788c0595f7e2e5675eb', geriatric_priority: true },
                    { name: 'Scarecrows', movement: ['Pull'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/46ee29434650f43807acffcc0d213c0e' },
                    { name: 'Squat Position Front Plate Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/86e72997d2219fb031f69e1cb1cc11ab' },
                    { name: 'DB Push Press', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/631647d11b3e8a3b89d90fc88ced4a6d' },
                    { name: 'DB Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5eedac066048e02dc03d5c07e4faf97a' },
                    { name: 'Cuban Press', movement: ['Push'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5a3fb60916af4b402df2ebc57ab8aeed' },
                    { name: 'DB Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5dac022811e3ea6c727ad8ac5f13efba' },
                    { name: 'Suitcase Carry', movement: ['Carry'], intent: ['Stability', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5823e9f38d9980b933d82313d6a129ec' },
                    { name: 'Seated DB Shoulder Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e965238facdb91cedbb57a72b34ab306', geriatric_priority: true },
                    { name: 'DB Alt Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a747dc573aef871c435d0bdf76d2073a' },
                    { name: 'Seated Single Arm Shoulder Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/0cecbc61b88663bd2e38b29275ab3c83' },
                    { name: '3 Way Rotator Raise', movement: ['Pull'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6ddf890d8d423af2c32d60d9e0e4a249' },
                    { name: 'Rear Delt W Raise', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1e63e1cba44946f3cc3b9bf054ccaee5' },
                    { name: 'DB Push Jerk', movement: ['Push', 'Power'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/57113624570253d0ccc22f1aadb57e67' },
                    { name: 'Seated Alt. DB Shoulder Press', movement: ['Push'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/7b07006c37c6168607471d787ad8e840' },
                    { name: 'Front Plate Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f0b19432e2c136b5cb304d49af88f67f' },
                    { name: 'Single Arm Server Carry', movement: ['Carry'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/4826d4fdf84df7988e800829355953c8' },
                    { name: '10 Deg Scarecrows', movement: ['Pull'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d36fbc6407cc844fbe194fe1c317f7f6' },
                    { name: 'DB Alt. Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c5a6096ed5efc3db0c40c2499db65555' },
                    { name: 'DB Lean Aways', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b59f89fd4beca1476c424b4ace42013d' },
                    { name: 'Standing Alt. DB Shoulder Press', movement: ['Push'], intent: ['Strength', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/c13e3838a0d83094898b984f921a1046' },
                    { name: 'Plate Bus Drivers', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fc01317daf5cb6649ebf8206cecb7185' },
                    { name: 'Front to Lateral to Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7b7578d3f65307cb4d3f875375c0da32' },
                    { name: '10 Deg Cuban Press', movement: ['Push'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f239e028fe827a9243d99a3babbb4858' },
                    { name: 'Farmers Carry', movement: ['Carry'], intent: ['Stability', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9ad489fddeaeef0809d1a63870aec31d' },
                    { name: '10 Deg Reverse Fly Thumbs Up', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cb41eb9b734d4e23d0665362d389aef4' },
                    { name: 'Server Carry', movement: ['Carry'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/fdd88ab8404a98f3e07514574acd31ba' },
                    { name: 'DB Neutral Grip Standing Shoulder Press', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/031c76e7019bad52e027648cebdd4705' },
                    { name: 'Half Kneeling Shoulder Press', movement: ['Push'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/bde438499e26e59c67d7a64ea8122aab' }
                ]
            },
            functional: {
                label: "Functional",
                exercises: [
                    // --- Previous CF Video exercises ---
                    { name: 'Cable Squat Face Pulls', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2b6de2e343cfe1061b2e00ba171b7cf9' },
                    { name: 'Rope Shrug to Upright Row', movement: ['Pull'], intent: ['Hypertrophy', 'Power'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fbde0e803aaef5a9d6f15da2330b93fa' },
                    { name: 'Rope Upright Rows', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3f357e85c08c1581317d575ed190259b' },
                    { name: 'Single Arm Cable Shrug', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6b231091ec2420f413610343a5797261' },
                    { name: 'Single Arm Cable Reverse Fly', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/14e9482dda40fbd9692302285c574195' },
                    { name: 'Squat Position Face Pulls', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ddc5bae50e6132754eb5d1383dc0c8d8' },
                    { name: 'TRX Fall Outs', movement: ['Push', 'Core'], intent: ['Stability'], equipment: ['TRX'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8c53a53910a974b4f28f90ce25505c79' },
                    { name: 'Cable Reverse Fly', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bdc5cfbd57900591d066ea33a1f38a1a', geriatric_priority: true },
                    // --- New Shoulder Videos ---
                    { name: 'Band External and Internal Rotators', movement: ['Stability'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ca024ff0e406a4cfab0697a8fcefd2c', geriatric_priority: true },
                    { name: 'Band Single Arm Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/61b4155b67a1627281b7632547378cb5', geriatric_priority: true },
                    { name: 'Band Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c47609f180f0821d26e83dc2c5713201', geriatric_priority: true },
                    { name: 'Band Single Arm Scarecrow', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6aff46119d5bcdae3d141117fd8c3361' },
                    { name: 'Band Bent Over Lateral Raise', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/01deab3d337ea568aa72b06ced469477' },
                    { name: 'Band Shoulder Press Standing', movement: ['Push'], intent: ['Strength'], equipment: ['Band'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/129033b5c12b83cf6b643d2789a591ed', geriatric_priority: true },
                    { name: 'Band Single Arm Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8536858cc78eb67ea123a0905278599c' },
                    { name: 'Band Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/db3842ce42cb47391a5e8c361a9dd7b5', geriatric_priority: true },
                    { name: 'Band Double Arm Scarecrow', movement: ['Pull'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/191372c26d83441f0db79a5516647171' }
                ]
            },
            machine: {
                label: "Machine",
                exercises: [
                    // --- Previous CF Video exercises ---
                    { name: 'Cable Shoulder Press (Inside Grip)', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/33819943c43d7c14e56862b7ad1f9adf' },
                    { name: 'Lateral Cable Flyes', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6282ac825d76b4c53a9b24ed5a9c72a1' },
                    { name: 'Seated Face Pulls (Rope)', movement: ['Pull'], intent: ['Stability', 'Posture'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f314775d001069e6570aadc982a971b7' },
                    // --- New Shoulder Videos ---
                    { name: 'Cable Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/27838523621af26a08a38b37f044c106' },
                    { name: 'Cable Lean Away In Front', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/52ff2a4f5d5223598cc01cbc91532997' },
                    { name: 'Cable Standing Shoulder Press (Outside Grip)', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/fbbff1d635b528546eb751cb936eaf5d' },
                    { name: 'Cable External and Internal Rotator', movement: ['Stability'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/172a3e8b05f5b58795bf645f717fe93d' },
                    { name: 'Cable Single Arm Scarecrow', movement: ['Pull'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/aaca2d634fde8ff333bb3a093d38be91' },
                    { name: 'Cable Alt Front Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/225c13eab70f4e91832d31ae09738d5b' },
                    { name: 'Rope Internal Rotator', movement: ['Stability'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d5704fc558ef75d521251cf4a1dc1a68' },
                    { name: 'Cable Lean Away Behind Butt', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1a54a8c42cc00e791bf29b9bd4e92c6a' },
                    { name: 'Cable Cuban Press Single Arm', movement: ['Push'], intent: ['Stability', 'Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9b5bfd282476d794092bf0b5c781eaf5' },
                    { name: 'Rope Y Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4539d3c63380486f6ccbaba87e598891' },
                    { name: 'Cable Y Lateral Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/efc78cfafd089f9bcfa5ba0cec57cdc3' },
                    { name: 'Lateral Cable Raise', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/445b0622e2065da87b04d897c57c4f09', geriatric_priority: true },
                    { name: 'Cable Standing Shoulder Press (Inside Grip)', movement: ['Push'], intent: ['Hypertrophy', 'Strength'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/fc85afbdc81c0d06ca626544c939a74e' },
                    { name: 'Rope External Rotator', movement: ['Stability'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5bac72738eda7850b94488ad4f929413' }
                ]
            },
            corrective: {
                label: "Corrective",
                exercises: [
                    // --- Previous CF Video exercises ---
                    { name: 'Lacrosse Ball Rear Delt Wall', movement: ['Mobility'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/03b8879866882f65a77de036005553c4' },
                    { name: 'Band YTA', movement: ['Stability'], intent: ['Stability', 'Posture'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4254c327ea25a2628bdb70725eda7321', geriatric_priority: true },
                    { name: 'Stability Ball Kneeling Shoulder Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/09e723723e172ff56fb0946ec2c6cdce' },
                    { name: 'Shoulder Stretch on Bench', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0bdad4b4afbc39e1371a819ff631ca1e' },
                    { name: 'Stability Ball Modified Cuban Press', movement: ['Stability'], intent: ['Stability', 'Corrective'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b00d09ac7b9d200bb5bbd7d2e847d3c8' },
                    { name: 'Stability Ball Shoulder Dislocates', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6e564111fd16c2e7e24df293bbf6c380' },
                    { name: 'YTWA on Stability Ball', movement: ['Stability'], intent: ['Stability', 'Posture'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/71a54198e31a31edd516c4b5a99774d2' },
                    { name: 'YTAW', movement: ['Stability'], intent: ['Stability', 'Posture'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fbbc29c8041483e22dacba8037797c65' },
                    { name: 'Stability Ball Cobra', movement: ['Mobility', 'Extension'], intent: ['Mobility', 'Posture'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bf51df18d7afbad10992470fb40c5201' },
                    // --- New Shoulder Videos ---
                    { name: 'Shoulder CARS', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/70f8439809e03c5cb48b94cf4fe8f11c', geriatric_priority: true },
                    { name: 'Overhead Plate Carry', movement: ['Carry'], intent: ['Stability', 'Strength'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/737697cfef2c4f32b356058434858ef3' },
                    { name: 'Standing Overhead Plate Hold', movement: ['Carry'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/d9432afe88a46a8e63a41e5744496645' },
                    { name: 'Wall Handstands', movement: ['Push'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e4dbd62ceffd81a343f8726494d384bd' },
                    { name: 'Rear ISO Hold on Wall', movement: ['Stability'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/95e177f7cc885ffb176307278bce16db' },
                    { name: 'Wall Slides', movement: ['Stability'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9c061fc4732b95615c679842223eb075', geriatric_priority: true },
                    { name: 'Wall Angels', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/84b6efcc08cf76ae4a449d9b69f195da', geriatric_priority: true },
                    { name: 'Dip Shrugs', movement: ['Stability'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5d5f50575d868e6dc7e89b0e422e128f' },
                    { name: 'Bench Dip Shrugs', movement: ['Stability'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6190775cb3c7e4bce0bfe6e8bf8666a4' },
                    { name: 'Alternating DB Drop and Catch', movement: ['Stability'], intent: ['Power', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1aafab424fc0f84a1c2355c41b7c39f1' },
                    { name: 'External DB Release Drops', movement: ['Stability'], intent: ['Power', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dd124c85df2a5fde55b00caf4eb4f390' },
                    { name: 'Elbow Knee External Rotators', movement: ['Stability'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9cd0652af2db9bc882402ac04cda5c36' }
                ]
            }
        }
    },

    // BICEPS
    biceps: {
        label: "Biceps",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    { name: 'EZ Bar Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1364d3db0a45a5e5154386c0a28bb6bc' },
                    { name: 'EZ Bar Reverse Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/45b239b0f05777ae901564638c35fb19' },
                    { name: 'Straight Bar Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0aabc5571f37023c27ad55680ba66dce' },
                    { name: 'Straight Bar Broken Wrist Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ec0c5b254ddf362d4adf359a11b955a' },
                    { name: 'Barbell Drag Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7bacecb8b2fefb1cf88b549b243b5460' },
                    { name: 'Wide Grip Barbell Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bdae52ce422ad9f501ad92d47268dca9' },
                    { name: 'EZ Bar Reverse Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1dc755dca34d390e10ca0917e4be9282' },
                    { name: 'EZ Bar Preacher 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f65d250483410e058e4fe1dff7d3a960' },
                    { name: 'Narrow Grip EZ Bar Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bc0789cb4c5dd1eabb275fc1f347f9ec' },
                    { name: 'Wide Grip EZ Bar Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a20615bc1d88d7aa41b73e1703871a4a' },
                    { name: 'Barbell 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b7dfb838d032c125c02f4da080910de7' },
                    { name: 'EZ Bar Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3250947fc5319cc3d18f21b852a2abdc' },
                    { name: 'Barbell Reverse Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d5d67a2b2f4e43cf6f3df9607d1cedb6' },
                    { name: 'Back against Wall EZ Bar Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c38e55021fe3490afbe57c01e9c67106' },
                    { name: 'Back against Wall EZ Bar Reverse Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dde524e4619858e99fd6efde4da54925' },
                    { name: 'Narrow Grip EZ Bar Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/417a4fd3a971880c43f7180e665efc6e' },
                    { name: 'EZ Bar Broken Wrist Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a6efed5d8474a27b7a222925a709ad60' },
                    { name: 'EZ Bar 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/45cd7a17137da3505e310088529c6cd0' },
                    { name: 'Reverse Grip Straight Bar Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/42f7435f98f27023f25b0f7b07f76edd' },
                    { name: 'Narrow Grip Barbell Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/20c4c77645af33cad69e93d640a3def8' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    { name: 'Dumbbell Spider Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/70d2b87f3fbc3af2fb17a0e10eeeb71d' },
                    { name: 'Alternating Dumbbell Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/84f5ae04df96989a94d680c6d3b5cdb4', geriatric_priority: true },
                    { name: 'Dumbbell Standing Zottman Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4d9043eb3b85126dd15ea29e07e000c8' },
                    { name: 'Standing Hammer Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3be362e587f25ed113dbe2dda5fa016a', geriatric_priority: true },
                    { name: 'Dumbbell Concentration Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6a42ace1de3936ca0e25f835c799831f' },
                    { name: 'Dumbbell Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f54e8520e657807037b8c88e48e09d35', geriatric_priority: true },
                    { name: 'Speed Alternating Arm Curls Burnout', movement: ['Pull'], intent: ['Endurance', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9a5400e2c5505726429c4c00ebd7c7c1' },
                    { name: 'Seated Zottman Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e29bcedde93d153274ba7b58017e651b' },
                    { name: 'Dumbbell Cross Body Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/adc620c063f1fe1828a69bbac0fb5f41' },
                    { name: 'Alternating Hammer Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3afb2ca32880c6e9ac2ce3280518fca6' },
                    { name: 'Alternating Dumbbell Curls (Seated)', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5feb0e3f7f514ab587a58ce8e6a250dd', geriatric_priority: true },
                    { name: 'Incline Hammer Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/252bafb8f50447dcf8afc53e3103ca19' },
                    { name: 'DB Alternating Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/96a5c2f534ff33c18a77d2ca801bf540' },
                    { name: 'Broken Wrist Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fc6df89af19ba9ac2332c23261b7ae8b' },
                    { name: 'Standing Single Arm Broken Wrist Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b041f510c9fc468ca21a8ae12915e53a' },
                    { name: 'DB Crossbody Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1f6f86a35e5ed8fa3cbcd6ca42dc52cb' },
                    { name: 'DB Concentration Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/10c2515f1160a97c6a8d4898a7cbaf96' },
                    { name: 'Spider Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/10db742ece036316b8b15fd7605cc127' },
                    { name: 'Incline Preacher Hammer Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6309d9e36ef45f03a5852fd7a7a7d89d' },
                    { name: 'DB Alternating Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3d6271ef77c06147381af00092ef6b2e' },
                    { name: 'Double Arm Incline Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/454e0d08f6b827234cf34c8232f1eb66' },
                    { name: 'DB Broken Wrist Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f0c4a20aff32162a76651f998184feed' },
                    { name: 'DB Pronate to Supinate Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b69bb4bc6f32acf5c876c7c889fb884b' },
                    { name: 'DB Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6a9236afe2414fcbd870959ca0338c39' },
                    { name: 'Broken Wrist Spider Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/83b1d33aef9df1dfc2b4a608b73a1f01' },
                    { name: 'Spider Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7f84de31e94dcac1151702410ff69d3f' },
                    { name: 'Reverse Grip DB Spider Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ad3c66b2d325fe142a473f71426ba988' },
                    { name: 'Incline Preacher Broken Wrist Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2bb2c7108561b8784120d5e90365134a' },
                    { name: 'DB Alternating Broken Wrist Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9f07b7fa4ed45c4e1e72d4b6e8211785' },
                    { name: 'Alternating DB Incline Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2381dffe4d5149b85a9546aae054a3bc' },
                    { name: 'DB 21s Against the Wall', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c79c4c82cc17774fad570e7aca956b5d' },
                    { name: 'Incline Hammer Reverse Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/173ed61fdf8e774d3980246105a4b197' },
                    { name: 'Single Arm Incline Curl on Bench', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5da2296d49807758366b81e42715c1f9' },
                    { name: 'DB Bent over Concentration Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d3517d5fa639dc50e25a06790954b8d1' },
                    { name: 'DB 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/770e335a5ed1e2426a510742f756c345' }
                ]
            },
            cable: {
                label: "Cable",
                exercises: [
                    { name: 'Single Arm Cable Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5b6c80c3096db8082da9038dc3f056c1' },
                    { name: 'Standing Rope Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5eb6ee8a1812a2ae57c22fa4187480fc' },
                    { name: 'Rope Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6ae2bab5d832238bbc45d7871da6f82d' },
                    { name: 'Alternating Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b953bb1b0f7d319d4e87cf8d10dad4f9' },
                    { name: 'Standing Rope Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/07ed4a4fbeaee4d403e81dff8484ec63' },
                    { name: 'Standing Single Arm Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6254d63ece08d20382a52638be8ac4c9' },
                    { name: 'Single Arm Reverse Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3f7ba1b3ce7d3df43a16b3d167062152' },
                    { name: 'Dual Cable 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/08f14c4f66ab17bdec3be45e132014bd' },
                    { name: 'Cable Rope Preacher Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d717d84232fbd833bbb6be9c8fd546f7' },
                    { name: 'Cable EZ Bar Reverse Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/32870aef1f65b87a8b33e0986fc065e9' },
                    { name: 'Cable EZ Bar Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ceb3496a3ec350855015f1a3d6727fc7' },
                    { name: 'Cable Reverse Curl 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/60fa486e59f38f17041c0eba26b4ca09' },
                    { name: 'Cable Cross Body Single Arm Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/05e12d6a4c5bd34fb032bf495d54a985' },
                    { name: 'Broken Wrist Single Arm Cable Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/036a0c371638a961eb361c8afb411879' },
                    { name: 'Cable EZ Bar Preacher 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d76febdfdfc2b7d840da14b122b52f16' },
                    { name: 'Single Arm Big Ron Cable Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fddb9534ddbbec112307797b39ad4bb2' },
                    { name: 'Straight Bar Cable Drag Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a9eaafad4c10e84de072a1d4a5fdc71e' },
                    { name: 'High Rope Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0728c369f1338e734f72b07120823ca6' },
                    { name: 'Cable Straight Bar 21s', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/eaf00f71c6216cff8d43d475452916be' },
                    { name: 'Straight Bar Reverse Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c9d9ab4563e4654fa8cf74be3127ff50' },
                    { name: 'Straight Bar High Cable Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3c1cc936965f90bb32e4b18d9d998c89' },
                    { name: 'Double Arm Cable Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f12710f9d888976841d7d634267ddf9d' },
                    { name: 'Cable Preacher Curls Straight Bar', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/102d8158268367babea5ea7f2abf947a' },
                    { name: 'Standing Straight Bar Cable Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8ae3b1c8d7b95e38f1443211e91c5e15' },
                    { name: 'Cable Straight Bar Wrist Flexion Extension', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/42f2507b2e896862705fe557e60c5a9b' }
                ]
            },
            other: {
                label: "Other",
                exercises: [
                    { name: 'Band Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fcaf9c7b79470f50c84c4108f76921e7', geriatric_priority: true },
                    { name: 'Band Curls from Rack', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/059a8020058876c826b2cfdd2f0f9e69' },
                    { name: 'Standing Alternating Band Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0bde735c81dcf6a843478f7dd356bbe0' },
                    { name: 'Alternating Band Hammer Curls Standing', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cf2d921db251eeb9db7b66f6e003f8b4' },
                    { name: 'Standing Reverse Band Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d60eb653bccc7039167847880a3fe07c' },
                    { name: 'Band Curls Standing', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3d7b11066806cf478b50ddc53c783738' },
                    { name: 'Standing Band Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f7ae5baeed43fa3ce3c7137c866ca7f3' },
                    { name: 'Band Standing Drag Curls', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/39131f4950e9382809d6a961ad63a70c' },
                    { name: 'Stability Ball Alternating Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/59f471cd2ed30a31eceececd8470a05a' },
                    { name: 'Stability Ball Single Arm Preacher Curl', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c26e2e9e19b99a0440e22f1a1620ef15' },
                    { name: 'Stability Ball Broken Wrist Curl', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d5b77dfe7a08c6020e7012c105bffda5' },
                    { name: 'Stability Ball Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8b172f0c1405b84d3b6d569411c17d28' },
                    { name: 'Stability Ball Preacher Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4fb819d2c23308549c8e953a81e9524a' },
                    { name: 'Stability Ball Preacher Hammer Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/af7198b2d0c76f506892d163866646fc' },
                    { name: 'Stability Ball Preacher Broken Wrist Curl', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5c58071e73932d9a8ef3dc5435348fd2' },
                    { name: 'Stability Ball Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a64d26ec7c9c82e872fe2bb714a7ceac' },
                    { name: 'Stability Ball Single Arm Hammer Curl', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball', 'Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/15c5622fb69d081962823f99aced0b97' },
                    { name: 'TRX Curls', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c0ee18e9b0b781e49802eae48126f54c' }
                ]
            }
        }
    },

    // TRICEPS
    triceps: {
        label: "Triceps",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    { name: 'Close Grip Bench Press', movement: ['Push'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Upper Body Load Limited'], youtube: 'https://iframe.videodelivery.net/c951cb36291c1f1ddb328e6fd692153d' },
                    { name: 'Seated EZ Bar Overhead Extensions', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/a261c8c18c7361c25d2bba164fe7d43b' },
                    { name: 'Barbell EZ Bar Skull Crusher to Head', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6db08e10c49cd27838d0bbc8f1e72253' },
                    { name: 'EZ Bar Decline Skull and Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/56a986eea97b79ee36883b58756c7e8c' },
                    { name: 'EZ Bar Incline Skulls Behind Head', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0a250709a8735b2f7454e06281cc595f' },
                    { name: 'Barbell Skull Crusher to Chin', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e8a3c168db531f5f6126c9fcf9de57db' },
                    { name: 'EZ Bar Incline Skull Crusher to Head', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c156855dd9c4e164fc93b3cb29975dfd' },
                    { name: 'Bar Chain Skulls and Presses', movement: ['Push'], intent: ['Hypertrophy', 'Power'], equipment: ['Barbell', 'Chain'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ab9ce63f73a6ab8d32c459691d5f0440' },
                    { name: 'EZ Bar Extended Skull Crushers', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4866da0c9a406bee49b5e9bbb464e788' },
                    { name: 'Barbell Skull plus Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3a7b57e951cc11325c61db02cba294fb' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    { name: 'Tate Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5e98b80bb0d4421b84660e9471b6b2da' },
                    { name: 'Seated DB Overhead Tri Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/50e88f9b131e6d9995568570182b5241', geriatric_priority: true },
                    { name: 'DB Decline Crush Press', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8f306a5bb4999d738fabce87b819fba5' },
                    { name: 'Standing Alternating DB Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/da05e9ab61fbb050c4f2a599d685ae2e' },
                    { name: 'DB Skull Crusher to Chin', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cda2265ee711eeab71c8d317221170e8' },
                    { name: 'DB Skull Crusher Prone Grip', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3b0b78b857f135fbe7d1f5e21309b599' },
                    { name: 'DB Decline Supine Grip Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f1cbf3312b92f906601cc1ca64ee8d76' },
                    { name: 'DB Incline Alternating Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1f5e595d2a2d728391cdc3e4d4c79013' },
                    { name: 'DB Seated Single Arm Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/953ca43e8b9b6d9990631c0d1debc91a' },
                    { name: 'DB Incline Prone Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b8368f14cc6760703aa794c44a401039' },
                    { name: 'Bent Over Double Arm Kickback', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0bc2a3b464d9604050627b21b4c9015d', geriatric_priority: true },
                    { name: 'DB Skull Crusher Top of Head Extended', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/79f85ac735dd2fea3347c1a5a612fcb3' },
                    { name: 'DB Decline Extended Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/736b23aea2c300f3437f155e5fd6e9d4' },
                    { name: '2 DB Seated Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/61916021c64097e5b4a24335eec18686' },
                    { name: 'Single Arm Kickback Hand on Bench', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/db17a579160850f86540a17c6aac1ed0', geriatric_priority: true },
                    { name: 'Lying Triceps Skull Crushers Roll', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fe820475ba5c2df9247badc264392f5e' },
                    { name: 'DB Decline Prone Grip Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8e77a40a35308ad6c27e4dbac197fce4' },
                    { name: 'Standing DB Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/6a75484bfb6a9e410f924884918d5c37' },
                    { name: 'DB Decline Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/39ceb3118c35e7d9559a48d322ad9187' },
                    { name: 'DB Decline Alternating Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/adb05b9e9375f762450b60d988f98913' },
                    { name: '2 DB Alternating Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/94c69e8de3d30115e00890ff05737e4a' },
                    { name: 'DB Incline Supine Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/28ad1f8973f7e703021988c08262510a' },
                    { name: 'Standing DB Single Arm Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/b0ad6d7a060c241397ee68608fb1d968' },
                    { name: 'DB Skull Crusher Supine Grip', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ca63ecb381eb02a2046d3da2aaa645eb' },
                    { name: 'DB Incline Skull Crusher', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e3e8a135a05aae8faa8b2b8fca6baab5' },
                    { name: 'Single Arm Kickback Kneeling on Bench', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8c076a88aa1cd293a3aeaea1a2eedeed', geriatric_priority: true },
                    { name: '2 DB Standing Overhead Tri Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/79feae87d0eba16707c636851cb438f5' }
                ]
            },
            cable: {
                label: "Cable",
                exercises: [
                    { name: 'Bent Over Pushdown Rope', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/84e8527ac7bdd614dd2bec25f512df95' },
                    { name: 'Single Arm Rope Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7f8332731616c5ca34901439ce63f67e', geriatric_priority: true },
                    { name: '3 Position Triceps Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/082d7785b9b9662cdcea97a89bb5dfc4' },
                    { name: 'Banded Rope Kickback Bloodflow', movement: ['Push'], intent: ['Hypertrophy', 'Endurance'], equipment: ['Cable', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2507a080fca823f14df0ddecf9f0ec24' },
                    { name: 'Rope Turn Around Overhead Triceps', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/b31f1b10e2ecd9e8acb26cbcc09fba22' },
                    { name: 'Straight Bar Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d3b872c7c89a848c88d24ee612bda978', geriatric_priority: true },
                    { name: 'EZ Bar Cable Pushdown and Turn Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/aa181368aaa024d3c7286696b9e324c3' },
                    { name: 'Band and Rope Pushdown Drop Blood Flow', movement: ['Push'], intent: ['Hypertrophy', 'Endurance'], equipment: ['Cable', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/223e1ebfdb3a7b54224b3488303d635e' },
                    { name: 'Single Arm Rope Kickback', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/912ef621404c4c379b1e79eaedae8e66', geriatric_priority: true },
                    { name: 'EZ Bar Cable Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/75d966bf4b7e2e4c2bb22f069409f65f' },
                    { name: 'EZ Bar Turn Around Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7022e78cca8698e92d3b78edf8bc4195' },
                    { name: 'Rope Pushdown Bent Over Turn Around', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/68688d06154364a2f91f5fb49ec230dd' },
                    { name: 'Straight Bar Turn Around Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/24114549f663bc7a7c30b4ec29a4db47' },
                    { name: 'Rope Single Arm Overhead Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/b3c429e1f42f071da7e7f8e827bdfcff' },
                    { name: 'Rope Triceps Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/525287f15713281c1732cb7bb86c0509', geriatric_priority: true },
                    { name: 'Cable Overhead Rope Tri Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/d357266d9a25bb77fcf4867927631db7' }
                ]
            },
            other: {
                label: "Other",
                exercises: [
                    { name: 'Turn Around Band Overhead Extensions', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/003023b65c981969585473b52e71b544' },
                    { name: 'Band Pushdown to Turn Around Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/724635587faa56e1f7e1a5293c4b9821' },
                    { name: 'Band Triceps Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c3e1d5d28875edbde346306bac55ecb0', geriatric_priority: true },
                    { name: 'TRX Skull Crushers', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d9c131c51073368c11295f328dc89a7a' },
                    { name: 'Single Arm Triceps Band Pushdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ca2c4c97aed9d1e25e56f116cc357fe1', geriatric_priority: true },
                    { name: 'Bench Dips', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/461da49bf1a8d069417632a102bd4cc2', geriatric_priority: true }
                ]
            }
        }
    },

    // LEGS
    legs: {
        label: "Legs",
        subcategories: {
            barbell: {
                label: "Barbell",
                exercises: [
                    { name: 'Alternating Barbell Reverse Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/b16d3a6bbdaee189e82c24eb214a16aa' },
                    { name: 'Anderson Pin Squats', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/1d0d54279e4a21c52f10f8d9156ae6aa' },
                    { name: 'Back Squat', movement: ['Squat'], intent: ['Max Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading', 'Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/2c74b45c002cb78be13b75211d4ce32e',
                      schemes: [
                        { name: '5x5', sets: 5, reps: '5', percentages: [75, 77.5, 80, 82.5, 85] },
                        { name: '3x10', sets: 3, reps: '10', percentages: [70, 70, 70] },
                        { name: 'GVT (10x10)', sets: 10, reps: '10', percentages: [62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5] },
                        { name: 'Wave 8-6-8-4', sets: 4, reps: '8,6,8,4', percentages: [72.5, 80, 77.5, 85], repsPerSet: [8, 6, 8, 4] },
                        { name: 'Wave 4-2-4-2-2', sets: 5, reps: '4,2,4,2,2', percentages: [82.5, 90, 85, 92.5, 95], repsPerSet: [4, 2, 4, 2, 2] },
                        { name: 'Wave 5-5-3-3', sets: 4, reps: '5,5,3,3', percentages: [77.5, 80, 85, 87.5], repsPerSet: [5, 5, 3, 3] },
                        { name: 'Dynamic 8x3', sets: 8, reps: '3', percentages: [75, 75, 75, 75, 75, 75, 75, 75] },
                        { name: 'Dynamic 3x6', sets: 3, reps: '6', percentages: [65, 65, 65] }
                      ]
                    },
                    { name: 'Back Squat Heels Elevated', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/8a1c33802f836f5bcdaf0be6fea5b577' },
                    { name: 'Barbell Alternating Step Downs', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/f631f6b5b45653964172b5c12dc68420' },
                    { name: 'Barbell Alternating Step Ups', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/71fbbc2756361db02d482d1b8f511121' },
                    { name: 'Barbell Back Squat', movement: ['Squat'], intent: ['Max Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading', 'Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/764d2a1b1b9b4a6c8ef7ab761b6c2b1c' },
                    { name: 'Barbell Crossover Step Ups', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/0d21521a1cc36e0a7fb4b11b4d942e39' },
                    { name: 'Barbell Forward Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/ac6c18381488334d38c58b84e8dac79f' },
                    { name: 'Barbell Hip Thrusts on Floor', movement: ['Hip'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c982a18c3f3bc0f068bad75e35b0ce1d' },
                    { name: 'Barbell Reverse Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/dd72237c8130ecf62f3a229547825020' },
                    { name: 'Barbell Reverse Lunge to Step Up', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/bf2540be94f385cdab0fbbe4cf385691' },
                    { name: 'Barbell Single Leg Step Up', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/1eb4a5286f57e047d1c97856ea07f129' },
                    { name: 'Barbell Step Ups', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/a73a79178b197203ec097441f3804a96' },
                    { name: 'Barbell Walking Lunges', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/3bfceffac7847afa83854cbcc892d2a9' },
                    { name: 'Block/Rack Pull Deadlift', movement: ['Hinge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/3eb2fe1d49439a6730887750aea1587c' },
                    { name: 'Box Back Squats', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/93d15d901bd5e795bb08d201958f3b91' },
                    { name: 'Box Squat', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/4c56c45c0f6b6d96c89c2420a6dfa0e1' },
                    { name: 'Bulgarian Split Squat', movement: ['Squat', 'Lunge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/d0b1158fa5fc27a97734f237e32014dc' },
                    { name: 'Deadlift', movement: ['Hinge'], intent: ['Max Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading', 'Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/2fd3f7492e8bd3e153197b9ed9ef7883',
                      schemes: [
                        { name: '5x5', sets: 5, reps: '5', percentages: [75, 77.5, 80, 82.5, 85] },
                        { name: '3x10', sets: 3, reps: '10', percentages: [70, 70, 70] },
                        { name: 'Wave 8-6-8-4', sets: 4, reps: '8,6,8,4', percentages: [72.5, 80, 77.5, 85], repsPerSet: [8, 6, 8, 4] },
                        { name: 'Wave 4-2-4-2-2', sets: 5, reps: '4,2,4,2,2', percentages: [82.5, 90, 85, 92.5, 95], repsPerSet: [4, 2, 4, 2, 2] },
                        { name: 'Wave 5-5-3-3', sets: 4, reps: '5,5,3,3', percentages: [77.5, 80, 85, 87.5], repsPerSet: [5, 5, 3, 3] }
                      ]
                    },
                    { name: 'Deficit Deadlift Snatch Grip', movement: ['Hinge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/fccdf3ff1d8361fb17a8ba2c32e4b17d' },
                    { name: 'Forward Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/697493bb9f626b9f59d2848e3d579f95' },
                    { name: 'Front Lunge Rack Position', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/11ada1515ac8286fa316e32f6c905523' },
                    { name: 'Front Rack Alternating Forward Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c0666b9240904948abc8e210227e22a5' },
                    { name: 'Front Rack Alternating Reverse Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/eaa5a3d94ce77f0d16430cf195f3ae3d' },
                    { name: 'Front Rack Forward Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a54390cb4b693862cbb96107171e3362' },
                    { name: 'Front Rack Reverse Lunge', movement: ['Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9f081af5fd9c4180199e5319cd9677e5' },
                    { name: 'Front Squat', movement: ['Squat'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/51709237e2b56d0d31dccda5d934f501',
                      schemes: [
                        { name: '5x5', sets: 5, reps: '5', percentages: [75, 77.5, 80, 82.5, 85] },
                        { name: '3x10', sets: 3, reps: '10', percentages: [70, 70, 70] },
                        { name: 'GVT (10x10)', sets: 10, reps: '10', percentages: [62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5, 62.5] },
                        { name: 'Wave 8-6-8-4', sets: 4, reps: '8,6,8,4', percentages: [72.5, 80, 77.5, 85], repsPerSet: [8, 6, 8, 4] },
                        { name: 'Wave 4-2-4-2-2', sets: 5, reps: '4,2,4,2,2', percentages: [82.5, 90, 85, 92.5, 95], repsPerSet: [4, 2, 4, 2, 2] },
                        { name: 'Wave 5-5-3-3', sets: 4, reps: '5,5,3,3', percentages: [77.5, 80, 85, 87.5], repsPerSet: [5, 5, 3, 3] },
                        { name: 'Dynamic 8x3', sets: 8, reps: '3', percentages: [75, 75, 75, 75, 75, 75, 75, 75] },
                        { name: 'Dynamic 3x6', sets: 3, reps: '6', percentages: [65, 65, 65] }
                      ]
                    },
                    { name: 'Front Squat Heels Elevated', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/b20266439183d42b646ef71b947e8880' },
                    { name: 'Good Morning', movement: ['Hinge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/90c1111878b2ec1306ec4167367c6adb' },
                    { name: 'High Bar Back Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/d276ef37ef06e3a5cfcf6b4483dd030f' },
                    { name: 'Low Bar Back Squat', movement: ['Squat'], intent: ['Max Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/2d5a1372d657cbe5ba4ad5402ba35509' },
                    { name: 'Pause Back Squats', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/d92910195e12e92cb358c3e9d9a5682f' },
                    { name: 'Pause Deadlift', movement: ['Hinge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/8f9278bdb5a7fc0bf5e9288367bcf872' },
                    { name: 'Pause Front Squats', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/9ed42e9800b2c34dcd1e41643cc3183f' },
                    { name: 'RDL', movement: ['Hinge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/7b7b56b89168f5d43220128741d5e4a8' },
                    { name: 'Romanian Deadlift (RDL)', movement: ['Hinge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['Lower Body Load Limited'], youtube: 'https://iframe.videodelivery.net/51dfa356921c1e0cd3809eef6d15f458' },
                    { name: 'Safety Squat Bar Alternating Reverse Lunge', movement: ['Lunge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/3b76c42b9077e07567df88dd335ef03f' },
                    { name: 'Safety Squat Bar Assisted Box Squat', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/8e225cc95d4a4cb1e6154274facc949b' },
                    { name: 'Safety Squat Bar Assisted Step Up', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/3c6bb0bdc632c537a8cc8f6db0124830', geriatric_priority: true },
                    { name: 'Safety Squat Bar Good Mornings', movement: ['Hinge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/2d473f76962625e078dfc250f4b85ddb' },
                    { name: 'Safety Squat Bar Split Squat', movement: ['Squat', 'Lunge'], intent: ['Strength', 'Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/8b34b05ada69931fe2734970fc332c57' },
                    { name: 'Safety Squat Bar Step Up', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/98be5924d53f65cf8007df3ee5c7e0f5' },
                    { name: 'Snatch Grip Deadlift', movement: ['Hinge'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/e6544408fd205ba6cf19b7e6e2096dfa' },
                    { name: 'Snatch Grip Deficit Deadlift', movement: ['Hinge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/a6eaea2ddd7122d3e87b65b74bf547a9' },
                    { name: 'Step Ups (Safety Squat Bar)', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/32c65547c8de041463c12ec49ffae323' },
                    { name: 'Step Ups', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/40f1bf2714fbb1dbad4c51e35ad89502' },
                    { name: 'Sumo Deadlift', movement: ['Hinge'], intent: ['Max Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/69d38a9a7bd07858461ae9c8760996bd' },
                    { name: 'Tempo Back Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/b870919041a51d282a067b90e595f3c7' },
                    { name: 'Tempo Deadlift', movement: ['Hinge'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/4f42700b1dbd5871cfb4d3ad6eac93df' },
                    { name: 'Zercher Squats', movement: ['Squat'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d90f08c9b3a9e94e3627138c9337e768' }
                ]
            },
            dumbbell: {
                label: "Dumbbell",
                exercises: [
                    { name: '1 1/2 Dumbbell Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/67a8c79e76e6645bd3a335df2f16cefa' },
                    { name: '1 1/2 Split Squats', movement: ['Squat', 'Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a9353ef3838568520fb8257c723934c2' },
                    { name: 'Bulgarian Split Squat (Dumbbell)', movement: ['Squat', 'Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/19b9cdd54994c791827151c71d7f9500', geriatric_priority: true },
                    { name: 'Bulgarian Split Squat Drop Set', movement: ['Squat', 'Lunge'], intent: ['Hypertrophy', 'Endurance'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/61703521752184928f283b91ce288903' },
                    { name: 'Crossover Step Up', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/780ed43d28c057b784ceceffdf70e67a' },
                    { name: 'Dumbbell Alternating Curtsy Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3bf0a7e1a4e192ed72d03303fa6a2c03' },
                    { name: 'Dumbbell Alternating Front Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/df5722de69c1bb232b2cff4112e36fc4' },
                    { name: 'Dumbbell Alternating Reverse Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fc7f9abc0bfbea1cc10314a30e0839f8' },
                    { name: 'Dumbbell Bench/Box Squat', movement: ['Squat'], intent: ['Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ba8da605933cee3b1a1a6ea9d83644b9', geriatric_priority: true },
                    { name: 'Dumbbell Calf Raise', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/311c146abd2b92ff5c297d2cabbb1bb3', geriatric_priority: true },
                    { name: 'Dumbbell Cossack Squat', movement: ['Squat'], intent: ['Mobility', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c60a388f6fa2e4743da9b30cacfba16e' },
                    { name: 'Dumbbell Curtsy Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6fc4c663ecf48be4765f8c053f38060a' },
                    { name: 'Dumbbell Forward Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6c2cc7e5bf7e32d6c7946a2c17e76888' },
                    { name: 'Dumbbell Goblet Squat', movement: ['Squat'], intent: ['Hypertrophy', 'Technique'], equipment: ['Dumbbell', 'Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6285691c6debb6428b760064fc27612a', geriatric_priority: true },
                    { name: 'Dumbbell Lateral Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4b04fef63e428ee3586384be200ccf0e' },
                    { name: 'Dumbbell Reverse Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/94fa67cd9c1dd49063d769491e2829c1', geriatric_priority: true },
                    { name: 'Dumbbell Romanian Deadlift (RDL)', movement: ['Hinge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d7d54e82f05a687b2a2cab94177d86ce', geriatric_priority: true },
                    { name: 'Dumbbell Single Leg Bench/Box Squat', movement: ['Squat'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/85bfac1d1b56562ad937ea47cb9ee364' },
                    { name: 'Dumbbell Split Squat', movement: ['Squat', 'Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8b770e0ee26104efd9022055d7ca0c5a' },
                    { name: 'Dumbbell Step Ups', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7a3f5a3f2b70121248f2141451ae33bf' },
                    { name: 'Dumbbell Suitcase Squat', movement: ['Squat'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0ec265aef468ee726c4e47fa62b64ce5' },
                    { name: 'Front Foot Elevated Dumbbell Split Squat', movement: ['Squat', 'Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9779f984c6733fbfb0ec4fa064da61d7', geriatric_priority: true },
                    { name: 'Heels Elevated Goblet Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d41ee32b1cb61c259acaf7a44800a64c', geriatric_priority: true },
                    { name: 'Lateral Step Ups', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f16075ac8e42bff78b04308fcc073783' },
                    { name: 'Plate/Dumbbell Box Squat', movement: ['Squat'], intent: ['Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c50c3aaf39a887a9ffd33a43e65e69de', geriatric_priority: true },
                    { name: 'Single Leg Calf Raise', movement: ['Plantarflexion'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b41dccd0006ef859c3b13f0dc267a0bd' },
                    { name: 'Single Leg Dumbbell RDL', movement: ['Hinge'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1f6625c7dd88f26f057b0a0c5c58eb83', geriatric_priority: true },
                    { name: 'Single Leg RDL', movement: ['Hinge'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f87d7a93038a19943ab2b71dd8cb31da', geriatric_priority: true },
                    { name: 'Step Back Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8f577d59cd075fce18777a3d1fff00dc' }
                ]
            },
            functional: {
                label: "Functional",
                exercises: [
                    { name: 'Assisted Single Leg Squat', movement: ['Squat'], intent: ['Strength', 'Stability'], equipment: ['Bodyweight', 'TRX'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1a9233cbcb4194f47a15f5b8deee5e71' },
                    { name: 'Backward Sled Drag', movement: ['Drive'], intent: ['Knee Health', 'Conditioning'], equipment: ['Sled'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8ce5fc414fc957487ad29ac620824731', geriatric_priority: true },
                    { name: 'Band Split Squat', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dc1fa4b70c453325ce827ead5a1f0811' },
                    { name: 'Bodyweight Bulgarian Split Squat', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/69e007e8205ead247fddd5e388a1f854' },
                    { name: 'Bodyweight Calf Raise', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9267420c6b648628992afe24cf28b4af', geriatric_priority: true },
                    { name: 'Bodyweight Split Squat', movement: ['Squat', 'Lunge'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a2ac6850d284e4dce2dfb9bd35d3d9bf', geriatric_priority: true },
                    { name: 'Bodyweight Split Squat Hold', movement: ['Squat', 'Lunge'], intent: ['Endurance', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ece9c0e6dec81ce788d024acdf086c68' },
                    { name: 'Bodyweight Tempo Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c8caf2505b3c4f652a6b0ec60cbd0840', geriatric_priority: true },
                    { name: 'Box Jumps', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/98a5dc1dfb92d1129ff9f054beb0b909' },
                    { name: 'Butt Kicker Jumps', movement: ['Jump', 'Power'], intent: ['Power', 'Conditioning'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/5f198e7120cc4d9677b30ed3728d15b7' },
                    { name: 'Calf Raises', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d765c4bb017092bb541bac4dd3e44592', geriatric_priority: true },
                    { name: 'Cossack Squat', movement: ['Squat'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/91334fbb15b201708227396b29490c46' },
                    { name: 'Dumbbell Sumo Squats', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0f87b8f7e9fecfb7316d4b3d6c8a7638', geriatric_priority: true },
                    { name: 'Depth Jumps', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/38609e186f1acecc7e69808d745ad01c' },
                    { name: 'Farmers Carry', movement: ['Carry'], intent: ['Stability', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c17a7cbc4bb6ac57d0e1ea406f47da40' },
                    { name: 'Forward Sled Drag', movement: ['Drive'], intent: ['Strength', 'Conditioning'], equipment: ['Sled'], contraindications: [], youtube: 'https://iframe.videodelivery.net/11c9e9abdc2307c85a2ff57fdb80ff75' },
                    { name: 'Forward Sled Pull', movement: ['Drive'], intent: ['Strength', 'Conditioning'], equipment: ['Sled'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0101d4905b20d5d973622f90048768d2' },
                    { name: 'Forward Sled Push', movement: ['Drive'], intent: ['Strength', 'Conditioning'], equipment: ['Sled'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1bab3c4d125604b92d59a31093a864a6' },
                    { name: 'Hip Thrusts Feet on Stability Ball', movement: ['Hip'], intent: ['Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/51b81a24852306dcea25e793cb4e2ba2' },
                    { name: 'Isometric Split Squat Hold', movement: ['Squat', 'Lunge'], intent: ['Endurance', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e42657b468f32317942b1f946cb06221' },
                    { name: 'Lateral Bounds', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/7e12bfc9edc4a43639e8046a76d88613' },
                    { name: 'Leg Curls Feet on Stability Ball', movement: ['Hinge'], intent: ['Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/590247837c072ba4d95185d846889bf5' },
                    { name: 'Nordic Curl', movement: ['Hinge'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d2ca97c81770e94f62ca78232bfc2013' },
                    { name: 'Repeat Broad Jumps', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/076a861c63b190ff30fdcb9bfa51259e' },
                    { name: 'Rope Pull-Through', movement: ['Pull', 'Hip Hinge'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1038099e6628f6f903db514926a8add3' },
                    { name: 'Safety Bar Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: 'https://iframe.videodelivery.net/d453d58f2698f2dea0c3fec2218a4c2a' },
                    { name: 'Seated Band Hip Extensions', movement: ['Hip'], intent: ['Activation', 'Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/18df66b80212e5cbcbf197c9006fc2be', geriatric_priority: true },
                    { name: 'Seated Calf Raise', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0e80759704905cdc26b0d69c90e2b6e4' },
                    { name: 'Single Leg Cable Split Squat', movement: ['Squat', 'Lunge'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/96707bb965d8b10cfdc7f6e08b8f54e1' },
                    { name: 'Single Leg Glute Extension', movement: ['Hip'], intent: ['Stability', 'Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cc0aebc14398b888be1ce16546f8e47b' },
                    { name: 'Single Leg Hop', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/ed68b0850bc2ff82700e9b1793867210' },
                    { name: 'Single Leg Squat to Bench', movement: ['Squat'], intent: ['Strength', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8c8a29322b77459b834ab829f264caed' },
                    { name: 'Skater Hops', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/6f915ea5971f637b2f01542b1ea8df23' },
                    { name: 'Squat Facing Wall', movement: ['Squat'], intent: ['Mobility', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0c76524cbfa7a35a3a21bf160365186a' },
                    { name: 'Squat Hold', movement: ['Squat'], intent: ['Stability', 'Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/538797895fc30146d739d478ebead768' },
                    { name: 'Squat Jump', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/7cd6537528084e83e7251237360f412e' },
                    { name: 'Stability Ball Glute Extensions', movement: ['Hip'], intent: ['Stability', 'Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/793aab55dbbc29d2f553505477e3dbe0' },
                    { name: 'Stability Ball Single Leg Curl', movement: ['Hinge'], intent: ['Stability', 'Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9ea7804f4fe4766fa2bf94b8bb4eddde' },
                    { name: 'Stability Ball Single Leg Hip Thrust', movement: ['Hip'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/da76d3d6635d11432abd6ffe1fa04359' },
                    { name: 'Stability Ball Straight Leg Hip Thrust', movement: ['Hip'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e2d68bd953e895346f01be85b952452e' },
                    { name: 'Star Jumps', movement: ['Jump', 'Power'], intent: ['Power', 'Conditioning'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/79b8df9f4e1d6f16341c121eff113a2b' },
                    { name: 'Tempo Bodyweight Squats', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4e2d9674251860165d43699c20bf7107' },
                    { name: 'Tempo Step Up/Down', movement: ['Squat'], intent: ['Hypertrophy', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/38bc8114b7be09589daf34848e7fcc00', geriatric_priority: true },
                    { name: 'Tibialis Anterior Lifts', movement: ['Dorsiflexion'], intent: ['Prehab', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2453e512cdf519e91af0df7aa4c667da' },
                    { name: 'Triple Threat', movement: ['Hip', 'Hinge'], intent: ['Hypertrophy', 'Endurance'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4aa0b6997956ece8bf9b684b4d4fbb75' },
                    { name: 'TRX Assisted Reverse Lunge', movement: ['Lunge'], intent: ['Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9a54e7b1f2a76d6fb2cce73000127403', geriatric_priority: true },
                    { name: 'TRX Assisted Split Squats', movement: ['Lunge'], intent: ['Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2694493cbee95b58ff34d90f186bfe9b', geriatric_priority: true },
                    { name: 'TRX Reverse Lunge Assisted', movement: ['Lunge'], intent: ['Stability'], equipment: ['Suspension'], contraindications: [], youtube: 'https://iframe.videodelivery.net/27681bf8bb7583586ba1d62b4c733da7', geriatric_priority: true },
                    { name: 'Tuck Jumps', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/25fd8cd79e00e1d462bc6b2ad24b6311' },
                    { name: 'Vertical Jumps', movement: ['Jump', 'Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: 'https://iframe.videodelivery.net/d5d4077f07f3400cb8f2a02f1c4f7ca2' },
                    { name: 'Wall Sit', movement: ['Squat'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/699d7608fad31030d5695395e32872d6', geriatric_priority: true },
                    { name: 'Stability Ball Single Leg Hip Thrust (Bent)', movement: ['Hip'], intent: ['Hypertrophy', 'Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ba77294554c442a4bf2d22b6e2a552c1' }
                ]
            },
            machine: {
                label: "Machine",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Single Leg Hamstring Curl', movement: ['Knee Flexion'], intent: ['Hypertrophy', 'Stability'], equipment: ['Machine'], contraindications: [], youtube: 'https://iframe.videodelivery.net/498bb73cd9d6e37342bc01384af1b203', geriatric_priority: true },
                    { name: 'Single Leg Cable Split Squat', movement: ['Squat', 'Lunge'], intent: ['Stability'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d3a29269e982d21fb107f019b510d620' },
                    // --- No video ---
                    { name: 'Machine Leg Press', movement: ['Squat'], intent: ['Hypertrophy', 'Strength'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Hack Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Leg Extension', movement: ['Knee Extension'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Leg Curl (Lying)', movement: ['Knee Flexion'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Double Leg Lying Hamstring Curl', movement: ['Knee Flexion'], intent: ['Hypertrophy', 'Strength'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Leg Curl (Seated)', movement: ['Knee Flexion'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Single Leg Hamstring Curl (Lying)', movement: ['Knee Flexion'], intent: ['Hypertrophy', 'Stability'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Single Leg Hamstring Curl (Seated)', movement: ['Knee Flexion'], intent: ['Hypertrophy', 'Stability'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Hip Abduction', movement: ['Hip'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Hip Adduction', movement: ['Hip'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Calf Raise (Standing)', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Machine Calf Raise (Seated)', movement: ['Plantarflexion'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Smith Machine Squat', movement: ['Squat'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '' },
                    { name: 'Smith Machine Lunge', movement: ['Lunge'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '' },
                    { name: 'Machine Glute Kickback', movement: ['Hip'], intent: ['Hypertrophy'], equipment: ['Machine'], contraindications: [], youtube: '' }
                ]
            },
            corrective: {
                label: "Corrective",
                exercises: [
                    // --- CF Video exercises ---
                    { name: '90/90 Hip Switch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/94ac6965db89eef415dc7c18515fb4bf', geriatric_priority: true },
                    { name: 'Groin Rockbacks', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/edceeaa11a60b649425ab476d1e5b982', geriatric_priority: true },
                    { name: 'Airex Pad Balance', movement: ['Balance'], intent: ['Stability'], equipment: ['Airex Pad'], contraindications: [], youtube: 'https://iframe.videodelivery.net/de1e43e76281cde33d0caabf80ea2f55', geriatric_priority: true },
                    { name: 'Ankle Flossing', movement: ['Mobility'], intent: ['Mobility', 'Recovery'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7ba6161ce2254e9b624a77f446761e4b', geriatric_priority: true },
                    { name: 'Ankle Mobility Circuit', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b85fc87e0c0b20e161d3dde2f195bb0b', geriatric_priority: true },
                    { name: 'Band Walks', movement: ['Hip'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/072732eeeed5daed8d25381a8d282a56', geriatric_priority: true },
                    { name: 'Clam Shells', movement: ['Hip'], intent: ['Stability'], equipment: ['Bodyweight', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dc0ef241f0ad2d47fe2ce75824434bd2', geriatric_priority: true },
                    { name: 'Doorjam Hamstring Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9c526c9159e588b5ec7dcfce64e0eea9', geriatric_priority: true },
                    { name: 'Glute Extensions', movement: ['Hip'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4107075912c71bd75fc5fa46b27e792f', geriatric_priority: true },
                    { name: 'Golf Ball Rollout', movement: ['Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Golf Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0ca9d71865ee2f952642da2865b47532', geriatric_priority: true },
                    { name: 'Hamstring & IT Band Flossing', movement: ['Mobility'], intent: ['Mobility', 'Recovery'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a0ce81e40ecc08dbf1418252f87bfbbe' },
                    { name: 'Heel Walks', movement: ['Dorsiflexion', 'Balance'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bf91936397f95faa5f4d2636dc8b1fec', geriatric_priority: true },
                    { name: 'Heel-to-Toe Walks', movement: ['Balance', 'Mobility'], intent: ['Stability', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/739baaaed997690380335808e65b7703', geriatric_priority: true },
                    { name: 'Heel-Up Pigeon-Toe Walks', movement: ['Mobility', 'Balance'], intent: ['Stability', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4e35825fe6941689e580ce450f1b0627', geriatric_priority: true },
                    { name: 'Hip Flexor Hamstring Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7eac2ff5d7b087239b8b717acd376698', geriatric_priority: true },
                    { name: 'Inversion Ankle Mobility', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3a23825feca35c01fd391ec55fc56323', geriatric_priority: true },
                    { name: 'Monster Walks', movement: ['Hip'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/56d53d054b666771d49e192a6defaa41', geriatric_priority: true },
                    { name: 'On Back Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dcb3739cecd35078f12da3990e91424d', geriatric_priority: true },
                    { name: 'On-Toes Ankle Walk', movement: ['Mobility', 'Balance'], intent: ['Stability', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/181358786f4d5253046e1ccbfab024b8', geriatric_priority: true },
                    { name: 'Quad and Hip Flexor Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/501236bf2bdea94d28c0a25887a9e4dd', geriatric_priority: true },
                    { name: 'Quad Rollout', movement: ['Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1f6822f3fb1fbd73fba6521bd344bcb0', geriatric_priority: true },
                    { name: 'Quad Stretch on Ground', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e89c4cb701b60d44f73d621bd9339405', geriatric_priority: true },
                    { name: 'Seated Band Ankle Mobility', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3f6e78c0ae43078e16ecc5a4106da340', geriatric_priority: true },
                    { name: 'Short Foot Ankle Mobility', movement: ['Foot', 'Mobility'], intent: ['Stability', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/484021749aca42d6935bb3e49ec7bb1d', geriatric_priority: true },
                    { name: 'Shortfoot', movement: ['Foot'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e79d3876461cc3f6e1a9ca7afc70802d' },
                    { name: 'Standing Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fd63fb4b80307643fc23d692b4b655ca', geriatric_priority: true },
                    { name: 'Tibialis Anterior Raises', movement: ['Dorsiflexion'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d19240c7edb39d797f4bfc3892993494', geriatric_priority: true },
                    { name: 'Ankle and Calf Stretches', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fada35c576694458b40c9700e68c0397', geriatric_priority: true }
                ]
            }
        }
    },

    // CORE
    core: {
        label: "Core",
        subcategories: {
            upper: {
                label: "Upper",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Decline Sit Ups', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a6e1ca1ad81696f1b8df9c97c31a7bda' },
                    { name: 'Dragonfly', movement: ['Core', 'Upper Abs'], intent: ['Strength'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4073df1f82f34e9bb964ac0748e5fb1c' },
                    { name: 'Figure 4 Crunch', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cd80995dfdbb366fb939760fc2f5cdfe' },
                    { name: 'Hollow Hold', movement: ['Core', 'Upper Abs'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/facbbceb33b7bb89ac2e877f082f2f0d' },
                    { name: 'Med Ball Slams', movement: ['Core', 'Upper Abs'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3371a5abe506a4ca8176f53ed75f0b5d' },
                    { name: 'One Knee to Chest Crunch', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e18dee45eeab3f3c94b5d72be5ca4dc7' },
                    { name: 'Plank Ab Wheel Rollout', movement: ['Core', 'Upper Abs'], intent: ['Strength'], equipment: ['Ab Wheel'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d340e470ef46bd1b9082f26e24e8e774' },
                    { name: 'PVC Sit Up to Press', movement: ['Core', 'Upper Abs', 'Push'], intent: ['Strength'], equipment: ['PVC'], contraindications: [], youtube: 'https://iframe.videodelivery.net/084621bb3f83c3514038c98bba9d531c' },
                    { name: 'Russian Abs', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9e1a210c2e71b26576d1f1f53bb1d5e9' },
                    { name: 'Stability Ball Crunches', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/43b9602adbe0f038a311ee25ba6669cf', geriatric_priority: true },
                    { name: 'Stability Ball Crunch', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4dc825e94ad491c5edaf444d63db9b63', geriatric_priority: true },
                    { name: 'Stability Ball Plank', movement: ['Core', 'Upper Abs'], intent: ['Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8a06d797374125f05fe8e3f6fc427cc5' },
                    { name: 'Sugar Rays', movement: ['Core', 'Upper Abs', 'Push'], intent: ['Stability', 'Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6fcae85108245503a4e2d5f44eb583ff' },
                    { name: 'Toe Touches', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/333dec4e141b48fe571cf242ea5f7ad3' },
                    // --- No video ---
                    { name: 'Planks', movement: ['Core'], intent: ['Stability', 'Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Bird Dogs', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Bear Crawl', movement: ['Core'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Bear Crawl Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Mountain Climbers', movement: ['Core'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Plank Shoulder Taps', movement: ['Core', 'Anti-Rotation'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Plank March', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Hollow Rocks', movement: ['Core'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Isometric Hollow Hold March', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Crunches', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Sit-Ups', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Cable Crunches (Kneeling)', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Cable'], contraindications: [], youtube: '' },
                    { name: 'Jackknife Sit-Ups', movement: ['Core', 'Upper Abs'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Weighted Crunches', movement: ['Core', 'Upper Abs'], intent: ['Hypertrophy'], equipment: ['Dumbbell', 'Plate'], contraindications: [], youtube: '' },
                    { name: 'Pulse Crunches', movement: ['Core', 'Upper Abs'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Bicycle Crunches', movement: ['Core', 'Upper Abs', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Swiss Ball Pikes', movement: ['Core', 'Upper Abs'], intent: ['Strength'], equipment: ['Swiss Ball'], contraindications: [], youtube: '' },
                    { name: 'Ab Wheel Rollouts', movement: ['Core', 'Upper Abs'], intent: ['Strength'], equipment: ['Ab Wheel'], contraindications: [], youtube: '' },
                    { name: 'Sit-Up to Stand', movement: ['Core', 'Functional Strength'], intent: ['Functional Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Turkish Get-Up Sit-Up', movement: ['Core'], intent: ['Functional Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Barbell Rollouts', movement: ['Core'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: '' },
                    { name: 'Barbell Rollout from Knees', movement: ['Core', 'Anti-Extension'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Rollout from Feet', movement: ['Core', 'Anti-Extension'], intent: ['Max Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Sit-Up', movement: ['Core', 'Flexion'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Ab Pullover', movement: ['Core', 'Anti-Extension'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Overhead Barbell Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Good Morning Hold', movement: ['Core'], intent: ['Isometric Strength'], equipment: ['Barbell'], contraindications: ['No Axial Loading'], youtube: '' },
                    { name: 'Barbell Hip Thrust Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell March (Front Rack)', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: ['No Front Rack'], youtube: '' },
                    { name: 'Barbell Overhead Walkout', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Zercher Carry', movement: ['Carry', 'Core'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Front Rack Carry', movement: ['Carry', 'Core'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Front Rack'], youtube: '' },
                    { name: 'Barbell Overhead Carry', movement: ['Carry', 'Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Turkish Get-Up', movement: ['Core', 'Full Body'], intent: ['Stability', 'Strength'], equipment: ['Kettlebell', 'Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Sit-Up', movement: ['Core', 'Flexion'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Toe Touch Crunch', movement: ['Core', 'Flexion'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Dead Bug Press', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell March', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Overhead March', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Dumbbell Plank Drag', movement: ['Core'], intent: ['Anti-Rotation'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Renegade Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Bear Crawl Drag', movement: ['Core'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Hollow March', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Front Rack Carry', movement: ['Carry', 'Core'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Waiter Carry', movement: ['Carry', 'Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Offset Farmers Walk', movement: ['Carry', 'Core'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Pelvic Tilts', movement: ['Core'], intent: ['Mobility', 'Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Cat-Cow Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'McGill Big 3', movement: ['Core'], intent: ['Stability', 'Rehabilitation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Diaphragmatic Breathing', movement: ['Core'], intent: ['Recovery', 'Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Supine Breathing with 90/90', movement: ['Core'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Crocodile Breathing', movement: ['Core'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Rock Back', movement: ['Core'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Hover Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Tall Kneeling Breathing', movement: ['Core'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Standing Wall Press Breathing', movement: ['Core'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Isometric Supine Brace', movement: ['Core'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Breathing Assisted Hollow Hold', movement: ['Core'], intent: ['Recovery'], equipment: ['Bodyweight'], contraindications: [], youtube: '' }
                ]
            },
            oblique: {
                label: "Oblique",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Band Side Rotation', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b76acff13c0e2989c54ae46e187702b6' },
                    { name: 'Bar Tic Tocs', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e8a93b49d6c94c38015eb18fc66f7080' },
                    { name: 'Bi Lateral Plank', movement: ['Core', 'Obliques'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/00ace4334dbecf9eaaa3061581dacdcf' },
                    { name: 'Cable Up Chop', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/59e7fa075f1262d603ac7dee0320e700' },
                    { name: 'GHR Russian Twists', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['GHR'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bbeb73b63f0bc6bef4f9f17002b6c58d' },
                    { name: 'Handle Upchop', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6c258c926f6c2597283d7b837580adf8' },
                    { name: 'Lateral Cable Chops', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7f50fd06ed93baffe5626acad12b76e7' },
                    { name: 'Lateral Rope Chop', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a4c5cf64b2573590adb2029ad2df8111' },
                    { name: 'Med Ball Rainbow Slams', movement: ['Core', 'Obliques'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ae7591e6e2e03a1cfe658a2407c0f0fe' },
                    { name: 'Med Ball Russian Twists', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c9dbeaa9ec05dd291305946245bacd6b' },
                    { name: 'Oblique Crunch', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9ba809fdce1c76b1873485b40f99eafa' },
                    { name: 'Side Crunch on Disk', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Balance Disk'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f0fcc8cfcb6dd6116536a8c217dbaa23' },
                    { name: 'Side Disk Crunches', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Balance Disk'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2244a6689ff0a9194701d02a04bdb639' },
                    { name: 'Side Plank', movement: ['Core', 'Obliques'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/96f49efe7a8b2011275ced575cdaf7d7', geriatric_priority: true },
                    { name: 'Side Plank Foot or Knee Elevated', movement: ['Core', 'Obliques'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/625f9fe45912043d45f2bfd91776cb46' },
                    { name: 'Side Plank With Leg Raise', movement: ['Core', 'Obliques'], intent: ['Stability', 'Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2443069b78c58c17ea6dd9f4184cc3fc' },
                    { name: 'Suitcase Carry', movement: ['Carry', 'Core', 'Obliques'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/61ecc60a9b8f55d1e77262e2543c112f', geriatric_priority: true },
                    { name: 'Weighted Tic Tocs', movement: ['Core', 'Obliques'], intent: ['Hypertrophy', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c98a3b1d56b4ae8fa681adb38e9f5668' },
                    { name: 'Kneeling Rope Rotational Chop', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7d6b2ef1e145ea9e357e5907d7a8c953' },
                    // --- No video ---
                    { name: 'Side Plank Reach Through', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Standing Cable Chop (High to Low)', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: '' },
                    { name: 'Standing Cable Lift (Low to High)', movement: ['Core', 'Obliques'], intent: ['Strength'], equipment: ['Cable'], contraindications: [], youtube: '' },
                    { name: 'Wood Choppers', movement: ['Core', 'Obliques'], intent: ['Power'], equipment: ['Cable', 'Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Side Plank Hip Dips', movement: ['Core', 'Obliques'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Tall Kneeling Anti-Rotation Press', movement: ['Core', 'Anti-Rotation'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: '' },
                    { name: 'Landmine Rotations', movement: ['Core', 'Rotation'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Anti-Rotation Hold', movement: ['Core', 'Anti-Rotation'], intent: ['Stability'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Press (Split Stance)', movement: ['Core', 'Anti-Rotation'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Rainbow', movement: ['Core', 'Rotation'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Figure-8', movement: ['Core', 'Rotation'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Lateral Raise to Press', movement: ['Core', 'Lateral Flexion'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Landmine Windmill', movement: ['Core'], intent: ['Mobility', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Russian Twist', movement: ['Core', 'Rotation'], intent: ['Hypertrophy'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Side Bends', movement: ['Core'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Russian Twist', movement: ['Core', 'Rotation'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Windmill', movement: ['Core'], intent: ['Mobility', 'Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Side Plank Row', movement: ['Core'], intent: ['Anti-Rotation'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Pallof Press', movement: ['Core', 'Anti-Rotation'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Standing Chop', movement: ['Core', 'Rotation'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Side Bend Hold', movement: ['Core'], intent: ['Isometric Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Seated Anti-Rotation Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Assisted Side Plank', movement: ['Core'], intent: ['Stability'], equipment: ['Bench'], contraindications: [], youtube: '', geriatric_priority: true }
                ]
            },
            lower: {
                label: "Lower",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Alternating V Ups', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f8bc3a3bd38c49c591649d801e466c8a' },
                    { name: 'Butterfly Crunches', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a23f3587aa4a2f3b739f155fec03b0c5' },
                    { name: 'Dead Bug', movement: ['Core', 'Lower Abs'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7e9a69a081fd03b713f93401d2fd790a', geriatric_priority: true },
                    { name: 'Decline Flutter Kick', movement: ['Core', 'Lower Abs'], intent: ['Endurance'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/75b10a3a5b3cb23dff535aaaa785d40a' },
                    { name: 'Figure 4 Boxing Crunch', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ff4bc320f6aa7d29f1fa4ef8076f2c1e' },
                    { name: 'Flutter Kicks', movement: ['Core', 'Lower Abs'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/18ec64e1423e18faf704b1906e8957de' },
                    { name: 'Heel Slides', movement: ['Core', 'Lower Abs'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/10c76789eba70d6f280fabd082e73571', geriatric_priority: true },
                    { name: 'Leg Lowers Single Leg', movement: ['Core', 'Lower Abs'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/218ce1db3893fdaccb206fe3cf9c6007' },
                    { name: 'Leg Raises With and Without Hands', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0f742ef48dd18b557549822f1d2fc6d5' },
                    { name: 'Reverse Crunch', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/95edfad282857e43dd3fcd0c81abb56b' },
                    { name: 'Scissors Kicks', movement: ['Core', 'Lower Abs'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9eeeba539dc6246549c73eeaa8dcd41a' },
                    { name: 'Sprinter Abs', movement: ['Core', 'Lower Abs'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dcf3a5c6c1fa98db6d608f1ce2bf9ccd' },
                    { name: 'Stability Ball Plank (Lower)', movement: ['Core', 'Lower Abs'], intent: ['Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/022373367fe239a32065b7d9a97437b8' },
                    { name: 'Stability Ball Roll Out', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/23664e7568ca15c1eb6104bb184724bb' },
                    { name: 'Straight Leg Raise in Straps', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Straps'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ddd631c2a9a12ac815cfac738f7c261a' },
                    { name: 'Straps Straight Leg Raise', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Straps'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5863489772af8dc042d2bb02dd5ca83e' },
                    { name: 'V Sit Bicycle Abs', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b1c4f273d09ccfe8e8e187edc5936bd5' },
                    { name: 'V Sit Hold', movement: ['Core', 'Lower Abs'], intent: ['Stability', 'Isometric'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/60fa44b4163a7ec9672694b55ee83b3a' },
                    { name: 'V Ups', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9fac752c41d8d8895dde6c30bb6c88d5' },
                    { name: 'V Ups (Variation)', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6030f48bbbdc30195772d8f490d1aa70' },
                    // --- No video ---
                    { name: 'Hanging Knee Raises', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Hanging Leg Raises', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Toes to Bar', movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Lying Leg Raises', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Lying Alternating Leg Lowers', movement: ['Core', 'Lower Abs'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Decline Reverse Crunch', movement: ['Core', 'Lower Abs'], intent: ['Hypertrophy'], equipment: ['Bench'], contraindications: [], youtube: '' },
                    { name: "Captain's Chair Knee Raise", movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Machine'], contraindications: [], youtube: '' },
                    { name: "Captain's Chair Leg Raise", movement: ['Core', 'Lower Abs'], intent: ['Strength'], equipment: ['Machine'], contraindications: [], youtube: '' },
                    { name: 'Hanging Knee Raise with Twist', movement: ['Core', 'Lower Abs', 'Obliques'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'L-Sit Hold', movement: ['Core', 'Lower Abs'], intent: ['Max Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Lying Hip Thrusts', movement: ['Core', 'Lower Abs'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Landmine Dead Bug Press', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Split Squat Iso Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell V-Sit Hold', movement: ['Core'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Bent Knee Fallout', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Marching Dead Bug', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Wall Dead Bug', movement: ['Core'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Side Lying Breathing', movement: ['Core'], intent: ['Recovery'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Segmental Cat-Cow', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Jefferson Curl (Light)', movement: ['Spinal Flexion'], intent: ['Mobility'], equipment: ['Light Weight'], contraindications: [], youtube: '' },
                    { name: 'Pelvic Clock', movement: ['Core'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Posture Holds', movement: ['Core'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true }
                ]
            }
        }
    },

    // TACTICAL (CrossFit-style complexes)
    tactical: {
        label: "Tactical",
        subcategories: {
            barbell: {
                label: "Barbell Complexes",
                exercises: [
                    { name: 'Clean and Jerk', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Snatch', movement: ['Olympic', 'Full Body'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Thruster', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean Complex (Hang + Power + Front Squat)', movement: ['Olympic', 'Full Body'], intent: ['Strength', 'Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Bear Complex', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Complex (RDL + Row + Hang Clean)', movement: ['Full Body'], intent: ['Strength', 'Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Grace Complex (Clean + Push Jerk)', movement: ['Olympic'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'DT Complex', movement: ['Full Body'], intent: ['Strength', 'Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Cluster (Clean + Thruster)', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Ground to Overhead', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Complex (Deadlift + Hang Clean + Push Press)', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Devil Press', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Squat Clean Thruster', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Front Squat + Push Jerk', movement: ['Full Body'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Overhead Walking Lunge', movement: ['Full Body'], intent: ['Stability'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Power Clean + Front Squat', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Clean Pull + Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Snatch Pull + Power Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Clean + Overhead Squat', movement: ['Olympic'], intent: ['Mobility', 'Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Complex (Row + Clean + Push Press)', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Squat Clean + Split Jerk', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Barbell Complex (Deadlift + Shrug + Clean)', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Ground to Shoulder', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Barbell Complex (Front Squat + Push Press + Back Squat)', movement: ['Full Body'], intent: ['Strength', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' }
                ]
            },
            dumbbell: {
                label: "Dumbbell Complexes",
                exercises: [
                    { name: 'Dumbbell Thruster', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Man Makers', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Snatch', movement: ['Power', 'Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Clean + Push Press', movement: ['Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Squat Clean Thruster', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Hang Clean + Front Squat', movement: ['Full Body'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Lunge + Curl + Press', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Ground to Overhead', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Bear Complex', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Snatch Alternating', movement: ['Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Renegade Clean', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Squat + Press Ladder', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Complex (RDL + Row + Clean)', movement: ['Full Body'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Overhead Walking Lunge', movement: ['Full Body'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Farmer Carry into Thruster', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Power Clean + Push Jerk', movement: ['Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Cluster', movement: ['Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Lunge Matrix', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Step-Up to Press', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Squat Clean + Push Press', movement: ['Full Body'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Ground Flow Complex', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Dumbbell Burpee Clean', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    // --- Kettlebell ---
                    { name: 'Kettlebell Thruster', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7dcbd62bf1aff7c91d662d05914534c0' },
                    { name: 'Single Arm Kettlebell Swing', movement: ['Hinge', 'Power'], intent: ['Power', 'Conditioning'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c796f3cc721a66e07ca3f4b11af06783' },
                    { name: 'Alternating Kettlebell Swings', movement: ['Hinge', 'Power'], intent: ['Power', 'Conditioning'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/65537c0c9626aed18e7f32997c260154' },
                    { name: 'Single Arm Kettlebell Snatch', movement: ['Olympic', 'Power'], intent: ['Power'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1582547d1bd6423b5a66bf5f5e572883' },
                    { name: 'Single Arm Kettlebell Clean', movement: ['Olympic', 'Power'], intent: ['Power'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/20fb38d4ae2d6606140eecda28f1a869' },
                    { name: 'Kettlebell Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/026888a77adef2bac78abef90b81897c' },
                    { name: 'Kettlebell Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/726d2344e2f63206cf7d6966aae9e542' },
                    { name: 'Single Arm Kettlebell Flip', movement: ['Power'], intent: ['Power', 'Coordination'], equipment: ['Kettlebell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a31771ca989b686f1a3343a0e44eae9e' },
                    // --- Barbell ---
                    { name: 'Barbell Thruster', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/4b1499afcb2e46ed853b531ad93277e0' },
                    { name: 'Single Arm Barbell Snatch', movement: ['Olympic', 'Power'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/d310e3554f70e7c9f814d933c2fa3e39' },
                    // --- Burpees ---
                    { name: '8 Count Burpee', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/564d2a366e76ee46af19620499d2411f' },
                    { name: 'Clean and Jerk 8 Count Burpee', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/2bdc7109679ccf376321717c6a42173a' },
                    { name: 'Burpee Clean Jump Over Bar', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/199b11f8e29518ca4bc3dde52f495ef8' },
                    // --- Locomotion ---
                    { name: 'Bear Walk Straight Legs', movement: ['Full Body', 'Locomotion'], intent: ['Conditioning', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f90d94374a9dda5f0eba2e4f63bf4811' },
                    { name: 'Monkey Hops', movement: ['Full Body', 'Locomotion'], intent: ['Conditioning', 'Power'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/02a383b06abac5374ccb12e0f642169f' }
                ]
            },
            functional: {
                label: "Functional Complexes",
                exercises: [
                    { name: 'Burpees', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: '' },
                    { name: 'Burpee Box Jump Overs', movement: ['Full Body'], intent: ['Conditioning', 'Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: '' },
                    { name: 'Wall Balls', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Medicine Ball'], contraindications: [], youtube: '' },
                    { name: 'Kettlebell Swings', movement: ['Hinge', 'Power'], intent: ['Power', 'Conditioning'], equipment: ['Kettlebell'], contraindications: [], youtube: '' },
                    { name: 'Burpee Pull-Ups', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Air Squat + Push-Up + Jump', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: '' },
                    { name: 'Shuttle Sprint + Push-Ups', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Sandbag Clean', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Sandbag'], contraindications: [], youtube: '' },
                    { name: 'Sandbag Clean and Carry', movement: ['Full Body'], intent: ['Work Capacity'], equipment: ['Sandbag'], contraindications: [], youtube: '' },
                    { name: 'Bear Crawl + Sprint', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Wall Ball + Burpee', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Medicine Ball'], contraindications: [], youtube: '' },
                    { name: 'Box Jump + Step Down', movement: ['Power'], intent: ['Power'], equipment: ['Bodyweight'], contraindications: ['Reduced Impact'], youtube: '' },
                    { name: 'Farmer Carry + Box Step-Up', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '' },
                    { name: 'Sled Push', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Sled'], contraindications: [], youtube: '' },
                    { name: 'Sled Push + Sprint', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Sled'], contraindications: [], youtube: '' },
                    { name: 'Battle Rope Slams', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Rope'], contraindications: [], youtube: '' },
                    { name: 'Battle Rope + Squat Combo', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Rope'], contraindications: [], youtube: '' },
                    { name: 'Medicine Ball Clean', movement: ['Full Body'], intent: ['Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: '' },
                    { name: 'Medicine Ball Slam + Sprint', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Medicine Ball'], contraindications: [], youtube: '' },
                    { name: 'Ground-to-Shoulder Sandbag', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Sandbag'], contraindications: [], youtube: '' },
                    { name: 'Tire Flip', movement: ['Full Body'], intent: ['Power'], equipment: ['Tire'], contraindications: [], youtube: '' },
                    { name: 'Tire Flip + Jump In', movement: ['Full Body'], intent: ['Conditioning'], equipment: ['Tire'], contraindications: [], youtube: '' },
                    { name: 'Stair Sprint Intervals', movement: ['Locomotion'], intent: ['Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: '' },
                    { name: 'Farmer Carry Medley', movement: ['Carry'], intent: ['Work Capacity'], equipment: ['Implements'], contraindications: [], youtube: '' }
                ]
            },
            corrective: {
                label: "Technique Work",
                exercises: [
                    { name: 'Hip Flexor to Hamstring', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/588cd9d5cd58db8ea61ec9e9a61708b8' },
                    { name: 'Snatch Triple Extension Pause to Catch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/edf3cdb8942a61379600f67bc468a38c' },
                    { name: 'Clean Triple Extension Pause to Catch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/81b579606be7be406686e22c2861822d' },
                    { name: 'Full Snatch Catch Pause', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/effd2087e91b6fda29b7acf23cb932d0' },
                    { name: 'Snatch Balance', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/917cdb2a9b1dcc0a36b45ddc1cb0b9b1' },
                    { name: 'Clean Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3ce03748c34559bab6acc11fdb31f7b2' },
                    { name: 'Snatch Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4ee5bd14a736e3410350494a7bf17d0c' },
                    { name: 'Pause Below Knee Hang Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b3a9d76f37acbbfd705f42277147bf52' },
                    { name: 'Pause Below Knee Hang Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/c8a55fb918de378a38972ff61578c93c' },
                    { name: 'Hang Clean Dip Drive', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b0135596b56338158a9bd14420a39a11' },
                    { name: 'Hang Dip Drive Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/ad2786d6265b32ca5da4d92442b5c0ba' },
                    { name: 'Clean Grip Block Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/f16b3c3a81bd45b3d743c11fec5d9809' },
                    { name: 'Barbell Muscle Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6dae6a3e7177c32e4fa903d2b3266d74' },
                    { name: 'PVC Muscle Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: [], youtube: 'https://iframe.videodelivery.net/53ad9624b4473a3f0d3043765488d402' },
                    { name: 'PVC Muscle Clean Teaching', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cf1908ed91b59d8418bfc7e4aff5e8f3' },
                    { name: 'PVC Muscle Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/823f65bf9bb33bb266cebbc806421fa0' },
                    { name: 'Muscle Snatch Teaching PVC', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/ea8b04ee007c3078b5169c8436986137' },
                    { name: 'PVC Overhead Squat Teaching', movement: ['Olympic'], intent: ['Technique', 'Mobility'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e2ba33c17ba6514b08921aa675617674' },
                    { name: 'Barbell Overhead Squat (Heels Elevated)', movement: ['Olympic'], intent: ['Technique', 'Mobility'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/2080100028c90b578d4457df2479d8aa' },
                    { name: 'Snatch Grip Barbell Shrugs', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/523628dbb34ad9525f7c816e514e22b9' },
                    { name: 'Overhead Reverse Snatch Shrugs', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e139e2705bcf5e6caabd7c346c2e2b4c' }
                ]
            }
        }
    },

    // OLY COMPLEXES
    oly_complexes: {
        label: "Oly Complexes",
        subcategories: {
            barbell: {
                label: "Olympic Lifts",
                exercises: [
                    { name: 'Power Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fd18a5c14868f872bc5a9dd4afd1e986' },
                    { name: 'Power Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/24532f09aa140d2cae76a23005a7b95c' },
                    { name: 'Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/65592773cf4889527cad39bf4743ce97' },
                    { name: 'Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/3f02ccf9ddbd029566639cff86dc2154' },
                    { name: 'Clean Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1d385316464882f2c39a2a3dd97f3e09' },
                    { name: 'Snatch Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0a38da737bf9947cc4afa34ab0c2db3f' },
                    { name: 'Full Clean', movement: ['Olympic'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/50fbe85ac065560bfc5203086ec2177e' },
                    { name: 'Full Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/cfb6e19659f0f1b5d20861f6cceee284' },
                    { name: 'Hang Squat Clean', movement: ['Olympic'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a3474a1a868aba6cdc3fa504656db05f' },
                    { name: 'Hang Full Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/7831b4227fea936a7fc2785516179a0a' },
                    { name: 'Full Clean to Push Jerk', movement: ['Olympic'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/b75892acbf27698717a5735d3e9e5bd1' },
                    { name: 'Block Full Clean', movement: ['Olympic'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3a7724f8b6302d3a436013ca78445d02' },
                    { name: 'Block Full-Squat Clean', movement: ['Olympic'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/45a3bb0f04d43b054b2ecb1bd98f93a0' },
                    { name: 'Block Power Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/61a3d8073a50037bd4265593ed2bdc46' },
                    { name: 'Block Power Clean to Jerk', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/c8f980cc47e82f158665c236ee2cd39f' },
                    { name: 'Block Power Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/4640b11eaa598848dcb9d23dc65421e4' },
                    { name: 'Snatch Balance', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/85cdaa513f2d8f6629d12ba7618dd6ec' },
                    { name: 'Pause Clean (Below Knee)', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a4ed2c0ea2b984144686b6c8d4f43a94' },
                    { name: 'Pause Snatch (Below Knee)', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/dffb0a0ea6111754c75c96af3aa563af' }
                ]
            },
            dumbbell: {
                label: "Dumbbell Variations",
                exercises: [
                    { name: 'Dumbbell Thruster', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/42c7669e324befa2121d0b4b7ca9fce4' },
                    { name: 'Dumbbell Devil Press', movement: ['Full Body'], intent: ['Power', 'Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f7b434ada7425c18742cde4d8dc6d5c8' },
                    { name: 'DB Single Arm Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5532da24b7a8b17d206910aa3ba02372' },
                    { name: 'DB Single Arm Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cdd9ddbdfb9b62f9aeedbe6bb04d6e71' },
                    { name: 'DB Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/03b0306453eb5ce2ba0813acd07112c7' },
                    { name: 'DB Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f79505c9d98fca4ee833893a8d0fc493' },
                    { name: 'DB Alternating Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/29f17e2771d5ae974dcff6425e5ea5fa' },
                    { name: 'Neutral Grip DB Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0ca10b534ed62cc1b68824948371882c' },
                    { name: 'Neutral Grip Alternating Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1663a7350096b9007ed25fa4f4053713' },
                    { name: 'Seated DB Clean', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8c8c0596d200ac6a03866882dec2b91b' },
                    { name: 'Seated DB Snatch', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f5febb7f29c17bfd6efd469dfeeaeee5' },
                    { name: 'Seated DB Shrugs', movement: ['Olympic'], intent: ['Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b80700c47798ef629232cfb2f307de55' },
                    { name: 'Seated DB Shrug + Clean', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Dumbbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c98d0f7a53b9633ed852bcec26e21538' }
                ]
            },
            functional: {
                label: "Complexes",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Pull + RDL + Hang Clean + Front Squat + Push Press', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/6ae5c5f0bd99c196e84c5d6e55def666' },
                    { name: 'Pull + RDL + Hang Clean + Front Squat + Thruster', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/afebb5ef41ba38bc7efc5e68edf8cda3' },
                    // --- CF Video exercises (new uploads) ---
                    { name: 'Pull + RDL + Hang Clean + Front Squat', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c6839e2575fc191f6756f9b1d22c6443' },
                    { name: 'Pull + RDL + Hang Clean + Front Squat (Singles)', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f36ac18290eb2d73daf559db2ab9224a' },
                    { name: 'Snatch Pull + RDL + Hang Snatch + Squat + Overhead Squat (Singles)', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength', 'Mobility'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/5d650aabc3ab7c0e7d3d4677b580d762' },
                    { name: 'Snatch Pull + RDL + Hang Snatch + Squat + Overhead Squat', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength', 'Mobility'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/68f99024b34743732ea0d20d717449c9' },
                    { name: 'Pull + Hang Clean + Push Jerk', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/4f70697b38c5e855a9c0b75e5c30585b' },
                    // --- No video ---
                    { name: 'Pull + RDL + Hang Snatch + Back Squat to Press + Overhead Squat', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength', 'Mobility'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Pull + Hang Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Pull + Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean + Front Squat + Jerk', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Snatch + OHS', movement: ['Olympic', 'Full Body'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/8b4e2e7f596ac8d3233d9c9fd7d4bc28' },
                    { name: 'Clean High Pull + Power Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Clean + Front Squat + Clean', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch + OHS + Snatch', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean Pull + Hang Clean + Jerk', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Snatch Pull + Hang Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean + Pause Front Squat', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch + Pause OHS', movement: ['Olympic'], intent: ['Mobility', 'Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean from Blocks + Front Squat', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch from Blocks + OHS', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Hang Clean + Clean', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dab9848d73a68319d9ca7630b489567c' },
                    { name: 'Hang Snatch + Snatch', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/6888dbd0ee951fce85f7eacebe312866' },
                    { name: 'Clean + Jerk + Split Squat', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Snatch + Snatch Balance', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean Pull + Power Clean + Front Squat', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch Pull + Power Snatch + OHS', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean + Pause Catch + Front Squat', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch + Pause Catch + OHS', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Clean + Clean Pull', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: [], youtube: '' },
                    { name: 'Snatch + Snatch Pull', movement: ['Olympic'], intent: ['Strength'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Hang Clean + Front Squat + Jerk', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' },
                    { name: 'Hang Snatch + OHS', movement: ['Olympic'], intent: ['Power'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: '' }
                ]
            },
            corrective: {
                label: "Technique Work",
                exercises: [
                    { name: 'Hip Flexor to Hamstring', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/588cd9d5cd58db8ea61ec9e9a61708b8' },
                    { name: 'Snatch Triple Extension Pause to Catch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/edf3cdb8942a61379600f67bc468a38c' },
                    { name: 'Clean Triple Extension Pause to Catch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/81b579606be7be406686e22c2861822d' },
                    { name: 'Full Snatch Catch Pause', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/effd2087e91b6fda29b7acf23cb932d0' },
                    { name: 'Snatch Balance', movement: ['Olympic'], intent: ['Power', 'Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/917cdb2a9b1dcc0a36b45ddc1cb0b9b1' },
                    { name: 'Clean Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3ce03748c34559bab6acc11fdb31f7b2' },
                    { name: 'Snatch Pull', movement: ['Olympic', 'Pull'], intent: ['Power', 'Strength'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4ee5bd14a736e3410350494a7bf17d0c' },
                    { name: 'Pause Below Knee Hang Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b3a9d76f37acbbfd705f42277147bf52' },
                    { name: 'Pause Below Knee Hang Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/c8a55fb918de378a38972ff61578c93c' },
                    { name: 'Hang Clean Dip Drive', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b0135596b56338158a9bd14420a39a11' },
                    { name: 'Hang Dip Drive Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/ad2786d6265b32ca5da4d92442b5c0ba' },
                    { name: 'Clean Grip Block Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/f16b3c3a81bd45b3d743c11fec5d9809' },
                    { name: 'Barbell Muscle Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6dae6a3e7177c32e4fa903d2b3266d74' },
                    { name: 'PVC Muscle Clean', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: [], youtube: 'https://iframe.videodelivery.net/53ad9624b4473a3f0d3043765488d402' },
                    { name: 'PVC Muscle Clean Teaching', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cf1908ed91b59d8418bfc7e4aff5e8f3' },
                    { name: 'PVC Muscle Snatch', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/823f65bf9bb33bb266cebbc806421fa0' },
                    { name: 'Muscle Snatch Teaching PVC', movement: ['Olympic'], intent: ['Technique'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/ea8b04ee007c3078b5169c8436986137' },
                    { name: 'PVC Overhead Squat Teaching', movement: ['Olympic'], intent: ['Technique', 'Mobility'], equipment: ['PVC Pipe'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e2ba33c17ba6514b08921aa675617674' },
                    { name: 'Barbell Overhead Squat (Heels Elevated)', movement: ['Olympic'], intent: ['Technique', 'Mobility'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/2080100028c90b578d4457df2479d8aa' },
                    { name: 'Snatch Grip Barbell Shrugs', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: [], youtube: 'https://iframe.videodelivery.net/523628dbb34ad9525f7c816e514e22b9' },
                    { name: 'Overhead Reverse Snatch Shrugs', movement: ['Olympic'], intent: ['Technique'], equipment: ['Barbell'], contraindications: ['No Overhead Loading'], youtube: 'https://iframe.videodelivery.net/e139e2705bcf5e6caabd7c346c2e2b4c' }
                ]
            }
        }
    },

    // SENIOR FITNESS & BALANCE
    senior_fitness: {
        label: "Senior Fitness & Balance",
        subcategories: {
            balance: {
                label: "Balance & Stability",
                exercises: [
                    { name: 'Single-Leg Balance (Eyes Open)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Single-Leg Balance (Eyes Closed)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Tandem Stance Hold', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'BOSU Ball Balance (Both Feet)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['BOSU Ball'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'BOSU Ball Single-Leg Balance', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['BOSU Ball'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Airex Pad Balance (Both Feet)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Airex Pad'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Airex Pad Single-Leg Balance', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Airex Pad'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Balance Disk Squats', movement: ['Squat', 'Brace'], intent: ['Stability', 'Corrective'], equipment: ['Balance Disk'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Balance Disk Single-Leg Stand', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Balance Disk'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Heel-to-Toe Walk (Straight Line)', movement: ['Gait'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Single-Leg Reach (Clock Taps)', movement: ['Brace', 'Hinge'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Weight Shift (Anteriorâ€“Posterior)', movement: ['Gait'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Weight Shift (Lateral)', movement: ['Gait'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Marching in Place (Support as Needed)', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Marching with Arm Swing', movement: ['Gait'], intent: ['Coordination'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Toe Taps (Low Step)', movement: ['Gait'], intent: ['Stability'], equipment: ['Step'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Lateral Step-Outs', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Backward Walking (Assisted)', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Figure-8 Walk', movement: ['Gait'], intent: ['Coordination'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Obstacle Step-Over (Low)', movement: ['Gait'], intent: ['Stability'], equipment: ['Cone'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Head Turns During Walk', movement: ['Gait'], intent: ['Balance'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Single-Leg Balance with Reach', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Tandem Walk (Heel-to-Toe)', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Clock Reach (Standing)', movement: ['Brace'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Perturbation Holds (Light Manual)', movement: ['Brace'], intent: ['Reactive Stability'], equipment: ['Partner'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Balance with Ball Toss (Light)', movement: ['Brace'], intent: ['Coordination'], equipment: ['Light Ball'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Eyes-Tracking Balance Drill', movement: ['Brace'], intent: ['Neurological'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Staggered Stance Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Reactive Step Catch', movement: ['Gait'], intent: ['Fall Prevention'], equipment: ['Partner'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Heel Raise Balance Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Toe Raise Balance Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true }

                ]
            },
            dumbbell: {
                label: "Dumbbell Exercises (Functional)",
                exercises: [
                    { name: 'Dumbbell Goblet Squat', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Chest Press (Stability Ball)', movement: ['Push'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell', 'Stability Ball'], contraindications: ['Upper Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Row (Supported)', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Shoulder Press (Seated)', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Lateral Raise (Standing)', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Bicep Curl (Alternating)', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Overhead Tricep Extension', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Farmer Carry', movement: ['Carry', 'Gait'], intent: ['Stability', 'Conditioning'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Suitcase Carry', movement: ['Carry', 'Gait', 'Brace'], intent: ['Stability', 'Corrective'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Sit-to-Stand', movement: ['Squat'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Step-Back Lunge (Shallow)', movement: ['Squat'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Front Raise (Light)', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Reverse Fly (Supported)', movement: ['Pull'], intent: ['Posture'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Hammer Curl (Seated)', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Chest Fly (Floor)', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Overhead Hold (Seated)', movement: ['Brace'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Goblet Carry', movement: ['Carry'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Offset Carry', movement: ['Carry'], intent: ['Corrective'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Front Hold (Anti-Flexion)', movement: ['Brace'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Lateral Step Carry', movement: ['Carry', 'Gait'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Romanian Deadlift (Light)', movement: ['Hinge'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Curl-to-Press (Seated)', movement: ['Push'], intent: ['Coordination'], equipment: ['Dumbbell'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Floor Press (Neutral Grip)', movement: ['Push'], intent: ['Strength'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Front Rack Hold', movement: ['Brace'], intent: ['Posture'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Supported Split Squat', movement: ['Squat'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell March Carry', movement: ['Carry', 'Gait'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Anti-Rotation Hold', movement: ['Brace'], intent: ['Corrective'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Assisted Step-Up', movement: ['Squat'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Dumbbell Reach-and-Return', movement: ['Brace'], intent: ['Stability'], equipment: ['Dumbbell'], contraindications: [], youtube: '', geriatric_priority: true }
                ]
            },
            functional: {
                label: "Functional Lower Body",
                exercises: [
                    { name: 'Step-Ups (Low Box)', movement: ['Squat', 'Gait'], intent: ['Stability', 'Hypertrophy'], equipment: ['Bodyweight'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Step-Ups (Dumbbell)', movement: ['Squat', 'Gait'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Reverse Lunge (Bodyweight)', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Bodyweight'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Reverse Lunge (Dumbbell)', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Split Squat (Stationary)', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Bodyweight'], contraindications: ['Lower Body Load Limited', 'Single-Limb Focus'], youtube: '', geriatric_priority: true },
                    { name: 'Single-Leg Romanian Deadlift (Light DB)', movement: ['Hinge', 'Brace'], intent: ['Stability', 'Hypertrophy'], equipment: ['Dumbbell'], contraindications: ['Single-Limb Focus'], youtube: '', geriatric_priority: true },
                    { name: 'Chair Sit-to-Stand', movement: ['Squat'], intent: ['Corrective', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Wall Sit', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Bodyweight'], contraindications: ['Lower Body Load Limited'], youtube: 'https://youtu.be/e34F2HX6f_8', geriatric_priority: true },
                    { name: 'Calf Raises (Bodyweight)', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://youtu.be/tORIVqzYkpE', geriatric_priority: true },
                    { name: 'Glute Bridge (Bodyweight)', movement: ['Hinge'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Glute Bridge (Single-Leg)', movement: ['Hinge', 'Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: ['Single-Limb Focus'], youtube: '', geriatric_priority: true },
                    { name: 'Stability Ball Wall Squat', movement: ['Squat'], intent: ['Stability', 'Hypertrophy'], equipment: ['Stability Ball'], contraindications: ['Lower Body Load Limited'], youtube: '', geriatric_priority: true },
                    { name: 'Stability Ball Hamstring Curl', movement: ['Hinge'], intent: ['Stability', 'Hypertrophy'], equipment: ['Stability Ball'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Box Squat (High Box)', movement: ['Squat'], intent: ['Strength'], equipment: ['Box'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Supported Sit-to-Stand (Tempo)', movement: ['Squat'], intent: ['Corrective'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Lateral Step-Up', movement: ['Gait'], intent: ['Stability'], equipment: ['Step'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Forward Step-Down (Low)', movement: ['Gait'], intent: ['Control'], equipment: ['Step'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Assisted Single-Leg Sit-to-Stand', movement: ['Squat'], intent: ['Stability'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Hip Hinge to Wall', movement: ['Hinge'], intent: ['Corrective'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Mini Squat Pulses', movement: ['Squat'], intent: ['Endurance'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Hip Abduction', movement: ['Gait'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Hip Extension', movement: ['Gait'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Knee Flexion', movement: ['Gait'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Supported Heel Raises (Single-Leg)', movement: ['Push'], intent: ['Strength'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Toe Walking (Short Distance)', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Heel Walking (Short Distance)', movement: ['Gait'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Marching Step-Ups', movement: ['Gait'], intent: ['Coordination'], equipment: ['Step'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Assisted Lateral Lunge (Shallow)', movement: ['Squat'], intent: ['Mobility'], equipment: ['Support'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Glute Kickbacks', movement: ['Hinge'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Partial Range Split Squat', movement: ['Squat'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Slow Tempo Wall Sit', movement: ['Squat'], intent: ['Endurance'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Marching', movement: ['Gait'], intent: ['Activation'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Assisted Hip Hinge with Dowel', movement: ['Hinge'], intent: ['Corrective'], equipment: ['Dowel'], contraindications: [], youtube: '', geriatric_priority: true }
                ]
            },
            bands: {
                label: "Resistance Band Exercises",
                exercises: [
                    { name: 'Band Lateral Walk', movement: ['Gait'], intent: ['Corrective', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: 'https://youtu.be/YQO6j45Nb4Q', geriatric_priority: true },
                    { name: 'Band Monster Walk', movement: ['Gait'], intent: ['Corrective', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: 'https://youtu.be/uEqGltKAyYk', geriatric_priority: true },
                    { name: 'Band Clamshells', movement: ['Brace'], intent: ['Corrective', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Pull-Apart', movement: ['Pull'], intent: ['Corrective', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Chest Press', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Row', movement: ['Pull'], intent: ['Hypertrophy', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Bicep Curl', movement: ['Pull'], intent: ['Hypertrophy'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Overhead Press', movement: ['Push'], intent: ['Hypertrophy', 'Stability'], equipment: ['Bands'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Band Pallof Press (Anti-Rotation)', movement: ['Brace', 'Rotate'], intent: ['Stability', 'Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Seated Row', movement: ['Pull'], intent: ['Hypertrophy', 'Posture'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Standing Row (Split Stance)', movement: ['Pull', 'Brace'], intent: ['Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Face Pull (Light)', movement: ['Pull'], intent: ['Posture', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Reverse Fly', movement: ['Pull'], intent: ['Posture'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Assisted Squat', movement: ['Squat'], intent: ['Corrective', 'Strength'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Hip Abduction (Standing)', movement: ['Gait'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Hip Extension (Standing)', movement: ['Gait'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Hamstring Curl (Standing)', movement: ['Hinge'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Marching', movement: ['Gait'], intent: ['Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Lateral Step-Out', movement: ['Gait'], intent: ['Corrective', 'Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Sit-to-Stand Assist', movement: ['Squat'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Standing Chest Fly (Low Anchor)', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Tricep Pressdown', movement: ['Push'], intent: ['Hypertrophy'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Anti-Flexion Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Anti-Lateral Flexion Hold', movement: ['Brace'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Assisted Pallof Walkout', movement: ['Brace', 'Rotate'], intent: ['Stability'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Standing Overhead Reach (Light)', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bands'], contraindications: ['No Overhead Loading'], youtube: '', geriatric_priority: true },
                    { name: 'Band Diagonal Lift (PNF Pattern)', movement: ['Rotate'], intent: ['Coordination'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Diagonal Chop (PNF Pattern)', movement: ['Rotate'], intent: ['Coordination'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Band Shoulder External Rotation (Elbow Supported)', movement: ['Stability'], intent: ['Corrective'], equipment: ['Bands'], contraindications: [], youtube: '', geriatric_priority: true }
  
                ]
            },
            corrective: {
                label: "Core & Posture",
                exercises: [
                    { name: 'Dead Bug (Modified)', movement: ['Brace'], intent: ['Corrective', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Bird Dog', movement: ['Brace'], intent: ['Corrective', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Plank (Modified on Knees)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Side Plank (Modified on Knees)', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Stability Ball Plank', movement: ['Brace'], intent: ['Stability'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://youtu.be/5XZBSP4JFXg', geriatric_priority: true },
                    { name: 'Stability Ball Dead Bug', movement: ['Brace'], intent: ['Stability', 'Corrective'], equipment: ['Stability Ball'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Cat-Cow (Quadruped)', movement: ['Mobility'], intent: ['Mobility', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Thoracic Rotation', movement: ['Rotate', 'Mobility'], intent: ['Mobility', 'Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Supine Marching', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Heel Slides (Supine)', movement: ['Brace'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Bent-Knee Fallout', movement: ['Brace'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Pelvic Tilts', movement: ['Brace'], intent: ['Mobility'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Marching (Upright Posture)', movement: ['Brace'], intent: ['Activation'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Anti-Rotation Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Band'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Wall Brace', movement: ['Brace'], intent: ['Posture'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Wall Supported Dead Bug', movement: ['Brace'], intent: ['Corrective'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Weight Shifts', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Arm Lifts', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Quadruped Leg Lifts', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Tall Kneeling Brace Hold', movement: ['Brace'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: ['Knee Sensitivity'], youtube: '', geriatric_priority: true },
                    { name: 'Tall Kneeling Arm Raises', movement: ['Brace'], intent: ['Posture'], equipment: ['Bodyweight'], contraindications: ['Knee Sensitivity'], youtube: '', geriatric_priority: true },
                    { name: 'Standing Diaphragmatic Breathing', movement: ['Brace'], intent: ['Recovery'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Crocodile Breathing (Modified)', movement: ['Brace'], intent: ['Recovery'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Thoracic Extension (Chair Back)', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Chair'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Wall Angels (Partial Range)', movement: ['Mobility'], intent: ['Posture'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Rib Expansion Breathing', movement: ['Brace'], intent: ['Recovery'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Seated Chin Tucks', movement: ['Posture'], intent: ['Corrective'], equipment: ['Bodyweight'], contraindications: [], youtube: '', geriatric_priority: true },
                    { name: 'Standing Postural Reset (Wall)', movement: ['Posture'], intent: ['Corrective'], equipment: ['Wall'], contraindications: [], youtube: '', geriatric_priority: true }
                ]
            }
        }
    },

    // WARM UP
    warm_up: {
        label: "Warm Up",
        subcategories: {
            general: {
                label: "General Warm Up",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Backward Scoop Toss', movement: ['Full Body', 'Power'], intent: ['Power', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ff33a23abf9fcd8313b4e0103ac74c81' },
                    { name: 'Forward Scoop Toss', movement: ['Full Body', 'Power'], intent: ['Power', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/18ee964f01c81d2cf2b9a64b9fd090a0' },
                    { name: 'Kneeling Side Toss', movement: ['Rotation', 'Power'], intent: ['Power', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/253d2698be4a9045ad8f148b1f805622' },
                    { name: 'Med Ball 3 Way RDL', movement: ['Hinge'], intent: ['Activation', 'Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8a138c490e7c169fc4f93a6bc6fd20fe' },
                    { name: 'Med Ball Around the Worlds', movement: ['Full Body', 'Rotation'], intent: ['Activation', 'Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/69ba3b058a020fe0aee256e193c2ca5b' },
                    { name: 'Med Ball Good Morning', movement: ['Hinge'], intent: ['Activation', 'Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/624136d51f06a0fbdebfcfcab60dc039' },
                    { name: 'Med Ball Lateral Lunge', movement: ['Lunge'], intent: ['Activation', 'Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f855bf6d3cbec8649e364f58baba0b69' },
                    { name: 'Med Ball Preset Original', movement: ['Full Body'], intent: ['Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/285d5b2a186801b4c0b6be04dd2b3a34' },
                    { name: 'Med Ball Side Throw', movement: ['Rotation', 'Power'], intent: ['Power', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4799b2c55670053e63fd2566fae4ecdf' },
                    { name: 'Med Ball Side Throws', movement: ['Rotation', 'Power'], intent: ['Power', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6ad69c8b6540ef4aa2cc6b85f58623a7' },
                    { name: 'Med Ball Squat', movement: ['Squat'], intent: ['Activation', 'Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/92175d1903a979f18e7a1e57a77934d5' },
                    { name: 'Med Ball Windshield Wipers', movement: ['Rotation'], intent: ['Mobility', 'Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/05c27aad82a29faa4aae54eb494b7cc5' },
                    { name: 'Med Ball Wood Chop', movement: ['Rotation', 'Power'], intent: ['Activation', 'Power'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/91da3272b0075556cd55b788b8c63a45' },
                    { name: 'T Spine Rotations', movement: ['Rotation', 'Mobility'], intent: ['Mobility'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b232bc271ce08251cd406e6f2142fd30' },
                    // --- No video ---
                ]
            },
            mobility: {
                label: "Mobility",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Shoulder Stretch on Bench', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0bdad4b4afbc39e1371a819ff631ca1e' },
                    // --- No video ---
                ]
            },
            upper_body_mobility: {
                label: "Upper Body Mobility",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Arm Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/86ff973980168bfdbf5726ed9beaee19', geriatric_priority: true },
                    { name: 'Arm Across Chest Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9a84ab708858b1ae7abf479880fe34c6' },
                    { name: 'Arms Straight Shoulder/Chest Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/287f290bb886c0c5c0920ac0c6bb1461' },
                    { name: 'Band Shoulder Dislocates', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/210d4937269e8c06ff0816e553f73ef8' },
                    { name: 'Band Up and Overs', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/96d9bddba5fb0aebc8f7929b8c5693c6' },
                    { name: 'Bird Dogs', movement: ['Core', 'Stability'], intent: ['Activation', 'Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2971f93f7512557bbdf47691b5088279', geriatric_priority: true },
                    { name: 'Blackbirds', movement: ['Shoulder'], intent: ['Activation', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6619689a27e2e2223ecace831e92ab88' },
                    { name: 'Broom Handle RDL Posture', movement: ['Posterior Chain'], intent: ['Mobility', 'Activation'], equipment: ['Stick/Dowel'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a8179ec8aa877ebc575b600736cb1251' },
                    { name: 'Broom Handle Rotations', movement: ['Shoulder'], intent: ['Mobility'], equipment: ['Stick/Dowel'], contraindications: [], youtube: 'https://iframe.videodelivery.net/953c2174d0c55d9691e639b86c5fcafd' },
                    { name: 'Cat Cow', movement: ['Spine', 'Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b2007113903d3b11cc57d761bc1f64ac', geriatric_priority: true },
                    { name: 'Flag Stretch', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ccce6926511b2fe62f03125e903552a' },
                    { name: 'Hang from Bar', movement: ['Shoulder', 'Mobility'], intent: ['Mobility', 'Recovery'], equipment: ['Pull-Up Bar'], contraindications: ['Shoulder'], youtube: 'https://iframe.videodelivery.net/7199e87827ca43bb7a320e48b938ce33' },
                    { name: 'Inchworm', movement: ['Full Body', 'Mobility'], intent: ['Mobility', 'Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c59d2a0bd160f2f78e08ac1c1ade8580', geriatric_priority: true },
                    { name: 'Lacrosse Ball Rollout Rhomboids', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bd74569b0df24b5e96ac4209e95250ae' },
                    { name: 'Pec Rollout', movement: ['Recovery'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ee3ed6944443d16cbf78f90dc15ac0e' },
                    { name: 'Quadruped Wrist Mobility', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cda5662b2a490f8a4fc46247f8707741' },
                    { name: 'Stability Ball Internal External Shoulder Stretch', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9b2d8c2bb6c6f66ee4deb04b1aeb105f' },
                    { name: 'Stability Ball Kneeling Shoulder Stretch', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/09e723723e172ff56fb0946ec2c6cdce' },
                    { name: 'Stability Ball Shoulder Dislocates', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6e564111fd16c2e7e24df293bbf6c380' },
                    { name: 'Stick Up Overs', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Stick/Dowel'], contraindications: [], youtube: 'https://iframe.videodelivery.net/0afa3d917ecf548f505c19fe9ece02c9' },
                    { name: 'T Spine Back-Bend on Roller', movement: ['Spine', 'Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/cf85c4003baa1b34086c63a6c6ef980b' },
                    { name: 'T Spine Rotation with Roller', movement: ['Spine', 'Mobility'], intent: ['Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/53c0550d70d7535d5c8d325ed812c71d' },
                    { name: 'T Spine Stretch on Wall', movement: ['Spine', 'Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/90c2d9c17b72ae938f418a88c8411c5f' },
                    { name: 'Trunk Twists Bodyweight', movement: ['Spine', 'Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c429b26bcce023e1718a4030123e8acc', geriatric_priority: true },
                    { name: 'Up and Overs with Stick', movement: ['Shoulder', 'Mobility'], intent: ['Mobility'], equipment: ['Stick/Dowel'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f296f96aabd4e327857f29301ae1d67d' },
                    { name: 'Wrist Rockers', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2f7d94ff6c82579e5d65cd85718bba56' },
                    { name: 'Wrist Rolls', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a5453afd7869a3dcba5beba0f113bf63' },
                    { name: 'YTWA on Stability Ball', movement: ['Shoulder', 'Activation'], intent: ['Activation', 'Mobility'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/71a54198e31a31edd516c4b5a99774d2' },
                    // --- No video ---
                ]
            },
            lower_body_mobility: {
                label: "Lower Body Mobility",
                exercises: [
                    // --- CF Video exercises ---
                    { name: '90/90 Hip Switch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dad63aa297acbb88c9918e299ba1d87f', geriatric_priority: true },
                    { name: 'Ankle Inversion Walks', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/eb9b976c7fdd269f80ea3a37600518b5' },
                    { name: 'Ankle Mobility Seated and Standing', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/355d453639aa4f5c317ca84430f3f441' },
                    { name: 'Band Ankle CARs & Dorsiflexion', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/268f73eee2074731049920d0c692cd3d' },
                    { name: 'Band Hamstring Groin IT Band Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/384082d1b81188e4a4ca2f6b774a5688' },
                    { name: 'Band Walk Forward and Lateral', movement: ['Hip'], intent: ['Activation', 'Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/01d09bb17aeedb3f5317b1f253c3ed08' },
                    { name: 'Bench Assisted Pigeon Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bench'], contraindications: [], youtube: 'https://iframe.videodelivery.net/faadb1ccb6d786ceae76ff5fd1d2dfe5' },
                    { name: 'Bosu Balance Both Feet Ankle Mobility', movement: ['Balance', 'Mobility'], intent: ['Stability', 'Mobility'], equipment: ['BOSU Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3b8cece2afbd5d0dc89f797fc5259820' },
                    { name: 'Calf Rollout', movement: ['Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/22916e948cbc24572aa983cc28639f15' },
                    { name: 'Calf Stretches', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/964c92c33177508cd4c309a87428ec1d' },
                    { name: 'Clam Shell Leg Slides on Wall', movement: ['Hip'], intent: ['Activation', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4ca69d908d775994738c56335e181359' },
                    { name: 'Couch Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4785a76eae5933fa8e746be8b71633d1' },
                    { name: 'Dynamic Pigeon', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/622b7b4cf543878bb22526aa2a9419b7' },
                    { name: 'Figure 4 on Ground Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/2d9bd9a2d24d6388cbae67f723fd28d0' },
                    { name: 'Forward Backward Band Walks', movement: ['Hip'], intent: ['Activation'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/301b0c892299a40591d6d1ed47307b1d' },
                    { name: 'Frog Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/253c73bfc85d17e580ab2fd15ae0d664' },
                    { name: 'Frog Stretch (Variation)', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/35e2553222ba76b68d1824d575d17952' },
                    { name: 'Glute Extension on Med Ball', movement: ['Hip'], intent: ['Activation'], equipment: ['Medicine Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/014df82b455ee62cf3ad6bfc6fcba9da' },
                    { name: 'Groin Rollout', movement: ['Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/84121021ff6994f987d6075354f26030' },
                    { name: 'Hands & Knees Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a5fc7b1a0523b7d8f0d508d144983fc0' },
                    { name: 'Heel Up Pigeon Toe Walks', movement: ['Mobility', 'Balance'], intent: ['Stability', 'Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/7e610c1ccbda4978ccd159c6c50dfeb5' },
                    { name: 'Hip Flexor Hamstring Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/288a754fa8de14636203f1e55de57a3b' },
                    { name: 'Hip Mobility', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c8e481f607045099ea4c5a6cf96ccc4f' },
                    { name: 'Hip Mobility Sequence', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4cbca30d8b540253c1dc51d496a6031c' },
                    { name: 'Hip Openers', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5714720f35c7b037c190cc6bba38dcc9' },
                    { name: 'Kneeling Spiderman Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a06335ad75d9c8748dcde54bc953c934' },
                    { name: 'Pigeon Grab Back Foot', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6433b2bb526fb3df312278fba14c46d2' },
                    { name: 'Quadruped Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b5a817e9f4fb282868bb5aeffaf7efe2' },
                    { name: 'Quadruped Pigeon Variation', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/53b2f45cc8fbb998896fae386930b42a' },
                    { name: 'Seated External Rotator Hip with Band', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c4b30cc12260c61bf2548ded0188adbe' },
                    { name: 'Single Leg Glute Extension and Cross Leg', movement: ['Hip'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8b94ffa78b517a81841f87c1a65f1329' },
                    { name: 'Spiderman Kneeling Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9c3a75e150939030e4fac7d4c83518b9' },
                    { name: 'Spiderman Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4f79e4281599ee550297509732f1686a' },
                    { name: 'Squat Stretch Assisted', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d0e80fac9e01646be2ea6b52f3dea774' },
                    { name: 'Squat Stretch and Reach', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/78f71076a2f62c471d4c64962dac4171' },
                    { name: 'Straight Leg Hip Thrust Ball', movement: ['Hip'], intent: ['Activation'], equipment: ['Stability Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d8b2153792f94e4aec00a3380ba8bcba' },
                    { name: 'Super 8s', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b4caf9f0ea5bb1750d342f7357108be5' },
                    { name: 'Walking Heel to Butt Stretch', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/eac699b9c1d80ed8562519d6442a575b' },
                    { name: 'Wall Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3fb3086e10acd5dd613132ce39c774fe' },
                    { name: 'X Band Walks', movement: ['Hip'], intent: ['Activation'], equipment: ['Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bd243bbca5dc12042a276001f154e995' }
                ]
            },
            activation: {
                label: "Activation",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Clam Shells', movement: ['Hip'], intent: ['Stability'], equipment: ['Bodyweight', 'Band'], contraindications: [], youtube: 'https://iframe.videodelivery.net/dc0ef241f0ad2d47fe2ce75824434bd2', geriatric_priority: true },
                    { name: 'Glute Extensions', movement: ['Hip'], intent: ['Activation'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4107075912c71bd75fc5fa46b27e792f', geriatric_priority: true },
                    { name: 'Shortfoot', movement: ['Foot'], intent: ['Stability'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e79d3876461cc3f6e1a9ca7afc70802d' },
                    // --- No video ---
                ]
            },
            movement_prep: {
                label: "Movement Prep",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Standing Hip Circles', movement: ['Mobility'], intent: ['Mobility'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fd63fb4b80307643fc23d692b4b655ca', geriatric_priority: true },
                    // --- No video ---
                ]
            },
            low_impact_agility: {
                label: "Low Impact Agility",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Ladder Bunny Hops Forward Backward', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/988da34c41a9acba14ff3bad45aa64ff' },
                    { name: 'Ladder Carioca', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3e12bb6e3f6614320a302ffea2233f19' },
                    { name: 'Ladder Crossover Skip', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/066ae26e1d7b398e7e27df6e9108962b' },
                    { name: 'Ladder Crossover Skip (Variation)', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/68fca4ea3c4ada50903b0d3cfb7bdb59' },
                    { name: 'Ladder High Knee Run', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5c7bf809b9dfc9a2e31ac3acaa860be7' },
                    { name: 'Ladder High Knees', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fdd2d54cfd48ebc6f82bdb4279042bdb' },
                    { name: 'Ladder Hop Scotch', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c7bbc78aebb3d0c777d283571122499b' },
                    { name: 'Ladder Icky Lunge', movement: ['Agility', 'Lunge'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4c87b45bc673188d9397e4077b2a1e08' },
                    { name: 'Ladder Icky Shuffle', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b22a374e4d1431c62a75d2e5d9c2c88f' },
                    { name: 'Ladder Lateral 2 Feet In', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b25fe4083517f2ab3d462d8575b678c6' },
                    { name: 'Ladder Lateral 3 Hops Forward 1 Back', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5e973f9ff49e19cc82f232b59062133c' },
                    { name: 'Ladder Lateral Bunny Hops', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1a107c071b8750cb0e85fc4d144474fb' },
                    { name: 'Ladder Lateral In In Out Out', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/878f5b00cc0e230b823a145c715d23eb' },
                    { name: 'Ladder Quick Step', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/3403873abff9a7634d5134ae01587cb6' },
                    { name: 'Ladder Single Leg Hop', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/771f4c8da18846f5de65d0bd8a7f65fa' },
                    { name: 'Ladder Single Leg Hop (Variation)', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/a8201cacf5425e6d3f184cf018ed8079' },
                    { name: 'Ladder X-over Run', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Ladder'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b179fec0ace721b6b2fccccc70df4076' },
                    { name: 'Lateral Hops', movement: ['Agility'], intent: ['Activation', 'Conditioning'], equipment: ['Bodyweight'], contraindications: [], youtube: 'https://iframe.videodelivery.net/bdb58b0c6be8f5ada28b4d1362db2664' }
                ]
            },
            myofascial: {
                label: "Myofascial",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Foam Roller Preset', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/85ed348ae6659c0ff1cb8dc4b8036590' },
                    { name: 'Foam Roller Relax on Spine', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e44174a6583c436e40d2e007d72b0ad1' },
                    { name: 'Foam Roller Chest Stretch', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ef493dae2b8544ecbefb317edb4ce702' },
                    { name: 'T Spine Back-Bend', movement: ['Recovery', 'Mobility'], intent: ['Recovery', 'Mobility'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/5ff0d67ea7267bcf9a4f5e4012c64d79' },
                    { name: 'Lacrosse Ball Rear Delt Wall', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/03b8879866882f65a77de036005553c4' },
                    { name: 'Rear Delt Lacrosse Ball Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ae3e10aec06942484072c82390dab828' },
                    { name: 'Lacrosse Ball Door Jam Pec', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/057652a0d35358d80d29daacc0db1cf8' },
                    { name: 'Lacrosse Ball Lats', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/d7c055a38e1a46415baa57ba0942215d' },
                    { name: 'Lacrosse Ball Rhomboids', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Lacrosse Ball'], contraindications: [], youtube: 'https://iframe.videodelivery.net/4ff7e5044b367d83ff7f7738d09b4ad8' },
                    { name: 'Hamstring Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fed7877a14ffc2e82cb9e33cbd83b98c' },
                    { name: 'Lat Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Foam Roller'], contraindications: [], youtube: 'https://iframe.videodelivery.net/60195c8bdf6f3b2aac10dd73ef79376f' },
                    { name: 'Psoas Release Tool Glutes', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Psoas Release Tool'], contraindications: [], youtube: 'https://iframe.videodelivery.net/95f1948b15fbb61f5fae4aafc1c8d65d' },
                    { name: 'Psoas Release Tool Hips', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Psoas Release Tool'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fd4b91c0e011c472f8600b65c3619b1b' },
                    { name: 'Psoas Release Tool Lats', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Psoas Release Tool'], contraindications: [], youtube: 'https://iframe.videodelivery.net/6ffac8d4acabaa4a91865fdf721e5e10' },
                    { name: 'Psoas Release Low Back', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Psoas Release Tool'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f1a61ff6b10c20bb3fb8e2e831620526' },
                    { name: 'Psoas Release Tool Mid-Upper & Neck', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Psoas Release Tool'], contraindications: [], youtube: 'https://iframe.videodelivery.net/23a5b94bf6eed5bcdfecd004d8dd209a' },
                    { name: 'The Stick Biceps Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['The Stick'], contraindications: [], youtube: 'https://iframe.videodelivery.net/115df49cfd266c7140e109e26b6308af' },
                    { name: 'The Stick Lat Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['The Stick'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ae32ac541387d640db749e24e3127386' },
                    { name: 'The Stick Low Lats/Back Rollout', movement: ['Recovery'], intent: ['Recovery'], equipment: ['The Stick'], contraindications: [], youtube: 'https://iframe.videodelivery.net/330a4ab11ac2b3bed3d3d27c483ae9c9' },
                    { name: 'The Stick Standing IT Band', movement: ['Recovery'], intent: ['Recovery'], equipment: ['The Stick'], contraindications: [], youtube: 'https://iframe.videodelivery.net/de3c38b5d14a6208505af413b5048b0c' },
                    { name: 'Theracane Neck', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f2446cc8ad815ed99419e39944c9292e' },
                    { name: 'Theracane Upper Traps/Neck', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/b81fb40f928d9e00c4440f0925583c50' },
                    { name: 'Theracane Chest and Biceps', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/47080a9605d0ed0d55d87ba32fc8cd73' },
                    { name: 'Theracane Lowback and Butt', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/633ad62b806b9f80e60e6c88ca98e1e5' },
                    { name: 'Theracane Scap-Lat-Oblique', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/fd5ef25e5d6c58e41a65e2a414f0cfa7' },
                    { name: 'Theracane Pec', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Theracane'], contraindications: [], youtube: 'https://iframe.videodelivery.net/9888d091a32a8dce6d3eebf680712cfc' },
                    // --- No video ---
                ]
            },
            massage_gun: {
                label: "Massage Gun",
                exercises: [
                    // --- CF Video exercises ---
                    { name: 'Massage Gun Biceps Anterior Delt', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/1d218a538d07fb11755fe05cd5a35a2a' },
                    { name: 'Massage Gun Pec', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/e2984ec7c5d33279c2311625ca5a41ba' },
                    { name: 'Massage Gun Groin', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/8f906a15a112e12a2ecf12e302b50c0c' },
                    { name: 'Massage Gun IT Band and VMO', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/69350b0d6ca6e97d32831d838b5b57c4' },
                    { name: 'Massage Gun Lats Lying on Side', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/ed0cca997e893e2db2577ff139cde835' },
                    { name: 'Massage Gun Triceps Long Head', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/c3b8c30c15ad426469109ddcf6931ecb' },
                    { name: 'Massage Gun Biceps and Serratus and Teres Minor', movement: ['Recovery'], intent: ['Recovery'], equipment: ['Massage Gun'], contraindications: [], youtube: 'https://iframe.videodelivery.net/f330857f436433768d82b6d0db2e3ea0' },
                    // --- No video ---
                ]
            }
        }
    },

    // COOL DOWN (shares exercises with warm_up — UI displays as "Cool Down")
    cool_down: {
        label: "Cool Down",
        shared_with: "warm_up",
        subcategories: {
            general: {
                label: "General Cool Down",
                exercises: []
            },
            mobility: {
                label: "Mobility",
                exercises: []
            },
            upper_body_mobility: {
                label: "Upper Body Mobility",
                exercises: []
            },
            lower_body_mobility: {
                label: "Lower Body Mobility",
                exercises: []
            },
            activation: {
                label: "Activation",
                exercises: []
            },
            movement_prep: {
                label: "Movement Prep",
                exercises: []
            },
            low_impact_agility: {
                label: "Low Impact Agility",
                exercises: []
            },
            myofascial: {
                label: "Myofascial",
                exercises: []
            },
            massage_gun: {
                label: "Massage Gun",
                exercises: []
            }
        }
    }
};


