import React from 'react';
import './About.scss';
import { skills } from '../../skills';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <div id="about" className='section'>
    <h1 className='section-header'>About Me</h1>
    <h5 className="introduction">
      I am a Full-Stack Software Developer in the Minneapolis area looking to join your development team.
      I feel passionately about the importance of a clean, responsive, and easy-to-use application.
      I'll help you by bringing that passion to your next big project!
    </h5>
    <Container className='skills-icons'>
      <Row >
        {skills.map(skill => (
          <Col className='skill-icon' key={skill.title}>
            <img src={skill.logo} className="icon" alt="skill-logo" />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default About;
