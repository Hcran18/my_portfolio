import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Education = () => {
  return (
      <>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://brightspotcdn.byu.edu/c6/37/d653b9f8433c98325633085023b4/1905-41-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Here is a Little About My Education</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Brigham Young University 2020-2024</Card.Title>
              <Card.Text>
                <ul>
                    <li>BS in computer Science - 3.14 GPA</li>
                    <li>BYU Association for Computing Machinery (ACM) Club</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>High School Diploma 2014-2018</Card.Title>
              <Card.Text>
                <ul>
                    <li>Graduated with a 3.7 GPA</li>
                    <li>Elected as Student Body Vice President</li>
                    <li>Received award from the Mathematics Department for advanced understanding of mathematical concepts</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
    )
};

export default Education;