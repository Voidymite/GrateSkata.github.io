class Tile {
    constructor(name, role, thumbnail_url, page_url, year) {
        this.name = name;
        this.role = role;
        this.thumbnail_url = thumbnail_url;
        this.page_url = page_url;
        this.year = year;
    }
}

_PROJECTS = [
    // 2021 - July
    new Tile("Friday Night Funkin': Bob's Onslaught", "Programming", null, null, 2021),
    new Tile("Friday Night Funkin': VS Scott The Woz", "Programming", null, null, 2021),

    // 2021 - June
    new Tile("The Pentazone 2", "Playtesting", null, null, 2021)
]

function addProjectsToDocument() {
    _PROJECTS.forEach(function(item, index) {
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
        list_details.classList.add("project_details");

        // add to document
        list_title_holder.appendChild(list_title_url);
        list_details.appendChild(list_title_holder);
        list_item.appendChild(list_image);
        list_item.appendChild(list_details);
        document.getElementById("project_list").appendChild(list_item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addProjectsToDocument();
});