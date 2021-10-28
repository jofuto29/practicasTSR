//ERRORES SEMANTICOS

function sum(A){
    return A.reduce((x,y)=>x+y)
}
//la operacion reduce devuelve la suma de todos los elementos del array
console.log(sum([2,3,5]))

//los errores pueden vernir si por ejemplo no le pasamos un array al metodo sum
//para evitar eso podemos hacer lo sigueinte.

function sum2(A){
    if(!(A instanceof Array)) 
        throw "A must be Array"
    else {return A.reduce((x,y)=>x+y)}
}

console.log(typeof A)
/*
utilizaremos:
    instanceof --> para objetos... array es un objeto
    typeof --> para tipos primitivos
*/