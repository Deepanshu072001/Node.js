const EventEmitter = require("events");

const eventEmitter = new EventEmitter() ;

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to the event emitter in node js events`);
    
});

eventEmitter.once('pushNotification', () => {
    console.log("This event will run only once");
});

eventEmitter.emit('greet', "user");  // emit the event
eventEmitter.emit("pushNotification");

const eventListener = () => console.log("This is a event listener demo ");
eventEmitter.on('demo', eventListener)
eventEmitter.emit("demo");
eventEmitter.removeListener("demo", eventListener);
// eventEmitter.emit("demo");
console.log(eventEmitter.listeners("greet")); // --> this will count the no of listener in the event
