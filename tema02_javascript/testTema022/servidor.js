// server.js
const net = require('net');
let i = 0;
let server = net.createServer( //La operación net.createServer() del módulo 'net' utiliza un parámetro que es un objeto que especifica los atributos (es decir, la configuración) del servidor que vamos a crear.
  function(c) {//'connection' listener
    console.log('server connected');
    c.on('data', function(data) {
      c.end()
    
    });
    c.on('end', function() {
      console.log('server disconnected');
    });
  });
server.listen(9000);
//no podemos terminar
// los sokets utilizados son TCP
//el servidor que hemos creado puede gestionar varias peticiones si se conectan a ese puerto