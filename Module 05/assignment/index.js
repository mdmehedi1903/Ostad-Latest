const http = require("http");
const fs = require("fs");
http.createServer((req,res)=> {
    res.writeHead(200, {"Content-Type": "text/html"})

        function myData(){
        let data;
            if(req.url =="/" || req.url =="/home"){
                data = fs.readFileSync("home.html", "utf8")
            }else if(req.url =="/about"){
                data = fs.readFileSync("about.html", "utf8")
            }else if(req.url =="/contact"){
                data = fs.readFileSync("contact.html", "utf8")
            }else if(req.url =="/file-write"){
                fs.writeFile("demo.txt", "hello world new",(err)=> {
                    if(err){
                        console.log("Failed!")
                    }else{
                        console.log("Success!")
                    }
                })
                data = fs.readFileSync("file-write.html", "utf8")
                
            }
            else{
                data = fs.readFileSync("404.html", "utf8")
            }
            return data;
        }
            
    res.end(myData())

}).listen(3000, ()=> {
    console.log("Server is running on port 3000")
})