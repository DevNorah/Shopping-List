# SHOPPING LIST

This shopping list application allows users to add items to a shopping list, mark items as purchased, and delete items from the list. 
Users can also clear the entire list with a single click.

## INSTALLATION

1. Clone the repository from git@github.com:DevNorah/

2. Open the cloned repository in your code editor.

## RUNNING THE CODE

1. To run the code you need to open the index.html file on the code editor then view it using a live server.

3. You can also run the code using this live link 


## HOW IT WORKS

1. Run the code using the code editor or the live link provided above.

2. Input any item(s) of your choice in the text box.

3. Click the Add (+) button to add it to the shopping list. 

4. Click the green checked button to mark an item as purchased. You will notice a strike-through the item after this.

5. Click the trash button (Trash can icon) to remove an item from the list.

6. Click the clear list button to clear the entire shopping list.


# TECHNOLOGY USED
* Visual Studio 
* JavaScript 
* HTML 
* CSS 

# FRAMEWORK USED
    GIT

### * AUTHOR *
Norah Kinyamasyo.


improved styels for better responsiveness            * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: url(https://plus.unsplash.com/premium_photo-1693266285251-f7c0e3683db9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    color: #333;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
}

form {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

form input {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    outline: none;
}

form button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    background: #d88771;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
}

form button:hover {
    background: #b86a5c;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.shopping-list {
    width: 80%;
    max-width: 500px;
    list-style: none;
    padding: 0;
    margin: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.shopping {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    background: #ffffff;
    color: #333;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.shopping li {
    flex: 1;
    padding-right: 1rem;
}

.trash-btn,
.purchased-btn {
    background: #ff6f47;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    margin-left: 0.5rem;
    transition: background 0.3s ease;
}

.purchased-btn {
    background: rgb(71, 211, 71);
}

.trash-btn:hover {
    background: #e65a3b;
}

.purchased-btn:hover {
    background: #59c359;
}

.shopping-item {
    padding: 0.5em;
}

.fa-trash,
.fa-check {
    pointer-events: none;
}

.purchased {
    text-decoration: line-through;
    color: #888;
}

.clear-button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.3s ease;
}

.clear-button:hover {
    background-color: #c82333;
}
