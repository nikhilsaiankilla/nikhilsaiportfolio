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

        if (!projects || projects.length === 0) {
            return res.status(404).send({
                success: false,
                error: "No projects found.",
            });
        }

        return res.status(200).send({
            success: true,
            data: projects,
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "Something went wrong while fetching projects.",
        });
    }
};

const getProjectController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                success: false,
                error: "Project ID is required.",
            });
        }

        const project = await Project.findOne({
            where: { id },
            include: { model: Skills },
        });

        if (!project) {
            return res.status(404).send({
                success: false,
                error: "Project not found.",
            });
        }

        return res.status(200).send({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error("Error fetching project:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "Something went wrong while getting the project.",
        });
    }
};

const addProjectsController = async (req, res) => {
    try {
        const { name, tagline, demo_url, code_url, description, skillIds, star } = req.body;

        if (!name || !tagline || !description || !demo_url || !code_url) {
            return res.status(400).send({
                success: false,
                error: "All fields (name, tagline, demo_url, code_url, description) are required.",
            });
        }

        const imageLocalPath = req?.file?.path;

        if (!imageLocalPath) {
            return res.status(400).send({
                success: false,
                error: "Project thumbnail is required.",
            });
        }

        const projectThumbnail = await uploadOnCloudinary(imageLocalPath);

        if (!projectThumbnail || !projectThumbnail.url) {
            return res.status(500).send({
                success: false,
                error: "Project thumbnail failed to upload.",
            });
        }

        const newProject = await Project.create({
            name,
            tagline,
            description,
            demo_url,
            code_url,
            image_url: projectThumbnail.url,
            star : star || false,
        });

        if (skillIds && skillIds.length > 0) {
            const skills = await Skills.findAll({ where: { id: skillIds } });

            if (skills.length !== skillIds.length) {
                return res.status(400).send({
                    success: false,
                    error: "One or more skill IDs are invalid.",
                });
            }

            await newProject.setSkills(skills);
        }

        return res.status(200).send({
            success: true,
            data: newProject,
        });
    } catch (error) {
        console.error("Error adding project:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "An error occurred while creating the project.",
        });
    }
};

const updateProjectsController = async (req, res) => {
    try {
        const { name, tagline, description, code_url, demo_url, skillIds, star } = req.body;
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                success: false,
                error: "Project ID is required.",
            });
        }

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).send({
                success: false,
                error: "Project not found.",
            });
        }

        const updates = {};
        if (name) updates.name = name;
        if (tagline) updates.tagline = tagline;
        if (description) updates.description = description;
        if (code_url) updates.code_url = code_url;
        if (demo_url) updates.demo_url = demo_url;
        if(star) updates.star = star;

        const imageLocalPath = req?.file?.path;

        if (imageLocalPath) {
            const projectThumbnail = await uploadOnCloudinary(imageLocalPath);

            if (!projectThumbnail || !projectThumbnail.url) {
                return res.status(500).send({
                    success: false,
                    error: "Project thumbnail failed to upload.",
                });
            }

            updates.image_url = projectThumbnail.url;
        }

        await project.update(updates);

        if (skillIds && skillIds.length > 0) {
            const skills = await Skills.findAll({ where: { id: skillIds } });

            if (skills.length !== skillIds.length) {
                return res.status(400).send({
                    success: false,
                    error: "One or more skill IDs are invalid.",
                });
            }

            await project.setSkills(skills);
        }

        return res.status(200).send({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error("Error updating project:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "An error occurred while updating the project.",
        });
    }
};

const deleteProjectController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                success: false,
                error: "Project ID is required.",
            });
        }

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).send({
                success: false,
                error: "Project not found.",
            });
        }

        await project.destroy();

        return res.status(200).send({
            success: true,
            message: "Project deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting project:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "An error occurred while deleting the project.",
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
