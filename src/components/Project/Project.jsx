import './Project.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Project = (props) => {
  const { project } = props;

  return (
    <Container className='mb-5 project'>
      <Row>
        <Col xxl={8} className="m-auto">
          <img src={project.screenshot} alt="project-screenshot" className="d-block screenshot mx-auto" />
        </Col>
        <Col className="project-info">
          <h3>{project.title}</h3>
          <h5 className='project-description'>{project.description}</h5>
          <div className='d-flex justify-content-evenly w-100'>
            <Button className='link-button' href={project.github} target="_blank">Github Source</Button>
            <Button className='link-button' href={project.projectURL} target="_blank">See Project</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Project;
