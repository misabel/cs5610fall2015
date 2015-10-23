(function(){
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "home/home.view.html"
                })
                .when("/login", {
                    templateUrl: "login/login.view.html",
                    conroller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "register/register.view.html",
                    conroller: "RegisterController"
                })
                .when("/profile", {
                    templateUrl: "profile/profile.view.html",
                    conroller: "ProfileController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();