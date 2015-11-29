var express = require('express');
var parser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(parser());
app.get('/', welcome);

function welcome(req, res){
	res.send("<h1> Hello! Welcome to CS5610 Fall 2015</h1>");
}


var connectionString = 'mongodb://127.0.0.1:27017/';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
	connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
			process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
			process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
			process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
			process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connectionString);
var db = mongoose.connection;


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require("./public/assignment/server/app.js")(app, mongoose, db);


app.listen(port, ipaddress);