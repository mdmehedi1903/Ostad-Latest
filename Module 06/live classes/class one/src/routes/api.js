const express = require('express');
const router = express.Router();
const DemoController = require('../controllers/DemoController')

router.get('/demo', DemoController.demo)



module.exports = router;