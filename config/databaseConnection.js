let mongoose = require('mongoose')

function databaseConnection() {
    mongoose.connect('mongodb+srv://devaswin8546_db_user:RMGBj1Kem1OX9tsL@cluster0.xgzn75i.mongodb.net/library')
        .then(() => {
            console.log('database connected');
        }).catch((err) => {
            console.log(err);

        });

}
module.exports = databaseConnection