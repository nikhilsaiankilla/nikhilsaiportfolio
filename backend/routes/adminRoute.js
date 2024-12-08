const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');

//add admin
router.post('/createAdmin', middleware, (req, res) => {
    
});

//get admin data
router.get('/getAdminData', (req, res) => {
    res.statusCode(200).send({
        message : "sent"
    })
});

//update admin data
router.put('/updateAdminData', middleware, (req, res) => {

});

//update password
router.put('/updatePassword', middleware, (req, res) => {

});

//forget password
router.put('/forgetPassword', middleware, (req, res) => {

});

module.exports = router;