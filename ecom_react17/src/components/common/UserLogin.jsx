import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import login from '../../assets/images/login.png'

export class UserLogin extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                        <Form className='onboardForm'>
                            <h2 className='section-title'>USER SIGN IN</h2>
                            <h6 className='section-sub-title'>Please Enter Your Mobile Number</h6>
                            <input className='form-control m-2' type="text" placeholder="Enter Mobile Number" />
                            <Button className="btn btn-block m-2 site-btn-login">Next</Button>
                        </Form>
                        
                    </Col>

                    <Col className='p-0 Desktop m-0' lg={6} md={6} sm={6} xs={6}>
                        <img className='onboardBanner' src={login} />
                    </Col>
                </Row>


                </Col>
            </Row>

            
        </Container>
      </div>
    )
  }
}

export default UserLogin
