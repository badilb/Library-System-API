const bookValidate = require("../validate/bookValidate");
let books = [];
let ID = 0;


exports.getBook = (name_param, limit_param) => {
    let filtered_books = books;

    if (typeof name_param !== 'undefined') {
        filtered_books = filtered_books.filter(book => book.name === name_param);
    }

    filtered_books = filtered_books.slice(0, limit_param);

    return filtered_books;
}


exports.addBook = (book_body) => {
    const {valid, message} = bookValidate.validate(book_body);

    if (!valid) {
        return message;
    }

    book_body.id = ID++;
    books.push(book_body);
    return message;
}

exports.updateBook = (bookId, updatedBook) => {
    let bookIndex = books.findIndex(book => book.id === parseInt(bookId));
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...updatedBook };
        return "The book is updated";
    }
    return "The book does not exist";
}

exports.deleteBook = (bookId) => {
    const index = books.findIndex(book => book.id === parseInt(bookId));
    if (index !== -1) {
        books.splice(index, 1);
        return "Book deleted";
    }
    return "Book not found";
}