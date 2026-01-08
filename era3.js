// ===== Tab Switching =====
const tabButtons = document.querySelectorAll('.tabs button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ===== Transform Settings =====
const presetSelect = document.getElementById('preset');
const customTransform = document.getElementById('custom-transform');
const customTitleInput = document.getElementById('custom-title');
const customTitleBtn = document.getElementById('custom-title-btn');
const favicon = document.getElementById('favicon');

const keys = {
  transform: 'global_transformPreset',
  title: 'global_customTitle'
};

const presets = {
  default: {
    title: 'Codelistener',
    icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/logo.png'
  },
  Canvas: {
    title: 'Dashboard',
    icon: 'https://instructure-uploads.s3.amazonaws.com/account_96810000000000001/attachments/1049/Canvas_logo_gray2.png'
  },
  'Chrome New-Tab': {
    title: 'New Tab',
    icon: 'https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/chrome.png'
  },
  Clever: {
    title: 'Clever | Portal',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUUZP8OYv8AX/8AW/8AWP8AWf8AXf9wl/+xxf/Q3P/b5f/V4P+8zf+Lqf8lbP8KYf+et/////87d//v9P+Sr/8AVf9Ce/+swv98n//J1//o7v8XZ/9Jf/8AVP/1+f+2yf9kj/8tcP+mvf/GrVhhAAAA30lEQVR4Aa2SBXLEMAwAZQyD0jAn//9jwTem0uEO2msQwSsglHHOhSS/KMaCMIqTNMt5AT4FL1ETVcJzsnpDh7pxHG3Rp7OWACqius9SVGRMy2b4Wo9VI6UULFR20sHMynEKiqVGjGcdsVBP5SaBJg0Wu1g/3cbBwCgYJvxk9zI3FCqPg9wvf3/WCygUYGD6oEllMu824a5T0UWIm8sGWbKvxphsmkjZo5FUCn565QMyoWLIgr5bL01joKEz+mwLWGS7uq5s/Eqw06ikFeBDGO3TeIyHump+q4cUZjSf5QN13xRHxRLRmwAAAABJRU5ErkJggg=='
  },
  'Google Drive': {
    title: 'Home - Google Drive',
    icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
  },
  'Kahoot': {
    title:'Enter Game PIN-Kahoot!',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEU2AJ4xAJxbOq6HcMJ4XrtbN65CC6UzAJ85AKFmQ7RtT7bVzOnq5PXb0+3JveOzpNiFbMFCEaSYg8vQxufx7fiumdcrAJpQJar////8+/7CtuC3pdxBAKW/r+BgM7RULauEaMIlAJn39fuei812VbxPIKrj3PBsSrazoNpOGqusldekjNN3U76Nd8WEY8S1otsQrUK2AAABIUlEQVR4AWKgJgBQNReIDcNAEAB1ATPDZWNmh/v/39VQkGzR3gho+eQsRTocT2dN/2cyzuZvIst2XM8PtJ8cRnGS8go6M11sANdMo822mC/IRZlWhlFeFyx1oSDVMZA0bdQBXU8KkhmvRYMHB0gClrG1FkNqEI0T4Mwy3ubVSoOE0DNgupCE7tKR1WuJ+yvsQsbrYoi2Cg9XZLqQcPvycMv3BA9WsHMTONu1QvfQKNj5lQcMW42fMBX0DOFf8Wg3fHV3kjFt6Z3Apf1Ru1DwxjRPuO4njKchVCTNAz77W2eh4BcL6juUKxIz/WN8XU4KthxMGgkavfjFv6qZn2AmIcLTMVge5Tfg6ztJ9zDzmgLXSQ3xPRyAXV2ADW/ipDB5AwCtBhzTGvN0rwAAAABJRU5ErkJggg=='
  },
  'Wayground': {
    title:'For Students-Enter Your Code | Wayground (Formerly Quizziz)',
    icon: 'https://cf.quizizz.com/img/wayground/brand/favicon/favicon-16x16.ico'
  }
};

// ===== Load Saved Settings =====
window.addEventListener('DOMContentLoaded', () => {
  // Load preset
  const savedPreset = localStorage.getItem(keys.transform) || 'default';
  if (presetSelect) {
    presetSelect.value = savedPreset;
    applyTransform(savedPreset, true);
  }

  // Load custom title
  const savedTitle = localStorage.getItem(keys.title);
  if (customTitleInput && savedTitle) {
    customTitleInput.value = savedTitle;
  }
});

// ===== Dropdown Change =====
if (presetSelect) {
  presetSelect.addEventListener('change', () => {
    applyTransform(presetSelect.value);
  });
}

// ===== Custom Title Button =====
if (customTitleBtn) {
  customTitleBtn.addEventListener('click', () => {
    const val = customTitleInput.value.trim();
    if (val) {
      document.title = val;
      localStorage.setItem(keys.title, val);
    }
  });
}

// ===== Apply Transform =====
function applyTransform(val, silent = false) {
  if (val === 'Custom') {
    if (customTransform) customTransform.style.display = 'block';
    if (!silent && customTitleInput.value) {
      document.title = customTitleInput.value;
      localStorage.setItem(keys.title, customTitleInput.value);
    }
    return;
  }

  if (customTransform) customTransform.style.display = 'none';
  const preset = presets[val] || presets.default;

  document.title = preset.title;
  if (favicon) favicon.href = preset.icon;
  localStorage.setItem(keys.transform, val);
}
