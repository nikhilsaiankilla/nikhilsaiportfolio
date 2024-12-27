import React, { useState } from "react";
import "./style.scss";

const AdminDashboard = () => {
  // State for admin details
  const [adminName, setAdminName] = useState("Admin Name");
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [adminPhone, setAdminPhone] = useState("+1234567890");
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "#",
    github: "#",
    twitter: "#",
  });

  // State for skills and projects
  const [skills, setSkills] = useState([{ name: "Skill 1", image: "https://img.mensxp.com/media/content/2024/Aug/Image-2_66af6a216fe00.jpeg?w=780&h=1554&cc=1" }]);
  const [projects, setProjects] = useState([{ name: "Project 1", image: "https://img.mensxp.com/media/content/2024/Aug/Image-2_66af6a216fe00.jpeg?w=780&h=1554&cc=1" }]);

  // State for editing
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSkill, setIsEditingSkill] = useState(null);
  const [isEditingProject, setIsEditingProject] = useState(null);

  // Function to handle editing admin details
  const handleAdminEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSkillEdit = (index) => {
    setIsEditingSkill(index);
  };

  const handleProjectEdit = (index) => {
    setIsEditingProject(index);
  };

  const handleSaveAdminDetails = () => {
    setIsEditing(false);
  };

  const handleSaveSkill = (index, newName, newImage) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { name: newName, image: newImage };
    setSkills(updatedSkills);
    setIsEditingSkill(null);
  };

  const handleSaveProject = (index, newName, newImage) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { name: newName, image: newImage };
    setProjects(updatedProjects);
    setIsEditingProject(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-profile">
        <img
          className="admin-profile__photo"
          src="https://img.mensxp.com/media/content/2024/Aug/Image-2_66af6a216fe00.jpeg?w=780&h=1554&cc=1"
          alt="Admin"
        />
        <div className="admin-profile__info">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
              <input
                type="tel"
                value={adminPhone}
                onChange={(e) => setAdminPhone(e.target.value)}
              />
              <input
                type="url"
                value={socialLinks.linkedin}
                onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                placeholder="LinkedIn"
              />
              <input
                type="url"
                value={socialLinks.github}
                onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
                placeholder="GitHub"
              />
              <input
                type="url"
                value={socialLinks.twitter}
                onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                placeholder="Twitter"
              />
              <button onClick={handleSaveAdminDetails}>Save</button>
            </div>
          ) : (
            <div>
              <h2 className="admin-profile__name">{adminName}</h2>
              <p className="admin-profile__email">{adminEmail}</p>
              <p className="admin-profile__phone">{adminPhone}</p>
              <div className="admin-profile__social-links">
                <a href={socialLinks.linkedin} className="admin-profile__social-link">LinkedIn</a>
                <a href={socialLinks.github} className="admin-profile__social-link">GitHub</a>
                <a href={socialLinks.twitter} className="admin-profile__social-link">Twitter</a>
              </div>
              <button onClick={handleAdminEdit}>{isEditing ? "Cancel" : "Edit"}</button>
            </div>
          )}
        </div>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {isEditingSkill === index ? (
                <div>
                  <input
                    type="text"
                    defaultValue={skill.name}
                    onChange={(e) => skill.name = e.target.value}
                  />
                  <input
                    type="url"
                    defaultValue={skill.image}
                    onChange={(e) => skill.image = e.target.value}
                  />
                  <button onClick={() => handleSaveSkill(index, skill.name, skill.image)}>Save</button>
                </div>
              ) : (
                <div>
                  <img src={skill.image} alt={skill.name} />
                  <p>{skill.name}</p>
                  <button className="edit-btn" onClick={() => handleSkillEdit(index)}>Edit</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={() => setSkills([...skills, { name: "New Skill", image: "https://img.mensxp.com/media/content/2024/Aug/Image-2_66af6a216fe00.jpeg?w=780&h=1554&cc=1" }])}>
          Add Skill
        </button>
      </div>

      <div className="projects-section">
        <h3>Projects</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              {isEditingProject === index ? (
                <div>
                  <input
                    type="text"
                    defaultValue={project.name}
                    onChange={(e) => project.name = e.target.value}
                  />
                  <input
                    type="url"
                    defaultValue={project.image}
                    onChange={(e) => project.image = e.target.value}
                  />
                  <button onClick={() => handleSaveProject(index, project.name, project.image)}>Save</button>
                </div>
              ) : (
                <div>
                  <img src={project.image} alt={project.name} />
                  <p>{project.name}</p>
                  <button className="edit-btn" onClick={() => handleProjectEdit(index)}>Edit</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={() => setProjects([...projects, { name: "New Project", image: "https://img.mensxp.com/media/content/2024/Aug/Image-2_66af6a216fe00.jpeg?w=780&h=1554&cc=1" }])}>
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
