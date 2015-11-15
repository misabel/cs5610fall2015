(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(Configure);
        
        function Configure($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/login", {
                    controller: 'LoginController',
                    controllerAs: "model",
                    templateUrl: "views/login/login.view.html"
                    
                })
                .when("/register", {
                    controller: 'RegisterController',
                    controllerAs: "model",
                    templateUrl: "views/register/register.view.html"
                })
                .when("/profile", {
                    controller: "ProfileController",
                    controllerAs: "model",
                    templateUrl: "views/profile/profile.view.html"
                })
                .when("/form", {
                    controller: "FormController",
                    controllerAs: "model",
                    templateUrl: "views/form/form.view.html"
                })
                .when("/user/:userId/form/:formId/fields", {
                    controller: "FieldController",
                    controllerAs: "model",
                    templateUrl: "views/field/field.view.html"
                })
                .otherwise({
                    redirectTo: "home"
                });
        };
})();