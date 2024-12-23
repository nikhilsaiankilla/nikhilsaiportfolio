const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { addSkillsController, deleteSkillsController, getAllSkillsController } = require('../controller/skillsController')
//add skill
router.post('/addSkill', addSkillsController);

//delete skill
router.delete('/deleteSkill', deleteSkillsController);

//get all skill
router.get('/getAllSkills', getAllSkillsController);

module.exports = router;