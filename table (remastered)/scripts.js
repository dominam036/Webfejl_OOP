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
        if(this.firstname2 == undefined){
            tdfn1.colSpan = 2;
        } else{
            const tdfn2 = document.createElement("td");
            tdfn2.innerHTML = this.firstname2;
            row.appendChild(tdfn2); 
        }
    }
}
function init(){
    for(const per of array){
        const person = new Person(per);
        const tbody = document.getElementById("tbodyId");
        person.render(tbody);
    }
}
init();