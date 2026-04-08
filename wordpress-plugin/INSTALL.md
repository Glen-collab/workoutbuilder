# BSA Workout Builder — WordPress Plugin Install

## Files

```
wordpress-plugin/
  bsa-workout-builder/
    bsa-workout-builder.php    ← main plugin file
    templates/
      landing.php              ← signup page
      success.php              ← post-payment page
    assets/
      frontend.js              ← checkout form JS
```

## Step 1: Upload the Plugin

Stripe keys are already baked into the plugin file — no wp-config.php editing needed.

1. Zip the `bsa-workout-builder/` folder
2. In WordPress admin: **Plugins → Add New → Upload Plugin**
3. Upload the zip and click **Activate**

Or manually: FTP/SFTP the `bsa-workout-builder/` folder into `wp-content/plugins/`

## Step 2: Create the Two Pages

### Page 1: Landing Page
- **WordPress Admin → Pages → Add New**
- Title: `Workout Builder`
- Slug: `workout-builder`
- Add a **Shortcode block** with: `[bsa_workout_builder]`
- Publish

### Page 2: Success Page
- **WordPress Admin → Pages → Add New**
- Title: `Workout Builder Welcome`
- Slug: `workout-builder-welcome`
- Add a **Shortcode block** with: `[bsa_workout_builder_success]`
- Publish

## Step 3: Add to Navigation Menu

- **WordPress Admin → Appearance → Menus** (or the Full Site Editor if using block theme)
- Add a **Custom Link**:
  - URL: `/workout-builder/`
  - Link Text: `Workout Builder`
- Place it in the Primary/Header menu
- Save

## Step 4: Set Up Stripe Webhook

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Endpoint URL: `https://bestrongagain.com/wp-json/bsa-wb/v1/stripe-webhook`
4. Select these events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
   - `invoice.paid`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Update the `BSA_STRIPE_WEBHOOK_SECRET` in `wp-content/plugins/bsa-workout-builder/bsa-workout-builder.php` with this new secret

**Important:** This is a NEW webhook endpoint (separate from Polly Connect). You need a new signing secret for this endpoint. Your existing Polly webhook stays as-is.

## Step 5: Plug In Access Codes (when ready)

Once you've built the 3 starter programs in the workout builder and saved them:

1. Open `wp-content/plugins/bsa-workout-builder/bsa-workout-builder.php`
2. Find the `BSA_WB_CODES` constant near the top
3. Fill in the access codes:

```php
define('BSA_WB_CODES', [
    'bodyweight'  => 'ABC123',   // Beginner — bodyweight program
    'bands'       => 'DEF456',   // Intermediate — bands + bodyweight
    'small_gym'   => 'GHI789',   // Advanced — small gym
]);
```

Until codes are set, the success page shows a "your code is being prepared" message instead.

## Verify It Works

1. Visit `bestrongagain.com/workout-builder` — you should see the landing page
2. Enter a test email and pick a level
3. You should be redirected to Stripe Checkout
4. After payment, you land on `/workout-builder-welcome/` with your access code
5. Check **WordPress Admin → WB Subscribers** to see the subscriber list

## Admin Dashboard

After activating the plugin, you'll see **WB Subscribers** in the WordPress admin sidebar. This shows:
- All subscribers with email, fitness level, status, and signup date
- Current access code configuration
