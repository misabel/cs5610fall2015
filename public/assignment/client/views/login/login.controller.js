(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($location, $rootScope, UserService) {
        var model = this;
        model.login = function () {

                UserService.findUserByUsernameAndPassword(model.username, model.password).then(function(res){
                    if(res) {
                        $rootScope.user = res;
                        $location.path('/profile');
                    }
                });
        }
    }
})();