import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute'

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </>
    )
  }
}

export default App