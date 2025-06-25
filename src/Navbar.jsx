import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function BasicNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>

          {/* Social icons + badge */}
          <div className="d-flex align-items-center gap-3">
            <a href="https://github.com/KanikaGarg1819" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/kanika-garg-93802434a" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={24} />
            </a>
            <Badge bg="primary">Let's Connect</Badge>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
