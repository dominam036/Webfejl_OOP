class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){ //Nem kell tulajdonság, mert később töltjük fel
        this.manolista = []; //létrehozunk egy Factory példányhoz tartozó üres tömböt
    }
    addMano(mano){ //hazzaadunk manokat a manolistahoz
        this.manolista.push(mano); //a példányosított factory manolistajahoz hozzaadjuk a mano-t
    }
}
   
class Companion{
    // TODO 5 
    constructor(id, kernev, veznev, reszleg){ //a példányosításhoz fontos mind a 4 tulajdonság
        this.id = id;
        this.kernev = kernev;
        this.veznev = veznev;
        this.reszleg = reszleg;

        this.productlist = []; //nincs még productja "bejelentkezésnél"
        
    }
    getName(){ //látja a példány tulajdonságát ezért nem kell paraméter
        return this.veznev + this.kernev
    }
    addProduct(product){
        this.productlist.push(product); // hozzaadjuk a product-ot a listahoz
    }
}