function downloadCookies() {
    // 1. Get all accessible cookies as a single string
    const allCookiesString = document.cookie;

    if (!allCookiesString) {
        alert("No cookies found to export.");
        return;
    }

    // 2. Parse the cookies into a JavaScript object for better JSON formatting
    const cookiesArray = allCookiesString.split(';').map(cookieString => {
        let [name, value] = cookieString.trim().split('=').map(decodeURIComponent);
        return { name, value };
    });

    // 3. Convert the object to a formatted JSON string
    const jsonString = JSON.stringify(cookiesArray, null, 2); // 'null, 2' adds nice formatting/indentation

    // 4. Create a Blob object with the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // 5. Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Codelistener_cookies_for_another_website.json'; // The default filename
    document.body.appendChild(a); // Append link to body
    a.click(); // Simulate a click event
    document.body.removeChild(a); // Remove link from body

    // 6. Clean up the object URL
    URL.revokeObjectURL(url);
}
