import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../../views/Home'
import ItemDetail from '../../views/ItemDetail'
import Discover from '../../views/Discover'
import Favorites from '../../views/Favorites'
import WatchLaters from '../../views/WatchLaters'
import SearchResults from '../../views/SearchResults'

export default class HeaderLayout extends Component {
  state = {
    color: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 40) {
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
          <Route
            path='/search-results/:searchQuery'
            component={SearchResults}
          />
          <Route path='/details/:itemId' component={ItemDetail} />
          <Route path='/discover' component={Discover} />
          <Route path='/profile/favorites' component={Favorites} />
          <Route path='/profile/watch-later' component={WatchLaters} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </>
    )
  }
}
