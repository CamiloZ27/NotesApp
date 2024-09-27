const express = require('express');
const router = express.Router();

const noteController = require('../controllers/note.controller')

router.get('/getUserNotes/:userId', noteController.getUserNotes)

module.exports = router