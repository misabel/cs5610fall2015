(function(){
    angular
        .module("AdminToolsApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "home.html"
            })
            .when("/courses", {
                templateUrl: "course/list.html",
                controller: "CourseController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();