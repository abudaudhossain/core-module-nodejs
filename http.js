const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello programmers!');
    res.write('How are you??');
    res.end();
})

server.listen(3000);

console.log('Listening on port 3000');