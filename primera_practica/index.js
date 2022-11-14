const http = require('http');

const host = '0.0.0.0';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Conten-type', 'text-plain');
    res.end("Hola mundo :)");
});

server.listen(port, host, ()=> {
    console.log("Server escuchando en " + host + " en el puerto " + port);
})
