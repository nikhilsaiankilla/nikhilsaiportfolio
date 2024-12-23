const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { adminLoginController } = require('../controller/authController');

router.post('/login', adminLoginController)

router.post('/logout', middleware, (req, res) => {})

module.exports = router;