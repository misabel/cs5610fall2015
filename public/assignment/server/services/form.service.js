//var model = require("../models/form.model.js")();

module.exports = function(app, model){

    app.get("/api/assignment/user/:userId/form", getFormByUserId);
    app.get("/api/assignment/form/:formId", getFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", create);
    app.put("/api/assignment/form/:formId", update);

    function getFormByUserId(req, res){
        var userId = req.params.userId;

        model.findFormByUserId(userId).then(function(form){
            res.json(form);
        });
    }

    function getFormById(req, res){
        var id = req.params.formId;

        model.findById(id).then(function(form){
            res.json(form);
        });
    }

    function deleteForm(req, res){
        var id = req.params.formId;

        model.remove(id).then(function(response){
            res.json(response);
        });
    }

    function create(req, res){
        var userId = req.params.userId;
        var form = req.body;

        model.create(userId, form).then(function(response){
            res.json(response);
        });
    }

    function update(req, res){
        var id = req.params.formId;
        var form = req.body;

        model.update(id,form).then(function(response){
            res.json(response);
        });
    }

}