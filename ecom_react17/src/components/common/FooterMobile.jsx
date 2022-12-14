import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

export class FooterMobile extends Component {
  render() {
    return (
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
        <Container className='text-center'>
            <Row className='px-0 my-5'>
                <Col className='p-2' lg={6} md={6} sm={6} xs={12} >
                    <h5 className='footer-menu-title'>Office Address</h5>
                    <p>36, Dlikusha Road, Motijheel <br />
                    Email: support@mail.com </p>
                    <h5 className='footer-menu-title'>Social Link</h5>
                    <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                    <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                    <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                </Col>

                <Col className='p-2' lg={6} md={6} sm={6} xs={12} >
                <h5 className='footer-menu-title'>Download App</h5>
                <a><img src={Apple} /></a><br /><br />
                <a><img src={Google} /></a>
                </Col>
            </Row>
        </Container>

        <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Row>
                <h6 className='text-white'> Copyright 2022 by Ahmed, All Right Reserved</h6>
            </Row>
        </Container>
      </div>
    )
  }
}

export default FooterMobile