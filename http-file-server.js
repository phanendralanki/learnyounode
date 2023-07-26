var fs = require('fs');
var http = require('http');

var filename = process.argv[3];

server = http.createServer(function(request, response) {
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);

//
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type':
// 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))