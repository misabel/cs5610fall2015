(function(){
    angular
        .module("FormBuilderApp", ['UserService'])
        .controller("LoginController", LoginController);

    function LoginController($scope,$location, $rootScope, UserService) {
        $scope.$location = $location;
        
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