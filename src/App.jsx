import './App.scss';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import ProjectsList from './components/ProjectsList/ProjectsList';

const App = () => {
  return (
    <>
      <Navigation />
      <div fluid className="app">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <ProjectsList />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
