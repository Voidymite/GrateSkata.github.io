// TODO!!!!!!!
// - make player choose another song when current one is done

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
songToUse = songs[Math.floor(Math.random() * songs.length)];

// wait for page DOM to load
window.addEventListener("load", function() {
    // create the player and it's info blurb
    var playerDiv = document.createElement("div");
    var playerBrk = document.createElement("br");
    var playerInfo = document.createElement("span");
    var player = document.createElement("audio");

    // set the player and blurb properties
    playerDiv.classList.add("player_box");
    playerInfo.innerText = "🎵: " + songToUse.details;
    playerInfo.classList.add("music_info");
    player.setAttribute("controls", "");
    player.setAttribute("loop", "");
    player.classList.add("music_player");
    player.src = songToUse.url;
    player.volume = 0.2;

    // add the player and blurb
    playerDiv.appendChild(playerInfo);
    playerDiv.appendChild(playerBrk);
    playerDiv.appendChild(player);
    document.body.appendChild(playerDiv);
});