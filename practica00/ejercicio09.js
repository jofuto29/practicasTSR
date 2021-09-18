//FUNCIONES PARTE2
//ARGUMENTOS POR VALOR O POR REFERENCIA diapo59

//si pertenecen a un tipo primitivo se pasa por valor
//si son objetos se pasa por referencia ( los Arrays son Objetos)

let myCar = {
    brand: "volvo",
    colour: "green"
}

function changeColour(car, newColour) {
    return car.colour = newColour
}
function changeCar(car) {
    car = { brand: "Ferrary", colour: "red" }
}

console.log(changeColour(myCar, "blue"))
changeCar(myCar)
console.log(myCar)

//lo que pasa aqui es que ne la primera funcion pasamos la refenrecia del objeto y le cambiamos una propiedad
//en la segunda funcion intemos cambiar la referencia del objeto cosa que javascript va a ignorar, pero la referencia va a quedarse como estaba

console.log("------------------------------------------")
//java script maneja las funciones como si fueran objetos comunes, por ellos pueden ser utilizadas como:
//--> valores y asignadas a variables
//--> argumentos en llamadas a otra funcion
//--> retornada como resultados de otras funciones

function square(x) { return x * x } //definicion inicial
let a = square //se pasa la referencia de la funcion a la variable a
let b = a(3) //se pasa el resultado de la invocacion de la funcion a la que referencia la variable a
let c = a //se pasa la referencia de la variable a que a su vez hace referencia a la funcion

console.log(a)
console.log(b)
console.log(c)

//mas ejemplos:
function product(a, b) { return a * b }
function suma(a, b) { return a + b }
function subtract(a, b) { return a - b }

let operacionesAritmeticas = [product, suma, subtract]
console.log(operacionesAritmeticas[1](2, 3)) // en el array de funciones, en posicion 1 le pasamos los parametros  2 y 3

//FUNCIONES ANONIMAS
let anonimo = function (a, b) { return a / b } //ojo que si no ponemos return devuelve undefined, es decir nada
console.log(anonimo(2, 2))

//son utilizadas muy amenudo como parametros para otras funciones:
function argumentoAnonimo(n, fn) {
    for (let c = 1; c <= 11; c++)
        fn(n * c)//recibimos la funcion anonima function(v) -- > fn(v) que ejecutara el console.log
}
argumentoAnonimo(2, function (v) { console.log(v) })