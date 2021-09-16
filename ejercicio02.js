//tipo primario undefined
//undefined se asgina aquellas variables que aun no se le ha asignado ningun valor
//si llamamos a una funcion con tres parametros y solo le pasamos un arg, estos dos ultimos recibiran undefined

let result

if (typeof result != "undefined")
    console.log(result)
    else console.log("result no tiene valor")

//ejercicio: buscar otra manera de comprobar si una variable es undefined

if (result == undefined) //funciona tanto con dos como con tres iguales  
    console.log("result no esta definido")
    else console.log("result esta definido")

console.log(result)