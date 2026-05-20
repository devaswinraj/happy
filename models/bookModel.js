let mongoose = require('mongoose')

let BookSchema = mongoose.Schema({
    book: String,
    author: String,
    discription: String
})

let Book = mongoose.model('Book',BookSchema)

module.exports = Book