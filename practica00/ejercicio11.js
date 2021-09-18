//8. AMBITO --> DESARROLLADO EN EL TEMA 2

//dos ambitos tradicionales en javaScript:
//global(accedidos desde qualquier parte del cofigo)
//local(dentro de funciones, pues cada una define su ambito local)
//estas variables podran ser accedidas desde la propia funcion o 
//de otras funciones definidas en el ambito local CHILDREN SCOPE

//si el nombre de una variable coincide con alguno del ambito global,
//entonces se utiliza el elemento local, es decir, el ambito mas cercano

/*
function a() {
    let a1 = 1
    b(a1)
}

function b(p1) {
    let b1 = 2
    console.log(a1)
    console.log(b1)
    console.log(gl1)
}
a()
let gl1 = 0

si lo dejaramos asi se generaria un error pues la funcion b no puede usar la variable a1

dos soluciones, usar el argumento que hemos pasado desde a que es una copia de a1, por tanto puede leer a1 pero no escribir
o bien utilizar el CHILDREN SCOPE: que podra tanto leer como escribir en a1
*/

function a() {
    let a1 = 1
    b(a1)
    function b(p1) {
        let b1 = 2
        console.log(a1)
        console.log(b1)
        console.log(gl1)
    }
    //console.log(b1) no podemos usar b1 aqui pues esta declarado en la funcion anterior, es decir en ese ambito
}
a()
var gl1 = 0 //si pusieramos let estaria definida en el ambito global, pero hemos llamado primero a la funcion por tanto todavia no exite ni en el ambito gobal
//sin embargo con var esto no pasa, podemos utilizarla antes incluso de ser declarda
//b()
let gl2 = 0
b() //podemos llamar a la funcion antes de ser definida pues, si lo esta aunque este arriba
function b() {
    console.log("valor gl2 " + gl2)
    console.log("valor gl1 " + gl1)
}


//EJERCICIOS  diapo 75