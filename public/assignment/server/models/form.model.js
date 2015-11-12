var forms = require("./form.mock.json");

module.exports = function(app, db){

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findFormByTitle: findFormByTitle

    }

    return api;

    function create(form) {
        forms.push(form);
        return forms;
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

    function update(id, form){
        for(var i = 0; i < forms.length; i++) {
            if(forms[i].id == id) {
                forms[i] = form;
                return forms;
            }
        }
    }

    function remove(id){
        for(var i = 0; i <  forms.length; i++){
            if(forms[i].id == id){
                forms.splice(i, 1);
                return forms;
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

}