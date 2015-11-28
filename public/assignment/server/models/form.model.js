var forms = require("./form.mock.json");
var uuid = require("node-uuid");

module.exports = function(mongoose, db){

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findFormByTitle: findFormByTitle,
        findFormByUserId: findFormByUserId,
        findFieldsByFormId: findFieldsByFormId,
        findFieldById: findFieldById,
        removeField: removeField,
        createField: createField,
        updateField: updateField

    }

    return api;

    function create(userId, form) {

        form.userId = userId;
        form.id = uuid.v4();
        form.fields = [];
        forms.push(form);
        return findFormByUserId(userId);
    }

    function findAll() {
        return forms;
    }

    function findById(id) {
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form.id == id){
                return form;
            }
        }

        return null;
    }

    function findFormByUserId(userId){
        var found = [];
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form.userId == userId){
                found.push(form);
            }
        }

        return found;
    }

    function update(id, form){
        for(var i = 0; i < forms.length; i++) {
            if(forms[i].id == id) {
                forms[i] = form;
                return;
            }v
        }
    }

    function remove(id){
        for(var i = 0; i <  forms.length; i++){
            if(forms[i].id == id){
                forms.splice(i, 1);
                return;
            }
        }
    }

    function findFormByTitle(title){
        for(var i = 0; i < forms.length; i++){
            var form = forms[i];
            if(form.title == title){
                return form;
            }
        }
        return null;
    }

    function findFieldsByFormId(id){
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form.id == id){
                return form.fields;
            }
        }

        return null;
    }

    function findFieldById(formId, fieldId){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j].id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    var field = forms[j].fields[i];
                    if (field.id == fieldId) {
                        return field;
                    }
                }
            }

        }
        return null;
    }

    function removeField(formId, fieldId){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j].id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    if(forms[j].fields[i].id == fieldId){
                        forms[j].fields.splice(i, 1);
                        return forms[j].fields;
                    }
                }
            }

        }
    }

    function createField(formId, field){

        field.id = uuid.v4();
        for(var i = 0; i < forms.length; i++){
            if(forms[i].id == formId){
                forms[i].fields.push(field);
                return forms[i].fields;
            }
        }
    }

    function updateField(formId, fieldId, field){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j].id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    if(forms[j].fields[i].id == fieldId){
                        forms[j].fields[i] = field;
                        return forms[j].fields;
                    }
                }
            }

        }
    }




}