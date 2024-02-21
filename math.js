const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("hai", (size) => {
  console.log("hello joel");
});
