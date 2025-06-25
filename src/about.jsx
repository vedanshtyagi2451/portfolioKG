import { Container, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import image from './assets/image.png';
import './About.css';

function FigureExample() {
  return (
    <Container className="about-container text-center">
      <Row className="align-items-center justify-content-center">
        {/* Image column - first on desktop, second on mobile */}
        <Col xs={12} md={4} className="order-2 order-md-1">
          <Figure>
            <Figure.Image
              className="fixed-image"
              src={image}
              alt="Kanika Garg"
            />
          </Figure>
        </Col>

        {/* Text column - heading + text */}
        <Col xs={12} md={8} className="order-1 order-md-2">

          <Figure.Caption className="textstyle">
            <p>Hi! I'm <strong>Kanika Garg</strong>.</p>
            <p>I am passionate about learning new things and continuously improving myself.</p>
            <p>Currently, I’m learning coding and exploring different technologies to build practical skills.</p>
            <p>I also have a basic understanding of video editing and designing, which helps me creatively express ideas and make impactful content.</p>
            <p>I dedicate myself fully to every task I take on.</p>
          </Figure.Caption>
        </Col>
      </Row>
    </Container>
  );
}
export default FigureExample;
