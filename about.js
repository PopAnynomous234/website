(function() {
    const isActive = localStorage.getItem('aboutBlankActive') === 'true';

    // 1️⃣ Redirect current page automatically
    if (isActive && window.location.href !== 'about:blank') {
        window.location.replace('about:blank');
    }

    // 2️⃣ Mouse movement triggers a new about:blank window with custom content
    let popupOpened = false;
    function openCustomBlank() {
        if (isActive && !popupOpened) {
            const newWin = window.open('about:blank', '_blank');
            if (newWin) {
                const htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Loading...</title>
                        <link rel="icon" href="https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png">
                        <style>
                            body { margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#f0f0f0; }
                            h1 { font-family:sans-serif; color:#333; }
                        </style>
                    </head>
                    <body>
                        <h1>about:blank redirect active</h1>
                    </body>
                    </html>
                `;
                newWin.document.write(htmlContent);
                newWin.document.close();
                popupOpened = true; // only open once per page
            }
        }
    }

    document.addEventListener('mousemove', openCustomBlank, { once: true });

    // 3️⃣ Optional: Settings page UI
    const toggleBtn = document.getElementById('toggleBtn');
    const statusDisplay = document.getElementById('status');

    if (toggleBtn && statusDisplay) {
        let isActiveUI = isActive;

        function updateStatusUI() {
            if (isActiveUI) {
                statusDisplay.textContent = 'about:blank redirect is active';
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

            if (isActiveUI && window.location.href !== 'about:blank') {
                window.location.replace('about:blank');
            }
        });
    }
})();
