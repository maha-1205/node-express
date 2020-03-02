const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
    console.log('Listner called',arg);
});

const log = require('./logger');
log('logger');