(function(){
	"use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
		var users = [];
		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			findAllUsers : findAllUsers,
			createUser : createUser,
			deleteUserById : deleteUserById,
			updateUser : updateUser
		}
		
		function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
		
		function findUserByUsernameAndPassword(username, password, callback){
			
			for(var i = 0; i < users.length; i++){
				if(users[i].username == username && users[i].password == password){
					// callback(user);
					return users[i];
				}
			}
			
			// callback(null);
			return null;
		};
		
		function findAllUsers(callback){
			// callback(users);
			return users;
		};
		
		
		function createUser(user, callback){
			var newUser = angular.copy(user);
			newUser.id = guid();
			users.push(newUser);
			// callback(user);
			return newUser;
		};
		
		function deleteUserById(id, callback){
			for(var i = 0; i < users.length; i++){
				if(users[i].id == id){
					users.splice(i, 1);
					// callback(users);
					return users;
				}
			}
		};
		
		function updateUser(id, user, callback){
			for(var i = 0; users.length; i++){
				if(users[i].id == id){
					users[i] = user;
					// callback(user);
					return user;
				}
			}
		};
		
		
		
		return service;
		
    };
})();