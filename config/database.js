const mongoose = require('mongoose')


const configureDB = () => {
    //db configuration - establishing connection to db.
    //Telling mongoose, Prommise will be used to handle async operations.
    mongoose.Promise = global.Promise
    //Connecting the db.
    mongoose.connect('mongodb://localhost:27017/notesapp', { useNewUrlParser: true })
        .then(() => {
            console.log('successfully connected to db')
        })
        .catch((err) => {
            console.log('error connecting to db', err)
        })

}
module.exports = configureDB