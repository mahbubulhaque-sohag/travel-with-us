import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar className="bg-info" expand="lg">
      <Container fluid className='d-flex justify-content-between ms-5 me-5'>
        <div>
        <Navbar.Brand className='text-light fs-1 fw-bold' href="#">Travel With Us</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'>
              <Button className='me-2' variant="outline-secondary">Home</Button>
              </Link>

            <Link to='/register'>
              <Button className='me-2' variant="outline-secondary">Register</Button>
            </Link>
          
            <Link to='/login'>
              <Button className='me-2' variant="outline-secondary">Login</Button>
            </Link>

          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    );
};

export default NavbarComponent;