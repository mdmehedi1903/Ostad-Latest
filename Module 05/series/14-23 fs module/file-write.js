let fs=require('fs');
let http=require('http');
let asynchronous = false;


let server = http.createServer((req,res)=> {
    //Asynchronous File Read
    if(asynchronous){ 
        if(req.url=="/"){
            fs.writeFile("synchronous.txt","Asynchronous File Read",(err)=>{
                if(err){
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("<h1>File write failed!</h1>")
                    res.end()
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("<h1>File write success!</h1>")
                    res.end()
                }
            })
        }
    }
    
    //Synchronous File Read
    else{
        let error = fs.writeFileSync("synchronous.txt", "Synchronous File Read");
        if(error){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("<h1>File  write failed!</h1>")
            res.end()
        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("<h1>File  write success!</h1>")
            res.end()
        }
    }
})

server.listen(8000,()=> {
    console.log("Server is running on!")
}) 