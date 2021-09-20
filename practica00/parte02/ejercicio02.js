//0.2 DEPURANDO
//nodejs incluye un depurador que se activa al añadir el objeto inspect
//--> node inspect programa.js argumentos
/*
cont (c) Continuar la ejecución
next (n) Ejecutar la siguiente instrucción
step (s) Seguimiento dentro de la función invocada
out (o) Seguimiento sin entrar en la función invocada
pause Pausar la ejecución
watch(‘expresión’) Mostrar el valor de la expresión
.exit Finalizar la sesión de depuración actual
*/

//añadiremos un debugger al inicio de cada iteracion y de cada callback

const fs= require('fs')
var args = process.argv.slice(2)
var MaxName= 'NONE'
var MaxLength = 0

for(var i = 0; i < args.length; i++){
    debugger

    fs.readFile(args[i],'utf8',
    function(err,data){

    debugger
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

console.log("the longer file is " + '%s and its length is %d bytes', 
MaxName,MaxLength)