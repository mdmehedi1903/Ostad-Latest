let express = require('express');
app=express();


app.post('/',function(req,res){
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.send(firstName+" "+lastName)
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})
