/**
 * felel a form működéséért
 */
class FormController{

    /**
     * @type {FormField[]}
     */
    #formFieldArray;

    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     * @param {{id:String, label:String}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        const form = document.createElement("form");
        this.#formFieldArray = []
        document.body.appendChild(form);
        this.#manager = manager
        for(const config of fieldConfiguration){
            const formfield = new FormField(config.id, config.label);
            this.#formFieldArray.push(formfield);
            form.appendChild(formfield.getFormField());
        }
        const button = document.createElement("button");
        button.innerText = "Elküld"
        form.appendChild(button);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this.#validateAllFields()){
                const value = this.#getValueObject();
                const answers = [
                    value.answer1,
                    value.answer2,
                    value.answer3,
                    value.answer4,
                ]
                const question = new Question(value.questionText, answers, value.rightAnswer)
                this.#manager.add(question);
                e.target.reset();
            }
            //validaljuk a fieldeket, megjelenítjük a erroruzeneteket
            // fomrok alapján létrehozzuk a questiont, hozáadjuk a manaerhez
            // majd 
        })
    }
    
    /**
     * validálja a fieldeket
     * @returns {boolean} igaz ha minden elem helyes, egyébként hamis
     */
    #validateAllFields(){
        let valid = true;
        for(const field of this.#formFieldArray){
            field.error = '';
            if(field.value === ""){
                field.error = 'Mezo kitoltese kotelezo'
                valid = false;
            }
        }
        return valid;
    }

    /**
     * visszatér a fieldek értékeivel és id-jaival
     * @returns {{questionText:string, answer1:string, answer2:string, answer3:string, answer4:string, rightAnswer:string, }}
     */
    #getValueObject(){
        let type = "{"
        const result = {}
        for(const field of this.#formFieldArray){
            result[field.id] = field.value
            type += `${field.id}:${typeof field.value}, `
        }
        type += '}'
        console.log(type)
        return result;
    }
}

class FormField{
    /**
     * @type {String}
     */
    #id;

    /**
     * @type {HTMLLabelElement}
     */
    #label;

    /**
     * @type {HTMLInputElement}
     */
    #input;

    /**
     * @type {HTMLSpanElement}
     */
    #errorfield;

    get id(){
        return this.#id;
    }

    get value(){
        return this.#input.value;
    }

    /**
     * @param {String} value
     */
    set error(value){
        this.#errorfield.textContent = value;
    }

    /**
     * 
     * @param {String} id 
     * @param {String} labelContent 
     */
    constructor(id, labelContent){
        this.#id = id;
        this.#label = Gomszab.makeLabel(id, labelContent);
        this.#input = Gomszab.makeInput(id);
        this.#errorfield = Gomszab.makeErrorField();
    }

    /**
     * visszatér egy div-vel ami tartalmazza a formfieldben létrehozottt html elementeket
     * @return {HTMLDivElement}
     */
    getFormField(){
        const div = Gomszab.makeDiv([this.#label, this.#input, this.#errorfield])
        return div;
    }
}