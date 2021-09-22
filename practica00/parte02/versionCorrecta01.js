//diapo 30 PRIMERA VERSION CORRECTA
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

/*
otra manera de hacer lo mismo seria meter el resultado que esperamos en el callback de readfile,es decir lo mismo que hacemos aqui pero sin necesidad de crear una funcion aparte
    fs.readFile(args[i],'utf8', function(err,data) {
        if (!err) {
            console.log('Processing %s...', args[i])
        if (data.length>maxLength) {
            maxLength=data.length
            maxName=args[i]
        }
    }
    if (++counter==args.length) console.log('The longest file is %s‘ +' and its length is %d bytes.', maxName, maxLength) })
    //depues de la funcion callback y antes de cerrar el metodo readFile, meter la comprobacion de si todos los archivos han sido tratados es decir han pasado por todo el metodo
    y por tanto el contador debe haberse incrementado
*/