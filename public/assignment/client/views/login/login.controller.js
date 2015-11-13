(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope,$location, $rootScope, UserService) {
        $scope.login = function () {
            var user;

                UserService.findUserByUsernameAndPassword($scope.username, $scope.password).then(function(res){
                    user = res;
                    if(user) {
                        $rootScope.user = user;
                        $location.path('/profile');
                    }
                });
        }
    }
})();