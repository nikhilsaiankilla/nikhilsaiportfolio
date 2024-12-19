const { Skills } = require('./model/skillsModel');
const { Project } = require('./model/projectsModel');
const { sequelize } = require('./db/db'); // Ensure this points to your sequelize instance

const ProjectSkills = sequelize.define('ProjectSkills', {}, { timestamps: false });

Project.belongsToMany(Skills, { through: ProjectSkills, foreignKey: 'projectId' });
Skills.belongsToMany(Project, { through: ProjectSkills, foreignKey: 'skillId' });

module.exports = { Skills, Project, ProjectSkills };
