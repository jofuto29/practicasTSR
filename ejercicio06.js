//TIPOS ESTRUCTURADOS

//ARRAYS
//similar a una lista que posee algunso metodos:
//length, indexOf(), pop(), push(), shift(), map(), slice()...

let user = ["chloe", "Martin", "Adrian", "Danae"]

for(let c = 0; c< user.length;c++)
    console.log(user[c])

let newUser = user
console.log(user)
console.log(newUser)
newUser[2] = "nuevoElemento"
console.log(newUser)
console.log(user)

//lo que estamos haciendo aqui no es copiar el array igual
//lo que hacemos es copiar una referencia de ese array a la nueva variable
//y es por ello que al modificar uno modificamos todo, pues es el mismo array con 
//dos variables que le referencian

//para copiar utilizamos el metodo slice
let entero = user.slice()
let ElmentoHastaFinal = user.slice(2)//copia desde ese elemento hasta el final es decir el elemento 2 y 3
let unElemento = user.slice(1,2)//copia desde el 1 al 2 sin incluir el 2, osea solo el elemento 1

console.log(ElmentoHastaFinal)
console.log(entero)
console.log(unElemento)

user[5] = "elemento5"
console.log(user)
console.log(user[5])
console.log("hemos añadido un elemento en la posicion 5, pero en la posicion 4 no hay nada, hay un empy item, es decir un elemento vacio, añadiremos un elemento mas para no dejarlo vacio")

user[4] = 3

//para insertar elementos en un Array debemos utilizar posiciones:
//eso sobreescribe el contenido previo de esas componenetes, hay otras maneras de hacerlo:
//podemos añadir al principio desplazando todos los elementos una posiciones sin sustituir ningun elementos con unshift(elemento,...)
//podemos añadir al final mediante el metodo push(element1,...)
//pero tambien podemos eliminar del principio mediante shift(), y al final mediante pop()

console.log("2 elemento al principio")
user.unshift("elemento1",2)

console.log(user)
console.log("2 elemento al final")
user.push("elemento al final", 2)

console.log(user)

console.log("ahora vamos a eliminar un elemento al principio")
user.shift()

console.log(user)

console.log("ahora vamos a eliminar elementos al final")
user.pop()

console.log(user)

//hay algunos pseudoArrays que conviene convertilo en arrays:

function list(){
    console.log("pseudoArray :" + arguments) 
    return Array.from(arguments)
}

let list1 = list(1,2,3)
console.log("depues de llamar a la funcion y convertir los argumentos que le paso de pseudoArray que es como lo recibe a Array:")
console.log("Array : " + list1)
//aunque un pseudoArray, es un array que funciona practicamente igual que un array pero para no complicarnos
//lo intetaremos evitar pasandolo a array