const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const stackSchema = new Schema({
    title: {
        type: String, 
        required: [true, 'Please add title'],
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('Stack', stackSchema)