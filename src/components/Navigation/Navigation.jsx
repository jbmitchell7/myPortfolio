import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navigation.scss';

const Navigation = () => (
  <Navbar className="color-nav" collapseOnSelect expand="md" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">
        <img src="img/logo.png" className='logo' alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
