import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navigation.scss';

const Navigation = () => (
  <Navbar className="color-nav" collapseOnSelect expand="md" variant="dark" sticky="top">
    <Container>
      {/* <Navbar.Brand href="#home">
        <img src="img/logo.png" className='logo' alt="logo" />
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <Nav.Link href="#home" className="link-item">Home</Nav.Link>
          <Nav.Link href="#about" className="link-item">About</Nav.Link>
          <Nav.Link href="#experience" className="link-item">Experience</Nav.Link>
          <Nav.Link href="#projects" className="link-item">Projects</Nav.Link>
          {/* <Nav.Link href="#caseStudy" className="link-item">Case Study</Nav.Link> */}
          <Nav.Link href="#contact" className="link-item">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
