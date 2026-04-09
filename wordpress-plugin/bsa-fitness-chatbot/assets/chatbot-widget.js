(function () {
  'use strict';

  // ── State ──
  var isOpen = false;
  var messages = [];
  var gender = '';
  var ageRange = '';
  var phase = 'intro'; // intro | chat
  var loading = false;
  var activeVideo = null;

  // ── DOM refs ──
  var fab, panel, chatBody, chatInput;

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function () {
    createFAB();
    createPanel();
  });

  // ── Floating Action Button (3D Mario ? Block with glow) ──
  function createFAB() {
    // Inject keyframe animations
    var styleEl = document.createElement('style');
    styleEl.textContent = ''
      + '@keyframes bsa-cube-float { 0%,100% { transform: translateY(0) rotateX(-8deg) rotateY(12deg); } 50% { transform: translateY(-6px) rotateX(-8deg) rotateY(12deg); } }'
      + '@keyframes bsa-cube-glow { 0%,100% { box-shadow: 0 4px 20px rgba(245,158,11,0.5), 0 0 30px rgba(245,158,11,0.2), inset 0 -4px 8px rgba(146,64,14,0.4); } 50% { box-shadow: 0 4px 30px rgba(245,158,11,0.8), 0 0 50px rgba(245,158,11,0.35), inset 0 -4px 8px rgba(146,64,14,0.4); } }'
      + '@keyframes bsa-sparkle { 0%,100% { opacity: 0; transform: scale(0) rotate(0deg); } 50% { opacity: 1; transform: scale(1) rotate(180deg); } }'
      + '#bsa-chat-fab:hover { animation: none !important; transform: translateY(-4px) rotateX(-5deg) rotateY(8deg) scale(1.08) !important; }'
      + '#bsa-chat-fab .bsa-sparkle { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #fef3c7; pointer-events: none; }'
      + '#bsa-chat-fab .bsa-sparkle:nth-child(2) { top: -4px; right: 6px; animation: bsa-sparkle 2s ease-in-out infinite 0.3s; }'
      + '#bsa-chat-fab .bsa-sparkle:nth-child(3) { bottom: 2px; left: -2px; animation: bsa-sparkle 2.5s ease-in-out infinite 0.8s; width: 4px; height: 4px; }'
      + '#bsa-chat-fab .bsa-sparkle:nth-child(4) { top: 8px; right: -3px; animation: bsa-sparkle 1.8s ease-in-out infinite 1.2s; width: 5px; height: 5px; }'
      + '#bsa-chat-fab .bsa-sparkle:nth-child(5) { bottom: -3px; right: 12px; animation: bsa-sparkle 2.2s ease-in-out infinite 0.5s; width: 3px; height: 3px; }';
    document.head.appendChild(styleEl);

    fab = document.createElement('div');
    fab.id = 'bsa-chat-fab';
    fab.title = 'Chat with Glen';
    Object.assign(fab.style, {
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      // 3D cube: top-lit gold gradient with depth
      background: 'linear-gradient(145deg, #fbbf24 0%, #f59e0b 40%, #d97706 70%, #92400e 100%)',
      color: '#fff',
      fontSize: '30px',
      fontWeight: '900',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: '99999',
      fontFamily: '"Arial Black", Arial, sans-serif',
      userSelect: 'none',
      // 3D borders: light top/left, dark bottom/right
      borderTop: '3px solid #fde68a',
      borderLeft: '3px solid #fcd34d',
      borderRight: '3px solid #92400e',
      borderBottom: '4px solid #78350f',
      // Inner shadow for depth + outer glow
      boxShadow: '0 4px 20px rgba(245,158,11,0.5), 0 0 30px rgba(245,158,11,0.2), inset 0 -4px 8px rgba(146,64,14,0.4)',
      // Subtle 3D rotation
      transform: 'rotateX(-8deg) rotateY(12deg)',
      transformStyle: 'preserve-3d',
      perspective: '200px',
      // Animations
      animation: 'bsa-cube-float 3s ease-in-out infinite, bsa-cube-glow 2s ease-in-out infinite',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      // Text shadow for engraved look
      textShadow: '0 2px 4px rgba(120,53,15,0.6), 0 -1px 0 rgba(253,230,138,0.3)',
    });

    // ? text
    var qMark = document.createElement('span');
    qMark.textContent = '?';
    qMark.style.position = 'relative';
    qMark.style.zIndex = '2';
    fab.appendChild(qMark);

    // Sparkle dots
    for (var i = 0; i < 4; i++) {
      var sparkle = document.createElement('span');
      sparkle.className = 'bsa-sparkle';
      fab.appendChild(sparkle);
    }

    fab.addEventListener('mouseenter', function () {
      fab.style.boxShadow = '0 6px 30px rgba(245,158,11,0.8), 0 0 60px rgba(245,158,11,0.4), inset 0 -4px 8px rgba(146,64,14,0.4)';
    });
    fab.addEventListener('mouseleave', function () {
      fab.style.boxShadow = '0 4px 20px rgba(245,158,11,0.5), 0 0 30px rgba(245,158,11,0.2), inset 0 -4px 8px rgba(146,64,14,0.4)';
    });
    fab.addEventListener('click', togglePanel);
    document.body.appendChild(fab);
  }

  // ── Chat Panel ──
  function createPanel() {
    panel = document.createElement('div');
    panel.id = 'bsa-chat-panel';
    var isWide = window.innerWidth > 480;
    Object.assign(panel.style, {
      position: 'fixed',
      bottom: '76px',
      right: isWide ? '16px' : '8px',
      left: isWide ? 'auto' : '8px',
      width: isWide ? '340px' : 'auto',
      maxWidth: '340px',
      height: isWide ? '500px' : '450px',
      maxHeight: 'calc(100vh - 90px)',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
      zIndex: '99998',
      display: 'none',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxSizing: 'border-box',
    });
    document.body.appendChild(panel);
  }

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.style.display = 'flex';
      fab.querySelector('span').textContent = '\u00D7';
      fab.style.animation = 'none';
      fab.style.transform = 'rotateX(0) rotateY(0)';
      render();
    } else {
      panel.style.display = 'none';
      fab.querySelector('span').textContent = '?';
      fab.style.animation = 'bsa-cube-float 3s ease-in-out infinite, bsa-cube-glow 2s ease-in-out infinite';
      fab.style.transform = '';
    }
  }

  // ── Render ──
  function render() {
    if (phase === 'intro') {
      renderIntro();
    } else {
      renderChat();
    }
  }

  function renderIntro() {
    panel.innerHTML = ''
      + '<div style="background:linear-gradient(135deg,#B37602,#8a5b00);color:#fff;padding:20px;text-align:center;flex-shrink:0;">'
      + '  <div style="font-size:32px;margin-bottom:8px;">&#128170;</div>'
      + '  <div style="font-size:18px;font-weight:700;margin-bottom:4px;">Hey! I\'m Glen.</div>'
      + '  <div style="font-size:13px;opacity:0.9;">25+ years of coaching. Ask me anything about training.</div>'
      + '</div>'
      + '<div style="padding:16px;flex:1;overflow-y:auto;overflow-x:hidden;box-sizing:border-box;">'
      + '  <div style="margin-bottom:16px;">'
      + '    <div style="font-size:13px;font-weight:600;color:#555;margin-bottom:8px;">Quick — what describes you best?</div>'
      + '    <div style="display:flex;gap:6px;margin-bottom:10px;">'
      + '      <button class="bsa-cb-opt" data-gender="Female" style="flex:1;min-width:0;padding:10px 4px;border:2px solid #e0e0e0;border-radius:10px;background:#fff;cursor:pointer;font-size:13px;font-weight:600;transition:all 0.2s;box-sizing:border-box;">Female</button>'
      + '      <button class="bsa-cb-opt" data-gender="Male" style="flex:1;min-width:0;padding:10px 4px;border:2px solid #e0e0e0;border-radius:10px;background:#fff;cursor:pointer;font-size:13px;font-weight:600;transition:all 0.2s;box-sizing:border-box;">Male</button>'
      + '    </div>'
      + '    <div style="display:flex;gap:6px;">'
      + '      <button class="bsa-cb-opt" data-age="18-30" style="flex:1;min-width:0;padding:8px 4px;border:2px solid #e0e0e0;border-radius:10px;background:#fff;cursor:pointer;font-size:12px;font-weight:500;transition:all 0.2s;box-sizing:border-box;">18–30</button>'
      + '      <button class="bsa-cb-opt" data-age="30-45" style="flex:1;min-width:0;padding:8px 4px;border:2px solid #e0e0e0;border-radius:10px;background:#fff;cursor:pointer;font-size:12px;font-weight:500;transition:all 0.2s;box-sizing:border-box;">30–45</button>'
      + '      <button class="bsa-cb-opt" data-age="45+" style="flex:1;min-width:0;padding:8px 4px;border:2px solid #e0e0e0;border-radius:10px;background:#fff;cursor:pointer;font-size:12px;font-weight:500;transition:all 0.2s;box-sizing:border-box;">45+</button>'
      + '    </div>'
      + '  </div>'
      + '  <button id="bsa-cb-start" style="width:100%;padding:12px;border:none;border-radius:12px;background:linear-gradient(135deg,#B37602,#8a5b00);color:#fff;font-size:14px;font-weight:600;cursor:pointer;opacity:0.4;pointer-events:none;transition:opacity 0.2s;box-sizing:border-box;">Let\'s Talk</button>'
      + '  <div style="text-align:center;margin-top:10px;font-size:11px;color:#999;">No sign-up required. Just a quick chat.</div>'
      + '</div>';

    // Wire up selection buttons
    var selectedGender = null;
    var selectedAge = null;

    panel.querySelectorAll('.bsa-cb-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var g = btn.getAttribute('data-gender');
        var a = btn.getAttribute('data-age');

        if (g) {
          selectedGender = g;
          panel.querySelectorAll('[data-gender]').forEach(function (b) {
            b.style.borderColor = '#e0e0e0';
            b.style.background = '#fff';
            b.style.color = '#333';
          });
          btn.style.borderColor = '#B37602';
          btn.style.background = 'linear-gradient(135deg,#B37602,#8a5b00)';
          btn.style.color = '#fff';
        }
        if (a) {
          selectedAge = a;
          panel.querySelectorAll('[data-age]').forEach(function (b) {
            b.style.borderColor = '#e0e0e0';
            b.style.background = '#fff';
            b.style.color = '#333';
          });
          btn.style.borderColor = '#B37602';
          btn.style.background = 'linear-gradient(135deg,#B37602,#8a5b00)';
          btn.style.color = '#fff';
        }

        var startBtn = document.getElementById('bsa-cb-start');
        if (selectedGender && selectedAge) {
          startBtn.style.opacity = '1';
          startBtn.style.pointerEvents = 'auto';
        }
      });
    });

    document.getElementById('bsa-cb-start').addEventListener('click', function () {
      if (!selectedGender || !selectedAge) return;
      gender = selectedGender;
      ageRange = selectedAge;
      phase = 'chat';
      messages = [{
        text: "What's on your mind? Training questions, where to start, how to move better — whatever you've got.",
        isBot: true,
      }];
      render();
    });
  }

  function renderChat() {
    panel.innerHTML = ''
      // Header
      + '<div style="background:linear-gradient(135deg,#B37602,#8a5b00);color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">'
      + '  <div>'
      + '    <div style="font-size:15px;font-weight:700;">Glen</div>'
      + '    <div style="font-size:11px;opacity:0.8;">Be Strong Again</div>'
      + '  </div>'
      + '  <button id="bsa-cb-reset" style="background:rgba(255,255,255,0.2);border:none;color:#fff;padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer;">New Chat</button>'
      + '</div>'
      // Messages
      + '<div id="bsa-cb-messages" style="flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;padding:10px;"></div>'
      // Input
      + '<div style="padding:8px 10px;border-top:1px solid #e5e7eb;display:flex;gap:6px;box-sizing:border-box;flex-shrink:0;">'
      + '  <input id="bsa-cb-input" type="text" placeholder="Ask me anything..." style="flex:1;min-width:0;padding:10px 12px;border:2px solid #e0e0e0;border-radius:10px;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box;" />'
      + '  <button id="bsa-cb-send" style="padding:10px 14px;border:none;border-radius:10px;background:linear-gradient(135deg,#B37602,#8a5b00);color:#fff;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;">Send</button>'
      + '</div>';

    chatBody = document.getElementById('bsa-cb-messages');
    chatInput = document.getElementById('bsa-cb-input');

    renderMessages();

    // Wire events
    document.getElementById('bsa-cb-send').addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    document.getElementById('bsa-cb-reset').addEventListener('click', function () {
      messages = [];
      phase = 'intro';
      gender = '';
      ageRange = '';
      activeVideo = null;
      render();
    });

    // Don't auto-focus on mobile — prevents keyboard from pushing layout
    if (window.innerWidth > 480) {
      chatInput.focus();
    }
  }

  function renderMessages() {
    if (!chatBody) return;
    chatBody.innerHTML = '';

    messages.forEach(function (msg, i) {
      var div = document.createElement('div');
      Object.assign(div.style, {
        marginBottom: '12px',
        display: 'flex',
        justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
      });

      var bubble = document.createElement('div');
      Object.assign(bubble.style, {
        maxWidth: '85%',
        padding: '10px 14px',
        borderRadius: msg.isBot ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
        background: msg.isBot ? '#f3f4f6' : 'linear-gradient(135deg,#B37602,#8a5b00)',
        color: msg.isBot ? '#333' : '#fff',
        fontSize: '13px',
        lineHeight: '1.5',
        wordBreak: 'break-word',
      });
      bubble.textContent = msg.text;
      div.appendChild(bubble);

      // Videos
      if (msg.videos && msg.videos.length > 0) {
        var vidContainer = document.createElement('div');
        vidContainer.style.marginTop = '6px';

        msg.videos.forEach(function (video, vi) {
          var videoKey = i + '-' + vi;
          var vidBtn = document.createElement('button');
          var isActive = activeVideo === videoKey;
          Object.assign(vidBtn.style, {
            display: 'block',
            marginBottom: '4px',
            padding: '6px 12px',
            borderRadius: '8px',
            border: '1px solid #B37602',
            background: isActive ? '#B37602' : 'rgba(179,118,2,0.1)',
            color: isActive ? '#fff' : '#B37602',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
            width: '100%',
          });
          vidBtn.textContent = (isActive ? '\u25BC ' : '\u25B6 ') + video.name;
          vidBtn.addEventListener('click', function () {
            activeVideo = activeVideo === videoKey ? null : videoKey;
            renderMessages();
          });
          vidContainer.appendChild(vidBtn);

          if (isActive) {
            var iframeWrap = document.createElement('div');
            Object.assign(iframeWrap.style, {
              position: 'relative',
              paddingBottom: '56.25%',
              height: '0',
              overflow: 'hidden',
              borderRadius: '8px',
              marginTop: '4px',
              marginBottom: '6px',
            });
            var iframe = document.createElement('iframe');
            iframe.src = video.url + '?autoplay=false';
            Object.assign(iframe.style, {
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
            });
            iframe.allow = 'accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture';
            iframe.allowFullscreen = true;
            iframeWrap.appendChild(iframe);
            vidContainer.appendChild(iframeWrap);
          }
        });

        bubble.appendChild(vidContainer);
      }

      chatBody.appendChild(div);
    });

    // Loading indicator
    if (loading) {
      var loadDiv = document.createElement('div');
      loadDiv.style.marginBottom = '12px';
      var loadBubble = document.createElement('div');
      Object.assign(loadBubble.style, {
        display: 'inline-block',
        padding: '10px 18px',
        borderRadius: '14px 14px 14px 4px',
        background: '#f3f4f6',
        color: '#999',
        fontSize: '13px',
        fontStyle: 'italic',
      });
      loadBubble.textContent = 'Glen is typing...';
      loadDiv.appendChild(loadBubble);
      chatBody.appendChild(loadDiv);
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // ── Send Message ──
  function sendMessage() {
    if (loading) return;
    var text = chatInput.value.trim();
    if (!text) return;

    messages.push({ text: text, isBot: false });
    chatInput.value = '';
    loading = true;
    renderMessages();

    fetch(bsaChatbot.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': bsaChatbot.nonce,
      },
      body: JSON.stringify({
        message: text,
        gender: gender,
        age_range: ageRange,
        history: messages.slice(-10),
      }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        loading = false;
        if (data.error) {
          messages.push({ text: data.error, isBot: true });
        } else {
          messages.push({
            text: data.reply,
            isBot: true,
            videos: data.videos || [],
          });
        }
        renderMessages();
      })
      .catch(function () {
        loading = false;
        messages.push({ text: "Something went wrong. Try again in a sec.", isBot: true });
        renderMessages();
      });
  }
})();
