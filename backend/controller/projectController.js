const { Project } = require('../model/projectsModel');
const { Skills } = require('../model/skillsModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');

const getAllprojectsController = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: {
                model: Skills,
                through: { attributes: [] },
            },
        });

        if (!projects.length) {
            return res.status(404).send({
                status: "failed",
                message: "No projects found",
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Projects found",
            data: projects,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred",
            error: error.message || error,
        });
    }
};

const getProjectController = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findOne({
            where: { id },
            include: { model: Skills },
        });

        if (!project) {
            return res.status(404).send({
                status: "failed",
                message: "Project not found",
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Project found",
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred",
            error: error.message || error,
        });
    }
};

const addProjectsController = async (req, res) => {
    try {
        const { name, tagline, demo_url, code_url, description, skillIds } = req.body;

        if (!name || !tagline || !description || !demo_url || !code_url) {
            return res.status(400).send({
                status: "failed",
                message: "All fields are required",
            });
        }

        const imageLocalPath = req?.file?.path;

        if (!imageLocalPath) return res.status(400).send({
            status: "failed",
            message: "project thumbnail is required",
        });

        const projectThumbnail = await uploadOnCloudinary(imageLocalPath);

        if (!projectThumbnail) return res.status(500).send({
            status: "failed",
            message: "project thumbnail failed to upload",
        });

        const newProject = await Project.create({
            name,
            tagline,
            description,
            demo_url,
            code_url,
            image_url: projectThumbnail.url,
        });

        // If skillIds are provided, associate skills with the project
        if (skillIds && skillIds.length > 0) {
            // Validate if skills exist in the database
            const skills = await Skills.findAll({ where: { id: skillIds } });
            if (skills.length !== skillIds.length) {
                return res.status(400).send({
                    status: "failed",
                    message: "One or more skill IDs are invalid",
                });
            }

            // Associate the skills with the newly created project
            await newProject.setSkills(skills);
        }


        return res.status(201).send({
            status: "success",
            message: "Project created successfully",
            data: newProject,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred while creating the project",
            error: error.message || error,
        });
    }
};

const updateProjectsController = async (req, res) => {
    try {
        const { name, tagline, description, code_url, image_url, demo_url, skillIds } = req.body;

        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                status: "failed",
                message: "Project ID is required",
            });
        }

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).send({
                status: "failed",
                message: "Project not found",
            });
        }

        const updates = {};
        if (name) updates.name = name;
        if (tagline) updates.tagline = tagline;
        if (description) updates.description = description;
        if (code_url) updates.code_url = code_url;
        if (demo_url) updates.demo_url = demo_url;

        const imageLocalPath = req?.file?.path;

        if (imageLocalPath) {
            const projectThumbnail = await uploadOnCloudinary(imageLocalPath);

            if (!projectThumbnail) return res.status(500).send({
                status: "failed",
                message: "project thumbnail failed to upload",
            });

            updates.image_url = projectThumbnail.url;
        }

        await project.update(updates);

        // If skillIds are provided, update the project's skills
        if (skillIds && skillIds.length > 0) {
            // Fetch skills by their IDs
            const skills = await Skills.findAll({ where: { id: skillIds } });

            // Set new skills for the project (this will add or remove skills as needed)
            await project.setSkills(skills);
        }


        return res.status(200).send({
            status: "success",
            message: "Project updated successfully",
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred while updating the project",
            error: error.message || error,
        });
    }
};

const deleteProjectController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                status: "failed",
                message: "Project ID is required",
            });
        }

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).send({
                status: "failed",
                message: "Project not found",
            });
        }

        await project.destroy();

        return res.status(200).send({
            status: "success",
            message: "Project deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred while deleting the project",
            error: error.message || error,
        });
    }
};

module.exports = {
    getAllprojectsController,
    getProjectController,
    addProjectsController,
    updateProjectsController,
    deleteProjectController,
};
