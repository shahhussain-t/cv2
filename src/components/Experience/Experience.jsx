import React from 'react';
import './Experience.css'; // Import the CSS file

const Experience = ({ company, position, date, description }) => (
  <div className="experience-container">
    <h2 className="experience-heading">Experience</h2>
    <h3 className="experience-position">{position}</h3>
    <p className="experience-company">{company}</p>
    <p className="experience-date">{date}</p>
    <p className="experience-description">{description}</p>
  </div>
);

export default Experience;
