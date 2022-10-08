import React, { Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import About from '../components/home/others/about'

export class AboutPage extends Component {
  render() {
    return (
      <>
            <div className="Desktop">
            <NavMenuDesktop />
            </div>
    
            <div className="Mobile">
              <NavMenuMobile />
            </div>
    
            <About />
    
            <div className="Desktop">
            <FooterDesktop />
            </div>
    
            <div className="Mobile">
              <FooterMobile />
            </div>
          </>
    )
  }
}

export default AboutPage