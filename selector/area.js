class Area{
    /**
     * @type {HTMLDivElement} az adott area példány teruletének az eleme
     */
    #div

    get div(){
        return this.#div
    }

    /**
     * 
     * @param {String} cssClass beállítja az adott terulet css-ét
     * @param {Manager} manager
     */
    constructor(cssClass,manager){
        const container = this.#getContainer();
        this.#div = document.createElement("div")
        this.#div.className = cssClass
        container.appendChild(this.#div)
        manager.setFinishCallback((eredmeny)=>{
            container.innerHTML = ""
            const div = document.createElement("div")
            div.className = 'result'
            div.textContent = eredmeny
            container.appendChild(div)
        })
    }

    /**
     * 
     * @return {HTMLDivElement} 
     */
    #getContainer(){
        let container = document.querySelector(".container")
        if(!container){
            container = document.createElement("div")
            container.className = "container"
            document.body.appendChild(container)
        }
        return container
    }
}

/**
 * ez fogja tartalmazni a paklinkat mindig 1db kártyát jelenít meg
 */
class DeckArea extends Area{
    /**
     * 
     * @param {String*} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass,manager){
        super(cssClass,manager);
        manager.setNextCardCallback((kartyaszoveg) => {
            this.div.innerHTML = ""
            const skipButton = document.createElement("button")
            skipButton.textContent = "SKIP"
            skipButton.addEventListener("click",()=>{
                manager.nextCard()
            })
            this.div.appendChild(skipButton)
            const cardElement = document.createElement("div")
            cardElement.textContent = kartyaszoveg
            cardElement.className = 'largecard'
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg)
            })
            this.div.appendChild(cardElement)
        })
    }
}

/**
 * ez fogja tartalmazni az igaznak vélt kártyákat
 */
class SolutionArea extends Area{
    /**
     * 
     * @param {String} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass,manager){
        super(cssClass,manager);
        manager.setAppendCardToSolutionCallback((kartyaszoveg) => {
            const card = document.createElement("div")
            card.className = 'card'
            card.textContent = kartyaszoveg
            this.div.appendChild(card)
        })
    }
}