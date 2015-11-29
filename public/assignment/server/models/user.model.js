//var users = require("./user.mock.json");
var q = require("q");
//var uuid = require("node-uuid");
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

        var deferred = q.defer();

        UserModel.create(user, function(err, user){
            console.log(user);
            deferred.resolve(user);
        });

        return deferred.promise;
        //user.id = uuid.v4();
        //users.push(user);
        //return user;
    }

    function findAll() {
        var deferred = q.defer();

        UserModel.find(function(err, users){
            deferred.resolve(users);
        })

        return deferred.promise;
        //return users;
    }

    function findById(id) {
        var deferred = q.defer();

        UserModel.findById(id, function(err, user){
            deferred.resolve(user);
        });
        return deferred.promise;
        //for(var i = 0; i < users.length; i++) {
        //    var user = users[i];
        //    if(user.id == id){
        //        return user;
        //    }
        //}
        //
        //return null;
    }

    function update(id, user){

        var deferred = q.defer();
        delete user._id;
        UserModel.update({_id: id}, user, function(err, found){
            deferred.resolve(found);
        });

        //UserModel.findById(id, function(err, found){
        //    found = user;
        //    found.save(function(err, res){
        //        deferred.resolve(user);
        //    });
        //});

        return deferred.promise;
        //for(var i = 0; i < users.length; i++) {
        //    if(users[i].id == id) {
        //        users[i] = user;
        //        return users;
        //    }
        //}
    }

    function remove(id){

        var deferred = q.defer();

        UserModel.remove({_id: id}, function(err, users){
            deferred.resolve(users);
        });

        return deferred.promise;
        //for(var i = 0; i <  users.length; i++){
        //    if(users[i].id == id){
        //        users.splice(i, 1);
        //        return users;
        //    }
        //}
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