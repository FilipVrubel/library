const myLibrary = [];

function Book(name) {
    this.name = name;
}

function addBookToLibrary() {
    let name = prompt("Enter book name:");
    const book = new Book(name);
    myLibrary.push(book);
}