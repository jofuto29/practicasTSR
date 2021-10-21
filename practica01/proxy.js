/*
UN intermediario proxy es un servidor que al ser invocado por el cliente redirige la peticion a un tercero y posteriormente
encamina la repuesta de nuevo al clinete

    desde el punto de vista del cliente se trata de un servidor normal
    puede residir en una maquina distina a la del client y la del servidor
    este puede modificar puertos y direcciones pero no altera el cuerpo de la peticion ni la respuesta

*/

const net = require('net');
const LOCAL_PORT = 8000;
const LOCAL_IP = '127.0.0.1';
const REMOTE_PORT = 80;
const REMOTE_IP = '158.42.4.23'; // www.upv.es

const server = net.createServer(function (socket) {
    const serviceSocket = new net.Socket();

    serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_IP, function () {
        socket.on('data', function (msg) {
        serviceSocket.write(msg);
        });

        serviceSocket.on('data', function (data) {
        socket.write(data);
        });
    });
}).listen(LOCAL_PORT, LOCAL_IP);
console.log("TCP server accepting connection on port: " + LOCAL_PORT);
