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
    }

    function findAll() {

        var deferred = q.defer();

        FormModel.find(function(err, forms){
            deferred.resolve(forms);
        })
        return deferred.promise;
    }

    function findById(id) {

        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form);
        });
        return deferred.promise;
    }

    function findFormByUserId(userId){

        var deferred = q.defer();

        FormModel.find({userId: userId}, function(err, forms){
            deferred.resolve(forms);
        });
        return deferred.promise;
    }

    function update(id, form){

        var deferred = q.defer();
        delete form._id;
        FormModel.update({_id: id}, form, function(err, found){
            deferred.resolve(found);
        });
        return deferred.promise;
    }

    function remove(id){

        var deferred = q.defer();

        FormModel.remove({_id: id}, function(err, users){
            deferred.resolve();
        });
        return deferred.promise;
    }

    function findFormByTitle(title){

        var deferred = q.defer();

        FormModel.find({title: title}, function(err, form){
            deferred.resolve(form);
        });
        return deferred.promise;
    }

    function findFieldsByFormId(id){

        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form.fields);
        });

        return deferred.promise;
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
    }

    function updateField(formId, fieldId, field){

        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            for(var i = 0; i < form.fields.length; i++){
                if(form.fields[i]._id==fieldId){
                    delete field._id;
                    form.fields[i] = field;
                    form.save(function(err, form){
                        deferred.resolve(form.fields);
                    });
                }
            }
        });
        return deferred.promise;
    }




}