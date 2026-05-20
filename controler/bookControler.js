let Book = require('../models/bookModel')


let createBook = async (req, res) => {
    let { book, author, discription } = req.body
    console.log(book, author, discription);

    try {
        let result = await Book.create({
            book,
            author,
            discription
        })

        console.log(result);


        res.status(201).json({
            success: true,
            message: 'book created'

        })

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: 'failed'
        })
    }

}
let getBook = async (req, res) => {
    try {
        let result = await Book.find()
        console.log(result);

        res.status(201).json({
            success: true,
            message: "find books",
            data: result

        })


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            messege: "failed",
            error
        })

    }


}
let getBookById = async (req, res) => {
    let { id } = req.params
    try {
        let result = await Book.findOne({ _id: id })
        console.log(result);
        res.status(201).json({
            success: true,
            message: "find book",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed"

        })

    }


}
let updateBook = async (req, res) => {
    let { discription } = req.body
    let { id } = req.params
    try {
        let result = await Book.updateOne({ _id: id }, { discription })
        console.log(result);
        res.status(201).json({
            success: true,
            message: "updated book",
            data: result
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            messege: "failed to update book"
        })

    }

}
let deleteBook = async (req, res) => {
    let { id } = req.params
    try {
        let result = await Book.deleteOne({ _id: id })
        res.status(201).json({
            success: true,
            message: "book deleted",
            data: result
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to delete"
        })

    }

}
module.exports = { createBook, getBook, getBookById, updateBook, deleteBook }