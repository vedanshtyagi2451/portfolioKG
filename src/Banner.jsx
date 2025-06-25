import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "./assets/react.svg"; // Make sure the file exists

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Programmer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Kanika Garg . &nbsp;    
                  I am a enthusiast  `}
                    <span className="txt-rotate"  dataPeriod="1000" data-rotate='[  "Programmer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I’m passionate about learning new things and improve myself.
                    Explore my work below and let’s connect to build something meaningful together.
                  </p>
                 <button onClick={() => {
  const footerSection = document.getElementById('footer');
  if (footerSection) {
    footerSection.scrollIntoView({ behavior: 'smooth' });
  }
}}>
  Let’s Connect <BsArrowRightCircle size={25} />
</button>

                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <div style={{
  width: '400px',   // Adjust width
  height: '500px',  // Adjust height
  overflow: 'hidden',
  borderRadius: '20px'  // Optional: for rounded crop
}}>
  <img
    src="https://cdn1.vectorstock.com/i/1000x1000/83/05/elegant-business-woman-portrait-vector-24508305.jpg"
    alt="Header"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'  // 'cover' crops to fill, 'contain' keeps full image
    }}
  />
</div>


                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
