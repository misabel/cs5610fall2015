module.exports = function(app, mongoose, db) {
    require("./services/field.service.js")(app, mongoose, db);
    require("./services/form.service.js")(app, mongoose, db);
    require("./services/user.service.js")(app, mongoose, db);
};
