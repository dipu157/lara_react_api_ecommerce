import React, { Component } from 'react'
import {Container, Navbar } from 'react-bootstrap';

class NavMenuDesktop extends Component {
  render() {
    return (
      <div className='TopSectionDown'>
        <Navbar fixed={'top'} bg="dark">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    )
  }
}

export default NavMenuDesktop