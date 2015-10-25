(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope,$location, $rootScope, UserService) {
        $scope.login = function () {
            var user = UserService.findUserByUsernameAndPassword($scope.username, $scope.password);
            
            if(user) {
                $rootScope.user = user;
                $location.path('/profile');
            }
            //navigate to user page
        }
    }
})();