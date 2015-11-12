var model = require("../models/user.model.js")();

module.exports = function(app, db) {

    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", get);
    app.get("/api/assignment/user/:id", getUserById);
    app.get("/api/assignment/user")
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function createUser(req, res){
        var user = req.body;
        res.json(model.create(user));
    }

    function get(req, res){
        var username = res.query.username;
        var password = res.query.password;
        if(!username && !password){
            res.json(model.findAll());
            return;
        }
        else if(username && !password){
            res.json(model.findUserByUsername(username));
        }

        else {
            res.json(model.findUserByCredentials(req.query));
        }
    }


    function getUserById(req, res){
        var id = req.params.id;

        res.json(model.findById(id));
    }

    function updateUser(req, res){
        var id = req.params.id;
        var user = req.body;

        res.json(model.update(id,user));
    }

    function deleteUser(req, res){
        var id = req.parmas.id;

        res.json(model.remove(id));
    }


}