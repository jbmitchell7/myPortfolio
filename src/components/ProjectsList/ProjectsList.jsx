import React from 'react';
import Col from 'react-bootstrap/Col';
import { projects } from '../../projects';
import Project from '../Project/Project';
import './ProjectsList.scss';

const ProjectsList = () => {
  return <>
    {projects.map(project => (
      <Col md={3} id="projects" key={project.title}>
        <Project project={project} />
      </Col>
    ))}
  </>
};

export default ProjectsList;
