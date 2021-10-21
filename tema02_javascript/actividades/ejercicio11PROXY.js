// file: proxy.js
const net = require('net')
const LOCAL_PORT = 8000
let remotePort = process.argv[3] || 8001
let remoteIP = process.argv[2] || '127.0.0.1'
const server = net.createServer(function (socket) {
    const serviceSocket = new net.Socket()
    serviceSocket.connect(parseInt(remotePort),remoteIP, function () {
        socket.on('data', function (msg) { //se activa cuando se reciben datos
                console.log("socket activado")
                serviceSocket.write(msg)
        })
        serviceSocket.on('data', function (data) { //se activa cuando se reciben datos
            console.log("serviceSocket activado")
            socket.write(data)
        })
    })
}).listen(LOCAL_PORT)//se crea un servidor y se escucha en ese puerto la operacion net createserver con esos sos parametro una funcion con el socket y luego .listen para escuchar
console.log("TCP server accepting connection on port: " + LOCAL_PORT)
