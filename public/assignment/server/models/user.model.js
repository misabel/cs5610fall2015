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
    }

    function findAll() {
        var deferred = q.defer();

        UserModel.find(function(err, users){
            deferred.resolve(users);
        })

        return deferred.promise;
    }

    function findById(id) {
        var deferred = q.defer();

        UserModel.findById(id, function(err, user){
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function update(id, user){

        var deferred = q.defer();
        delete user._id;
        UserModel.update({_id: id}, user, function(err, found){
            deferred.resolve(found);
        });

        return deferred.promise;
    }

    function remove(id){

        var deferred = q.defer();

        UserModel.remove({_id: id}, function(err, users){
            deferred.resolve(users);
        });

        return deferred.promise;
    }

    function findUserByUsername(username){
        var deferred = q.defer();

        UserModel.findOne({username: username}, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }

    function findUserByCredentials(credentials){

        var deferred = q.defer();

        UserModel.findOne(credentials, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }
}