(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);
        
        function SidebarController($location){
            var model = this;
            model.getActive = function (path){
                if($location.path().substr(0, path.length) === path){
                    return 'active';
                }
                return '';
            }
        };
        
        
})();