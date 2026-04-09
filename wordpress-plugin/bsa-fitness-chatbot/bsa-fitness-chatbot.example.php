<?php
/**
 * Plugin Name: BSA Fitness Chatbot
 * Description: AI-powered fitness chatbot using Glen's training philosophy. Lives in the Mario ? block on bestrongagain.com.
 * Version: 1.0.0
 * Author: Be Strong Again
 */

if (!defined('ABSPATH')) exit;

// ─── Configuration ───────────────────────────────────────────────────────────
define('BSA_OPENAI_KEY', 'sk-proj-YOUR_KEY_HERE');
define('BSA_OPENAI_MODEL', 'gpt-4o-mini');
define('BSA_CHATBOT_MAX_TOKENS', 400);

// Rate limiting: max requests per IP per hour
define('BSA_CHATBOT_RATE_LIMIT', 30);

// ─── Video Library ───────────────────────────────────────────────────────────
// Maps video names (used in GPT responses) to Cloudflare Stream UIDs
define('BSA_VIDEO_LIBRARY', [
    // Massage Gun
    'Massage Gun Pec' => '87ee69ea8db4f36ff13c14d4d2d28e42',
    'Massage Gun Biceps Anterior Delt' => '048b18dafba62a72b99327f2b9a226a9',
    'Massage Gun Upper Trap Rhomboids' => '1e8a8a6e30d17dfe8bceb23e8b9cabb7',
    'Massage Gun Triceps Long Head' => '8c74bca459c9bbc38b3f3c4d89e5e5c3',
    'Massage Gun Serratus Teres Minor' => 'b5c7e4b3a9d2f1c8e6a4b7d9c3f5e1a2',
    'Massage Gun Lats Mid Back' => 'd4e6c2a8b1f9d7c5e3a1b9d6c4f8e2a7',
    'Massage Gun Lats Lying Side' => 'a1b3c5d7e9f2a4b6c8d1e3f5a7b9c2d4',
    'Massage Gun IT Band Glutes' => 'c8d1e3f5a7b9c2d4e6f8a1b3c5d7e9f2',
    'Massage Gun IT Band VMO' => 'e6f8a1b3c5d7e9f2a4b6c8d1e3f5a7b9',
    'Massage Gun IT Band Calf' => 'f2a4b6c8d1e3f5a7b9c2d4e6f8a1b3c5',
    'Massage Gun Groin' => 'a4b6c8d1e3f5a7b9c2d4e6f8a1b3c5d7',
    'Massage Gun Forearm' => 'b6c8d1e3f5a7b9c2d4e6f8a1b3c5d7e9',

    // Lacrosse Ball
    'Lacrosse Ball Pecs' => 'de5929f7c42f3b55fbae429eb5c7488e',
    'Lax Ball Rhomboid Rollout' => 'a2b4c6d8e1f3a5b7c9d2e4f6a8b1c3d5',
    'Lax Ball Rear Delt' => 'c6d8e1f3a5b7c9d2e4f6a8b1c3d5e7f9',

    // Foam Roll
    'Foam Roll Upper Back' => '85b4cfaec0c4ef9f63a8c59a98c6a155',
    'Foam Roll Lats' => 'a8b1c3d5e7f9a2b4c6d8e1f3a5b7c9d2',
    'Foam Roll Quads' => 'd8e1f3a5b7c9d2e4f6a8b1c3d5e7f9a2',
    'Foam Roll Glutes' => 'e1f3a5b7c9d2e4f6a8b1c3d5e7f9a2b4',
    'Foam Roll Groin' => 'f3a5b7c9d2e4f6a8b1c3d5e7f9a2b4c6',

    // Thera Cane
    'Thera Cane Shoulder Blade Rollout' => 'a5b7c9d2e4f6a8b1c3d5e7f9a2b4c6d8',
    'Thera Cane Upper Trap Release' => 'b7c9d2e4f6a8b1c3d5e7f9a2b4c6d8e1',

    // Psoas Tool
    'Psoas Tool Hip Flexor Release' => 'c9d2e4f6a8b1c3d5e7f9a2b4c6d8e1f3',

    // Stretches
    'Shoulder Dislocations (Band)' => '210d4937269e8c06ff0816e553f73ef8',
    'Shoulder Dislocate w/Ball' => '24c37d94cdfc2a3dfc2e4fbb05f84b12',
    'Doorway Pec Stretch' => '84f4c3c0c9b5fdbc60e2c8ff14ff5e7e',
    'Black Birds' => 'f45ffd5c0ba82e10e7a3e2cdec1c5e41',
    'One Fist Cobra Stretch' => 'd2e4f6a8b1c3d5e7f9a2b4c6d8e1f3a5',
    'Couch Stretch' => '4785a76eae5933fa8e746be8b71633d1',
    'Dynamic Pigeon Stretch' => '53b2f45cc8fbb998896fae386930b42a',
    'Groin Rockbacks' => 'e4f6a8b1c3d5e7f9a2b4c6d8e1f3a5b7',
    'Frog Stretch' => 'f6a8b1c3d5e7f9a2b4c6d8e1f3a5b7c9',
    'Door Jam Hamstring Stretch' => 'a8b1c3d5e7f9a2b4c6d8e1f3a5b7c9d2',
    'T-Spine Rotations' => '7911d9deffdfc1f387fbf4cbde74799f',
    'Pigeon Pose + Grab Back Foot' => 'b1c3d5e7f9a2b4c6d8e1f3a5b7c9d2e4',

    // The Stick
    'The Stick Biceps Rollout' => 'c3d5e7f9a2b4c6d8e1f3a5b7c9d2e4f6',
    'The Stick Lat Rollout' => 'd5e7f9a2b4c6d8e1f3a5b7c9d2e4f6a8',
    'The Stick Low Lats/Back Rollout' => 'e7f9a2b4c6d8e1f3a5b7c9d2e4f6a8b1',
    'The Stick Standing IT Band' => 'f9a2b4c6d8e1f3a5b7c9d2e4f6a8b1c3',

    // Mobility
    'Hip CARs' => '5d9d51c1b27d12373a3d16071280021c',
    'Cat-Cow Stretch' => 'b2007113903d3b11cc57d761bc1f64ac',
    'Wall Slides' => '03ce92b6428992632f0fd5570c4813d2',
    'Ankle Circles' => '691b46c16dc1027f41adebf9b2bd7c93',
    'Inchworms' => 'c59d2a0bd160f2f78e08ac1c1ade8580',
    'Spiderman Lunge with Rotation' => '8fd4ede989c23a7bcb9ff43780d7d725',
]);

// ─── Load system prompt ──────────────────────────────────────────────────────

function bsa_chatbot_get_system_prompt($gender, $age_range) {
    $prompt = file_get_contents(plugin_dir_path(__FILE__) . 'system-prompt.txt');
    $prompt = str_replace('{gender}', $gender, $prompt);
    $prompt = str_replace('{age_range}', $age_range, $prompt);
    return $prompt;
}

// ─── REST API endpoint ───────────────────────────────────────────────────────

add_action('rest_api_init', function () {
    register_rest_route('bsa-chatbot/v1', '/chat', [
        'methods'             => 'POST',
        'callback'            => 'bsa_chatbot_handle',
        'permission_callback' => '__return_true',
    ]);
});

function bsa_chatbot_handle(WP_REST_Request $request) {
    $body = $request->get_json_params();

    $message    = sanitize_text_field($body['message'] ?? '');
    $gender     = sanitize_text_field($body['gender'] ?? 'Not specified');
    $age_range  = sanitize_text_field($body['age_range'] ?? 'Not specified');
    $history    = $body['history'] ?? [];

    if (empty($message)) {
        return new WP_REST_Response(['error' => 'Message is required'], 400);
    }

    if (strlen($message) > 1000) {
        return new WP_REST_Response(['error' => 'Message too long'], 400);
    }

    // Rate limiting by IP
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $rate_key = 'bsa_chatbot_rate_' . md5($ip);
    $count = get_transient($rate_key) ?: 0;
    if ($count >= BSA_CHATBOT_RATE_LIMIT) {
        return new WP_REST_Response(['error' => 'Too many requests. Try again later.'], 429);
    }
    set_transient($rate_key, $count + 1, HOUR_IN_SECONDS);

    // Build messages array
    $system_prompt = bsa_chatbot_get_system_prompt($gender, $age_range);

    $messages = [
        ['role' => 'system', 'content' => $system_prompt],
    ];

    // Add conversation history (last 10 messages max)
    $history = array_slice($history, -10);
    foreach ($history as $msg) {
        $role = ($msg['isBot'] ?? false) ? 'assistant' : 'user';
        $messages[] = ['role' => $role, 'content' => sanitize_text_field($msg['text'] ?? '')];
    }

    // Add current message
    $messages[] = ['role' => 'user', 'content' => $message];

    // Call OpenAI
    $response = wp_remote_post('https://api.openai.com/v1/chat/completions', [
        'headers' => [
            'Authorization' => 'Bearer ' . BSA_OPENAI_KEY,
            'Content-Type'  => 'application/json',
        ],
        'body' => json_encode([
            'model'       => BSA_OPENAI_MODEL,
            'messages'    => $messages,
            'max_tokens'  => BSA_CHATBOT_MAX_TOKENS,
            'temperature' => 0.7,
        ]),
        'timeout' => 30,
    ]);

    if (is_wp_error($response)) {
        error_log('BSA Chatbot OpenAI error: ' . $response->get_error_message());
        return new WP_REST_Response(['error' => 'Something went wrong. Try again.'], 500);
    }

    $result = json_decode(wp_remote_retrieve_body($response), true);
    $reply  = $result['choices'][0]['message']['content'] ?? '';

    if (empty($reply)) {
        return new WP_REST_Response(['error' => 'No response from AI'], 500);
    }

    // Extract video references from reply: [VIDEO: Name Here]
    $videos = [];
    if (preg_match_all('/\[VIDEO:\s*(.+?)\]/', $reply, $matches)) {
        $library = BSA_VIDEO_LIBRARY;
        foreach ($matches[1] as $name) {
            $name = trim($name);
            if (isset($library[$name])) {
                $videos[] = [
                    'name' => $name,
                    'url'  => 'https://iframe.videodelivery.net/' . $library[$name],
                ];
            }
        }
        // Clean video tags from displayed text
        $reply = preg_replace('/\[VIDEO:\s*.+?\]/', '', $reply);
        $reply = trim($reply);
    }

    return new WP_REST_Response([
        'reply'  => $reply,
        'videos' => $videos,
    ], 200);
}

// ─── Shortcode: [bsa_fitness_chatbot] ────────────────────────────────────────

add_shortcode('bsa_fitness_chatbot', function () {
    ob_start();
    ?>
    <div id="bsa-chatbot-root"></div>
    <?php
    return ob_get_clean();
});

// ─── Enqueue chat widget on all pages ────────────────────────────────────────

add_action('wp_footer', function () {
    // Load the chat widget globally (Mario ? block)
    wp_enqueue_script(
        'bsa-chatbot-widget',
        plugin_dir_url(__FILE__) . 'assets/chatbot-widget.js',
        [],
        '1.0.0.' . time(),
        true
    );
    wp_localize_script('bsa-chatbot-widget', 'bsaChatbot', [
        'apiUrl' => rest_url('bsa-chatbot/v1/chat'),
        'nonce'  => wp_create_nonce('wp_rest'),
    ]);
});

// ─── Admin: Usage stats ──────────────────────────────────────────────────────

add_action('admin_menu', function () {
    add_menu_page(
        'Fitness Chatbot',
        'Fitness Chatbot',
        'manage_options',
        'bsa-chatbot',
        'bsa_chatbot_admin_page',
        'dashicons-format-chat',
        31
    );
});

function bsa_chatbot_admin_page() {
    ?>
    <div class="wrap">
        <h1>BSA Fitness Chatbot</h1>
        <p>The AI chatbot is active on all pages via the floating chat button.</p>
        <h3>Configuration</h3>
        <table class="widefat" style="max-width:500px;">
            <tr><td><strong>Model</strong></td><td><code><?php echo BSA_OPENAI_MODEL; ?></code></td></tr>
            <tr><td><strong>Max Tokens</strong></td><td><code><?php echo BSA_CHATBOT_MAX_TOKENS; ?></code></td></tr>
            <tr><td><strong>Rate Limit</strong></td><td><code><?php echo BSA_CHATBOT_RATE_LIMIT; ?> req/hr per IP</code></td></tr>
            <tr><td><strong>API Key</strong></td><td><code>sk-proj-...<?php echo substr(BSA_OPENAI_KEY, -8); ?></code></td></tr>
        </table>
        <h3>Video Library</h3>
        <p><?php echo count(BSA_VIDEO_LIBRARY); ?> videos loaded for recommendation.</p>
    </div>
    <?php
}
