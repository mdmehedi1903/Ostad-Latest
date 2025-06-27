let express = require('express');
var multer = require('multer');
var multer = multer();

app=express();
app.use(multer.array())
app.use(express.static('public'))




app.post('/',function(req,res){
    let JSONData = req.body;
    res.end(JSON.stringify(JSONData))
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})