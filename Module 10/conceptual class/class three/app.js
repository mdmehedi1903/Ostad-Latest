const express = require('express');
const mongoose = require('mongoose');
const app = new express();
const router = require('./src/routes/api');
app.use("/api/v1", router);

const url = "mongodb://localhost:27017/Coneceptual";
mongoose.connect(url)
.then(
    console.log("DB Connected!")
)



 


module.exports=app;