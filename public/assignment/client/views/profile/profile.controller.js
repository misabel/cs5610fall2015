(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, UserService) {
        var model = this;
        model.update = function(){
            UserService.updateUser($rootScope.user.id, $rootScope.user);
        }
    }
})();