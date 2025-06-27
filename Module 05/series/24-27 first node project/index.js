const http = require("http")
const fs = require("fs")
const URL = require("url")
const PORT = 5000;

http.createServer((req,res)=> {
    res.writeHead(200,{"Content-Type":"text/html"})
    function getData(){
        let data;

        if(req.url === "/" || req.url === "/home"){
           data = fs.readFileSync("home.html", "utf8")
        }else if(req.url === "/about"){
            data = fs.readFileSync("about.html", "utf8")
        }else if(req.url === "/terms"){
            data = fs.readFileSync("terms.html", "utf8")
        }else if(req.url === "/contact"){
            data = fs.readFileSync("contact.html", "utf8")
        }
        else{
            data = fs.readFileSync("404.html", "utf8")
        }
        return data;
    }
    res.end(getData())

}).listen(PORT, ()=> {
    console.log(`Server is running on Port ${PORT}`)
})