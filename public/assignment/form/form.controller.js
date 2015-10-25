(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
        
        function FormController($scope, $rootScope, FormService){
            $scope.forms = FormService.getForms();
            $scope.currentForm;
            
            $scope.addForm = function (){
                FormService.createFormForUser($rootScope.user.id, $scope.currentForm);
                $scope.forms = FormService.getForms();
            }
            
            $scope.updateForm = function(){
                FormService.updateFormById($scope.currentForm.id, $scope.currentForm);
            }
            
            $scope.selectForm = function(index){
                $scope.currentForm = $scope.forms[index];
            }
            
            $scope.deleteForm = function(index){
                var form = $scope.forms[i];
                FormService.deleteFormById(form.id);
            }
    
        };
})();