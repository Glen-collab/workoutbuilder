# Movement Drill Library

The **Movement** block in the Workout Builder pulls every drill from a single
file:

```
src/data/generalMovements.js
```

Everything a coach can drop into a Movement block lives here — running drills,
agility/COD work, plyometrics, conditioning, and cardio machines. This is the
**one place to add, edit, or reorganize** them. No other file or backend change
is needed: the builder reads this file and renders the picker automatically.

> Total entries today: **134**

---

## How the builder shows it

When a coach adds a **Movement** block and opens the exercise picker, every
top-level key in `generalMovements` becomes a button. Two of them are
**nested** (they open into Linear / Lateral / Multi-Directional); the rest go
straight to a drill list.

```
Movement block picker
  ▸ Movement Presets      → Linear · Lateral · Multi-Directional   (pre-built combos)
  ▸ Movement Drills       → Linear · Lateral · Multi-Directional   (individual drills)
  ▸ Plyometrics Lower
  ▸ Plyometrics Upper
  ▸ Conditioning
  ▸ Cardio Equipment
```

The button label is the key name with underscores turned into spaces
(`movement_drills` → "Movement Drills"), unless the bank sets an explicit
`label`. The count badge on each button is computed automatically.

**Rendering code** (you normally never touch these):
- `src/components/exercises/ExerciseModal.jsx` — the picker + the
  category → subcategory → drill drill-down for the Movement block.
- `src/components/exercises/MovementCategoryList.jsx` — the top-level button
  list + count badges.

---

## The two data shapes

### 1. Nested bank (directional) — used by Presets & Drills

```js
movement_drills: {
  label: "Movement Drills",
  subcategories: {
    linear:  { label: "Linear",            exercises: [ /* {name, description} */ ] },
    lateral: { label: "Lateral",           exercises: [ ... ] },
    multi:   { label: "Multi-Directional", exercises: [ ... ] },
  }
}
```

### 2. Flat bank — used by Plyometrics / Conditioning / Cardio

```js
plyometrics_lower: [
  { name: "Box Jumps", description: "24-36 inch box, explosive hip extension" },
  // ...
]
```

### Drill object

```js
{ name: "A-Skip", description: "Hip flexor activation, knee drive, ankle dorsiflexion" }
```

`duration` is optional and only used on the **presets** (e.g. `"8-10 min"`).

---

## How to add a drill

1. Open `src/data/generalMovements.js`.
2. Find the right bucket:
   - A **linear** running drill → `movement_drills.subcategories.linear.exercises`
   - A **lateral** drill → `...lateral.exercises`
   - A **multi-directional** drill → `...multi.exercises`
   - A plyo / conditioning / cardio item → the matching flat array.
3. Add one line:
   ```js
   { name: "Wall Drive March", description: "March variation — knee drive + posture cue" },
   ```
4. Save. The drill appears in the picker immediately on next build — **no
   backend, no migration, no other file.**

> Moving a drill between Linear / Lateral / Multi is **purely organizational**.
> It does not affect any saved workout — workouts store the drill **name**, not
> its category. Re-shuffle freely.

### Add a whole new direction or bank

- New **flat** bank → add a new top-level key whose value is an array. A new
  button appears automatically.
- New **subcategory** under a nested bank → add a key under `subcategories`
  with `{ label, exercises: [] }`.

---

## ⚠️ One coupling to know

The **Conditioning** block type (separate from the Movement block) reads two
banks **by key name**:

```js
// ExerciseModal.jsx
const conditioningKeys = ['conditioning_general', 'cardio_equipment'];
```

If you rename `conditioning_general` or `cardio_equipment`, update that list
too. Adding drills to them is fine — only renaming the keys matters.

---

## Search

The picker's search bar is global — it flattens **every** bank (including all
nested subcategories) via `getAllExercisesFromCategories()`, so a coach can
type a drill name from any block type and find it. Nested banks are already
handled; you don't need to do anything special for search to see new drills.

---

# Current Inventory

_Auto-generated from `generalMovements.js`. 134 entries._

## Movement Presets  `movement_presets`

### Linear  `movement_presets.subcategories.linear` — 7

- **Beginner Linear Preset** _(6-8 min)_ — A Skip, Straight Leg Run, B Skip, High Knee Cycle, High Knee Cycle to Run
- **Intermediate Linear Preset** _(8-10 min)_ — A Skip, Straight Leg Run, B Skip, High Knee Cycle, Straight Leg to High Knee Cycle, High Knee Cycle to Sprint, 40 Yard Build Ups
- **Advanced Linear Preset** _(10-12 min)_ — A Skip, B Skip, Low Ankle Run, Stilt Run + Low Ankle, Stilt Run + Low Ankle Switch Every 3
- **Linear Preset 1 - Speed Development** _(8-10 min)_ — Wall Drives, A-Skip, B-Skip, Flying 20s (4 rounds)
- **Linear Preset 2 - Acceleration Focus** _(10-12 min)_ — Falling Starts, 3-Point Stance Starts, Sled Pulls (Light), Hill Sprints (5 rounds)
- **Linear Preset 3 - Running Technique** _(8-10 min)_ — High Knees, Butt Kicks, Straight Leg Bounds, Ankling, Wicket Runs
- **Linear Preset 4 - Speed Endurance** _(12-15 min)_ — Tempo Runs 75%, 100-Yard Repeats (6 rounds), 200-Yard Repeats (3 rounds)

### Lateral  `movement_presets.subcategories.lateral` — 6

- **Beginner Lateral Preset** _(6-8 min)_ — 2 Hurdles Back and Forth, 3 Hurdles Down + Stick, 3 Hurdles Down and Back
- **Intermediate Lateral Preset** _(8-10 min)_ — 3 Hurdles Down + Stick, 3 Hurdles Down/Back + Sprint Out, 4 Hurdles 2-Back 3-Back 4-Back Ladder
- **Advanced Lateral Preset** _(10-12 min)_ — 3 Hurdles Down/Back + Sprint Out, 3 Hurdles Down/Back + Sprint Forward (Perpendicular), 3 Hurdles Down/Back + Reverse Pivot Sprint Back
- **Lateral Preset 1 - COD Development** _(8-10 min)_ — Carioca, Lateral Shuffles, 90-Degree Cuts, Pro Agility (5 rounds)
- **Lateral Preset 2 - Agility Focus** _(10-12 min)_ — T-Drill, Box Drill, Reactive Shuffle, Lateral Bounds (4 rounds)
- **Lateral Preset 3 - Cutting Mechanics** _(8-10 min)_ — Crossover Cuts, Open-Hip Cuts, Plant and Drive, Jump Cuts (5 rounds)

### Multi-Directional  `movement_presets.subcategories.multi` — 6

- **Beginner Multi Preset** _(8-10 min)_ — Altitude Landings Double Leg, Altitude Landings Single Leg Lateral, 5 Yard Sprint to Stop in Lunge Position, 10 Yard Sprint to Lunge Position, 10 Yard Sprint to Double Leg Stop, 10 Yard Sprint to Double Leg Stop + Backpedal
- **Intermediate Multi Preset** _(10-12 min)_ — 5 Yard Sprint to Lunge Stop, 10 Yard Sprint to Lunge Stop and Get Out Using Arm Exchange, Sprint to Double Leg Stop and Get Out Using Arm Exchange
- **Advanced Multi Preset** _(12-15 min)_ — Sprint to Get Out on Various Stops, W Drill to Cones with Correct 3 Step Drill, W Drill Through Hurdles + Lateral Back and Sprint Out, Coaches Lateral Shuffle and Sprint Side to Side Drills
- **Multi-Directional Preset 1 - Complete Agility** _(10-12 min)_ — L-Drill, W-Drill, Zig-Zag Runs, 180-Degree Turns (4 rounds)
- **Multi-Directional Preset 2 - Field Sport Movement** _(12-15 min)_ — Figure-8 Runs, Cone Weave Sprints, Box Drill, Reactive Shuffle (5 rounds)
- **Multi-Directional Preset 3 - Court Sport Movement** _(10-12 min)_ — Pro Agility, T-Drill, Defensive Slides, Ladder Drills (4 rounds)

## Movement Drills  `movement_drills`

### Linear  `movement_drills.subcategories.linear` — 32

- **A-Skip** — Hip flexor activation, knee drive, ankle dorsiflexion
- **B-Skip** — Pawing motion, hamstring engagement, full leg cycle
- **High Knees** — Drive knees to hip height, quick ground contact
- **Butt Kicks** — Heel to glute, fast turnover, hamstring activation
- **Straight Leg Bounds** — Stiff leg, ankle stiffness, glute/hamstring power
- **Ankling (Fast Feet)** — Rapid ankle plantarflexion, ground contact drill
- **High Knee Walk** — Slow, controlled knee drive with balance
- **Backward Running** — Proprioception, deceleration mechanics
- **Power Skips** — Explosive vertical skip with single leg drive
- **Wall Drives** — 45-degree lean, rapid leg turnover against wall
- **Falling Starts** — Forward lean to sprint, acceleration mechanics
- **3-Point Stance Starts** — Explosive starts from athletic position
- **Mountain Climbers (Speed)** — Ground contact speed, hip flexor power
- **Partner Resistance Runs** — Overspeed training with band/partner
- **Sled Pulls (Light)** — 10-20% bodyweight, acceleration focus
- **Hill Sprints (Short)** — 10-20 yards uphill, 5-8 degree incline
- **Resisted Starts** — First 10 yards with resistance, then release
- **Wicket Runs** — Mini hurdles for stride length/frequency
- **Bounding** — Exaggerated running motion, distance per stride
- **Sprint Buildups** — Progressive acceleration to 90-95%
- **Stride Outs** — Controlled acceleration with form focus
- **Downhill Sprints (Overspeed)** — 2-3 degree decline, controlled overspeed
- **Parachute Runs** — Resistance parachute for acceleration
- **Flying Sprints** — Rolling start to max velocity
- **Tempo Runs (75%)** — Controlled speed, rhythm, form maintenance
- **Flying 20s** — 20-yard build-up, 20-yard max effort fly zone
- **100-Yard Repeats** — 10 x 100 yards, 1:3-1:4 work to rest
- **200-Yard Repeats** — 6 x 200 yards, maintain 80-85% speed
- **Gassers** — 4 x 110 yards (sideline to sideline x 4)
- **300-Yard Shuttles** — 2 x 300 yards, speed endurance
- **120s (12 x 120 yards)** — Classic football conditioning drill
- **Ladder Runs** — Ascending/descending distance intervals

### Lateral  `movement_drills.subcategories.lateral` — 20

- **Carioca** — Hip mobility, crossover pattern, lateral coordination
- **Lateral Shuffle** — Side-to-side shuffling movement
- **Pro Agility (5-10-5)** — NFL Combine shuttle drill
- **T-Drill** — Forward sprint, lateral shuffle, backpedal
- **90-Degree Cuts** — Sharp plant and cut at right angle
- **Crossover Cuts** — Crossover step for tight turns
- **Open-Hip Cuts** — Hip opens toward direction of cut
- **Closed-Hip Cuts** — Hip stays closed, plant and pivot
- **Jump Cuts** — Small hop before cut, quick redirection
- **Step-Over Cuts** — Lead leg crosses over, tight radius
- **Plant and Drive** — Deceleration to re-acceleration
- **Shuffle to Plant** — Lateral shuffle to hard plant
- **Ladder - Icky Shuffle** — In-in-out-out lateral pattern
- **Ladder - In-Out** — Quick feet, in and out of each square
- **Ladder - Single Leg Hops** — One foot per square, fast turnover
- **Ladder - Lateral Shuffle** — Side-to-side through ladder
- **Ladder - Crossover Steps** — Crossover pattern through squares
- **Cone Taps** — Touch cones rapidly, hand-foot coordination
- **Line Hops** — Forward-back or side-to-side over line
- **Quick Feet Drills** — Rapid ground contact, various patterns

### Multi-Directional  `movement_drills.subcategories.multi` — 13

- **L-Drill (3-Cone)** — NFL Combine cone drill
- **Box Drill (4-Corner)** — Square pattern with direction changes
- **W-Drill** — Multiple direction changes in W pattern
- **Zig-Zag Runs** — 45-degree cuts every 5 yards
- **Cone Weave Sprints** — Slalom pattern through 5+ cones
- **Figure-8 Runs** — Curved running pattern, hip rotation
- **Ladder Drills (Various)** — Speed ladder footwork patterns
- **Reactive Shuffle** — Coach/partner cues direction changes
- **180-Degree Turns** — Sprint, plant, reverse direction
- **Deceleration Runs** — Sprint to controlled stop in 3-5 steps
- **Backpedal to Sprint** — Transition mechanics, hip turn
- **Plant and Hold** — Sprint, plant, hold single-leg position
- **Eccentric Landing Drills** — Controlled landings from box

### Plyometrics Lower  `plyometrics_lower` — 10

- **Box Jumps** — 24-36 inch box, explosive hip extension
- **Depth Jumps** — Drop from box, immediate reactive jump
- **Broad Jumps** — Horizontal power, triple extension
- **Single-Leg Box Jumps** — Unilateral power and stability
- **Lateral Bounds** — Side-to-side explosive power
- **Hurdle Hops** — Continuous hops over 6-12 inch hurdles
- **Pogo Jumps** — Ankle stiffness, minimal knee bend
- **Split Squat Jumps** — Alternating legs, vertical power
- **Tuck Jumps** — Maximum vertical, knees to chest
- **Depth Drop to Sprint** — Reactive drop to immediate sprint

### Plyometrics Upper  `plyometrics_upper` — 7

- **Medicine Ball Chest Pass** — Explosive push, partner or wall
- **Medicine Ball Overhead Slam** — Full body power, ground slam
- **Medicine Ball Side Toss** — Rotational power, each side
- **Medicine Ball Scoop Toss** — Hip extension, overhead throw
- **Plyo Push-Ups** — Hands leave ground, explosive press
- **Clap Push-Ups** — Clap at top of explosive push
- **Medicine Ball Woodchops** — High to low rotational slam

### Conditioning General  `conditioning_general` — 15

- **Suicide Sprints** — Progressive distance, back-and-forth
- **Line Drills** — Touch lines progressively, full court/field
- **Indian Runs** — Group jog, last person sprints to front
- **Fartlek Runs** — Variable pace running, speed play
- **Hill Sprint Intervals** — Repeated hill sprints with walk-back recovery
- **Track Sprint Intervals** — Sprint intervals on track with timed rest
- **Run/Walk Intervals** — Alternating run and walk periods for endurance building
- **Long Run** — Sustained distance run at conversational pace
- **Timed Mile** — Aerobic capacity baseline test
- **Beep Test (Yo-Yo)** — Progressive shuttle run test
- **Sandbag Loads + Farmer Carry** — Load sandbag to shoulder, then loaded carry for distance
- **Kettlebell Swing + Sprint** — Set of KB swings into a short sprint, repeat
- **Sled Push + Sprint** — Heavy sled push into a sprint finish
- **Battle Ropes + Burpees** — Rope waves alternated with burpees
- **Wall Ball + Row** — Wall ball sets paired with rower intervals

### Cardio Equipment  `cardio_equipment` — 18

- **Treadmill** — Walking, jogging, running, incline, sprints
- **Air Bike** — Full-body fan-resistance bike
- **Assault Bike** — Fan-resistance assault bike
- **Elliptical** — Low-impact continuous cardio
- **Rowing Machine** — Full-body rowing ergometer
- **Stationary Bike** — Upright stationary cycling
- **Recumbent Bike** — Seated low-impact cycling
- **Spin Bike** — High-output indoor cycling
- **Concept2 BikeErg** — Performance-focused cycling ergometer
- **SkiErg** — Upper-body dominant cardio ergometer
- **Stair Climber** — Continuous stair stepping
- **Arc Trainer** — Variable stride elliptical trainer
- **Vertical Climber** — Upright climbing machine
- **VersaClimber** — High-intensity vertical climbing ergometer
- **Jacob's Ladder** — Self-powered ladder climbing
- **TreadClimber** — Incline belt walking system
- **Prowler** — Weighted prowler push/pull for power-cardio
- **Sled Work** — Sled push, pull, and drag conditioning


---

_To regenerate this inventory after editing drills, re-run the doc generator or
just update the lists below by hand — the guide sections above don't change._
