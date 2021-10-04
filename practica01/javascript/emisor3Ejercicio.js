const ev = require('events')

const emitter = new ev.EventEmitter();
const e1='e1', e2='e2'
let inc=0, t

function rand() { // debe devolver valores aleat en rango [2000,5000) (ms)
    return Math.random() * (5000 - 2000) + 2000;
}

function handler (e,n) { // e es el evento, n el valor asociado
 return (inc) => {
     console.log(inc);
     console.log(n)
    n += inc;
    console.log(e + '-->' + n)
 } // el oyente recibe un valor (inc)
}

emitter.on(e1, handler(e1,0)) //cuando modicas la n se guarda aqui, cuando se vulve a pasar se pasa esa n modificada
emitter.on(e2, handler(e2,''))


function etapa() {
    emitter.emit(e1,inc);
    emitter.emit(e2,inc);
    console.log("duracion: " + t);
    inc++;
    setTimeout(etapa, t=rand());
}


//setInterval(etapa, t= rand())
setTimeout(etapa, t=rand())