const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const stackSchema = new Schema({
    title: {
        type: String, 
        required: [true, 'Please add username'],
        unique: true
    },
    cards: {
        unique: true
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('Stack', stackSchema)