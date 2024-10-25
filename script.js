const myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages + " pages";
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    switch(this.read) {
        case "Read":
            this.read = "Not read";
            break;
        case "Not read":
            this.read = "Read";
            break;
    }

    displayBooks()
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function displayBooks() {

    const container = document.querySelector(".card-container");

    container.replaceChildren();
    
    for (const [index, book] of myLibrary.entries()) {
        const author = document.createElement("div");
        const title = document.createElement("div");
        const numPages = document.createElement("div");
        const read = document.createElement("div");
        const toggleReadButton = document.createElement("button")
        const deleteButton = document.createElement("button");
    
        toggleReadButton.textContent = "Toggle read status";
        toggleReadButton.addEventListener("click", () => book.toggleReadStatus());

        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("index", index);
        
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(deleteButton.getAttribute("index"), 1);
            displayBooks();
        });

        const items = [author, title, numPages, read, toggleReadButton, deleteButton];

        author.textContent = book.author;
        title.textContent = book.title;
        numPages.textContent = book.numPages;
        read.textContent = book.read;

        const card = document.createElement("div");

        for (const item of items) {
            card.appendChild(item)
        }

        card.classList.add("card")
        container.appendChild(card);
    }
}

function checkDialog(isOpen) {
    isOpen ? console.log("Dialog open") : console.log("Dialog closed");
}

function setDialog() {
    const newBookButton = document.getElementById("new-book");
    const cancelButton = document.getElementById("cancel");
    const confirmButton = document.getElementById("confirm");
    const dialog = document.getElementById("add-book");

    newBookButton.addEventListener("click", () => {
        dialog.show();
        checkDialog(dialog.open);
    })

    cancelButton.addEventListener("click", () => {
        dialog.close();
        checkDialog(dialog.open);
    });

    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();

        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const numPages = document.getElementById('num-pages').value;
        const readYesButtonChecked = document.getElementById("read-yes").checked; 
        let read = "Read";
        if (!readYesButtonChecked) {
            read = "Not read";
        }

        const book = new Book(author, title, numPages, read);
        addBookToLibrary(book);
        document.getElementById('book-form').reset();
        dialog.close();
        displayBooks();
    })

}

setDialog()
