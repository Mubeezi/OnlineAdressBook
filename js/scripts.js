$(document).ready(function(){

	$( "#form" ).submit(function( event ) {
	  	event.preventDefault();

	  	var firstname = $(this).find('[name=name1]').val();
	  	var secondname = $(this).find('[name=name2]').val();
	  	var phonenumber = $(this).find('[name=contact]').val();
	  	var email = $(this).find('[name=email]').val();

		/*
	  	var street = $(this).find('[name=street]').val();
	  	var city = $(this).find('[name=city]').val();
	  	var state = $(this).find('[name=state]').val();.
	  	*/

	  	let ar = { "name1" : firstname, "name2": secondname, "contact" : phonenumber, "email": email };

	  	let url = 'https://outboxedu-contacts.herokuapp.com/add'

	  	alert('New user added as: \nFirst name:' + firstname + '\nSecond name: ' + secondname + '\nPhone number: ' + phonenumber + '\nEmail: ' + email);

	  	window.location.href = "index.html"
	});

});
