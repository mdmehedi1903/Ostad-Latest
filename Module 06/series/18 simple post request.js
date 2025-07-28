let express = require('express');
app=express();


app.post('/',function(req,res){

    res.end("This is simple post request.")
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})
