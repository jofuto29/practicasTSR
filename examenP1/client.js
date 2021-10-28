const net = require("net")
let client = net.connect({port:9000}, function(){
    console.log("cliente conected")
    client.write(process.pid + "")
})
client.on('data',function(data){
    console.log(data.toString())
})
client.on("end", function(){
    console.log("client disconected")
})