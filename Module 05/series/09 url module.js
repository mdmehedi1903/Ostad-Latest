const http = require("http");
const URL = require("url");

http.createServer((req,res)=> {


    var myUrl = req.url;
    let {query, pathname} = URL.parse(myUrl, true)

    res.writeHead(200, {"Content-Type": "text/html"})
    // res.write(host)
    res.write(JSON.stringify("</br>"+query.year))
    res.write(JSON.stringify("</br>"+query.month))
    res.write("</br>"+pathname)
    res.end()

}).listen(5000,()=> {
    console.log("Server is started")
})

