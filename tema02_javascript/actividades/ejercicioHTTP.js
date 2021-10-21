var http = require('http').createServer(webServer),
    fs = require('fs'),
    //1) index = fs.createReadStream('./index.html') //artchivo html legible que devolvera el servidor en la repuesta

function webServer(req, res) // req es la peticion y res es la respuesta
{
    function readIndex(err, data){
        if(err) throw err
        res.end(data)
    }
    res.writeHead(200, {'content-Type':'text/html'})
    fs.readFile('./index.html', readIndex) //le pasamos como callback la funcion que hemos creado pues readfile espera una funcion con esos parametros, tambien se podria hacer de manera anonima
    //1) index.pipe(res) //pipe permite tranmitir la informacion de la respuesta, en este caso en res estaremos mandado el index.html
}

http.listen(3000, 'localhost')

console.log('servidor corriendo en http://localhost:3000')