(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope,$location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.user = $rootScope.user;
        
        $scope.update = function(){
            UserService.updateUser(id, $scope.user);
        }
    }
})();