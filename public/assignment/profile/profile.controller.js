(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope,$location, $rootScope, UserService) {
        
       
        
        $scope.update = function(){
            UserService.updateUser($rootScope.user.id, $rootScope.user);
        }
    }
})();