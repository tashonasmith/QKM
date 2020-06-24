$(document).ready(function() {
    $(".submit-newkid").click(function() {
        var str = $("#new-kid").val();
        alert(str);



        // // Getting references to the name input 
        // var nameInput = $("#kid-name");


        // $("#new-kid").on("click", function() {
        //     var newKid = nameInput;
        //     $("#kidinfo").text(newKid);
    });
});


//     var kidList = $("tbody");
//     var kidContainer = $(".kid-container");

// Adding event listeners to the form to create a new object, and the button to delete
// an Author
// $(document).on("submit", "#kid-form", handleKidFormSubmit);
// $(document).on("click", ".delete-kid", handleDeleteButtonPress);

// // Getting the initial list of Authors
// getKids();

// // A function to handle what happens when the form is submitted to create a new Author
// function handleKidFormSubmit(event) {
//     event.preventDefault();
//     // Don't do anything if the name field hasn't been filled out
//     if (!nameInput.val().trim().trim()) {
//         return;
//     }
//     // Calling the upsertAuthor function and passing in the value of the name input
//     upsertKid({
//         name: nameInput
//             .val()
//             .trim()
//     });
// }

// // A function for creating an author. Calls getAuthors upon completion
// function upsertKid(kidData) {
//     $.post("/api/kids", kidData)
//         .then(getKids);
// }

//     // Function for creating a new list row for authors
//     // function createKidRow(kidData) {
//     //     var newTr = $("<tr>");
//     //     newTr.data("kid", kidData);
//     //     newTr.append("<td>" + kidData.name + "</td>");
//     //     if (kidData.Chores) {
//     //         newTr.append("<td> " + kidData.Chores.length + "</td>");
//     //     } else {
//     //         newTr.append("<td>0</td>");
//     //     }
//     //     newTr.append("<td><a href='/chore?kid=" + kidData.id + "'>Go to Chores</a></td>");
//     //     newTr.append("<td><a href='/newchore?kid_id=" + kidData.id + "'>Create a Chore</a></td>");
//     //     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-kid'>Delete Kid</a></td>");
//     //     return newTr;
//     // }

//     // Function for retrieving authors and getting them ready to be rendered to the page
//     function getKids() {
//         $.get("/api/kids", function(data) {
//             var rowsToAdd = [];
//             for (var i = 0; i < data.length; i++) {
//                 rowsToAdd.push(createKidRow(data[i]));
//             }
//             renderKidList(rowsToAdd);
//             nameInput.val("");
//         });
//     }

//     // A function for rendering the list of kids to the page
//     function renderKidList(rows) {
//         kidList.children().not(":last").remove();
//         kidContainer.children(".alert").remove();
//         if (rows.length) {
//             console.log(rows);
//             kidList.prepend(rows);
//         } else {
//             renderEmpty();
//         }
//     }

//     // Function for handling what to render when there are no kids
//     function renderEmpty() {
//         var alertDiv = $("<div>");
//         alertDiv.addClass("alert alert-danger");
//         alertDiv.text("You must introduce a Kid before you can create a Chore.");
//         kidContainer.append(alertDiv);
//     }

//     // Function for handling what happens when the delete button is pressed
//     function handleDeleteButtonPress() {
//         var listItemData = $(this).parent("td").parent("tr").data("kid");
//         var id = listItemData.id;
//         $.ajax({
//                 method: "DELETE",
//                 url: "/api/kids/" + id
//             })
//             .then(getKids);
//     }
// });