import React from 'react';
import './Education.css'; // Import the CSS file

const Education = ({ institution, degree, date }) => (
  <div className="education-container">
    <h2 className="education-heading">Education</h2>
    <h3 className="education-degree">{degree}</h3>
    <p className="education-institution">{institution}</p>
    <p className="education-date">{date}</p>
  </div>
);

export default Education;
