import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { education, work } from '../../experience';
import './Experience.scss';

const Experience = () => (
  <div id="experience" className='section'>
    <h1 className='section-header'>Experience</h1>
    <Container className='experience-container'>
      <Row>
        <Col xxl={6} className='first-card'>
          <Card className="experience-card">
            <h3 className='experience-title'>Education</h3>
            {education.map(e => (
              <Card.Body key={e.location} className="experience-item">
                <h4>{e.location}</h4>
                <p>{e.dates}</p>
                <p>{e.diploma}</p>
              </Card.Body>
            ))}
          </Card>
        </Col>
        <Col xxl={6} className='first-card'>
          <Card className="experience-card">
            <h3 className='experience-title'>Work</h3>
            {work.map(w => (
              <Card.Body key={w.title} className="experience-item">
                <h4>{w.title}</h4>
                <p>{w.dates}</p>
                <p>{w.description}</p>
              </Card.Body>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Experience;
