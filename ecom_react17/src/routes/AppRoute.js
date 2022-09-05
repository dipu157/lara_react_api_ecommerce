import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../pages/HomePage'

class AppRoute extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route exact to="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default AppRoute