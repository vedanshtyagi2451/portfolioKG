import Figure from 'react-bootstrap/Figure';
import image from './assets/image.png'; // path relative to the current file
import './About.css'; 



function FigureExample() {
  return (
    <Figure  className="my-custom-style">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={image}
      />
      <Figure.Caption className="textstyle">
       Hi! I'm Kanika Garg.
I am passionate about learning new things and continuously improving myself.
<br />
Currently, I’m learning coding and exploring different technologies to build practical skills.
<br />
I also have a basic understanding of video editing and designing, which helps me creatively express ideas and make impactful content.
<br />
I dedicate myself fully to every task I take on.

      </Figure.Caption>
    </Figure>
  );
}
export default FigureExample;