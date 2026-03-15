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

        db.ref('system/announcement').on('value', (snap) => {
            const data = snap.val();
            if (!data || !data.active) return hide();

            // Check Firebase Ledger instead of LocalStorage
            db.ref(`users/${userFP}/seen/${data.id}`).once('value', (seen) => {
                if (seen.exists()) hide(); else show(data);
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
