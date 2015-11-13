(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        
        $scope.register = function(){
            
            var user = {
                password: $scope.password,
                username: $scope.username,
                email:$scope.email
            };

            UserService.createUser(user).then(function(res){
                $rootScope.user = res;
                $location.path('profile');
            });

        }
    }
})();