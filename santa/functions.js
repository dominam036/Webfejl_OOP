/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);

    tableRow.id = companion.id
    const manoNev = document.createElement('td');
    tableRow.appendChild(manoNev);
    const manoReszleg = document.createElement('td');
    tableRow.appendChild(manoReszleg);
   // TODO 7

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(companion){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    option.innerText = companion.id;
    // TODO 11.

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO
    const companionName = document.getElementById('companion_name');
    companionName.textContent = companion.getName();
    // TODO 10
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');

    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    // TODO 10
    for(const prod of companion.productlist){
        const prodRow = document.createElement('tr');
        const prodCell = document.createElement('td');
        prodCell.textContent = prod; 
        prodRow.appendChild(prodCell);
        productTableBody.appendChild(prodRow);
    }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    // TODO 6
    const mano1 = new Companion(factory.manolista.length + 1, firstNameValue, lastNameValue, areaValue);
    factory.addMano(mano1);
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
}