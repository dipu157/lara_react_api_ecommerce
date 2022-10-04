import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'

class HomeTop extends Component {


  constructor()
  {
    super();
    this.state={
      parchase_guide:"",
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
          let JsonData = (response.data)[0]['parchase_guide'];
          this.setState({parchase_guide:JsonData,loaderDiv:"d-none",mainDiv:""});

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
      <div>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                <MegaMenu />
                </Col>

                <Col lg={9} md={9} sm={12}>
                <HomeSlider />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default HomeTop
