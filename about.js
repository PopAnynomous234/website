// 1. Core Logic (Runs on Every Page)
window.openPageWrapper = () => {
    const currentUrl = window.location.href;
    const newWindow = window.open('about:blank', '_blank');

    if (newWindow) {
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>loading....</title>
                <link rel="icon" href="https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png">
            </head>
            <body style="margin:0;padding:0;">
                <iframe src="${currentUrl}" style="width:100%; height:100vh; border:none; position:fixed; top:0; left:0;"></iframe>
            </body>
            </html>`;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    }
};

function activate() {
    if (window.self === window.top) {
        window.openPageWrapper();
        window.location.replace('https://www.google.com');
    }
}

// 2. Check for "Active" status on Page Load
window.addEventListener('load', () => {
    const isActive = localStorage.getItem('aboutBlankActive') === 'true';
    if (isActive) {
        activate();
    }
});

// 3. UI Logic (Only runs on the Settings page)
const toggleBtn = document.getElementById('toggleBtn');
const statusDisplay = document.getElementById('status');

if (toggleBtn && statusDisplay) {
    let isActive = localStorage.getItem('aboutBlankActive') === 'true';

    function updateStatusUI() {
        if (isActive) {
            statusDisplay.textContent = 'about:blank redirect is active';
            toggleBtn.textContent = 'Turn OFF about:blank';
        } else {
            statusDisplay.textContent = 'about:blank is inactive';
            toggleBtn.textContent = 'Turn ON about:blank';
        }
    }

    updateStatusUI();

    toggleBtn.addEventListener('click', () => {
        isActive = !isActive;
        localStorage.setItem('aboutBlankActive', isActive);
        updateStatusUI();
        if (isActive) activate();
    });
}
