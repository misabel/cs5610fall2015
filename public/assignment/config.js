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
                    controller: 'LoginController',
                    templateUrl: "login/login.view.html"
                    
                })
                .when("/register", {
                    controller: 'RegisterController',
                    templateUrl: "register/register.view.html"
                })
                .when("/profile", {
                    controller: "ProfileController",
                    templateUrl: "profile/profile.view.html"
                })
                .when("/form", {
                    controller: "FormController",
                    templateUrl: "form/form.view.html"
                })
                .otherwise({
                    redirectTo: "home"
                });
        };
})();