const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller')

router.get('/login/:username/:password', authController.login)

router.post('/signup', authController.createUser)

module.exports = router