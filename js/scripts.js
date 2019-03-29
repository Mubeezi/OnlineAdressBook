$(document).ready(function(){
	$("form").on("submit", function(event) {
     	event.preventDefault();
     	
     	var values = [];

     	var age = Number($(this).find('[name=age]:checked').val());



});