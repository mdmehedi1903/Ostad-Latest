const http = require("http");

http.createServer((req,res)=> {
    res.writeHead(200,{
        "Content-Type": "text/html"
    })
    if(req.url == '/' || req.url == '/home'){
        console.log(req)
        res.end("<h1><a href='/home'>Home Page</a></h1>")
    }else if(req.url == '/about'){
        res.end("<h1><a href='/home'>About Page</a></h1>")
    }
    else if(req.url == '/contact'){
        res.end("<h1><a href='/home'>Contac Page</a></h1>")
    }
    else{
        res.end("<h1>Wrong Route</h1><h1><a href='/home'>Back to Home</a></h1>")
    }
}).listen(5000,()=> {
    console.log("Server is started")
})

