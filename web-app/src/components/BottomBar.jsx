import React from 'react'

import { Container, Row, Col } from "react-bootstrap"
import { BsCardText, BsCalendarEvent } from "react-icons/bs"
import { IoStatsChartOutline } from "react-icons/io5"

function BottomBar() {
  return (
    <div className="fixed-bottom">
        <Container fluid id="botombar">
            <Row>
                <Col className="bottombar_element">
                  <BsCardText />
                  Cards
                  </Col>
                <Col className="bottombar_element">
                  <BsCalendarEvent />
                  Spaced Repetition
                  </Col>
                <Col className="bottombar_element">
                  <IoStatsChartOutline />
                  Stats
                  </Col>
                <Col className="bottombar_element">
                  Settings
                  </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BottomBar