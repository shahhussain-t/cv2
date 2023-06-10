import React from 'react';
import Header from '../Header/Header';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills'
import './CV.css'; // Import the CSS file

const CV = () => {
  const name = 'Shah hussian';
  const title = 'MERN stack developer';
  const education = {
    institution: 'Federal Urdu Unviersity',
    degree: 'Bachelor of Computer Science',
    date: '2020 - Continue',
  };
  const experience = {
    company: 'Servixer',
    position: 'Quality Assurance',
    date: '2020 - 2021',
    description: 'addiction to codinig and problem solving',
  };
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  return (
    <div className="cv-container">
      <Header name={name} title={title} />
      <Education {...education} />
      <Experience {...experience} />
      <Skills skills={skills} />
    </div>
  );
};

export default CV;
