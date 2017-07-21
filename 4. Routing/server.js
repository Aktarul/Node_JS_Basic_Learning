var http = require('http');
var App = require('./app');

http.createServer(App.handleRequest).listen(8000);