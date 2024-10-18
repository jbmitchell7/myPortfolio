import React from 'react';
import './About.scss';
import { skills } from '../../skills';

const About = () => (
  <div id="about" className='section'>
    <h1 className='section-header'>About Me</h1>
    <div className='about-info'>
      <div>
        <div className='flex justify-center w-100'>
          <h5 className="self-center">
            I am a Full-Stack Software Developer in the Minneapolis area looking to join your development team.
            I feel passionately about the importance of a clean, responsive, and easy-to-use application.
            I'll help you by bringing that passion to your next big project!
          </h5>
        </div>
      </div>
      <div>
        <div>
          <div className='skills-icons'>
            <div>
              
            </div>
            <div>
              {skills.map(skill => (
                <div className='skill-icon' key={skill.title}>
                  <a href={skill.link}>
                    <img src={skill.logo} className="icon" alt="skill-logo" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div xs={10}>
          <button className="resume-btn" href="resume.pdf" download="resume">
            Download Full Resume
          </button>
        </div>
      </div>
      
      
    </div>
  </div>
);

export default About;
