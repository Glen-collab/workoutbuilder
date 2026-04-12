<?php
$fitness_level = sanitize_text_field($_GET['level'] ?? $_GET['fitness_level'] ?? 'bodyweight');
$codes         = BSA_WB_CODES;
$access_code   = $codes[$fitness_level] ?? '';
$app_url       = BSA_WB_APP_URL;

$level_labels = [
    'bodyweight' => 'Bodyweight (Beginner)',
    'bands'      => 'Bands + Bodyweight (Intermediate)',
    'small_gym'  => 'Small Gym (Advanced)',
];
$level_label = $level_labels[$fitness_level] ?? 'Starter';
?>
<div id="bsa-wb-success">
<style>
    #bsa-wb-success {
        font-family: 'Jost', sans-serif;
        max-width: 640px;
        margin: 0 auto;
        padding: 60px 20px 80px;
        text-align: center;
        color: #1a1a1a;
    }
    .bsa-wb-check {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #16a34a, #15803d);
        color: white;
        font-size: 40px;
        border-radius: 50%;
        margin-bottom: 24px;
    }
    #bsa-wb-success h1 {
        font-family: 'Solway', serif;
        font-size: 28px;
        color: #B37602;
        margin: 0 0 12px;
    }
    #bsa-wb-success .bsa-wb-subtitle {
        font-size: 16px;
        color: #666;
        margin-bottom: 36px;
    }
    .bsa-wb-code-card {
        background: #faf6ef;
        border: 2px solid #e8dcc8;
        border-radius: 16px;
        padding: 32px;
        margin-bottom: 32px;
    }
    .bsa-wb-code-label {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #8a7550;
        margin-bottom: 8px;
    }
    .bsa-wb-code-value {
        font-size: 32px;
        font-weight: 800;
        letter-spacing: 3px;
        color: #B37602;
        background: white;
        border-radius: 10px;
        padding: 16px 24px;
        display: inline-block;
        margin-bottom: 16px;
        user-select: all;
        border: 2px dashed #d4c4a0;
    }
    .bsa-wb-code-missing {
        font-size: 16px;
        color: #666;
        background: white;
        border-radius: 10px;
        padding: 16px 24px;
        margin-bottom: 16px;
        border: 2px dashed #d4c4a0;
    }
    .bsa-wb-program-type {
        font-size: 14px;
        color: #666;
    }
    .bsa-wb-program-type strong { color: #333; }

    .bsa-wb-next-steps {
        text-align: left;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px 28px;
        margin-bottom: 32px;
    }
    .bsa-wb-next-steps h3 {
        font-family: 'Solway', serif;
        font-size: 18px;
        color: #B37602;
        margin: 0 0 16px;
    }
    .bsa-wb-next-steps ol {
        margin: 0;
        padding: 0 0 0 20px;
    }
    .bsa-wb-next-steps li {
        font-size: 15px;
        color: #444;
        margin-bottom: 12px;
        line-height: 1.5;
    }
    .bsa-wb-next-steps li strong { color: #1a1a1a; }
    .bsa-wb-next-steps a {
        color: #B37602;
        font-weight: 600;
        text-decoration: underline;
    }

    .bsa-wb-app-btn {
        display: inline-block;
        padding: 16px 40px;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Jost', sans-serif;
        color: white;
        background: linear-gradient(135deg, #B37602, #8a5b00);
        border: none;
        border-radius: 10px;
        text-decoration: none;
        transition: opacity 0.2s;
    }
    .bsa-wb-app-btn:hover { opacity: 0.9; color: white; }
</style>

<div class="bsa-wb-check">&#10003;</div>
<h1>Welcome to Be Strong Again!</h1>
<p class="bsa-wb-subtitle">Your subscription is active. Here's everything you need to get started.</p>

<div class="bsa-wb-code-card">
    <div class="bsa-wb-code-label">Your Access Code</div>
    <?php if ($access_code) : ?>
        <div class="bsa-wb-code-value"><?php echo esc_html($access_code); ?></div>
    <?php else : ?>
        <div class="bsa-wb-code-missing">
            Your personalized access code is being prepared. You'll receive it via email within 24 hours.
        </div>
    <?php endif; ?>
    <div class="bsa-wb-program-type">
        Program: <strong><?php echo esc_html($level_label); ?></strong> — 2 Week Starter
    </div>
</div>

<div class="bsa-wb-next-steps">
    <h3>Next Steps</h3>
    <ol>
        <?php if ($access_code) : ?>
            <li><strong>Copy your access code</strong> above (click it to select).</li>
            <li><strong>Open the app</strong> using the button below and enter your code.</li>
        <?php else : ?>
            <li><strong>Check your email</strong> — your trainer will send your access code within 24 hours.</li>
            <li><strong>Open the app</strong> below and enter your code once you have it.</li>
        <?php endif; ?>
        <li><strong>Follow the 2-week starter program.</strong> Each workout has exercise videos to guide you through proper form.</li>
        <li><strong>After 2 weeks,</strong> your trainer will review your progress and build a fully personalized program for you.</li>
    </ol>
</div>

<a href="<?php echo esc_url($app_url); ?>" target="_blank" class="bsa-wb-app-btn">
    Open Workout App
</a>

<div style="text-align:center;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:20px;">
    <p style="font-size:13px;color:#999;margin:0 0 8px;">Need to manage or cancel your subscription?</p>
    <form style="display:inline-flex;gap:8px;align-items:center;" onsubmit="window.location.href='<?php echo esc_url(rest_url('bsa-wb/v1/manage')); ?>?email='+encodeURIComponent(this.email.value);return false;">
        <input name="email" type="email" placeholder="Your email" style="padding:8px 12px;border:1px solid #ddd;border-radius:6px;font-size:13px;" required />
        <button type="submit" style="padding:8px 14px;border:none;border-radius:6px;background:#666;color:#fff;font-size:13px;cursor:pointer;">Manage</button>
    </form>
</div>

</div>
