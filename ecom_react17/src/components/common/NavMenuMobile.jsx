import React, { Component } from 'react'
import {Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuMobile from '../home/MegaMenuMobile';

class NavMenuMobile extends Component {

  constructor(){
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverstate: "ContentOverlayClose"
    }
  }


  MenuBarClickHandler=()=>{
    this.SideNavOpenClose();
  }


  ContentOverlayClickHandler=()=>{
    this.SideNavOpenClose();
  }

  SideNavOpenClose=()=>{
    let SideNavState =  this.state.SideNavState;
    let  ContentOverstate = this.state.ContentOverstate;

    if(SideNavState === "sideNavOpen"){
      this.setState({SideNavState:"sideNavClose",
    ContentOverstate:"ContentOverlayClose"})
    }else{
      this.setState({SideNavState:"sideNavOpen",
    ContentOverstate:"ContentOverlayOpen"})
    }
  }



  render() {
    return (
      <>
        <div className='TopSectionDown'>

          <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
              <Button onClick={this.MenuBarClickHandler} className='btn'><i className='fa fa-bars'></i></Button>
                <Link to="/"><img className='nav-logo' src={Logo} /></Link>
                <Button className='cart-btn'><i className='fa fa-shopping-cart'> 3 items</i></Button>
              </Col>
            </Row> 
          </Container>

          <div className={this.state.SideNavState}>    
            <MegaMenuMobile />        
          </div>

          <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverstate}>
          </div>

      </div>
      </>
    )
  }
}

export default NavMenuMobile