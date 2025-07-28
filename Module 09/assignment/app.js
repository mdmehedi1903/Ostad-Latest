const express = require("express");
const router = require("./src/Routes/api");
const app = express();

app.use('/api/v1', router)


module.exports = app;