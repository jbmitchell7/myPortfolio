import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import './Navigation.scss';

const Navigation = () => (
  <Navbar className="color-nav" collapseOnSelect expand="md" variant="light" sticky="top">
    <Container>
      <Navbar.Brand href="#home">
        <img src="img/logo.png" className='logo' alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Pokedex</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">JakesMovieDB React</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Meetups</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Yakker</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">JakesMovieDB Angular</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
