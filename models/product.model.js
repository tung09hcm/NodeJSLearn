const mongoose = require('mongoose');
const Product = mongoose.model('Product', {
    name: String,
    desc: String,
    active: Boolean
}, 'products');
module.exports = Product;