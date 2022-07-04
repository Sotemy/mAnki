import React from 'react'

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"

function BB() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
        {/* <Container> */}
        <Nav id="centrify">
            {/* <Nav.Link>Browser</Nav.Link> */}
            <Row>
                <Col className="bottombar_element">
                <Nav.Link>Browser</Nav.Link>
                  </Col>
                <Col className="bottombar_element">
                <Nav.Link>Browser</Nav.Link>
                </Col>
                <Col className="bottombar_element">
                <Nav.Link>Browser</Nav.Link>
                  </Col>
                <Col className="bottombar_element">
                <Nav.Link>Browser</Nav.Link>
                  </Col>
            </Row>
        </Nav>
        {/* </Container> */}
    </Navbar>
  )
}

export default BB