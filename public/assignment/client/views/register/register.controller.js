(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, UserService) {
        var model = this;
        model.register = function(){
            
            var user = {
                password: model.password,
                username: model.username,
                email: model.email
            };

            UserService.createUser(user).then(function(res){
                $rootScope.user = res;
                $location.path('profile');
            });

        }
    }
})();