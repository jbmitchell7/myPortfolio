import React from 'react';
import './Contact.scss';

const Contact = () => (
  <div id="contact" className='section'>
    <h1 className='section-header'>Get in Touch with Me</h1>
    <div className='card-container'>
      <div className='contact-card'>
        <div className='contact-card-body'>
          <h4 className='card-title'>
            If you'd like to talk to me about
            employment opportunities, my Github projects,
            or anything in between; contact me in your preferred
            method below!
          </h4>
          <button className='contact-btn' href="mailto:jbmitchell747@gmail.com">Email Me!</button>
          <button className='contact-btn' href="https://github.com/jbmitchell7" target="_blank">My Github Profile</button>
          <button className='contact-btn' href="https://www.linkedin.com/in/jakebmitchell/" target="_blank">Connect with Me on LinkedIn</button>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
