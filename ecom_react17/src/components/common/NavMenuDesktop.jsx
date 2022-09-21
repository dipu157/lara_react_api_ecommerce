import React, { Component } from 'react'
import {Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from '../../assets/images/bars.png'

class NavMenuDesktop extends Component {

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
        <Navbar fixed={'top'} className="navbar" bg='light'>
        
          <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col className="p-1 mt-1">
              {/* <Button onClick={this.MenuBarClickHandler} className='btn'><i className='fa fa-bars'></i></Button> */}
              <img onClick={this.MenuBarClickHandler} src={Bars} className='bar-img' />
                <Link to="/"><img className='nav-logo' src={Logo} /></Link>
              </Col>

              <Col className="p-1 mt-1">
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Col>
                          
              <Col className="p-1 mt-1" style={{width:'600px', float:"right"}}>
                <Link to="/notification" className="btn"> <i className='fa h4 fa-bell'></i>
                <sup><span className="badge text-white bg-danger">5</span></sup>
                </Link>
                <Link to="/favourite" className="btn"> <i className='fa h4 fa-heart'></i>
                <sup><span className="badge text-white bg-danger">3</span></sup>
                </Link>
                <a className="btn"><i className='fa h4 fa-mobile-alt'></i></a>
                <Link to="/login" className='h4 btn'>LOGIN</Link>
                <Button className='cart-btn'><i className='fa fa-shopping-cart'> 3 items</i></Button>
              </Col>

              
            </Row> 
          </Container>
      </Navbar>
      </div>

      <div className={this.state.SideNavState}>    
            <MegaMenuAll />        
          </div>

          <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverstate}>
          </div>
      </>
    )
  }
}

export default NavMenuDesktop