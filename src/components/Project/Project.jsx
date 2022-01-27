import './Project.scss';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
      <Modal show={show} onHide={handleClose} className='project-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={project.screenshot} alt="project-screenshot" />
          <Button className='project-button' href={project.github} target="_blank">Github Source</Button>
          <Button className='project-button' href={project.projectURL} target="_blank">See Project</Button>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Project;
