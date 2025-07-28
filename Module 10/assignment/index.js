const mongoose = require("mongoose");

// DB Connection
(async()=>{
    try{
        await mongoose
        .connect("mongodb://localhost:27017/assignment", {autoIndex: true})
        console.log("✅ DB Connected")
    }catch(e){
        console.log("❌ DB Connection Failed! "+e);
    }
})()

const app = require("./app");
app.listen('3000',()=> {
    console.log("Server is running on port 3000")
})