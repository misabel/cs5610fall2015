(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();