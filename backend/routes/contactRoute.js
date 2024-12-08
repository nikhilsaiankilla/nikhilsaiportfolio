const express = require('express');
const db = require('../db/db');
const { sendMessageController } = require('../controller/contactController');
const router = express.Router();

//send message
router.post('/sendMessage', sendMessageController);

module.exports = router;