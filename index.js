const express = require("express");
const flash = require("express-flash");
const database = require("./config/database");
const system = require("./config/system");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require('dotenv').config();

const route = require("./routers/client/index.route")
const route_admin = require("./routers/admin/index.route")

const app = express();

app.use(cookieParser('dfhsjfhadjshfjahj'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // nhận body parser cho nhanh
database.connect();
const port = process.env.PORT;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/public`));

app.locals.prefixAdmin = system.prefixAdmin;


route(app);
route_admin(app);

app.listen((port), () => {
    console.log(`server is listening on ${port}`);
})