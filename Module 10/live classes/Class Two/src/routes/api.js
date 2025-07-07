const express = require('express');
const { RegisterUser, LoginUser, ReadUser, UpdateUser, VerifyEmail, VerifyOTP, RecoverPassword } = require('../controllers/UserController');
const { TokenVerify } = require('../middlewares/tokenVerify');
const { CreateTask, DeleteTask, UpdateTask, TaskByStatus, TaskStatusCount } = require('../controllers/TaskController');
const router = express.Router();


// User Login/Register
router.post('/register-user', RegisterUser)
router.get('/login-user', LoginUser)
router.get('/read-user', TokenVerify, ReadUser) 
router.post('/update-user', TokenVerify, UpdateUser) 
router.get('/verify-email/:email', VerifyEmail) 
router.get('/verify-otp/:email/:otp', VerifyOTP) 
router.get('/recover-password', RecoverPassword) 


// Create Task
router.post('/create-task', TokenVerify, CreateTask)
router.delete('/delete-task/:id', TokenVerify, DeleteTask)
router.post('/update-task', TokenVerify, UpdateTask)
router.get('/task-by-status', TokenVerify, TaskByStatus)
router.get('/count-group-status', TokenVerify, TaskStatusCount)



module.exports = router;