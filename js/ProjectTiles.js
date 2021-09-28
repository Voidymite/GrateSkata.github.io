class List {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Tile {
    constructor(name, role, thumbnail_url, page_url, id, list_id, uses_link) {
        this.name = name;
        this.role = role;
        this.thumbnail_url = thumbnail_url;
        this.page_url = page_url;
        this.id = id;
        this.list_id = list_id;
        this.uses_link = uses_link;
    }
}

_LISTS = [
    new List("Unreleased", "list_unreleased"),
    new List("September 2021", "list_2021_september"),
    new List("August 2021", "list_2021_august"),
    new List("July 2021", "list_2021_july"),
    new List("June 2021", "list_2021_june"),
    new List("May 2021", "list_2021_may"),
    new List("July 2020", "list_2020_july")
]

_PROJECTS = [
    // Unreleased
    new Tile("Monday Dusk Monolith", "Programming", "https://ayetsg.github.io/img/projects/fnf_mdm.png", null, "fnf_mdm", "list_unreleased", false),
    new Tile("Friday Night Funkin' B3 Remixed", "Programming", "https://ayetsg.github.io/img/projects/fnf_b3.png", null, "fnf_b3", "list_unreleased", false),
    new Tile("Friday Night Funkin': Subway Sax Battle", "Programming", "https://ayetsg.github.io/img/projects/fnf_saxbattle.png", null, "fnf_saxbattle", "list_unreleased", false),

    // September 2021
    new Tile("Webtry Seventeen", "Programming", "https://ayetsg.github.io/img/projects/web_17.png", "https://ayetsg.github.io/projects/17", "web_17", "list_2021_september", true),

    // August 2021
    new Tile("Friday Night Funkin': MEMEVERSE", "Engine Programming", "https://ayetsg.github.io/img/projects/fnf_memeverse.png", "https://gamebanana.com/mods/313677", "fnf_memeverse", "list_2021_august", true),
    new Tile("Friday Night Funkin': VS RetroSpecter", "Programming", "https://ayetsg.github.io/img/projects/fnf_retrospecter.png", "https://gamebanana.com/mods/317366", "fnf_retrospecter", "list_2021_august", true),

    // July 2021
    new Tile("Friday Night Funkin': Bob's Onslaught", "Programming", "https://ayetsg.github.io/img/projects/fnf_bob.png", "https://gamebanana.com/mods/285296", "fnf_bob", "list_2021_july", true),
    new Tile("Friday Night Funkin': VS Ace", "Programming", "https://ayetsg.github.io/img/projects/fnf_ace.png", "https://gamebanana.com/mods/311759", "fnf_ace", "list_2021_july", true),
    new Tile("Friday Night Funkin': VS Scott The Woz", "Dialogue Programming", "https://ayetsg.github.io/img/projects/fnf_scott.png", "https://gamebanana.com/mods/305075", "fnf_scott", "list_2021_july", true),

    // June 2021
    new Tile("The Pentazone 2", "Playtesting", "https://ayetsg.github.io/img/projects/rblx_pz.png", "https://www.roblox.com/games/6623364739/The-Pentazone-2", "rblx_pz2", "list_2021_june", true),

    // May 2021,
    new Tile("Friday Night Funkin' Minus", "OST Video Production", "https://ayetsg.github.io/img/projects/fnf_minus.png", "https://gamebanana.com/mods/186942", "fnf_minus", "list_2021_may", true),

    // July 2020
    new Tile("The Pentazone", "Voice Acting", "https://ayetsg.github.io/img/projects/rblx_pz.png", "https://www.roblox.com/games/5148416987/PENTAZONE-2-OUT-NOW-The-Pentazone", "rblx_pz", "list_2020_july", true)
]

function getListEntry(list_id) {
    return _LISTS.find(list => {
        return list.id == list_id;
    })
}

function addProjectsToDocument() {
    _PROJECTS.forEach(function(item, index) {
        var list_item = document.createElement('li');
        var list_image = document.createElement('a');
        var list_details = document.createElement('div');
        var list_title_holder = document.createElement('h3');

        if (item.uses_link == true) {
            var list_title_url = document.createElement('a');
        } else {
            var list_title_url = document.createElement('span');
        }

        var list_description = document.createElement('span');
        var list_sep = document.createElement('br');

        // set properties

        if (item.uses_link == true) {
            list_image.href = item.page_url;
            list_title_url.href = item.page_url;
        }

        list_title_url.innerText = item.name;
        list_description.innerText = item.role;
        list_image.style = "background-image: url('" + item.thumbnail_url + "');";
        list_details.classList.add("project_details");
        list_details.classList.add("project_" + item.id + "_details");
        list_description.classList.add("project_desc");
        list_description.classList.add("project_" + item.id + "_desc");

        // add to document
        list_title_holder.appendChild(list_title_url);
        list_title_holder.appendChild(list_sep);
        list_title_holder.appendChild(list_description);
        list_details.appendChild(list_title_holder);
        list_item.appendChild(list_image);
        list_item.appendChild(list_details);
        document.getElementById(item.list_id).appendChild(list_item);
    });
}

function addListsToPage() {
    _LISTS.forEach(function(item, index) {
        createList(item);
    })
}

function getListOnPage(list) {
    return document.getElementById(list.id);
}

function createList(list) {
    var list_name = document.createElement("h3");
    var list_list = document.createElement("ul");

    list_list.classList.add("project_list");
    list_list.id = list.id;
    list_name.classList.add("list_name");
    list_name.innerText = list.name;

    document.getElementById("lists").appendChild(list_name);
    document.getElementById("lists").appendChild(list_list);
}

document.addEventListener("DOMContentLoaded", function() {
    addListsToPage();   
    addProjectsToDocument();
});