
// --- Configuration ---
  // Define the URLs for your custom cursor images
  const globalCursorUrl = "url('https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/Untitled%20design%20(1).png'), auto";
  const hoverCursorUrl = "url('https://cdn.jsdelivr.net/gh/PopAnynomous234/assets/and%20the%20colors%20i%20select%20still%20leave%20(3).png'), pointer"; // Use a different image if desired

  // --- 1. Set Global Cursor (from your previous code) ---
  // Apply to the root element and body for best coverage
  document.documentElement.style.cursor = globalCursorUrl;
  document.body.style.cursor = globalCursorUrl;

  // --- 2. Add Hover Effects for Specific Elements ---
  // Select all elements you want to have the hover effect (links, buttons, or add a class)
  const interactiveElements = document.querySelectorAll('a, button, .interactive-div');

  // Loop through each element to add event listeners
  interactiveElements.forEach(element => {
    // Change cursor to the specific hover cursor on mouse enter
    element.addEventListener('mouseenter', function() {
      this.style.cursor = hoverCursorUrl;
    });

    // Change cursor back to the global cursor on mouse leave
    element.addEventListener('mouseleave', function() {
      // Revert to inherited style from the body/html
      this.style.cursor = 'inherit'; 
    });
  });
