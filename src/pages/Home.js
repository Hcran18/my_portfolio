import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Me from './images/Me.jpg';
import MeAndMyWife from './images/MeAndMyWife.jpg';
import MeAndMyWife2 from './images/MeAndMyWife2.jpg';

const Home = () => {
  return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Me}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Hunter Crandall</h1>
          <h3>This Website Should Help You to Get to Know Me</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MeAndMyWife}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Hunter Crandall</h1>
          <h3>Find Out About the Experience That I Have</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MeAndMyWife2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Hunter Crandall</h1>
          <h3>See Some of the Projects That I Have Worked On</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )
};

export default Home;