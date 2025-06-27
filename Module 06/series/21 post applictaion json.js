let express = require('express');
let bodyParser = require('body-parser');
app=express();
// app.use(bodyParser.json()) 
app.use(express.json()) // This is built-in feature


app.post('/',function(req,res){
    let JSONData = req.body;
    let Name = JSONData.Name;
    let Age = JSONData['Age'];
    res.end("Name: "+Name+", Full JSON: " + JSON.stringify(JSONData) + " Again Age by Specific key: "+ Age)
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})