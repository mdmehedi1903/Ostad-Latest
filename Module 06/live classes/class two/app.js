// hold application configuration
const express = require('express');
const app = express();
const router = require('./src/routes/api')

app.use(require('cookie-parser')());
app.use(express.json());


app.use('/api', router);

module.exports = app;
