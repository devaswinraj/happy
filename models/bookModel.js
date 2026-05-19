let mongoose = require('mongoose')

let BookSchema = mongoose.Schema({
    book: String,
    author: String,
    discription: String
})

let book = mongoose.model('book',BookSchema)

module.exports = book