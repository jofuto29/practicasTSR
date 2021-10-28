const ev = require("events")
const emitter = new ev.EventEmitter()
const e1 = "print"
let n = 0

emitter.emit(e1)
emitter.on(e1,function(){
    console.log(e1)
})
emitter.emit(e1)