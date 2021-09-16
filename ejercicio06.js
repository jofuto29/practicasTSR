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
let unElmento = user.slice(2)//copia desde ese elemento hasta el final
let varios = user.slice(1,2)//copia desde el 1 al 2 sin incluir el 2, osea solo el 1

console.log(unElmento)
console.log(entero)
console.log(varios)

user[5] = "elemento5"
console.log(user)

//pero podemos usar para añadir elementos al final y al principio:
//unshift() al principio y push() al final
//por otro lado podemos eliminar el primer con shift() y el ultimo con pop()

