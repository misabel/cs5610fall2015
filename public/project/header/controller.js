(function(){
    "use strict";
    angular
        .module("AdminToolsApp")
        .controller("HeaderController", HeaderController);
        
        function HeaderController($scope, $location){
            
            $scope.getActive = function (path){
                if($location.path().substr(0, path.length) === path){
                    return 'active';
                }
                return '';
            }
        };
        
        
})();