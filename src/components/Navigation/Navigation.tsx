import React from 'react';
import './Navigation.scss';

const Navigation = () => (
  <div className="color-nav" collapseOnSelect expand="md" variant="dark" sticky="top">
    <div>
      <div aria-controls="responsive-navbar-nav" />
      <div id="responsive-navbar-nav">
        <div className="links">
          <div href="#home" className="link-item">Home</div>
          <div href="#about" className="link-item">About</div>
          <div href="#experience" className="link-item">Experience</div>
          <div href="#projects" className="link-item">Projects</div>
          <div href="#contact" className="link-item">Contact</div>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
