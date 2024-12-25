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

        console.log("adding skill started");
        
        const skillsDataArray = req.body.name; // This should be an array of names
        const filesArray = req.files; // This will be an array of files

        console.log("checking if array of skills");
        // Check if the input is an array (multiple skills)
        if (Array.isArray(skillsDataArray)) {
            const newSkills = [];

            console.log("if array of skills then seperating them");
            // Validate each skill and its image
            for (const [index, name] of skillsDataArray.entries()) {

                console.log("checking if name is there in individial skill array", index);
                if (!name) {
                    return res.status(400).send({
                        status: "failed",
                        message: `Skill name is required at index ${index}`,
                    });
                }

                console.log("extracting file path for index ", index);
                const imageLocalPath = filesArray[index]?.path;

                if (!imageLocalPath) {
                    return res.status(400).send({
                        status: "failed",
                        message: `Skill icon is required at index ${index}`,
                    });
                }

                console.log("uploading image to cloudinary for index ", index);
                const skillIcon = await uploadOnCloudinary(imageLocalPath);

                console.log("checking is the skills uploaded or not");
                
                if (!skillIcon) {
                    return res.status(500).send({
                        status: "failed",
                        message: `Failed to upload skill icon at index ${index}`,
                    });
                }

                console.log("pushing individual skill into the newSkills Array");
                
                // Prepare the skill data with uploaded icon URL
                const newSkill = { name, image_url: skillIcon.url };
                newSkills.push(newSkill);
            }


            console.log("creating multiple skills at once here");
            
            // Create multiple skills at once
            const createdSkills = await Skills.bulkCreate(newSkills);

            console.log("skills created successfully");
            return res.status(201).send({
                status: "success",
                message: "Skills added successfully",
                data: createdSkills,
            });
        } else {
            const { name } = req.body;

            console.log('in individual skill section or this is else block');
            if (!name) {
                return res.status(400).send({
                    status: "failed",
                    message: "Skill name is required",
                });
            }

            console.log('in individual skill section extracting local file path');
            const imageLocalPath = req.files[0]?.path; 

            if (!imageLocalPath) {
                return res.status(400).send({
                    status: "failed",
                    message: "Skill icon is required",
                });
            }

            console.log("uploading to cloudinary in individual");
            
            const skillIcon = await uploadOnCloudinary(imageLocalPath);

            if (!skillIcon) {
                return res.status(500).send({
                    status: "failed",
                    message: "Skill icon upload failed",
                });
            }

            console.log("creating new skill in individual");
            
            // Create a single skill
            const newSkill = await Skills.create({ name, image_url: skillIcon.url });

            return res.status(201).send({
                status: "success",
                message: "Skill added successfully",
                data: newSkill,
            });
        }
    } catch (error) {
        console.error("Error while adding skills:", error);
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
