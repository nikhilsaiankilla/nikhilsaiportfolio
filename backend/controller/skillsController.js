const { Skills } = require('../model/skillsModel');

const { uploadOnCloudinary } = require('../utils/cloudinary');

const getAllSkillsController = async (req, res) => {
    try {
        const skills = await Skills.findAll();

        if (!skills.length) {
            return res.status(404).send({
                status: "failed",
                message: "No skills found",
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Skills found",
            data: skills,
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

const addSkillsController = async (req, res) => {
    try {
        const skillsDataArray = req.body.name; // This should be an array of names
        const filesArray = req.files; // This will be an array of files

        // Check if the input is an array (multiple skills)
        if (Array.isArray(skillsDataArray)) {
            const newSkills = [];

            // Validate each skill and its image
            for (const [index, name] of skillsDataArray.entries()) {
                if (!name) {
                    return res.status(400).send({
                        status: "failed",
                        message: `All fields are required for skill at index ${index}`,
                    });
                }

                const imageLocalPath = filesArray[index]?.path;

                if (!imageLocalPath) {
                    return res.status(400).send({
                        status: "failed",
                        message: `Skill icon is required for the skill at index ${index}`,
                    });
                }

                const skillIcon = await uploadOnCloudinary(imageLocalPath);

                if (!skillIcon) {
                    return res.status(500).send({
                        status: "failed",
                        message: `Skill icon failed to upload for skill at index ${index}`,
                    });
                }

                // Prepare the skill data with uploaded icon URL
                const newSkill = { name, image_url: skillIcon.url };
                newSkills.push(newSkill);
            }

            // Create multiple skills at once
            const createdSkills = await Skills.bulkCreate(newSkills);

            return res.status(201).send({
                status: "success",
                message: "Skills added successfully",
                data: createdSkills,
            });
        } else {
            const { name } = req.body;

            if (!name) {
                return res.status(400).send({
                    status: "failed",
                    message: "Skill name is required",
                });
            }
            const imageLocalPath = req.files[0]?.path; 
            
            if (!imageLocalPath) {
                return res.status(400).send({
                    status: "failed",
                    message: "Skill icon is required",
                });
            }

            const skillIcon = await uploadOnCloudinary(imageLocalPath);

            if (!skillIcon) {
                return res.status(500).send({
                    status: "failed",
                    message: "Skill icon failed to upload",
                });
            }

            // Create a single skill
            const newSkill = await Skills.create({ name, image_url: skillIcon.url });

            return res.status(201).send({
                status: "success",
                message: "Skill added successfully",
                data: newSkill,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred while adding the skill(s)",
            error: error.message || error,
        });
    }
};

const deleteSkillsController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                status: "failed",
                message: "ID is required",
            });
        }

        const skill = await Skills.findByPk(id);

        if (!skill) {
            return res.status(404).send({
                status: "failed",
                message: "Skill not found",
            });
        }

        await skill.destroy();

        return res.status(200).send({
            status: "success",
            message: "Skill deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: "failed",
            message: "An error occurred while deleting the skill",
            error: error.message || error,
        });
    }
};

module.exports = {
    addSkillsController,
    deleteSkillsController,
    getAllSkillsController,
};
