let express = require('express');
app=express();


app.post('/',function(req,res){
    let Name = req.header("Name");
    let Age = req.header("Age");
    let Job = req.header("Job");
    res.send("Name: "+Name+" Age: "+Age+" Job: "+Job)
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})
