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
    return messages[entry][index];
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
        in_character = "_";
    }

    // Create an image
    img = document.createElement("img");
    img.src = "./data/wingdings_font_images/" + in_character + ".png";
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
    for (var i = 0; i < messages[in_entry].length; i++) {
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