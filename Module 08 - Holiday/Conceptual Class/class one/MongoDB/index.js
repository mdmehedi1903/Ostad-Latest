const express = require('express');
const {readdirSync} = require('fs');
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();

//to manage .env file   
dotenv.config({path:'./.env'})


//application level middlewares
app.use(express.json()); 

 
//routes middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));
 

 

//SERVER
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err)=>console.log(err))

