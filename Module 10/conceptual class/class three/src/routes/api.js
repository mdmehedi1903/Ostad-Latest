const express = require('express');
const router = express.Router();
const endPoint = require('../utility/endPoints')
const controller = require('../controller/controller')

router.get(endPoint.home, controller.home);
router.get(endPoint.about, controller.about);
router.get(endPoint.registration, controller.registration);



module.exports=router;