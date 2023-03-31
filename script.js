// Book array to store objects.
let myLibrary = [];

// Book Object.
function Book(title, author, pages, state) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.state = state
};

// Display info about book.
Book.prototype.infoDisplay = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages}, pages, ${this.state}`)
}

// Creating some books to test.
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
const theHobbitOne = new Book('Python Crash Course', 'Eric Mahthes', 600, 'already read')
const theHobbitTwo = new Book('Rich Dad Poor Dad', 'Robert Kiyosaki', 1000, 'already read')

// Add some books to the Library.
function addBookTOLibray() {
    myLibrary.push(theHobbit, theHobbitOne, theHobbitTwo);
};
addBookTOLibray();

// Display all the books in the Library.
function displayLibraryBooks() {
    for(const book of myLibrary) {
        book.infoDisplay();
    };
};
displayLibraryBooks();

// DOM Objects.
$newButton = document.querySelector('.new');
$table = document.querySelector('.table');
$tbody = $table.querySelector('tbody');

$form = document.querySelector('.form');
$titleInput = $form.querySelector('#title');
$authorInput = $form.querySelector('#author');
$pagesInput = $form.querySelector('#pages');
$submitButton = $form.querySelector('#submit');
$returnButon = $form.querySelector('#home');