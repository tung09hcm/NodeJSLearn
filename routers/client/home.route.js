const express = require('express');
const Router = express.Router();
const Controller = require('../../controllers/client/home.controller')
Router.get("/", Controller.index);

module.exports = Router;