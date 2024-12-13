const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname;
        
    }
    render(parentElement){
        const row = document.createElement("tr");
        parentElement.appendChild(row);
        const tdln = document.createElement("td");
        tdln.innerHTML = this.lastname;
        row.appendChild(tdln);
        const tdfn1 = document.createElement("td");
        tdfn1.innerHTML = this.firstname1;
        row.appendChild(tdfn1);
        if(this.firstname2 == undefined || this.firstname2 == ""){
            tdfn1.colSpan = 2;
        } else{
            const tdfn2 = document.createElement("td");
            tdfn2.innerHTML = this.firstname2;
            row.appendChild(tdfn2); 
        }
    }
}
class FormController{
    #form
    constructor(form){
        this.#form = form;
    }
    #getInputById(id){
        return this.#form.querySelector("#" + id);
    }
    get lastname(){
        const lname = this.#getInputById("lastname");
        return lname.value;
    }
    get firstname1(){
        const fname1 = this.#getInputById("firstname1");
        return fname1.value;
    }
    get firstname2(){
        const fname2 = this.#getInputById("firstname2");
        return fname2.value;
    }
}
function init(){
    const form = document.getElementById("form");
    const tbody = document.getElementById("tbodyId");
    for(const per of array){
        const person = new Person(per);
        person.render(tbody);
    }
    const formController = new FormController(form); 
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const obj = {
            firstname1: formController.firstname1,
            firstname2: formController.firstname2,
            lastname: formController.lastname
        };
        const pers = new Person(obj);
        pers.render(tbody);
    })
}
init();