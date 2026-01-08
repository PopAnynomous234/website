window.openPageWrapper = () => {
    const currentUrl = window.location.href;
    const newWindow = window.open('about:blank', '_blank');

    if (newWindow) {
        const htmlContent = 
            '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<title>loading....</title>' +
            '<link rel="icon" href="https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png" type="image/svg+xml">' +
            '</head>' +
            '<body>' +
            '<p style="font-family: sans-serif; text-align: center; margin-top: 50px;">' +
            'Page loading' +
            '</p>' +
            `<iframe src="${currentUrl}" style="width:100%; height:100vh; border:none; position:fixed; top:0; left:0;"></iframe>` +
            '</body>' +
            '</html>';

        newWindow.document.write(htmlContent);
        newWindow.document.close();
    } else {
        console.error("Popup blocker prevented the about:blank. Please disable it.");
        const statusElement = document.getElementById('import-status');
        if (statusElement) {
            statusElement.textContent = "Error: Popup blocker prevented this.";
        }
    }
};

const toggleBtn = document.getElementById('toggleBtn');
const status = document.getElementById('status');

let isActive = localStorage.getItem('aboutBlankActive') === 'true';

function updateStatus() {
    if (isActive) {
        status.textContent = 'about:blank redirect is active';
        toggleBtn.textContent = 'Turn OFF about:blank';
    } else {
        status.textContent = 'about:blank is inactive';
        toggleBtn.textContent = 'Turn ON about:blank';
    }
}

updateStatus();

function activate() {
    // Only open and redirect if this is the top window (not inside iframe or popup)
    if (window.self === window.top) {
        window.openPageWrapper();
        window.location.href = 'https://www.google.com';
    }
}

window.addEventListener('load', () => {
    if (isActive) {
        activate();
    }
});

toggleBtn.addEventListener('click', () => {
    isActive = !isActive;
    localStorage.setItem('aboutBlankActive', isActive);
    updateStatus();
    if (isActive) {
        activate();
    }
});
