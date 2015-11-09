(function(){
    "use strict";
    angular
        .module("AdminToolsApp")
        .controller("SidebarController", SidebarController);
        
        function SidebarController($scope, $location){
            
            $scope.getActive = function (path){
                if($location.path().substr(0, path.length) === path){
                    return 'active';
                }
                return '';
            }
        };
        
        
})();