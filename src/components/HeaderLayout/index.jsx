import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../../views/Home'
import ItemDetail from '../../views/ItemDetail'
import Discover from '../../views/Discover'
import Favorites from '../../views/Favorites'
import WatchLaters from '../../views/WatchLaters'

export default class HeaderLayout extends Component {
  state = {
    color: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({ color: '#212121' })
    } else {
      this.setState({ color: 'transparent' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <>
        <Header color={this.state.color} />
        <Switch>
          <Route exact path='/details/:itemId' component={ItemDetail} />
          <Route exact path='/discover' component={Discover} />
          <Route path='/profile/favorites' component={Favorites} />
          <Route path='/profile/watch-later' component={WatchLaters} />
          <Route exact path='/' component={Home} />
          <Route render={() => <div>loading...</div>} />
        </Switch>
        <Footer />
      </>
    )
  }
}
