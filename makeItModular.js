var myModule = require('./filterModule');

myModule(process.argv[2], process.argv[3], function completed(errFilter, filteredData) {
	for (var i = 0; i < filteredData.length; i++) {
		console.log(filteredData[i]);
	}
});
