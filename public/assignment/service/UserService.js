(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
		var users = [];
		var Guid = require('guid');
		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			findAllUsers : findAllUsers,
			createUser : createUser,
			deleteUserById : deleteUserById,
			updateUser : updateUser
		}
		
		function findUserByUsernameAndPassword(username, password, callback){
			
			for(var user in users){
				if(user.username == username && user.password == password){
					callback(user);
					return user;
				}
			}
			
			callback(null);
			return null;
		};
		
		function findAllUsers(callback){
			callback(users);
		};
		
		
		function createUser(user, callback){
			user.id = Guid.create();
			users.push(user);
			callback(user);
			return user;
		};
		
		function deleteUserById(id, callback){
			for(var i = 0; i < users.length; i++){
				if(users[i].id == id){
					users.splice(i, 1);
					callback(users);
					return users;
				}
			}
		};
		
		function updateUser(id, user, callback){
			for(var i = 0; users.length; i++){
				if(users[i].id == id){
					users[i] = user;
					callback(user);
					return user;
				}
			}
		};
		
		return service;
		
    };
})();