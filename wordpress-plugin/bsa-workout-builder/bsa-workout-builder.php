<?php
/**
 * Plugin Name: BSA Workout Builder
 * Description: Stripe subscription checkout for the Be Strong Again Workout Builder app ($20/month personal training).
 * Version: 1.0.0
 * Author: Be Strong Again
 * Text Domain: bsa-workout-builder
 */

if (!defined('ABSPATH')) exit;

// ─── Configuration ───────────────────────────────────────────────────────────
// Set these in wp-config.php:
//   define('BSA_STRIPE_SECRET_KEY',      'sk_live_...');
//   define('BSA_STRIPE_PUBLISHABLE_KEY', 'pk_live_...');
//   define('BSA_STRIPE_WEBHOOK_SECRET',  'whsec_...');
//
// Or they fall back to these constants (update before going live):
if (!defined('BSA_STRIPE_SECRET_KEY'))      define('BSA_STRIPE_SECRET_KEY',      '');
if (!defined('BSA_STRIPE_PUBLISHABLE_KEY')) define('BSA_STRIPE_PUBLISHABLE_KEY', '');
if (!defined('BSA_STRIPE_WEBHOOK_SECRET'))  define('BSA_STRIPE_WEBHOOK_SECRET',  '');

// ─── Starter Program Access Codes ────────────────────────────────────────────
// Plug these in once you've built the programs in the workout builder.
// The user picks a fitness level at checkout; after payment they receive the
// matching access code + link to the app.
define('BSA_WB_CODES', [
    'bodyweight'  => '',   // Beginner — bodyweight program access code
    'bands'       => '',   // Intermediate — bands + bodyweight access code
    'small_gym'   => '',   // Advanced — small gym access code
]);

// App URL where clients load their programs
define('BSA_WB_APP_URL', 'https://bestrongagain.com/workout-tracker/');

// ─── Stripe API helpers ──────────────────────────────────────────────────────

function bsa_wb_stripe_request($endpoint, $data = [], $method = 'POST') {
    $url = 'https://api.stripe.com/v1/' . $endpoint;

    $args = [
        'headers' => [
            'Authorization' => 'Bearer ' . BSA_STRIPE_SECRET_KEY,
            'Content-Type'  => 'application/x-www-form-urlencoded',
        ],
        'timeout' => 30,
    ];

    if ($method === 'POST') {
        $args['body'] = $data;
        $response = wp_remote_post($url, $args);
    } else {
        $url .= '?' . http_build_query($data);
        $response = wp_remote_get($url, $args);
    }

    if (is_wp_error($response)) {
        error_log('BSA WB Stripe error: ' . $response->get_error_message());
        return null;
    }

    return json_decode(wp_remote_retrieve_body($response), true);
}

// ─── Get or create the Stripe product + price ────────────────────────────────

function bsa_wb_get_price_id() {
    $price_id = get_option('bsa_wb_stripe_price_id');
    if ($price_id) return $price_id;

    // Create product
    $product = bsa_wb_stripe_request('products', [
        'name'        => 'Workout Builder — Personal Training',
        'description' => 'Personalized training programs with exercise videos, progressive programming, and trainer support.',
    ]);

    if (!$product || empty($product['id'])) {
        error_log('BSA WB: Failed to create Stripe product');
        return null;
    }

    // Create $20/month recurring price
    $price = bsa_wb_stripe_request('prices', [
        'product'               => $product['id'],
        'unit_amount'           => 2000, // $20.00 in cents
        'currency'              => 'usd',
        'recurring[interval]'   => 'month',
    ]);

    if (!$price || empty($price['id'])) {
        error_log('BSA WB: Failed to create Stripe price');
        return null;
    }

    update_option('bsa_wb_stripe_product_id', $product['id']);
    update_option('bsa_wb_stripe_price_id', $price['id']);

    return $price['id'];
}

// ─── Shortcode: [bsa_workout_builder] ────────────────────────────────────────

add_shortcode('bsa_workout_builder', 'bsa_wb_render_page');

function bsa_wb_render_page() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/landing.php';
    return ob_get_clean();
}

// ─── Shortcode: [bsa_workout_builder_success] ────────────────────────────────

add_shortcode('bsa_workout_builder_success', 'bsa_wb_render_success');

function bsa_wb_render_success() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/success.php';
    return ob_get_clean();
}

// ─── AJAX: Create Checkout Session ───────────────────────────────────────────

add_action('wp_ajax_bsa_wb_checkout',        'bsa_wb_create_checkout');
add_action('wp_ajax_nopriv_bsa_wb_checkout', 'bsa_wb_create_checkout');

function bsa_wb_create_checkout() {
    check_ajax_referer('bsa_wb_nonce', 'nonce');

    $fitness_level = sanitize_text_field($_POST['fitness_level'] ?? 'bodyweight');
    $email         = sanitize_email($_POST['email'] ?? '');

    if (!in_array($fitness_level, ['bodyweight', 'bands', 'small_gym'])) {
        wp_send_json_error(['message' => 'Invalid fitness level.']);
    }
    if (!is_email($email)) {
        wp_send_json_error(['message' => 'Please enter a valid email address.']);
    }

    $price_id = bsa_wb_get_price_id();
    if (!$price_id) {
        wp_send_json_error(['message' => 'Payment setup error. Please try again later.']);
    }

    $success_url = add_query_arg([
        'fitness_level' => $fitness_level,
        'session_id'    => '{CHECKOUT_SESSION_ID}',
    ], home_url('/workout-builder-welcome/'));

    $cancel_url = home_url('/workout-builder/');

    $session = bsa_wb_stripe_request('checkout/sessions', [
        'mode'                      => 'subscription',
        'customer_email'            => $email,
        'line_items[0][price]'      => $price_id,
        'line_items[0][quantity]'   => 1,
        'success_url'               => $success_url,
        'cancel_url'                => $cancel_url,
        'metadata[fitness_level]'   => $fitness_level,
        'metadata[source]'          => 'bsa_workout_builder',
        'subscription_data[metadata][fitness_level]' => $fitness_level,
        'subscription_data[metadata][source]'        => 'bsa_workout_builder',
    ]);

    if (!$session || empty($session['url'])) {
        $msg = $session['error']['message'] ?? 'Could not create checkout session.';
        wp_send_json_error(['message' => $msg]);
    }

    wp_send_json_success(['checkout_url' => $session['url']]);
}

// ─── Webhook: POST /wp-json/bsa-wb/v1/stripe-webhook ────────────────────────

add_action('rest_api_init', function () {
    register_rest_route('bsa-wb/v1', '/stripe-webhook', [
        'methods'             => 'POST',
        'callback'            => 'bsa_wb_handle_webhook',
        'permission_callback' => '__return_true', // Stripe signs the payload
    ]);
});

function bsa_wb_handle_webhook(WP_REST_Request $request) {
    $payload   = $request->get_body();
    $sig       = $request->get_header('stripe-signature');
    $secret    = BSA_STRIPE_WEBHOOK_SECRET;

    if (!$sig || !$secret) {
        return new WP_REST_Response(['error' => 'Missing signature or secret'], 400);
    }

    // Verify Stripe signature
    $elements = [];
    foreach (explode(',', $sig) as $part) {
        [$key, $val] = explode('=', $part, 2);
        $elements[trim($key)] = trim($val);
    }

    $timestamp       = $elements['t'] ?? '';
    $expected_sig    = $elements['v1'] ?? '';
    $signed_payload  = $timestamp . '.' . $payload;
    $computed_sig    = hash_hmac('sha256', $signed_payload, $secret);

    if (!hash_equals($computed_sig, $expected_sig)) {
        error_log('BSA WB Webhook: Invalid signature');
        return new WP_REST_Response(['error' => 'Invalid signature'], 400);
    }

    // Reject stale webhooks (> 5 minutes)
    if (abs(time() - intval($timestamp)) > 300) {
        return new WP_REST_Response(['error' => 'Timestamp too old'], 400);
    }

    $event = json_decode($payload, true);
    $type  = $event['type'] ?? '';

    error_log("BSA WB Webhook received: {$type}");

    switch ($type) {
        case 'checkout.session.completed':
            $session = $event['data']['object'];
            if (($session['metadata']['source'] ?? '') === 'bsa_workout_builder') {
                $customer_email = $session['customer_details']['email'] ?? $session['customer_email'] ?? '';
                $fitness_level  = $session['metadata']['fitness_level'] ?? 'bodyweight';
                $customer_id    = $session['customer'] ?? '';
                $sub_id         = $session['subscription'] ?? '';

                // Store subscriber record
                bsa_wb_save_subscriber([
                    'email'         => $customer_email,
                    'fitness_level' => $fitness_level,
                    'customer_id'   => $customer_id,
                    'subscription_id' => $sub_id,
                    'status'        => 'active',
                    'created'       => current_time('mysql'),
                ]);

                error_log("BSA WB: New subscriber {$customer_email} — {$fitness_level}");
            }
            break;

        case 'customer.subscription.deleted':
        case 'customer.subscription.updated':
            $sub    = $event['data']['object'];
            $status = $sub['status'] ?? '';
            $sub_id = $sub['id'] ?? '';
            if (($sub['metadata']['source'] ?? '') === 'bsa_workout_builder') {
                bsa_wb_update_subscriber_status($sub_id, $status);
                error_log("BSA WB: Subscription {$sub_id} status -> {$status}");
            }
            break;

        case 'invoice.payment_failed':
            $invoice = $event['data']['object'];
            $sub_id  = $invoice['subscription'] ?? '';
            if ($sub_id) {
                bsa_wb_update_subscriber_status($sub_id, 'past_due');
                error_log("BSA WB: Payment failed for subscription {$sub_id}");
            }
            break;
    }

    return new WP_REST_Response(['status' => 'ok'], 200);
}

// ─── Subscriber storage (wp_options for simplicity) ──────────────────────────

function bsa_wb_save_subscriber($data) {
    $subscribers = get_option('bsa_wb_subscribers', []);
    $subscribers[$data['email']] = $data;
    update_option('bsa_wb_subscribers', $subscribers);
}

function bsa_wb_update_subscriber_status($subscription_id, $status) {
    $subscribers = get_option('bsa_wb_subscribers', []);
    foreach ($subscribers as $email => &$sub) {
        if (($sub['subscription_id'] ?? '') === $subscription_id) {
            $sub['status'] = $status;
            break;
        }
    }
    update_option('bsa_wb_subscribers', $subscribers);
}

function bsa_wb_get_subscriber($email) {
    $subscribers = get_option('bsa_wb_subscribers', []);
    return $subscribers[$email] ?? null;
}

// ─── Admin page: View subscribers ────────────────────────────────────────────

add_action('admin_menu', function () {
    add_menu_page(
        'WB Subscribers',
        'WB Subscribers',
        'manage_options',
        'bsa-wb-subscribers',
        'bsa_wb_admin_page',
        'dashicons-groups',
        30
    );
});

function bsa_wb_admin_page() {
    $subscribers = get_option('bsa_wb_subscribers', []);
    $codes       = BSA_WB_CODES;
    ?>
    <div class="wrap">
        <h1>Workout Builder Subscribers</h1>
        <p>Total: <strong><?php echo count($subscribers); ?></strong></p>

        <h3>Starter Program Access Codes</h3>
        <table class="widefat" style="max-width:500px; margin-bottom:24px;">
            <tr><td><strong>Bodyweight (Beginner)</strong></td><td><code><?php echo esc_html($codes['bodyweight'] ?: '— not set —'); ?></code></td></tr>
            <tr><td><strong>Bands + BW (Intermediate)</strong></td><td><code><?php echo esc_html($codes['bands'] ?: '— not set —'); ?></code></td></tr>
            <tr><td><strong>Small Gym (Advanced)</strong></td><td><code><?php echo esc_html($codes['small_gym'] ?: '— not set —'); ?></code></td></tr>
        </table>
        <p class="description">Set codes in <code>bsa-workout-builder.php</code> → <code>BSA_WB_CODES</code> constant.</p>

        <h3>Subscribers</h3>
        <?php if (empty($subscribers)) : ?>
            <p>No subscribers yet.</p>
        <?php else : ?>
            <table class="widefat striped">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Fitness Level</th>
                        <th>Status</th>
                        <th>Access Code</th>
                        <th>Signed Up</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($subscribers as $email => $sub) :
                        $level = $sub['fitness_level'] ?? 'bodyweight';
                        $code  = $codes[$level] ?? '';
                    ?>
                        <tr>
                            <td><?php echo esc_html($email); ?></td>
                            <td><?php echo esc_html(ucfirst(str_replace('_', ' ', $level))); ?></td>
                            <td>
                                <span style="color: <?php echo $sub['status'] === 'active' ? '#16a34a' : '#dc2626'; ?>; font-weight:600;">
                                    <?php echo esc_html(ucfirst($sub['status'] ?? 'unknown')); ?>
                                </span>
                            </td>
                            <td><code><?php echo esc_html($code ?: '—'); ?></code></td>
                            <td><?php echo esc_html($sub['created'] ?? '—'); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
    </div>
    <?php
}

// ─── Enqueue frontend assets ─────────────────────────────────────────────────

add_action('wp_enqueue_scripts', function () {
    global $post;
    if (!$post) return;

    if (has_shortcode($post->post_content, 'bsa_workout_builder') ||
        has_shortcode($post->post_content, 'bsa_workout_builder_success')) {
        wp_enqueue_script(
            'bsa-wb-frontend',
            plugin_dir_url(__FILE__) . 'assets/frontend.js',
            [],
            '1.0.0',
            true
        );
        wp_localize_script('bsa-wb-frontend', 'bsaWB', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bsa_wb_nonce'),
        ]);
    }
});
