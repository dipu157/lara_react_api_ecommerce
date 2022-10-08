import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import forget from '../../assets/images/forget.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppURL from '../../api/AppURL';

export class Reset extends Component {

  constructor(){
    super(); 
    this.state={
         token:'',
         email:'',
         password:'',
         password_confirmation:'',
         message:'' 
        
    }
} 


// Reset Form Submit Method 
formSubmit = (e) => {
    e.preventDefault();
    const data={
         token:this.state.token,
         email:this.state.email,
         password:this.state.password,
         password_confirmation:this.state.password_confirmation
    }

    axios.post(AppURL.UserResetPassword,data).then(response =>{ 
      
         this.setState({message:response.data.message})

         toast.success(this.state.message,{
              position: "top-right"
         });
         document.getElementById("fromreset").reset();
         
    }).catch(error=>{
         this.setState({message:error.response.data.message})
         toast.error(this.state.message,{
              position: "top-right"
         });
    }); 

}

  render() {
    return (
      <div>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                        <Form className='onboardForm' onSubmit={this.formSubmit} id="fromreset">
                            <h2 className='section-title'>RESET PASSWORD</h2>
                            <input className='form-control m-2' type="text" placeholder="Enter Token" onChange={(e)=>{this.setState({token:e.target.value})}} />
                            <input className='form-control m-2' type="email" placeholder="Enter Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                            <input className='form-control m-2' type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                            <input className='form-control m-2' type="password" placeholder="Confirm Password" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                            <Button type="submit" className="btn btn-block m-2 site-btn-login">RESET</Button>
                            <br/><br/>
                            <hr />
                            <p>Have an Account ? <Link to="/login">Click Here</Link></p>
                        </Form>                        
                    </Col>

                    <Col className='p-0 Desktop m-0' lg={6} md={6} sm={6} xs={6}>
                        <img className='onboardBanner' src={forget} />
                    </Col>
                </Row>
                </Col>
            </Row>            
        </Container>
        <ToastContainer />
      </div>
    )
  }
}

export default Reset