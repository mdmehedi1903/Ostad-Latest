let fs=require('fs');
let http=require('http');
let asynchronous = false;


let server = http.createServer((req,res)=> {


    //Asynchronous File Read
    if(asynchronous){ 
        if(req.url=="/"){
            fs.rename("synchronous.txt", "asynchronous.txt", (error)=>{
                if(error){
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("<h1>Asynchronous File rename failed!</h1>")
                    res.end()
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("<h1>Asynchronous File rename success!</h1>")
                    res.end()
                }
            })
        }
    }
    
    //Synchronous File Read
    else{
        res.writeHead(200,{"Content-Type":"text/html"})
        try {
        fs.renameSync("asynchronous.txt", "synchronous.txt");
        res.write("<h1>Synchronous File rename success!</h1>")
        } catch (err) {
            res.write("<h1>Synchronous File rename failed!</h1>")
        }
        res.end()
    }
})

server.listen(8000,()=> {
    console.log("Server is running on!")
}) 


