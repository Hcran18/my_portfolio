import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Reviews.css';
import Bathroom from './images/Bathroom.jpg';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [paragraph, setParagraph] = useState("");
    
    const fetchReviews = async() => {
        try {      
        const response = await axios.get("/api/reviews");
        setReviews(response.data.reviews);
        } catch(error) {
        setError("error retrieving reviews: " + error);
        }
    };
    
    const createReview = async() => {
    try {
      await axios.post("/api/reviews", {name: name, paragraph: paragraph});
    } catch(error) {
      setError("error adding a ticket: " + error);
    }
  };
  
  const deleteOneReview = async(review) => {
    try {
      await axios.delete("/api/reviews/" + review.id);
    } catch(error) {
      setError("error deleting a review" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchReviews();
  },[]);

  const addReview = async(e) => {
    e.preventDefault();
    await createReview();
    fetchReviews();
    setName("");
    setParagraph("");
  }

  const deleteReview = async(review) => {
    await deleteOneReview(review);
    fetchReviews();
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    /*<button onClick={e => deleteReview(review)}>Click Here to Delete the Review</button> Use this to delete reviews*/
  return (
      <>
          <Carousel controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Bathroom}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Here is Some Testimonials From My Customers</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <div class='text-center'>
        <Button variant="primary" onClick={handleShow}>
          Click Here to Leave a Review
        </Button>
        </div>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Leave a Review</Modal.Title>
          </Modal.Header>
          <form onSubmit={addReview}>
            <div class='text-center'>
              <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
              </label>
            </div>
            <div class='text-center'>
              <label>
                Review:
                <textarea value={paragraph} onChange={e=>setParagraph(e.target.value)}></textarea>
              </label>
            </div>
            <div className="float-right">
            
            <Button variant="primary" type="submit" value="Submit" onClick={handleClose}> Submit</Button>
            </div>
          </form>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        
        <div className="App">
          {error}
          <h1>Reviews</h1>
          {reviews.map( review => (
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <div key={review.id} className="review">
                    <div className="Review">
                      <Card.Title>{review.name}</Card.Title>
                        <Card.Text>
                          <p>{review.paragraph}</p>
                        </Card.Text>
                    </div>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          ))}     
        </div>
      </>
    )
};

export default Reviews;