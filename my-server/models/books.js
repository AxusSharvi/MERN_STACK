const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        reyquired: true
    }
});

module.exports = mongoose.model('Book', bookSchema)