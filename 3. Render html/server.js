http = require("http");
fsRead = require('fs');

function onRequest(request, response) {
    response.writeHead('200',{'content-type': 'text/html'});
    fsRead.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.writeHead('File not found');
        }else {
           response.write(data);
        }
        response.end();
    })
}
http.createServer(onRequest).listen(8000);

