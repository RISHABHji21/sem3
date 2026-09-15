//simulate dom like event handling in node.js using events
//addEventlistener.om
//dispatchevent.emit()
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("click", () => {
    console.log("click event triggered");
    
});
emitter.on('mouseover', () => {
    console.log("mouseover event triggered");
});
emitter.emit('click',name);
emitter.emit('mouseover');
