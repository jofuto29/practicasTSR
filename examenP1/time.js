function c(){
    var x = 0;
    //console.log(x)
    return()=>{console.log(x);x++}
}

setInterval(c(),1000) //cuando se pasa c lo que se devuelve es lo que se ejecutara en este caso la funcion anonima que imprime x y aumenta x
setTimeout(c(),2500)
setTimeout(()=>process.exit(),3500)