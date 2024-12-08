const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');

//add skill
router.post('/addSkill', middleware, (req, res) => {

});

//delete skill
router.delete('/deleteSkill',middleware, (req, res) => {

});

//get all skill
router.get('/getAllSkills', (req, res) => {

});

module.exports = router;