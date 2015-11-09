(function(){
    angular
        .module("AdminToolsApp")
        .controller("CourseController", CourseController);

    function CourseController($scope, ngDialog) {

        $scope.addModule = function(){
            ngDialog.open({
                template: "dialog/addModule.html"
            });
        }
        $scope.addSection = function(){
            ngDialog.open({
                template:"dialog/addSection.html"
            });
        }
    }
})();