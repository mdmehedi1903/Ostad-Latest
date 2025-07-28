let express = require('express');
app=express();

app.use(function(req,res,next){

    console.log("I'm application level middleware")
    next();
})

app.get('/',function(req,res){
    res.end("This is Home Page")
})
app.get('/about',function(req,res){
    res.end("This is about Page")
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})