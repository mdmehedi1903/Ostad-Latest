let express = require('express');
app=express();


app.get('/download',function(req,res){
    res.status(200).download("./main.js")
})




 
app.listen(8000,function(){
    console.log("Server is running!")
})