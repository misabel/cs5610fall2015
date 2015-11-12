var model = require("../models/form.model.js")();

module.exports = function(app, db){

    app.get("/api/assignment/form/:formId/field", getFields);
    app.get("/api/assignment/form/:formId/field/:fieldId", getField);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteField);
    app.post("/api/assignment/form/:formId/field", createField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);

    function getFields(req, res){
        var id = req.params.formId;

        res.json(model.findFieldsByFormId(id));
    }

    function getField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        res.json(model.findFieldById(formId, fieldId));
    }

    function deleteField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        res.json(model.removeField(formId, fieldId));
    }

    function createField(req, res){
        var formId = req.params.formId;
        var field = req.body;

        res.json(model.createField(formId, field));
    }

    function updateField(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;

        res.json(model.updateField(formId, fieldId, field));
    }


}