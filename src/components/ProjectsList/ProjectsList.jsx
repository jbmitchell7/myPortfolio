import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projects } from '../../projects';
import Project from '../Project/Project';
import './ProjectsList.scss';

const ProjectsList = () => {

  return (
    <div className="section" id="projects" >
      <h1 className='section-header'>Projects</h1>
      <Container className='projects-list'>
        <Row>
          {projects.map(project => (
            <Col xxl={4} lg={6} key={project.title}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default ProjectsList;
