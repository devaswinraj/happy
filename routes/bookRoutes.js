let express = require('express')
let bookRouter = express.Router()

const { createBook,getBook, getBookById ,updateBook,deleteBook} = require('../controler/bookControler')

bookRouter.post('/',createBook)

bookRouter.get('/:id',getBookById)

bookRouter.get('/',getBook)

bookRouter.put('/:id',updateBook)

bookRouter.delete('/:id',deleteBook)


module.exports = bookRouter