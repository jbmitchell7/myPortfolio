import './Project.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
  const { project } = props;
  return (
    <Card className='project-card'>
      <Card.Body className='project-card-body'>
        <Card.Title>{project.title}</Card.Title>
        <Card.Img src={project.screenshot} alt="" className='project-screenshot' />
        <Button className='project-button' href={project.github} target="_blank">Github Source</Button>
        <Button className='project-button' href={project.projectURL} target="_blank">See Project</Button>
      </Card.Body>
    </Card>
  )
};

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
