# Smart Import UI — frontend reference

The "Smart Import" button on `BuilderScreen` lets a coach paste raw text into a modal and have it parsed by Claude into structured workout blocks. See `bsa-coach-platform/docs/SMART_IMPORT.md` for the backend contract.

This doc covers the React surface area in the workoutbuilder.

---

## Files

| File                                              | Role                                                                 |
|---------------------------------------------------|----------------------------------------------------------------------|
| `src/components/builder/SmartImportModal.jsx`     | The modal: mode picker, textarea, result preview, day tabs, distribute controls |
| `src/components/builder/BuilderScreen.jsx`        | Hosts the green ✨ Smart Import button next to Progressions/Dashboard |
| `src/hooks/useWorkoutState.js`                    | Two new actions: `importBlocks` (single day) and `importMultiDay`    |
| `src/App.jsx`                                     | Forwards both hook actions through `builderWorkoutState` props       |

---

## UX flow

1. Coach clicks **✨ Smart Import** (emerald button, top-right of builder header).
2. Modal opens with a 3-card mode picker:
   - **Single day** — drops into current day
   - **Multi-day paste** — splits Day 1 / Day 2 / etc into successive days
   - **Auto-fill week** — paste one template, Claude designs the rest
3. If `Auto-fill week` is chosen, an emerald sub-panel appears with:
   - **Total days** dropdown (2–7)
   - **Split style** dropdown (auto / PPL / Upper-Lower / Body-part)
4. Coach pastes into the textarea. Placeholder text is mode-aware so it hints at the expected format.
5. Click **Parse Workout** (or **Generate Week** in expand mode). Button shows `Parsing…` / `Designing the week…` while busy.
6. Result preview replaces the input form:
   - **Summary banner**: "Parsed N day(s) · M total blocks. K blocks need a manual library match."
   - **Day tabs** (only shown when `days.length > 1`) — switch which day's blocks are visible
   - **Block list** for the active day. Each block shows type, circuit type, time limit, rounds, and exercises. Unmatched exercises get a yellow border and `[needs match]` tag.
   - **Warnings panel** (amber) — free-text notes the parser flagged
   - **Unmapped suggestions** (collapsible) — alternative library names the coach can pick from
   - **Landing controls**: radio for "Replace" vs "Append", with copy that adapts to single vs multi-day
   - **Token usage** shown small in the corner
7. Click the action button:
   - Single day → `onImportSingle(blocks, mode)` → `useWorkoutState.importBlocks`
   - Multi-day → `onImportMulti(days, currentWeek, currentDay, mode)` → `useWorkoutState.importMultiDay`
8. Modal closes. Builder canvas now has the new blocks ready for refinement.

---

## `useWorkoutState.importBlocks(incomingBlocks, mode = 'append')`

Drops blocks into the **current** day only.

- Stamps each block with a fresh local `id` from `blockIdCounter`
- `mode === 'replace'` → wipes `workoutBlocks` and uses the incoming list
- `mode === 'append'` → appends to existing
- Sets `collapsed: false` on all stamped blocks so they're visible immediately

---

## `useWorkoutState.importMultiDay(days, startWeek, startDay, mode = 'replace')`

Drops multiple days of blocks into **consecutive day slots** starting at `(startWeek, startDay)`.

Behavior:
- Saves the currently-open day's edits first (so unsaved work isn't lost)
- Walks day-by-day forward through `allWorkouts`. When `day > daysPerWeek`, rolls over to `(week + 1, day 1)`.
- Auto-expands the program if the run goes past the current size:
  - `totalWeeks` bumps up if a write lands in week > current `totalWeeks`
  - `daysPerWeek` bumps up if a write lands in day > current `daysPerWeek`
- After all writes, navigates the builder to `(startWeek, startDay)` so the coach lands on Day 1

Each day's blocks get fresh local IDs the same way `importBlocks` does.

---

## Block shape returned by the API

Pre-shaped to match `useWorkoutState`'s schema so the hook can drop them in without further transformation. Default fields are filled in by the backend's `_enrich_blocks` helper:

```js
{
  type: 'superset',                  // matches BlockTypeSelector keys
  notes: '',
  rounds: '4',                       // string
  collapsed: false,
  circuitType: null,                 // 'AMRAP' | 'EMOM' | 'Tabata' | 'For Time' | 'Chipper' | null
  timeLimit: '',                     // minutes, string
  restBetweenRounds: '',
  themeText: '',                     // only used when type === 'theme'
  exercises: [
    {
      name: 'Barbell Bench Press',   // canonical library name when matched
      sets: [
        { id: 0, reps: 10, percentage: 70, manualWeight: null, isWarmup: false }
      ],
      intent: [],
      equipment: [],
      movement: [],
      contraindications: [],
      qualifier: '',
      baseMax: 'bench',              // bench | squat | powerClean | deadlift | bodyweight | manual
      scheme: '4x10',
      setsCount: '4',
      youtube: 'https://iframe.videodelivery.net/...',  // present when matched
      category: 'Chest',
      sourceLibrary: 'exerciseLibrary',
      matched: true                  // false → flagged yellow in the preview
    }
  ]
}
```

Unmatched exercises (`matched: false`) keep the user's wording in `name`. They still drop into the builder canvas, but with no video and no `category` / `sourceLibrary`. The coach replaces them via the normal exercise picker.

---

## API base URL

`SmartImportModal.jsx` reads `window.gwbConfig?.platformApiBase` (when injected by the WordPress plugin) and falls back to `https://app.bestrongagain.com/api`. The endpoint path it hits is `/workout/parse-import`.
