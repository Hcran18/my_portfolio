import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Shauna from './images/Shauna.jpg';
import Shauna2 from './images/Shauna2.jpg';
import MeAndMyWife from './images/MeAndMyWife.jpg';
import MeAndMyWife2 from './images/MeAndMyWife2.jpg';

const Home = () => {
  return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shauna}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Shauna Crandall</h1>
          <h3>REALTOR<sup>&reg;</sup></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shauna2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Shauna Crandall</h1>
          <h3>REALTOR<sup>&reg;</sup></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )
};

export default Home;