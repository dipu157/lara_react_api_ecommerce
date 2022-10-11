import React, { Component } from 'react'
import OrderList from '../components/Cart/OrderList'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

export class OrderListPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }

  render() {
    return (
        <>
        <div className="Desktop">
        <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <OrderList />

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

export default OrderListPage
