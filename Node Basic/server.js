const http = require('http');
http.createServer((res,rep)=>{
    rep.write("<h1>my name is sanyam</h1>")
    rep.end();
}).listen(1200);