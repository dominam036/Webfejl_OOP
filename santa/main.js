/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',

       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){s
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});

/**
* table render
*/
function initTable(){
    // TODO 6
    for(let i = 0; i < companionList.length; i++){ // végigmegyünk a companoin listan
        const currentElement = companionList[i]; //beletesszuk egy valtozoba a lista i-edik elemét
        const companion = new Companion( //példányosítjuk a companion classt egy companion változóba
            i, //az id egyenlő a companion listában lévő indexével
            currentElement.firstName,
            currentElement.lastName,
            currentElement.area
        );
        for(const pr of currentElement.products){ //végigmegyünk a currentTarget productokon
            companion.addProduct(pr); //hozzáadjuk a productokat a companionhoz
        }
        factory.addMano(companion); //hozzáadjuk a manoat(companion) a factory-hez
    }
    console.log(factory);
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
}