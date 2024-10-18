import React from 'react';
import './Home.scss';
import { Button, IconButton, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';

const Home = () => (
  <div id='home' className="h-screen flex flex-col justify-center items-center gap-5">
    <img src="img/jakesportrait.jpg" alt="Jake Mitchell Portrait" className="w-96 rounded-full" />
    <Typography fontSize={50}>Jake Mitchell</Typography>
    <div className="flex gap-5">
      <IconButton className="icon" href="mailto:jake@thundercloud.dev">
        <Email className='email-icon' />
        {/* <envelopeicon color="black" size="25" /> */}
      </IconButton>
      <IconButton className="icon" href="https://github.com/jbmitchell7" target="_blank" rel='noreferrer'>
        <img src="img/logos/github.svg" alt="Github Logo" />
      </IconButton>
      <IconButton className="icon" href="https://www.linkedin.com/in/jakebmitchell/" target="_blank" rel='noreferrer'>
        <img src="img/logos/linkedin.svg" alt="LinkedIn Logo" />
      </IconButton>
    </div>
    <Button variant='contained' href="#contact">Hire Me</Button>
    <div className="scroll-prompt flex flex-col items-center">
      <p>Scroll Down</p>
      <svg className="mouse-svg mr-2" width="40" height="45">
        <ellipse cx="25" cy="25" rx="14" ry="18" stroke="black" strokeWidth="2" fill="none" />
        <circle className="mouse-wheel" cx="25" cy="15" r="2" fill="black" />
      </svg>
    </div>
  </div>
);

export default Home;
