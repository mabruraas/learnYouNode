var fs = require('fs');

fs.readFile(process.argv[2], function doneReading (err, data) {
	if (err == null || err == undefined) {
		var countLines = data.toString().split('\n').length - 1;
		console.log(countLines);
	}
});
