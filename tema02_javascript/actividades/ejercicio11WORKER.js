// File: worker.js
const net = require('net')
const server = net.createServer(
    function(c) { //connection listener
        console.log('server: client connected')
        c.on('end', function() { //se gestiona el evento end, cuando se le pasa se cierra el socket c
            console.log('server: client disconnected')
        })
        c.on('data', function(data) { //
            console.log("data" + data)
            c.write(parseInt(data+'')*3+'') //lo que envia
        })
    })

server.listen(parseInt(process.argv[2]) || 8001, function() { //listening listener
    console.log('server bound, esperando en el puerto 8001')
}) //espera a que se conecte el cliente a este servidor en el puerto 8001