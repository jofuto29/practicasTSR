// client.js
const net = require('net');
var i = 0;
let client = net.connect({port:9000});
client.on('data', function(data) {
  console.log('Reply: '+data)
  console.log(i)
  if(i++ == 2){client.end()}
  else{
  client.write(data)
  }//habia un ejercicio que no se cerraba con esto porque enviaba y el servidor le devolvia lo enviado, entonces espera que el cliente este activo pero si lo cerramos ya no hay un evento data y genera un error
});
client.on('end', function() {
  console.log('client ' +
    'disconnected');
});

client.on('error', function(err){ //esta puesto el error para que podamos gestionar el error con este evento
  console.log("ha habido un error" + err)
  client.end()
})