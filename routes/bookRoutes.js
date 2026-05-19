let express = require('express')
let bookRouter = express.Router()

const { createBook} = require('../control/bookControl')

bookRouter.post('/',createBook)

// bookRouter.get('/books/id',getBookById)

// bookRouter.get('/books',getBook)

// bookRouter.put('/books/id',updateBook)

// bookRouter.delete('/books/id',deleteBook)

module.exports = bookRouter