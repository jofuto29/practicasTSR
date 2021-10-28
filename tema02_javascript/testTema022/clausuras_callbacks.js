/*
function a( x, y, z ) {
  let c = x + y
  z(c)
}

function b( x, y, f ) {
  let c = x*x - 4*x*y
  let z = c + f
  return z
}

cual admite un callback --> la funcion a(), necesita una funcion

-*--*---*-*--*-*--*--------------------------------------------------------------------
function a( c, d, e ) {
    let x = c + 4*d - 2
    e( d, x )
    return 0
}

mejor callback para esta funcion --:
function cb( x, y ) {
    console.log(x)
    console.log(y)
}  pues son los parametros que esta piediendo e, se le pasa los que necesita

/-----------------------------------------------------------------------------------------

function one(a, b){
    let c = a*b + 4*a
    function two(d) {
        return d*c
    }
    return two
}
 la funcion two es una clausura
----------------------------------------------------------------------------------------

1. Una clausura es una función que mantiene el ámbito en el que fue creada incluso los valores de las variabvles libres son recordadas en todas sus invocacionees
2. ¿Mantienen las clausuras los valores de las variables que han utilizado? --> Parcialmente. Mantendrán los valores de las variables de ámbitos más externos que hayan utilizado.
3. una variable libre es aquilla definida en un ambito externo y utilizada en el amgbito actual
4. un callback es Una función C que es pasada como argumento de otra función B. B llama internamente a C para que procese los resultados de B
*/