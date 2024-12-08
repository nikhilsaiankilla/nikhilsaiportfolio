const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');

router.post('/login', (req, res) => {

})

router.post('/logout', middleware, (req, res) => {

})

module.exports = router;