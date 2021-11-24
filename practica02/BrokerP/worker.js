const zmq = require('zeromq')
let req = zmq.socket('req')


if (process.argv.length < 4) {
    console.log('no ay suficientes parametros en la linea de ordenes, porfabor vuelva a intentar')
    process.exit(-1);
}


let Backend = process.argv[2]
let id = process.argv[3]
let resply = process.argv[4]

req.identity= id;
req.connect(Backend)

req.on('message', function(c,sep,msg) { //worker recibe un mensaje
    console.log("msj: " + msg);
    setTimeout(()=> { req.send([c,'', resply])}, 1000)
})

req.send([' ',' ',' ',]);
