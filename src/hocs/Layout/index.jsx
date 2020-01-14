import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Layout extends Component {
  state = {
    color: 'transparent',
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
      <div>
        {this.props.location.pathname !== '/auth' ? (
          <Header color={this.state.color} />
        ) : (
          ''
        )}
        <main>{this.props.children}</main>
        {this.props.location.pathname !== '/auth' ? <Footer /> : ''}
      </div>
    )
  }
}

export default withRouter(Layout)
