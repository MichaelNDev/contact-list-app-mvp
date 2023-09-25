const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    nameinput: {
        type: String,
        required: true
    },
    phoneinput: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    emailinput: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ContactList', contactSchema, 'contacts')