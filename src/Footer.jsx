import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Contact</h5>
            <p><MdEmail /> kanika@example.com</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h5>Connect with me</h5>
            <a href="https://github.com/KanikaGarg1819" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub size={30} />
            </a>{' '}
            <a href="https://linkedin.com/in/kanika-garg-93802434a" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin size={30} />
            </a>
          </Col>

          <Col md={4}>
            <p className="mb-0">&copy; {new Date().getFullYear()} Kanika Garg. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
