// Configuration Import
const app = require("./app");


// Application Running
const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})