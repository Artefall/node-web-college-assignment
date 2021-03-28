const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title: String,
    price: String
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;