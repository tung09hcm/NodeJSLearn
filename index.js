const express = require("express");
const database = require("./config/database");
const system = require("./config/system");
const methodOverride = require("method-override");
require('dotenv').config();

const route = require("./routers/client/index.route")
const route_admin = require("./routers/admin/index.route")

const app = express();
app.use(methodOverride("_method"));
database.connect();
const port = process.env.PORT;

app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static("public"));

app.locals.prefixAdmin = system.prefixAdmin;


route(app);
route_admin(app);

app.listen((port), () => {
    console.log(`server is listening on ${port}`);
})