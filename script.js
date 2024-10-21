const myLibrary = [];

function Book(author, title, numPages, wasRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.wasRead = wasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

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
        card.textContent = book.title;
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
        const wasRead = document.querySelector('input[name="was-read"]:checked').value;

        const book = new Book(author, title, numPages, wasRead);
        addBookToLibrary(book);
        document.getElementById('book-form').reset();
        dialog.close();
        displayBooks();
    })

}

setDialog()
