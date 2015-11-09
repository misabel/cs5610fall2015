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
        
        $scope.addContent = function(){
            ngDialog.open({
                template:"dialog/addContent.html"
            });
        }
        
        $scope.addCode = function(){
            ngDialog.open({
                template:"dialog/addCode.html"
            });
        }
    }
})();