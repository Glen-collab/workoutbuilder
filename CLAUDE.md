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
  App.jsx                    # Main app: screens (welcome -> profile -> builder), override mode
  main.jsx                   # Entry point, mounts to #gwb-react-root or #root

  hooks/
    useWorkoutState.js       # All program state: blocks, exercises, sets, weeks/days, maxes
    useProgramAPI.js         # API calls: save, load, list, update, overrides (mock on localhost)

  components/
    builder/                 # (DELETED FROM DISK - moved to WordPress plugin version)
    exercises/               # (DELETED FROM DISK - moved to WordPress plugin version)
    programs/                # (DELETED FROM DISK - moved to WordPress plugin version)
    shared/                  # (DELETED FROM DISK - moved to WordPress plugin version)
    QuestionBlock.jsx        # Mario-style ? block button for video chatbot (ACTIVE)

  data/
    exerciseLibrary.js       # 1000+ exercises: chest/back/shoulders/legs/arms/core
    preMadeWorkouts.js       # Template workouts (Arms, GPP, Back Day, Chest Day)
    warmupExercises.js       # Myofascial release, dynamic warmup, joint mobility
    mobilityExercises.js     # Hip, ankle, shoulder, thoracic, wrist, spinal mobility
    olympicLifting.js        # Olympic lift library
    firstResponder.js        # First responder specific exercises
    generalMovements.js      # General movement patterns

  utils/
    percentageCalc.js        # Weight calc, tonnage, exercise classification, scheme presets
    schemePresets.js          # 16 pre-built set/rep schemes (3x10, 5x5, waves, GVT, etc.)

Interactive_video_chatbot.md # Chatbot spec: 10-node decision tree for Day 1 coaching flow
video_uids.txt               # Cloudflare Stream video UIDs (56 videos, pipe-delimited)
themeselector.jsx            # Theme selector component (standalone)
themeselectordemo.jsx        # Theme selector demo
react-trainer-dashboard/     # Separate sub-project (see its own CLAUDE.md)
```

**NOTE:** Most builder UI components were deleted from this repo's disk because they live in the WordPress plugin version (`general-workout-builder-modular`). The data files, hooks, and utilities are the canonical source.

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

### useWorkoutState Shape
```js
{ allWorkouts: { "1-1": [blocks], ... }, currentWeek, currentDay,
  daysPerWeek, totalWeeks, workoutBlocks: [], mainMaxes: { bench, squat, powerClean, deadlift },
  loadedProgram: { id, accessCode, name } }
```

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

**Localhost:** Returns mock data (no API calls needed for dev).

---

## Override Mode
URL: `?accessCode=X&email=Y&mode=override` -> loads client program for trainer editing.
Saves per week/day via `saveUserOverride()`. Client sees custom workout with badge.

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

## Percentage Calc Utilities (percentageCalc.js)

- `classifyExercise(name)` -> 'upper' | 'lower' | 'other' (uses movement patterns)
- `calculateWeight(percentage, baseMax)` -> rounded to nearest 5 lbs
- `calculateExerciseTonnage(exercise, mainMaxes)` -> reps x weight x qualifier
- `calculateWorkoutTonnage(blocks, mainMaxes)` -> total across all blocks
- `calculateTonnageByCategory(blocks, mainMaxes)` -> { upper, lower, total }
- `calculateCardioTotals(blocks)` -> { totalMinutes, totalMiles }
- `suggestBaseMax(exerciseName)` -> auto-picks bench/squat/deadlift/powerClean

---

## Git / Deployment Notes

- `.env` and `upload_videos.sh` are gitignored (contain Cloudflare API tokens)
- `.claude/` directory is gitignored
- WordPress plugin loads `dist/builder.js` + `dist/builder.css` and passes `window.gwbConfig.apiBase`
