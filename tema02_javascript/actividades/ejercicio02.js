const ev = require('events')
const emitter = new ev.EventEmitter
const e1 = "evento1"
const e2 = "evento2"
const e3 = "evento3"

const books = [ "Walk Me Home", "When I Found You", "Jane's Melody", "Pulse" ]
let num1 = 0
let num2 = 0
let num3 = 0
let modificado = false;
let intervalo;
let intervaloEvento2 = 2000;


/*LISTENERS -----------------------------------------------------------------------------------------------------------------------------*/
function listener1() {
    num1++
    console.log( "1: Listener Activo. numero de eventos1: " + num1)
}

function listener2(){
    num2++
    if(num1 <= num2){
        console.log("2: evento dos. numero de eventos2: " + num2)
    }else{
        console.log("2: hay mas eventos de tipo uno. numero de eventos2: " + num2)
    }

    //modificacion de intervalo
    if (modificado) {
		clearInterval(intervalo) //eliminamos el setInterval de antes y creamos uno nuevo
		intervalo = setInterval(function(){
            emitter.emit(e2)
        }, intervaloEvento2)
        
		modificado = false
	}
}
function listener3(){
    num3++
    console.log("3: evento tres. numero de evento2: " + num3)
    //cada vez que se produzca un evento de este tipo modificaremos el intervalo en el siguiente evento de tipo2, para ello empleamos la variable modificado que s ecomprobara
    //en el otro evento, si ha sido modificada se cambiara el intervalo de generacion de evento
    if(intervaloEvento2 < 18000){
        intervaloEvento2 = intervaloEvento2*3;
        modificado = true;
    }
}
// Listener for event e2.
/*function listener2(a) {
    console.log( "Event " + e2 + " (with arg: " + a + ") has happened " + ++num2 + " times." )
}fijate que tiene el argumento a, esto seria un listener con parametor en el le pasamos un argumento, el libro x
*/


/*REGISTROS DE LOS EVENTOS -------------------------------------------------------------------------------------------------------------------------------------------*/
// Listeners are registered in the event emitter.
emitter.on(e1, listener1)//es como un buicle infinito espera a que aparezca el evento
emitter.on(e2, listener2)
emitter.on(e3, listener3)

/* There might be more than one listener for the same event.
emitter.on(e1, function() {console.log("Something has been printed!!");})
esto lo que haria seria depues de hacer los del listener 1 de arriba, se invocaria este que como listener tiene la funcion que vemos aqui
*/



/*GENERAMOS LOS EVENTOS, ADEMAS DE MODIFICAR SETINTERVAL--------------------------------------------------------------------------------- IMP*/


setInterval( function() {
emitter.emit(e1)
}, 3000 )

//en intervalo tengo guardado el objeto con el que puedo modificar el intervalo, y en intervaloEvento2, tengo la tiempo que tiene actualmente
intervalo = setInterval( function() {
    emitter.emit(e2)
}, intervaloEvento2)

setInterval( function(){
    emitter.emit(e3)
}, 10000)
