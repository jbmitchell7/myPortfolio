import Grid2 from '@mui/material/Grid2';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ProjectsList from './components/ProjectsList/ProjectsList';

const App = () => {
  return (
    <Grid2 container justifyContent='center' alignItems='center' spacing={2}>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <ProjectsList />
      <Contact />
    </Grid2>
  );
};

export default App;
