function writing(x){
    return console.log("writing after " + x + " seconds")
}

function clouse(x) {
    return function(){
        console.log("writing after clouse " + x + " seconds")
    } 
}

//setTimeout(function() {writing(6)},6000)
setTimeout(writing,3000)

//setTimeout(clouse(4),4000)

/*
    da igual el settimeout que pongamos, primero acabara el hilo principal y luego ya se ejecutaran los eventos que hayan en la cola de enventos
*/