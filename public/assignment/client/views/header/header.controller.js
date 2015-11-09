(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
        
        function HeaderController($scope, $rootScope, $location){
            
            $scope.getActive = function (path){
                if($location.path().substr(0, path.length) === path){
                    return 'active';
                }
                return '';
            }
            $scope.logout = function(){
                $rootScope.user = null;
                $location.path('home');
            }
            $scope.loggedIn = function(){
                return $rootScope.user;
            }
        };
})();