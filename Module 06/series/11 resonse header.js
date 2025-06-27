let express = require('express');
app=express();


app.get('/header',function(req,res){
    res.append("Name", "Emam Mehedi");
    res.append("Village", "Luddakhali");
    res.status(200).end("Hello Word")
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})