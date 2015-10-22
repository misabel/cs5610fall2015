(function(){
    angular
        .module("WhiteBoardApp")
        .factory("FormService", FormService);

    function FormService() {
		var forms = [];
        var Guid = require('guid');
        
        var createFormForUser = function(userid, form, callback){
            form.id = Guid.create();
            form.userid = userid;
            forms.push(form);
            callback(form);
        };
        
        var findAllFormsForUser = function (userid, callback){
            var found = [];
            
            for(var form in forms){
                if(form.userid == userid){
                    found.push(form);
                }
            }
            
            callback(found);
        };
        
        var deleteFormById = function(id, callback) {
            for(var i = 0; i < forms.length; i++){
				if(forms[i].id == id){
					forms.splice(i, 1);
					break;
				}
			}
			callback(forms);
        };
        
        var updateFormById = function (id, form, callback){
            for(var i = 0; forms.length; i++){
				if(forms[i].id == id){
					forms[i] = form;
					callback(form);
					break;
				}
			}
        };
		
    };
})();