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
            <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Education">
            <Nav.Link>Education</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Experience">
            <Nav.Link>Experience</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Projects">
            <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Reviews">
            <Nav.Link>Reviews</Nav.Link>
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