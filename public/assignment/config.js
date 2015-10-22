(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "home/home.view.html"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();