const { Skills } = require('../model/skillsModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');

const getAllSkillsController = async (req, res) => {
    try {
        const skills = await Skills.findAll();

        if (!skills || skills.length === 0) {
            return res.status(404).send({
                success: false,
                error: "No skills found.",
            });
        }

        return res.status(200).send({
            success: true,
            data: skills,
        });
    } catch (error) {
        console.error("Error fetching skills:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "Something went wrong while fetching all skills.",
        });
    }
};

const addSkillsController = async (req, res) => {
    try {
        const skillsDataArray = req.body.name;
        const filesArray = req.files;

        if (!skillsDataArray || skillsDataArray.length === 0) {
            return res.status(400).send({
                success: false,
                error: "At least one skill name is required.",
            });
        }

        if (!filesArray || filesArray.length === 0) {
            return res.status(400).send({
                success: false,
                error: "At least one skill icon is required.",
            });
        }

        if (Array.isArray(skillsDataArray)) {
            const newSkills = [];
            for (const [index, name] of skillsDataArray.entries()) {
                if (!name) {
                    return res.status(400).send({
                        success: false,
                        error: `Skill name is required at index ${index}.`,
                    });
                }

                const imageLocalPath = filesArray[index]?.path;
                if (!imageLocalPath) {
                    return res.status(400).send({
                        success: false,
                        error: `Skill icon is required at index ${index}.`,
                    });
                }

                const skillIcon = await uploadOnCloudinary(imageLocalPath);
                if (!skillIcon || !skillIcon.url) {
                    return res.status(500).send({
                        success: false,
                        error: `Failed to upload skill icon at index ${index}.`,
                    });
                }

                const newSkill = { name, image_url: skillIcon.url };
                newSkills.push(newSkill);
            }

            const createdSkills = await Skills.bulkCreate(newSkills);
            return res.status(200).send({
                success: true,
                data: createdSkills,
            });
        } else {
            const { name } = req.body;
            if (!name) {
                return res.status(400).send({
                    success: false,
                    error: "Skill name is required.",
                });
            }

            const imageLocalPath = req.files[0]?.path;
            if (!imageLocalPath) {
                return res.status(400).send({
                    success: false,
                    error: "Skill icon is required.",
                });
            }

            const skillIcon = await uploadOnCloudinary(imageLocalPath);
            if (!skillIcon || !skillIcon.url) {
                return res.status(500).send({
                    success: false,
                    error: "Skill icon upload failed.",
                });
            }

            const newSkill = await Skills.create({ name, image_url: skillIcon.url });
            return res.status(200).send({
                success: true,
                data: newSkill,
            });
        }
    } catch (error) {
        console.error("Error adding skills:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "An error occurred while adding the skill(s).",
        });
    }
};

const deleteSkillsController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                success: false,
                error: "ID is required.",
            });
        }

        const skill = await Skills.findByPk(id);

        if (!skill) {
            return res.status(404).send({
                success: false,
                error: "Skill not found.",
            });
        }

        await skill.destroy();

        return res.status(200).send({
            success: true,
            message: "Skill deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting skill:", error);
        return res.status(500).send({
            success: false,
            error: error.message || "An error occurred while deleting the skill.",
        });
    }
};

module.exports = {
    addSkillsController,
    deleteSkillsController,
    getAllSkillsController,
};
