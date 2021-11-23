const zmq = require('zeromq')
let req = zmq.socket('req')

let UrlBackend = process.argv[2]
let nick = process.argv[3]
let resply = process.argv[4]

req.identity= nick + process.pid
req.connect(UrlBackend)

req.on('message', (c,sep,msg)=> {
    console.log("msj" + msg);
    setTimeout(()=> { req.send([c,'', resply])}, 1000)
})
req.send(['','',''])
