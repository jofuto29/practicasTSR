const net = require('net');

let args = process.argv.slice(2);
let porto = args[0];

const client = net.connect({port:porto},
    function() { //connect listener
        console.log('client connected to port' + args[0]);
        client.write('world!\r\n'); //escribe al servidor cunado se conecta
 });

client.on('data',
    function(data) { //en data tenemos lo que recibimos del servidor
        console.log(data.toString());
        client.end(); //no more data written to the stream
 });

client.on('end',
    function() {
        console.log('client disconnected');
 });