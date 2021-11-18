const zmq = require('zeromq')
let cli=[], req=[], workers=[]
let sc = zmq.socket('router') // frontend -- cliente
let sw = zmq.socket('router') // backend -- worker

sc.bind('tcp://*:9998')
sw.bind('tcp://*:9999')

sc.on('message',(c,sep,m)=> { //recibimos mensaje cliente
    if (workers.length==0) {
        console.log(c);
        cli.push(c); 
        console.log(m);
        req.push(m);
        console.log(sep);
    } else {
        sw.send([workers.shift(),'',c,'',m])
    }
})

sw.on('message',(w,sep,c,sep2,r)=> { //recibimos mensaje del worker
    if (c=='') {workers.push(w); return}
    if (cli.length>0) {
        sw.send([w,'',
        cli.shift(),'',req.shift()])
    } else {
        workers.push(w)
    }
    sc.send([c,'',r])
})


/**
 * metodo pop --Z elimina el último elemento de un arreglo mutando su estructura inicial y luego devuelve dicho elemento como respuesta.
 * metodo push --Z nuevos elementos que pasemos como parametros al final del arreglo
 * metodo shift --Z elmimina primer elemento
 * metodo unshift --Z añade elemento al principio aumentando longitud del array
 */ 