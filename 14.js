nst Eventemitter=require('events');
class MyEvent extends Eventemitter{
    
}

const event=new Eventemitter();

event.on('greet',()=>{
    console.log('this is event emitter');
});
event.on('exit',()=>{})
events.once("greet,(name)=>{
    console.log(`hello ${name}`);
});
event.emit('greet');
event.emit('exit');
