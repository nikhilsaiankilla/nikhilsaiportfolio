const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');

// Add a new project
router.post('/addProjects', middleware, (req, res) => {

});

//update project
router.put('/updateProject:id', middleware, (req, res) => {

});

// Get all projects
router.get('/getAllProjects', (req, res) => {

});

// Get individual project
router.get('/getProject/:id', (req, res) => {

});

//delete project
router.delete('delete/:id', middleware, (req, res) => {

});

module.exports = router;
