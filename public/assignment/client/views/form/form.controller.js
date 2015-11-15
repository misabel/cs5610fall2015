(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
        function FormController($scope, $rootScope, FormService){
             FormService.findAllFormsForUser($rootScope.user.id).then(function(res){
                 $scope.forms = res;
             });
            
            $scope.addForm = function (){
                FormService.createFormForUser($rootScope.user.id, $scope.currentForm).then(function(res){
                    $scope.forms = res;
                });
                $scope.currentForm = {};
            }

            $scope.updateForm = function(){
                FormService.updateFormById($scope.currentForm.id, $scope.currentForm);
                $scope.currentForm = {};
                FormService.findAllFormsForUser($rootScope.user.id).then(function(res){
                    $scope.forms = res;
                });
            }
            
            $scope.selectForm = function(index){
                $scope.currentForm = angular.copy($scope.forms[index]);
            }
            
            $scope.deleteForm = function(index){
                var form = $scope.forms[index];
                FormService.deleteFormById(form.id);
                FormService.findAllFormsForUser($rootScope.user.id).then(function(res){
                    $scope.forms = res;
                });

            }
    
        }
})();