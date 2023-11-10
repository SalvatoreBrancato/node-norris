const http = require("http");
const dotenv = require("dotenv");
const fs = require("fs");
//const { log } = require("console");

dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http
    .createServer((req, res)=>{    
        res.writeHead(200, {"Content-Type": "text/html"});
        fetchData(res)
   
        // fs.readFile('norrisDb.json', function(data) {
        //     console.log(data)
        //     });

    })
    .listen(port,host, ()=>{
        const serverUrl = `http://${host}:${port}`
        console.log(serverUrl);
    })
        

    const fetchData = (res) => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => {frase = data.value
            let fraseJson = JSON.stringify(frase)
            fs.writeFileSync('norrisDb.json', fraseJson, function(err){
                if(err){
                    if(err) throw err;
                    console.log('saved')
                }
            })  
           res.end(frase)

             
        });
    }; 
        

        
        
        
        
        
        

    

        

        