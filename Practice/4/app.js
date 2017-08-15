var url = require('url');
var fs = require('fs');

function renderHTML(path, res) {
	fs.readFile(path, null, function(error, data){
		if(error) {
			res.writeHead(404);
			res.write('File not found!');
		}else{
			res.write(data);
		}
		res.end();
	});
}

function handleRequest(req, res) {
		var path = url.parse(req.url).pathname;
		switch (path) {
			case '/':
				renderHTML('./index.html',res);
				break;
			case '/login':
				renderHTML('./login.html',res);
				break;
			default: 
				res.writeHead(404);
				res.write('Route not found');
				res.end();
		}

	}

function ServerCall(request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	//response.write('From ServerCall function');  /*make ambiguity of writting and calling 404 error for line 26*/
	handleRequest(request, response);
}

module.exports.ServerCall = ServerCall;
module.exports.handleRequest = handleRequest;