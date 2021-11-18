const zmq = require('zeromq')
const nick='Ana'

let sub = zmq.socket('sub')
let psh = zmq.socket('push')

sub.connect('tcp://127.0.0.1:9998')
psh.connect('tcp://127.0.0.1:9999')

sub.subscribe('') //se subscribe a todos los mensajes que pueda enviar el servidor
sub.on('message', (nick,m) => { //nos muestra qualquier mensaje que llegue
    console.log('['+nick+']'+m)
})

process.stdin.resume() //inicia tecleo por pantalla
process.stdin.setEncoding('utf8')
process.stdin.on('data' ,(str)=> {
    psh.send([nick, str.slice(0,-1)])
})

process.stdin.on('end',()=> {
    psh.send([nick, 'BYE'])
    sub.close(); 
    psh.close();
})

process.on('SIGINT',()=> { //??¿¿ con control+c en linux se deberia llamar a esta interrupcion, pero en widows no se como es
    process.stdin.end()
})

psh.send([nick,'HI']) //inicia diciendo hola
