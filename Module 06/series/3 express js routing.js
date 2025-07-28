let express = require('express');
app=express();

app.get('/',function(req,res){
    res.send("<h1>This is home page</h1>");
})

app.post('/about',function(req,res){
    res.send("<h1>This is about page</h1>");
})

app.put('/contact',function(req,res){
    res.send("<h1>This is contact page</h1>");
})

app.delete('/terms',function(req,res){
    res.send("<h1>This is term page</h1>");
})





app.listen(8000,function(){
    console.log("Server is running!")
})