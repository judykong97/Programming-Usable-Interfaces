function addNewList() {
    alert('hello world!');
}

function addListItem() {
	var list = document.getElementById("grocery-list");
	var itemInput = document.getElementById("new-list-item");
	var newItem = document.createElement("li");
	newItem.appendChild(document.createTextNode(itemInput.value));
	list.appendChild(newItem);
    console.log('hello world');
}

function deleteListItem(item) {
	// remove li element (item) from ol element (item.parentNode)
 	item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

// $(document).ready(function(){
//     $("#add-item").click(function() { // bind handler for click event
//         var list = $("#grocery-list"); // get the ol list by id
//         var itemInput = $("#new-list-item"); // get the new item input
//       // append the input value within an li element
//         list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
//     });
// });

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li><input type=\"checkbox\" class=\"complete-item\" onclick=\"completeListItem(this)\">" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});


