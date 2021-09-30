// File: speaker_configs.js
// Author: AyeTSG
// Purpose: Provide different "speakers" for the undertale-styled typer

var speaker_configs = {
    // Gaster
    "gaster": {
        // What font should the speaker use?
        "font": "wingdings_bitmapped_images",       // NOTE: Since this is a special font, this case should be manually handled over in 17.js

        // Should the speaker show their icon?
        "uses_speaker_icon": false,

        // What icon should the speaker use?
        "speak_icon": null,

        // What sounds should be played when a character is typed?
        "speak_sounds": [
            "sounds/snd_wngdng1.wav",
            "sounds/snd_wngdng2.wav",
            "sounds/snd_wngdng3.wav",
            "sounds/snd_wngdng4.wav",
            "sounds/snd_wngdng5.wav",
            "sounds/snd_wngdng6.wav",
            "sounds/snd_wngdng7.wav"
        ],

        // How many MS should pass before typing another character?
        "time_type": 150,

        // How many MS should pass before typing another entry?
        "time_wait": 600
    }
}