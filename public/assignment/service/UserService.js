(function(){
    angular
        .module("WhiteBoardApp")
        .factory("UserService", UserService);

    function UserService() {
		var users = [];
		var Guid = require('guid');
		
		var findUserByUsernameAndPassword = function (username, password, callback){
			
			for(var user in users){
				if(user.username == username && user.password == password){
					callback(user);
					break;
				}
			}
			
			callback(null);
		};
		
		var findAllUsers = function (callback){
			callback(users);
		};
		
		
		var createUser = function(user, callback){
			user.id = Guid.create();
			users.push(user);
			callback(user);
		};
		
		var deleteUserById = function (id, callback){
			for(var i = 0; i < users.length; i++){
				if(users[i].id == id){
					users.splice(i, 1);
					break;
				}
			}
			callback(users);
		};
		
		var updateUser = function(id, user, callback){
			for(var i = 0; users.length; i++){
				if(users[i].id == id){
					users[i] = user;
					callback(user);
					break;
				}
			}
		};
		
    };
})();