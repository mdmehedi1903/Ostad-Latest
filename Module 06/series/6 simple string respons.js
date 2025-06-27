let express = require('express');
app=express();



app.post('/one',function(req,res){
    res.send("This is contact page");
})

app.get('/two',function(req,res){
    res.end("This is term page");
})





app.listen(8000,function(){
    console.log("Server is running!")
})