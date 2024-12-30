import React, { useState, useEffect } from "react";
import './style.scss';
import { useSelector } from "react-redux";

const SkillsSelector = ({ onSkillSelect }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = useSelector(state => state.navSlider.skills);

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
      {skills.length > 0 ? skills.map((skill) => (
        <button
          key={skill?.id}
          className={`skill ${selectedSkills.includes(skill.id) ? "selected" : ""}`}
          onClick={(event) => toggleSkill(skill, event)}
        >
          {skill?.name}
        </button>
      )) : "no skills found please add skills"}
    </div>
  );
};

export default SkillsSelector;
