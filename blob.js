function handleToggle(checkbox) {
    if (checkbox.checked) {
      launchBlob();
      // Optional: uncheck the toggle after launching so it can be used again
      setTimeout(() => { checkbox.checked = false; }, 1000);
    }
  }

  function launchBlob() {
    const host = location.host;
    // Disguise frame
    const frame = `<iframe src="https://${host}/index.html" style="position:fixed;top:0;left:0;width:100%;height:100%;border:none;"></iframe>`;
    const blob = new Blob([frame], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url);
    
    if (win) {
      win.onload = () => {
        win.document.title = "New Tab";
        const link = win.document.createElement('link');
        link.rel = 'icon';
        // Ensure this path matches your actual file structure
        link.href = `https://www.dropbox.com/scl/fi/vlfe1qbmsavwmvkxrni3o/Screenshot_2025-10-21_12.02.45_PM-removebg-preview.png?rlkey=3jx1940g6i7s4za9umuespqs7&st=rumiocxe&raw=1`;
        win.document.head.appendChild(link);
      };
    }
  }
