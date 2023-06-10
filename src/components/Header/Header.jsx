import React from 'react';
import './Header.css'; // Import the CSS file

const Header = ({ name, title }) => (
  <div className="header-container">
    <h1 className="header-name">{name}</h1>
    <h3 className="header-title">{title}</h3>
  </div>
);

export default Header;
