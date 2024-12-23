const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { addProjectsController, updateProjectsController, getAllprojectsController, getProjectController, deleteProjectController } = require('../controller/projectController')

// Add a new project
router.post('/addProjects', addProjectsController);

//update project
router.put('/updateProject/:id', updateProjectsController);

// Get all projects
router.get('/getAllProjects', getAllprojectsController);

// Get individual project
router.get('/getProject/:id', getProjectController);

//delete project
router.delete('delete/:id', deleteProjectController);

module.exports = router;
