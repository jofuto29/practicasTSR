/*
 en un entorno cliente servidor suele replicarse a gran escala los servdiores y repatir el trabajo
 entre ellos segun su nivel de carga actual.

 creamos el embrion para un sitema de este tipo, con un unico clinete y un unico servidor que se comunica
 a traves del puerto 80

*/
const fs = require('fs');
const net = require('net');


function getLoad(){
    data=fs.readFileSync("/proc/loadavg"); 
    var tokens = data.toString().split(' ');
    var min1 = parseFloat(tokens[0])+0.01;
    var min5 = parseFloat(tokens[1])+0.01;
    var min15 = parseFloat(tokens[2])+0.01;
    return min1*10+min5*2+min15;
};
   

const server = net.createServer(
    function(c) { //connection listener, c es un socket
    console.log('server: client connected ');
    c.on('end',
        function() {
            console.log('server: client disconnected and server close');
            process.exit(1);
        });

    c.on('data',
        function(data) {
            c.write("tendria que pasarte cosas,pero no puedo calcularlas" + data); // send resp, recibimos world del cliente
            c.end(); // close socket
         });
 });

server.listen(8000,
 function() { //listening listener
    console.log('server bound');
 });

