const zmq = require('zeromq')
let cli=[], req=[], workers=[];

let trabajadores= {}

let sc = zmq.socket('router') // frontend -- cliente
let sw = zmq.socket('router') // backend -- worker

if (process.argv.length < 4 ) {
    console.log("faltan parametros por la linea de ordenes");
    process.exit(-1);
}


let portClient = process.argv[2];
let portWorker = process.argv[3];
sc.bind('tcp://*:' + portClient);
sw.bind('tcp://*:' + portWorker);
PeticionesAtendidas = 0;


sc.on('message',(c,sep,m)=> { //recibimos mensaje clientem, parece que noo hace falta que le pasemos, registramos con el parametro c el cliente, sep espacio en blaco, y m mensaje
    if (workers.length==0) { //encola cliente y mensaje en sus buffer si no tenemos ningun worker y espera a que haya alguno disponible
        console.log(c);
        cli.push(c); 
        console.log(m);
        req.push(m);
        console.log(sep);
    } else {
        sw.send([workers.shift(),'',c,'',m])//quitamos worker del array de workes, espacio, cliente, espacio, mensaje, worker solo recibe c, ,m identida la consume al enviar el router
    }
})


sw.on('message',(w,sep,c,sep2,r)=> { //recibimos mensaje del worker
    if (c=='') //registramos trabajador
    {
        workers.push(w);
        trabajadores[w] = 0;
        return;
    }
    else{
        PeticionesAtendidas++;
        if (cli.length>0) { //si hay mas clienters se encia al trabajor a seguir haciendo peticiones
            sw.send([w,'', cli.shift(),'',req.shift()])
            trabajadores[w]++;
        } else {
            workers.push(w)
            trabajadores[w]++;
        }
        sc.send([c,'',r + PeticionesAtendidas])
    }
})


setInterval(()=>{
    console.log("peticiones totales atendidas: " + PeticionesAtendidas);
    console.log(trabajadores)
    for(let i in trabajadores){
        console.log("trabajador: " + i + " peticiones atendidas " + trabajadores[i]);
    }
},5000)


/**
 * metodo pop --Z elimina el último elemento de un arreglo mutando su estructura inicial y luego devuelve dicho elemento como respuesta.
 * metodo push --Z nuevos elementos que pasemos como parametros al final del arreglo
 * metodo shift --Z elmimina primer elemento
 * metodo unshift --Z añade elemento al principio aumentando longitud del array
 * 
 * split(0,2) --Z elimina desde el incide 0 hasta el indice 2
 */ 



/*----------------------------------------------IMPORTANTE--------------------------------------------------------
    CON FORME LO TENEMOS AQUI, SI INICIAMOS ANTES CLIENTE EL WORKER NO LE ENVIARA NADA PORQUE NO RECIBIRA RESPUESTA DADO QUE EL BROKER NO LO TIENE REGISTRADO

    DATOS IMPORTANTES DE ESTE PATRON A TENER EN CUENTA PARA EL EXAMEN
    
    WORKER
    el primer mensaje que envia el trabajador es ["","",""], donde cliente es "", linea de separaciones y mensajes es "", lo utilizamos para registrar al trabajador
    el soket req añade como prefijo la identidad de si mismo y un delimitador, cuando llega al router el verdadero mensaje que tenemos es [w,"","","",""]


    cliente
    req añade un delimitador al enviar y lo elimina la recibir

    router
    añade identidad de la conecxion al recibir y la consume al enviar

    worker
    guarda el envolotorio al recibir y lo añade al enviar

*/