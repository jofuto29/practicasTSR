const http = require('http');
http.createServer(function (request, response) {
 // response is a ServerResponse.
 // Its writeHead() method sets the response header.
 response.writeHead(200, {'Content-Type': 'text/plain'})
 // The end() method is needed to communicate that both the header
 // and body of the response have already been sent. As a result, the response can
 // be considered complete. Its optional argument may be used for including the last
 // part of the body section.
 response.end('Hello World\n')
 // listen() is used in an http.Server in order to start listening for
 // new connections. It sets the port and (optionally) the IP address.
}).listen(1337, "127.0.0.1")
console.log('Server running at http://127.0.0.1:1337/')

/*
COSAS IMPORTANTES:
este servidor retorna la cadena hello word cuando alguien
accede a la direccionIP que hemos asignado en el puerto 1337
Pero un servidor deberia devolver el html de la URL utilizada

Para lograr esta funcionalidad debemos terner en cuneta un par de cosas:

!)request( objeto de la clase ClientRequest):
es el primer argumento del callback utilizado en http.createServer()
mantiene una propiedad llamada "URL" es decir que si en el navergador se escribio http://127.0.0.1:1337/dir1/pagina.html
la propiedad request.url = “dir1/pagina.html”

Para acceder a los ficheros conviene el modulo fs dado
que el servidor deberia leer el contenido del fichero pagina.html ubicado en el directorio dir1
fs.readFile(”dir1/pagina.html”, function (error,content){…} )

2) Response segundo argumento del callback cuyo primer
parametro sera indicativo del error que se haya podido
producir y el segundo mantiene el contenido completo del fichero
En caso de error:
    response.writeHead(404)
    response.write('not found')
En caso de acierto:
    response.writeHead(200) indica en la cabecera que la peticion ha podido resolverse sin problemas
    response.write(content) “content” era en segundo parámetro del “callback” y recogía el contenido del fichero en el método readFile())

Para formar correctamente el nombre de ruta absoluto del fichero HTML a devolver al
navegador, se podrá utilizar el método join() :
    En NodeJS existe un atributo “global” llamado “__dirname” que contiene el nombre de ruta absoluto del directorio actual
    es necesario “const path=import(’path’)”
    para path.join(__dirname, request.url)

El método parse() del módulo “url” permite obtener el objeto codificado en la cadena de una URL. La
propiedad query almacena la información correspondiente a los parámetros de consulta.
    necesario: “const url=require(’url’)
    url.parse(https://intranet.upv.es/pls/soalu/sic_menu.Personal?P_IDIOMA=c).query
    proporciona: “P_IDIOMA=c”.
puede ser mas complejo:
    Por ejemplo (con un “require” previo del módulo “querystring”):
    querystring.parse(http://www.booking.com/searchresults.es.html?src=index& … &ss=Valencia&checkin_monthday=1&checkin_year_month=2015-8& …).ss
    proporciona “Valencia”




*/