const net = require('net');

const server = net.createServer();
const socketConn = [];

server.on('connection', (socket) => {
  console.log('a new conn to the server');

  socket.on("data", (data) => {
    socketConn.map(conn => {
      conn.write(data);
    })
  });

  socketConn.push(socket);
});

server.listen(3008, "127.0.0.1", () => {
  console.log('opened server on', server.address());
});