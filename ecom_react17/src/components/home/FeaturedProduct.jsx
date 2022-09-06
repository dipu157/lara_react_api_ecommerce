import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

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
                <Col xl={2} lg={2} md={2} sm={2}>
                <Card className="image-box">
                  <Card.Body>

                  </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default FeaturedProduct