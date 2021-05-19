class DownloadLink {
    constructor(serviceName, url) {
        this.serviceName = serviceName;
        this.url = url;
    }
}

class FNFMod {
    constructor(name, description, publish_date, thumbnail_url, download_urls, id) {
        this.name = name;
        this.description = description;
        this.publish_date = publish_date;
        this.thumbnail_url = thumbnail_url;
        this.download_urls = download_urls;
        this.id = id;
    }
}

_FNF_MODS = [
    // Cinopack
    new FNFMod(
        "Friday Night Funkin': Cinopack",
        "Cinopack is a custom modpack that overhauls and adds new songs and characters to the base game.",
        "March 6th, 2021",
        "https://ayetsg.github.io/projects/dx/img/mods/cinopack/thumbnail.jpg",
        [
            new DownloadLink("GameBanana", "https://gamebanana.com/mods/42833"),
            new DownloadLink("GitHub Source", "https://github.com/AyeTSG/Funkin_Cinopack_ST")
        ],
        "cinopack"
    ),

    // Small Things
    new FNFMod(
        "Friday Night Funkin': Small Things",
        "Friday Night Funkin' Small Things is an enhancement mod for Friday Night Funkin' created to enhance the base gameplay experience.",
        "March 31st, 2021",
        "https://ayetsg.github.io/projects/dx/img/mods/st/thumbnail.png",
        [
            new DownloadLink("GameBanana", "https://gamebanana.com/gamefiles/19575"),
            new DownloadLink("GitHub", "https://github.com/AyeTSG/Funkin_SmallThings/releases"),
            new DownloadLink("GitHub Source", "https://github.com/AyeTSG/Funkin_SmallThings")
        ],
        "small_things"
    ),

    // VS Cyrix
    new FNFMod(
        "Friday Night Funkin': VS Cyrix",
        "As word spreads of your many adventures, a message comes in from the music producer Cyrix! He wants you in his studio, and is ready to mix up some new tracks! You ready to get funky?",
        "May 18th, 2021",
        "https://ayetsg.github.io/projects/dx/img/mods/cyrix/thumbnail.png",
        [
            new DownloadLink("GameBanana", "https://gamebanana.com/mods/287411"),
            new DownloadLink("GitHub Source", "https://github.com/AyeTSG/Funkin_VsCyrix"),
            new DownloadLink("Google Drive", "https://drive.google.com/file/d/117jOySmzxytiBzKwtuYauY-dKbKqYk8O/view?usp=sharing"),
            new DownloadLink("MEGA", "https://mega.nz/file/TTJ3gY6a#ey3cNBCjbg-7kpZSCgLeAH5sqGG87QWY0ievOwfcKPs")
        ],
        "vs_cyrix"
    ),

    // VS Kiryu
    new FNFMod(
        "Friday Night Funkin': VS Kiryu",
        "Oh no! You were trying to have an nice date with your girlfriend at the bar but the Tojo Clan has shown up! Luckily the legendary Dragon of Dojima, Kazuma Kiryu has come to save us. But, there's an issue. He can't let you leave unless you have a singing battle with him! Luckily, you are one of the best!",
        "May 6th, 2021",
        "https://ayetsg.github.io/projects/dx/img/mods/kiryu/thumbnail.jpg",
        [
            new DownloadLink("GameBanana", "https://gamebanana.com/mods/249504"),
            new DownloadLink("GitHub Source", "https://github.com/AyeTSG/Funkin_VsKiryu"),
            new DownloadLink("Google Drive", "https://drive.google.com/file/d/1U6KBiU_8FnIz2RpK2HF9NoGckYBTMu-X/view?usp=sharing"),
            new DownloadLink("MEGA", "https://mega.nz/file/SHpyEIZZ#tXWlQisqIBCnkENJcATKuyNAvjBeTL4R6LHIsHDEBf4")
        ],
        "vs_kiryu"
    )
];

function getModEntryFromDocument() {
    var result = _FNF_MODS.filter(entry => {
        return entry.id === document.querySelector("meta[property='dx:mod_id']").getAttribute("content");
    });

    return result[0];
}

function addDownloadLinks(entry) {
    for (dl_link in entry.download_urls) {
        list_entry = document.createElement('li');
        url_entry = document.createElement('a');

        url_entry.innerText = entry.download_urls[dl_link].serviceName;
        url_entry.href = entry.download_urls[dl_link].url;

        list_entry.appendChild(url_entry);
        document.getElementById("mod_dl_list").appendChild(list_entry);
    }
}

function setupDocument() {
    modEntry = getModEntryFromDocument();

    document.getElementById("mod_thumbnail").src = modEntry.thumbnail_url;

    document.getElementById("mod_name").innerText = modEntry.name;
    document.getElementById("mod_publish_date").innerText = "Published on " + modEntry.publish_date;
    document.getElementById("mod_desc").innerText = modEntry.description;

    addDownloadLinks(modEntry);
}

window.addEventListener("load", function() {
    setupDocument();
})