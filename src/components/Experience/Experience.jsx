import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { education, work } from '../../experience';
import './Experience.scss';

const Experience = () => (
  <div id="experience" className='section'>
    <h1 className='section-header'>Experience</h1>
    <Container className='experience-container'>
      <Row>
        <Col xl={6}>
          <Card className="experience-card">
            <h2 className='experience-title'>Education</h2>
            {education.map(e => (
              <Card.Body key={e.location}>
                <h4>{e.location}</h4>
                <p>{e.dates}</p>
                <p>{e.diploma}</p>
              </Card.Body>
            ))}
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="experience-card">
            <h2 className='experience-title'>Work</h2>
            {work.map(w => (
              <Card.Body key={w.title}>
                <h4>{w.title}</h4>
                <p>{w.dates}</p>
                <p>{w.description}</p>
              </Card.Body>
            ))}
          </Card>
        </Col>
        <Col xs={10}>
          <Button className="resume-btn" href="resume.pdf" download="resume">
            Download Full Resume
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Experience;
