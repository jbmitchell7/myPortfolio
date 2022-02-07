import React from 'react';
import Button from 'react-bootstrap/Button';
import { EnvelopeFill } from 'react-bootstrap-icons';
import './Home.scss';

const Home = () => (
  <div id="home">
    <img src="img/jakesportrait.jpg" alt="Jake Mitchell Portrait" id="portrait" />
    <h1 className='name-header'>Jake Mitchell</h1>
    <div className="social-icons">
      <a className="icon" href="mailto:jbmitchell747@gmail.com">
        <EnvelopeFill color="black" size="25" />
      </a>
      <a className="icon" href="https://github.com/jbmitchell7" target="_blank" rel='noreferrer'>
        <img src="img/logos/github.svg" alt="Github Logo" />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/jbmitchell7/" target="_blank" rel='noreferrer'>
        <img src="img/logos/linkedin.svg" alt="LinkedIn Logo" />
      </a>
    </div>
    <Button className="hire-btn" size="lg" href="#contact">Hire Me</Button>
    <div className="scroll-prompt">git
      <p>Scroll Down</p>
      <svg className="mouse-svg" width="40" height="45">
        <ellipse cx="25" cy="25" rx="14" ry="18" stroke="white" strokeWidth="2" fill="none" />
        <circle className="mouse-wheel" cx="25" cy="15" r="2" fill="white" />
      </svg>
    </div>
  </div>
);

export default Home;
