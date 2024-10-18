import { ProjectItem } from '../../data/projects';
import './Project.scss';

const Project = (props: {project: ProjectItem}) => {
  const { project } = props;

  return (
    <div className='mb-5 project'>
      <div>
        <div className="m-auto">
          <img src={project.screenshot} alt="project-screenshot" className="d-block screenshot mx-auto" />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <h5 className='project-description'>{project.description}</h5>
          <div className='flex justify-evenly w-100'>
            <a className='link-button' href={project.github} target="_blank">Github Source</a>
            <a className='link-button' href={project.projectUrl} target="_blank">See Project</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;
