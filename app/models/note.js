const mongoose = require('mongoose')


//schema for our note - constructor function - helps us define the shape of a document inside a collection
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // //If the note belongs to one category
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

    // //If the note can belongs to multiple category: 
    //create categorySchema - with fields like name of type string and required is true.
})


//Note constructor functiom/ instantiating our schema. this model has many inbuilt functions. 
const Note = mongoose.model('Note', noteSchema)

module.exports = Note