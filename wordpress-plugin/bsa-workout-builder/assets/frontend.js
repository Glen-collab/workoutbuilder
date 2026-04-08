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

    // ── Checkout submit ──
    var btn   = document.getElementById('bsa-wb-submit');
    var error = document.getElementById('bsa-wb-error');
    if (!btn) return;

    btn.addEventListener('click', function () {
        var email = document.getElementById('bsa-wb-email');
        if (!email || !email.value || email.value.indexOf('@') === -1) {
            showError('Please enter a valid email address.');
            return;
        }

        var selected = document.querySelector('.bsa-wb-level.selected input');
        var level    = selected ? selected.value : 'bodyweight';

        btn.disabled  = true;
        btn.textContent = 'Redirecting to checkout...';
        hideError();

        var data = new FormData();
        data.append('action', 'bsa_wb_checkout');
        data.append('nonce', bsaWB.nonce);
        data.append('email', email.value);
        data.append('fitness_level', level);

        fetch(bsaWB.ajaxUrl, { method: 'POST', body: data })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res.success && res.data.checkout_url) {
                    window.location.href = res.data.checkout_url;
                } else {
                    showError(res.data?.message || 'Something went wrong. Please try again.');
                    btn.disabled = false;
                    btn.textContent = 'Subscribe — $20/month';
                }
            })
            .catch(function () {
                showError('Network error. Please check your connection and try again.');
                btn.disabled = false;
                btn.textContent = 'Subscribe — $20/month';
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
