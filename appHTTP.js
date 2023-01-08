
const http = require('http');

const server = http.createServer();  //Has capabilities of event emitter.

server.on('connection',(socket)=>{  //Register a handler, add code block {} after arrow function =>.
    console.log ('New Connection Dude...') 
});
server.listen(3000); //Call server and list.  Raises event.

