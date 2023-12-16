const contacts = [];

function addContact (name, number, email, adress){
    for( let i = 0; i < contacts.length; i++){
        if(contacts[i].number === number || contacts[i].email === email) {
            console.log('This entry already exist');
            return 
        }
    }
    let newContact = {
        name:name,
        number:number,
        email:email,
        adress:adress
    }
    contacts.push(newContact)
}

function deleteContact (name){
    // let index = -1;
    // for(let i = 0; i< contacts.length; i++){
    //     if(contacts[i].name === name){
    //         index = i;
    //         break;
    //     }
    // }
    let index = findByFeild("name", name)
    if (index !== -1){
        console.log('contact delete successfully');
        contacts.splice(index, 1)
    } else {
        console.log('not found');
    }
    return
}

// const findContactIndex = (name) => contacts.findIndex(e => e.name === name)
// const findContactIndexPhone = (phone) => contacts.findIndex(e => e.number === phone)

const findByFeild = (key, value) => contacts.findIndex(e => e[key] === value)

function updateContact(oldnumber, newnumber, newemail, newname, newadress){
    let index = findByFeild("number", oldnumber)
    if(index === -1){
        contacts[index].number = newnumber;
        contacts[index].name = newname;
        contacts[index].email = newemail;
        contacts[index].adress = newadress;
    }
    // for( let i=0; i<contacts.length; i++){
    //     if(oldnumber === contacts[i].number){
    //         contacts[i].number = newnumber;
    //         contacts[i].name = newname;
    //         contacts[i].email = newemail;
    //         contacts[i].adress = newadress;
    //     }
    // }
}

function searchContact(value){
    // let store = []
    // for(let i=0; i<contacts.length; i++){
    //     if(value === contacts[i].name || value === contacts[i].number || value ===contacts[i].email || value === contacts[i].adress){
    //         store.push(contacts[i]);
    //     }
    // } return store
    return contacts.filter(e => e.number === value || e.adress === value || e.name === value || e.email === value)
}

function searchAny(value){
    return contacts.filter(e => 
        e.name.includes(value) || 
        e.email.includes(value) ||
        e.number.includes(value) ||
        e.adress.includes(value)
    )
}

addContact('waleed', '3456325698', 'email@abs', 'kulanch')
addContact('Durrah Khan', '254325', 'email', 'shapuk')
addContact('Durrah Khan', '2543265', 'email99', 'shapuk')
//console.log(contacts);
//deleteContact('waleed')
//deleteContact('waleed')
//console.log(contacts);

//updateContact('3456325698', '7642637', 'wqr@email', 'waqar', 'parom')
//console.log(contacts);


// let search = searchContact('sha');
// console.log(search);

console.log(searchContact("kulanch"));


// const contactManger = new ContactManger()
// contactManger.addContact("", "","", "")
// contactManger.updateContact()
// contactManger.deleteContact()