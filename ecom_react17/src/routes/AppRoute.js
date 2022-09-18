import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import PurchasePage from '../pages/PurchasePage'

class AppRoute extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route path="/login" component={UserLoginPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/purchase" component={PurchasePage} />
            <Route path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default AppRoute