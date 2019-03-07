import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout'
import HeaderLayout from '../components/HeaderLayout'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/profile' component={Layout} />
            <Route path='/' component={HeaderLayout} />
          </Switch>
        </Router>
      </div>
    )
  }
}
