import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import HeaderLayout from '../components/HeaderLayout'

import * as actions from '../actions'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
  }

  fetchLists = () => {
    if (this.props.user) {
      this.props.fetchList('watch', this.props.user.uid)
      this.props.fetchList('favorite', this.props.user.uid)
    }
  }

  render() {
    return (
      <div className='app'>
        {this.fetchLists()}
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

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser()),
  fetchList: (type, userId) => dispatch(actions.fetchList(type, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
