const http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('hello world');

}).listen(8888);

console.log('正在监听http://localhost:8888');
