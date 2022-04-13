// const { redirect } = require('express/lib/response');
const http = require('http');
const fs = require('fs');
const PORT = 11000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1> Home page </h1> <p> This is Home page </p>')
    }

    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1> About Page </h1> <p> This is About Page </p>')
    }

    else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1> Contact Page </h1> <p> This is Contact Page </p>')
    }

    // Show Website
    else if (req.url === '/website') {
        res.statusCode = 200
        const myweb = fs.readFileSync('./index.html');
        res.end(myweb.toString()); 
    } 

    else {
        res.statusCode = 404;
        res.end('<h1> 404 Page Not Found </h1> <p> Error: This page is not found </p>')
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})