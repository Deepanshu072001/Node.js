const { EventEmitter } = require("stream");
const eventEmitter = new EventEmitter();

eventEmitter.on("error", (err) => {
    console.error(`Error Occurred: ${err.message}`);
});

eventEmitter.emit("error", new Error ("Something went wrong"));