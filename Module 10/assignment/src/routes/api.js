const express = require('express');
const { CreateStudent, LoginStudent, ReadProfile, ResetPassword, SendOTP, VerifyEmail } = require('../controllers/StudentController');
const { TokenVerify } = require("../middlewares/auth");
const { CreateWork, UpdateWork, SelectTodoByDate, TaskByStatus, DeleteTask, TaskStatusCount } = require('../controllers/Works');
const router = express.Router();



router.post('/create', CreateStudent)
router.post('/login', LoginStudent)
router.get('/read', TokenVerify, ReadProfile)
router.get('/otp/:email', SendOTP)
router.get('/verify/:otp/:email', VerifyEmail)
router.get('/reset/:otp/:email/:password', ResetPassword)

// Works
router.post('/create-work', TokenVerify, CreateWork)
router.post('/update-work/:id', TokenVerify, UpdateWork)
router.get('/select-date/', TokenVerify, SelectTodoByDate)
router.get('/update-status/', TokenVerify, TaskByStatus)
router.get('/delete/:id', TokenVerify, DeleteTask)
router.get('/count', TokenVerify, TaskStatusCount)

module.exports = router;

