const zmq = require('zeromq')
let cli=[], req=[], workers=[];
let stWorkers= {}

let sc = zmq.socket('router') // frontend -- cliente
let sw = zmq.socket('router') // backend -- worker

let portClient = process.argv[2];
let portWorker = process.argv[3];
sc.bind('tcp://*:' + portClient);
sw.bind('tcp://*:' + portWorker);
contador = 0;
PeticionesAtendidas = 0;


sc.on('message',(c,sep,m)=> { //recibimos mensaje clientem, parece que noo hace falta que le pasemos, registramos con el parametro c el cliente, sep espacio en blaco, y m mensaje
    PeticionesAtendidas++;
    if (workers.length==0) { //encola cliente y mensaje en sus buffer si no tenemos ningun worker y espera a que haya alguno disponible
        console.log(c);
        cli.push(c); 
        console.log(m);
        req.push(m);
        console.log(sep);
    } else {
        sw.send([workers.shift(),'',c,'',m])//quitamos worker del array de workes, espacio, cliente, espacio, mensaje
    }
})


sw.on('message',(w,sep,c,sep2,r)=> { //recibimos mensaje del worker
    contador++;
    //comprobbacion de que el worker no esta en el array
    var incide = estWorker.indexOf(w);
    if(indice !== 0){ console.log("se añade " + w); estWorker.push(w);}
    else console.log(w + " ya este en el array");


    if (c=='') {workers.push(w); return}
    if (cli.length>0) { //si hay mas clienters se encia al trabajor a seguir haciendo peticiones
        sw.send([w,'', cli.shift(),'',req.shift()])
    } else {
        workers.push(w)
    }
    estWorker[w]++;
    sc.send([c,'',r + contador])
})

setInterval(()=>{
    console.log("peticiones atendidas: " + PeticionesAtendidas);
    console.log("peticiones por cada worker : ")
    for(let i in stWorkers){
        console.log("worker: " + i + "peticiones atendidas " + stWorkers[i]);
    }
},5000)
/**
 * metodo pop --Z elimina el último elemento de un arreglo mutando su estructura inicial y luego devuelve dicho elemento como respuesta.
 * metodo push --Z nuevos elementos que pasemos como parametros al final del arreglo
 * metodo shift --Z elmimina primer elemento
 * metodo unshift --Z añade elemento al principio aumentando longitud del array
 */ 



/*----------------------------------------------IMPORTANTE--------------------------------------------------------
    CON FORME LO TENEMOS AQUI, SI INICIAMOS ANTES CLIENTE EL WORKER NO LE ENVIARA NADA PORQUE NO RECIBIRA RESPUESTA DADO QUE EL BROKER NO LO TIENE REGISTRADO
*/