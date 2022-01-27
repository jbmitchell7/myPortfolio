import React from 'react';
import Col from 'react-bootstrap/Col';
import { projects } from '../../projects';
import Project from '../Project/Project';
import './ProjectsList.scss';

const ProjectsList = () => (
  <Col id="projects">
    {projects.map(project => (
      <Project project={project} />
    ))}
  </Col>
);

export default ProjectsList;
