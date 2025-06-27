const express = require('express');
const { CreateUser, LoginUser } = require('../middlewares/profileController');
const router = express.Router();


router.post("/create-user", CreateUser)
router.get("/login-user", LoginUser)




module.exports = router;   