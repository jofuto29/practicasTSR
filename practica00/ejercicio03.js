//null 
//se utiliza  para aquellos objetos que no tienen valor
//algunas funciones retornan null para indicar que no han encontrado ningun objeto apropiado

var objeto = 
console.log("este objeto es null, no tiene nada: " + objeto)

//number
//este tipo corresponde tanto a lo numeros reales como enteros
var numeroDefinido = 7
var sinDefinir 
//NAN
//Indica que alguna operacion numerica no tuvo sentido
var infinito = 0/0
console.log("0/0 " + infinito)

console.log("infinito - infinito = " + infinito + infinito)
console.log("numeroDefinido + numeroSin definir = "+ numeroDefinido + sinDefinir)
console.log("operacion sin sentido = " + "hola" * 2)
console.log("parseInt " + parseInt("jeje"))

//string
//los objetos String tienen por defecto la funcion lenght
//ademas de poder concatenarse utilizando la operacion +

let s1 = "this is an example"
let s2 = " a short sentence"

console.log(s1.length)
let s3= s1 + s2
console.log(s3.length)
console.log(s3)
