const http = require('http');

const log = console.log.bind(console);

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the way...');
});

server.listen(port, hostname, () => {
  log(`Server running at http://${hostname}:${port}/`);
});
