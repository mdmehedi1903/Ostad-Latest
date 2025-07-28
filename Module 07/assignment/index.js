const app = require("./app");
require('dotenv').config({path: "./.env"});
const PORT = process.env.RUNNING_PORT;

// undefined route handaller
app.use((req,res)=> {
    res.status(404).json({status:"Success!", data: "404 Not Found!"})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})