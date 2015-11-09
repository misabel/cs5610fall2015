(function(){
    angular
        .module("AdminToolsApp")
        .controller("CourseController", CourseController);

    function CourseController($scope, ngDialog) {

        $scope.createModule = function(){
            ngDialog.open({
                template: "dialog/addModule.html"
            });
        }
    }
})();