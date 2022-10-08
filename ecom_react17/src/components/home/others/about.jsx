import axios from 'axios';
import React, { Component } from 'react'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export class about extends Component {

  constructor() {
    super();
    this.state = {
      about: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {

    let SiteInfoAbout = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoAbout == null) {
      axios.get(AppURL.AllSiteInfo).then(response => {
        let StatusCode = response.status;
        if (StatusCode == 200) {
          let JsonData = (response.data)[0]['about'];
          this.setState({ about: JsonData, loaderDiv: "d-none", mainDiv: "" });

          sessionStorage.setItem("SiteInfoAbout", JsonData)
        }
        else {
          toast.error("Something Went Wrong", {
            position: "bottom-center"
          });
        }
      }).catch(error => {
        toast.error("Something Went Wrong", {
          position: "bottom-center"
        });
      });
    }
    else {
      this.setState({ about: SiteInfoAbout, loaderDiv: "d-none", mainDiv: "" });
    }
  }

  render() {
    return (
      <>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
              <Breadcrumb.Item> <Link to="/about"> About </Link> </Breadcrumb.Item>
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
                  <h1 className='text-center'>About</h1>
                  <h2 className='section-title'>About Us</h2>
                  {this.state.about}

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

export default about