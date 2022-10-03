import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import validation from '../../validation/validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Contact extends Component {

  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      message:""
    }
  }

  nameOnChange = (e) => {
    let name = e.target.value;
    this.setState({name:name});
  }

  emailOnChange = (e) => {
    let email = e.target.value;
    this.setState({email:email});
  }

  messageOnChange = (e) => {
    let message = e.target.value;
    this.setState({message:message});
  }

  onFormSubmit = (e) => {

    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;

    let sendBtn = document.getElementById('sendBtn');
    let contactForm = document.getElementById('contactForm');

    if(message.length == 0 || name.length == 0){
      toast.error("Empty Field");
    }else{
      sendBtn.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name",name)
      MyFormData.append("email",email)
      MyFormData.append("message",message)

      axios.post(AppURL.PostContact,MyFormData)
      .then(function (response){
        if(response.status == 200 && response.data == 1){
          toast.success("Message Sent Successfully");
          sendBtn.innerHTML = "Send";
          contactForm.reset();
        }else{
          alert("error");
          sendBtn.innerHTML = "Send";
        }
      })
      .catch(function (error){
        alert(error);
        sendBtn.innerHTML = "Send";
      })
    }

    e.preventDefault();
  }


  render() {
    return (
      <>
       <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                        <Form id="contactForm" onSubmit={this.onFormSubmit} className='onboardForm'>
                            <h2 className='section-title'>Contact Page</h2>
                            <h6 className='section-sub-title'>Please Contact With Us</h6>
                            <input onChange={this.nameOnChange} className='form-control m-2' type="text" placeholder="Name" />
                            <input onChange={this.emailOnChange} className='form-control m-2' type="email" placeholder="Email" />
                            <textarea onChange={this.messageOnChange} className='form-control m-2' placeholder='Message' rows={3} cols={2}></textarea>
                            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">SEND</Button>
                        </Form>
                        
                    </Col>

                    <Col className='p-0 Desktop mt-2' lg={6} md={6} sm={6} xs={6}>
                    <p>36, Dlikusha Road For the Test Purpose, Motijheel <br />
                    Email: support@mail.com </p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.860418966903!2d90.38317061429693!3d23.75235639461993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b920eb4eb0eb%3A0xf6281797a0093b88!2sBRB%20Hospitals%20Ltd!5e0!3m2!1sen!2sbd!4v1663507315862!5m2!1sen!2sbd" 
                    width="550" height="400" styles="border:0;" allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>


                </Col>
            </Row>
        </Container>

        <ToastContainer /> 
      </>
    )
  }
}

export default Contact
