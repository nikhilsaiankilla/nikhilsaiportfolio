const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { addSkillsController, deleteSkillsController, getAllSkillsController } = require('../controller/skillsController')

const { upload } = require('../middleware/multerMiddleware')

//add skill
router.post('/addSkill', middleware, upload.array('image_url', 5), addSkillsController);

//get all skill
router.get('/getAllSkills', getAllSkillsController);

//delete skill
router.delete('/deleteSkill/:id', middleware, deleteSkillsController);

module.exports = router;