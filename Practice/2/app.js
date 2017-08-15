var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

http.createServer(function (request, response){
	response.writeHead(200,{'Content-type': 'text/plain'});
	response.write(module1.myString);
	response.write('Hello World\n');
	module1.myFunction();
	module2.myFunction();
	response.write(module2.myVariable);
	response.end();
}).listen(8000);