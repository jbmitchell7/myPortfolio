import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { education, work } from '../../experience';
import './Experience.scss';

const Experience = () => (
  <div id="experience" className='section'>
    <h1 className='section-header'>Experience</h1>
    <Container className='experience-container'>
      <Row>
        <Col xxl={6}>
          <Card className="experience-card">
            <h2 className='experience-title'>Education</h2>
            {education.map(e => (
            <Card.Body key={e.location} className="experience-item">
                <h3>{e.location}</h3>
                <h5>{e.dates}</h5>
                <h5>{e.diploma}</h5>
              </Card.Body>
            ))}
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="experience-card">
            <h2 className='experience-title'>Work</h2>
            {work.map(w => (
              <Card.Body key={w.title} className="experience-item">
                <h3>{w.title}</h3>
                <h5>{w.dates}</h5>
                <h5>{w.description}</h5>
              </Card.Body>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Experience;
