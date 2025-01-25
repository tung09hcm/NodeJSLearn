const dashboard  = require("./dashboard.route.js");
const system = require("../../config/system.js");
module.exports = (app) => {
    const PATH_ADMIN = system.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard",dashboard);
}
