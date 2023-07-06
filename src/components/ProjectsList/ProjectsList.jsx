import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { projects } from '../../projects';
import Project from '../Project/Project';
import './ProjectsList.scss';

const ProjectsList = () => {

  return (
    <div className="section" id="projects" >
      <h1 className='section-header'>Projects</h1>
      <Container className='projects-list'>
        {projects.map(project => (
          <Row key={project.title}>
            <Project project={project} />
          </Row>
        ))}
      </Container>
    </div>
  )
};

export default ProjectsList;
