import React, { useState, useEffect } from "react";
import './style.scss';

const SkillsSelector = ({ onSkillSelect }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    { id: 1, name: "React" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "Express" },
    { id: 4, name: "MySQL" },
    { id: 5, name: "CSS" },
    { id: 6, name: "JavaScript" },
  ];

  const toggleSkill = (skill, event) => {
    event.preventDefault();

    setSelectedSkills((prev) =>
      prev.includes(skill.id)
        ? prev.filter((id) => id !== skill.id)
        : [...prev, skill.id]
    );
  };
  
  useEffect(() => {
    onSkillSelect(selectedSkills);
  }, [selectedSkills, onSkillSelect]);

  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <button
          key={skill.id}
          className={`skill ${selectedSkills.includes(skill.id) ? "selected" : ""}`}
          onClick={(event) => toggleSkill(skill, event)}
        >
          {skill.name}
        </button>
      ))}
    </div>
  );
};

export default SkillsSelector;
