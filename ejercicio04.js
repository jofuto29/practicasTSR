let result
console.log(result)

for(let cont = 1; cont<10; cont++)
    result = result + cont
//no podemos imprimir cont fuera del for pq solo esta declarado de manera local
console.log(result)

//nos imprimira undefined pues no tiene valor y NaN pues
//no intentamos hacer una operacion matematica con una variable que no tiene valor
