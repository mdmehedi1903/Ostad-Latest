const http = require('http');
const PORT = 5000;
http.createServer((req,res)=> {
    // res.setHeader("Content-Type","text/html")
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("<h1>Hello Live Test</h1>")
    res.end()
}).listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})