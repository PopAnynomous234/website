// ===== 1. Unified Setup =====
const keys = {
    transform: 'global_transformPreset',
    title: 'global_customTitle'
};

// Check if variables already exist to prevent "Already Declared" errors
// We use 'var' or check window to be safe in multi-script environments
window.presetSelect = document.getElementById('preset');
window.customTransform = document.getElementById('custom-transform');
window.customTitleInput = document.getElementById('custom-title');
window.customTitleBtn = document.getElementById('custom-title-btn');

// This logic finds the icon or creates it, but doesn't conflict
window.favIconEl = document.querySelector('#favicon') || document.querySelector('link[rel*="icon"]') || (() => {
    const link = document.createElement('link');
    link.id = 'favicon';
    link.rel = 'icon';
    document.head.appendChild(link);
    return link;
})();

const presets = {
    default: { title: 'Codelistener', icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png' },
    Canvas: { title: 'Dashboard', icon: 'https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png' },
    'Chrome New-Tab': { title: 'New Tab', icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/chrome.png' },
    Clever: { title: 'Clever | Portal', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUUZP8OYv8AX/8AW/8AWP8AWf8AXf9wl/+xxf/Q3P/b5f/V4P+8zf+Lqf8lbP8KYf+et/////87d//v9P+Sr/8AVf9Ce/+swv98n//J1//o7v8XZ/9Jf/8AVP/1+f+2yf9kj/8tcP+mvf/GrVhhAAAA30lEQVR4Aa2SBXLEMAwAZQyD0jAn//9jwTem0uEO2msQwSsglHHOhSS/KMaCMIqTNMt5AT4FL1ETVcJzsnpDh7pxHG3Rp7OWACqius9SVGRMy2b4Wo9VI6UULFR20sHMynEKiqVGjGcdsVBP5SaBJg0Wu1g/3cbBwCgYJvxk9zI3FCqPg9wvf3/WCygUYGD6oEllMu824a5T0UWIm8sGWbKvxphsmkjZo5FUCn565QMyoWLIgr5bL01joKEz+mwLWGS7uq5s/Eqw06ikFeBDGO3TeIyHump+q4cUZjSf5QN13xRHxRLRmwAAAABJRU5ErkJggg==' },
    'Google Drive': { title: 'Home - Google Drive', icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
    Kahoot: { title: 'Enter Game PIN - Kahoot!', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEU2AJ4xAJxbOq6HcMJ4XrtbN65CC6UzAJ85AKFmQ7RtT7bVzOnq5PXb0+3JveOzpNiFbMFCEaSYg8vQxufx7fiumdcrAJpQJar////8+/7CtuC3pdxBAKW/r+BgM7RULauEaMIlAJn39fuei812VbxPIKrj3PBsSrazoNpOGqusldekjNN3U76Nd8WEY8S1otsQrUK2AAABIUlEQVR4AWKgJgBQNReIDcNAEAB1ATPDZWNmh/v/39VQkGzR3gho+eQsRTocT2dN/2cyzuZvIst2XM8PtJ8cRnGS8go6M11sANdMo822mC/IRZlWhlFeFyx1oSDVMZA0bdQBXU8KkhmvRYMHB0gClrG1FkNqEI0T4Mwy3ubVSoOE0DNgupCE7tKR1WuJ+yvsQsbrYoi2Cg9XZLqQcPvycMv3BA9WsHMTONu1QvfQKNj5lQcMW42fMBX0DOFf8Wg3fHV3kjFt6Z3Apf1Ru1DwxjRPuO4njKchVCTNAz77W2eh4BcL6juUKxIz/WN8XU4KthxMGgkavfjFv6qZn2AmIcLTMVge5Tfg6ztJ9zDzmgLXSQ3xPRyAXV2ADW/ipDB5AwCtBhzTGvN0rwAAAABJRU5ErkJggg==' },
    Wayground: { title: 'For Students - Enter Your Code | Wayground (Formerly Quizziz)', icon: 'https://cf.quizizz.com/img/wayground/brand/favicon/favicon-16x16.ico' }
};

// ===== 2. Core Function =====
function applyTransform(val, silent = false) {
    if (val === 'Custom') {
        if (window.customTransform) window.customTransform.style.display = 'block';
        const savedTitle = localStorage.getItem(keys.title);
        if (savedTitle) document.title = savedTitle;
        return;
    }

    if (window.customTransform) window.customTransform.style.display = 'none';
    const preset = presets[val] || presets.default;

    document.title = preset.title;
    if (window.favIconEl) window.favIconEl.href = preset.icon;
    
    if (!silent) localStorage.setItem(keys.transform, val);
}

// ===== 3. Event Listeners & Load =====
window.addEventListener('DOMContentLoaded', () => {
    const savedPreset = localStorage.getItem(keys.transform) || 'default';
    if (window.presetSelect) {
        window.presetSelect.value = savedPreset;
        applyTransform(savedPreset, true);
    }

    const savedTitle = localStorage.getItem(keys.title);
    if (window.customTitleInput && savedTitle) {
        window.customTitleInput.value = savedTitle;
    }

    // Attach listener for dropdown
    if (window.presetSelect) {
        window.presetSelect.addEventListener('change', () => {
            applyTransform(window.presetSelect.value);
        });
    }

    // Attach listener for custom title button
    if (window.customTitleBtn) {
        window.customTitleBtn.addEventListener('click', () => {
            const val = window.customTitleInput.value.trim();
            if (val) {
                document.title = val;
                localStorage.setItem(keys.title, val);
            }
        });
    }
});