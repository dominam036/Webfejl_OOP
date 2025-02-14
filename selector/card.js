/**
 * entitás amit a manager osztályunk kezelni fog
 */
class Card{
    /**
     * @type {String} 
     */
    #text

    /**
     * @type {boolean}
     */
    #correct

    /**
     * @returns {String}
     */
    get text(){
        return this.#text
    }

    /**
     * @returns {boolean}
     */
    get correct(){
        return this.#correct
    }

    /**
     * 
     * @param {String} text a kártya szövege 
     * @param {boolean} correct a kártya igaz-e
     */
    constructor(text,correct){
        this.#correct = correct
        this.#text = text
    }
}