import React from 'react';
import './About.scss';
import { skills } from '../../data/skills';
import { Grid2, Button, Typography } from '@mui/material';

const About = () => (
  <Grid2 id="about" justifyContent='center' alignItems='center' className='h-screen text-center' rowSpacing={20}>
    <Typography fontSize={50}>About Me</Typography>

    <h5 className='text-md'>
      I am a Full-Stack Software Developer in the Minneapolis area looking to join your development team.
      I feel passionately about the importance of a clean, responsive, and easy-to-use application.
      I'll help you by bringing that passion to your next big project!
    </h5>

    <div className='flex justify-center'>
      {skills.map(skill => (
        <div key={skill.title}>
          <a href={skill.link}>
            <img src={skill.logo} className="w-16" alt="skill-logo" />
          </a>
        </div>
      ))}
    </div>

    <Button variant='contained' className="resume-btn">
      Download Full Resume
    </Button>
  </Grid2>
);

export default About;
