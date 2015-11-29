//var model = require("../models/form.model.js")();

module.exports = function(app, model){

    app.get("/api/assignment/form/:formId/field", getFields);
    app.get("/api/assignment/form/:formId/field/:fieldId", getField);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteField);
    app.post("/api/assignment/form/:formId/field", createField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);

    function getFields(req, res){
        var id = req.params.formId;

        model.findFieldsByFormId(id).then(function(form){
            res.json(form);
        });
    }

    function getField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        model.findFieldById(formId, fieldId).then(function(fields){
            res.json(fields);
        });
    }

    function deleteField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        model.removeField(formId, fieldId).then(function(fields){
            res.json(fields);
        });
    }

    function createField(req, res){
        var formId = req.params.formId;
        var field = req.body;

        model.createField(formId, field).then(function(fields){
            res.json(fields);
        });
    }

    function updateField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;

        model.updateField(formId, fieldId, field).then(function(fields){
            res.json(fields);
        });
    }


}