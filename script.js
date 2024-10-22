const myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages + " pages";
    this.read = read;
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
        const author = document.createElement("div");
        const title = document.createElement("div");
        const numPages = document.createElement("div");
        const read = document.createElement("div");
        
        const items = [author, title, numPages, read];

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
