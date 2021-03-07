function appendToList(list_id, item_contents) {
    // create the list item
    var list_item = document.createElement("li");

    // set the text of the item to the contents
    list_item.innerText = item_contents;

    // append the shit
    document.getElementById(list_id).appendChild(list_item);
}