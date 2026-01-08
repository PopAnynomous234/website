
if (sessionStorage.getItem('alertDisplayed') === null) {
    // If it doesn't exist, show the alert
    alert("WARINING! Nobody cares if you get this website blocked, it is your loss! So, be careful.");
    
    // Then, set the 'alertDisplayed' item to 'true' so it won't show again on refresh
    sessionStorage.setItem('alertDisplayed', 'true');
  }
