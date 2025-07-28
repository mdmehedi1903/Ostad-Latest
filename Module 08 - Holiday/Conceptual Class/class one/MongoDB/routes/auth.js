const express = require('express');
const { demo } = require('../controllers/auth');
const router = express.Router()

router.get('/demo', demo)


module.exports =  router;