// helper song class
class Song {
    constructor(details, url) {
        this.details = details;
        this.url = url;
    }
}

// songs list
var songs = [
    new Song("Basset - Monster", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/monster/Inst.mp3"),
    new Song("Basset - Winter Horrorland", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/winter-horrorland/Inst.mp3"),
    new Song("Kawai Sprite - Blammed (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/blammed/Inst.mp3"),
    new Song("Kawai Sprite - Bopeebo (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/bopeebo/Inst.mp3"),
    new Song("Kawai Sprite - Breakfast", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/shared/music/breakfast.mp3"),
    new Song("Kawai Sprite - Cocoa (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/cocoa/Inst.mp3"),
    new Song("Kawai Sprite - Dadbattle (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/dadbattle/Inst.mp3"),
    new Song("Kawai Sprite - Don't Stop", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/shared/music/gameOver.mp3"),
    new Song("Kawai Sprite - Eggnog (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/eggnog/Inst.mp3"),
    new Song("Kawai Sprite - Fresh (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/fresh/Inst.mp3"),
    new Song("Kawai Sprite - Gettin' Freaky", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/preload/music/freakyMenu.mp3"),
    new Song("Kawai Sprite - High (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/high/Inst.mp3"),
    new Song("Kawai Sprite - M.I.L.F. (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/milf/Inst.mp3"),
    new Song("Kawai Sprite - Philly (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/philly/Inst.mp3"),
    new Song("Kawai Sprite - Pico (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/pico/Inst.mp3"),
    new Song("Kawai Sprite - Roses (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/roses/Inst.mp3"),
    new Song("Kawai Sprite - Satin Panties (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/satin-panties/Inst.mp3"),
    new Song("Kawai Sprite - Senpai (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/senpai/Inst.mp3"),
    new Song("Kawai Sprite - South (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/south/Inst.mp3"),
    new Song("Kawai Sprite - Spookeez (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/spookeez/Inst.mp3"),
    new Song("Kawai Sprite - Test", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/test/Inst.mp3"),
    new Song("Kawai Sprite - Thorns (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/thorns/Inst.mp3"),
    new Song("Kawai Sprite - Tutorial", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/tutorial/Inst.mp3"),
    new Song("Markus Alexei - Magnetic Circuit", "https://ayetsg.github.io/music/notch/magnetic_circuit.mp3")
]

// choose a song
function chooseSong() {
    return songs[Math.floor(Math.random() * songs.length)];
}

function updateSongPlayer(song) {
    playerInfo = document.getElementById("player_info");
    player = document.getElementById("player"); 

    playerInfo.innerText = "🎵: " + song.details;
    player.src = song.url;
}

songToUse = chooseSong();

// wait for page DOM to load
window.addEventListener("load", function() {
    // create the player and it's info blurb
    var playerDiv = document.createElement("div");
    var playerBrk = document.createElement("br");
    var playerInfo = document.createElement("span");
    var player = document.createElement("audio");

    // set the player and blurb properties
    playerDiv.classList.add("player_box");
    playerInfo.classList.add("music_info");
    playerInfo.id = "player_info";
    player.id = "player";
    player.setAttribute("controls", "");
    player.classList.add("music_player");
    player.volume = 0.2;

    // add the player and blurb
    playerDiv.appendChild(playerInfo);
    playerDiv.appendChild(playerBrk);
    playerDiv.appendChild(player);
    document.body.appendChild(playerDiv);

    // update song info
    updateSongPlayer(songToUse);

    // once audio ends, update with another song
    player.onended = function() {
        updateSongPlayer(chooseSong());
        player.play();
    };
});