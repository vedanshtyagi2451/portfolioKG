import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Card.css';

function Skills() {
  return (
    <CardGroup className="cardstyle">
      <Card>
        <Card.Img className='bodystyle' style={{ height: '250px', objectFit: 'cover' }} variant="top" src="https://techcresendo.com/wp-content/uploads/2020/04/Untitled_design_9_-min_ieyicj.jpg" />
        <Card.Body style={{ height: '50px'}}>
          <Card.Title>Language</Card.Title>
          <Card.Text  >
I have knowledge of Python and primarily work with C++ for development.


          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img className='bodystyle' style={{ height: '250px', objectFit: 'cover' }} variant="top" src="https://www.elaborata.com.br/img/treinamentos/original/163-desenvolvimento-front-end-com-html-css-javascript-e-bootstrap-capa.jpg" />
        <Card.Body>
          <Card.Title>Frontend Development</Card.Title>
          <Card.Text>
            I have a good understanding of frontend development, including HTML, CSS, JavaScript, and Bootstrap, which allows me to create visually appealing web interfaces.
           
          </Card.Text>
        </Card.Body>
       
      </Card>
     

      <Card>
        <Card.Img className='bodystyle' style={{ height: '250px', objectFit: 'cover'  }} variant="top" src="https://code-fin-nua.com/wp-content/uploads/2020/06/react_logo_1200x640.png" />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text   >
            I have hands-on experience with React, which I use to build dynamic and component-based user interfaces.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default Skills;