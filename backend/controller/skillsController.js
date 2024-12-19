const { Skills } = require('../model/skillsModel');

const getAllSkillsController = async (req, res) => {
    try {
        const skills = await Skills.findAll();

        if(skills.length < 1) return res.status(404).send({
            status: "failed",
            message: "Zero skills found"
        })

        return res.status(200), send({
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

const addSkills = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

const deleteSkills = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "failed",
            error: error.message || error
        })
    }
}

module.exports = { addSkills, deleteSkills, getAllSkillsController }