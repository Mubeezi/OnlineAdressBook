// script.js

$(document).ready(function(){
	var users = 'https://outboxedu-contacts.herokuapp.com/all'

	var users = [];

	for (var i = 0; i <= 5; i++) {
		users.push("<tr> <td>Bruno</td> <td>Nicholas</td> <td>0782407042</td> <td>sbnibro256@gmail.com</td> </tr> ");
	}

	console.log(users);

	/*
	document.getElementById("table-content").innerHTML = 
        "<tr> "
        + "<td>" + "Bruno" + "</td>" 
        + "<td>" + "Nicholas" + "</td>" 
        + "<td>" + "0782407042" + "</td>" 
        + "<td>" + "sbnibro256@gmail.com" + "</td>"
        + "</tr>" ;
*/

	document.getElementById("table-content").innerHTML = users;
});


