let express = require('express')
let app = express()
app.use(express.json())

let databaseConnection = require('./config/databaseConnection')

databaseConnection()

let bookRouter = require('./routes/bookRoutes')

app.use('/books',bookRouter)

app.listen(4000, (err) => {
    if (err) console.log(err);
    else
        console.log("server connected");



})