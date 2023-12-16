class ContactManager {
    constructor(){
        this.contacts = [];
    }

    addContact(name, number, email, address){
        for(let i = 0; i < this.contacts.length; i++){
            if(this.contacts[i].number === number || this.contacts[i].email === email){
                console.log('this entry already exist');
                return;
            }
        }

        let newContact = {
            name: name,
            number: number,
            email: email,
            address: address
        }

        this.contacts.push(newContact);
    }

    deleteContact(name){
        let index = this.findByField('name', name);
        if (index !== -1){
            console.log('contact delete succesfull');
            this.contacts.splice(index, 1);
        } else {
            console.log('contact not found');
        }
    }
    

    findByField(key, value){
        return this.contacts.findIndex(e => e[key] === value);
    }

    updateContact(oldnumber, newname, newnumber, newemail, newaddress){
        let index = this.findByField('number', oldnumber);
        if (index !== -1){
            this.contacts[index].name = newname;
            this.contacts[index].number = newnumber;
            this.contacts[index].email = newemail;
            this.contacts[index].adress = newaddress;
        }
    }

    searchContact(value){
        return this.contacts.filter(e => e.name === value || e.number === value || e.email === value || e.address === value)
    }

    searchAny(value){
        return this.contacts.filter(e =>
            e.name.includes(value) ||
            e.number.includes(value) ||
            e.email.includes(value) ||
            e.address.includes(value)

        );
    }

}

const contactManager = new ContactManager();

contactManager.addContact('Koh Baloch', '3576326', 'email@123', 'kulach');
contactManager.addContact('Nadeem', '47758', 'email@334', 'pasni');
contactManager.addContact('ganok', '37t823', 'ganok@gmail.com', 'shapuk');


console.log(contactManager.searchAny("477"));