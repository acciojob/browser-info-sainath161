//your JS code here. If required.
// Get browser information from the navigator object
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Create a message to display
        const message = "You are using " + browserName + " version " + browserVersion;

        // Find the div with id "browser-info" and display the message
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = message;