var HAS_BEEN_INITIALIZED = false;
var HAS_BEEN_PRECACHED = false;
var HAS_CLICKED_MYSTERY_MAN = false;
var _ALPHA_INTERVAL = null;
var _ALPHA = 1.0;

var TYPE_SPEED = 150;   // Master type speed (ms)
var WAIT_SPEED = 600;   // Master wait speed (ms)

// Purpose: Pauses for X milliseconds
function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Purpose: Sets up the initial shit
function init_17_shit() {
    // Remove the notice
    document.body.removeChild(document.getElementById("notice"));

    // Play the smile music
    playSmileMusic();

    // Type the entry
    typeEntry("entry_number_seventeen");
}

// Purpose: Retrieves a message from messages.json
function retrieve_message(entry, index) {
    // Return the sting
    return messages[entry]["ordered_entries"][index];
}

// Purpose: Types a character onto the page
function typeCharacter(in_character) {

    /*
    // Create a <span>
    span = document.createElement("span");

    // Set the inner text to the character
    span.innerText = in_character;

    // Add the span to the page
    span.classList.add("gaster_text_entry");
    document.getElementById("gaster_text").appendChild(span);
    */

    // Fix spaces
    if (in_character == " ") {
        in_character = "space";
    }

    // Fix dots
    if (in_character == ".") {
        in_character = "dot";
    }

    // Fix question marks
    if (in_character == "?") {
        in_character = "question_mark";
    }

    // Create an image
    img = document.createElement("img");
    img.src = "./images/wingdings_font_images/" + in_character + ".png";
    img.classList.add("gaster_dingbat");
    document.getElementById("gaster_text").appendChild(img);

    // Plays a wingdings sound
    playWingDingSound();
}

// Purpose: Types a phrase onto the page
async function typePhrase(in_phrase) {
    // Loop over each character
    for (var i = 0; i < in_phrase.length; i++) {
        // Type the character
        typeCharacter(in_phrase[i]);

        await _sleep(TYPE_SPEED);
    }

    // Create a line break
    line_br = document.createElement("br");

    // Add to document
    document.getElementById("gaster_text").appendChild(line_br);
}

// Purpose: Types a whole entry from messages.json
async function typeEntry(in_entry) {
    // Loop over all messages
    for (var i = 0; i < messages[in_entry]["ordered_entries"].length; i++) {
        // Type the phrase
        await typePhrase(retrieve_message(in_entry, i));

        await _sleep(WAIT_SPEED);
    }
}

// Purpose: Plays the background music
function playSmileMusic() {
    // Create the sound
    sound = new Howl({
        src: ['./audio/music/mus_smile.ogg'],
        volume: 0.7,
        loop: true
    });

    // Play the sound
    sound.play();
}

// Purpose: Plays 1 of 7 random sounds
function playWingDingSound() {
    // Get a random number between 1 and 7
    random_number = (Math.floor(Math.random() * 7)) + 1;

    // Create the sound
    sound = new Howl({
        src: ['./audio/sounds/snd_wngdng' + random_number + '.wav'],
        volume: 1.0
    });

    // Play the sound
    sound.play();
}

// Purpose: Tells the script the shit been precache
function unlockPrecacheLock() {
    // Set the variable
    HAS_BEEN_PRECACHED = true;

    // Destroy the temporary pre-caching image holder
    document.getElementById("precache_image_holder").remove();

    // Change the notice text
    document.getElementById("notice").innerText = "click anywhere on the page to start because browser autoplay policies suck";
}

// Purpose: Handles clicking on the mystery man
async function handleMysteryManClick() {
    if (HAS_CLICKED_MYSTERY_MAN == false) {
        HAS_CLICKED_MYSTERY_MAN = true;
        
        // Create and play the mystery go sound
        sound = new Howl({
            src: ['./audio/sounds/snd_mysterygo.ogg'],
            volume: 1.0
        });

        sound.play();

        // Set the new sprite to be the next frame
        document.getElementById("mystery_man").src = "./images/spr_mysteryman/1.png";

        // Lower his alpha
        _ALPHA_INTERVAL = window.setInterval(lowerMysteryAlpha, 50);

        // Sleep 3 seconds
        await _sleep(3000);

        // Destroy the mystery man shit
        document.getElementById("mystery_man_holder").remove();
        window.clearInterval(_ALPHA_INTERVAL);
    }
}

// Purpose: Lowers the mystery man's alpha
function lowerMysteryAlpha() {
    document.getElementById("mystery_man").style.opacity = _ALPHA;
    
    if (_ALPHA > 0) {
        _ALPHA -= 0.05;
    } else {
        _ALPHA = 0;
    }
}

// Purpose: Handle clicking on the window
window.onclick = function() {
    // Initialize
    if (HAS_BEEN_INITIALIZED == false && HAS_BEEN_PRECACHED == true) {
        HAS_BEEN_INITIALIZED = true;
        init_17_shit();
    }
}