let Books = JSON.parse(localStorage.getItem('books') || '[]');

function getBooks() {
    // Always fetch latest from localStorage
    Books = JSON.parse(localStorage.getItem('books') || '[]');
    return Books;
}

function addBook(book) {
    Books.push(book);
    saveBooks();
}       
function removeBook(book) {
    const index = Books.findIndex(b => b.name === book.name);
    if (index > -1) {
        Books.splice(index, 1);
        saveBooks();
    }
}
function clearBooks() {
    Books = [];
    saveBooks();
}
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(Books));
}

export { getBooks, addBook, removeBook, clearBooks, saveBooks };

export default {
    getBooks,
    addBook,
}
