(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {
        
        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };
        
        function createFormForUser(userId, form){
            var newForm = angular.copy(form);
            newForm.userId = userId;
            var deferred = $q.defer();
            $http.post("/api/assignment/user/" + userId + "/form", newForm)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function findAllFormsForUser(userId){
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + userId + "/form")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function deleteFormById(id) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + id)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function updateFormById(id, form){
            var deferred = $q.defer();
            $http.put("/api/assignment/form/" + id, form)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        return service;
		
    };
})();