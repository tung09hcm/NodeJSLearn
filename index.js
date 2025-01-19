const express = require("express");
const database = require("./config/database");
require('dotenv').config();
const route = require("./routers/client/index.route")

const app = express();
database.connect();
const port = process.env.PORT;

app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static("public"));

route(app);

app.listen((port), () => {
    console.log(`server is listening on ${port}`);
})