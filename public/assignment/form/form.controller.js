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
            }
            
            $scope.selectForm = function(index){
                
            }
    
        };
})();