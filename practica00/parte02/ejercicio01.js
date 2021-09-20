//ejemplos erroneos

/*algunas funciones proporcionan sus resultados asincronamente:
    al utilizar CALLBACKS:
    --> argumentos para una funcion A que tambn son funciones y que seran
    incovadas caundo A termine su ejecucion

    -->si A utiliza alguna llamada al sistema que deje al invocador en
    estado suspendido, A necesitara un largo periodo de timepo para terminar

    -->esto rompe la ejecucion secuencial del proceso pues los callbacks
    se ejecutan mas tarde
    */

//supongamos el sigueinte programa que muestra el fichero mas grande de 
//una lista de ficheros recibida como argumentos

const fs= require('fs')
var args = process.argv.slice(2)
var MaxName= 'NONE'
var MaxLength = 0

for(var i = 0; i < args.length; i++){
    fs.readFile(args[i],'utf8',
    function(err,data){
        if(!err){
            console.log("processing %s...", args[i])
            if(data.length > MaxLength ){
                MaxLength = data.length
                MaxName = args[i]
            }
        }
        else{console.log("ERROR")}
    })
}

console.log("the longer file is " + '%s and its length is %d bytes', MaxName,MaxLength)


//veamos porque este codigo es erroneo:
/*
las primera cuatro lineas de codigo, se importa el modilo fs, se crea el array
args con las ruta de los archivos y se asginan las variavles maxname y maxlength

entramos en el bucle con 4 iteraciones de 0 a 3, y en cada iteracion se llama la
funcion readFile cuyo tercer argumento es otra funcion, es decir un callback
que se ejcutara cuando termine esta primera

en cada llamada a readFile se crea un nuevo  hilo que se supendera cuando 
el SO recibe esa llamada. mientras que el hilo principal continuara su ejecucion

cuando el hilo pricipal termina toda su ejecucion imprime el ultimo console
si que se haya modificado ninguna variable pues los demas hilos siguen suspendido
ahora este hilo buscara otros turnos de ejecucion

cuando terminen de leer el archivo los callbacks pasaran a preparados, el timepo
difiere dependiendo de la longitud del archivo

cuando se ejecutan, el hilo principal a terminado el bucle for por tanto
la variable i es =4 es por ello que se miestra processing undefined pues en
process.argv[4] no hay nada, hay del 0 al 3

EJERCICO02 DEPURAMOS EL CODIGO
*/