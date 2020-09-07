// *****Get the button with id=add-button and added click event***** //
let addItemButton = document.querySelector("#add-button");
addItemButton.addEventListener("click", addNewItem);

// *****Function to hide first row's delete button***** //
function hideDeleteBtn() {
  let trLength = document.querySelectorAll("tr.Item");
  // console.log(trLength.length);

  // *****Hide delete button if table row is greater than one***** //
  if(trLength.length > 1) {
    let hideButton = document.getElementById("hide-btn");
    hideButton.removeAttribute("hidden");
    hideButton.style.visibility = "visible";
  }else {
    let hideButton = document.getElementById("hide-btn");
    hideButton.style.visibility = "hidden";
  }
}

// *****Function to add new Item row***** //
var rowNo = 5;

function addNewItem() {
  // *****Get Outer table and insert new row and cell's***** //
  let mainTable = document.getElementById("main-table");

  // *****Added new row in outer table***** //
  let addNewRow = mainTable.insertRow(++rowNo);
  addNewRow.setAttribute("class", "Item");

  // *****Added new 1st cell to outer table***** //
  let addNewCell1 = addNewRow.insertCell(0);
  addNewCell1.setAttribute("colspan", "3");
  addNewCell1.setAttribute("style", "border-bottom:2px solid #eee")

  // *****Addend new inner table to show Item,quantity and it's price***** //
  let table = document.createElement("table");
  let row = table.insertRow(0);

  // *****Inner table 1st row for item name***** //
  let cell1 = row.insertCell(0);
  let itemInput = document.createElement("input");
  itemInput.setAttribute("name", "product");
  cell1.appendChild(itemInput);

  // *****Inner table 2nd row for item quantity***** //
  let cell2 = row.insertCell(1);
  let quantityInput = document.createElement("input");
  quantityInput.setAttribute("name", "quantity");
  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("min", "1");
  cell2.appendChild(quantityInput);

  // *****Inner table 3rd row for item amount***** //
  let cell3 = row.insertCell(2);
  let priceInput = document.createElement("input");
  priceInput.value = "$"; 
  priceInput.setAttribute("name", "amount");
  priceInput.setAttribute("placeholder", "0.00");
  cell3.appendChild(priceInput);
  addNewCell1.appendChild(table);

  // *****Added new 2nd cell to outer table for delete button***** //
  let addNewCell2 = addNewRow.insertCell(1);
  let button = document.createElement("span");
  button.setAttribute("onclick", "deleteRow(this)");
  button.setAttribute("id", "hide-btn");
  button.innerHTML = "x";
  addNewCell2.appendChild(button);

  // *****Call for hideDeleteBtn function ***** //
  hideDeleteBtn();

}

// *****Function to delete unwanted row after clicking delete btn***** //
function deleteRow(btnNo) {
  // console.log(btnNo);
  deleteTd = btnNo.parentNode;
  deleteTd.parentElement.remove();
  hideDeleteBtn();
  rowNo--
}