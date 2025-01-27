const Product = require('../../models/product.model');
const filterStatusHelper = require('../../helpers/filterStatus');
module.exports.index = async (req,res) => {
    const pagination = {
        limit:2,
        currentPage: 1
    }
    console.log(req.query.active);
    const filterStatus = filterStatusHelper(req.query);
    let find = {};
    if(req.query.active)
    {
        find.active = req.query.active;
    }
    let keyword = "";
    if(req.query.keyword)
    {
        keyword = req.query.keyword;
        find.name = { $regex: req.query.keyword, $options: 'i' };
    }
    let pageIndex = 1;
    if(req.query.page)
    {
        pagination.currentPage = parseInt(req.query.page) ;
    }

    const products = await Product.find(find).limit(pagination.limit).skip((pagination.currentPage - 1 )* pagination.limit);
    const count = await Product.countDocuments();

    res.render("client/pages/products/index.pug", {
        pageTitle: "Danh sách sản phẩm",
        filterStatus: filterStatus,
        products: products,
        keyword: keyword,
        count: count,
        limit: pagination.limit
    });
}

