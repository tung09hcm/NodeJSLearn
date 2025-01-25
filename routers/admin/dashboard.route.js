const express = require('express');
const Router = express.Router();

const Controller = require('../../controllers/admin/dashboard.controller')
Router.get("/", Controller.dashboard);

module.exports = Router;