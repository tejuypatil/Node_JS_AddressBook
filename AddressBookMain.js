class Contact {
    constructor(name , address, city, state, zip, phone_no, email_id) {
      this.name = name;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone_no = phone_no;
      this.email_id = email_id;
    }
}

class AddressBook{
    contacts=[];
    addContact =  function(c1)
    {
        this.contacts.push(c1);
    }
}



addressBook1=new AddressBook();

c1 = new Contact("Teju","Pune","Pune","Maharashtra","411057","578133655456","teju.patil@gmail.com");
c2 = new Contact("Digu","Mumbai","Pune","Maharashtra","411057","578133655456","teju.patil@gmail.com");
addressBook1.addContact(c1);
addressBook1.addContact(c2);

console.log(addressBook1);