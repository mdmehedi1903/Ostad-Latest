const express = require('express');
const app = express();
const { readdirSync } = require('fs');

// dot env implement
require('dotenv').config();

readdirSync('./routes').map(r => app.use("/api/v1", require(`./routes/${r}`)));
let PORT = process.env.PORT || 8000;
app.listen(PORT,()=> {
    console.log(`Server is running on PORT ${PORT}`)
})
