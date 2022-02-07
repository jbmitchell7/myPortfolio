import React from 'react';
import './Contact.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Contact = () => (
  <div id="contact" className='section'>
    <h1 className='section-header'>Get in Touch with Me</h1>
    <div className='card-container'>
      <Card className='contact-card'>
        <Card.Body className='contact-card-body'>
          <h3 className='card-title'>
            If you'd like to talk to me about
            employment opportunities, my Github projects,
            or anything in between; contact me in your preferred
            method below!
          </h3>
          <Button className='contact-btn' href="mailto:jbmitchell747@gmail.com">Email Me!</Button>
          <Button className='contact-btn' href="https://github.com/jbmitchell7" target="_blank">My Github Profile</Button>
          <Button className='contact-btn' href="https://www.linkedin.com/in/jbmitchell7/" target="_blank">Connect with Me on LinkedIn</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Contact;
