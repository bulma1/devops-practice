const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello, World!\n');

});

server.listen(port,() => {

  console.log(`Listening on port ${port}`);

});