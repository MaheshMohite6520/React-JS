import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Business Webinar" className="logo" />
        <span className="logo-text">Business Webinar</span>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#campaign">Campaign</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
