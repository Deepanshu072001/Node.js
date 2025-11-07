const http = require('http');

const server = http.createServer(function(req, res) {
    console.log("I received a incoming request"); 
    //console.log(req.headers);
    console.log(req.method);
    
    res.writeHead(200);
    res.end(`Thanks for visiting my server :) You can accept ${req.headers['accept-language']}`);
});

server.listen(5000, () =>
    console.log('http server is up and running on port 5000')
);