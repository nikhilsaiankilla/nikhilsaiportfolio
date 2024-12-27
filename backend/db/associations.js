const { Project } = require('../model/projectsModel');
const { Skills } = require('../model/skillsModel');

const defineAssociations = () => {
    // Define many-to-many relationship
    Project.belongsToMany(Skills, { through: 'ProjectSkills' });
    Skills.belongsToMany(Project, { through: 'ProjectSkills' });
}

module.exports = { defineAssociations }