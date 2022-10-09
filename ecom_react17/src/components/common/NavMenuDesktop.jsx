import React, { Component } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from '../../assets/images/bars.png'
import axios from 'axios';
import AppURL from '../../api/AppURL';

class NavMenuDesktop extends Component {

  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverstate: "ContentOverlayClose",
      SearchKey: "",
      SearchRedirectStatus: false,
      cartCount:0
    }
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SearchOnClick = this.SearchOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  componentDidMount(){
    let product_code = this.props.product_code;
    axios.get(AppURL.CartCount(product_code)).then((response)=>{
      this.setState({cartCount:response.data})
    })
  }

  logout = () => {
    localStorage.clear();
  }

  SearchOnChange(e) {
    let SearchKey = e.target.value;
    this.setState({ SearchKey: SearchKey });
  }

  SearchOnClick() {
    if (this.state.SearchKey.length > 2) {
      this.setState({ SearchRedirectStatus: true });
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Redirect to={"/productbysearch/" + this.state.SearchKey} />
    }
  }


  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  }


  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverstate = this.state.ContentOverstate;

    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverstate: "ContentOverlayClose"
      })
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverstate: "ContentOverlayOpen"
      })
    }
  }


  render() {

    let buttons;
    if (localStorage.getItem('token')) {
      buttons = (
        <div>
          <Link to="/cart" className='cart-btn'><i className='fa fa-shopping-cart'> {this.state.cartCount} items</i></Link>
          <Link to="/profile" className='h4 btn'>PROFILE</Link>
          <Link to="/" onClick={this.logout} className='h4 btn'>LOGOUT</Link>
        </div>
      )

    } else {
      buttons = (
        <div>
          <Link to="/cart" className='cart-btn'><i className='fa fa-shopping-cart'> 0 items</i></Link>
          <Link to="/register" className='h4 btn'>REGISTER</Link>
          <Link to="/login" className='h4 btn'>LOGIN</Link>
        </div>
      )

    }

    return (
      <>
        <div className='TopSectionDown'>
          <Navbar fixed={'top'} className="navbar" bg='light'>

            <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col className="p-1 mt-1">
                  <img onClick={this.MenuBarClickHandler} src={Bars} className='bar-img' />
                  <Link to="/"><img className='nav-logo' src={Logo} /></Link>
                </Col>

                <Col className="p-1 mt-1">
                  <div className="input-group w-100">
                    <input onChange={this.SearchOnChange} type="text" className="form-control" />
                    <Button onClick={this.SearchOnClick} type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>

                <Col className="p-1 mt-1">
                  <Link to="/notification" className="btn"> <i className='fa h4 fa-bell'></i>
                    <sup><span className="badge text-white bg-danger">5</span></sup>
                  </Link>
                  <Link to="/favourite" className="btn"> <i className='fa h4 fa-heart'></i>
                    <sup><span className="badge text-white bg-danger">3</span></sup>
                  </Link>
                  
                </Col>

                <Col className="p-1 mt-1" style={{ width: '700px', float: "right" }}>
                  {buttons}    
                </Col>

              </Row>
              {this.searchRedirect()}
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