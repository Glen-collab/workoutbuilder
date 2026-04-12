document.addEventListener('DOMContentLoaded', function () {
    // ── Fitness level card selection ──
    var levels = document.querySelectorAll('.bsa-wb-level');
    levels.forEach(function (card) {
        card.addEventListener('click', function () {
            levels.forEach(function (c) { c.classList.remove('selected'); });
            card.classList.add('selected');
            card.querySelector('input').checked = true;
        });
    });

    var trialBtn = document.getElementById('bsa-wb-trial');
    var payBtn   = document.getElementById('bsa-wb-submit');
    var error    = document.getElementById('bsa-wb-error');

    function getEmail() {
        var el = document.getElementById('bsa-wb-email');
        return el ? el.value.trim() : '';
    }

    function getLevel() {
        var selected = document.querySelector('.bsa-wb-level.selected input');
        return selected ? selected.value : 'bodyweight';
    }

    // ── Free Trial ──
    if (trialBtn) {
        trialBtn.addEventListener('click', function () {
            var email = getEmail();
            if (!email || email.indexOf('@') === -1) {
                showError('Please enter a valid email address.');
                return;
            }

            trialBtn.disabled = true;
            trialBtn.textContent = 'Setting up your trial...';
            hideError();

            var data = new FormData();
            data.append('action', 'bsa_wb_trial');
            data.append('nonce', bsaWB.nonce);
            data.append('email', email);
            data.append('fitness_level', getLevel());

            fetch(bsaWB.ajaxUrl, { method: 'POST', body: data })
                .then(function (r) { return r.json(); })
                .then(function (res) {
                    if (res.success && res.data.access_code) {
                        // Show the code inline instead of redirecting
                        var signup = document.querySelector('.bsa-wb-signup');
                        if (signup) {
                            signup.innerHTML = ''
                                + '<div style="text-align:center;">'
                                + '  <div style="font-size:48px;margin-bottom:12px;">&#10003;</div>'
                                + '  <h2 style="font-family:Solway,serif;color:#16a34a;margin:0 0 8px;">You\'re In!</h2>'
                                + '  <p style="font-size:14px;color:#666;margin:0 0 20px;">Your 2-week starter program is ready.</p>'
                                + '  <div style="background:#fff;border:2px dashed #d4c4a0;border-radius:10px;padding:16px;margin-bottom:16px;">'
                                + '    <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#8a7550;margin-bottom:6px;">Your Access Code</div>'
                                + '    <div style="font-size:28px;font-weight:800;letter-spacing:3px;color:#B37602;user-select:all;">' + res.data.access_code + '</div>'
                                + '  </div>'
                                + '  <a href="' + res.data.app_url + '?code=' + res.data.access_code + '&email=' + encodeURIComponent(email) + '" target="_blank" style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:700;color:#fff;background:linear-gradient(135deg,#B37602,#8a5b00);border-radius:10px;text-decoration:none;">Open Workout App</a>'
                                + '  <p style="font-size:12px;color:#999;margin-top:16px;">Enter your access code in the app to start your program.</p>'
                                + '</div>';
                        }
                    } else {
                        showError(res.data?.message || 'Something went wrong. Please try again.');
                        trialBtn.disabled = false;
                        trialBtn.textContent = 'Start Free 2-Week Trial';
                    }
                })
                .catch(function () {
                    showError('Network error. Please check your connection and try again.');
                    trialBtn.disabled = false;
                    trialBtn.textContent = 'Start Free 2-Week Trial';
                });
        });
    }

    // ── Paid Subscribe (all 3 tiers) ──
    var tierButtons = document.querySelectorAll('[data-tier]');
    tierButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var email = getEmail();
            if (!email || email.indexOf('@') === -1) {
                showError('Please enter a valid email address.');
                return;
            }

            var tier = btn.getAttribute('data-tier');
            var origText = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Redirecting to checkout...';
            hideError();

            var data = new FormData();
            data.append('action', 'bsa_wb_checkout');
            data.append('nonce', bsaWB.nonce);
            data.append('email', email);
            data.append('fitness_level', getLevel());
            data.append('tier', tier);

            fetch(bsaWB.ajaxUrl, { method: 'POST', body: data })
                .then(function (r) { return r.json(); })
                .then(function (res) {
                    if (res.success && res.data.checkout_url) {
                        window.location.href = res.data.checkout_url;
                    } else {
                        showError(res.data?.message || 'Something went wrong. Please try again.');
                        btn.disabled = false;
                        btn.textContent = origText;
                    }
                })
                .catch(function () {
                    showError('Network error. Please check your connection and try again.');
                    btn.disabled = false;
                    btn.textContent = origText;
                });
        });
    });

    function showError(msg) {
        if (!error) return;
        error.textContent = msg;
        error.style.display = 'block';
    }
    function hideError() {
        if (!error) return;
        error.style.display = 'none';
    }
});
