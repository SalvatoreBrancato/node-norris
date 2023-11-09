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
        
    const fetchData = () => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => console.log(data));
        };
        fetchData()