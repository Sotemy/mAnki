
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    ip: {
        type: String,
        required: [true, 'Please add ip'],
        unique: true
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('UserData', dataSchema)