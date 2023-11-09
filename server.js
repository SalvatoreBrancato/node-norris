const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http
    .createServer((req, res)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('prova')
    })
    .listen(port,host, ()=>{
        const serverUrl = `http://${host}:${port}`
        console.log(serverUrl);
    })
        
    