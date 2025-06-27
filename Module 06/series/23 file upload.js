let express = require('express');
var multer = require('multer');
app=express();


var upload = multer({
                storage: 
                        multer.diskStorage({
                            destination:function(req,file,callBack){
                                callBack(null, './uploads')
                            },
                            filename: function(req,file,callBack){
                                callBack(null, file.originalname)
                            }
                        })

            }).single('myfileupload')

app.post('/upload',function(req,res){
    upload(req,res,function(error){
        if(error){
            res.send("File Upload Failed!")
        }else{
            res.send("File Upload Success!")
        }
    })
})



 
app.listen(8000,function(){
    console.log("Server is running!")
})