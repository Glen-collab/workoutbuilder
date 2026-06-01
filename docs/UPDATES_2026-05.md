# Workout App Updates — May 2026

A rundown of the recent round of work across the **Workout Builder**, **Workout
Tracker**, and the **BSA backend**. Theme of the release: a cleaner, faster
build experience, more flexible programming, and a few safety nets.

Repos touched:
- `Glen-collab/workoutbuilder` — coach-facing program builder (Netlify)
- `Glen-collab/WorkoutTracker` — client-facing PWA (Netlify)
- `Glen-collab/bsa-coach-platform` — Flask backend on EC2 (RDS PostgreSQL)

---

## 1. Builder UI cleanup (the "OCD-friendly" pass)

The builder header and the week/day controls were resized and aligned so
nothing looks random anymore.

- **Header buttons** — *Smart Import · Progressions · Volume · Trainer Dashboard*
  are now an even **2×2 grid**, all identical size. Full-width under the title on
  mobile; beside the title on wide screens.
- **Week/Day controls**, now in a clean stacked order:
  1. **Add Weeks** | **Insert Week** (equal, side by side)
  2. **Copy Day** | **Copy Week** (equal, side by side)
  3. **Week picker** (full width)
  4. **Day picker** (day tabs + add/remove day)
- Every action button is the **same width** (uniform 2-column grid).
- Each dropdown now opens as a **full-width panel directly below the buttons**, so
  a menu can never be pushed off-screen or land ragged.
- The controls bar is **no longer sticky** — it scrolls away with the page so you
  get the full screen height while building.

## 2. Copy Day

New **Copy Day ▾** button next to Copy Week.

- Copies the **current day's** blocks onto **another day in the same week**.
- Pick the target from a dropdown listing the other days (Day 1…N, based on your
  days-per-week). It hides the day you're already on.
- (Copy Week still handles copying a day *across weeks*.)
- Note: copying **overwrites** the target day's contents, same as Copy Week.

## 3. Global exercise search

The exercise picker's **search bar is now global** for every block type. Type a
term in *any* block — Warm Up, Cool Down, Mobility, Conditioning, or strength —
and it searches the **entire library**.

- Previously search was scoped to the block's own pool, which is why searching
  "internal" in a Warm Up block found nothing (the 90/90 hip drills live under
  Mobility / Legs-Corrective).
- Trade-off (intentional): you can now pull any exercise into any block. Browsing
  the category tabs stays scoped per block type.

## 4. "Write Your Own" exercises (Builder → Tracker)

Two new quick-add buttons in the exercise picker insert **client-filled
placeholders**:

- **✏️ Write Your Own Exercise** — client enters name + sets / reps / weight / time
- **🏃 Choose Your Own Cardio** — client picks a machine (dropdown) + enters
  duration / distance / time

How it flows:
- **In the builder:** the coach drops in the placeholder and sees a labeled stub
  with one optional **note for the client**. No sets/reps to configure.
- **In the tracker:** the card is fully editable — the client types the exercise
  name (it shows in the card header) and fills in their own numbers. Cardio gets a
  native machine dropdown (Treadmill, Rower, Assault Bike, … Jump Rope).
- Everything the client enters (name, machine, numbers) is captured in the
  workout log.
- No backend change needed — the `isUserDefined` flag rides along in the program
  JSON.

---

## 5. New exercises & sections

**Individual exercises**
- **Trap Bar Deadlift** → Legs / Barbell
- **Banded No Money** → Shoulders / Corrective
- **Close Grip Pushups** → Triceps / Other
- **Child's Pose** → Warm Up / Cool Down (Stretching)

**New "Flexibility" sections** (static-stretch holds — distinct from dynamic
mobility and the Stretching presets):
- Added to **Warm Up** and **Cool Down** (Cool Down mirrors Warm Up automatically)
- Added to the **Mobility** library as its own category (with 3 preset routines)
- Reuses existing stretch videos where available; the rest are ready for clips.

**Ground-flow / animal locomotion** added to Mobility → Full Body Mobility:
- Bear Walk (+ Straight-Leg + Lateral), Crab Walk, Crab Reach, Beast-to-Crab,
  Duck Walk, Spiderman Crawl, Scorpion Reach (prone/supine), Inchworm Walkout.

**Cardio / Conditioning**
- Fixed the garbled **"Jacob's Ladder"** spelling (encoding bug).
- Added **Prowler** and **Sled Work** to Cardio Equipment.
- Added combo conditioning pieces: **Sandbag Loads + Farmer Carry**, **Kettlebell
  Swing + Sprint**, **Sled Push + Sprint**, **Battle Ropes + Burpees**,
  **Wall Ball + Row**.

---

## 6. Tracker: in-app stats & 1RM editing

Clients can now adjust their lifts **without logging out**.

- The tracker's profile/stats widget now edits **bench / squat / deadlift / clean
  1RMs** alongside height / weight / age.
- Saving **recalculates prescribed weights live** on the page — no logout/login.
- Persisted to the backend so the change sticks across reloads (new
  `update-user-stats` endpoint; only writes fields you actually fill in, so a
  blank never wipes a stored max).

---

## 7. Program management & safety

- **Custom access codes** — when saving a new program you can type the 4-digit
  code you want (or leave blank for a random one). Collisions are rejected, so you
  can't accidentally create a duplicate.
- **Delete programs** — Manage Programs now has a **Delete** button. It's a
  **two-step guard**: the first click arms an inline "Delete? Yes / Cancel", and
  confirming hits a final "Are you sure?" — so it's never a one-tap accident.
  (Soft delete: hidden from your list, reversible at the database level; clients
  on that code lose access.)
- **Data fix** — program code **1081** ("Legacy Athletes") was restored from the
  accidentally-duplicated **4682** save (its contents were copied back into 1081,
  keeping 1081's own code and client assignments; both versions were backed up
  first).

---

## Backend endpoints added (`/api/workout/`)
- `update-user-stats.php` — in-app update of 1RM maxes + body stats.
- `delete-program.php` — soft-delete a program (ownership-checked).
- `save-program.php` — now accepts an optional `desiredCode` (validated, rejects
  collisions).

## Deploy notes
- Builder + Tracker auto-deploy on push to `main` (Netlify). The Tracker is a PWA —
  hard-refresh / let the service worker update to pull a new build.
- Backend deploys to EC2 (`/opt/bestrongagain/`), service
  `bestrongagain.service`.

_Last updated: 2026-05-31._
