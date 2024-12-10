const { Skills } = require('./model/skillsModel')
const { Project } = require('./model/projectsModel')

Skills.hasMany(Project, { foreignKey: 'skillId' });
Project.belongsTo(Skills, { foreignKey: 'skillId' });
