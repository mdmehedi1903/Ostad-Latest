const http=require('http');
const PORT = 5050;

const server = http.createServer((req,res)=>{
    res.end("This is my First server")
})


server.listen(PORT,()=>{
    console.log(`Server is on, Port ${PORT}`)
})

