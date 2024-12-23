const { Skills } = require('../model/skillsModel');

const getAllSkillsController = async (req, res) => {
    try {
        const skills = await Skills.findAll();

        if (skills.length < 1) return res.status(404).send({
            status: "failed",
            message: "Zero skills found"
        })

        return res.status(200).send({
            status: "success",
            message: "skills found",
            data: skills
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const addSkillsController = async (req, res) => {
    try {
        const { image, name } = req.body;

        if (!image || !name) return res.status(500).send({
            status: "failed",
            message: "all fields are required"
        })

        const newSkill = await Skills.create({
            name,
            image
        })

        return res.status(200).send({
            status: "success",
            message: "skills uploaded successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const deleteSkillsController = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) return res.status(500).send({
            status: "failed",
            message: "Id is required"
        })

        const skill = await Skills.findByPk(id);

        if (!skill) return res.status(404).send({
            status: "failed",
            message: "skill not found"
        })

        await skill.destroy();

        return res.status(200).send({
            status: "success",
            message: "skills deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

module.exports = { addSkillsController, deleteSkillsController, getAllSkillsController }