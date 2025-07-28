let express = require('express');
app=express();

app.get('/',function(req,res){
    res.end("This is Home Page")
})

app.get('/contact',function(req,res){
    res.end("This is contact Page")
})


app.use('/about', function(req,res,next){
    console.log("I'am about middleware");
    next()
})

app.get('/about',function(req,res){
    res.end("This is about Page")
})

 
app.listen(8000,function(){
    console.log("Server is running!")
})