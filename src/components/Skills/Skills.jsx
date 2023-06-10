import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = ({ skills }) => (
  <div className="skills-container">
    <h2 className="skills-heading">Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill">{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
