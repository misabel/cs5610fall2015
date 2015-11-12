var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', welcome);

function welcome(req, res){
	res.send("<h1> Hello! Welcome to CS5610 Fall 2015</h1>");
}

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require("./public/assignment/server/app.js")(app);

app.listen(port, ipaddress);