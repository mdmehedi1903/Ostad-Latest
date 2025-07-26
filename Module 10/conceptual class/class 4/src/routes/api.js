const express = require('express');
const appControllers = require('../controllers/AppControllers');
const apiEndPoints = require('../utility/apiEndPoints');

const router = express.Router();

router.get(apiEndPoints.home, appControllers.home);
router.post(apiEndPoints.signIn, appControllers.signIn);

module.exports = router;