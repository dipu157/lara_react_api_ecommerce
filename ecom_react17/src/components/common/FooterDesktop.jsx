import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class FooterDesktop extends Component {

  constructor()
  {
    super();
    this.state={
      address:"",
      android_app_link:"",
      ios_app_link:"",
      facebook_link:"",
      twitter_link:"",
      instagram_link:"",
      copyright_text:"",
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }

  componentDidMount(){

    let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

    if(SiteInfoPurchase == null)
    {
      axios.get(AppURL.AllSiteInfo).then(response => {
        let StatusCode = response.status;
        if(StatusCode == 200){
          let JsonData = (response.data)[0];
          this.setState({
            address:JsonData['address'],
            android_app_link:JsonData['android_app_link'],
            ios_app_link:JsonData['ios_app_link'],
            facebook_link:JsonData['facebook_link'],
            twitter_link:JsonData['twitter_link'],
            instagram_link:JsonData['instagram_link'],
            copyright_text:JsonData['copyright_text'],
            loaderDiv:"d-none",
            mainDiv:""
          });

          sessionStorage.setItem("SiteInfoPurchase",JsonData)
        }
        else{
          toast.error("Something Went Wrong",{
              position:"bottom-center"
          });
        }
      }).catch(error => {
        toast.error("Something Went Wrong",{
          position:"bottom-center"
      });
      }); 
    }    
    else{
      this.setState({parchase_guide:SiteInfoPurchase,loaderDiv:"d-none",mainDiv:""});
    }
  }


  render() {
    return (
      <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
        <Container>
            <Row className='px-0 my-5'>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12} >

                <div className={this.state.loaderDiv}>
                  <div class="ph-item">
                    <div class="ph-col-12">
                      <div class="ph-row">

                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>

                      </div>
                    </div>
                  </div>
                </div>


                    <h5 className='footer-menu-title'>Office Address</h5>
                    <p>{this.state.address} <br />
                    Email: support@mail.com </p>
                    <h5 className='footer-menu-title'>Social Link</h5>
                    <a href={this.state.facebook_link} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
                    <a href={this.state.instagram_link} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
                    <a href={this.state.twitter_link} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
                </Col>

                <Col className='p-2' lg={3} md={3} sm={6} xs={12} >
                <h5 className='footer-menu-title'>Company</h5>
                <Link to="/" className="footer-link">About Us</Link><br />
                <Link to="/" className="footer-link">Profile</Link><br />
                <Link to="/purchase" className="footer-link">Return Policy</Link><br />
                <Link to="/contact" className="footer-link">Contact Us</Link>
                </Col>

                <Col className='p-2' lg={3} md={3} sm={6} xs={12} >
                <h5 className='footer-menu-title'>More Info </h5>
                <Link to="/" className="footer-link">How to Purchase</Link><br />
                <Link to="/" className="footer-link">Privacy Policy</Link><br />
                <Link to="/purchase" className="footer-link">Refund Policy</Link>
                </Col>

                <Col className='p-2' lg={3} md={3} sm={6} xs={12} >
                <h5 className='footer-menu-title'>Download App</h5>
                <a><img src={Apple} /></a><br /><br />
                <a><img src={Google} /></a><br /><br />
                Change Language<br /><br />
                <div id='google_translate_element'></div>
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

export default FooterDesktop