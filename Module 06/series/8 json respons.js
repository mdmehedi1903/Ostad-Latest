let express = require('express');
app=express();


app.get('/json',function(req,res){
    let person = [
    {
        name: "Mehedi",
        age: 30
    },
    {
        name: "Rakib",
        age: 33
    },
    ]
    res.status(500).json(person)
})




 
app.listen(8000,function(){
    console.log("Server is running!")
})