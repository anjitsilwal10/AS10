const mongoose = require('mongoose')

var personSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    nationality: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Person",personSchema)