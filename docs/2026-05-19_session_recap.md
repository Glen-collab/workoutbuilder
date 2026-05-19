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
