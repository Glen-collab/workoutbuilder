# React Workout Builder

## What This Is
A React app for trainers to build multi-week workout programs. Trainers create programs with blocks of exercises, set percentages, and share access codes with clients. Clients load programs in the **WorkoutTracker** (separate repo). Also contains the **Cloudflare Video / Interactive Chatbot** system (in progress).

**Repo:** `Glen-collab/workoutbuilder`
**Stack:** React 19, Vite 7, Tailwind 4, Chart.js 4.5
**Deploy:** Netlify (`npm run build` -> `dist/builder.js` + `dist/builder.css`)
**API Proxy:** Netlify redirects `/api/*` -> `https://bestrongagain.com/workout-programs/api/general/`

---

## Project Structure

```
src/
  App.jsx                    # Main app: screens (welcome -> profile -> builder), override mode, travel save/load
  main.jsx                   # Entry point, mounts to #gwb-react-root or #root

  hooks/
    useWorkoutState.js       # All program state: blocks, exercises, sets, weeks/days, maxes, insert/add weeks
    useProgramAPI.js         # API calls: save, load, list, update, overrides, travel workouts (mock on localhost)

  components/
    builder/
      BuilderScreen.jsx      # Main builder view: block list, day selector, tonnage, save button
      BlockCard.jsx           # Expandable block container (all block types)
      BlockList.jsx           # Renders list of BlockCards with drag-reorder
      BlockTypeSelector.jsx   # Dropdown for selecting block type
      ExerciseRow.jsx         # Exercise within a block: name, sets, reps, weight, percentage, qualifier, baseMax
      PercentageSetRow.jsx    # Individual set row for percentage-based exercises
      PercentagePicker.jsx    # Percentage dropdown (40%-105% in 2.5% increments)
      CircuitTypeSelector.jsx # Circuit config: rounds, AMRAP, EMOM, Tabata
      WeekDaySelector.jsx     # Week/day navigation tabs
      DailySummary.jsx        # Daily tonnage and volume summary
      WeeklyVolumeGraph.jsx   # Bar chart of weekly volume across days
      CardioGraph.jsx         # Cardio stats visualization
      ProgramPreviewGraph.jsx # Full program preview
      CuesPicker.jsx          # Coaching cues selector
      PreMadeWorkoutPicker.jsx # Template workout loader
      ThemeSelector.jsx       # Theme/message block editor

    exercises/
      ExerciseList.jsx        # Exercise search and selection list
      ExerciseModal.jsx       # Full exercise picker modal with categories
      MuscleGroupGrid.jsx     # Visual muscle group selector
      MovementCategoryList.jsx # Movement pattern categories
      SubcategoryTabs.jsx     # Subcategory filter tabs

    programs/
      ManagePrograms.jsx      # List/load/delete saved programs
      SaveProgramModal.jsx    # Save program dialog: name, nickname, save-as-new option
      ManageTravelWorkouts.jsx # List/load/delete travel workouts by equipment type
      TravelSaveModal.jsx     # Save current day as travel workout: equipment type, day number, name

    screens/
      WelcomeScreen.jsx       # Landing: New Program, Manage Programs, Manage Travel Workouts
      ProfileSetup.jsx        # Program config: days/week, total weeks, 1RM entry

    shared/
      Modal.jsx               # Reusable modal wrapper
      PercentageMaxInputs.jsx # 1RM input fields (bench, squat, clean, deadlift)

    QuestionBlock.jsx         # Mario-style ? block button for video chatbot (ACTIVE)

  data/
    exerciseLibrary.js       # 1000+ exercises: chest/back/shoulders/legs/arms/core (with Cloudflare video URLs)
    preMadeWorkouts.js       # Template workouts (Arms, GPP, Back Day, Chest Day)
    warmupExercises.js       # Myofascial release, dynamic warmup, joint mobility, stretching
    mobilityExercises.js     # Hip, ankle, shoulder, thoracic, wrist, spinal mobility
    olympicLifting.js        # Olympic lift library
    firstResponder.js        # First responder specific exercises
    generalMovements.js      # General movement patterns

  utils/
    percentageCalc.js        # Weight calc, tonnage, exercise classification, cardio totals, scheme presets
    schemePresets.js          # 16 pre-built set/rep schemes (3x10, 5x5, waves, GVT, etc.)

Interactive_video_chatbot.md # Chatbot spec: 10-node decision tree for Day 1 coaching flow
video_uids.txt               # Cloudflare Stream video UIDs (56 videos, pipe-delimited)
themeselector.jsx            # Theme selector component (standalone)
themeselectordemo.jsx        # Theme selector demo
react-trainer-dashboard/     # Separate sub-project (see its own CLAUDE.md)
```

---

## Key Data Structures

### Exercise Object
```js
{ name, movement: ['Push'|'Pull'|'Squat'|'Hinge'|'Hip'],
  intent: ['Max Strength'|'Hypertrophy'|'Stability'|...],
  equipment: ['Barbell'|'Dumbbell'|'Cable'|...],
  contraindications: ['Upper Body Load Limited'|...],
  youtube: 'https://iframe.videodelivery.net/{CLOUDFLARE_ID}',
  schemes: [{ name, sets, reps, percentages: [] }] }
```

### Block Types
`straight-set`, `superset`, `triset`, `circuit`, `warmup`, `cooldown`, `conditioning`, `movement`, `theme`

### Block Object Shape
```js
{ id, type, circuitType, exercises: [], notes: '', collapsed: false,
  rounds: '', timeLimit: '', restBetweenRounds: '',
  workInterval: '', restInterval: '', themeText: '' }
```

### useWorkoutState Shape
```js
{ allWorkouts: { "1-1": [blocks], ... }, currentWeek, currentDay,
  daysPerWeek, totalWeeks, workoutBlocks: [],
  mainMaxes: { bench, squat, powerClean, deadlift },
  loadedProgram: { id, accessCode, name } }
```

### Base Max Types
```js
// All 6 types must have entries in baseMaxLabels and baseMaxColors
bench, squat, powerClean, deadlift, bodyweight, manual
```

---

## App Screens & Flow

```
WelcomeScreen -> ProfileSetup -> BuilderScreen
                  |
                  ManagePrograms (load existing)
                  ManageTravelWorkouts (load travel workout into builder)
```

### Override Mode
URL: `?accessCode=X&email=Y&mode=override` -> loads client program for trainer editing.
Saves per week/day via `saveUserOverride()`. Client sees custom workout with badge.

### Save Flow
- **Existing program:** Calls `updateProgram()`. If code was regenerated, shows new code.
- **New program / Save as New:** Calls `saveProgram()`. Returns `{ programId, accessCode }`.
- **Save as New** creates a copy of the current program with a fresh access code.

### Travel Workout System
- **Save:** Trainer builds workout day in builder, clicks "Save as Travel" -> TravelSaveModal -> picks equipment type (bodyweight, hotel_gym, bands_bodyweight) + day number + name -> `saveTravelWorkout()`
- **Manage:** WelcomeScreen -> "Manage Travel Workouts" -> ManageTravelWorkouts -> list by equipment type, load into builder or delete
- **Load into builder:** Loads travel workout blocks as a 1-week/1-day program for editing

### Dashboard Link
Opens trainer dashboard in new tab: `bsa-trainer-dashboard.netlify.app` (production) or localhost dev URL.

---

## API Endpoints (useProgramAPI.js)

All POST to `{apiBase}/{endpoint}`:

| Endpoint | Purpose |
|----------|---------|
| `save-program.php` | Save new program -> returns { programId, accessCode } |
| `update-program.php` | Update existing program |
| `list-programs.php` | List trainer's programs by email |
| `load-program.php` | Load program by accessCode + email |
| `save-user-override.php` | Trainer overrides client's specific week/day |
| `load-user-override.php` | Load override for specific week/day |
| `delete-user-override.php` | Revert override |
| `save-travel-workout.php` | Save workout as travel workout (equipment type + day) |
| `get-travel-workouts.php` | List all travel workouts for trainer |
| `delete-travel-workout.php` | Delete a travel workout |

**Localhost:** Returns mock data (no API calls needed for dev).

---

## useWorkoutState Key Features

- **switchDay / switchWeek:** Auto-saves current blocks, loads target day (collapsed)
- **Blocks collapse on load:** `collapseAllBlocks()` collapses all blocks when switching days
- **copyWeekToNext(n):** Copies CURRENT DAY to same day in next N weeks
- **copyWeekToAll:** Copies CURRENT DAY to same day in ALL other weeks
- **insertWeekAt(position):** Inserts empty week at position, shifts existing weeks forward
- **addWeeksToEnd(count):** Adds N empty weeks at end of program
- **Set management:** addSet, removeSet, duplicateSet, updateExerciseSet

---

## Percentage Calc Utilities (percentageCalc.js)

### Functions
- `classifyExercise(name)` -> 'upper' | 'lower' | 'other' (uses movement pattern lookup + name heuristics)
- `calculateWeight(percentage, baseMax)` -> rounded to nearest 5 lbs
- `calculateExerciseTonnage(exercise, mainMaxes)` -> total tonnage with qualifier multipliers
- `calculateWorkoutTonnage(blocks, mainMaxes)` -> total across all blocks
- `calculateTonnageByCategory(blocks, mainMaxes)` -> { upper, lower, total }
- `calculateCardioTotals(blocks)` -> { totalMinutes, totalMiles }
- `suggestBaseMax(exerciseName)` -> auto-picks bench/squat/deadlift/powerClean
- `isPercentageBasedLift(name)` -> true for barbell compound lifts
- `isStrengthBlock(type)` -> true for straight-set, superset, triset

### Qualifier Multipliers
```
'', 'total', 'together' -> 1x
'each', 'each arm', 'each leg', 'each side', 'all one arm first', 'all one leg first' -> 2x
'x2 combo' -> 2x, 'x3 combo' -> 3x, 'x4 combo' -> 4x
```

### Tonnage Calculation
- **Percentage-based:** For each non-warmup set: `weight × reps`, plus drop set/strip set weights
- **Drop set support:** Main set + drop percentage × drop reps
- **Strip set support:** Main set + drop + strip percentage × strip reps
- **Non-percentage:** `totalReps × weight × qualifierMultiplier`

### Base Max Display
```js
baseMaxLabels: { bench: 'Bench', squat: 'Squat', powerClean: 'Clean',
                 deadlift: 'Deadlift', bodyweight: 'Body Weight', manual: 'Manual Weight' }
baseMaxColors: { bench: blue, squat: green, powerClean: orange,
                 deadlift: purple, bodyweight: gray, manual: pink }
```

---

## Cloudflare Video System (IN PROGRESS)

### video_uids.txt Format
```
category|exercise_name|cloudflare_video_uid
core_lower|Hollow Hold|80af743732259cf4499e1e4b3ec06fbf
```
**Categories so far:** stretching, core_lower (25), core_oblique (16), core_upper (11)
**Upload script:** `upload_videos.sh` (gitignored, has API tokens in `.env`)
**Embed URL pattern:** `https://iframe.videodelivery.net/{uid}`

### QuestionBlock.jsx
Mario-style floating `?` button (gold, 50x50px, top-right). On click: bounces, gold coins animate out, triggers `onClick` callback. Intended to open a video library modal.

### Interactive Video Chatbot Spec (Interactive_video_chatbot.md)
10-node decision tree for Day 1 client coaching:
- Node 0: Silent intake (initialize state)
- Node 1: Greeting video
- Node 2: Myofascial release
- Node 3: Movement assessment (disguised warmup)
- Node 4-5: Warmup + foundation prep
- Node 6-8: Supersets (main work)
- Node 9: Cooldown + expectation setting
- Node 10: Exit state (save progress, unlock Day 2)

**State tracked:** confidence, experience, pain/injury, coaching density, form quality, core awareness
**Hidden branching:** Nervous -> slower, Confident -> tighter, Pain -> reduced intensity

### TODO - Cloudflare Videos
- [ ] Upload remaining exercise categories (upper body, lower body, cardio)
- [ ] Build VideoLibraryModal component
- [ ] Connect QuestionBlock -> VideoLibraryModal -> video_uids.txt mapping
- [ ] Implement chatbot decision tree nodes with video playback
- [ ] Add state persistence across sessions
- [ ] Build Day 2+ chatbot flows

---

## Scheme Presets (schemePresets.js)

16 pre-built templates: 3x10, 3x5, 3x3, 5x5, 10x10 GVT, Wave 6-3-6-3, Wave 4-2-4-2, Wave 3-1-3-1, Dynamic 8x3, Dynamic 3x6, and more. Applied via `applyScheme(schemeKey, exercise)`.

---

## Git / Deployment Notes

- `.env` and `upload_videos.sh` are gitignored (contain Cloudflare API tokens)
- `.claude/` directory is gitignored
- WordPress plugin loads `dist/builder.js` + `dist/builder.css` and passes `window.gwbConfig.apiBase`
- Netlify config: SPA redirect + `/api/*` proxy to bestrongagain.com
