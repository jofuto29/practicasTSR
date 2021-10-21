/**
ENUNCIADO: Para acceder a ficheros, Node.js proporciona el módulo “fs”. Escriba un
programa que reciba un número variable de nombres de ficheros desde la línea de órdenes y
que escriba en pantalla el nombre del fichero más grande de todos ellos, así como su longitud
en bytes. Para ello, utilice la función fs.readFile() del módulo “fs”, cuya documentación está
disponible en https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback. No
utilice las variantes sincrónicas de esa función u otras funciones del módulo “fs”.
Para gestionar los argumentos recibidos desde la línea de órdenes tendrá que utilizar el vector
process.argv (https://nodejs.org/api/process.html#process_process_argv).
Si se reciben varios argumentos, necesitará utilizar clausuras para que el “callback” acceda
correctamente a la posición adecuada del vector process.argv[].
 */

const fs= require('fs')
var args = process.argv.slice(2)
var MaxName= 'NONE'
var MaxLength = 0
var counter = 0

function generator(name){
    return function(err,data){ //tengo que devolver esta funcion por obligacion del metodo read file, se tiene que tratar el callback de esta y sus parametros err y data
        if(!err){
            console.log("processing %s...", args[i])
            if(data.length > MaxLength ){
                MaxLength = data.length
                MaxName = name
            }
        }
        else{console.log("ERROR")}
        //counter++
        if(++counter == args.length){ //manera de incrementar el contador cada vez que se llama a esta funcion, y con el if necesario antes de terminar la funcion en si
            console.log("the longer file is " + '%s and its length is %d bytes', 
            MaxName,MaxLength)
        }
    }
}


for (var i = 0;i<args.length;i++){
    fs.readFile(args[i],'utf8',generator(args[i]))
}