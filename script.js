// Book array to store objects.
let myLibrary = [];

// Book Objects.
function Book(title, author, pages, state) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.state = state
};
Book.prototype.infoDispalay = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages}, pages, ${this.state}`)
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
theHobbit.infoDispalay()

function addBookTOLibray() {
    //  do stuff here.
};
