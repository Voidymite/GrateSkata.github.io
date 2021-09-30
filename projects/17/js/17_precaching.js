// File: 17_precaching.js
// Author: AyeTSG
// Purpose: Preload assets for the entry number seventeen recreation

// TODO: Dynamically pre-cache required letters and characters based on message entries

// Purpose: List of image assets to precache
var _IMAGES_TO_PRECACHE = [
    "spr_mysteryman/0.png",
    "spr_mysteryman/1.png",
    "wingdings_font_images/A.png",
    "wingdings_font_images/B.png",
    "wingdings_font_images/C.png",
    "wingdings_font_images/D.png",
    "wingdings_font_images/dot.png",
    "wingdings_font_images/E.png",
    "wingdings_font_images/G.png",
    "wingdings_font_images/H.png",
    "wingdings_font_images/I.png",
    "wingdings_font_images/K.png",
    "wingdings_font_images/M.png",
    "wingdings_font_images/N.png",
    "wingdings_font_images/O.png",
    "wingdings_font_images/P.png",
    "wingdings_font_images/question_mark.png",
    "wingdings_font_images/R.png",
    "wingdings_font_images/S.png",
    "wingdings_font_images/space.png",
    "wingdings_font_images/T.png",
    "wingdings_font_images/U.png",
    "wingdings_font_images/V.png",
    "wingdings_font_images/W.png",
    "wingdings_font_images/X.png",
    "wingdings_font_images/Y.png"
];

// Purpose: List of sound assets to precache
var _SOUNDS_TO_PRECACHE = [
    "music/mus_smile.ogg",
    "sounds/snd_mysterygo.ogg",
    "sounds/snd_wngdng1.wav",
    "sounds/snd_wngdng2.wav",
    "sounds/snd_wngdng3.wav",
    "sounds/snd_wngdng4.wav",
    "sounds/snd_wngdng5.wav",
    "sounds/snd_wngdng6.wav",
    "sounds/snd_wngdng7.wav"
]

// Purpose: Precache all of the sounds and music
async function precacheSounds() {
    // Loop over all of the sounds
    for (var i = 0; i < _SOUNDS_TO_PRECACHE.length; i++) {
        // Create the sound
        sound = new Howl({
            src: ['./audio/' + _SOUNDS_TO_PRECACHE[i]],
            volume: 1.0
        });
    }

    return;
}

// Purpose: Precache all of the images
async function precacheImages(_callback) {
    // Loop over all of the images
    for (var i = 0; i < _IMAGES_TO_PRECACHE.length; i++) {
        // Create an image
        img = document.createElement("img");
        img.src = "./images/" + _IMAGES_TO_PRECACHE[i];
        img.classList.add("gaster_dingbat");
        document.getElementById("precache_image_holder").appendChild(img);
    }

    return;
}

// Purpose: Wait for the page to load
document.addEventListener('DOMContentLoaded', async function() {
    // Precache assets
    await precacheSounds();
    await precacheImages();

    // Unlock the precache lock
    unlockPrecacheLock();
});