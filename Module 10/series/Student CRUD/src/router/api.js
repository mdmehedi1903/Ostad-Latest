const express = require('express');
const { create, read, update,remove} = require('../controllers/student');
const { EncodeToken } = require('../controllers/encodeToken');
const { DecodeToken } = require('../controllers/decodeToken');
const tokenVerify = require('../middlewares/tokenVerify');
const router = express.Router();

// apply jwt auth
router.post('/create', tokenVerify, create);
router.get('/read', tokenVerify, read);
router.post('/update/:id', tokenVerify, update);
router.delete('/remove/:id', tokenVerify, remove);

// jwt
router.get('/create-token', EncodeToken)
router.get('/decode-token', DecodeToken)

module.exports = router;
 
