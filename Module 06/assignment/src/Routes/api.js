const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController')



router.get('/create', blogController.create)
router.get('/read', blogController.read)
router.get('/update', blogController.update)
router.get('/delete', blogController.delete)




module.exports = router;