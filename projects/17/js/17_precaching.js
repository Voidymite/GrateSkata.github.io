// File: 17_precaching.js
// Author: AyeTSG
// Purpose: Preload assets for the entry number seventeen recreation

// TODO: Dynamically pre-cache required letters and characters based on message entries

// Purpose: List of image assets to precache
var _IMAGES_TO_PRECACHE = [
    "spr_mysteryman/0.png",
    "spr_mysteryman/1.png"
];

// Purpose: List of sound assets to precache
var _SOUNDS_TO_PRECACHE = [
    "music/mus_smile.ogg",
    "sounds/snd_mysterygo.ogg"
]

var _CHARACTER_LIST = [];

// Purpose: Precaches a sound
async function precacheSound(in_sound_path) {
    console.log("[PreCache] " + in_sound_path);

    // Create the sound
    sound = new Howl({
        src: ['./audio/' + in_sound_path],
        volume: 1.0
    });

    return;
}

// Purpose: Precaches an image
async function precacheImage(in_image_path) {
    console.log("[PreCache] " + in_image_path); 

    // Create an image
    img = document.createElement("img");
    img.src = "./images/" + in_image_path;
    img.classList.add("precached_image");
    document.getElementById("precache_image_holder").appendChild(img);

    return;
}

// Purpose: Filter characters
function filterCharacter(in_character) {
    if (in_character == " ") {
        return "space";
    } else if (in_character == ".") {
        return "dot";
    } else if (in_character == "?") {
        return "question_mark";
    } else {
        return in_character;
    }
}

// Purpose: Wait for the page to load
document.addEventListener('DOMContentLoaded', async function() {
    // Precache pre-defined images
    for (var i = 0; i < _IMAGES_TO_PRECACHE.length; i++) {
        precacheImage(_IMAGES_TO_PRECACHE[i]);
    }

    // Precache pre-defined sounds
    for (var i = 0; i < _SOUNDS_TO_PRECACHE.length; i++) {
        precacheSound(_SOUNDS_TO_PRECACHE[i]);
    }

    // Loop over all of the message entries
    for (var i = 0; i < Object.keys(messages).length; i++) {
        current_entry = Object.keys(messages).at(i);
        current_speaker = messages[current_entry]["speaker"];

        // Loop over all of the subentries
        for (var j = 0; j < messages[current_entry]["ordered_entries"].length; j++) {
            current_subentry = messages[current_entry]["ordered_entries"][j];

            // Loop over each letter
            for (var k = 0; k < current_subentry.length; k++) {
                current_character = filterCharacter(current_subentry[k]);

                if (!_CHARACTER_LIST[current_speaker + "__" + current_character]) {
                    _CHARACTER_LIST[current_speaker + "__" + current_character] = 0;
                }

                // Add it to a character list
                _CHARACTER_LIST[current_speaker + "__" + current_character] += 1;
            }
        }
    }

    // Loop through all the character list entries
    for (var i = 0; i < Object.keys(_CHARACTER_LIST).length; i++) {
        // Split the data by speaker name and character
        current_character = Object.keys(_CHARACTER_LIST).at(i);
        current_speaker = current_character.split("__");

        // Precache the image
        precacheImage(speaker_configs[current_speaker[0]]["font_data_folder"] + "/" + current_speaker[1] + ".png");
    }

    // Unlock the precache lock
    unlockPrecacheLock();
});