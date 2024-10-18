import React from 'react';
import { projects } from '../../data/projects';
import './ProjectsList.scss';
import Project from '../Project/Project';

const ProjectsList = () => {

  return (
    <div className="section" id="projects" >
      <h1 className='section-header'>Projects</h1>
      <div className='projects-list'>
        {projects.map(project => (
          <div key={project.title}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default ProjectsList;
