
const http = require('http');
const server = http.createServer();

server.on('conection', (socket) => {
    console.log('new connection......')
});



server.listen(3000);
console.log('listen on port 3000');