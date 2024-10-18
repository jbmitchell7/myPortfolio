import React from 'react';
import { education, work } from '../../data/experience';
import './Experience.scss';

const Experience = () => (
  <div id="experience" className='section'>
    <h1 className='section-header'>Experience</h1>
    <div className='experience-container'>
      <div>
        <div className='first-card'>
          <div className="experience-card">
            <h3 className='experience-title'>Education</h3>
            {education.map(e => (
              <div key={e.location} className="experience-item">
                <h4>{e.location}</h4>
                <p>{e.dates}</p>
                <p>{e.diploma}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='first-card'>
          <div className="experience-card">
            <h3 className='experience-title'>Work</h3>
            {work.map(w => (
              <div key={w.title} className="experience-item">
                <h4>{w.title}</h4>
                <p>{w.dates}</p>
                <p>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
