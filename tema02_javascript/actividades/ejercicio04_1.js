const http = require('http')
const url = require('url')
const qs = require('querystring')
const { getDefaultSettings } = require('http2')

http.createServer( function(request,response) {
    let query = url.parse(request.url).query
    let info = qs.parse(query).info
    let x = 'time'
    let y = 'dir'
    let date = new Date()
    response.writeHead(200, {'Content-Type':'text/plain'})
    switch( info ) {
        case 'x': response.end("time : " + date); break;
        case 'y': response.end('URL ' + query); break;
        default:
    }
}).listen(1337, "127.0.0.1")
console.log('Server running at http://127.0.0.1:1337/')

