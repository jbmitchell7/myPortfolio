import './Project.scss';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


const Project = (props) => {
  const { project } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="open-modal-btn">
        <Card className='project-card'>
          <Card.Body className='project-card-body'>
            <h4 className='project-title'>{project.title}</h4>
            <Card.Img src={project.screenshot} alt="" className='project-screenshot' />
          </Card.Body>
        </Card>
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName='project-modal' centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xxl={8} className="m-auto">
                <img src={project.screenshot} alt="project-screenshot" className="d-block modal-screenshot mx-auto" />
              </Col>
              <Col className="modal-info">
                <h4 className='project-description'>{project.description}</h4>
                <Button className='modal-button' href={project.github} target="_blank">Github Source</Button>
                <Button className='modal-button' href={project.projectURL} target="_blank">See Project</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Project;
