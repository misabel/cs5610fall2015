(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope,$location, $rootScope, UserService) {
        $scope.login = function () {

                UserService.findUserByUsernameAndPassword($scope.username, $scope.password).then(function(res){
                    if(res) {
                        $rootScope.user = res;
                        $location.path('/profile');
                    }
                });
        }
    }
})();