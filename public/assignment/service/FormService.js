(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
		var forms = [];
        
        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };
        
        function createFormForUser(userid, form, callback){
            form.id = guid();
            form.userid = userid;
            forms.push(form);
            callback(form);
            
            return form;
        };
        
        function findAllFormsForUser(userid, callback){
            var found = [];
            
            for(var form in forms){
                if(form.userid == userid){
                    found.push(form);
                }
            }
            
            callback(found);
            
            return found;
        };
        
        function deleteFormById(id, callback) {
            for(var i = 0; i < forms.length; i++){
				if(forms[i].id == id){
					forms.splice(i, 1);
					break;
				}
			}
			callback(forms);
            
            return forms;
        };
        
        function updateFormById(id, form, callback){
            for(var i = 0; forms.length; i++){
				if(forms[i].id == id){
					forms[i] = form;
					callback(form);
					break;
				}
			}
            
            return form;
        };
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
        
        function getForms() {
            return forms;
        }
        
        return service;
		
    };
})();