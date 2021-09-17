//FUNCIONES

//una funcion es como en todos los lenguajes de programacion,
//una secuencia de intrucciones que puede llamarse en qualquier parte del codigo

function product(a,b){
    return a*b
}
console.log(product(2,3))

//si una funcion no utiliza el return, su ejecucion devuelve undefined
function sinReturn(person){
    console.log("hello " + person + " inside fuction ")
} 
console.log("hello out of fuction :" + sinReturn("mike Ross"))

//los parametros de las funciones se comporta como variables cuyo ambito esta limitado dentro de la funcion
//cuando una funcion se llama con menos argumentos de los declarados, los parametros no utilizados = undefined
//cuando una funcion se llama con mas argumentos los sobrantes son rechazados

//se puede asginar valores por defecto a una funcion, si no se le pasa nada seran esos valores los que se usaran:
function add(x = 0, y = 0){
    return x * y
}

console.log(add(2))
console.log(add(2,3))

//tambien podemos declarar un numero desconocido de argumentos mediante ...
function add2(x = 0, y = 0, ...others) {
    let sum = 0;
    console.log(x)
    console.log(y)
    if(others.length >0){
        for(let i = 0; i<others.length;i++)
            sum+=others[i]
    }
    return x + y + sum;
}

console.log(add2(2,3,4,5,6,7,8,9,0,10,2,3,4,5))
let resultado = add2({prop1: 12}, 2, 3)
console.log(resultado)
console.log(resultado[2]) //que mierda esta pasando aqui, se transforma en un string, un objeto o un array ??

