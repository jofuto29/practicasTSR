let result = 0;
console.log(result)

for(let cont = 1; cont<10; cont++)
    result = result + cont
//no podemos imprimir cont fuera del for pq esta declarado de manera local
console.log(result)
//console.log(cont)

//nos imprimira undefined pues no tiene valor y NaN pues
//no intentamos hacer una operacion matematica con una variable que no tiene valor
