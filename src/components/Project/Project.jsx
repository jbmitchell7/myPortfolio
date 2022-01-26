import './Project.scss';

const Project = (props) => {
  const { project } = props;
  return (
    <div>
      <h3>{project.title}</h3>
      <img src={project.screenshot} alt="" className='project-screenshot' /> <br />
      <a href={project.github}>Github Source</a><br />
      <a href={project.projectURL}>See Project</a>
    </div>
  )
};

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
