<div id="bsa-wb-landing">
<style>
    #bsa-wb-landing {
        font-family: 'Jost', sans-serif;
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px 60px;
        color: #1a1a1a;
    }
    #bsa-wb-landing * { box-sizing: border-box; }

    /* ── Hero ── */
    .bsa-wb-hero {
        text-align: center;
        margin-bottom: 48px;
    }
    .bsa-wb-hero h1 {
        font-family: 'Solway', serif;
        font-size: clamp(2rem, 5vw, 3rem);
        color: #B37602;
        margin: 0 0 12px;
        line-height: 1.2;
    }
    .bsa-wb-hero .bsa-wb-tagline {
        font-size: 18px;
        color: #555;
        max-width: 600px;
        margin: 0 auto 24px;
        line-height: 1.6;
    }
    .bsa-wb-price-badge {
        display: inline-block;
        background: linear-gradient(135deg, #B37602, #c4a05c);
        color: white;
        font-size: 28px;
        font-weight: 700;
        padding: 12px 32px;
        border-radius: 50px;
        letter-spacing: 0.5px;
    }
    .bsa-wb-price-badge span {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.9;
    }

    /* ── Features ── */
    .bsa-wb-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        margin-bottom: 48px;
    }
    .bsa-wb-feature {
        background: #faf6ef;
        border: 1px solid #e8dcc8;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
    }
    .bsa-wb-feature-icon {
        font-size: 36px;
        margin-bottom: 12px;
    }
    .bsa-wb-feature h3 {
        font-family: 'Solway', serif;
        font-size: 18px;
        color: #B37602;
        margin: 0 0 8px;
    }
    .bsa-wb-feature p {
        font-size: 14px;
        color: #666;
        margin: 0;
        line-height: 1.5;
    }

    /* ── How It Works ── */
    .bsa-wb-how {
        margin-bottom: 48px;
    }
    .bsa-wb-how h2 {
        font-family: 'Solway', serif;
        text-align: center;
        font-size: 24px;
        color: #B37602;
        margin: 0 0 32px;
    }
    .bsa-wb-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 24px;
    }
    .bsa-wb-step {
        text-align: center;
        padding: 16px;
    }
    .bsa-wb-step-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background: #B37602;
        color: white;
        font-size: 22px;
        font-weight: 700;
        border-radius: 50%;
        margin-bottom: 12px;
    }
    .bsa-wb-step h4 {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 6px;
        color: #333;
    }
    .bsa-wb-step p {
        font-size: 13px;
        color: #777;
        margin: 0;
        line-height: 1.5;
    }

    /* ── Signup Form ── */
    .bsa-wb-signup {
        background: linear-gradient(135deg, #ECCA93, #f5e6cc);
        border-radius: 16px;
        padding: 40px 32px;
        max-width: 560px;
        margin: 0 auto;
    }
    .bsa-wb-signup h2 {
        font-family: 'Solway', serif;
        text-align: center;
        font-size: 22px;
        color: #7a5200;
        margin: 0 0 24px;
    }

    .bsa-wb-field {
        margin-bottom: 20px;
    }
    .bsa-wb-field label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #5a3d00;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .bsa-wb-field input[type="email"] {
        width: 100%;
        padding: 12px 16px;
        font-size: 16px;
        border: 2px solid #c4a05c;
        border-radius: 8px;
        background: white;
        font-family: 'Jost', sans-serif;
        outline: none;
        transition: border-color 0.2s;
    }
    .bsa-wb-field input[type="email"]:focus {
        border-color: #B37602;
    }

    /* Fitness level cards */
    .bsa-wb-levels {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-bottom: 24px;
    }
    .bsa-wb-level {
        position: relative;
        background: white;
        border: 2px solid #d4c4a0;
        border-radius: 10px;
        padding: 16px 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
    }
    .bsa-wb-level:hover {
        border-color: #B37602;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(179, 118, 2, 0.15);
    }
    .bsa-wb-level.selected {
        border-color: #B37602;
        background: #fff9ed;
        box-shadow: 0 0 0 3px rgba(179, 118, 2, 0.2);
    }
    .bsa-wb-level input { display: none; }
    .bsa-wb-level-icon { font-size: 28px; margin-bottom: 6px; }
    .bsa-wb-level-name {
        font-weight: 700;
        font-size: 14px;
        color: #333;
        margin-bottom: 4px;
    }
    .bsa-wb-level-desc {
        font-size: 11px;
        color: #888;
        line-height: 1.3;
    }

    /* Submit */
    .bsa-wb-submit {
        display: block;
        width: 100%;
        padding: 16px;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Jost', sans-serif;
        color: white;
        background: linear-gradient(135deg, #B37602, #8a5b00);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.2s;
        letter-spacing: 0.5px;
    }
    .bsa-wb-submit:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
    .bsa-wb-submit:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    .bsa-wb-error {
        background: #fef2f2;
        color: #dc2626;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 14px;
        margin-bottom: 16px;
        display: none;
        text-align: center;
    }

    .bsa-wb-fine-print {
        text-align: center;
        font-size: 12px;
        color: #8a7550;
        margin-top: 16px;
        line-height: 1.4;
    }

    @media (max-width: 600px) {
        .bsa-wb-levels { grid-template-columns: 1fr; }
        .bsa-wb-signup { padding: 28px 20px; }
    }
</style>

<!-- Hero -->
<div class="bsa-wb-hero">
    <h1>Your Personal Training Program</h1>
    <p class="bsa-wb-tagline">
        Custom-built workout programs designed for your goals, your equipment, and your schedule.
        Guided by exercise videos and progressive programming that adapts as you get stronger.
    </p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px;">
        <div class="bsa-wb-price-badge">$20 <span>/mo Basic</span></div>
        <div class="bsa-wb-price-badge" style="background:linear-gradient(135deg,#667eea,#764ba2);">$200 <span>/mo Coached</span></div>
        <div class="bsa-wb-price-badge" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">$400 <span>/mo Elite</span></div>
    </div>
    <p style="font-size:13px;color:#8a7550;margin-top:12px;">Start with a free 2-week trial. No payment required.</p>
</div>

<!-- Features -->
<div class="bsa-wb-features">
    <div class="bsa-wb-feature">
        <div class="bsa-wb-feature-icon">&#127947;</div>
        <h3>Personalized Programs</h3>
        <p>Programs built specifically for you — not cookie-cutter templates. Your trainer writes every set, rep, and progression.</p>
    </div>
    <div class="bsa-wb-feature">
        <div class="bsa-wb-feature-icon">&#127909;</div>
        <h3>Exercise Videos</h3>
        <p>950+ coaching videos showing proper form for every exercise in your program. Never wonder "how do I do this?" again.</p>
    </div>
    <div class="bsa-wb-feature">
        <div class="bsa-wb-feature-icon">&#128200;</div>
        <h3>Progressive Overload</h3>
        <p>Your program evolves week to week with built-in progressions. Sets, reps, and intensity are all tracked and adjusted.</p>
    </div>
</div>

<!-- How It Works -->
<div class="bsa-wb-how">
    <h2>How It Works</h2>
    <div class="bsa-wb-steps">
        <div class="bsa-wb-step">
            <div class="bsa-wb-step-num">1</div>
            <h4>Pick Your Level</h4>
            <p>Choose the starting program that matches your current fitness and equipment access.</p>
        </div>
        <div class="bsa-wb-step">
            <div class="bsa-wb-step-num">2</div>
            <h4>2-Week Starter</h4>
            <p>Follow your starter program for 2 weeks. This helps your trainer understand your strengths and goals.</p>
        </div>
        <div class="bsa-wb-step">
            <div class="bsa-wb-step-num">3</div>
            <h4>Go Custom</h4>
            <p>After the intro period, your trainer builds a fully personalized program just for you — updated regularly.</p>
        </div>
    </div>
</div>

<!-- Signup Form -->
<div class="bsa-wb-signup">
    <h2>Get Started Today</h2>

    <div class="bsa-wb-error" id="bsa-wb-error"></div>

    <div class="bsa-wb-field">
        <label for="bsa-wb-email">Your Email</label>
        <p style="font-size:11px;color:#8a7550;margin:0 0 6px;line-height:1.3;">We'll send your access code and program updates here. No spam, ever.</p>
        <input type="email" id="bsa-wb-email" placeholder="you@example.com" required />
    </div>

    <div class="bsa-wb-field">
        <label>Choose Your Starting Level</label>
        <p style="font-size:11px;color:#8a7550;margin:0 0 8px;line-height:1.3;">Not sure? Pick the one closest to your situation. Your trainer will adjust from there.</p>
        <div class="bsa-wb-levels">
            <label class="bsa-wb-level selected" data-level="bodyweight">
                <input type="radio" name="fitness_level" value="bodyweight" checked />
                <div class="bsa-wb-level-icon">&#128170;</div>
                <div class="bsa-wb-level-name">Bodyweight</div>
                <div class="bsa-wb-level-desc">No equipment needed. Great for beginners or home training.</div>
            </label>
            <label class="bsa-wb-level" data-level="bands">
                <input type="radio" name="fitness_level" value="bands" />
                <div class="bsa-wb-level-icon">&#9939;</div>
                <div class="bsa-wb-level-name">Bands + Bodyweight</div>
                <div class="bsa-wb-level-desc">Resistance bands plus bodyweight. More variety, more challenge.</div>
            </label>
            <label class="bsa-wb-level" data-level="small_gym">
                <input type="radio" name="fitness_level" value="small_gym" />
                <div class="bsa-wb-level-icon">&#127947;</div>
                <div class="bsa-wb-level-name">Small Gym</div>
                <div class="bsa-wb-level-desc">Dumbbells, bench, cables. For those with gym access.</div>
            </label>
        </div>
    </div>

    <button class="bsa-wb-submit" id="bsa-wb-trial" style="background:linear-gradient(135deg,#16a34a,#15803d);">
        Start Free 2-Week Trial
    </button>

    <div style="display:flex;align-items:center;gap:12px;margin:16px 0;">
        <div style="flex:1;height:1px;background:#d4c4a0;"></div>
        <span style="font-size:12px;color:#8a7550;font-weight:600;">OR SUBSCRIBE NOW</span>
        <div style="flex:1;height:1px;background:#d4c4a0;"></div>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
        <button class="bsa-wb-submit" id="bsa-wb-submit" data-tier="basic">
            Basic — $20/month
        </button>
        <button class="bsa-wb-submit" id="bsa-wb-coached" data-tier="coached" style="background:linear-gradient(135deg,#667eea,#764ba2);">
            Coached — $200/month
        </button>
        <button class="bsa-wb-submit" id="bsa-wb-elite" data-tier="elite" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">
            Elite — $400/month
        </button>
    </div>

    <div style="margin-top:12px;font-size:11px;color:#8a7550;line-height:1.5;">
        <strong>Basic:</strong> Workout programs + video library<br>
        <strong>Coached:</strong> Everything in Basic + dedicated personal coach + custom programs<br>
        <strong>Elite:</strong> Everything in Coached + 1-on-1 programming + unlimited video reviews
    </div>

    <p class="bsa-wb-fine-print">
        Try free for 2 weeks with a starter program. Subscribe anytime for a fully personalized plan.
    </p>
</div>
</div>
