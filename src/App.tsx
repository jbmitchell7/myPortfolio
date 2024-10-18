import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ProjectsList from './components/ProjectsList/ProjectsList';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="app">
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
