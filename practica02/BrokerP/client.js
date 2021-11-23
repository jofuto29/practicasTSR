const zmq = require('zeromq')
let req = zmq.socket('req');

UrlFrontend = process.argv[2]
req.connect(UrlFrontend)
nick = process.argv[3]
req.identity = nick + process.pid;
msj = process.argv[4];


req.on('message', (msg)=> { //cuando termina el cliente la aplicacion client.js termina
    console.log('resp: '+msg)
    process.exit(0);
})
req.send(msj)
