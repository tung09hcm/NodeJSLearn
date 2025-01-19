const mongoose = require('mongoose');
const Product = require('../../models/product.model')
module.exports.index = async (req,res) => {
    const products = await Product.find({});
    res.render("client/pages/products/index.pug", {
        pageTitle: "Danh sách sản phẩm",
        products: products
    });
}