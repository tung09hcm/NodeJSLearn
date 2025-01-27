const express = require('express');
const Router = express.Router();
const Controller = require('../../controllers/client/product.controller')

Router.get("/", Controller.index);
Router.patch("/change-status/:status/:id", Controller.changeStatus);

module.exports = Router;