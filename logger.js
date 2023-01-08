
const EventEmitter = require('events'); //declar Class from module called events


    var url = 'https://christianthompson.com/dictionary';

class Logger extends EventEmitter { log(message) {  //When function is placed inside a class, is now a method and word "function" is removed.



    //Send an HTTP request

    console.log(message);

// Raise an event, register a listner.  A listener is a function which will be called when that event is raise.
this.emit('messageLogged', { id: 1, url: 'http://'})  //class.method(argument, events argument as an object using {})

  }
}

module.exports=Logger;



