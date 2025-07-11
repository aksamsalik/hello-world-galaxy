const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from App 1 by aksam salik!');
});

server.listen(3001, () => {
  console.log('App 1 running on port 3001');
});
