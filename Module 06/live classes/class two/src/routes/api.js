const express = require('express');
const router = express.Router();
const DemoController = require('../controllers/DemoController')

router.get('/demo/:name/:city', DemoController.demo)
router.get('/demo1', DemoController.demo1)
router.post('/demo2', DemoController.demo2)
router.post('/demo3', DemoController.demo3)

module.exports = router;