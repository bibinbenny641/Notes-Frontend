import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Topbar() {
  return (
    <div>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand >E - NOTE BOOK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
            <Link to={'/'}>
                Home
        </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to={'/'}>
                View Notes
        </Link>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar