const ev = require('events')                  // library import (Using events module)

const emitter = new ev.EventEmitter()      // Create new event emitter
const e1='print', e2='read'                            // identity of two different events

function handler (event,n) {     // function declaration, dynamic type args, higher-order function
      return () => { // anonymous func, parameterless listener, closure
         console.log(event + ':' + ++n + ' times');
      }
}

/*IMPORTANTE
dos cosillas, la primera es que se ejcuta el console.log porque es lo que ejecuta el emitter on
le tienes que devolver una funcion, cuando ponemos la funcion anonima en el otro emmiter lo que estamos
devolviendo es lo mismo que con la funcion handlar, le devolvermos una funcion

*/

emitter.on(e1, handler(e1,0)) // listener, higher-order func (callback)
emitter.on(e2, handler(e2,0)) // listener, higher-order func (callback)
emitter.on(e1, ()=>{console.log('something has been printed')}) //several listeners on e1

emitter.emit(e1) // emit event
emitter.emit(e2) // emit event

console.log('---------------------------')
setInterval(()=>{emitter.emit(e1)}, 2000) // asynchronous (event loop), setInterval
setInterval(()=>{emitter.emit(e2)}, 8000) // asynchronous (event loop), setInterval
console.log('\n\t========> end of code')
