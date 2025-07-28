const express = require('express');
const { create, read, update, deletedd} = require('../Controllers/adminController');
const router = express.Router()


router.get('/admin1', create)
router.get('/admin2', read)
router.get('/admin3', update)
router.get('/admin4', deletedd)


module.exports = router;