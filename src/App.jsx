import './App.css';
import { projects } from "./projects";

const App = () => {
  return (
    <div className="App">
      {projects.map((data, key) => {
        return (
          <div key={key}>
            <h3>{data.title}</h3>
            <img src={data.screenshot} alt="" className='project-screenshot' /> <br />
            <a href={data.github}>Github Source</a><br />
            <a href={data.projectURL}>See Project</a>
          </div>
        );
      })}
    </div>
  );
};

export default App;
