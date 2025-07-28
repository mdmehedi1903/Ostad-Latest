const app = require("./app");
require('dotenv').config({path:'./config.env'})
const PORT = process.env.RUNNING_PORT || 8000;

app.get("", (req,res)=> {
    res.status(404).json({status: "Failed!", msg: "404 Not Found!"})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})