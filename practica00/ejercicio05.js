//coercion de tipos
let  person = "person persona"
console.log(8*null) //0
console.log("5" - 1) //4
console.log("5" + 1) //51
console.log("five" * 2) //nan
console.log("5" * "2") //10 
console.log(5 + [1,2,3]) //51,2,3

if("5" > 3)
    console.log("5 string es > a 3 number")

if("6" == 6)
    console.log("6 string es == a 6 number")

if("" == false)
    console.log("cadena vacia es == false")
//podemos controlar la coercion de tipos
console.log("----------------------")
console.log("boolean undefined = " + Boolean(undefined))
console.log("boolean undefined sinedo string = " + Boolean("undefined"))
console.log("boolean Nan  = " + Boolean(NaN))
console.log("boolean Nan siendo string = " + Boolean("NaN"))
console.log("number true = " + Number(true))
console.log("number false = " + Number(false))
console.log("number john = " + Number("john"))
console.log("parseInt 10 years = " + parseInt("10 years"))
console.log("boolean user = " + Boolean(person))
//la coercion de tipos puede evitarse usando la comparacion estricta ===
//una varible vacia dara false 
console.log("-------------------------")
console.log(null == undefined)
console.log(null === undefined)
console.log("5" == 5)
console.log("5" === 5)
console.log(NaN == NaN)
console.log(NaN === NaN)


//como podria comprobarse si person ha sido definida, 
//teniendo en cuenta que si es 0 o una cadena vacia 
//decimos que ha sido definida

if(person===0 || person==="")
    console.log("person exist")

if(person!= null && person != undefined)
    console.log("person exist")

//lo que ocurre es que el if actua como un boolean
//si persona no tiene nada dara false
//si persona vale 0, al hacer boolean dara false y lo mismo con la cadena vacia