// client.js
const net = require('net');
let client = net.connect({port:
  9000}, function() {
    client.write('Hello ');
  });
client.on('data', function(data) {
  console.log('Reply: '+data);
  client.write("hola")
  //client.end()//cuando reciba datos del servidor el cliente se cierra, esto llama al evento end que tenemos abajo para cerrar el socket
});
client.on('end', function() {
  console.log("metodo end")
  console.log('client ' +
    'disconnected');
});