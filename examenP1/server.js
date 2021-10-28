const net = require("net")
let server = net.createServer(function(c){
    console.log("server conected")
    c.on('end', function(){
        console.log("server disconected")
    })
    c.on("data", (data) => {
        c.write(parseInt(data) * 2 + "")

    })
})
server.listen(9000, function(){console.log("serverbound")})