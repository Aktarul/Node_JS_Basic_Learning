var http = require('http');
var fs = require('fs');

http.createServer( function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	fs.readFile('./index.html',null, function(error, data){
		/*if( error ) {
			res.writeHead(404);
			res.write('File not found');
		} else{
			res.write(data);
		}*/

		res.write(data);
		res.end();
	});
}).listen(8000);