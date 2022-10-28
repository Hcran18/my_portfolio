import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Me from './images/Me.jpg';
import './About.css';


const About = () => {
  return (
      <>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Me}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Here is a Little About Me</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Things I Enjoy Doing</Card.Title>
              <Card.Text>
                <ul>
                    <li>I like to watch movies</li>
                    <li>I enjoy going on dates with my wife</li>
                    <li>I like to play tennis</li>
                    <li>I also enjoy going on motorcylce rides</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
    )
};

export default About;