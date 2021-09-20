//9. CONTEXTO DE EJECUCION

/*contiene todas las variables definidas en el contexto acutal y aquellas
accesibles a traves de la cadena de ambitos

cuando el programa empieza sus funciones y variables globales se van creando
se crea la referencia this como sinonimos de global

cada vez que se invoque a una funcion y antes de emepzar a ejecutarse
se crea el contexto de esa funcion

*/

//EJEMPLO01
computeResults(10) //se queda encolado hasta que se declare la funcion
function computeResults(x){
    let y = formatResult(x) //se llama a la subfuncion
    console.log(gl1 + " " + y)
    function formatResult(){
        console.log("valor de inp/x en la subfuncion " + x)
        return String(x)
    }
}
console.log("definicion de gl1")
var gl1 = "goblalContext1"
//debemos pensar que las funciones no son variables, se puede llamr aunque 
//no esten defenidas y se jecutaran en ese orden
//en este caso se llama a la primera funcion y nada mas empezar con x =10 
//se llama a la subfuncion que transforma ese 10 en un string, termina su ejecucion
//y se devuelve a la funcion original que imprime su console.log. por ultimo se declara la variable var del final

console.log("------------------------------\n")
//EJEMPLO02

computeResults(10)
console.log("------------------------------\n")

//EJEMPLO03
let tables = []
for(var i = 1; i<11; i++)
    tables[i]=x=>x*i

//se ha creado un array de funciones
console.log(tables[5](2))
console.log(tables[9](2))
/*
lo que ocurre en este tercer ejemplo es que si lo dejamos tal y como esta, la
variable i no tiene el valor que esperamos, pues para todos las posiciones
que tenemos en el array la variable i es la del ultimo contexto de ejecucion
pues e ha guardado ese ultimo contexto en todas las funciones

lo que tenemos que hacer para solucionar el problema es crear un contexto de esa
variable en concreto para cada una de las funciones y para ello simplemente
utilizamos la sentencia LET para declarar la variable i

lo que ocurrira en cada iteracion es que se definira un nuevo ambito de bloque
que se dejara en la pila de contexto al iniciar la iteracion y se 
eliminara al terminar guardando en el array el valor de la variable i de 
ese contecto
*/

for(let i = 1; i<11; i++)
    tables[i]=x=>x*i

console.log(tables[5](2))
console.log(tables[9](2))

//EJEMPLO04
//en una clausura una funcion interna mantiene el contexto de ejecucion
//de cuando fue creada

console.log("------------------------------\n")
function createF(x){
    return y=>x*y
}

var table5= createF(5)
var table10= createF(10)
//tienen contexto de ejecucion diferentes pues han creado su funcion en
//diferentes momentos
console.log(table5(2))
console.log(table10(2))


//EJERCICIO
/*
Reescribe el programa mostrado en la página 80, utilizando
clausuras para proporcionar una solución adecuada.
 Con este fin, se debería reemplazar la línea 4 original con otras líneas
que definan una clausura y asignar la función devuelta a la
componente del Array "tables".
*/
console.log("------------------------------\n")
for(var i = 1; i<11; i++)
    tables[i]= createF(i)

//si ejecutas el for, todo esta en el mismo contexto, si quieres dejar
//declarada como var i, tendremos que crear contexto para cada funcion
//para ello utilizamos la funcion declarada antes para crear un nuevo contexto
//para cada funcion con cada valor de i que le pasemos
console.log(tables[5](2))
console.log(tables[9](2))


//objetos globales que proporcionan informacion sobre el contexto de ejucion

let procArgs = process.argv.slice(2,3)
console.log(procArgs)

/* para argumentos hola mundo
    slice(0):
        [
        'C:\\Program Files\\nodejs\\node.exe',
        'D:\\cursos\\curso2021\\practicas TSR\\practica00\\ejercicio12',
        'hola',
         'mundo'
        ]
    slice(1)
        [
        'D:\\cursos\\curso2021\\practicas TSR\\practica00\\ejercicio12',
        'hola',
        'mundo'
        ]
    slice(2)    [ 'hola', 'mundo' ]

    slice(3)    [ 'mundo' ]

    slice(2,3)  [ 'hola' ] //cogeme del 2 hasta x sin coger x

*/ 