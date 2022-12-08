import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Shauna2 from './images/Shauna2.jpg';
import './About.css';


const About = () => {
  return (
      <>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shauna2}
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
              <Card.Title>As a John L. Scott broker, my mission is transactional excellence and client satisfaction. 
                        That means I work tirelessly to make your home buying or selling process as efficient, stress-free and lucrative for you as possible.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Representation</Card.Title>
              <Card.Text>
                <p>I take pride in offering high-caliber full-service residential real estate expertise. 
                   My clients are my top priority, and I focus on delivering the best possible results for them.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Expertise</Card.Title>
              <Card.Text>
                <p>The real estate market is hyperlocal, seasonal and temperamental—in other words, it can change on a dime. 
                   Technology has made information more accessible to everyone, but it can be difficult to keep up with recent events that affect home values. 
                   The benefits of working with a licensed real estate professional go far beyond what a mobile app, online video, or website can do.</p>
                <p>I provide my clients with information on market seasonality and information relevant to what is happening in their specific neighborhood. 
                   This customized analysis includes recent comparable sales that factor into an offer and acceptance strategy.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Negotiations</Card.Title>
              <Card.Text>
                <p>Successful negotiations help move a conversation forward and transform the process into an agreement that’s a win for all parties. 
                   Negotiation is not only a skill, but a mindset. I keep my clients’ best interests top of mind as I negotiate on their behalf.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Transactional Excellence</Card.Title>
              <Card.Text>
                <p>I am dedicated to transactional excellence for every listing and sale. What this means for you is that I oversee every detail of the real estate transaction. 
                   The transaction is far from over once an offer has been accepted. I monitor inspections, appraisals, title, escrow and loan processes. 
                   Communication and collaboration with all the partners and parties involved with the transaction ensures a smooth and timely closing. 
                   I am committed to my clients before, during and after a sale.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
    )
};

export default About;