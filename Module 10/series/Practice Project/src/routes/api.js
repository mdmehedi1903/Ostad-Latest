const express = require('express');
const { CreateUser, LoginUser, PasswordVerify, ReadProfile, UpdateProfile, DeleteUser } = require('../controller/profileController');
const AuthVerify = require('../middleware/auth');
const router = express.Router();


router.post("/create-user", CreateUser)
router.get("/login-user", LoginUser)
router.get("/read-profile", AuthVerify, ReadProfile)
router.post("/update-profile", AuthVerify, UpdateProfile)
router.delete("/delete-profile", AuthVerify, DeleteUser)
router.get("/password-verify", PasswordVerify)



module.exports = router;   