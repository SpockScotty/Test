
const os = require('os'); 

var totalMemory = 'Total Memory = ' + Math.round(os.totalmem()/(1024*1024*1024), 0) + " Gb";
var freeMemory = 'Free Memory = ' + Math.round(os.freemem()/(1024*1024*1024), 0) + " Gb";
var usedMemory = 'Used Memory = ' + Math.round((os.totalmem()-os.freemem())/(1024*1024*1024), 0) + " Gb";
var osPlatform = 'Operating System = ' + os.platform();

console.log(totalMemory);
console.log(freeMemory);
console.log(usedMemory);

console.log(osPlatform);

//Simplify this expresion using Template string
//ES6 / ES2015 : ECMAScriipt 6
//Automaticall concatentate prefix using the following.
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

