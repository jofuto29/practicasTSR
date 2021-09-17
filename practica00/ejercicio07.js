//seguimos con los tipos estructurados, Pasamos a los objetos

//un objeto es un conjunto no ordenado de para clave/valor, el valor de
//esas claves puede ser qualquier literal de tipo primitico, funcion u otro objeto:



let person = {
    name: "Pitson",
    last_name: "hdman",
    age: 25,
    adress: {
        city: "Valencia",
        street: "Tres cruces",
        number: 12
    },
}

console.log("objeto persona : " + person)
console.log(person)
//si ponemos un string cuando vamos a mostrar un objeto, on nos lo mostrara , simplemente nos informa que es un objeto
//tambien podemos crear objetos de manera dinamica, es decir podemos crear un objeto vacio e ir añadiendo propiedades:

person.nuevaPropiedad ="hola soy nueva en este objeto"

//otra manera de declarar una nueva propiedad, es con declaracacion array:
person['propiedadNueva2']="soy nuevo too"

//de igual manera podemos modificar una propiedad ya existente
person.name="piterson"

//de igual manera que antes podemos modificar una propiedad con una notacion distinta:
person['last_name']= "hardman"

console.log(person)

//mediante funciones por ejemplo podemos acceder a propiedades de los objetos, pasandole a la funcion dicho objeto como argumento

function quienEsQuien(person){
    console.log("nombre de la persona: " + person.name)
}

quienEsQuien(person)

//pero que pasa cuando accedemos a un parametro que no esta definido:
console.log("propiedad no definida: " + person.District) //undefined

//EL OBJETO JSON
//es un formato de texto utilizado para serializar ojetos cuando deben transmitirse por la red
//cada identificador de propiedad esta encerrado entre comillas dobles
//tenemos dos metodos:
    // JSON.stringify(Objeto) --> convierte un objeto js en una cadena json
    // JSON.parse(String)     --> convierte una cadena JSON en un objeto js

console.log("vamos a convertir el objeto persona utilizado anteriormente en una cadena JSON")
let objJson = JSON.stringify(person)
console.log(objJson)

console.log("revirtamos el cambio")
let objJs = JSON.parse(objJson)
console.log(objJs)

//podemos recorrer mediante bucles un objeto, vemoas como hacerlo:
//for(variable in objeto), otra manera de crear un bucle for
//la variable adoptara el nombre de de la propiedad que esta recorriendo

for(let i in person){
    console.log("property " + i + ": " + person[i])
}

//como podemos ver podemos tratar a un objeto como si fuera un array
//tambien podemos usar como un array un objeto dentro de un objeto
function recorreObjetoInterno(objeto){
    for(let i in objeto){
        console.log("property adrees " + i + ": " + objeto[i])
    }
}
console.log("------------------------------------------------")
//mediante funciones:
for(let i in person){
    if(person[i] == person.adress){recorreObjetoInterno(person[i])}
    else{
        console.log("property " + i + ": " + person[i])
    }
}