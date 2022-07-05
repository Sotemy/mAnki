import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

function Navigation() {

  const user=true
  
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">

        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>

      </Nav>
      <Nav className="mr-auto">
      { user === true ? (
      
      <LinkContainer to="#profile">
        <Nav.Link>profile</Nav.Link>
      </LinkContainer>
      ) : (
          <>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          </>
      ) 
      }
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation