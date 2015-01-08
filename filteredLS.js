var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function finishedListing(err, data) {
	var filteredList = [];

	for (var i = 0; i < data.length; i++) {
		if (path.extname(data[i]) == ("." + process.argv[3])) {
			filteredList.push(data[i]);
		}
	}

	for (var i = 0; i < filteredList.length; i++) {
		console.log(filteredList[i]);
	}
});
