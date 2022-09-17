import React, { Component } from 'react'
import HomeSlider from './HomeSlider'
import { Col, Container, Row } from 'react-bootstrap'

export class HomeTopMobile extends Component {
  render() {
    return (
        <div>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row className='p-0 m-0 overflow-hidden'>
                <Col lg={12} md={12} sm={12}>
                <HomeSlider />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default HomeTopMobile