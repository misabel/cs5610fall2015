(function(){
    angular
        .module("FormBuilderApp", ['UserService'])
        .controller("ProfileController", ProfileController);

    function ProfileController($scope,$location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.user = $rootScope.user;
        
        $scope.register = function(){
            UserService.updateUser($scope.user.id, $scope.user)
        }
    }
})();