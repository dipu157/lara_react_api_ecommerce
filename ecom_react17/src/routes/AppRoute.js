import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import PurchasePage from '../pages/PurchasePage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import NotificationPage from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'

class AppRoute extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route path="/login" component={UserLoginPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/purchase" component={PurchasePage} />
            <Route path="/productdetails" component={ProductDetailsPage} />
            <Route path="/notification" component={NotificationPage} />
            <Route path="/favourite" component={FavouritePage} />
            <Route path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default AppRoute