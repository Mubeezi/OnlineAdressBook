$(document).ready(function(){

	$( "#form" ).submit(function( event ) {
	  	event.preventDefault();

	  	var firstname = $(this).find('[name=firstname]').val(); 
	  	var secondname = $(this).find('[name=secondname]').val(); 
	  	var phonenumber = $(this).find('[name=phonenumber]').val(); 
	  	var email = $(this).find('[name=email]').val(); 

		/*
	  	var street = $(this).find('[name=street]').val(); 
	  	var city = $(this).find('[name=city]').val(); 
	  	var state = $(this).find('[name=state]').val();
	  	*/

	  	let ar = { "name1" : firstname, "name2": secondname, "contact" : phonenumber, "email": email };

	  	let url = 'https://outboxedu-contacts.herokuapp.com/add'

	  	alert(`${url}`);
	});

});