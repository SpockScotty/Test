
const EventEmitter = require('events'); //declar Class from module called events
const Logger = require('./logger');
//Load the logger module and call the log function.
const logger = new Logger();





//Register a listener
logger.on('messageLogged', (arg)=>{ //e, or eventarg or arg with arrow function.  method as listener using on with class.method(2 arguments:name of event, 
    //call back function actual listener. ).
    console.log('Listener call', arg)
});


logger.log('message');














