(function() {
    const initStealth = () => {
        // 1. CSS - MATCHING YOUR IMAGE IN DARK MODE
        const css = `
            #stealth-shroud {
                display: none !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background-color: #202124 !important;
                color: #e8eaed !important;
                z-index: 2147483647 !important;
                font-family: "Segoe UI", Tahoma, sans-serif !important;
                cursor: default !important;
                user-select: none !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            #stealth-shroud .main-content {
                margin: 12% auto 0 auto !important;
                max-width: 600px !important;
                padding: 0 40px !important;
            }
            #stealth-shroud .sad-tab-icon {
                width: 48px !important;
                height: 48px !important;
                background-color: #9aa0a6 !important;
                mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm7-11.5c0 .83-.67 1.5-1.5 1.5S10 9.33 10 8.5 10.67 7 11.5 7s1.5.67 1.5 1.5zm-5 6c0-1.66 1.34-3 3-3s3 1.34 3 3H8z"/></svg>') no-repeat center !important;
                -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm7-11.5c0 .83-.67 1.5-1.5 1.5S10 9.33 10 8.5 10.67 7 11.5 7s1.5.67 1.5 1.5zm-5 6c0-1.66 1.34-3 3-3s3 1.34 3 3H8z"/></svg>') no-repeat center !important;
                margin-bottom: 30px !important;
            }
            #stealth-shroud h1 { font-size: 22px !important; font-weight: 500 !important; margin-bottom: 20px !important; color: #e8eaed !important; }
            #stealth-shroud p { font-size: 14px !important; color: #bdc1c6 !important; margin: 15px 0 !important; }
            #stealth-shroud ul { padding-left: 20px !important; margin: 10px 0 !important; }
            #stealth-shroud li { font-size: 14px !important; color: #9aa0a6 !important; margin-bottom: 8px !important; list-style-type: disc !important; }
            #stealth-shroud .button-row { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 40px !important; }
            #stealth-shroud .reload-btn {
                background-color: #8ab4f8 !important; color: #202124 !important;
                padding: 10px 24px !important; border-radius: 20px !important;
                border: none !important; font-weight: 500 !important; cursor: pointer !important;
            }
            #stealth-shroud .details-btn {
                background: transparent !important; color: #8ab4f8 !important;
                padding: 8px 20px !important; border-radius: 20px !important;
                border: 1px solid #5f6368 !important; cursor: pointer !important;
            }
            #stealth-shroud .error-code { font-size: 12px !important; color: #9aa0a6 !important; margin-top: 30px !important; }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.innerText = css;
        document.head.appendChild(styleSheet);

        // 2. HTML - EXACT REPLICA OF YOUR SCREENSHOT
        const shroud = document.createElement('div');
        shroud.id = 'stealth-shroud';
        const host = window.location.hostname || "www.access-denied.com";
        shroud.innerHTML = `
            <div class="main-content">
                <div class="sad-tab-icon"></div>
                <h1>This site can’t be reached</h1>
                <p><strong>${host}</strong> took too long to respond.</p>
                <p style="color: #9aa0a6;">Try:</p>
                <ul>
                    <li>Checking the connection</li>
                    <li>Checking the proxy and the firewall</li>
                    <li>Running Windows Network Diagnostics</li>
                </ul>
                <div class="error-code">ERR_CONNECTION_TIMED_OUT</div>
                <div class="button-row">
                    <button class="reload-btn">Reload</button>
                    <button class="details-btn">Details</button>
                </div>
            </div>
        `;
        document.body.appendChild(shroud);

        // 3. LOGIC
        const lock = () => {
            shroud.style.setProperty('display', 'block', 'important');
            document.title = "Site Can't Be Reached";
        };
        const unlock = () => {
            shroud.style.setProperty('display', 'none', 'important');
            document.title = "Chat Page"; 
        };

        // Events
        document.addEventListener('visibilitychange', () => { if (document.hidden) lock(); });
        document.addEventListener('keydown', (e) => { if (e.key === "Escape") lock(); });
        shroud.onclick = unlock;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStealth);
    } else {
        initStealth();
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
                        <link rel="icon" href="https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png">
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
                statusDisplay.textContent = 'about:blank redirect with iframe is active';
                toggleBtn.textContent = 'Turn OFF about:blank';
            } else {
                statusDisplay.textContent = 'about:blank is inactive';
                toggleBtn.textContent = 'Turn ON about:blank';
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
