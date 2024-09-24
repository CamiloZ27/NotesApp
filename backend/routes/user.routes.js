const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/getUsers', userController.getUsers)
router.get('/getUserInfo/:username', userController.getUserInfo)

module.exports = router