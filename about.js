
  function injectSidebarAndCSS() {
    // Inject local CSS
    const localCSS = document.createElement('link');
    localCSS.rel = 'stylesheet';
    localCSS.href = 'st.css';
    document.head.appendChild(localCSS);

    // Inject Font Awesome CSS
    const faCSS = document.createElement('link');
    faCSS.rel = 'stylesheet';
    faCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(faCSS);

    // Inject Sidebar HTML
    const sidebarHTML = `
      <div class="sidebar">
        <img src="https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png" width="70" height="70" alt="logo">
        <ul>
          <li><a href="index.html"><i class="fas fa-home icon"></i><span class="text">Home</span></a></li>
          <li><a href="games.html"><i class="fas fa-gamepad icon"></i><span class="text">Games</span></a></li>          
          <li><a href="ai.html"><i class="fas fa-robot icon"></i><span class="text">AI</span></a></li>
          <li><a href="music.html"><i class="fas fa-music icon"></i><span class="text">Music</span></a></li>
          <li><a href="chat.html"><i class="fa-regular fa-comments icon"></i><span class="text">Chat</span></a></li>
          <li><a href="tools.html"><i class="fa-solid fa-shapes"></i><span class="text">Apps</span></a></li>
          <li><a href="settings.html"><i class="fas fa-cog icon"></i><span class="text">Settings</span></a></li>
        </ul>
      </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  }

  // Run after DOM is ready
  window.addEventListener('DOMContentLoaded', injectSidebarAndCSS);

(function () {
  /* ── Skip if already done ── */
  if (localStorage.getItem('onboarding_done')) {
    installPanicListener();
    return;
  }

  window.addEventListener('load', () => setTimeout(showOnboarding, 500));

  /* ══════════════════════════════════════════
     PRESETS
  ══════════════════════════════════════════ */
  const PRESETS = {
    'Codelistener':    { title: 'Codelistener',            icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png' },
    'Canvas':          { title: 'Dashboard',               icon: 'https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png' },
    'Chrome New-Tab':  { title: 'New Tab',                 icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/chrome.png' },
    'Clever':          { title: 'Clever | Portal',         icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUUZP8OYv8AX/8AW/8AWP8AWf8AXf9wl/+xxf/Q3P/b5f/V4P+8zf+Lqf8lbP8KYf+et/////87d//v9P+Sr/8AVf9Ce/+swv98n//J1//o7v8XZ/9Jf/8AVP/1+f+2yf9kj/8tcP+mvf/GrVhhAAAA30lEQVR4Aa2SBXLEMAwAZQyD0jAn//9jwTem0uEO2msQwSsglHHOhSS/KMaCMIqTNMt5AT4FL1ETVcJzsnpDh7pxHG3Rp7OWACqius9SVGRMy2b4Wo9VI6UULFR20sHMynEKiqVGjGcdsVBP5SaBJg0Wu1g/3cbBwCgYJvxk9zI3FCqPg9wvf3/WCygUYGD6oEllMu824a5T0UWIm8sGWbKvxphsmkjZo5FUCn565QMyoWLIgr5bL01joKEz+mwLWGS7uq5s/Eqw06ikFeBDGO3TeIyHump+q4cUZjSf5QN13xRHxRLRmwAAAABJRU5ErkJggg==' },
    'Google Drive':    { title: 'Home - Google Drive',     icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
    'Kahoot':          { title: 'Enter Game PIN - Kahoot!',icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEU2AJ4xAJxbOq6HcMJ4XrtbN65CC6UzAJ85AKFmQ7RtT7bVzOnq5PXb0+3JveOzpNiFbMFCEaSYg8vQxufx7fiumdcrAJpQJar////8+/7CtuC3pdxBAKW/r+BgM7RULauEaMIlAJn39fuei812VbxPIKrj3PBsSrazoNpOGqusldekjNN3U76Nd8WEY8S1otsQrUK2AAABIUlEQVR4AWKgJgBQNReIDcNAEAB1ATPDZWNmh/v/39VQkGzR3gho+eQsRTocT2dN/2cyzuZvIst2XM8PtJ8cRnGS8go6M11sANdMo822mC/IRZlWhlFeFyx1oSDVMZA0bdQBXU8KkhmvRYMHB0gClrG1FkNqEI0T4Mwy3ubVSoOE0DNgupCE7tKR1WuJ+yvsQsbrYoi2Cg9XZLqQcPvycMv3BA9WsHMTONu1QvfQKNj5lQcMW42fMBX0DOFf8Wg3fHV3kjFt6Z3Apf1Ru1DwxjRPuO4njKchVCTNAz77W2eh4BcL6juUKxIz/WN8XU4KthxMGgkavfjFv6qZn2AmIcLTMVge5Tfg6ztJ9zDzmgLXSQ3xPRyAXV2ADW/ipDB5AwCtBhzTGvN0rwAAAABJRU5ErkJggg==' },
    'Wayground':       { title: 'Wayground',               icon: 'https://cf.quizizz.com/img/wayground/brand/favicon/favicon-16x16.ico' }
  };

  /* ══════════════════════════════════════════
     INJECT FONTS + STYLES
  ══════════════════════════════════════════ */
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Fira+Code:wght@300;400;500&display=swap';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent = `
/* ── Onboarding variables ── */
#ob-shell {
  --mint:       #26ff9a;
  --mint-b:     #0dff80;
  --mint-glow:  rgba(38,255,154,0.55);
  --mint-glow-s:rgba(38,255,154,0.12);
  --mint-dim:   rgba(38,255,154,0.07);
  --red:        #ff2d55;
  --red-glow:   rgba(255,45,85,0.5);
  --bg:         rgba(0,0,0,0.72);
  --panel:      rgba(6,6,6,0.98);
  --surf1:      #0c0c0c;
  --surf2:      #131313;
  --surf3:      #1a1a1a;
  --border:     rgba(255,255,255,0.06);
  --border-h:   rgba(38,255,154,0.3);
  --text:       #f0f0f0;
  --text-dim:   #999;
  --text-muted: #676767;
  --ff-display: 'Bebas Neue', sans-serif;
  --ff-body:    'DM Sans', sans-serif;
  --ff-mono:    'Fira Code', monospace;
}

/* ── Keyframes ── */
@keyframes ob-in     { from{opacity:0;transform:scale(.9) translateY(16px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes ob-out    { to{opacity:0;transform:scale(.88) translateY(12px)} }
@keyframes ob-slide  { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
@keyframes ob-scan   { 0%{transform:translateY(-100%);opacity:.4} 100%{transform:translateY(400px);opacity:0} }
@keyframes ob-dot    { 0%,100%{opacity:.04} 50%{opacity:.1} }
@keyframes ob-glow   { 0%,100%{text-shadow:0 0 10px rgba(38,255,154,0.4)} 50%{text-shadow:0 0 30px rgba(38,255,154,1),0 0 60px rgba(38,255,154,0.4)} }
@keyframes ob-breath { 0%,100%{box-shadow:0 0 20px rgba(38,255,154,0.1),0 0 0 1px rgba(38,255,154,0.15)} 50%{box-shadow:0 0 50px rgba(38,255,154,0.35),0 0 0 1px rgba(38,255,154,0.5)} }
@keyframes ob-shimmer{ 0%{background-position:-400% 0} 100%{background-position:400% 0} }
@keyframes ob-spin   { to{transform:rotate(360deg)} }
@keyframes ob-pop    { 0%{opacity:0;transform:scale(.3) rotate(-8deg)} 70%{transform:scale(1.1)} 100%{opacity:1;transform:scale(1)} }
@keyframes ob-key-in { from{opacity:0;transform:scale(.5) translateY(-4px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes ob-progress-fill { from{width:0%} }
@keyframes ob-conic  { to{transform:rotate(360deg)} }
@keyframes ob-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes ob-cursor { 0%,100%{opacity:1} 50%{opacity:0} }

/* ── Backdrop ── */
#ob-shell {
  position: fixed; inset: 0;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999999;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  overflow: hidden;
}
/* Atmospheric dot grid */
#ob-shell::before {
  content:''; position:absolute; inset:0;
  background-image:radial-gradient(circle,rgba(38,255,154,0.06) 1px,transparent 1px);
  background-size:28px 28px;
  pointer-events:none;
  animation:ob-dot 6s ease-in-out infinite alternate;
}
/* Radial glow */
#ob-shell::after {
  content:''; position:absolute; inset:0;
  background:radial-gradient(ellipse 60% 50% at 50% -10%,rgba(38,255,154,0.07) 0%,transparent 55%);
  pointer-events:none;
}
/* Scanline */
#ob-scanline {
  position:absolute; left:0; right:0; height:2px; z-index:1;
  background:linear-gradient(transparent,rgba(38,255,154,0.07),transparent);
  animation:ob-scan 10s linear infinite;
  pointer-events:none;
}

/* ── Panel ── */
#ob-panel {
  position: relative; z-index: 2;
  width: 460px;
  background: var(--panel);
  border-radius: 20px;
  border: 1px solid rgba(38,255,154,0.2);
  overflow: hidden;
  animation: ob-in .5s cubic-bezier(.22,1,.36,1) both;
  box-shadow:
    0 0 0 1px rgba(38,255,154,0.06),
    0 0 60px rgba(38,255,154,0.12),
    0 40px 80px rgba(0,0,0,0.7);
}
/* Rotating conic border highlight */
#ob-panel::before {
  content:''; position:absolute; top:50%; left:50%;
  width:140%; height:140%;
  transform:translate(-50%,-50%);
  background:conic-gradient(from 0deg,transparent 0%,rgba(38,255,154,0.15) 6%,transparent 14%);
  pointer-events:none; z-index:0; border-radius:50%;
  animation:ob-conic 8s linear infinite;
}
/* Top beam */
#ob-panel::after {
  content:''; position:absolute; top:0; left:8%; right:8%; height:1px;
  background:linear-gradient(90deg,transparent,var(--mint) 40%,var(--mint-b) 60%,transparent);
  opacity:.5; z-index:3; pointer-events:none;
}

/* ── Progress bar ── */
#ob-progress-track {
  position: relative; z-index:5;
  height: 2px;
  background: rgba(255,255,255,0.04);
  overflow: hidden;
}
#ob-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--mint), var(--mint-b));
  box-shadow: 0 0 8px var(--mint-glow);
  transition: width .5s cubic-bezier(.4,0,.2,1);
  width: 0%;
}

/* ── Content area ── */
#ob-content {
  position: relative; z-index:5;
  padding: 32px 32px 0;
  min-height: 280px;
  animation: ob-slide .35s ease both;
}

/* ── Step indicator ── */
.ob-step-indicator {
  display: flex; gap: 6px; margin-bottom: 6px;
}
.ob-step-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--surf3); transition: all .3s ease;
}
.ob-step-dot.done { background: var(--mint); box-shadow: 0 0 6px var(--mint); }
.ob-step-dot.active {
  background: var(--mint); box-shadow: 0 0 10px var(--mint);
  width: 18px; border-radius: 3px;
}

/* ── Welcome step ── */
.ob-welcome-logo {
  width: 64px; height: 64px; margin: 0 auto 18px;
  border-radius: 18px; overflow: hidden;
  border: 1px solid rgba(38,255,154,0.25);
  box-shadow: 0 0 24px rgba(38,255,154,0.2);
  animation: ob-float 3s ease-in-out infinite;
  display:block;
}
.ob-welcome-title {
  font-family: var(--ff-display);
  font-size: 42px; letter-spacing: .04em;
  color: #fff; text-align: center; line-height: 1;
  margin-bottom: 6px;
  animation: ob-glow 4s ease-in-out infinite;
}
.ob-welcome-title span { color: var(--mint); }
.ob-welcome-sub {
  font-family: var(--ff-mono);
  font-size: 10px; letter-spacing: .22em; text-transform: uppercase;
  color: var(--text-dim); text-align: center; margin-bottom: 18px;
}
/* Typewriter cursor */
.ob-cursor { animation: ob-cursor 1s step-end infinite; }
.ob-welcome-desc {
  font-family: var(--ff-body);
  font-size: 13px; color: rgba(255,255,255,0.5);
  text-align: center; line-height: 1.7;
  margin-bottom: 8px;
}
.ob-feature-row {
  display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;
}
.ob-feature-chip {
  display: flex; align-items: center; gap: 6px;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 8px; padding: 6px 12px;
  font-family: var(--ff-mono); font-size: 10px; letter-spacing: .08em;
  color: var(--text-dim);
  animation: ob-pop .4s cubic-bezier(.34,1.56,.64,1) both;
}
.ob-feature-chip i { color: var(--mint); font-size: 11px; }

/* ── Section headings ── */
.ob-step-title {
  font-family: var(--ff-display);
  font-size: 30px; letter-spacing: .04em; color: #fff;
  margin-bottom: 4px; line-height: 1;
}
.ob-step-sub {
  font-family: var(--ff-mono);
  font-size: 9px; letter-spacing: .2em; text-transform: uppercase;
  color: var(--text-dim); margin-bottom: 18px;
}

/* ── Inputs ── */
.ob-field-label {
  font-family: var(--ff-mono);
  font-size: 9px; letter-spacing: .2em; text-transform: uppercase;
  color: var(--text-dim); margin-bottom: 6px;
}
.ob-input {
  width: 100%; padding: 11px 14px;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 10px; color: var(--text);
  font-family: var(--ff-mono); font-size: 13px; letter-spacing: .04em;
  outline: none; transition: all .3s ease;
  box-sizing: border-box;
}
.ob-input::placeholder { color: var(--text-muted); }
.ob-input:focus {
  border-color: var(--border-h);
  box-shadow: 0 0 0 3px rgba(38,255,154,0.07), 0 0 18px rgba(38,255,154,0.08);
}

/* ── Preset grid ── */
.ob-preset-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8px; margin-top: 4px;
}
.ob-preset-option {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 10px; cursor: pointer;
  transition: all .25s ease; position: relative;
  overflow: hidden;
}
.ob-preset-option::before {
  content:''; position:absolute; inset:0;
  background:linear-gradient(120deg,transparent 30%,rgba(38,255,154,0.05),transparent 70%);
  background-size:200% 100%; opacity:0; transition:opacity .3s;
}
.ob-preset-option:hover::before { opacity:1; animation:ob-shimmer 1.5s ease infinite; }
.ob-preset-option:hover {
  border-color: rgba(38,255,154,0.2);
  background: rgba(38,255,154,0.04);
}
.ob-preset-option.selected {
  border-color: var(--mint);
  background: var(--mint-dim);
  box-shadow: 0 0 12px rgba(38,255,154,0.15);
}
.ob-preset-option.selected::after {
  content: '✓'; position:absolute; top:6px; right:8px;
  font-size: 10px; color: var(--mint);
  font-family: var(--ff-mono); font-weight: 600;
  animation: ob-pop .3s ease;
}
.ob-preset-icon { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
.ob-preset-name {
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .06em;
  color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.ob-preset-radio { display: none; }

/* ── Panic step ── */
.ob-panic-box {
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 12px; padding: 16px;
  margin-bottom: 12px; position: relative; overflow: hidden;
  min-height: 64px;
  display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 6px;
}
.ob-panic-box.recording {
  border-color: rgba(255,45,85,0.35);
  box-shadow: 0 0 16px rgba(255,45,85,0.12);
}
.ob-panic-box.done-rec {
  border-color: var(--border-h);
  box-shadow: 0 0 12px rgba(38,255,154,0.1);
}
.ob-panic-placeholder {
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .12em;
  color: var(--text-muted); text-transform: uppercase;
}
.ob-key-chip {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--surf3); border: 1px solid rgba(38,255,154,0.25);
  border-radius: 6px; padding: 5px 12px;
  font-family: var(--ff-mono); font-size: 13px; color: var(--mint);
  box-shadow: 0 0 8px rgba(38,255,154,0.15), 0 2px 0 rgba(0,0,0,0.5);
  animation: ob-key-in .25s cubic-bezier(.34,1.56,.64,1) both;
  text-transform: uppercase;
}
.ob-key-sep {
  font-family: var(--ff-mono); font-size: 13px; color: var(--text-dim);
}
.ob-timer-bar {
  position:absolute; bottom:0; left:0; height:2px;
  background: linear-gradient(90deg, var(--red), rgba(255,45,85,0.4));
  box-shadow: 0 0 6px var(--red-glow);
  animation: ob-timer-shrink 5s linear forwards;
}
@keyframes ob-timer-shrink { from{width:100%} to{width:0%} }
.ob-panic-warning {
  font-family: var(--ff-mono); font-size: 9px; letter-spacing: .1em;
  color: var(--red); text-align: center; margin-top: 4px;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.ob-panic-warning i { animation: ob-dot 1s ease-in-out infinite; }

/* ── Blank / toggle step ── */
.ob-toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 12px; padding: 14px 16px; margin-bottom: 10px;
  cursor: pointer; transition: all .25s;
}
.ob-toggle-row:hover { border-color: rgba(38,255,154,0.2); }
.ob-toggle-row.on { border-color: var(--border-h); background: var(--mint-dim); }
.ob-toggle-label {
  display: flex; align-items: center; gap: 10px;
}
.ob-toggle-icon { color: var(--mint); font-size: 14px; width: 18px; text-align: center; }
.ob-toggle-text { font-family: var(--ff-body); font-size: 13px; color: var(--text); }
.ob-toggle-sub { font-family: var(--ff-mono); font-size: 10px; color: var(--text-dim); letter-spacing: .04em; margin-top: 2px; }
.ob-toggle-switch {
  width: 36px; height: 20px; border-radius: 999px;
  background: var(--surf3); border: 1px solid var(--border);
  position: relative; transition: all .3s ease; flex-shrink: 0;
}
.ob-toggle-switch::after {
  content:''; position:absolute; top:3px; left:3px;
  width:12px; height:12px; border-radius:50%;
  background: var(--text-dim); transition: all .3s ease;
}
.ob-toggle-row.on .ob-toggle-switch {
  background: var(--mint);
  border-color: var(--mint);
  box-shadow: 0 0 10px var(--mint-glow);
}
.ob-toggle-row.on .ob-toggle-switch::after {
  left: 19px; background: #000;
}

/* ── Widget settings ── */
.ob-widget-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.ob-widget-option {
  display: flex; flex-direction: column; gap: 5px;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 10px; padding: 10px 12px; cursor: pointer;
  transition: all .25s ease; position: relative;
}
.ob-widget-option:hover { border-color: rgba(38,255,154,0.2); background: rgba(38,255,154,0.03); }
.ob-widget-option.selected { border-color: var(--mint); background: var(--mint-dim); box-shadow: 0 0 12px rgba(38,255,154,0.12); }
.ob-widget-option.selected::after { content:'✓'; position:absolute; top:6px; right:8px; font-size:10px; color:var(--mint); font-family:var(--ff-mono); animation:ob-pop .3s ease; }
.ob-widget-name { font-family: var(--ff-mono); font-size: 11px; letter-spacing: .06em; color: var(--text); }
.ob-widget-sub  { font-family: var(--ff-mono); font-size: 9px; color: var(--text-dim); letter-spacing: .04em; }
.ob-widget-corner-row {
  display: flex; gap: 8px; margin-top: 10px;
}
.ob-corner-btn {
  flex: 1; padding: 8px;
  background: var(--surf2); border: 1px solid var(--border);
  border-radius: 8px; cursor: pointer;
  font-family: var(--ff-mono); font-size: 10px; letter-spacing: .06em;
  color: var(--text-dim); transition: all .25s; text-align: center;
}
.ob-corner-btn:hover { color: var(--mint); border-color: var(--border-h); }
.ob-corner-btn.selected { color: var(--mint); border-color: var(--mint); background: var(--mint-dim); }

/* ── Footer / button area ── */
#ob-footer {
  position: relative; z-index:5;
  padding: 20px 32px 28px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
}
.ob-step-label {
  font-family: var(--ff-mono); font-size: 9px; letter-spacing: .2em;
  text-transform: uppercase; color: var(--text-muted);
}
.ob-btn-next {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 28px; border: none; border-radius: 10px;
  background: var(--mint); color: #000;
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700;
  cursor: pointer; transition: all .3s cubic-bezier(.34,1.56,.64,1);
  position: relative; overflow: hidden;
  box-shadow: 0 0 16px var(--mint-glow);
}
.ob-btn-next::before {
  content:''; position:absolute; inset:0; border-radius:10px;
  background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.18),transparent 70%);
  background-size:200% 100%; opacity:0; transition:opacity .3s;
}
.ob-btn-next:hover::before { opacity:1; animation:ob-shimmer 1.5s ease infinite; }
.ob-btn-next:hover { background:#4dffa8; transform:translateY(-2px); box-shadow:0 0 28px var(--mint-glow),0 6px 20px rgba(0,0,0,0.4); }
.ob-btn-next:active { transform:scale(.95); }
.ob-btn-next.finish { background: var(--red); color: #fff; box-shadow: 0 0 16px var(--red-glow); }
.ob-btn-next.finish:hover { background:#ff4570; box-shadow:0 0 28px var(--red-glow); }

/* ── Divider ── */
.ob-divider { height:1px; background:var(--border); margin: 14px 0; }
`;
  document.head.appendChild(style);

  /* ══════════════════════════════════════════
     STATE
  ══════════════════════════════════════════ */
  const TOTAL_STEPS = 6; // welcome, username, disguise, panic, blank, widget
  let step = 0;
  let data = {
    username: '',
    preset: 'Codelistener',
    panic: [],
    panicURL: 'https://google.com',
    aboutBlank: false,
    widgetStyle: 'float',
    widgetPos: 'bottom-right',
    widgetEnabled: true
  };
  let panicListening = false;

  /* ══════════════════════════════════════════
     SCAFFOLD
  ══════════════════════════════════════════ */
  function showOnboarding() {
    const shell = document.createElement('div');
    shell.id = 'ob-shell';
    shell.innerHTML = `
      <div id="ob-scanline"></div>
      <div id="ob-panel">
        <div id="ob-progress-track"><div id="ob-progress-fill"></div></div>
        <div id="ob-content"></div>
        <div id="ob-footer">
          <span class="ob-step-label" id="ob-step-label">STEP 1 OF ${TOTAL_STEPS}</span>
          <button class="ob-btn-next" id="ob-next-btn">
            Continue <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>`;
    document.body.appendChild(shell);
    renderStep();

    shell.querySelector('#ob-next-btn').addEventListener('click', nextStep);
  }

  /* ══════════════════════════════════════════
     RENDER STEP
  ══════════════════════════════════════════ */
  function renderStep() {
    const content  = document.getElementById('ob-content');
    const fill     = document.getElementById('ob-progress-fill');
    const label    = document.getElementById('ob-step-label');
    const nextBtn  = document.getElementById('ob-next-btn');

    fill.style.width = ((step / TOTAL_STEPS) * 100) + '%';
    label.textContent = step === 0 ? 'WELCOME' : `STEP ${step} OF ${TOTAL_STEPS - 1}`;

    // Animate content out then back in
    content.style.animation = 'none';
    content.offsetHeight; // reflow
    content.style.animation = 'ob-slide .35s ease both';

    /* Update next button */
    nextBtn.className = 'ob-btn-next' + (step === TOTAL_STEPS - 1 ? ' finish' : '');
    nextBtn.innerHTML = step === TOTAL_STEPS - 1
      ? `Finish <i class="fa-solid fa-check"></i>`
      : `Continue <i class="fa-solid fa-arrow-right"></i>`;

    /* Render dots */
    const dots = Array.from({ length: TOTAL_STEPS }, (_, i) =>
      `<div class="ob-step-dot ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}"></div>`
    ).join('');

    switch (step) {
      case 0: renderWelcome(content, dots); break;
      case 1: renderUsername(content, dots); break;
      case 2: renderDisguise(content, dots); break;
      case 3: renderPanic(content, dots); break;
      case 4: renderBlank(content, dots); break;
      case 5: renderWidget(content, dots); break;
    }
  }

  /* ── Step 0: Welcome ── */
  function renderWelcome(el, dots) {
    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <img class="ob-welcome-logo" src="https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png" alt="CL">
      <div class="ob-welcome-title">WELCOME TO <span>CODELISTENER</span></div>
      <div class="ob-welcome-sub">Your browser. Your rules.<span class="ob-cursor">|</span></div>
      <div class="ob-welcome-desc">
        Let's get you set up in under a minute.<br>
        Games, music, Apps, AI — all in one place.
      </div>
      <div class="ob-feature-row">
        <div class="ob-feature-chip" style="animation-delay:.1s"><i class="fa-solid fa-gamepad"></i> Games</div>
        <div class="ob-feature-chip" style="animation-delay:.2s"><i class="fa-solid fa-music"></i> Music</div>
        <div class="ob-feature-chip" style="animation-delay:.3s"><i class="fa-solid fa-apps"></i>Apps</div>
        <div class="ob-feature-chip" style="animation-delay:.4s"><i class="fa-solid fa-robot"></i> AI</div>
        <div class="ob-feature-chip" style="animation-delay:.5s"><i class="fa-solid fa-shield"></i> Panic Key</div>
        <div class="ob-feature-chip" style="animation-delay:.6s"><i class="fa-solid fa-mask"></i> Tab Disguise</div>
      </div>
      <div style="height:20px;"></div>
    `;
  }

  /* ── Step 1: Username ── */
  function renderUsername(el, dots) {
    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <div class="ob-step-title">YOUR NAME</div>
      <div class="ob-step-sub">Used in chat and live streams</div>
      <div class="ob-step-sub">Note: Always enter the Same Name. Or else, you are gonna Lose your Data</div>
      <div class="ob-field-label">Display Name</div>
      <input class="ob-input" id="ob-username" placeholder="e.g. shadow_coder" value="${data.username}" maxlength="24" autocomplete="off">
      <div style="height:24px;"></div>
    `;
    setTimeout(() => document.getElementById('ob-username')?.focus(), 100);
  }

  /* ── Step 2: Tab disguise ── */
  function renderDisguise(el, dots) {
    const options = Object.entries(PRESETS).map(([name, v]) => `
      <label class="ob-preset-option ${data.preset === name ? 'selected' : ''}" data-preset="${name}">
        <input class="ob-preset-radio" type="radio" name="ob-preset" value="${name}" ${data.preset === name ? 'checked' : ''}>
        <img class="ob-preset-icon" src="${v.icon}" onerror="this.src='https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png'" alt="">
        <span class="ob-preset-name">${name}</span>
      </label>`).join('');

    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <div class="ob-step-title">TAB DISGUISE</div>
      <div class="ob-step-sub">Change how this tab looks in your browser</div>
      <div class="ob-preset-grid">${options}</div>
      <div style="height:20px;"></div>
    `;

    el.querySelectorAll('.ob-preset-option').forEach(opt => {
      opt.addEventListener('click', () => {
        data.preset = opt.dataset.preset;
        el.querySelectorAll('.ob-preset-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  }

  /* ── Step 3: Panic key ── */
  function renderPanic(el, dots) {
    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <div class="ob-step-title">PANIC KEY</div>
      <div class="ob-step-sub">Press a key combo to instantly redirect</div>
      <div class="ob-panic-box" id="ob-panic-box">
        <span class="ob-panic-placeholder" id="ob-panic-ph">Press keys to record…</span>
        <div class="ob-timer-bar" id="ob-timer-bar"></div>
      </div>
      <div class="ob-panic-warning"><i class="fa-solid fa-circle-dot"></i> Recording for 5 seconds — press your combo now</div>
      <div style="height:10px;"></div>
      <div class="ob-field-label" style="margin-top:10px;">Redirect URL</div>
      <input class="ob-input" id="ob-panic-url" placeholder="https://google.com" value="${data.panicURL}">
      <div style="height:16px;"></div>
    `;

    // Start recording immediately
    const keys = [];
    const seen = new Set();
    const box  = document.getElementById('ob-panic-box');
    const ph   = document.getElementById('ob-panic-ph');

    box.classList.add('recording');
    panicListening = true;

    const handler = (e) => {
      if (!panicListening) return;
      const k = e.key.toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        keys.push(k);
        updatePanicDisplay(box, ph, keys);
      }
    };
    window.addEventListener('keydown', handler);

    setTimeout(() => {
      window.removeEventListener('keydown', handler);
      panicListening = false;
      data.panic = [...keys];
      if (box) {
        box.classList.remove('recording');
        box.classList.add('done-rec');
        const timerBar = document.getElementById('ob-timer-bar');
        if (timerBar) timerBar.remove();
      }
      if (keys.length === 0 && ph) {
        ph.textContent = 'No keys recorded — skipping panic key';
      }
    }, 5000);
  }

  function updatePanicDisplay(box, ph, keys) {
    if (ph) ph.style.display = 'none';
    // Remove old chips
    box.querySelectorAll('.ob-key-chip, .ob-key-sep').forEach(n => n.remove());
    keys.forEach((k, i) => {
      if (i > 0) {
        const sep = document.createElement('span');
        sep.className = 'ob-key-sep';
        sep.textContent = '+';
        box.insertBefore(sep, box.querySelector('.ob-timer-bar') || null);
      }
      const chip = document.createElement('span');
      chip.className = 'ob-key-chip';
      chip.textContent = k === ' ' ? 'Space' : k;
      chip.style.animationDelay = `${i * 0.05}s`;
      box.insertBefore(chip, box.querySelector('.ob-timer-bar') || null);
    });
  }

  /* ── Step 4: About:blank ── */
  function renderBlank(el, dots) {
    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <div class="ob-step-title">STEALTH MODE</div>
      <div class="ob-step-sub">Extra protection settings</div>

      <div class="ob-toggle-row ${data.aboutBlank ? 'on' : ''}" id="ob-blank-row">
        <div class="ob-toggle-label">
          <i class="ob-toggle-icon fa-solid fa-window-maximize"></i>
          <div>
            <div class="ob-toggle-text">About:Blank Mode</div>
            <div class="ob-toggle-sub">Open site in about:blank iframe to hide URL</div>
          </div>
        </div>
        <div class="ob-toggle-switch"></div>
      </div>

      <div style="height:16px;"></div>
    `;

    document.getElementById('ob-blank-row').addEventListener('click', function() {
      data.aboutBlank = !data.aboutBlank;
      this.classList.toggle('on', data.aboutBlank);
    });
  }

  /* ── Step 5: Widget settings ── */
  function renderWidget(el, dots) {
    const styles = [
      { key: 'float',    name: 'Float',    sub: 'Hover to expand' },
      { key: 'chromeos', name: 'ChromeOS', sub: 'Wide on hover' },
      { key: 'minimal',  name: 'Minimal',  sub: 'Icons only' },
    ];
    const corners = [
      { key: 'bottom-right', label: '↘ Bottom Right' },
      { key: 'bottom-left',  label: '↙ Bottom Left'  },
      { key: 'top-right',    label: '↗ Top Right'    },
      { key: 'top-left',     label: '↖ Top Left'     },
    ];

    el.innerHTML = `
      <div class="ob-step-indicator">${dots}</div>
      <div class="ob-step-title">WIDGET</div>
      <div class="ob-step-sub">Floating info widget settings</div>

      <div class="ob-toggle-row ${data.widgetEnabled ? 'on' : ''}" id="ob-widget-enable-row" style="margin-bottom:12px;">
        <div class="ob-toggle-label">
          <i class="ob-toggle-icon fa-solid fa-puzzle-piece"></i>
          <div>
            <div class="ob-toggle-text">Enable Widget</div>
            <div class="ob-toggle-sub">Battery, time, calendar</div>
          </div>
        </div>
        <div class="ob-toggle-switch"></div>
      </div>

      <div id="ob-widget-options">
        <div class="ob-field-label">Style</div>
        <div class="ob-widget-grid">
          ${styles.map(s => `
            <div class="ob-widget-option ${data.widgetStyle === s.key ? 'selected' : ''}" data-wstyle="${s.key}">
              <span class="ob-widget-name">${s.name}</span>
              <span class="ob-widget-sub">${s.sub}</span>
            </div>`).join('')}
        </div>
        <div class="ob-field-label" style="margin-top:12px;">Position</div>
        <div class="ob-widget-corner-row">
          ${corners.map(c => `<button class="ob-corner-btn ${data.widgetPos === c.key ? 'selected' : ''}" data-corner="${c.key}">${c.label}</button>`).join('')}
        </div>
      </div>
      <div style="height:16px;"></div>
    `;

    document.getElementById('ob-widget-enable-row').addEventListener('click', function() {
      data.widgetEnabled = !data.widgetEnabled;
      this.classList.toggle('on', data.widgetEnabled);
      document.getElementById('ob-widget-options').style.opacity = data.widgetEnabled ? '1' : '0.35';
      document.getElementById('ob-widget-options').style.pointerEvents = data.widgetEnabled ? '' : 'none';
    });

    el.querySelectorAll('.ob-widget-option').forEach(opt => {
      opt.addEventListener('click', () => {
        data.widgetStyle = opt.dataset.wstyle;
        el.querySelectorAll('.ob-widget-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });

    el.querySelectorAll('.ob-corner-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        data.widgetPos = btn.dataset.corner;
        el.querySelectorAll('.ob-corner-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  /* ══════════════════════════════════════════
     NEXT STEP
  ══════════════════════════════════════════ */
  async function nextStep() {
    // Collect data from current step
    if (step === 1) {
  const username = document.getElementById('ob-username')?.value.trim();
  if (!username) return;
  data.username = username;
  localStorage.setItem('username', username);
  localStorage.setItem('chatUsername', username);

  // Show loading state on button
  const btn = document.getElementById('ob-next-btn');
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Checking…`;
  btn.disabled = true;

  try {
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js");
    const { getDatabase, ref, get, child } = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js");

    const app = getApps().length
      ? getApps()[0]
      : initializeApp({
          apiKey: "AIzaSyDs_MC68gPRLluQXLaappyYwlMbROGiODM",
          databaseURL: "https://chat-67-67-default-rtdb.firebaseio.com",
          projectId: "chat-67-67"
        });

    const db   = getDatabase(app);
    const snap = await get(child(ref(db), `sync/${username}`));

    if (snap.exists()) {
      // ✅ User has cloud data — restore it and skip setup
        const dataObj = JSON.parse(snap.val().fullBackup);
        Object.keys(dataObj).forEach(k => localStorage.setItem(k, dataObj[k]));
      localStorage.setItem('onboarding_done', 'true');

      // Show success message then close
      document.getElementById('ob-content').innerHTML = `
        <div style="text-align:center;padding:40px 0;">
          <div style="font-size:36px;margin-bottom:12px;"><i style="color:#26ff9a;" class="fa-solid fa-check" ></i></div>
          <div class="ob-welcome-title">WELCOME BACK</div>
          <div class="ob-welcome-sub" style="margin-top:8px;">Username exists. Restoring settings...</div>
        </div>`;
      document.getElementById('ob-footer').style.display = 'none';

      setTimeout(() => {
        document.getElementById('ob-shell')?.remove();
        window.location.reload();
      }, 1800);
      return;
    }
  } catch (e) {
    console.warn('[Onboarding] Firebase check failed, continuing normally:', e);
  }

  // No cloud data found — continue normal setup
  btn.innerHTML = `Continue <i class="fa-solid fa-arrow-right"></i>`;
  btn.disabled = false;
  step++;
  renderStep();
  return;
}
    if (step === 2) {
      const r = document.querySelector('input[name="ob-preset"]:checked');
      if (r) data.preset = r.value;
    }
    if (step === 3) {
      const u = document.getElementById('ob-panic-url');
      if (u && u.value.trim()) data.panicURL = u.value.trim();
      panicListening = false; // stop any lingering listener
    }

    step++;
    if (step >= TOTAL_STEPS) {
      finalize();
    } else {
      renderStep();
    }
  }

  /* ══════════════════════════════════════════
     FINALIZE
  ══════════════════════════════════════════ */
  function finalize() {
    // Save all to localStorage
    if (data.username)  localStorage.setItem('username', data.username);
    if (data.username)  localStorage.setItem('chatUsername', data.username);
    localStorage.setItem('global_transformPreset', data.preset);
    localStorage.setItem('aboutBlankActive', data.aboutBlank ? 'true' : 'false');

    // Widget settings
    localStorage.setItem('w_enabled',  data.widgetEnabled ? 'true' : 'false');
    localStorage.setItem('w_style',    data.widgetStyle);
    localStorage.setItem('w_align', data.widgetPos);

    // Panic protocol
    if (data.panic.length) {
      localStorage.setItem('panic_protocol', JSON.stringify({
        combo: data.panic,
        url:   data.panicURL
      }));
    }

    // Apply tab disguise immediately
    applyPreset(data.preset);

    localStorage.setItem('onboarding_done', 'true');

    // Animate out
    const shell = document.getElementById('ob-shell');
    if (shell) {
      document.getElementById('ob-panel').style.animation = 'ob-out .4s ease forwards';
      setTimeout(() => {
        shell.remove();
        window.location.reload();
      }, 400);
    }
  }

  /* ══════════════════════════════════════════
     HELPERS
  ══════════════════════════════════════════ */
  function applyPreset(name) {
    const p = PRESETS[name];
    if (!p) return;
    document.title = p.title;
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) { favicon = document.createElement('link'); favicon.rel = 'icon'; document.head.appendChild(favicon); }
    favicon.href = p.icon;
  }

})(); // end onboarding IIFE


/* ══════════════════════════════════════════════
   PANIC LISTENER — always active after first run
══════════════════════════════════════════════ */
function installPanicListener() {
  const raw = localStorage.getItem('panic_protocol');
  if (!raw) return;

  let config;
  try { config = JSON.parse(raw); } catch { return; }
  if (!config.combo || !config.combo.length) return;

  const combo    = config.combo.map(k => k.toLowerCase());
  const target   = (config.url || 'https://google.com');
  const held     = new Set();

  document.addEventListener('keydown', e => {
    held.add(e.key.toLowerCase());
    const allHeld = combo.every(k => held.has(k));
    if (allHeld) {
      window.location.href = target;
    }
  });
  document.addEventListener('keyup', e => {
    held.delete(e.key.toLowerCase());
  });
}

// Also run panic listener for users who already completed onboarding
if (localStorage.getItem('onboarding_done')) {
  installPanicListener();
}

(function() {
    const activeKeys = new Set();
    
    const getSettings = () => {
        const stored = localStorage.getItem('panic_protocol');
        return stored ? JSON.parse(stored) : null;
    };

    window.addEventListener('keydown', (e) => {
        const settings = getSettings();
        if (!settings || !settings.combo) return;

        activeKeys.add(e.key);

        // Exact Match Logic
        const isMatch = settings.combo.length > 0 && 
                        settings.combo.every(k => activeKeys.has(k)) &&
                        activeKeys.size === settings.combo.length;

        if (isMatch) {
            window.location.replace(settings.url || 'https://google.com');
        }
    });

    window.addEventListener('keyup', (e) => activeKeys.delete(e.key));
    window.addEventListener('blur', () => activeKeys.clear());

    // Update the UI if we are on the settings page
    const updatePreview = () => {
        const s = getSettings();
        const display = document.getElementById('combo-preview');
        if (display && s) {
            display.textContent = s.combo.join(' + ').toUpperCase();
            document.getElementById('panic-url-input').value = s.url;
        }
    };
    
    updatePreview();
})();
(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyDB2GVl8AdhQF-XMWSU3JvQ05Kb5Gp424s",
        databaseURL: "https://chat-283f4-default-rtdb.firebaseio.com",
        projectId: "chat-283f4"
    };

    // Device Fingerprint for No-LocalStorage tracking
    const userFP = (window.screen.width + window.screen.height + navigator.userAgent.length).toString(16);

    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src; script.onload = callback;
        document.head.appendChild(script);
    }

    if (typeof firebase === 'undefined') {
        loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js", () => {
            loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js", init);
        });
    } else { init(); }

    function init() {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        const style = document.createElement('style');
        style.textContent = `
            #ann-toast {
                position: fixed; top: 1.5rem; left: 1.5rem; z-index: 2147483647;
                width: 300px; background: rgba(10, 12, 11, 0.95);
                backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
                border-left: 4px solid #26ff9a; border-radius: 12px; 
                padding: 1.2rem; color: white; font-family: 'Outfit', sans-serif;
                transform: translateX(-150%); transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            #ann-toast.active { transform: translateX(0); }
            .ann-header { color: #26ff9a; font-weight: 800; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px; margin-bottom: 5px; display: block; }
            .ann-subject { font-size: 1.1rem; font-weight: 700; margin: 0 0 8px 0; color: #fff; }
            .ann-body { font-size: 0.85rem; opacity: 0.8; line-height: 1.4; margin-bottom: 15px; }
            .ack-link { color: #26ff9a; font-size: 0.75rem; font-weight: 800; cursor: pointer; text-decoration: none; text-transform: uppercase; border: 1px solid rgba(38,255,154,0.3); padding: 5px 10px; border-radius: 6px; transition: 0.2s; }
            .ack-link:hover { background: #26ff9a; color: #000; }
        `;
        document.head.appendChild(style);

        // --- ONE-TIME ANNOUNCEMENT CHECK ---
        db.ref('system/announcement').once('value').then(snap => {
            const data = snap.val();
            if (!data || !data.active) return;

            db.ref(`users/${userFP}/seen/${data.id}`).once('value').then(seen => {
                if (!seen.exists()) show(data);
            });
        });

        function show(data) {
            let t = document.getElementById('ann-toast');
            if (!t) { t = document.createElement('div'); t.id = 'ann-toast'; document.body.appendChild(t); }

            t.innerHTML = `
                <span class="ann-header">System Broadcast</span>
                <h3 class="ann-subject">${data.subject || 'No Subject'}</h3>
                <p class="ann-body">${data.content}</p>
                <div style="text-align: right;">
                    <span class="ack-link" id="ack-btn">OK</span>
                </div>
            `;

            setTimeout(() => t.classList.add('active'), 100);

            document.getElementById('ack-btn').onclick = () => {
                db.ref(`users/${userFP}/seen/${data.id}`).set(true);
                hide();
            };
        }

        function hide() {
            const t = document.getElementById('ann-toast');
            if (t) { t.classList.remove('active'); setTimeout(() => t.remove(), 500); }
        }
    }
})();
(function() {
    const isActive = localStorage.getItem('aboutBlankActive') === 'true';

    // 1️⃣ Mouse movement triggers a new about:blank window with iframe
    let popupOpened = false;
    function openCustomBlank() {
        if (isActive && !popupOpened) {
            // Open a new tab
            const newWin = window.open('', '_blank'); // note: empty string, not 'about:blank'
            if (newWin) {
                const htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>loading...</title>
                        <link rel="icon"  href="https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png">
                        <style>
                            body { margin:0; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; background:#f0f0f0; }
                            iframe { width: 100vw; height: 100vh; border: none; }
                        </style>
                    </head>
                    <body>
                        <iframe src="https://c0delistener.firebaseapp.com" frameborder="0"></iframe>
                    </body>
                    </html>
                `;
                newWin.document.open();
                newWin.document.write(htmlContent);
                newWin.document.close();
                popupOpened = true; // only open once per page
            }
        }
    }

    document.addEventListener('mousemove', openCustomBlank, { once: true });

    // 2️⃣ Optional: Settings page UI
    const toggleBtn = document.getElementById('toggleBtn');
    const statusDisplay = document.getElementById('status');

    if (toggleBtn && statusDisplay) {
        let isActiveUI = isActive;

        function updateStatusUI() {
            if (isActiveUI) {
                statusDisplay.textContent = 'Active';
                toggleBtn.textContent = 'Untoggle';
            } else {
                statusDisplay.textContent = 'Inactive';
                toggleBtn.textContent = 'Toggle';
            }
        }

        updateStatusUI();

        toggleBtn.addEventListener('click', () => {
            isActiveUI = !isActiveUI;
            localStorage.setItem('aboutBlankActive', isActiveUI);
            updateStatusUI();
        });
    }
})();
