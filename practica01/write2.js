//Escritura asíncrona de ficheros
const fiSys = require('./fiSys');

fiSys.writeFile('./textos/escritura.txt','contenido del nuevo fichero en la capeta textos',cbError,cbEscritura);

function cbEscritura(fichero){
console.log("escritura realizada en: " +fichero);
}

function cbError(fichero){
console.log("ERROR DE ESCRITURA en " +fichero);
}