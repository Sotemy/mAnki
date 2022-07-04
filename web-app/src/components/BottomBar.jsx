import React from 'react'

import { Container, Row, Col } from "react-bootstrap"

function BottomBar() {
  return (
    <div className="fixed-bottom">
        <Container fluid id="botombar">
            <Row>
                <Col className="bottombar_element">Cards</Col>
                <Col className="bottombar_element">Spaced Repetition</Col>
                <Col className="bottombar_element">Stats</Col>
                <Col className="bottombar_element">Settings</Col>
            </Row>
        </Container>
    </div>
  )
}

export default BottomBar