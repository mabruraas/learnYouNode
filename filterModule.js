var fs = require('fs');
var path = require('path');

module.exports = function (path, fileEnding, callback) {
	fs.readdir(path, function finishedListing(err, data) {
		if (err){
			return callback(err, null);
		}

		var filteredList = [];
		data.forEach(function (element) {
			if (compare(element, fileEnding)) {
				filteredList.push(element);
			}
		});

		callback(null, filteredList);
	});
}

function compare (obj1, obj2) {
	return path.extname(obj1) == ("." + obj2);
}