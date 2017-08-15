var http = require('http');
var app = require('./app');

function AppCaller(Areq, Bres){
	app.ServerCall(Areq, Bres);
}

http.createServer(AppCaller).listen(8000);