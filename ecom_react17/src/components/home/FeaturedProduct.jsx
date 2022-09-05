import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class FeaturedProduct extends Component {
  render() {
    return (
      <div>
        <Container className="text-center" fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2>Featured Product</h2>
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default FeaturedProduct