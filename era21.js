// Function to make the visual button click the hidden file input
function triggerFileInput() {
    document.getElementById('cookieFileInput').click();
}

// Function that runs automatically when a file is selected (because of the onchange attribute)
function uploadAndSetCookies(event) {
    const fileInput = event.target;
    const statusMsg = document.getElementById('statusMessage');
    const file = fileInput.files[0];

    if (!file) {
        statusMsg.textContent = "No file selected.";
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const cookiesArray = JSON.parse(e.target.result);

            if (Array.isArray(cookiesArray)) {
                cookiesArray.forEach(cookie => {
                    // This sets simple name=value cookies with a path set to the root of your site
                    document.cookie = `${cookie.name}=${cookie.value}; path=/`; 
                });
                statusMsg.textContent = "Cookies successfully imported! Refreshing page in 2 seconds...";
                statusMsg.style.color = "green";
                
                // Reset the input value so selecting the *same* file again still triggers a change event next time
                fileInput.value = null; 

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                throw new Error("Invalid JSON format. Expected an array of objects.");
            }

        } catch (error) {
            statusMsg.textContent = `Error processing file: ${error.message}`;
            statusMsg.style.color = "red";
            fileInput.value = null; // Reset input on error too
        }
    };

    reader.readAsText(file);
}
