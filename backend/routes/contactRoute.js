const express = require('express');
const db = require('../db/db');
const { sendMessageController, getAllMessages } = require('../controller/contactController');
const router = express.Router();

//send message
router.post('/sendMessage', sendMessageController);

//get all messages
router.get('/getAllMessages', getAllMessages)

module.exports = router;