const { Project } = require('../model/projectsModel')
const { Skills } = require('../model/skillsModel')

Project.belongsToMany(Skills, { through: 'ProjectSkills' });
Skills.belongsToMany(Project, { through: "ProjectSkills" });

module.exports = { Skills, Project }