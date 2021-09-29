function writing(x){
    console.log("writing after " + x + " seconds")
}

function clouse(x) {
    return function(){
        console.log("writing after " + x + " seconds")
    } 
}

setTimeout(function() {writing(6)},6000)
setTimeout(writing,3000)

setTimeout(clouse(4),4000)

setTimeout(function() {writing(0)},0000)
setTimeout(function() {writing(1)},0000)
setTimeout(function() {writing(6)},1000)
setTimeout(function() {writing(6)},1000)
setTimeout(function() {writing(6)},1000)

console.log("hola")

/*
    da igual el settimeout que pongamos, primero acabara el hilo principal y luego ya se ejecutaran los eventos que hayan en la cola de enventos
*/