// File: undertyper.js
// Author: AyeTSG
// Project: UnderTyper
// Purpose: Provide main functionality for the undertale typer

/* NOTE: Some of this code has been repurposed, refactored,
   or otherwise altered from the 17 project. */

// Purpose: Holds a list of all assets that have been precached
var _PRECACHED_ASSETS = [];

/*
Purpose: Sleeps for X milliseconds
Arguments:
    ms: Amount of ms to sleep for
*/
function ms_sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

    // TODO: Precache the speaker's font data
}

/*
Purpose: Filters a character
Arguments:
    in_character: Character to be filtered
*/
function filterCharacter(in_character) {
    switch (in_character) {
        case " ":
            return "space";
        case ".":
            return "dot";
        case "?":
            return "question_mark";
        case "@":
            return "at_symbol";
        case "%":
            return "percent_symbol";
        case "_":
            return "underscore";
        case "$":
            return "dollar_symbol";
        case "&":
            return "and_symbol";
        case "#":
            return "hashtag";
        case "/":
            return "forward_slash";
        case "\\":
            return "back_slash";
        case "{":
            return "open_curly_bracket";
        case "}":
            return "closed_curly_bracket";
        default:
            return in_character
    }
}

/*
Purpose: Types a character onto the page
Arguments:
    in_character: Character to be typed
    in_speaker: Speaker configuration to be used
*/
function typeCharacter(in_character, in_speaker) {
    // Filter the character
    in_character = filterCharacter(in_character);

    // Create an image
    img = document.createElement("img");
    img.src = "./images/fonts/" + speaker_configs[in_speaker]["font_data_folder"] + "/" + in_character + ".png";

    // Add appropriate classes
    img.classList.add("character");
    img.classList.add("speaker_" + in_speaker);
    img.classList.add("character_" + in_character);

    // Add the image to the document
    document.getElementById("onscreen_message_text").appendChild(img);

    // Play the speaker's speak sound
    if (in_character != "space") {
        playSpeakSound(in_speaker);
    }
}

/*
Purpose: Types a phrase onto the page
Arguments:
    in_phrase: Phrase to type
    in_speaker: Speaker to use
*/
async function typePhrase(in_phrase, in_speaker) {
    // Check if there is a message already on screen
    if (document.getElementById("onscreen_message_text").firstChild) {
        // Remove the existing message
        clearOnscreenMessage();
    }

    // Loop over each charater
    for (var i = 0; i < in_phrase.length; i++) {
        // Type the character
        typeCharacter(in_phrase[i], in_speaker);

        // Sleep for the speaker's type speed
        await ms_sleep(speaker_configs[in_speaker]["time_type"]);
    }
}

/*
Purpose: Plays a speaker's speak sound
Arguments:
    in_speaker: Speaker to use
*/
function playSpeakSound(in_speaker) {
    // Get a random number between 1 and 7
    random_number = (Math.floor(Math.random() * speaker_configs[in_speaker]["speak_sounds"].length));

    // Create the sound
    sound = new Howl({
        src: [speaker_configs[in_speaker]["speak_sounds"][random_number]],
        volume: 1.0
    });

    // Play the sound
    sound.play();
}

/*
Purpose: Clears the current message on the screen
*/
function clearOnscreenMessage() {
    while (document.getElementById("onscreen_message_text").firstChild) {
        document.getElementById("onscreen_message_text").removeChild(document.getElementById("onscreen_message_text").firstChild);
    }
}