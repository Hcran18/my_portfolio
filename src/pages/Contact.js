import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Kitchen from './images/Kitchen.jpg';

const Contact = () => {
  return (
      <>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Kitchen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Use This Information to Contact Me</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <ul>
                    <li>Email: shaunalcrandall@gmail.com</li>
                    <li>My Phone Number: (509)599-0949</li>
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
              <Card.Title>Follow Me on Socials!</Card.Title>
              <Card.Text>
                <a href='https://www.facebook.com/shaunasellsspokane' className='me-4 text-reset'>
                  <MDBIcon fab icon="facebook" />
                </a>
                <a href='https://www.instagram.com/ShaunaSellsSpokane/?fbclid=IwAR0BT_iQW0O91_CU7eTGPczOKlFXes90pfUweDs6y6yuhg-rVvSc8p6KwzU' className='me-4 text-reset'>
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href='https://www.linkedin.com/in/shauna-crandall-38716926/' className='me-4 text-reset'>
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href='https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zIuvKKjMiE82YLRSNagwNTYzTElLTTJNMjKwNLZIsTKosEhONEw2N0pNMzZNNrc0t_TiL85ILM1LVEguSsxLSczJAQDzoRW7&q=shauna+crandall&rlz=1C1CHZN_enUS916US916&oq=sh&aqs=chrome.1.35i39i355j46i39i175i199j69i57j69i60l5.1713j0j1&sourceid=chrome&ie=UTF-8' className='me-4 text-reset'>
                  <MDBIcon fab icon="google" />
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
    )
};

export default Contact;