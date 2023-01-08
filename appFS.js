
const fs = require('fs');

//for access (asynchronous if you keep thread busy, will not be able to server many clients if not asynchronous) vs accessSync

const files = fs.readdirSync('./');  //Synchronous only to isolate processing as single thread.  Not for many threads, RARELY EVER USED.
console.log(files);

fs.readdir('$', function(err,files) {  //Asynchronous. Argument is the path.  Preferred for many threads, always use unless required otherwise.
    if(err)console.log('Error: ', err);
    else console.log('Result', files);
});