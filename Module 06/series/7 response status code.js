let express = require('express');
app=express();



app.get('/one',function(req,res){
    res.status(200).send("200");
})

app.get('/two',function(req,res){
    res.status(201).end("201");
})

app.get('/three',function(req,res){
    res.status(401).end("Unauthorized!")
})




 
app.listen(8000,function(){
    console.log("Server is running!")
})