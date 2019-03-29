
//creates a blue-print
function Contact(firstname, secondname, phone_number,email,street,city,state) {
  this.firstname = firstname;
  this.secondname = secondname;
  this.phone_number = phone_number;
  this.email=email;

  this.street=street;
  this.city=city;
  this.state=state;
}

Contact.prototype.address = function(street,city,state){
   	console.log(this.street + "," + this.city + "," + this.state);
}
