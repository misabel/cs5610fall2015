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
            var newForm = angular.copy(form);
            newForm.id = guid();
            newForm.userid = userid;
            forms.push(newForm);
            // callback(form);
            
            return form;
        };
        
        function findAllFormsForUser(userid, callback){
            var found = [];
            
            for(var i = 0; i < forms.length; i++){
                if(forms[i].userid == userid){
                    found.push(forms[i]);
                }
            }
            
            // callback(found);
            
            return found;
        };
        
        function deleteFormById(id, callback) {
            for(var i = 0; i < forms.length; i++){
				if(forms[i].id == id){
					forms.splice(i, 1);
					break;
				}
			}
			// callback(forms);
            
            return forms;
        };
        
        function updateFormById(id, form, callback){
            for(var i = 0; forms.length; i++){
				if(forms[i].id == id){
					forms[i] = angular.copy(form);
					// callback(form);
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
        
        return service;
		
    };
})();