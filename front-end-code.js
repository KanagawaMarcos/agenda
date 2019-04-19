window.onload = ()=>{
    let list = new ContactList();

    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', ()=>{
        list.add_contact(form.name.value, form.number.value,form.email.value);

        form.name.value = '';
        form.number.value = '';
        form.email.value = '';

        event.preventDefault();
    });

    const search_form = document.querySelector("#search-form")
    search_form.addEventListener('submit',()=>{
        list.search(search_form.search.value);

        const results = list.get_search_results();

        const div = document.querySelector('.contacts');
        if(results.length > 0){
            const items = results.map((contact)=> `<li>${contact.name}</li>`);
            div.innerHTML += "<ol>"+items+"</ol>";
        }else{
            div.innerHTML = "<h4>Nenhum Contato encontrado.</h4>";
        }

        event.preventDefault();
    });
}

class ContactList {

    constructor(contacts) {
        this.contacts = [];
        this.search_results = [];
    }

    add_contact(name,phone,email){
        this.contacts.push({
            name: name,
            phone: phone,
            email: email
        });
        return this;
    }
    save(){
        //Local Storage Save
    }
    get_contact_list(){
        return this.contacts;
    }
    search(input){
        if(this.contacts.length){
            search_results = this.contacts.filter((contact)=> contact.name.toLowerCase() === input.toLowerCase());
        }
    }

    get_search_results(){
        return this.search_results;
    }
}
