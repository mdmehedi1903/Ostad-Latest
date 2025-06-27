const app = require("./app");
const mongoose = require("mongoose")
const PORT = 8080;


//SERVER
let URI = "mongodb://localhost:27017/mehedi";

mongoose.connect(URI)
.then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err)=>console.log(err))

 