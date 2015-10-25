(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(Configure);
        
        
        function Configure($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "home/home.view.html"
                })
                .when("/login", {
                    conroller: "LoginController",
                    templateUrl: "login/login.view.html"
                    
                })
                .when("/register", {
                    conroller: "RegisterController",
                    templateUrl: "register/register.view.html"
                })
                .when("/profile", {
                    conroller: "ProfileController",
                    templateUrl: "profile/profile.view.html"
                })
                .when("/form", {
                    conroller: "FormController",
                    templateUrl: "form/form.view.html"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        };
})();