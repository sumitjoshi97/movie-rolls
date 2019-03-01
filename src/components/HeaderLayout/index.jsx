import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../../views/Home'
import ItemDetail from '../../views/ItemDetail'
// import Profile from '../../views/Profile'
import Discover from '../../views/Discover'

export default class HeaderLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/details/:itemId' component={ItemDetail} />
          {/* <Route exact path='/profile' component={Profile} /> */}
          <Route exact path='/discover' component={Discover} />
          <Route exact path='/' component={Home} />
          <Route render={() => <div>loading...</div>} />
        </Switch>
        <Footer />
      </>
    )
  }
}
