const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {        
    
    res.write("welcome to my server");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const server2 = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {