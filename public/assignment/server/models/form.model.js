//var forms = require("./form.mock.json");
var q = require("q");
//var uuid = require("node-uuid");

module.exports = function(mongoose, db){

    var FormSchema = require("./form.schema.js")(mongoose);
    var FormModel = mongoose.model("FormModel", FormSchema);

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
        var deferred = q.defer();

        FormModel.create(form, function(err, forms){
            FormModel.find({userId: userId}, function(err, found){
                deferred.resolve(found);
            });
        });

        return deferred.promise;

        //form.userId = userId;
        //form.id = uuid.v4();
        //form.fields = [];
        //forms.push(form);
        //return findFormByUserId(userId);
    }

    function findAll() {

        var deferred = q.defer();

        FormModel.find(function(err, forms){
            deferred.resolve(forms);
        })
        return deferred.promise;
        //return forms;
    }

    function findById(id) {

        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form);
        });
        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form.id == id){
        //        return form;
        //    }
        //}
        //
        //return null;
    }

    function findFormByUserId(userId){

        var deferred = q.defer();

        FormModel.find({userId: userId}, function(err, forms){
            deferred.resolve(forms);
        });
        return deferred.promise;
        //var found = [];
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form.userId == userId){
        //        found.push(form);
        //    }
        //}
        //
        //return found;
    }

    function update(id, form){

        var deferred = q.defer();

        FormModel.update({_id: id}, form, function(err, form){
            deferred.resolve(form);
        });
        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    if(forms[i].id == id) {
        //        forms[i] = form;
        //        return;
        //    }
        //}
    }

    function remove(id){

        var deferred = q.defer();

        FormModel.remove({_id: id}, function(err, users){
            deferred.resolve();
        });
        return deferred.promise;
        //for(var i = 0; i <  forms.length; i++){
        //    if(forms[i].id == id){
        //        forms.splice(i, 1);
        //        return;
        //    }
        //}
    }

    function findFormByTitle(title){

        var deferred = q.defer();

        FormModel.find({title: title}, function(err, form){
            deferred.resolve(form);
        });
        return deferred.promise;
        //for(var i = 0; i < forms.length; i++){
        //    var form = forms[i];
        //    if(form.title == title){
        //        return form;
        //    }
        //}
        //return null;
    }

    function findFieldsByFormId(id){

        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form.fields);
        });

        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form.id == id){
        //        return form.fields;
        //    }
        //}
        //
        //return null;
    }

    function findFieldById(formId, fieldId){

        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            var fields = form.fields;

            for(var i = 0; i < fields.length; i++){
                var field = fields[i];

                if(field._id==fieldId){
                    deferred.resolve(field);
                    return;
                }
            }
            deferred.resolve(null);
            return;
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j].id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            var field = forms[j].fields[i];
        //            if (field.id == fieldId) {
        //                return field;
        //            }
        //        }
        //    }
        //
        //}
        //return null;
    }

    function removeField(formId, fieldId){

        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){

            for(var i = 0; i < form.fields.length; i++){
                if(form.fields[i]._id==fieldId){
                    form.fields.splice(i, 1);
                    form.save(function(err, form){
                        deferred.resolve(form.fields);
                    });
                }
            }
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j].id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            if(forms[j].fields[i].id == fieldId){
        //                forms[j].fields.splice(i, 1);
        //                return forms[j].fields;
        //            }
        //        }
        //    }
        //
        //}
    }

    function createField(formId, field){

        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            form.fields.push(field);
            form.save(function(err, saved){
                deferred.resolve(saved.fields);
            });
        });
        return deferred.promise;
        //field.id = uuid.v4();
        //for(var i = 0; i < forms.length; i++){
        //    if(forms[i].id == formId){
        //        forms[i].fields.push(field);
        //        return forms[i].fields;
        //    }
        //}
    }

    function updateField(formId, fieldId, field){

        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            for(var i = 0; i < form.fields.length; i++){
                if(form.fields[i]._id==fieldId){
                    form.fields[i] = field;
                    form.save(function(err, form){
                        deferred.resolve(form.fields);
                    });
                }
            }
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j].id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            if(forms[j].fields[i].id == fieldId){
        //                forms[j].fields[i] = field;
        //                return forms[j].fields;
        //            }
        //        }
        //    }
        //
        //}
    }




}