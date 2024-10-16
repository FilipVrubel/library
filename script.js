const myLibrary = [];

function Book(name) {
    this.name = name;
}

function addBookToLibrary() {
    let name = prompt("Enter book name:");
    const book = new Book(name);
    myLibrary.push(book);
}

/*
    1. remove any existent cards
    2. loop through book array, create card for each book and append it into container

*/

function displayBooks() {

    const container = document.querySelector(".card-container");

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.querySelector(".card");
        
        if (card != null) {
            container.removeChild(card)
        }
    }
    
    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card")
        card.textContent = book.name;
        container.appendChild(card);
    }
}

