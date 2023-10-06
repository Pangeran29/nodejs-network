const http = require('http');

const port = 4080;
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {``
  const data = { message: 'hello there' };
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Connection', 'close')
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Connected to http://${hostname}:${port}`);
})