//FUNCIONES -- NOTACION DE FLECHA
//son funciones anonimas como las que hemos visto pero con una sintaxis distinta, la notacion de flexa =>
//barias cosas importantes:
//la palabra function no es necesaria
//los parentesis son opcionales cuando solo hay uno
// => depues sigue la lista de parametros
//depues de los parametros  una sentenecia  con el resultado a devolver o varias encerradas entre llaves

//veamos alguno ejemplos:
double = x => x * 2

//es lo mismo que:
function double2(x) {
    return x * 2
}

console.log(double(2))
console.log(double2(2))

//EJERCICIO
//Escribir una función doCheckPasswd() con tres parámetros:
//input
//correctPassword
//func

//Esa función: Compara las cadenas pasadas en los primeros dos argumentos.
//Si son iguales, entonces se llama a la función pasada como tercer argumento.

doCheckPasswd = (input, correctPassword, func) => {
    if (input === correctPassword)
        func()//si queremos que esto se ejecute tendremos que decir que esto es una funcion por eso ponemos los parentesis
    else
        console.log("las cadenas no son identicas")
}

doCheckPasswd("Erroneous", "correct", function () { console.log("acces granted") })
console.log("--------------------------------------------------")
doCheckPasswd("Correct", "Correct", function () { console.log("sending Data") })


//EJERCICIO
//extender el siguiente programa:
/*
function product(a, b) { return a * b }
function suma(a, b) { return a + b }
function subtract(a, b) { return a - b }

let operacionesAritmeticas = [product, suma, subtract]
console.log(operacionesAritmeticas[1](2, 3)) 

escribiendo otra funcion WithFirstNumbers() con 3 parametros
    n --> el ultimo numero natural a utilizar
    op--> funcion a ser aplicada en cada numero natural procesado
    op2 --> funcion a ser aplicada en el resultado op(i) para acumular todos los resultados(alguna de la funciones del array)
*/

let operacionesAritmeticas = [
    function (a, b) { return a * b },
    function (a, b) { return a + b },
    function (a, b) { return a - b }
]

console.log(operacionesAritmeticas[1](2, 3))
function doWithNFirstNumber(n, op1, op2) {
    let cont = 0;
    let contAnt = 0;
    for (let i = 1; i <= n; i++) {
        cont = op1(i)
        contAnt = op2(cont, contAnt)
        console.log("iteracion " + i + " valor de cont: " + cont)
        console.log("iteracion " + i + " valor de contAnt: " + contAnt)
    }
    return contAnt
}
console.log(operacionesAritmeticas[1])
console.log(doWithNFirstNumber(4, x => x * x, operacionesAritmeticas[1]))

console.log("----------------------------------------------------")
console.log(doWithNFirstNumber(5, x => x % 2 ? 1 : 0, operacionesAritmeticas[1]))
//%-->devuelve el resto
//?-->

//hay muchas mas funciones que admiten otras funciones como argumento por ejemplo:
//ARRAY.map(func) --> crea un array nuevo con los resultados obtenido de aplicar la funcion pasada por argumentos a todos los elementos del array

let numbers = [1, 5, 10, 15]
let doubles = numbers.map(x => x * 2)
console.log(doubles)