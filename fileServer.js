var http = require('http');
var fs = require('fs');

var portNumber = Number(process.argv[2]);

var server = http.createServer(function cb(request, response) {
	var stream = fs.createReadStream(process.argv[3]);
	stream.on('open', function (){
		stream.pipe(response);
	})
});
server.listen(portNumber);
