let fs = require("fs")

fs.readFile('A.txt', {encoding: 'utf8'},function(error, datos){
    if(error){
        console.log("ERROR " + error)
    }else{
        console.log("datos leidos")
        console.log(datos)
    }
})