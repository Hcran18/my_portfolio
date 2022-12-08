import { Outlet, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/About">
            <Nav.Link>About Me</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Reviews">
            <Nav.Link>Testimonials</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;