const http = require('http');
function dd(i) {return (i<10?"0":"")+i;}//es basicamente es un if:   if(i<10) return "0" + i
                                                                    //else return "" + i para hacer un string

const server = http.createServer(
    function (req,res) {
        res.writeHead(200,{'Content-Type':'text/html'}); //¿? --> etiquetas de cabecera html
        //res.end('<h1>Node y Http</h1>')
        res.end('<marquee>Node y Http</marquee>'); //¿? es una etiqueta del body html, hace que el texto entre las estiquetas se desplace idefinidamente de derecha a izquierda
        var d = new Date();
        console.log('alguien ha accedido a las '+ d.getHours() +":"+ dd(d.getMinutes()) +":"+ dd(d.getSeconds()));
}).listen(8000); //escucha en puerto 8000

//podemos acceder a el http://localhost:8000

//pq me imprime dos veces el console.log¿? --> 