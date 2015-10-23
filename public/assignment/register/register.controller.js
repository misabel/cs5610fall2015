(function(){
    angular
        .module("FormBuilderApp", ['UserService'])
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
       
        
        $scope.register = function(){
            
            var user = {password: $scope.password,
                        username: $scope.username,
                        email:$scope.email
                        };
            $rootScope.user = UserService.createUser(user);
            
            $location.path('/profile');
        }
    }
})();