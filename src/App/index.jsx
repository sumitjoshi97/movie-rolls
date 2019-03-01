import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout'
import HeaderLayout from '../components/HeaderLayout'

import Header from '../components/Header'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Auth from '../views/Auth'
import Footer from '../components/Footer'

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
