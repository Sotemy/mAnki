const mongoose = require('mongoose')

const cardsSchema = mongoose.Schema({

    stack_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Stack'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    frontText:{
        type: String,
        required: [true, 'Please add front text']
    },
    backText:{
        type: String,
        required: [true, 'Please add back text']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cards', cardsSchema)