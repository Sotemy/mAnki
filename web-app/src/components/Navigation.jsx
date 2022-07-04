import React from 'react'
import { 
    LinkContainer
   } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from "react-bootstrap"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            <LinkContainer to="/register">
                <Nav.Link>Browser</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
        </Nav>
        <Nav>
            <Nav.Link>
                user
            </Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Navigation