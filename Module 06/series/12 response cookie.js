let express = require('express');
app=express();


app.get('/cookie',function(req,res){
    res.cookie("Name", "Emam Mehedi");
    res.cookie("Age", "30");
    res.send("Cookie set success!")
    res.end();
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})