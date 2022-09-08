import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from './Slider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
  render() {
    return (
      <div>
        <Container className='p-0 m-0 overflow-hidden'>
            <Row>
                <Col lg={3} md={3} sm={12}>
                <MegaMenu />
                </Col>

                <Col lg={9} md={9} sm={12}>
                <Slider />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default HomeTop
