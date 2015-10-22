(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
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