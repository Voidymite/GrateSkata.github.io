// WebRPG Script

// Class: Unit
class Unit {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;

        this.icon = "./img/units/" + id + "/icon.png";
    }
}

// Array: Units
_ARRAY_UNITS = [
    // Unit: Debug
    new Unit("Debug", "Debug Description", "debug"),

    // Unit: Monster
    new Unit("Monster", "He's gonna eat your girlfriend!", "monster")
];

// remove this later, this is for testing
window.addEventListener("load", function() {
    for (unit in _ARRAY_UNITS) {
        // this is for my sanity
        var reference_this = _ARRAY_UNITS[unit];

        // create elements
        var unit_item = document.createElement("li");
        var unit_icon = document.createElement("img");
        var unit_name = document.createElement("span");
        var unit_desc = document.createElement("span");

        // set image source
        unit_icon.src = reference_this.icon;

        // setup name and description
        unit_name.innerText = reference_this.name;
        unit_desc.innerText = ": " + reference_this.description;

        // set class names
        unit_name.classList.add("unit_entry_name");

        // layer them in dom
        unit_item.appendChild(unit_icon);
        unit_item.appendChild(unit_name);
        unit_item.appendChild(unit_desc);

        // add to dom
        document.getElementById("unit_list").appendChild(unit_item);
    }
});