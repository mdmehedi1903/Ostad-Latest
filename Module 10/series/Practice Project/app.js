// Basic Configuration Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = express();

 
// Security Variable Configuration
require('dotenv').config({path: "./.env"})


// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors'); 
const hpp = require('hpp'); 

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security Middleware Implement
app.use(cors()); 
app.use(helmet());
app.use(hpp());
// app.use(mongoSanitize());
// app.use((req, res, next) => {
//     if (req.body) mongoSanitize.sanitize(req.body);
//     if (req.params) mongoSanitize.sanitize(req.params);
//     next();
// });






// Rate Limiiter
const limiter = rateLimit({
        windowMs:15*60*100, 
        max:50,
        message: {
            status: "Failed",
            msg: "Too many requests from this IP, please try again later."
        }
    })
app.use(limiter)
 


// Database Lib Import
const mongoose = require('mongoose'); 
const DATABASE_NAME = process.env.DATABASE_NAME; 
const DATABASE = `${process.env.DATABASE}/${DATABASE_NAME}`; 

mongoose
    .connect(DATABASE)
    .then(() => console.log(`DB Connected at : ${DATABASE_NAME}`))
    .catch((err) => {
        console.error(err);
    });


// Routing Implement
app.use("/api/v1", router)


// Undefined Route Implement
app.use("", (req,res)=> {
    res.status(404).json({status: "Failed!", data: "404 Error! Wrong route!"});
})

module.exports = app;