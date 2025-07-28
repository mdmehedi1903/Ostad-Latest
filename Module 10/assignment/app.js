const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/api');
const app = express();

// Application configuration
app.use(express.json())

// Application Configuration
app.use('/api/v1', router)

module.exports = app;