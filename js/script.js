// script.js
/*.
$(document).ready(function(){
	var urls = 'https://outboxedu-contacts.herokuapp.com/all';

	var users = [];

	for (var i = 0; i <= 5; i++) {
		users.push("<tr> <td>User1</td> <td>User 2</td> <td>0782407042</td> <td>sbnibro256@gmail.com</td> </tr> ");
	}

	console.log(users);

	document.getElementById("table-content").innerHTML = users;
});
*/

$(document).ready(function() {
  $("#retrieve-resources").click(function() {
    var displayResources = $("#display-resources");

    displayResources.text("Loading data from JSON source...");

    $.ajax({
      type: "GET",
      url: "https://outboxedu-contacts.herokuapp.com/all",
      success: function(result) {
        console.log(result);
        var output =
          "<table class='table table-striped'><thead><tr><th>Firstname</th><th>Lastname</th><th>Phone Number</th><th>Email</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].name1 +
            "</td><td>" +
            result[i].name2 +
            "</td><td>" +
            result[i].contact +
            "</td><td>" +
            result[i].email +
            "</td></tr>";
        }
        output += "</tbody></table>";

        displayResources.html(output);
        $("table").addClass("table");
      }
    });
  });
});
