let express = require('express');
app=express();


app.get('/cookie',function(req,res){
    res.clearCookie("Age");
    res.send("Cookie clear success!")
    res.end();
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})