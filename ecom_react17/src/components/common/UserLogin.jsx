import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import login from '../../assets/images/login.png'

export class UserLogin extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      loggedIn: false
    }
  }

  // Login Form Submit Method 
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(AppURL.UserLogin, data).then(response => {

      localStorage.setItem('token', response.data.token);
      this.setState({ loggedIn: true })
      this.props.setUser(response.data.user);

    }).catch(error => {

    });

  }

  render() {

    /// After Login Redirect to Profile Page 
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />
    }

    if (localStorage.getItem('token')) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className='text-center'>
                <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                  <Form className="onboardForm" onSubmit={this.formSubmit} >
                    <h4 className="section-title-login"> USER SING IN </h4>
                    <input className='form-control m-2' type="email"
                      placeholder="Enter Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <input className='form-control m-2' type="password"
                      placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <Button type='submit' className="btn btn-block m-2 site-btn-login">Login</Button>
                    <br /><br />
                    <hr />
                    <p>Do Not Have an Account ? <Link to="/register">Click Here</Link>
                      , Forget Password ? <Link to="/forget">Click Here</Link></p>
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
