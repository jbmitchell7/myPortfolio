import './Project.scss';

const Project = (props) => {
  const { project } = props;

  return (
    <div className='mb-5 project'>
      <div>
        <div xxl={8} className="m-auto">
          <img src={project.screenshot} alt="project-screenshot" className="d-block screenshot mx-auto" />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <h5 className='project-description'>{project.description}</h5>
          <div className='flex justify-evenly w-100'>
            <button className='link-button' href={project.github} target="_blank">Github Source</button>
            <button className='link-button' href={project.projectURL} target="_blank">See Project</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;
