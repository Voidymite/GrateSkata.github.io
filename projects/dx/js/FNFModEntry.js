class FNFMod {
    constructor(name, thumbnail_url, page_url) {
        this.name = name;
        this.thumbnail_url = thumbnail_url;
        this.page_url = page_url;
    }
}

_FNF_MODS = [
    new FNFMod("FNF Cinopack", "https://ayetsg.github.io/projects/dx/img/mods/cinopack/thumbnail.jpg", "https://ayetsg.github.io/projects/dx/work/cinopack.html"),
    new FNFMod("FNF Small Things", "https://ayetsg.github.io/projects/dx/img/mods/st/thumbnail.png", "https://ayetsg.github.io/projects/dx/work/small_things.html"),
    new FNFMod("???", "https://ayetsg.github.io/projects/dx/img/mods/tbd.png", "#"),
    new FNFMod("FNF VS Cyrix", "https://ayetsg.github.io/projects/dx/img/mods/cyrix/thumbnail.png", "https://ayetsg.github.io/projects/dx/work/vs_cyrix.html"),
    new FNFMod("FNF VS Kiryu", "https://ayetsg.github.io/projects/dx/img/mods/kiryu/thumbnail.jpg", "https://ayetsg.github.io/projects/dx/work/vs_kiryu.html"),
    new FNFMod("???", "https://ayetsg.github.io/projects/dx/img/mods/tbd_blue.png", "#")
]

function addModsToDocument() {
    _FNF_MODS.forEach(function(item, index) {
        var list_item = document.createElement('li');
        var list_image = document.createElement('a');
        var list_details = document.createElement('div');
        var list_title_holder = document.createElement('h3');
        var list_title_url = document.createElement('a');

        // set properties
        list_image.href = item.page_url;
        list_title_url.href = item.page_url;
        list_title_url.innerText = item.name;
        list_image.style = "background-image: url('" + item.thumbnail_url + "');";
        list_details.classList.add("mod_details");

        // add to document
        list_title_holder.appendChild(list_title_url);
        list_details.appendChild(list_title_holder);
        list_item.appendChild(list_image);
        list_item.appendChild(list_details);
        document.getElementById("mod_list").appendChild(list_item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addModsToDocument();
});