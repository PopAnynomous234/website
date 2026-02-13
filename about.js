// ===== Core Logic: Runs on every page immediately =====
(function() {
    // Function to redirect to about:blank
    function redirectToAboutBlank() {
        // Avoid infinite loop
        if (window.location.href !== 'about:blank') {
            window.location.replace('about:blank');
        }
    }

    // Check if the feature is active
    const isActive = localStorage.getItem('aboutBlankActive') === 'true';
    if (isActive) {
        redirectToAboutBlank();
    }

    // ===== Optional: Settings Page UI =====
    const toggleBtn = document.getElementById('toggleBtn');
    const statusDisplay = document.getElementById('status');

    if (toggleBtn && statusDisplay) {
        let isActiveUI = localStorage.getItem('aboutBlankActive') === 'true';

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

            // Immediately redirect if turning ON
            if (isActiveUI) {
                redirectToAboutBlank();
            }
        });
    }
})();
