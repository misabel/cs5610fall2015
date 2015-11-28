var users = require("./user.mock.json");
var q = require("q");
var uuid = require("node-uuid");
module.exports = function(mongoose, db){

    var UserSchema = require("./user.schema.js")(mongoose);
    var UserModel = mongoose.model("UserModel", UserSchema);


    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials

    }

    return api;

    function create(user) {
        user.id = uuid.v4();
        users.push(user);
        return user;
    }

    function findAll() {
        return users;
    }

    function findById(id) {
        for(var i = 0; i < users.length; i++) {
            var user = users[i];
            if(user.id == id){
                return user;
            }
        }

        return null;
    }

    function update(id, user){
        for(var i = 0; i < users.length; i++) {
            if(users[i].id == id) {
                users[i] = user;
                return users;
            }
        }
    }

    function remove(id){
        for(var i = 0; i <  users.length; i++){
            if(users[i].id == id){
                users.splice(i, 1);
                return users;
            }
        }
    }

    function findUserByUsername(username){
        var deferred = q.defer();

        UserModel.findOne({username: username}, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;

        //for(var i = 0; i < users.length; i++){
        //    var user = users[i];
        //    if(user.username == username){
        //        return user;
        //    }
        //}
        //return null;
    }

    function findUserByCredentials(credentials){

        var deferred = q.defer();

        UserModel.findOne(credentials, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
        //for(var i = 0; i < users.length; i++){
        //    var user = users[i];
        //    if(user.username == credentials.username && user.password == credentials.password){
        //        return user;
        //    }
        //}
        //return null;
    }
}