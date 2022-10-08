import axios from 'axios';
import React, { Component } from 'react'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export class privacy extends Component {

  constructor()
  {
    super();
    this.state={
      privacy:"",
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }

  componentDidMount(){

    let SiteInfoPrivacy = sessionStorage.getItem("AllSiteInfo");

    if(SiteInfoPrivacy == null)
    {
      axios.get(AppURL.AllSiteInfo).then(response => {
        let StatusCode = response.status;
        if(StatusCode == 200){
          let JsonData = (response.data)[0]['privacy'];
          this.setState({privacy:JsonData,loaderDiv:"d-none",mainDiv:""});

          sessionStorage.setItem("SiteInfoPrivacy",JsonData)
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
      this.setState({parchase_guide:SiteInfoPrivacy,loaderDiv:"d-none",mainDiv:""});
    }
  }


  render() {
    return (
      <>
       <Container>
       <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
              <Breadcrumb.Item> <Link to="/privacy"> Privacy </Link> </Breadcrumb.Item>
            </Breadcrumb>
          </div>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

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
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>

                      </div>
                    </div>
                  </div>
                </div>

              <div className={this.state.mainDiv}>
                <Form className='onboardForm'>
                  <h1 className='text-center'>Privacy</h1>
                    <h2 className='section-title'>Privacy Policy</h2>
                    {this.state.privacy}

                </Form>
              </div>
                


                </Col>
            </Row>            
        </Container>  
        <ToastContainer />
      </>
    )
  }
}

export default privacy