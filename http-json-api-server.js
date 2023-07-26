var http = require('http');
var url = require('url');

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

server = http.createServer(function(request, response) {
  parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);

//
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),        
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() } 
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))   
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))