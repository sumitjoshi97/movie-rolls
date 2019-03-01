import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Footer from '../components/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <>
            <Header />
            <Route exact path='/details/:itemId' component={ItemDetail} />
            <Route exact path='/' component={Home} />
            <Footer />
          </>
        </Router>
      </div>
    )
  }
}
