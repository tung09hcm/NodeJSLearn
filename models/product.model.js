const mongoose = require('mongoose');
const Product = mongoose.model('Product', {
    name: String,
    desc: String
}, 'products');
module.exports = Product;