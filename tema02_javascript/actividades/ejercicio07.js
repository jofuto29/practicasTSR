/**
ENUNCIADO: Vamos a desarrollar una versión sencilla de la orden grep de los sistemas UNIX.
Para ello debemos escribir un programa Node.js que acepte al menos dos argumentos desde la
línea de órdenes. Su primer argumento será la palabra a buscar y todos los demás argumentos
serán los nombres de múltiples ficheros de texto en los que se buscará la palabra mencionada.
Cada vez que encontremos esa palabra a buscar, nuestro programa deberá mostrar en su
salida estándar una línea con la información siguiente:
nombre-de-fichero : número-de-línea : contenido-de-esa-línea
El programa debe aceptar una lista de nombres de fichero de cualquier longitud y debe utilizar
fs.readFile() para leer cada fichero.
NOTA: Usa la operación “split()” para dividir el contenido del fichero en un vector de líneas de
texto y la operación “includes()” para averiguar si la palabra a buscar está contenida en una
línea. Observa que ambas operaciones son métodos de la clase String en JavaScript.
 */

const fs = require('fs')
console.log("ORDEN GREP SISTEMAS UNIX")
var args = process.argv.slice(2); //cortamos desde 2 para que se nos queden solo los argumentos
var palabra = args[0]
console.log(palabra)

console.log("--------------------------------------------------------------------------------------")
function buscarPalabra(documento){
    return function(err,data){
        if(err){ console.log("error al leer el documento")}
        else
        {
            console.log(data)
            var lineas= data.split("\n")
            console.log(lineas)
            for(i = 0; i< lineas.length;i++){
                var palabras= lineas[i].split(" ")
                console.log(palabras)
                for(j=0;j<palabras.length;j++){
                    if(palabra == palabras[j]){console.log("palabra: " + palabra + 
                                                        " encontrada en el fichero: " + documento + 
                                                        " numero de linea: "+ i + 
                                                        " contenido de la linea: " + lineas[i])}
                }
            }
        }
    }
}

for (var i = 1;i<args.length;i++){
    fs.readFile(args[i],'utf8',buscarPalabra(args[i]))
}