const express = require('express');
const { RegisterUser, LoginUser, ReadUser, UpdateUser, VerifyEmail, VerifyOTP, RecoverPassword } = require('../controllers/UserController');
const { TokenVerify } = require('../middlewares/tokenVerify');
const router = express.Router();


// User Login/Register
router.post('/register-user', RegisterUser)
router.get('/login-user', LoginUser)
router.get('/read-user', TokenVerify, ReadUser) 
router.post('/update-user', TokenVerify, UpdateUser) 
router.get('/verify-email/:email', VerifyEmail) 
router.get('/verify-otp/:email/:otp', VerifyOTP) 
router.get('/recover-password', RecoverPassword) 



module.exports = router;