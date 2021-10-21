/**
ENUNCIADO: Sólo hay un hilo de ejecución en Node.js. Esto implica que no tendremos por qué
preocuparnos sobre la protección de variables compartidas con locks o cualquier otro
mecanismo de control de concurrencia.

Un buen principio para razonar sobre la lógica de un programa asincrónico es considerar que
TODOS sus callbacks se ejecutarán en un turno posterior al que ahora ejecuta el código que los
pasa como argumentos.
 
*/

const fs = require('fs')
const path = require('path')
const os = require('os')
var rolodex={}
function contentsToArray(contents) {
    return contents.split(os.EOL) //split devuelve un nuevo array separando el que tiene
}

function parseArray(contents,pattern,cb) {
    for(let i in contents) {
        if (contents[i].search(pattern) > -1)
        cb(contents[i])
    }
}

function retrieve(pattern,cb) {
    fs.readFile("rolodex", "utf8", function(err,data){
        if (err) {
            console.log("Please use the name of an existant file!!")
        }else {
         parseArray(contentsToArray(data),pattern,cb)
        }
    })
}

function processEntry(name, cb) {
    if (rolodex[name]) {
        cb(rolodex[name])
    } else {
        retrieve( name, function (val) {
            rolodex[name] = val
            cb(val)
        })
    }
}

function test() {
    for (let n in testNames) {
        console.log ('processing ', testNames[n])
        processEntry(testNames[n], function generator(x) {
            return function (res) {
                console.log('processed %s. Found as: %s', testNames[x], res)
        }}(n))
    }
}

const testNames = ['a', 'b', 'c']
test()
