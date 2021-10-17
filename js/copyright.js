// File: copyright.js
// Author: AyeTSG
// Purpose: Handles storing copyright info across the site.

// Purpose: Holds the master copyright string
var COPYRIGHT_STRING = "© 2021 AyeTSG. All Rights Reserved.";

// Purpose: Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Set the copyright string
    document.getElementById("copyright_string").innerText = COPYRIGHT_STRING;
});