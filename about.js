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
                padding: 0 !important;
            }
            #stealth-shroud .main-content {
                margin: 12% auto 0 auto ;
                margin-bottom: 70vh !important;
                max-width: 600px !important;
                padding: 0 40px !important;
            }
#stealth-shroud .sad-tab-icon {
    display: inline-block;
 height: 50px;
    margin: 0 0 40px;
    width: 43px;

    /* Use exact Chrome sad tab PNG */
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA3CAYAAACcohNaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP6SURBVGhD7ZlBbxtFFMf/M7P2ZlOideKIHkjSRIqoFG8CXACRhhPqN4C0/QBIcALaCgd6KALRktIPUIkrJVG/AURcgE/gXVd11CDV4eCQTektsXdnOSS7sWfWjcdbsjbyT3qSPftm/d/xvDez88j0zGywsDCPtGg0GqhUNuH7vnjpRMj0zGxw+9Y3Yvupsb+/j29vfYd6vSFeOhEKAJqmpWaUMhBCRV0d0V2vHkESHwQBOOcvzIIgaLm/fJ2DUtpihJCWPu0g0zOzwfd3bkcNnudhbf0BHKfcVRA1MzQ0hJXidRiGEbVtbPyKn3/ZiL4bhoHi59eg63rUtrp6F7uuG31vhzTyOBod3/elUVI13/chDLz0z8aNvNClLbHi+4XUxXMewPN8eJ4XGaVEyEjxccByo2M3L158L2rgnKNkO9jZ+VsKNlU0TcO7SxeQyWSitq2tP/H48VaLX61Wg+OUUbIdlGwHb7/1Jt54/TUszFuwCnMYzeXw5ElV0pP6yPu+j3L5IWzbiezcuSkUCnMoFOYwP29hcnIClMpS5ZZTJggCKYgJIVHwAogVjl4QnwRl8aZpIp/PH9rYGEZGRmKDKQl7T5/CdV24rou9vT3U63WMjuai3x3P50EIgSZ2PImPP/oQ+XweOApuxynjx/tr8DxPdO2ae/d+iD5TSmFZBVz97BNo2qFczjmKKzfUR76XGIhXgTIKXdc7tmw2C42x2LiK3Zjd/2kdtu2Ac97iDAArxesdz3ld1/HlF0UMDx9vzBqNBhoN2bcdhACMsWilRZpzPpPJYHjY6NgMw0A2m43N9XJLH9HX4pXn/OLiO3jpzBkAAA84arWdtr6MMSwtLULPHr9odMPZsy/DsgrSnFcWf9qEi9SVy8uDRapnGIhPi4H4tBiIT4uB+LRILJ4Q0nJU0YmFfZKSSDwhBKZpwrIKymaaZuIHSLQxI4TAsgq4tPw+GGPi5bb4vo+19QewbUc6whP5zzZm4d8fvqZ1auzonTTpyCcSnzbK4sXgQ0ypphNrdy8VlE/Mrl39FOPjx6cH5fJD3Pzqa3he5yUgTWO4tPwBrlxejkTv7rpYvXNXdH0uyo/LmJz2OFctwgVSemVMWYq6+F5CWbxYgvG6rBh6vnAfhWkXopznz59/9bjsGAT459kzbG//FevbDkopJiZeQc40D4/EABwcHODRo4roCvoi83ylshmVX0q2g2p1W0k4jn68Wt1GqamUU6lsim4noiy+uQQTlmS6QSzndHMfZfG9xP9PfLjnEFfANKxZj4iUbTjn+O33P2KLtmlACMHU1CSWLixGDxNmG0l8cyD1ClR4gWmbKsNlW9zGpmmheBFJfD/R1+L/BTV1xc/i00TTAAAAAElFTkSuQmCC') !important;

    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 100% 100% !important;
    
    /* No filter needed since it’s exact Chrome icon */
    background-color: #202124 !important; /* Matches dark tab background */
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
                <p>The connection was reset</p>
                <p style="color: #9aa0a6;">Try:</p>
                <ul>
                    <li>Checking the connection</li>
                    <li>Checking the proxy and the firewall</li>
                </ul>
                <div class="error-code">ERR_CONNECTION_RESET</div>
                <div class="button-row">
                    <button class="reload-btn">Reload</button>
                    <button class="details-btn">Details</button>
                </div>
            </div>
        `;
        document.body.appendChild(shroud);

const lock = () => {
    shroud.style.setProperty('display', 'block', 'important');
    document.title = "Site Can't Be Reached";

    // Optional: temporarily change favicon to Chrome error icon
    favicon.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA3CAYAAACcohNaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP6SURBVGhD7ZlBbxtFFMf/M7P2ZlOideKIHkjSRIqoFG8CXACRhhPqN4C0/QBIcALaCgd6KALRktIPUIkrJVG/AURcgE/gXVd11CDV4eCQTektsXdnOSS7sWfWjcdbsjbyT3qSPftm/d/xvDez88j0zGywsDCPtGg0GqhUNuH7vnjpRMj0zGxw+9Y3Yvupsb+/j29vfYd6vSFeOhEKAJqmpWaUMhBCRV0d0V2vHkESHwQBOOcvzIIgaLm/fJ2DUtpihJCWPu0g0zOzwfd3bkcNnudhbf0BHKfcVRA1MzQ0hJXidRiGEbVtbPyKn3/ZiL4bhoHi59eg63rUtrp6F7uuG31vhzTyOBod3/elUVI13/chDLz0z8aNvNClLbHi+4XUxXMewPN8eJ4XGaVEyEjxccByo2M3L158L2rgnKNkO9jZ+VsKNlU0TcO7SxeQyWSitq2tP/H48VaLX61Wg+OUUbIdlGwHb7/1Jt54/TUszFuwCnMYzeXw5ElV0pP6yPu+j3L5IWzbiezcuSkUCnMoFOYwP29hcnIClMpS5ZZTJggCKYgJIVHwAogVjl4QnwRl8aZpIp/PH9rYGEZGRmKDKQl7T5/CdV24rou9vT3U63WMjuai3x3P50EIgSZ2PImPP/oQ+XweOApuxynjx/tr8DxPdO2ae/d+iD5TSmFZBVz97BNo2qFczjmKKzfUR76XGIhXgTIKXdc7tmw2C42x2LiK3Zjd/2kdtu2Ac97iDAArxesdz3ld1/HlF0UMDx9vzBqNBhoN2bcdhACMsWilRZpzPpPJYHjY6NgMw0A2m43N9XJLH9HX4pXn/OLiO3jpzBkAAA84arWdtr6MMSwtLULPHr9odMPZsy/DsgrSnFcWf9qEi9SVy8uDRapnGIhPi4H4tBiIT4uB+LRILJ4Q0nJU0YmFfZKSSDwhBKZpwrIKymaaZuIHSLQxI4TAsgq4tPw+GGPi5bb4vo+19QewbUc6whP5zzZm4d8fvqZ1auzonTTpyCcSnzbK4sXgQ0ypphNrdy8VlE/Mrl39FOPjx6cH5fJD3Pzqa3he5yUgTWO4tPwBrlxejkTv7rpYvXNXdH0uyo/LmJz2OFctwgVSemVMWYq6+F5CWbxYgvG6rBh6vnAfhWkXopznz59/9bjsGAT459kzbG//FevbDkopJiZeQc40D4/EABwcHODRo4roCvoi83ylshmVX0q2g2p1W0k4jn68Wt1GqamUU6lsim4noiy+uQQTlmS6QSzndHMfZfG9xP9PfLjnEFfANKxZj4iUbTjn+O33P2KLtmlACMHU1CSWLixGDxNmG0l8cyD1ClR4gWmbKsNlW9zGpmmheBFJfD/R1+L/BTV1xc/i00TTAAAAAElFTkSuQmCC';
};

const unlock = () => {
    shroud.style.setProperty('display', 'none', 'important');

    // Restore your original transform logic
    // This runs EXACTLY your previous code without modification
    const transform = localStorage.getItem('global_transformPreset') || 'default';
    const customTitle = localStorage.getItem('global_customTitle');

    let title = '';
    let icon = '';

    switch(transform){
        case 'default': title='Codelistener'; icon='https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png'; break;
        case 'Canvas': title='Dashboard'; icon='https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png'; break;
        case 'Chrome New-Tab': title='New Tab'; icon='https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/chrome.png'; break;
        case 'Clever': title='Clever | Portal'; icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUUZP8OYv8AX/8AW/8AWP8AWf8AXf9wl/+xxf/Q3P/b5f/V4P+8zf+Lqf8lbP8KYf+et/////87d//v9P+Sr/8AVf9Ce/+swv98n//J1//o7v8XZ/9Jf/8AVP/1+f+2yf9kj/8tcP+mvf/GrVhhAAAA30lEQVR4Aa2SBXLEMAwAZQyD0jAn//9jwTem0uEO2msQwSsglHHOhSS/KMaCMIqTNMt5AT4FL1ETVcJzsnpDh7pxHG3Rp7OWACqius9SVGRMy2b4Wo9VI6UULFR20sHMynEKiqVGjGcdsVBP5SaBJg0Wu1g/3cbBwCgYJvxk9zI3FCqPg9wvf3/WCygUYGD6oEllMu824a5T0UWIm8sGWbKvxphsmkjZo5FUCn565QMyoWLIgr5bL01joKEz+mwLWGS7uq5s/Eqw06ikFeBDGO3TeIyHump+q4cUZjSf5QN13xRHxRLRmwAAAABJRU5ErkJggg=='; break;
        case 'Google Drive': title='Home - Google Drive'; icon='https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'; break;
        case 'Kahoot': title='Enter Game PIN-Kahoot!'; icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEU2AJ4xAJxbOq6HcMJ4XrtbN65CC6UzAJ85AKFmQ7RtT7bVzOnq5PXb0+3JveOzpNiFbMFCEaSYg8vQxufx7fiumdcrAJpQJar////8+/7CtuC3pdxBAKW/r+BgM7RULauEaMIlAJn39fuei812VbxPIKrj3PBsSrazoNpOGqusldekjNN3U76Nd8WEY8S1otsQrUK2AAABIUlEQVR4AWKgJgBQNReIDcNAEAB1ATPDZWNmh/v/39VQkGzR3gho+eQsRTocT2dN/2cyzuZvIst2XM8PtJ8cRnGS8go6M11sANdMo822mC/IRZlWhlFeFyx1oSDVMZA0bdQBXU8KkhmvRYMHB0gClrG1FkNqEI0T4Mwy3ubVSoOE0DNgupCE7tKR1WuJ+yvsQsbrYoi2Cg9XZLqQcPvycMv3BA9WsHMTONu1QvfQKNj5lQcMW42fMBX0DOFf8Wg3fHV3kjFt6Z3Apf1Ru1DwxjRPuO4njKchVCTNAz77W2eh4BcL6juUKxIz/WN8XU4KthxMGgkavfjFv6qZn2AmIcLTMVge5Tfg6ztJ9zDzmgLXSQ3xPRyAXV2ADW/ipDB5AwCtBhzTGvN0rwAAAABJRU5ErkJggg=='; break;
        case 'Wayground': title='For Students-Enter Your Code | Wayground (Formerly Quizziz)'; icon='https://cf.quizizz.com/img/wayground/brand/favicon/favicon-16x16.ico'; break;
    } 
    document.title = title;
    favicon.href = icon;
};

        // Events
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        lock();
    } else {
        unlock();
    }
});
    };

        initStealth();
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
