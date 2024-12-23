const { Project } = require('../model/projectsModel')
const { Skills } = require('../model/skillsModel')

const getAllprojectsController = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: {
                model: Skills,
                through: { attributes: [] },
            },
        });

        if (projects.length < 1) return res.status(404).send({
            status: "failed",
            message: "Zero projects found"
        })

        return res.status(200), send({
            status: "success",
            message: "projects found",
            data: projects
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const getProjectController = async (req, res) => {
    try {
        const { id } = req.params;

       const project = await Project.findOne({
            where: { id },
            include: {
                model: Skills,
                through: { attributes: [] },  // Exclude the join table data
            },
        });

        if (!project) return res.status(404).send({
            status: "failed",
            message: "project not found"
        })

        return res.status(200).send({
            status: "success",
            message: "project found",
            data: {
                ...project.toJSON(), // Converts the Sequelize model instance to plain JSON
                skillIds: JSON.parse(project.skillIds), // Return parsed skill IDs if applicable
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const addProjectsController = async (req, res) => {
    try {
        const { name, tagline, description, skillIds, image } = req.body;

        // Validate required fields
        if (!name || !tagline || !description || !skillIds || !image) {
            return res.status(400).send({
                status: "failed",
                message: "All fields are required"
            });
        }

        // Create the new project
        const newProject = await Project.create({
            name,
            tagline,
            description,
            skillIds,
            image,
        });

        return res.status(200).send({
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
        const { id, name, tagline, description, skillIds, image } = req.body;

        if (!id) return res.status(500).send({
            status: "failed",
            message: "project id is required"
        })

        const project = await Project.findByPk(id);

        if (!project) return res.status(404).send({
            status: "failed",
            message: "project not found"
        })

        const updates = {};

        if (name) updates.name = name;
        if (tagline) updates.tagline = tagline;
        if (image) updates.image = image;
        if (description) updates.description = description;

        if (Object.keys(updates).length === 0) {
            return res.status(400).send({
                status: "failed",
                message: "At least one field (other than password) must be provided for updating."
            })
        }

        const updateProject = await project.update(updates);

        if (skillIds && skillIds.length > 0) {
            const skills = await Skills.findAll({ where: { id: skillIds } });
            await project.setSkills(skills);
        }

        return res.status(200).send({
            status: "success",
            message: "project updated successfully",
            data: updateProject
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const deleteProjectController = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) return res.status(500).send({
            status: "failed",
            message: "project id is required"
        })

        const project = await Project.findByPk(id);

        if (!project) return res.status(404).send({
            status: "failed",
            message: "project not found"
        })

        const deletedProject = await project.destroy()

        return res.status(200).send({
            status: "success",
            message: "project deleted",
            data: deletedProject
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

module.exports = { getAllprojectsController, getProjectController, addProjectsController, updateProjectsController, deleteProjectController }