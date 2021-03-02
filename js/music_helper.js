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
    new Song("Kawai Sprite - Bopeebo (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/bopeebo/Inst.mp3"),
    new Song("Kawai Sprite - Roses (Instrumental)", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/roses/Inst.mp3"),
    new Song("Kawai Sprite - Test", "https://raw.githubusercontent.com/ninjamuffin99/Funkin/master/assets/songs/test/Inst.mp3")
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