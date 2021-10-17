function a3(x) {
    return function(y) {
            return x*y
    }
}

function add(v) {
    let sum=0
    console.log("LOGITUD DEL VECTOR " + v.length)
    for (let i=0; i<v.length; i++)
        sum += v[i]
    return sum
}

function iterate(num, f, vec) { //[3,5,7,11] AMONUT = 2
    console.log(f);
    let amount = num
    let result = 0
    if (vec.length<amount)
        amount=vec.length
    for (let i=0; i<amount; i++){
        console.log("RESULT DENTRO DEL BUCLE " + result  +"\n")
        result += f(vec[i])
    }
    return result
}
let myArray = [3, 5, 7, 11]
//console.log(iterate(2, a3, myArray))
//console.log(iterate(2, a3(2), myArray))
//console.log(iterate(2, add, myArray))
//console.log(add(myArray))
//console.log(iterate(5, a3(3), myArray))
console.log(iterate(5, a3(1), myArray))
    

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Ejecute ese programa y diga cuál es el resultado de la ejecución de cada una de las líneas siguientes, justificando por qué se da en cada caso:

A) línea 25.
 fijate que la funcion a3 se pasa sin argumentos en esta parte, vamos a seguir la traza y luego comprobamos que sea correcta:
 amount = 2 y vec es [3,5,7,11]
 pasamos del if pues la longitud del vector no es menor a la de amount y entramos en el bucles, en la sisha del asunto:
    SE EJECUTA 2 VECES ESTE BULCE
        en la primera iteracion el resultado como un string de 0 con la funcion en string en la segunda iteracion lo mismo 
    
    CONCLUSION
    lo que ocurre es que al intentar sumar el 0 con una funcion lo unico que puede hacer javascript es pasarlo todo a un strign y concatenarlo que es lo que ocurre aqui


B) línea 26.
    de igual manera que antes el bucle se ejecuta dos veces pero con una pequeña diferencia, el parametro f que es la funcion que le psamos es a3(2) que se resuelve antes de empezar con
    esta fucion por lo tanto en f esta vez tenemos 
        funcion(y){2*y}
        ahora la primera iteracion devuelve result = 6
        y en la segunda iteracion resulta = 6 + 10 = 16


c)  línea 27.
    add espera un vector para poder entrar en el bucle y le pasamos un unicor valor, cuando se compara la condicion de v.lenght el valor es undefined pues no es un vector y devuelve 0
    el resultado porque no se suma nada a la variable sum

    IMP si hacemos operaciones con tipo de dato incorrecto como en este caso --> undefined


D) LINEA28
    sumara todas las compoenntes del array


IMP SI HAY MAS DE DOS INTRUCCIONES PORNER LLAVES

*/