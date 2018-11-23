var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter {
    mylog(message){
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'https://test.com'});
    }
}



module.exports = Logger;