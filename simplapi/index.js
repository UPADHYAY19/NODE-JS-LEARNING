const http = require('http');
const data = require('./Data');
const { log } = require('console');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'Application/JSON'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(1500);

console.log("sanyam");
