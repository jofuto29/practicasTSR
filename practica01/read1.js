const fs = require('fs');
fs.readFile('./textos/lectura.txt', 'utf8', function (err,data) {
 if (err) {
 return console.log(err);
 }
 console.log(data);
});