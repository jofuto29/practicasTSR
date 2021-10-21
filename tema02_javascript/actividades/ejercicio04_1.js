const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

http.createServer( function(request,response) {
    let query = url.parse(request.url).query //pathURL = path.basename(request.url)
    let date = new Date()

    console.log(query)
    switch( query ) {
        case 'time': response.end("time : " + date); break;
        case 'dir': response.end('URL ' + path.join(__dirname, request.url)  //path.join para listar la ruta completa del directorio en el que se encuentra este archivo
                                + fs.readdirSync("./")); //readdirSync para listar todos los archivos que se encuentren en el directorio que le pasamos
        break;
        default:
            if(console.log(query == null)){
                response.writeHead(200)
                fs.readFile(query, function(err,data){
                    if(err) throw err
                    response.end(data)
                })
            }else{
                response.writeHead(404)
                response.write('not found')
            }
    }
}).listen(3000, "127.0.0.1")
console.log('Server running at http://127.0.0.1:3000')

