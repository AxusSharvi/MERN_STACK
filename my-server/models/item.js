const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String
});

// Mongoose will create a collection named 'items' (plural of 'Item')
module.exports = mongoose.model('Item', itemSchema);