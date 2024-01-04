const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

const authorController = require('./API controllers/author')
const bookController = require('./API controllers/book')
const genreController = require('./API controllers/genres')
const fileReaderController=require('./API controllers/fileReader')


app.get('/author', authorController.getAll);
app.post('/author/add', authorController.addUser)
app.put('/author/:id/update', authorController.putUser)
app.delete('/author/:id/delete', authorController.deleteUser)


app.get('/book', bookController.getBook);
app.post('/book/add', bookController.addBook)
app.put('/book/:id/update', bookController.putBook)
app.delete('/book/:id/delete', bookController.deleteBook)


app.get('/genre', genreController.getGenre);
app.post('/genre/add', genreController.addGenre)
app.put('/genre/:id/update', genreController.putGenre)
app.delete('/genre/:id/delete', genreController.deleteGenre)


app.get('/file', fileReaderController.getFile)

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})