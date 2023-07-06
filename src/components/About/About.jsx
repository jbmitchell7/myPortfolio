import React from 'react';
import './About.scss';
import { skills } from '../../skills';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => (
  <div id="about" className='section'>
    <h1 className='section-header'>About Me</h1>
    <Container className='about-info'>
      <Row>
        <Col className='d-flex justify-content-center w-100'>
          <h5 className="introduction">
            I am a Full-Stack Software Developer in the Minneapolis area looking to join your development team.
            I feel passionately about the importance of a clean, responsive, and easy-to-use application.
            I'll help you by bringing that passion to your next big project!
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className='skills-icons'>
            <Row>
              
            </Row>
            <Row>
              {skills.map(skill => (
                <Col className='skill-icon' key={skill.title}>
                  <a href={skill.link}>
                    <img src={skill.logo} className="icon" alt="skill-logo" />
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <Button className="resume-btn" href="resume.pdf" download="resume">
            Download Full Resume
          </Button>
        </Col>
      </Row>
      
      
    </Container>
  </div>
);

export default About;
