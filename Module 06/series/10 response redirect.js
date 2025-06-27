let express = require('express');
app=express();


app.get('/',function(req,res){
    res.status(200).redirect("/home")
})

app.get('/home',function(req,res){
    res.status(301).send("This is Home Page").end()
})




 
app.listen(8000,function(){
    console.log("Server is running!")
})