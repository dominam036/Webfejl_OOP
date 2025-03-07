/**
 * lérehoz egy táblát és definiálja a managernek mi törénjen add esetén
 */
class Table{
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        this.#manager = manager
        const tbody = Gomszab.makeTableWithHeader(['kérdés', 'válasz1', 'válasz2', 'válasz3', 'válasz4', 'helyesválasz'])
        this.#manager.setAddCallback((question) => {
            const tableRow = document.createElement("tr");
            tbody.appendChild(tableRow);

            Gomszab.makeCellToRow(tableRow, question.questionText)
            for(const answer of question.answers){
                Gomszab.makeCellToRow(tableRow, answer);
            }
            Gomszab.makeCellToRow(tableRow, question.rightAnswer)
        })
    }
}