const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('Azan ho rhi he', () => {
    console.log('Roza khol do');
    setTimeout(() => {
        console.log('Please roza khol do time hogia he');
    }, 3000);
})

myEmitter.emit('Azan ho rhi he');