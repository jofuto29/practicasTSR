//TAMBIEN TEORIA
const net = require('net');

const client = net.connect({port:8000},
    function() { //connect listener
        console.log('client connected');
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


 /*IMPORTANTE ARGV
 
• process.argv.length: número de argumentos pasados por la línea de órdenes
• process.argv[i] : permite obtener el argumento i-ésimo. Si hemos usado la orden
“node programa arg1 …” entonces process.argv[0]contiene la cadena
'node', process.argv[1] contiene la cadena 'programa', process.argv[2]
la cadena 'arg1', etc.

Téngase en cuenta que puede utilizarse args=process.argv.slice(2) para descartar 'node' y el
path del programa, de forma que en args sólo quedarán los argumentos reales para la aplicación
encapsulados y accesibles como elementos de un array, a partir de la posición 0.
 */

