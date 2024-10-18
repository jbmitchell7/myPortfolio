import React from 'react';
import './Navigation.scss';
import { AppBar, Toolbar } from '@mui/material';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar className='flex gap-5'>
      <a href="#home" className="text-xl">Home</a>
      <a href="#about" className="text-xl">About</a>
      <a href="#experience" className="text-xl">Experience</a>
      <a href="#projects" className="text-xl">Projects</a>
      <a href="#contact" className="text-xl">Contact</a>
    </Toolbar>
  </AppBar>
);

export default Navigation;
