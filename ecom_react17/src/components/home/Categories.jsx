import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export class Categories extends Component {
  render() {
    return (
      <div>
        <Container className="text-center" fluid={true}>
            <div className='section-title text-center mt-3 mb-55'>
                <h2>Categories</h2>
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
                <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>                        
                    </Row>
                </Col>

                <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src='https://static-01.daraz.com.bd/p/mdc/314e385638e1cda418960530356fde20.jpg' />
                                    <h5 className='category-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>                        
                    </Row>
                </Col>                
            </Row>
        </Container>
      </div>
    )
  }
}

export default Categories
