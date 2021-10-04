const fs = require('fs');
fs.writeFile('escritura.txt', 'contenido del nuevo fichero', 'utf8',
 function (err) {
     console.log("funcion callback, he terminado de leer el fichero, pasao ahora a ejecutar esta funcion");
 if (err) {
 return console.log(err);
 }
 console.log('se ha completado la escritura');
});
console.log("hilo principal terminado, el hilo secundario aun no habra lanzado la funcion callback seguramente");

//si hubiera algo en el archivo lo sustituye, solo guarda lo que escribirmos en el momento