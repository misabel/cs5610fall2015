(function(){
    angular
        .module("AdminToolsApp")
        .controller("ListCourseController", ListCourseController);

    function ListCourseController($scope, CourseService) {

        $scope.courses = CourseService.getAllCourses();

        $scope.removeCourse = function(index) {
            console.log(index);
            $scope.courses.splice(index, 1);
        }
    }
})();