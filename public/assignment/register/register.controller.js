(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
       $scope.username = "thisworks!";
        
        $scope.register = function(){
            
            var user = {password: $scope.password,
                        username: $scope.username,
                        email:$scope.email
                        };
            $rootScope.user = UserService.createUser(user);
            
            console.log("went here");
            $location.path('/profile');
        }
    }
})();