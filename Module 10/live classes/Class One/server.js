const express = require('express');
const {readdirSync} = require('fs');
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

//security perporse
const helmet = require('helmet');

//to manage .env file  
dotenv.config({path:'./.env'})

const morgan = require("morgan");
const cors = require("cors"); 

 
//application level middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(helmet())
app.use(mongoSanitize());


  
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

 