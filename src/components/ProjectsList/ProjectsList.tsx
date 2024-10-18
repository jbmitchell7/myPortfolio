import React from 'react';
import { projects } from '../../data/projects';
import Project from '../Project/Project';
import './ProjectsList.scss';

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
