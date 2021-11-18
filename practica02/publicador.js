const zmq = require('zeromq')

msg = process.argv.slice(4);
longitud = msg.length;
port = process.argv[2];
numMensajes = process.argv[3];
contador = 1;
contadorE = 1;

let pub = zmq.socket('pub')
pub.bind('tcp://*:' + port)

function emite() {
    let m=msg[0]
    pub.send(m + ' ' +contadorE)
    msg.shift(); //elimina primer elemento
    msg.push(m) //añade el elemento que hemos eliminado antes y que tenemos guardado en m al final del array
    console.log(contador + ': ' + m + ' ' + contadorE)
    if(contador%longitud == 0) contadorE++;
    if(contador == numMensajes) clearInterval(interval);
    contador++;

}

interval = setInterval(emite,1000) // every second


/*
 * metodo pop --Z elimina el último elemento de un arreglo mutando su estructura inicial y luego devuelve dicho elemento como respuesta.
 * metodo push --Z nuevos elementos que pasemos como parametros al final del arreglo
 * metodo shift --Z elmimina primer elemento
 * metodo unshift --Z añade elemento al principio aumentando longitud del array
 */ 

