let mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    username: String,
    password: String,
    emailid: String
})

let User = mongoose.model('user',userSchema)

module.exports = User