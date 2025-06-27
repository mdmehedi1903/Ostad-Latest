let fs=require('fs');
let http=require('http');
let asynchronous = true;


let server = http.createServer((req,res)=> {


    //Asynchronous File Read
    if(asynchronous){ 
        if(req.url=="/"){
            fs.exists("synchronous.txt", (error)=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                if(error){
                    res.write("<h1>Asynchronous File Check: True</h1>")
                }else{
                    res.write("<h1>Asynchronous File Check: False</h1>")
                }
                res.end()
            })
        }
    }
    
    //Synchronous File Read
    else{
        res.writeHead(200,{"Content-Type":"text/html"})
        let result = fs.existsSync("efg.txt");
        if(result){
            res.write("Synchronous True")
        }else{
            res.write("Synchronous False")
        }
        res.end()
    }
})

server.listen(8000,()=> {
    console.log("Server is running on!")
}) 


