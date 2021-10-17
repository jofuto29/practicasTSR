function table(x) { // Prints column x of a (1..10) multiplication table
    for (let j=1; j<11; j++)
        console.log("%d * %d = %d", x, j, x*j)
    console.log("")
}

function allTables() {
    for (let i=1; i<11; i++)
        table(i)
}

//table(5, 4, 1)

//remplazo linea12 en el apartdo b pot table(table(2))
//table(table(2))

//remplazo linea 12 en el apartado c por allTables(table(30),table(20),table(10))
allTables(table(30),table(20),table(10))


console.log(table(2)) // se imprimiria la tabla del 2 en primer lugar y como no devuelve nada console.log imprime undefined, no NAn porque no esta esperando un numero






//--------------------------------------------------------------------------------------------------------------------------------------------------------
/*
A)Describa cuál es la salida proporcionada por el programa anterior. Justifique si tiene o no algún efecto el pasar más de un argumento en la línea 12. "//table(5, 4, 1)""
    va a llamar a la funcion tables:
        el primer numero es 5, entrara en el bucle e imprimira:
            5 * 1 = 5
            5 * 2 = 10 ... 5 * 10 = 50
            luego imprimira """"
        el segundo numero es 4 y hara lo mismo con 1 ERROR


    CORRECION(EJECUTANDO EL PROGRAMA) --> ERROR, solo se llama una vez a la funcion table, aunque se le pasan mas argumentos esos argumentos se derperdician por lo tanto
    solo impimira la tabla del 5.


B)Suponga que ahora reemplazamos la línea 12 original del programa anterior por la siguiente, ¿qué salida proporciona el programa en este caso? ¿por qué? "//table(table(2))"
    imprimira la tabla del 2 en la llamada mas interna y sera lo primero que salga por pantalla, pero luego la segunda llamada pasa sin arguemntos porque table no devuelve ningun valor
    por tanto impimira la tabla con valores null 

        ERROR   con valores NaN --< NO ES UN NUMERO, LA FUNCION ESPERA UN NUMERO



c) Suponga que ahora reemplazamos la línea 12 original del programa por la siguiente, ¿qué salida proporciona el programa ahora? ¿por qué?  "allTables(table(30),table(20),table(10))"
    se ejecutara la tabla del 10 la del 20 y la del 30 en ese orden y luego  se ejecutara la funcion alltables, que no tiene parametros y que imprime todoas las tablas del 1 al 10
    en total se deben imprimir 13 tablas y las tabla del 10 repetida

    ERROR --> el orden es al reves, si que es verdad que si se pasa como parametros se hace desde el mas interno al mas externos como pasaba en el apartado anterior, sin embargo aqui todos
    los parametros pertenecen al mismo nivel por asi decirlo en este caso se recorre de izquierda a derechas como es tradicional y las tablas mostradas seran la del 30 la del 20 las del 10 y 
    luego las que imprime allTAbles


D) A partir de los resultados obtenidos en los apartados anteriores, justifique si JavaScript acepta y puede tener algún efecto que se pasen más argumentos de los que espera
una función determinada.
    acepta los argumentos pero no los va a usar pues no tiene variable para guardarlos, no afecta en nada pasar mas argumentos de los que necesita
*/