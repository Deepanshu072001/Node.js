const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    const method = req.method;
    const path = req.url;

    const log = `\n[${Date.now()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt', log, 'utf-8');

    switch(method) {
        case 'GET': {
            switch(path) {
                case '/': 
                   return res.
                    writeHead(200)
                    .end('Hello from the server :)'
                );
                case '/contact-us':
                    return res
                        .writeHead(200)
                        .end('You can contact on these email: support@gmail.com, and phone no : 1000-1800-15'
                    );
                case '/tweet':
                    return res.writeHead(200).end('Tweet-1\nTweet-2');
            }
        }
        break
        case 'POST': {
            switch(path) {
                case '/tweet':
                    return res.writeHead(201).end('Your Tweet was created');
 
            }
        }
    }

return res.writeHead(404).end(`You're lost buddy`);
});

server.listen(5000, () => console.log(`Http server is running on port 5000`)
);