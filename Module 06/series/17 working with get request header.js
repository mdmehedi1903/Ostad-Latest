let express = require('express');
app=express();


app.get('/',function(req,res){
    let first = req.header('firstName');
    let last = req.header('lastName');
    let Connection = req.header("Connection");
    let User = req.header("User-Agent");
    res.end(first+" "+last +" "+ Connection+" "+User)
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})
