document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key, 'Ctrl:', event.ctrlKey, 'Alt:', event.altKey);

    if (event.key === 'j' && event.ctrlKey && event.altKey) {
        event.preventDefault(); // Stop default browser action

        // Redirect the current window to the new URL
        window.location.href = 'https://instructure.com/','_blank';
    }
});
