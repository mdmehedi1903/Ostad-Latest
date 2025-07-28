const http = require("http");

http.createServer((req,res)=> {
    res.end("Hello my Node server!")
}).listen(5000,()=> {
    console.log("Server is started")
})

