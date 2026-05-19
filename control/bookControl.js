let book = require('../models/bookModel')


let createBook = async (req, res) => {
    console.log(req.body);

    try {
        let result = await book.create(req.body)

        console.log(result);
        

        res.status(201).json({
            success:  true,
            message: 'book created'
            
        })

    } catch(err){
        console.log(err);
        
        res.body(500).json({
            success: false,
            message: 'failed'
        })
    }

}
module.exports = {createBook}