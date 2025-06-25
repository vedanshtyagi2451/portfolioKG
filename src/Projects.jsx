import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

function Projects() {
  return (
    <div className="text-center">
      <Card className="project-card">
        <Card.Body>
          <Card.Title>LeetMetric</Card.Title>
          <Card.Text>
            LeetMetric takes in LeetCode Username as input and shows the number of questions solved, category wise.
          </Card.Text>
          <Button
  variant="primary"
  onClick={() => window.open('https://leetmetricproject.netlify.app/', '_blank')}
>
  Know more
</Button>

        </Card.Body>
      </Card>

      <Card className="project-card">
        <Card.Body>
          <Card.Title>boAt Clone</Card.Title>
          <Card.Text>
            This was the first time I cloned a website. The home page here is responsive and all the links are actually linked to the original website.
          </Card.Text>
             <Button
  variant="primary"
  onClick={() => window.open('https://websiteboat.netlify.app/', '_blank')}
>
  Know more
</Button>
        </Card.Body>
      </Card>

      <Card className="project-card">
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Text>
            A news website that provides you with the latest news category-wise — be it sports, health, and many more.
          </Card.Text>
            <Button
  variant="primary"
>
  Know more
</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
