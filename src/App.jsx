import './App.scss';
import { projects } from "./projects";
import Navigation from './components/Navigation/Navigation';
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <div>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;
