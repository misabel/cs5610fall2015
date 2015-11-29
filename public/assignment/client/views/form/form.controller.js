(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
        function FormController($rootScope, FormService){
            var model = this;
             FormService.findAllFormsForUser($rootScope.user._id).then(function(res){
                 model.forms = res;
             });
            
            model.addForm = function (){
                FormService.createFormForUser($rootScope.user._id, model.currentForm).then(function(res){
                    model.forms = res;
                });
                model.currentForm = {};
            }

            model.updateForm = function(){
                FormService.updateFormById(model.currentForm._id, model.currentForm);
                model.currentForm = {};
                FormService.findAllFormsForUser($rootScope.user._id).then(function(res){
                    model.forms = res;
                });
            }
            
            model.selectForm = function(index){
                model.currentForm = angular.copy(model.forms[index]);
            }
            
            model.deleteForm = function(index){
                var form = model.forms[index];
                FormService.deleteFormById(form._id);
                FormService.findAllFormsForUser($rootScope.user._id).then(function(res){
                    model.forms = res;
                });

            }
    
        }
})();