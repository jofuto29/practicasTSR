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
person['propiedadNueva2']="soy nuevo ttoo"
//de igual manera podemos modificar una propiedad ya existente
person.name="piterson"
//de igual manera que antes podemos modificar una propiedad con una notacion distinta:
person['last_name']= "hardman"
console.log(person)