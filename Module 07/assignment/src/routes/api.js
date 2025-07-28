const express = require('express');
const demoController = require('../controllers/demo');
const router = express.Router();


router.get('/demo', demoController.demo)

module.exports = router;