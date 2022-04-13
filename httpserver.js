const http = require('http');
const port = process.env.port || 12000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Creating Nodejs Server </h1> <p> Learning how to create server on Nodejs </p>')
})

server.listen(port, () => {console.log(`Server is running on Port ${port}`)})