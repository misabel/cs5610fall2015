(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
        function FormController($scope, $rootScope, FormService){
             $scope.forms = FormService.findAllFormsForUser($rootScope.user.id);
             $scope.currentForm;
            
            $scope.addForm = function (){
                FormService.createFormForUser($rootScope.user.id, $scope.currentForm);
                console.log($scope.currentForm);
                $scope.forms = FormService.findAllFormsForUser($rootScope.user.id);
                $scope.currentForm = {};
            }
            
            $scope.updateForm = function(){
                FormService.updateFormById($scope.currentForm.id, $scope.currentForm);
                $scope.currentForm = {};
                $scope.forms = FormService.findAllFormsForUser($rootScope.user.id);
            }
            
            $scope.selectForm = function(index){
                $scope.currentForm = angular.copy($scope.forms[index]);
            }
            
            $scope.deleteForm = function(index){
                var form = $scope.forms[index];
                $scope.forms = FormService.deleteFormById(form.id);
            }
    
        }
})();