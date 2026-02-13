(function() {
    const isActive = localStorage.getItem('aboutBlankActive') === 'true';

    // 1️⃣ Automatic redirect to about:blank (current page)
    if (isActive && window.location.href !== 'about:blank') {
        window.location.replace('about:blank');
    }

    // 2️⃣ Mouse movement triggers new about:blank popup (once)
    let popupOpened = false;
    function openBlankPopup() {
        if (isActive && !popupOpened) {
            const newWin = window.open('about:blank', '_blank');
            if (newWin) {
                popupOpened = true; // ensure only one popup per page load
            }
        }
    }

    document.addEventListener('mousemove', openBlankPopup, { once: true });

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

            // Immediately redirect current page if turned ON
            if (isActiveUI && window.location.href !== 'about:blank') {
                window.location.replace('about:blank');
            }
        });
    }
})();
