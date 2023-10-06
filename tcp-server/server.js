const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data)
    console.log(data.toString('utf-8'))
  }) 
});

server.listen(8000,'127.0.0.1', () => {
  console.log(server.address())
});