import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import login from '../../assets/images/login.png'
import axios from 'axios'
import AppURL from '../../api/AppURL';

export class Register extends Component {

    constructor(){
        super(); 
        this.state={
             name:'',
             email:'',
             password:'',
             password_confirmation:'',
             message:'',
             loggedIn:false
        }
   } 

    // Register Form Submit Method 
    formSubmit = (e) => {
        e.preventDefault();
        const data={
             name:this.state.name,
             email:this.state.email,
             password:this.state.password,
             password_confirmation:this.state.password_confirmation
        }

        axios.post(AppURL.UserRegister,data).then(response =>{ 
          
             localStorage.setItem('token',response.data.token);
             this.setState({loggedIn:true})
             this.props.setUser(response.data.user);
             
        }).catch(error=>{

        }); 

   }

  render() {

    /// After Login Redirect to Profile Page 
    if(this.state.loggedIn){
        return <Redirect to={'/profile'} />
   }

   if(localStorage.getItem('token')){
        return <Redirect to="/profile" />
   }

    return (
        <div>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                        <Form className='onboardForm' onSubmit={this.formSubmit}>
                            <h2 className='section-title'>USER REGISTRATION</h2>
                            <input className='form-control m-2' type="text" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            <input className='form-control m-2' type="email" placeholder="Enter Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                            <input className='form-control m-2' type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                            <input className='form-control m-2' type="password" placeholder="Confirm Password" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                            <Button type='submit' className="btn btn-block m-2 site-btn-login">SIGNUP</Button>
                            <br/><br/>
                            <hr />
                            <p>Have an Account ? <Link to="/login">Click Here</Link>
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

export default Register