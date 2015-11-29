//var model = require("../models/user.model.js")();

module.exports = function(app, model) {

    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", get);
    app.get("/api/assignment/user/:id", getUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function createUser(req, res){
        var user = req.body;

        model.create(user).then(function(user){
            res.json(user);
        });
    }

    function get(req, res){
        var username = req.query.username;
        var password = req.query.password;
        if(!username && !password){
            model.findAll().then(function(users){
                res.json(users);
            });
        }
        else if(username && !password){
            model.findUserByUsername(username).then(function(user){
                res.json(user);
            });
        }

        else {
            model.findUserByCredentials(req.query).then(function(user){
                res.json(user);
            });
        }
    }


    function getUserById(req, res){
        var id = req.params.id;

        model.findById(id).then(function(user){
            res.json(user);
        });
    }

    function updateUser(req, res){
        var id = req.params.id;
        var user = req.body;

        model.update(id,user).then(function(response){
            res.json(response);
        });
    }

    function deleteUser(req, res){
        var id = req.params.id;

        model.remove(id).then(function(response){
            res.json(response);
        });
    }


}
