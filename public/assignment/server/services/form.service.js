var model = require("../models/form.model.js")();

module.exports = function(app, mongoose, db){

    app.get("/api/assignment/user/:userId/form", getFormByUserId);
    app.get("/api/assignment/form/:formId", getFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", create);
    app.put("/api/assignment/form/:formId", update);

    function getFormByUserId(req, res){
        var userId = req.params.userId;

        res.json(model.findFormByUserId(userId));
    }

    function getFormById(req, res){
        var id = req.params.formId;

        res.json(model.findById(id));
    }

    function deleteForm(req, res){
        var id = req.params.formId;

        res.json(model.remove(id));
    }

    function create(req, res){
        var userId = req.params.userId;
        var form = req.body;

        res.json(model.create(userId, form));
    }

    function update(req, res){
        var id = req.params.formId;
        var form = req.body;

        res.json(model.update(id, form));
    }





}