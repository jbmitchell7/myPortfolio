import './App.scss';
import { Container, Row } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Home from './components/Home/Home';
//import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import ProjectsList from './components/ProjectsList/ProjectsList';

const App = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="app">
        <Row>
          <Home />
        </Row>
        <Row>
          <About />
        </Row>
        {/* <Row>
          <Experience />
        </Row> */}
        <Row>
          <ProjectsList />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </>
  );
};

export default App;
