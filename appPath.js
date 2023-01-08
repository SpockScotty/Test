
const path = require('path');  //Load built in path module and store in constant called path.  Now have object with useful function.

var pathObj = path.parse(__filename);  //Use method called parse with path module.  Use __filename as agrument in wrapper function module.

console.log(pathObj);  //Load it on the console.

