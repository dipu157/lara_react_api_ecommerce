import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export class Collections extends Component {
  render() {
    return (
      <div>
        <Container className="text-center">
            <div className='section-title text-center mb-55'>
                <h2>Collections</h2>
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
                <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/frozen-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81235&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/meat?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117424&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Collections
