import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { education, work } from '../../experience';
import './Experience.scss';

const Experience = () => (
  <div id="experience" className='section'>
    <h1 className='section-header'>Experience</h1>
    <Container className='experience-container'>
      <Row>
        <Col>
          <Card className="experience-card">
            <Card.Body>
              <h4>{education[0].location}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="experience-card">
            <Card.Body>
              <h4>{work[0].title}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Experience;
