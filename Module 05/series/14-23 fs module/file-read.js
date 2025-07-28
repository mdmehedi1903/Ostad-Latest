let fs=require('fs');
let http=require('http');
let asynchronous = false;


let server = http.createServer((req,res)=> {
    //Asynchronous File Read
    if(asynchronous){ 
        if(req.url=="/"){
            fs.readFile("home.html", (err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end()
            });
        }
    }
    
    //Synchronous File Read
    else{
        let data = fs.readFileSync("home1.html");
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    }
})

server.listen(5000,()=> {
    console.log("Server is running on!")
})