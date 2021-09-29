const ev = require('events')
const emitter = new ev.EventEmitter()

const e1 = "print", e2 = "read"
let num1= 0,  num2=0


emitter.on(e1, function(){
    console.log("Event : " + e1 + " has happenned " + ++num1 + " times.");
})

emitter.on(e2, function(){
    console.log("Event : " + e2 + " has happenned " + ++num2 + " times.");
})

emitter.on(e1, function(){
    console.log("algo a pasao");
})

setInterval(() => {
    emitter.emit(e1)
}, 2000);
setInterval(() => {
    emitter.emit(e2)
}, 3000);