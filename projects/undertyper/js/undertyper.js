// File: undertyper.js
// Author: AyeTSG
// Project: UnderTyper
// Purpose: Provide main functionality for the undertale typer

/* NOTE: Some of this code has been repurposed, refactored,
   or otherwise altered from the 17 project. */

// Purpose: Holds a list of all assets that have been precached
var _PRECACHED_ASSETS = [];

/*
Purpose: Precaches an asset
Arguments:
    in_asset_path: A string to an asset path, relative to the undertyper project directory
    in_asset_type: One of 'image', or 'audio'
*/
async function precacheAsset(in_asset_path, in_asset_type) {
    // Prevent an asset from being pre-cached more than once
    if (checkIfPrecached(in_asset_path) == true) {
        return;
    }

    // Validate the asset type
    if (in_asset_type == "image") {
        // Handle image precaching

        // Create an image
        img = document.createElement("img");
        img.src = in_asset_path;
        img.classList.add("precached_image");

        // Add the image to the page
        document.getElementById("precache_image_holder").appendChild(img);

        // Add the asset to the list of precached assets
        _PRECACHED_ASSETS.push(in_asset_path);

        return;

    } else if (in_asset_type == "audio") {
        // Handle audio precaching
        
        // Create a sound
        sound = new Howl({
            src: [in_asset_path],
            volume: 1.0
        });

        // Add the asset path to precached assets
        _PRECACHED_ASSETS.push(in_asset_path);

        return;
    } else {
        // Return an error, as at this point the asset type is unknown
        throw "Unknown asset type '" + in_asset_type + "'";
    }
}

/*
Purpose: Check if an asset is precached
Arguments:
    in_asset_path: A string to an asset path
*/
function checkIfPrecached(in_asset_path) {
    return _PRECACHED_ASSETS.includes(in_asset_path);
}

/*
Purpose: Precaches any needed assets for a given speaker
Arguments:
    in_speaker: A speaker defined in speaker_configs.js
*/
async function precacheSpeaker(in_speaker) {
    // Loop over the speaker's speak sounds
    for (var i = 0; i < speaker_configs[in_speaker]["speak_sounds"].length; i++) {
        // Precache the sound
        precacheAsset(speaker_configs[in_speaker]["speak_sounds"][i], "audio");
    }

    // Check if the speaker uses the speaking icon
    if (speaker_configs[in_speaker]["uses_speaker_icon"] == true) {
        // Precache their speak icons
        for (var i = 0; i < Object.keys(speaker_configs[in_speaker]["speak_icons"]).length; i++) {
            // Precache the image
            precacheAsset(Object.values(speaker_configs[in_speaker]["speak_icons"]).at(i), "image");
        }
    }
}