const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { addProjectsController, updateProjectsController, getAllprojectsController, getProjectController, deleteProjectController } = require('../controller/projectController')
const { upload } = require('../middleware/multerMiddleware');

// Add a new project
router.post('/addProjects', middleware, upload.single("image_url"), addProjectsController);

//update project
router.put('/updateProject/:id', middleware, upload.single("image_url"), updateProjectsController);

// Get all projects
router.get('/getAllProjects', getAllprojectsController);

// Get individual project
router.get('/getProject/:id', getProjectController);

//delete project
router.delete('/deleteProject/:id', middleware, deleteProjectController);

module.exports = router;
