let fs=require('fs');
let http=require('http');
let asynchronous = false;


let server = http.createServer((req,res)=> {


    //Asynchronous File Read
    if(asynchronous){ 
        if(req.url=="/"){
            fs.unlink("synchronous.txt", (error)=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                if(error){
                    res.write("<h1>Asynchronous File delete failed!</h1>")
                }else{
                    res.write("<h1>Asynchronous File delete success!</h1>")
                }
                res.end()
            })
        }
    }
    
    //Synchronous File Read
    else{
        res.writeHead(200, { "Content-Type": "text/html" });

        try {
          fs.unlinkSync("qrs.txt");
          res.write("<h1>Synchronous File delete success!</h1>");
        } catch (error) {
          res.write("<h1>Synchronous File delete failed!</h1>");
        }
        
        res.end();
    }
}) 

server.listen(8000,()=> {
    console.log("Server is running on!")
}) 


