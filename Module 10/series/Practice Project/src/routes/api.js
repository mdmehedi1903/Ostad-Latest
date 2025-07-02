const express = require('express');
const { CreateUser, LoginUser, PasswordVerify, ReadProfile, UpdateProfile, DeleteUser } = require('../controller/profileController');
const AuthVerify = require('../middleware/auth');
const { CreateTodo, ReadTodo, UpdateTodo, UpdateTodoStatus, RemoveTodo, SelectTodoStatus, SelectTodoByDate } = require('../controller/todoController');
const router = express.Router();

// Login & Registration
router.post("/create-user", CreateUser)
router.get("/login-user", LoginUser)
router.get("/read-profile", AuthVerify, ReadProfile)
router.post("/update-profile", AuthVerify, UpdateProfile)
router.delete("/delete-profile", AuthVerify, DeleteUser)
router.get("/password-verify", PasswordVerify)

// ToDo List
router.post("/create-todo", AuthVerify, CreateTodo)
router.get("/read-todo", AuthVerify, ReadTodo)
router.post("/update-todo", AuthVerify, UpdateTodo)
router.post("/update-status", AuthVerify, UpdateTodoStatus)
router.delete("/remove-todo", AuthVerify, RemoveTodo)
router.get("/select-todo", AuthVerify, SelectTodoStatus)
router.get("/select-by-date", AuthVerify, SelectTodoByDate)



module.exports = router;   