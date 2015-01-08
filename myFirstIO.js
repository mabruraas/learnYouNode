var fs = require('fs');

var file = fs.readFileSync(process.argv[2]) + "";
var count = file.split('\n');

console.log(count.length - 1);
