var net = require('net');

var portNumber = Number(process.argv[2]);
var server = net.createServer(function (socket) {

	var today = new Date();
	
	var mm = today.getMinutes();
	var hh = today.getHours();

    var day = today.getDate();
    var month = today.getMonth() + 1; 
    var year = today.getFullYear();

    if(day < 10){
        day = '0' + day;
    } 
    if(month < 10){
        month = '0' + month;
    } 
    if(hh < 10){
    	hh = '0' + hh;
    }
    if(mm < 10){
    	mm = '0' + mm;
    }
    
    var today = year + '-' + month + '-' + day + ' ' + hh + ':' + mm; 
    
	socket.write(today + '\r\n');
	socket.pipe(socket);
	socket.end();
});

server.listen(portNumber);
