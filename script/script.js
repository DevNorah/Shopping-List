// Selectors
const shoppingInput = document.querySelector(".shopping-input");
const shoppingButton = document.querySelector(".shopping-button");
const clearButton = document.querySelector(".clear-button");
const shoppingList = document.querySelector(".shopping-list");

// Shopping list array
let shoppingArray = [];

// Event Listeners
shoppingButton.addEventListener('click', addShopping);
shoppingList.addEventListener('click', deleteCheck);
clearButton.addEventListener('click', clearShoppingList);

// Functions
function addShopping(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Check if the input is empty
    if (shoppingInput.value.trim() === "") {
        alert("Shopping input empty! Please add an item.");
        return; // Exit the function if the input is empty
    }

    // Add item to the shopping array
    shoppingArray.push(shoppingInput.value);

    const shoppingDiv = document.createElement("div");
    shoppingDiv.classList.add("shopping");

    const newShopping = document.createElement("li");
    newShopping.innerText = shoppingInput.value;
    newShopping.classList.add("shopping-item");
    shoppingDiv.appendChild(newShopping);

    // Check mark button
    const purchasedButton = document.createElement("button");
    purchasedButton.innerHTML = '<i class="fas fa-check"></i>';
    purchasedButton.classList.add("purchased-btn");
    shoppingDiv.appendChild(purchasedButton);

    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    shoppingDiv.appendChild(trashButton);

    // Append to list
    shoppingList.appendChild(shoppingDiv);

    // Clear shopping input value
    shoppingInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete shopping
    if (item.classList[0] === "trash-btn") {
        const shopping = item.parentElement;
        const shoppingText = shopping.querySelector(".shopping-item").innerText;
        
        // Remove item from the shopping array
        shoppingArray = shoppingArray.filter(shoppingItem => shoppingItem !== shoppingText);

        shopping.remove();
    }

    // Check shopping
    if (item.classList[0] === "purchased-btn") {
        const shopping = item.parentElement;
        const shoppingItem = shopping.querySelector(".shopping-item");
        shoppingItem.classList.toggle("purchased");
    }
}

function clearShoppingList() {
    shoppingList.innerHTML = "";
    shoppingArray = [];
}
