module.exports = function(app, mongoose, db) {

    var userModel = require("./models/user.model.js")(mongoose, db);
    var formModel = require("./models/form.model.js")(mongoose, db);
    require("./services/field.service.js")(app, mongoose, db);
    require("./services/form.service.js")(app, formModel);
    require("./services/user.service.js")(app, userModel);
};
