import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export class FeaturedProduct extends Component {
  render() {
    return (
      <div>
        <Container className="text-center">
            <div className='section-title text-center mb-55'>
                <h2>Featured Product</h2>
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/peyaj-onion-imported-special-offer-100-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117394&q=best&v=1&m=400&webp=1' />
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/misti-kumra-sweet-pumpkin-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35681&q=low&v=1&m=400&webp=1' />
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/pui-shak-pui-spinach-1-bundle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D7071&q=low&v=1&m=400&webp=1' />
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/red-tomato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64361&q=low&v=1&m=400&webp=1' />
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/potol-pointed-gourd-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35666&q=best&v=1&m=400&webp=1' />
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
                </Col>

                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className="image-box card">
                  <Card.Body>
                    <img className='center' src='https://chaldn.com/_mpimage/boro-alu-big-diamond-potato-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79694&q=low&v=1&m=400&webp=1' />
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

export default FeaturedProduct