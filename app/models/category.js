const mongoose = require('mongoose')

//Create a new schema - with fields like name of type string and required is true
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

//Create a model as Category
const Category = mongoose.model('Category', categorySchema)

module.exports = Category
