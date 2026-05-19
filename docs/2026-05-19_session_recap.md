# Session Recap — 2026-05-19

Continuation of the 2026-05-18 session. Today the focus shifted from polish to
**turning the platform into a paid-funnel retention loop** — member dashboard
becomes a destination, the tracker becomes a soft funnel for upgrades, every
loose-end UX gap from the live $20 funnel got closed.

| # | Area | Repos | Headline commit |
|---|---|---|---|
| 1 | Trainer dashboard $X/mo plan badges | `bsa-coach-platform` + `react-trainer-dashboard` | `6545f27` + `f9cb909` |
| 2 | Landing page tier rewrite | `bsa-coach-platform` | `7dc8e25` + `01da799` |
| 3 | Stripe Billing Portal + Password Reset | `bsa-coach-platform` | `09758ac` |
| 4 | FriendChat 👀 sneak peek (friend stats) | `WorkoutTracker` + `bsa-coach-platform` | `9c23eef` + `dbe13d7` |
| 5 | Member Dashboard retention overhaul | `bsa-coach-platform` + 2 others | `e54d625` → `720a550` → `6a57f7a` → `0d880d6` |
| 6 | Tracker → Member funnel (Dashboard button + dedupe) | `WorkoutTracker` + `bsa-coach-platform` | `7bf0c0e` + `45af421` |

---

## 1. Trainer Dashboard — $X/mo plan badges

**Goal:** at-a-glance see who's on which paid tier from the trainer dashboard
client list.

- **Backend** (`bsa-coach-platform`): `get-clients.php` and `/api/coaches/workout-clients/<id>` now LEFT JOIN users by email and LATERAL-JOIN subscriptions to return `plan_tier`, `plan_amount_cents`, `plan_status` per client. Active subscription wins; falls back to most recent if no active.
- **Frontend** (`react-trainer-dashboard`): small color-coded pill next to the client name when `plan_status === 'active'`:
  - Basic ($20) → gray
  - Coached ($200) → purple
  - Elite ($400) → amber
- Hidden for free starters / cancelled / coach-assigned-no-pay clients.

---

## 2. Landing page tier rewrite

Repositioned the three tiers to push Coached / Elite by making Basic feel
intentionally low-touch instead of "all-the-features-for-cheap":

- **Basic — "I got this. Just give me a program."** Daily program, video library, best-effort chat, "Minimal hand-holding."
- **Coached — "Build something for me, check in now and then."** Program is **specific to you**, periodic check-ins, priority chat, form review **when you ask**.
- **Elite — "In the trenches with me."** **Weekly check-ins** are the signature (moved from Coached), weekly tweaks, unlimited form reviews + nutrition, 1:1 monthly video, direct line.

Also softened the hero (no more "message me direct" — that promised too much for Basic) and the section lead is now *"Three levels. Pick how much of me you want."*

**Layout fix:** the bold `<strong>` inside a flex `<li>` was making text fragments column-stack on mobile. Wrapped bullet content in a span so flex sees one item.

---

## 3. Stripe Billing Portal + Self-serve password reset

Two real gaps closed:

### Billing Portal
- `POST /api/stripe/billing-portal` — authed, reads `users.stripe_customer_id`, creates a Stripe-hosted portal session, returns the URL.
- **Manage Subscription / Cancel** button on the member dashboard's Your Plan card, visible only when on a paid tier.
- No new webhook work — `customer.subscription.deleted` was already wired.

### Forgot Password
- `migrations/004_password_resets.sql` — `password_resets` table; stores **SHA-256 of token** (not the token itself) so a DB leak can't replay in-flight resets. 1-hour TTL.
- `POST /api/auth/forgot-password` — always returns 200 (no email-enumeration leak). Token + email send via `email_helper.send_password_reset_email`.
- `POST /api/auth/reset-password` — validates token, sets new password.
- New `/forgot-password` and `/reset-password` pages. "Forgot password?" link added to Login.

The FAQ on the landing page now matches what the dashboard can actually do.

---

## 4. FriendChat — 👀 Sneak Peek friend stats

When viewing a friend's chat thread, tap the eye button in the header to see
their **today + last 7 days** training volume:

```
👀 SNEAK PEEK
Today      1 session · 🏋️ 4,200 lbs · 🔥 320 cal
This week  3 sessions · 🏋️ 12,500 lbs · 🔥 980 cal · ⏱️ 25 min
```

- **Backend**: `GET /api/social/friend-stats/<friend_user_id>` — auth required, returns aggregate volume_stats. Gated by `user_friendships.status = 'accepted'` in either direction.
- **Frontend**: inline-expanding panel below the thread header. Auto-fetches on first open, caches per friend.
- Privacy: exercise specifics (sets/reps/exercise names) are **not** exposed — only the aggregate signal.

UX from a real user this session: *"It would be cool to see if my friend is working harder than me."* Built. Glen connected the idea to existing workout_logs data instead of chasing wearable APIs.

---

## 5. Member Dashboard — retention overhaul

The big one. Member dashboard went from "place you land after Stripe and never
come back" to a destination with its own data + content. Multiple iterations
based on Glen's product calls.

### Schema (`migrations/005_member_dashboard.sql`)
- `coach_summaries (id, user_id, coach_id, period, body, created_at)` — AI summaries the coach explicitly pushes to a member.
- `workout_logs.body_weight_lbs` — optional numeric column, 50–700 lb sanity range.

### Backend (new `members.py` blueprint)
- `GET /api/members/dashboard` — returns lifetime totals + last-12-weeks weekly aggregates (tonnage / calories / cardio / sessions) + last-90-days bodyweight series.
- `GET /api/members/coach-summaries` — archive of pushed AI summaries.
- `POST /api/coaches/share-summary` (in `coaches.py`) — coach pushes a summary by `{client_email, period, body}`.
- `workout_api.log-workout` extended to accept `body_weight_lbs`.

### Trainer dashboard
- AI Coach Summary panel now has a **📌 Send to Dashboard** button next to Email / Copy / Regenerate. You generate, edit, then push the version you like to the member's dashboard.

### Tracker
- Optional **⚖️ Today's weight (lb)** tile at the top of the Log Workout screen. Empty = no log. Resets after each successful workout log.

### Member dashboard sections
1. **Your Numbers** — Lifetime tiles + tonnage / calorie / cardio charts (mini SVG line, no chart-lib dependency).
2. **Tonnage milestones** ("You've lifted a tank") — gradient callout card with achieved milestone + next milestone + progress bar. 12-step ladder from Smart car (500 lb) to Eiffel Tower (5M lb).
3. **Bodyweight** — Hume-style chart: bold EWMA-smoothed trend line (α=0.1, ~10-day half-life), faded daily dots showing raw readings, headline "Trend weight" + N-day delta with directional color.
4. **Coach Summaries** — archive of weekly + monthly recaps pushed from the trainer dashboard. Empty state if nothing pushed yet.
5. **Community** — direct link to `bestrongagain.com/blog/`.

### Pivot mid-build: drop the tier gates

Initial build had tier-gated sections (locked calories chart for Basic, locked summaries for everyone below Coached, etc.) with "🔒 Upgrade with X" teases. Glen called the gates off:

> "It looks bad and we need to give stuff away to even keep the $20/month coming back."

Removed all `LockedTease` rendering. Every tier sees every chart. Coach summaries section shows "Nothing here yet" empty state for users who haven't received any (Basic members usually) instead of a paywall. Upgrade path remains via the Your Plan card. The bet: retention from "my numbers are going up" wins more upgrades over time than friction from "you can't have this."

---

## 6. Tracker → Member funnel

The 27 Bluehost-imported users (Casey, Brian, Nick, etc.) and the historical
access-code-only tracker users had no path into the paid product. Built one.

### `POST /api/auth/check-member`
Public unauthenticated lookup: given an email, returns `{is_member: bool}`
(active subscription = true). Email-leak surface no worse than the existing
forgot-password endpoint. Smoke-tested:
- Jace Mullett (paid basic, today) → `true` ✓
- Finn Fox (registered, never paid) → `false` ✓

### Tracker 📊 Dashboard button
- Lives in the program header next to the Cast button.
- On tap: calls `check-member` for the current email.
- If member → opens `app.bestrongagain.com/dashboard` in a new tab.
- If not → in-tracker modal with the upsell pitch:
  - Headline: "Your numbers, in one place."
  - 5 bullets pitching the actual member-dashboard features (tonnage milestones, charts, weight trend, coach summaries, self-serve cancel)
  - **Become a Member — $20/mo** (opens `/register?tier=basic&email=...`)
  - **Already a member? Log in →** (opens `/login`)

### Dedupe + welcome-back routing
Existing email on register no longer dead-ends with a red "Email already registered" banner:
- Backend returns structured `{code: 'account_exists', email, message}` on conflict.
- `api.jsx` request wrapper now attaches the structured payload to thrown Errors so callers can branch on `err.code`.
- Register.jsx detects `account_exists` and redirects to `/login?email=X&reason=upgrade&tier=basic`.
- Login.jsx pre-fills email, shows a green welcome-back banner with a Reset Password link, and **auto-fires Stripe checkout** for the carried-through tier after successful login.

So Casey Sodolski's path now: tracker → tap Dashboard → "Become a Member" → /register (email pre-filled) → 409 detected → /login with banner → log in OR reset password → Stripe checkout for Basic → his original `users` row (UUID unchanged, all access codes + workout history intact) gets the subscription stamped on top.

**No duplicate user rows.** The UNIQUE email constraint enforces it.

### Backfill (deferred)
Audit showed only 1 of 100+ member rows has a blank name (the system
`tv-display` account). Glen's hypothetical "Casey doesn't have his name" isn't
real — Bluehost import preserved names. Skipped at-register-time backfill
because of the unauthenticated-write attack surface for blank-name rows.
Decision: only build a "complete your profile" post-auth nudge when a real
need shows up.

---

## Diagnostics + investigations

### `tools/check_member.py`
Generalized version of yesterday's `check_finn.py`. Cross-references a user
against `users` + `subscriptions` + Stripe customers + checkout sessions +
payment intents. Run with `USER_QUERY=<name-or-email-fragment>`.

### Finn Fox audit
Definitively confirmed: registered (today 11:03 UTC, referred by Glen) but
**never paid**. No Stripe customer, no checkout session, no payment intent
with his email. Earlier my speculation about a "second person" drop-off was
wrong — Finn is the only net-new register-without-pay case in the system.
The 27 other unpaid members are all Bluehost imports with identical
`2026-05-14 01:41:12.393864` timestamps. Funnel works — Finn just didn't have
his card ready, plans to come back.

### Jace Mullett confirmation
Paid signup verified end-to-end: user row created today 23:20 UTC, Stripe
customer `cus_UXfotNTsF6DQfv`, subscription `sub_1TYaSZIVieVjOXW41f0qfexx`
($20 basic active, 2026-05-18 → 2026-06-18), program 2 assigned. Webhook
fired correctly. Three real-money successful runs of the paid flow today
(Glen's test x2 + Jace).

### Background cancel-button render check
EC2-side script that flipped `glen+test`'s subscription to active, minted a
JWT, hit `/api/auth/me`, confirmed `tier='basic'` and that the frontend
conditional renders the Manage Subscription / Cancel button, then reverted.
Test ran in the background; reported tier returned correctly.

---

## Schema deltas applied today

```sql
-- 004_password_resets.sql
CREATE TABLE password_resets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(128) NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 005_member_dashboard.sql
CREATE TABLE coach_summaries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  coach_id UUID REFERENCES users(id) ON DELETE SET NULL,
  period TEXT NOT NULL CHECK (period IN ('weekly', 'monthly')),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE workout_logs ADD COLUMN body_weight_lbs NUMERIC(5,1);
```

Both already applied on production RDS.

---

## Audit pre-deploy for future me

- `bsa-coach-platform` is on `master` branch (not `main`). Pushes go to `master`.
- `/opt/bsa-chatbot/` on EC2 is **not** a git checkout — deploy via scp.
- `/opt/bestrongagain/` Flask app — deploy via scp + `sudo systemctl restart bestrongagain.service`.
- Frontend deploy: `npm run build` → scp `dist/*` to `/var/www/bestrongagain/` (no Netlify for the platform app).
- Tracker + Trainer Dashboard + Workout Builder all Netlify auto-deploy.

---

## Commit hashes

```
react-trainer-dashboard  f9cb909  feat(dashboard): show $X/mo plan badge next to client name
bsa-coach-platform       6545f27  feat(workout-clients): return plan_tier + plan_amount_cents + plan_status
bsa-coach-platform       7dc8e25  copy(landing): rewrite tier positioning to push Coached/Elite
bsa-coach-platform       01da799  fix(landing): wrap bullet text in span so <strong> doesn't split flex
bsa-coach-platform       09758ac  feat: Stripe Billing Portal + self-serve password reset
bsa-coach-platform       dbe13d7  feat(social): /friend-stats/<user_id> for sneak-peek between friends
WorkoutTracker           9c23eef  feat(FriendChat): sneak-peek a friend's daily and weekly volume
bsa-coach-platform       e54d625  feat(member-dashboard): tier-gated stats + shared coach summaries + bodyweight
react-trainer-dashboard  1267d6d  feat(AISummary): Send to Dashboard button
WorkoutTracker           3197a18  feat(tracker): optional bodyweight tile on Log Workout screen
bsa-coach-platform       720a550  copy(member-dashboard): drop tier gates on stats + summaries
bsa-coach-platform       6a57f7a  feat(member-dashboard): Hume-style weight chart
bsa-coach-platform       0d880d6  feat(member-dashboard): tonnage milestones — "you've lifted a tank"
bsa-coach-platform       2ee1243  feat(auth): /api/auth/check-member — public membership lookup
WorkoutTracker           7bf0c0e  feat(tracker): 📊 Dashboard button + soft upsell modal
bsa-coach-platform       45af421  fix(auth): dedupe existing emails on register; route to login with banner
```

---

# Late-session continuation

Roughly 12 more commits across the three repos. The dashboard went from
"flat list of access-code rows" to a real management surface — commissions
that actually count, one card per client, cross-program journey awareness,
and a clean timezone story for east-of-UTC users.

| # | Area | Repos | Headline commit |
|---|---|---|---|
| 7 | Coach Dashboard $0 bug — 3-bug stack | `bsa-coach-platform` | `bb61ebb` |
| 8 | Hide Connect banner for platform owner | `bsa-coach-platform` | `194c787` |
| 9 | Trainer dashboard: name backfill + paid-first sort | `bsa-coach-platform` + `react-trainer-dashboard` | `0b720bc` + `60a9d3f` |
| 10 | One card per client + Other Programs | `react-trainer-dashboard` | `46a8855` → `c68f430` → `547d45c` |
| 11 | Cross-program "bridge-gap" | `bsa-coach-platform` + `react-trainer-dashboard` | `36e52fe` + `e9d918f` |
| 12 | "Not Started" triage chip | `react-trainer-dashboard` | `e632f4c` |
| 13 | Local-calendar timezone fix | all three repos | `3a17281` + `c9e7b52` + `a1e8730` |

---

## 7. Coach Dashboard showed $0 — triple bug stack

Glen reported his Coach Dashboard tile said "This Month $0 / All Time $0"
even though Jace's $20 paid sub was sitting in the DB. Diagnosed three
independent bugs all reinforcing the same symptom:

1. **`calculate_commissions()` never created a coach-earnings row.** Engine
   only wrote a platform-fee row and (when applicable) an upline-referral
   row. The coach's 80% — the whole point of the system — was silently
   dropped. `commissions` table had been empty since launch.
2. **API/UI key mismatch.** `/api/coaches/dashboard/<id>` returned
   `earnings.total_paid` + `earnings.total_pending`. The CoachDashboard
   tiles read `summary.this_month` + `summary.all_time`. Undefined → $0.
3. **Earnings history filter** required `status = 'paid'`. Nobody has
   Stripe Connect onboarded yet, so nothing transitions from pending → paid.

Rewrote the engine to record THREE rows per sale that sum to 100%:
- **Coach 80%** to the seller (always)
- **Platform 10%** routed to the actual platform-owner user_id (resolved
  by `role = 'admin'`) instead of the previous `"PLATFORM"` sentinel
- **Recruiter 10%** to the upline coach if one exists; otherwise also
  routes to the platform owner so 100% of revenue gets recorded against
  a real user

Concrete cases the model now handles:
- **Your own client:** 80 + 10 + 10 = 100% all to you
- **Coach X recruited by you, X's client:** X gets 80, you get 10 platform
  + 10 recruiter = 20%
- **Coach Y recruited by X, Y's client:** Y gets 80, X gets 10 recruiter,
  you get 10 platform — split correctly across the tree

Dashboard endpoint now returns `this_month` + `all_time` (in cents) summed
across paid AND pending. Tiles show real revenue immediately. Yellow
footnote "$X pending Stripe Connect payout" appears when pending > 0 so
recruited coaches see what unlocks when they onboard.

Backfill migration `006_backfill_jace_commission.sql` (idempotent) inserted
the three missing rows for Jace's existing $20 charge. Verified Glen now
sees $20 across the tiles.

## 8. Hide Connect banner for the platform owner

The "Set Up Payouts — Connect your Stripe account" banner kept showing for
Glen because his `stripe_onboarded = false`. But Glen as the platform owner
doesn't need a separate Stripe Connect Express account — Jace's $20 lands
directly in the main platform Stripe account. There's no transfer to wait
on for HIS earnings.

Both the banner and the pending-payout footnote now gate on
`user.role !== 'admin'`. Recruited coaches still see them correctly.

## 9. Trainer dashboard: name backfill + paid-first sort

**Jace shows up as just `jacemullett@gmail.com`, no name.** Diagnosed:
his `workout_user_position.user_name` was empty string because the welcome
email's tracker link (`?code=X&email=Y`) had no `&name=Z` param. When he
tapped it, `load-program.php` had no name to store. Meanwhile the
platform's `users` table knew him as "Jace Mullett."

Three fixes:
- `coaches.py` + `workout_api.py` SQL now COALESCEs `workout_user_position.
  user_name` over `users.first_name + last_name`, so the platform's name
  shows through even when the tracker never captured one.
- `email_helper.py`: both `send_subscription_email` and
  `send_welcome_email` now URL-encode and include `&name=` in the tracker
  link so future signups capture the name on first load.
- One-time SQL backfilled 22 historical `workout_user_position` rows with
  blank names — pulled from `users.first_name + last_name`.

**Paid clients now sort to the top** of the trainer dashboard regardless
of the chosen secondary sort (`recent` / `name` / `completion`). Paid +
unpaid each get the chosen sort within their group. Glen's $20 client
lands at position #1 by default.

## 10. One card per client + Other Programs

The dashboard listed 90 clients because each `(access_code, user_email)`
row got its own card. Users like Jackson Knaus with 4 programs showed up
4 times. Glen wanted: one card per person, with their other programs
nested inside View Details.

Client-side group in `App.jsx`: `groupedClients` useMemo collapses by
`user_email`, picks the most-recently-active program as primary, attaches
the rest as `other_programs[]`. TriageFilters counts now reflect unique
people. The card itself shows the primary's data; the expanded View
Details has a compact "Other Programs (N)" section at the bottom — each
row is a tap-to-focus button (program name, week/day, access code,
workout count, last logged date).

Then debugged THREE separate "card collapses when switching" bugs:

1. **Temporal-dead-zone reference error.** `handleSwitchProgram` referenced
   `handleViewDetails` in its `useCallback` deps but was declared *before*
   `handleViewDetails`. JS threw on render. Moved the order; dropped a
   `setTimeout` indirection that was masking the problem.
2. **`isExpanded` compared access_codes.** After grouping, the card's
   identity is the user_email, but the expansion check still compared
   access_codes. Tapping an Other Program changed expandedClient's
   access_code → mismatch → ClientDetails unmounts. Fixed:
   `isExpanded(c) => expandedClient?.user_email === c.user_email`. Also
   added `opts.skipToggle` flag to `handleViewDetails` so program-swap
   calls bypass the same-email toggle-collapse path.
3. **No anchor scroll on switch.** Switching while scrolled to the bottom
   of the panel (Other Programs is at the bottom) meant the new program's
   THIS WEEK hero was off-screen above. Added a ref + scrollIntoView in
   `ClientDetails`'s useEffect on `client.access_code` change, wrapped in
   `requestAnimationFrame`.

Smart X back-stack: when the X close button is tapped while viewing a
non-primary program, focus hops back to the primary (the user's current
workout) instead of closing the card. Second X closes. Matches phone-back
intuition.

## 11. Cross-program "bridge-gap"

Member dashboards already aggregate across programs by `user_email`. The
trainer dashboard didn't — it was scoped to one program at a time. When a
client moves from Program X to Program Y, the trainer-side data should
keep telling the whole story.

`/api/workout/get-client-details.php` now returns a `lifetime` block:

```json
"lifetime": {
  "sessions": 29, "tonnage": 32847, "calories": 18450, "cardio_min": 42,
  "program_count": 4,
  "programs": [
    { "access_code", "program_name", "sessions", "first_logged",
      "last_logged", "tonnage", "calories", "is_current" },
    ...
  ]
}
```

Base table is `workout_user_position` (not `workout_logs`), so a program
the client was assigned but never trained on still appears with
`sessions: 0, is_current: true`. That signal is exactly what flags a
transition.

UI: small indigo "Across all programs" strip on the expanded panel,
rendered only when the user has >1 program. Sits between the THIS WEEK /
Lifetime hero pair and the green Progress Highlights row.

**AI Coach Summary** prompt now includes a `TRAINING JOURNEY` block with
every program the client has been on (dates, session counts, `[CURRENT]`
tag) plus a `HOW TO USE THIS` instruction telling the LLM to recognize
transitions: if the current program is freshly assigned (0–2 logs),
acknowledge what was just finished, introduce the new focus. No hard
"is this a transition" logic — the LLM reads the structured data and
phrases it naturally.

## 12. "Not Started" triage chip

A new triage state for clients who got assigned a program but have **zero
logs across ALL their programs**. Catches:
- Brand-new paid signups (Jace lives here today, 0 logs on his starter)
- Anyone Glen handed an access code who never showed up
- The Tanner-on-5K-Comeback pattern at the *user* level (though Tanner
  himself stays "Active" because he trained on a different program)

Mechanics:
- `App.jsx` grouping now computes `user_workout_count = sum(primary +
  others)`
- `progress.js triageBucket` checks `user_workout_count === 0 AND
  d == null` first, before `new` / `check_in` / etc.
- TriageFilters renders the chip in orange between **All** and
  **Needs Check-In** — visually it sits in the "needs your attention"
  cluster without competing with the red urgency of check-in.

## 13. Local-calendar timezone fix

Carter Tomich's 11pm CT workout showed as "Today" instead of "Yesterday"
because `CURRENT_DATE` server-side is UTC. 11pm CT = 4am next-day UTC, so
`workout_date` got stamped a day forward of his actual calendar.

Three-layer fix:

1. **Tracker** (`WorkoutTracker/src/App.jsx`): every log-workout payload
   now includes `workout_date: <YYYY-MM-DD in browser-local TZ>`, built
   from `getFullYear/Month/Date`.
2. **Backend** (`workout_api.py log-workout`): accepts an optional
   `workout_date` (validated against `^\d{4}-\d{2}-\d{2}$`), falls back to
   `CURRENT_DATE` for legacy callers. Both INSERT and UPDATE paths
   respect it.
3. **Dashboard frontend** (`progress.js daysSince`, `helpers.js formatDate`):
   switched from 24-hour math to calendar-day comparison in the viewer's
   local timezone. A bare `"YYYY-MM-DD"` string is parsed
   component-wise (not via `new Date(str)` which UTC-anchors) so
   Today/Yesterday labels stay correct.

Going forward, every user's workouts are dated in their own calendar.
Existing UTC-stamped rows in the DB still render correctly via the new
client-side comparison as long as the date stored is the date the user
experienced. (Historical evening-CT workouts that got bumped to next-day
UTC remain off by one in the DB; backfill is available if Glen wants it,
not done by default.)

Also fixed a stale-closure bug on the tracker's `handleLogWorkout`
useCallback — `todayWeight` wasn't in the deps array so the bodyweight
the user typed could be a stale render's value. Added the dep.

## Real-world validation moments

- **Jace Mullett — paid signup verified end-to-end.** $20 Basic active,
  Stripe customer `cus_UXfotNTsF6DQfv`, subscription
  `sub_1TYaSZIVieVjOXW41f0qfexx`, program 2 assigned, welcome email sent,
  webhook fired correctly. Three real-money runs of the paid flow today
  (Glen's tests x2 + Jace).
- **Tanner / 5K Comeback story.** Trainer dashboard showed 0 logs on the
  5K Comeback — verified via DB. Glen then shared the text thread with
  Tanner that explained it: Tanner asked for "barbell bench and squat,"
  Glen sent him 7744 instead. So the dashboard correctly surfaced the
  ghosted program; the AI Summary now naturally recognizes it as a
  transition; and the "Not Started" triage chip will surface that
  pattern proactively the next time it happens.

---

## Commit hashes — late-session continuation

```
bsa-coach-platform       bb61ebb  fix(commissions): record coach 80% + route platform/upline to owner; backfill Jace
bsa-coach-platform       194c787  fix(coach-dashboard): hide Connect Stripe banner for platform owner
bsa-coach-platform       0b720bc  fix: trainer dashboard now shows client name even when tracker has none
react-trainer-dashboard  60a9d3f  feat(dashboard): paid clients sort to the top regardless of secondary sort
react-trainer-dashboard  46a8855  feat(dashboard): one card per client, list other programs in View Details
react-trainer-dashboard  2f79fb7  fix(dashboard): tapping Other Programs no longer collapses the card
react-trainer-dashboard  c68f430  fix(dashboard): card no longer collapses when switching Other Programs
react-trainer-dashboard  547d45c  feat(dashboard): scroll-to-top on program switch + smart X back-stack
bsa-coach-platform       36e52fe  feat(get-client-details): cross-program lifetime block + per-program history
react-trainer-dashboard  e9d918f  feat(dashboard): bridge-gap — cross-program totals + AI transition awareness
react-trainer-dashboard  e632f4c  feat(dashboard): "Not Started" triage chip — zero-logs-anywhere users
bsa-coach-platform       3a17281  fix(log-workout): accept tracker's local calendar date
WorkoutTracker           c9e7b52  fix(tracker): send local calendar date with log-workout
react-trainer-dashboard  a1e8730  fix(dashboard): calendar-day comparison for Today/Yesterday labels
```

---

## Migrations applied this continuation

```sql
-- 006_backfill_jace_commission.sql (idempotent)
-- Inserts the 3 missing commission rows for Jace's $20 charge
-- (coach 80% + platform 10% + unclaimed-upline 10%), all to Glen.
```

Sidecar SQL run on EC2 (no migration file):
```sql
-- Backfill workout_user_position.user_name from users.first_name + last_name
-- where blank. 22 rows updated.
UPDATE workout_user_position up
SET user_name = TRIM(CONCAT(u.first_name, ' ', u.last_name))
FROM users u
WHERE LOWER(up.user_email) = LOWER(u.email)
  AND (up.user_name IS NULL OR TRIM(up.user_name) = '')
  AND TRIM(CONCAT(u.first_name, ' ', u.last_name)) <> '';
```
