const Product = require('../../models/product.model')
module.exports.index = async (req,res) => {
    console.log(req.query.active);

    let find = {};
    if(req.query.active)
    {
        find.active = req.query.active;
    }

    const products = await Product.find(find);

    res.render("client/pages/products/index.pug", {
        pageTitle: "Danh sách sản phẩm",
        products: products
    });
}