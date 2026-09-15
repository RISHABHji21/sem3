//simulate dom like event handling in node.js using events

class MyEvent extends EventEmitter {}

const myEvent = new MyEvent();

myEvent.on('click', (event) => {
    console.log('Element clicked:', event);
});

myEvent.on('hover', (event) => {
    console.log('Element hovered:', event);
});

// Simulate DOM events
myEvent.emit('click', { x: 100, y: 200 });
myEvent.emit('hover', { x: 150, y: 250 });
