const express = require('express');
const Router = express.Router();
const Controller = require('../../controllers/client/product.controller')
Router.get("/products", Controller.index);

module.exports = Router;