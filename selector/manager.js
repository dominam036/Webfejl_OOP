/**
 * @callback NextCardCallback
 * @param {String} text a kirendelendő kártya szövege
 * 
 * @callback appendCardToSolutionCallback
 * @param {String} text a kártya szövege
 * 
 * @callback finishCallback
 * @param {String} text ami az eredményt tartalmazza
 */
/**
 * a kommunikációért felel a deck és a
 */
class Manager{
    /**
     * @type {Card[]}
     */
    #array

    /**
     * @type {object} az igaznak vélt kártyákat fogja tartalmazni
     */
    #solution

    /**
     * @type {Number} az aktuális kártya száma
     */
    #currentCardNumber

    /**
     * @type {NextCardCallback}
     */
    #nextCardCallBack

    /**
     * @type {appendCardToSolutionCallback}
     */
    #appendCardToSolutionCallback

    /**
     * @type {finishCallback}
     */
    #finishCallback

    /**
     * 
     * @param {Card[]} array 
     */
    constructor(array){
        this.#array = array
        this.#solution = {};
        this.#currentCardNumber = 0
    }

    /**
     * Beállítja a paraméter alapján a nextCardCallbacket
     * @param {NextCardCallback} callback tartalmazza alogikát ami le fog futni mikor meghívjuk a függvényünket
     */
    setNextCardCallback(callback){
        this.#nextCardCallBack = callback
    }

    /**
     * Beállítja a paraméter alapján a nextCardCallbacket
     * @param {appendCardToSolutionCallback} callback tartalmazza alogikát ami le fog futni mikor meghívjuk a függvényünket
     */
    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback
    }
    
    /**
     * Beállítja a paraméter alapján a nextCardCallbacket
     * @param {finishCallback} callback tartalmazza alogikát ami le fog futni mikor meghívjuk a függvényünket
     */
    setFinishCallback(callback){
        this.#finishCallback = callback
    }

    /**
     * Ezt a függvényt akkor hívjuk majdmeg ha egy új kártyára van szükségünk (kártyára vagy skip-re kattintunk)
     * @param {String?} answer
     */
    nextCard(answer){
        if(answer){ // ha a kártyára kattintva lépünk
            this.#solution[this.#currentCardNumber] = answer //átadjuk a választ
            this.#appendCardToSolutionCallback(answer)
        }
        this.#currentCardNumber++;
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallBack(this.#array[this.#currentCardNumber].text)
        }
        else{
            let sum = 0;
            for(const i in this.#array){
                if(this.#array[i].correct){
                    if(this.#solution[i]){
                        sum++;
                    }
                }
                else{
                    if(!this.#solution[i]){
                        sum++;
                    }
                }
            }
            const result = `A feladatban elért pontszám az ${this.#array.length}/${sum}`
            this.#finishCallback(result)
        }
    }

    /**
     * felhúzza az első kártyát
     */
    start(){
        this.#nextCardCallBack(this.#array[0].text) // 0 vagy currentNumber
    }
}